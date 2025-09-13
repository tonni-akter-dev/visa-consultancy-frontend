"use client";
import React from "react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { VisaData } from "@/app/utils/utils";

interface GenerateProps {
  data: VisaData;
}

const excludedFields = [
  "_id",
  "createdAt",
  "updatedAt",
  "__v",
  "enter Before Date",
];
const dateFields = ["dateOfBirth", "visaGrantDate", "visaExpiryDate"];

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

// Capitalize first letter of each word
const capitalize = (text: string) =>
  text.replace(/\b\w/g, (char) => char.toUpperCase());

const Generate: React.FC<GenerateProps> = ({ data }) => {
  const generate = () => {
    const doc = new jsPDF();
    const img = "/pdf_img.jpg";
    doc.addImage(img, "PNG", 80, 10, 50, 40);

    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text("REPUBLIC OF FIJI", 105, 60, { align: "center" });
    doc.text("MINISTRY OF HOME AFFAIRS", 105, 68, { align: "center" });
    doc.text("DEPARTMENT OF IMMIGRATION", 105, 76, { align: "center" });

    doc.setFontSize(14);
    doc.text("VISA APPROVAL LETTER", 105, 90, { align: "center" });

    const tableData = Object.entries(data)
      .filter(([key]) => !excludedFields.includes(key))
      .map(([key, value]) => [
        capitalize(key.replace(/([A-Z])/g, " $1").trim()),
        capitalize(
          dateFields.includes(key) ? formatDate(value) : String(value)
        ),
      ]);

    autoTable(doc, {
      startY: 100,
      head: [["Field", "Value"]],
      body: tableData,
      theme: "grid",
      styles: { fontSize: 10 },
      headStyles: {
        fillColor: [255, 255, 255],
        textColor: [0, 0, 0],
        fontStyle: "bold",
      },
      alternateRowStyles: { fillColor: [245, 245, 245] },
      didParseCell: (data) => {
        if (data.section === "body") {
          data.column.index === 0
            ? (data.cell.styles.fontStyle = "bold")
            : (data.cell.styles.fontStyle = "normal");
        }
      },
    });

    const bottomY = doc.lastAutoTable?.finalY
      ? doc.lastAutoTable.finalY + 20
      : 120;
    doc.setFontSize(11);
    doc.text(
      "PAYMENT FOR THIS VISA WILL BE DONE AT THE PORT OF ENTRY AS YOUR ARRIVE.",
      105,
      bottomY,
      { align: "center" }
    );

    doc.save("visa-details.pdf");
  };

  return (
    <div>
      <button
        className="bg-blue-950 p-5 cursor-pointer rounded text-white mb-2"
        onClick={generate}
      >
        Download PDF
      </button>
    </div>
  );
};

export default Generate;
