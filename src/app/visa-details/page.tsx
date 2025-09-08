"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import jsPDF from "jspdf";
// This extends the jsPDF prototype
import "jspdf-autotable";
import Generate from "./GeneratePdf/Generate";

// Import with dynamic imports to avoid SSR issues
const VisaDetails = () => {
  const searchParams = useSearchParams();
  const [visaData, setVisaData] = useState<any>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const data = searchParams.get("data");
    if (data) {
      try {
        setVisaData(JSON.parse(decodeURIComponent(data)));
      } catch (err) {
        console.error("Error parsing visa data:", err);
        setError("Failed to load visa details");
      }
    }
  }, [searchParams]);

  const downloadPDF = async () => {
    if (!visaData) return;

    setIsGenerating(true);
    setError("");

    try {
      // Create new PDF document
      const doc = new jsPDF();

      // ... rest of the code remains the same
      (doc as any).autoTable({
        // ... autoTable options
      });

      // Save the PDF
      doc.save("visa-details.pdf");
    } catch (err) {
      console.error("Error generating PDF:", err);
      setError("Failed to generate PDF. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };
  if (error) {
    return (
      <div className="p-4">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      </div>
    );
  }

  if (!visaData) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-blue-800">
        Visa Details Check
      </h2>
      <Generate data={visaData} />
      {/* Table Display */}
      <div className="bg-white p-4 mb-6 border border-gray-200 rounded-lg shadow-sm">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-3 text-left">Field</th>
              <th className="p-3 text-left">Value</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(visaData).map(([key, value], index) => (
              <tr
                key={key}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="p-3 font-semibold capitalize border border-gray-200">
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </td>
                <td className="p-3 border border-gray-200">{String(value)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Download Button */}
      <button
        onClick={downloadPDF}
        disabled={isGenerating}
        className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
      >
        {isGenerating ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Generating PDF...
          </>
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download PDF
          </>
        )}
      </button>

      <div className="mt-4 text-sm text-gray-600">
        Using jsPDF with AutoTable for reliable PDF generation.
      </div>
    </div>
  );
};

export default VisaDetails;
