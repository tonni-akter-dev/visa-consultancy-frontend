'use client'
import React, { useRef, useEffect, useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import {useSearchParams } from 'next/navigation';

const VisaDetails = () => {
  const pdfRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
  const [visaData, setVisaData] = useState(null);

  useEffect(() => {
    const data = searchParams.get('data');
    if (data) {
      setVisaData(JSON.parse(data));
    }
  }, [searchParams]);

  const downloadPDF = async () => {
    if (!pdfRef.current) return;

    const canvas = await html2canvas(pdfRef.current, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const imgWidth = 190; // fit within A4
    // const pageHeight = pdf.internal.pageSize.height;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    const position = 10;
    pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);

    pdf.save("visa-details.pdf");
  };

  if (!visaData) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Visa Details Check</h2>

      {/* Table to Export */}
      <div ref={pdfRef} className="bg-white p-4">
        <table className="w-full border-collapse border border-gray-300">
          <tbody>
            {Object.entries(visaData).map(([key, value]) => (
              <tr key={key} className="border-b border-gray-300">
                <td className="p-2 font-semibold capitalize">
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </td>
                <td className="p-2">{String(value)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Download Button */}
      <button
        onClick={downloadPDF}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Download PDF
      </button>
    </div>
  );
};

export default VisaDetails;