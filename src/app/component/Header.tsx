"use client";

import Link from "next/link";
import React from "react";
import { SlArrowDown } from "react-icons/sl";

export default function Header() {
    return (
        <header className="bg-[#101B3B] text-white">
            <nav className="lg:px-[145px] w-full h-[58px] mx-auto  relative  flex justify-between items-center">
                <ul className="flex items-center ">
                    <li className="p-[17px] text-base  font-medium">
                        <Link href="/" className="">Home</Link>
                    </li>
                    <li className="p-[17px] text-base  font-medium  group cursor-pointer hover:bg-[#4174FF] transition-all ease-in-out duration-300 ">
                        <button className="flex items-center gap-1 ">
                            Travel Requirements <SlArrowDown />
                        </button>
                        <div className="absolute left-0 top-full w-full bg-white text-black shadow-lg rounded-lg transform translate-x-[-50%] md:translate-x-0 hidden group-hover:block">
                            <ul className="grid grid-cols-3 gap-4 p-4 max-w-screen-xl mx-auto">
                                <li className="p-4 hover:bg-green-100">
                                    <Link href="/travel-guide" className="block font-bold">Travel Guide</Link>
                                    <p className="text-sm text-gray-500">Explore travel essentials.</p>
                                </li>
                                <li className="p-4 hover:bg-yellow-100">
                                    <Link href="/visa-info" className="block font-bold">Visa Information</Link>
                                    <p className="text-sm text-gray-500">Learn about visa requirements.</p>
                                </li>
                                <li className="p-4 hover:bg-red-100">
                                    <Link href="/travel-tips" className="block font-bold">Travel Tips</Link>
                                    <p className="text-sm text-gray-500">Useful tips for travelers.</p>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="p-[17px] text-base  font-medium cursor-pointer hover:bg-[#4174FF] transition-all ease-in-out duration-300 ">
                        <Link href="https://immigration.gov.fj/about-us/" className=" ">About Us</Link>
                    </li>
                    <li className=" p-[17px] text-base  font-medium group cursor-pointer hover:bg-[#4174FF] transition-all ease-in-out duration-300 ">
                        <button className="flex items-center gap-1">
                            Media <SlArrowDown />

                        </button>
                        <div className="absolute left-0 top-full w-screen bg-white text-black shadow-lg rounded-lg transform translate-x-[-50%] md:translate-x-0 hidden group-hover:block">
                            <ul className="grid grid-cols-3 gap-4 p-4 max-w-screen-xl mx-auto">
                                <li className="p-4 hover:bg-blue-100">
                                    <Link href="/news" className="block font-bold">News</Link>
                                    <p className="text-sm text-gray-500">Latest news updates.</p>
                                </li>
                                <li className="p-4 hover:bg-purple-100">
                                    <Link href="/press-releases" className="block font-bold">Press Releases</Link>
                                    <p className="text-sm text-gray-500">Official press statements.</p>
                                </li>
                                <li className="p-4 hover:bg-indigo-100">
                                    <Link href="/videos" className="block font-bold">Videos</Link>
                                    <p className="text-sm text-gray-500">Watch our latest videos.</p>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="p-[17px] text-base  font-medium  group cursor-pointer hover:bg-[#4174FF] transition-all ease-in-out duration-300 ">
                        <button className="flex items-center gap-1">
                            Careers <SlArrowDown />
                        </button>
                        <div className="absolute left-0 top-full w-screen bg-white text-black shadow-lg rounded-lg transform translate-x-[-50%] md:translate-x-0 hidden group-hover:block">
                            <ul className="grid grid-cols-3 gap-4 p-4 max-w-screen-xl mx-auto">
                                <li className="p-4 hover:bg-teal-100">
                                    <Link href="/omrs-guide" className="block font-bold">OMRS Guide</Link>
                                    <p className="text-sm text-gray-500">Need to know more?</p>
                                </li>
                                <li className="p-4 hover:bg-orange-100">
                                    <Link href="/open-vacancies" className="block font-bold">Open Vacancies</Link>
                                    <p className="text-sm text-gray-500">See our latest vacancies.</p>
                                </li>
                                <li className="p-4 hover:bg-pink-100">
                                    <Link href="/career-tips" className="block font-bold">Career Tips</Link>
                                    <p className="text-sm text-gray-500">Advice for your career path.</p>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="p-[17px] text-base  font-medium cursor-pointer hover:bg-[#4174FF] transition-all ease-in-out duration-300 ">
                        <Link href="https://immigration.gov.fj/contact-us/" className="">Contact Us</Link>
                    </li>
                    <li className="p-[17px] text-base  font-medium cursor-pointer hover:bg-[#4174FF] transition-all ease-in-out duration-300 ">
                        <Link href="https://www.immigration.gov.fj/fiji-country-signing-certificate-authority-csca/" className="">Fiji CSCA</Link>
                    </li>
                </ul>
                <Link
                    href="/immi-hub"
                    className="text-sm font-medium uppercase bg-[#4174FF] border-[2px] border-[#4174FF] hover:bg-transparent  text-white px-5 h-full hover:text-[#4174FF] flex justify-center items-center duration-300 ease-in-out transition-all"
                >
                    IMMI HUB
                </Link>
            </nav>
        </header>
    );
}