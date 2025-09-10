"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const VisaHolder = () => {
  const [documentType, setDocumentType] = useState("");
  const [referenceType, setReferenceType] = useState("");
  const [immiCardNumber, setImmiCardNumber] = useState("");
  const [visaGrantNumber, setVisaGrantNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [passportNumber, setPassportNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleDocumentTypeChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setDocumentType(e.target.value);
    setReferenceType("");
    setVisaGrantNumber("");
    setDateOfBirth("");
    setImmiCardNumber("");
    setPassportNumber("");
  };

  const getReferenceLabel = () => {
    switch (referenceType) {
      case "Transaction Reference Number":
        return "Transaction Reference Number";
      case "Visa Evidence Number":
        return "Visa Evidence Number";
      case "Visa Grant Number":
        return "Visa Grant Number";
      default:
        return "Reference Number";
    }
  };

const handleSubmit = async () => {
  setIsSubmitting(true);
  try {
    const body = {
      visaGrantNumber,
      dateOfBirth,
      passportNumber: immiCardNumber || passportNumber,
    };

    const res = await fetch(
      "https://visa-consultancy-backend.onrender.com/api/visas/search",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );

    const data = await res.json();
    console.log("Search result:", data);

    // ✅ Check for backend "msg" response
    if (!data || data.error || data.msg || data.length === 0) {
      Swal.fire({
        icon: "error",
        title: "No Match Found",
        text:
          data?.msg ||
          "The information you entered does not match any visa records.",
      });
      return; // ❌ Stop here, no redirect
    }

    // ✅ Redirect only when real visa data is found
    router.push(
      `/visa-details?data=${encodeURIComponent(JSON.stringify(data))}`
    );
  } catch (err) {
    console.error("Error searching visa:", err);
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Something went wrong while searching. Please try again later.",
    });
  } finally {
    setIsSubmitting(false);
  }
};

  const handleClear = () => {
    setDocumentType("");
    setReferenceType("");
    setVisaGrantNumber("");
    setDateOfBirth("");
    setImmiCardNumber("");
    setPassportNumber("");
  };

  return (
    <div className="bg-gray-100 mt-10 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full m-5">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">
          Visa holder enquiry
        </h2>
        <p className="text-gray-600 mb-4">
          Please complete the following details to view your visa entitlements.
        </p>
        <p className="text-black text-sm mb-4">
          Fields marked <span className="text-red-500">*</span> must be
          completed.
        </p>

        {/* Document Type */}
        <div className="mb-4 flex items-center">
          <label
            className="block text-gray-700 text-sm font-bold mb-2 w-[500px]"
            htmlFor="documentType"
          >
            Document type <span className="text-red-500">*</span>
          </label>
          <select
            value={documentType}
            onChange={handleDocumentTypeChange}
            className="shadow border rounded w-fit py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="documentType"
          >
            <option value="">Please choose a document type</option>
            <option value="dftta">DFTTA</option>
            <option value="immicard">ImmiCard</option>
            <option value="passport">Passport</option>
            <option value="plo56">PLO56 (M56)</option>
            <option value="other">Titre de Voyage</option>
          </select>
        </div>

        {documentType && (
          <>
            {/* Reference Type */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="referenceType"
              >
                Reference type <span className="text-red-500">*</span>
              </label>
              <select
                className="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="referenceType"
                value={referenceType}
                onChange={(e) => setReferenceType(e.target.value)}
              >
                <option value="">Please choose a reference type</option>
                <option value="Transaction Reference Number">
                  Transaction Reference Number (TRN)
                </option>
                <option value="Visa Evidence Number">
                  Visa Evidence Number
                </option>
                <option value="Visa Grant Number">Visa Grant Number</option>
              </select>
            </div>

            {/* Reference Number */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="visaGrantNumber"
              >
                {getReferenceLabel()} <span className="text-red-500">*</span>
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="visaGrantNumber"
                type="text"
                value={visaGrantNumber}
                onChange={(e) => setVisaGrantNumber(e.target.value)}
              />
            </div>

            {/* Date of Birth */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="dateOfBirth"
              >
                Date of birth <span className="text-red-500">*</span>
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="dateOfBirth"
                type="date"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
              />
            </div>

            {/* Passport Number */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="immiCardNumber"
              >
                Passport number <span className="text-red-500">*</span>
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="immiCardNumber"
                type="text"
                value={immiCardNumber}
                onChange={(e) => setImmiCardNumber(e.target.value)}
              />
            </div>
          </>
        )}

        {/* Buttons */}
        <div className="flex justify-between gap-3">
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={`cursor-pointer py-[9px] px-[15px] text-white text-base font-semibold rounded ${
              isSubmitting ? "bg-gray-400" : "bg-[#155DFC]"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="cursor-pointer py-[9px] px-[15px] bg-red-500 text-white text-base font-semibold rounded"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default VisaHolder;
