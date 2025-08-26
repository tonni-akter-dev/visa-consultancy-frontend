'use client'
import React, { useState } from 'react';
import { FaArrowAltCircleRight } from "react-icons/fa";
import Companies from './Companies';

const EnquiryForm = () => {
    const [activeTab, setActiveTab] = useState('Enquiries');
    const [formData, setFormData] = useState({
        enquiryType: 'Passport',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e: { preventDefault: () => void; target: { name: string; value: string; }; }) => {
        e.preventDefault();
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div style={{ backgroundImage: "url('https://www.immigration.gov.fj/wp-content/uploads/2023/11/Credit_-Chris-McLennan-3.jpg)" }}>
            <div className=" lg:ps-[145px] max-w-[50%] p-6 bg-[#101B3B]   text-white ">
                <div className="flex">
                    <button
                        className={`flex gap-1 items-center  text-base py-2.5 px-5 ${activeTab === 'Enquiries' ? 'bg-[#4174FF] text-white' : ' text-black bg-white'} `}
                        onClick={() => setActiveTab('Enquiries')}
                    >
                        <FaArrowAltCircleRight className={`${activeTab === 'Enquiries' ? ' text-white' : 'text-black '}`} size={16} />
                        Enquiries
                    </button>
                    <button
                        className={`flex gap-1 items-center text-base  py-2.5 px-5 text-black ${activeTab === 'Complaints' ? 'bg-[#4174FF] text-white' : 'text-black bg-white'} `}
                        onClick={() => setActiveTab('Complaints')}
                    >
                        <FaArrowAltCircleRight className={`${activeTab === 'Complaints' ? ' text-white' : 'text-black '}`} size={16} />

                        Complaints
                    </button>
                </div>
                <div className="p-8 border">
                    {activeTab === 'Enquiries' ? (
                        <>
                            <h2 className="text-[32px] leading-8 font-semibold mb-5">General Enquiries</h2>
                            <p className="mb-5">Fill out the form below and we will contact you as soon as possible. You may follow up on your application after 30 working days.</p>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-5">
                                    <label className="block text-sm font-medium text-white">Please select what your enquiry is in relation to *</label>
                                    <select
                                        name="enquiryType"
                                        value={formData.enquiryType}
                                        onChange={handleChange}
                                        className="w-full p-2 mt-1  border border-white rounded"
                                    >
                                        <option value="Passport">Passport</option>
                                        <option value="Visa">Visa</option>
                                        <option value="Permit">Permit</option>
                                        <option value="Citizenship">Citizenship</option>
                                        <option value="Bond">Bond</option>
                                        <option value="PI Lift">PI Lift</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div className="mb-5 flex space-x-4">
                                    <div className="w-1/2">
                                        <label className="block text-sm font-medium text-white">Your email address *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full p-2 mt-1  border border-white rounded"
                                            placeholder="Email address"
                                        />
                                    </div>
                                    <div className="w-1/2">
                                        <label className="block text-sm font-medium text-white">Phone Number *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full p-2 mt-1   border border-white rounded"
                                            placeholder="Phone Number"
                                        />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-white">Please write your enquiry *</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full p-2 mt-1  border border-white rounded"
                                        placeholder="Your message"
                                        rows={4}
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="py-[9px] px-[15px] bg-[#155DFC] w-fit hover:bg-white text-whit hover:text-black text-base font-semibold"
                                >
                                    Send
                                </button>
                            </form>
                        </>
                    ) : (

                        <Companies />
                    )}
                </div>
            </div>

        </div>
    );
};

export default EnquiryForm;