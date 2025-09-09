
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

    // ✅ Add Logo Image (replace with correct path/base64)
    const img = "/pdf_img.jpg"; // put in public folder or convert to base64
    doc.addImage(img, "PNG", 80, 10, 50, 40); // (x, y, width, height)

    // ✅ Add Header Text
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text("REPUBLIC OF FIJI", 105, 60, { align: "center" });
    doc.text("MINISTRY OF HOME AFFAIRS", 105, 68, { align: "center" });
    doc.text("DEPARTMENT OF IMMIGRATION", 105, 76, { align: "center" });

    doc.setFontSize(14);
    doc.text("VISA APPROVAL LETTER", 105, 90, { align: "center" });

    // ✅ Prepare Table Data
    const tableData = Object.entries(data)
      .filter(([key]) => !excludedFields.includes(key))
      .map(([key, value]) => [
        key.replace(/([A-Z])/g, " $1").trim(),
        dateFields.includes(key) ? formatDate(value) : String(value),
      ]);

    autoTable(doc, {
      startY: 100, // leave space after header
      head: [["Field", "Value"]],
      body: tableData,
      theme: "grid",
      styles: { fontSize: 10 },
      headStyles: { fillColor: [255, 255, 255], textColor: [0, 0, 0], fontStyle: "bold" }, // white bg, black text
      alternateRowStyles: { fillColor: [245, 245, 245] },
    });

    // ✅ Save File
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
