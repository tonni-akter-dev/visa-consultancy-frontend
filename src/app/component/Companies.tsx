'use client'
import React, { useState } from 'react';
import { FaArrowAltCircleRight } from "react-icons/fa";

const Companies = () => {

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
        <div>
            <h2 className="text-[32px] leading-8 font-semibold mb-5">Complaints/Report</h2>
            <p className="mb-5">Report any illegal immigration activities.</p>
            <form onSubmit={handleSubmit}>

                <div className="mb-5 flex space-x-4">
                    <div className="w-1/2">
                        <div>
                            <label className="block text-base leading-6 font-base text-white">Name</label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full p-2 mt-1   border border-white rounded"
                                placeholder="Full Name"
                            />
                        </div>
                        <div className="mt-10">
                            <label className="block text-base leading-6 font-base text-white">Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full p-2 mt-7   border border-white rounded"
                                placeholder="Phone Number"
                            />
                        </div>

                        <div className="mb-5">
                            <label className="block text-base leading-6 font-base text-white mt-4">Who or what are you reporting?</label>
                            <div className="mt-1 space-y-1">
                                <label className="flex items-start">
                                    <input
                                        type="checkbox"
                                        name="reportType"
                                        value="suspicious"
                                        onChange={handleChange}
                                        className="mr-2 mt-2"
                                    />
                                    <span>An individual</span>
                                </label>
                                <label className="flex items-start">
                                    <input
                                        type="checkbox"
                                        name="reportType"
                                        value="customs"
                                        onChange={handleChange}
                                        className="mr-2 mt-2"
                                    />
                                    A business or organisation
                                </label>
                                <label className="flex items-start">
                                    <input
                                        type="checkbox"
                                        name="reportType"
                                        value="customs"
                                        onChange={handleChange}
                                        className="mr-2 mt-2"
                                    />
                                    Mail, a package or cargo
                                </label>
                                <label className="flex items-start">
                                    <input
                                        type="checkbox"
                                        name="reportType"
                                        value="customs"
                                        onChange={handleChange}
                                        className="mr-2 mt-2"
                                    />
                                    Vehicle, vessel or aircraft
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <div>
                            <label className="block text-base leading-6 font-base text-white">Your email address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-2 mt-1  border border-white rounded"
                                placeholder="Email address"
                            />
                        </div>
                        <div className="mb-5">
                            <label className="block text-base leading-6 font-base text-white mt-4">What are you reporting?</label>
                            <div className="mt-1 space-y-1">
                                <label className="flex items-start">
                                    <input
                                        type="checkbox"
                                        name="reportType"
                                        value="suspicious"
                                        onChange={handleChange}
                                        className="mr-2 mt-2"
                                    />
                                    <span>Suspicious or illegal immigration or visa activity</span>
                                </label>
                                <label className="flex items-start">
                                    <input
                                        type="checkbox"
                                        name="reportType"
                                        value="customs"
                                        onChange={handleChange}
                                        className="mr-2 mt-2"
                                    />
                                    Suspicious or illegal customs or trade activity
                                </label>
                            </div>
                        </div>
                        <div className="">
                            <label className="block text-base leading-6 font-base text-white">Which category best describes the type of activity you are reporting?</label>
                            <select
                                name="category"
                                // value={formData.category}
                                onChange={handleChange}
                                className="w-full p-2 mt-2 border border-white text-white rounded"
                            >
                                <option className='text-black' value="">Select category</option>
                                <option className='text-black' value="fraudulent_travel_agents">Fraudulent travel/migration agents</option>
                                <option className='text-black' value="forged_travel_documents">Travellers with forged travel documents</option>
                                <option className='text-black' value="tax_evasion">Tax evaders</option>
                                <option className='text-black' value="wrong_work_permits">Workers with no/wrong work permits</option>
                                <option className='text-black' value="over_stayers">Over-stayers</option>
                                <option className='text-black' value="people_smugglers">People smugglers</option>
                                <option className='text-black' value="people_traffickers">People traffickers</option>
                                <option className='text-black' value="goods_smugglers">Goods (includes prohibited) smugglers/traffickers</option>
                                <option className='text-black' value="cyber_criminals">Cyber criminals</option>
                                <option className='text-black' value="money_launderers">Money launderers</option>
                                <option className='text-black' value="sex_tourists">Sex tourists</option>
                                <option className='text-black' value="terrorists">Terrorists</option>
                            </select>
                        </div>
                    </div>

                </div>
                <div className="mb-4">
                    <label className="block text-base leading-6 font-base text-white">Description of the Incident  *</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-2 mt-1  border border-white rounded"
                        placeholder="Description of the Incident "
                        rows={4}
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="py-[9px] px-[15px] bg-[#155DFC] w-fit hover:bg-white text-whit hover:text-black text-base font-semibold"
                >
                    Submit
                </button>
            </form></div>
    )
}

export default Companies