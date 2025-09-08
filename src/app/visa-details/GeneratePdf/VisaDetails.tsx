"use client";
import React, { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import "jspdf-autotable";
import Generate from "./Generate";
import { formatDate, VisaData } from "@/app/utils/utils";

const VisaDetails = () => {
  const searchParams = useSearchParams();
  const [visaData, setVisaData] = useState<VisaData | null>(null);
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
    <Suspense>
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
              {Object.entries(visaData)
                .filter(
                  ([key]) =>
                    !["_id", "createdAt", "updatedAt", "__v"].includes(key)
                )
                .map(([key, value], index) => (
                  <tr
                    key={key}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="p-3 font-semibold capitalize border border-gray-200">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </td>
                    <td className="p-3 border border-gray-200">
                      {[
                        "dateOfBirth",
                        "visaGrantDate",
                        "visaExpiryDate",
                        "enterBeforeDate",
                      ].includes(key)
                        ? formatDate(value as string | undefined)
                        : String(value)}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </Suspense>
  );
};

export default VisaDetails;
