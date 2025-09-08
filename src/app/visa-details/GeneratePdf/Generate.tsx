"use client";
import React from "react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { VisaData } from "@/app/utils/utils";

interface GenerateProps {
  data: VisaData;
}

const excludedFields = ["_id", "createdAt", "updatedAt", "__v"];
const dateFields = ["dateOfBirth", "visaGrantDate", "visaExpiryDate", "enterBeforeDate"];

// Helper function to format dates
const formatDate = (date: string | undefined) => {
  if (!date) return "";
  const d = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };
  return d.toLocaleDateString("en-GB", options); // "23 Oct 2025"
};

const Generate: React.FC<GenerateProps> = ({ data }) => {
  const generate = () => {
    const doc = new jsPDF();

    const tableData = Object.entries(data)
      .filter(([key]) => !excludedFields.includes(key)) // exclude unwanted fields
      .map(([key, value]) => [
        key.replace(/([A-Z])/g, " $1").trim(), // format key names
        dateFields.includes(key) ? formatDate(value) : String(value), // format date fields
      ]);

    autoTable(doc, {
      head: [["Field", "Value"]],
      body: tableData,
      theme: "grid",
      styles: { fontSize: 10 },
      headStyles: { fillColor: [59, 130, 246], textColor: 255 },
      alternateRowStyles: { fillColor: [240, 240, 240] },
    });

    doc.save("visa-details.pdf");
  };

  return (
    <div>
      <button
        className="bg-blue-950 p-5 cursor-pointer rounded text-white mb-2"
        onClick={generate}>
        Download PDF
      </button>
    </div>
  );
};

export default Generate;
