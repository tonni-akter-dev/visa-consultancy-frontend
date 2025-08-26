'use client'
import React, { useState } from 'react'

const VisaHolder = () => {
    const [documentType, setDocumentType] = useState('');
    const [referenceType, setReferenceType] = useState('');
    const [visaGrantNumber, setVisaGrantNumber] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [immiCardNumber, setImmiCardNumber] = useState('');

    const handleDocumentTypeChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setDocumentType(e.target.value);
        setReferenceType('');
        setVisaGrantNumber('');
        setDateOfBirth('');
        setImmiCardNumber('');
    };

    const getReferenceLabel = () => {
        switch (referenceType) {
            case 'Transaction Reference Number':
                return 'Transaction Reference Number *';
            case 'Visa Evidence Number':
                return 'Visa Evidence Number *';
            case 'Visa Grant Number':
                return 'Visa Grant Number *';
            default:
                return 'Reference Number *';
        }
    };

    return (
        <div className=" bg-gray-100 mt-10 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full m-5">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Visa holder enquiry</h2>
                <p className="text-gray-600 mb-4">Please complete the following details to view your visa entitlements.</p>
                <p className="text-black text-sm mb-4">Fields marked * must be completed.</p>
                <div className="mb-4 flex items-center">
                    <label className="block text-gray-700 text-sm font-bold mb-2 w-[500px]" htmlFor="documentType">
                        Document type *
                    </label>
                    <select
                        value={documentType}
                        onChange={handleDocumentTypeChange}
                        className="shadow appearance-none border rounded w-fit py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="documentType">
                        <option value="">Please choose a document type</option>
                        <option value="passport">DFTTA</option>
                        <option value="passport">ImmiCard</option>
                        <option value="passport">Passport</option>
                        <option value="visa">PLO56 (M56) </option>
                        <option value="other">Titre de Voyage</option>
                    </select>
                </div>

                {documentType && (
                    <>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="referenceType">
                                Reference type *
                            </label>
                            <select
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="referenceType"
                                value={referenceType}
                                onChange={(e) => setReferenceType(e.target.value)}
                            >
                                <option value="">Please choose a reference type</option>
                                <option value="Transaction Reference Number">Transaction Reference Number (TRN) </option>
                                <option value="Visa Evidence Number">Visa Evidence Number (TRN) </option>
                                <option value="Visa Grant Number">Visa Grant Number</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="visaGrantNumber">
                                {getReferenceLabel()}
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="visaGrantNumber"
                                type="text"
                                value={visaGrantNumber}
                                onChange={(e) => setVisaGrantNumber(e.target.value)}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dateOfBirth">
                                Date of birth *
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="dateOfBirth"
                                type="date"
                                value={dateOfBirth}
                                onChange={(e) => setDateOfBirth(e.target.value)}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="immiCardNumber">
                                ImmiCard number *
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
                <button
                    type="submit"
                    className="py-[9px] px-[15px] bg-[#155DFC] w-fit  text-white text-base font-semibold"
                >
                    Submit
                </button>
            </div>
        </div>
    )
}

export default VisaHolder