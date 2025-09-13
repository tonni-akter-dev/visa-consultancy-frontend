"use client";
import React, { Suspense } from "react";
import VisaDetails from "./GeneratePdf/VisaDetails";

const VisaDetailsPage = () => {
  return (
    <Suspense fallback={<div className="p-4">Loading...</div>}>
      <VisaDetails />
    </Suspense>
  );
};

export default VisaDetailsPage;
