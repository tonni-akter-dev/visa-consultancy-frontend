"use client";

import Link from "next/link";
import React, { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
    type DropdownType = 'travel' | 'media' | 'career' | null;

    const [menuOpen, setMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<DropdownType>(null);

    const toggleDropdown = (dropdown: DropdownType) => {
        setOpenDropdown((prev) => (prev === dropdown ? null : dropdown));
    };

    return (
        <header className="bg-[#101B3B] text-white relative z-50    ">
            <nav className="lg:max-w-[1230px] mx-auto  w-full lg:h-[58px]  relative  flex justify-between items-center">
                <ul className="md:flex hidden items-center ">
                    <li className="p-[17px] text-base  font-medium">
                        <Link href="/" className="">Home</Link>
                    </li>
                    <li className="p-[17px] text-base  font-medium  group cursor-pointer hover:bg-[#4174FF] transition-all ease-in-out duration-300 ">
                        <button className="flex items-center gap-1 ">
                            Travel Requirements <SlArrowDown />
                        </button>
                        <div className="absolute left-0 top-full w-full bg-white text-black shadow-lg rounded-lg transform translate-x-[-50%] md:translate-x-0 hidden group-hover:block">
                            <div className=" p-8 max-w-screen-xl mx-auto">
                                <h2 className="text-2xl font-bold mb-5">Travel Requirements</h2>
                                <ul className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4">
                                    <Link href={'https://www.immigration.gov.fj/entering-fiji/'}>   <li className="ps-4 hover:bg-[#DDF3FF] border-t border-b border-b-[#D2D2D2] border-t-[#D2D2D2] h-[86px]">
                                        <div className="block font-bold mt-2 mb-4 text-xl"><strong>Entering Fiji</strong></div>
                                        <p className="text-sm text-gray-500 pb-3.5">Need to enter Fiji?</p>
                                    </li></Link>
                                    <Link href={'https://www.immigration.gov.fj/departing-fiji/'}>  <li className="ps-4 hover:bg-[#DDF3FF] border-t border-b border-b-[#D2D2D2] border-t-[#D2D2D2] h-[86px]">
                                        <div className="block font-bold mt-2 mb-4 text-xl"><strong>Departing Fiji</strong></div>
                                        <p className="text-sm text-gray-500 pb-3.5">Leaving Fiji soon?</p>
                                    </li></Link>
                                    <Link href={'https://immigration.gov.fj/my-immigration-status/'}> <li className="ps-4 hover:bg-[#DDF3FF] border-t border-b border-b-[#D2D2D2] border-t-[#D2D2D2] h-[86px]">
                                        <div className="block font-bold mt-2 mb-4 text-xl"><strong>Uplift of PI Status</strong></div>
                                        <p className="text-sm text-gray-500 pb-3.5">Need to check your PI Status.</p>
                                    </li></Link>
                                    <Link href={'https://www.immigration.gov.fj/entering-fiji/'}>   <li className="ps-4 hover:bg-[#DDF3FF] border-t border-b border-b-[#D2D2D2] border-t-[#D2D2D2] h-[86px]">
                                        <div className="block font-bold mt-2 mb-4 text-xl"><strong>VISA Exempted Countries</strong></div>
                                        <p className="text-sm text-gray-500 pb-3.5">See if a country is on the list.</p>
                                    </li></Link>
                                    <Link href={'https://www.immigration.gov.fj/departing-fiji/'}>  <li className="ps-4 hover:bg-[#DDF3FF] border-t border-b border-b-[#D2D2D2] border-t-[#D2D2D2] h-[86px]">
                                        <div className="block font-bold mt-2 mb-4 text-xl"><strong>Application Forms  & Fees</strong></div>
                                        <p className="text-sm text-gray-500 pb-3.5">Download all forms and documents</p>
                                    </li></Link>
                                    <Link href={'https://immigration.gov.fj/my-immigration-status/'}> <li className="ps-4 hover:bg-[#DDF3FF] border-t border-b border-b-[#D2D2D2] border-t-[#D2D2D2] h-[86px]">
                                        <div className="block font-bold mt-2 mb-4 text-xl"><strong>Passport Photographs</strong></div>
                                        <p className="text-sm text-gray-500 pb-3.5">Guidelines for passport photos.</p>
                                    </li></Link>

                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className="p-[17px] text-base  font-medium cursor-pointer hover:bg-[#4174FF] transition-all ease-in-out duration-300 ">
                        <Link href="https://immigration.gov.fj/about-us/" className=" ">About Us</Link>
                    </li>
                    {/* media */}
                    <li className=" p-[17px] text-base font-medium group cursor-pointer hover:bg-[#4174FF] transition-all ease-in-out duration-300 ">
                        <button className="flex items-center gap-1">
                            Media <SlArrowDown />
                        </button>
                        <div className="absolute left-0 top-full w-full bg-white text-black shadow-lg rounded-lg transform translate-x-[-50%] md:translate-x-0 hidden group-hover:block">
                            <div className=" p-8 max-w-screen-xl mx-auto">
                                <h2 className="text-2xl font-bold mb-5">Media</h2>
                                <ul className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4">
                                    <Link href={'https://immigration.gov.fj/news/'}>
                                        <li className="ps-4 hover:bg-[#DDF3FF] border-t border-b border-b-[#D2D2D2] border-t-[#D2D2D2] h-[86px]">
                                            <div className="block font-bold mt-2 mb-4 text-xl"><strong>News</strong></div>
                                            <p className="text-sm text-gray-500 pb-3.5">Get the latest news.</p>
                                        </li>
                                    </Link>
                                    <Link href={'https://immigration.gov.fj/public-notices/'}>
                                        <li className="ps-4 hover:bg-[#DDF3FF] border-t border-b border-b-[#D2D2D2] border-t-[#D2D2D2] h-[86px]">
                                            <div className="block font-bold mt-2 mb-4 text-xl"><strong>Public Notice</strong></div>
                                            <p className="text-sm text-gray-500 pb-3.5">See our latest Public Notice.</p>
                                        </li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className="p-[17px] text-base  font-medium  group cursor-pointer hover:bg-[#4174FF] transition-all ease-in-out duration-300 ">
                        <button className="flex items-center gap-1">
                            Careers <SlArrowDown />
                        </button>
                        <div className="absolute left-0 top-full w-full bg-white text-black shadow-lg rounded-lg transform translate-x-[-50%] md:translate-x-0 hidden group-hover:block">
                            <div className=" p-8 max-w-screen-xl mx-auto">
                                <h2 className="text-2xl font-bold mb-5">Careers​</h2>
                                <ul className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4">
                                    <Link href={'https://immigration.gov.fj/wp-content/uploads/2023/08/OMRSGuideline2021.pdf'}>
                                        <li className="ps-4 hover:bg-[#DDF3FF] border-t border-b border-b-[#D2D2D2] border-t-[#D2D2D2] h-[86px]">
                                            <div className="block font-bold mt-2 mb-4 text-xl"><strong>OMRS Guide</strong></div>
                                            <p className="text-sm text-gray-500 pb-3.5">Need to know more?</p>
                                        </li>
                                    </Link>
                                    <Link href={'https://immigration.gov.fj/vacancies/'}>
                                        <li className="ps-4 hover:bg-[#DDF3FF] border-t border-b border-b-[#D2D2D2] border-t-[#D2D2D2] h-[86px]">
                                            <div className="block font-bold mt-2 mb-4 text-xl"><strong>Open Vacancies</strong></div>
                                            <p className="text-sm text-gray-500 pb-3.5">See our latest vacancies.</p>
                                        </li>
                                    </Link>
                                    <Link href={'/visa-holder'}>
                                        <li className="ps-4 hover:bg-[#DDF3FF] border-t border-b border-b-[#D2D2D2] border-t-[#D2D2D2] h-[86px]">
                                            <div className="block font-bold mt-2 mb-4 text-xl"><strong>Visa Holder</strong></div>
                                            <p className="text-sm text-gray-500 pb-3.5">See your visa status.</p>
                                        </li>
                                    </Link>
                                </ul>
                            </div>
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
                    href="https://immihub.immigration.gov.fj/FIDPortal/welcome"
                    className="md:flex text-sm font-medium uppercase bg-[#4174FF] border-[2px] border-[#4174FF] hover:bg-transparent  text-white px-5 h-full hover:text-[#4174FF] hidden justify-center items-center duration-300 ease-in-out transition-all">
                    IMMI HUB
                </Link>
            </nav>
            <div className="md:hidden block py-5">
                <Link
                    href="https://immihub.immigration.gov.fj/FIDPortal/welcome"
                    className="flex mb-5 w-fit text-sm font-medium uppercase bg-[#4174FF] border-[2px] border-[#4174FF] hover:bg-transparent  text-white p-5 h-full mx-auto hover:text-[#4174FF] justify-center items-center duration-300 ease-in-out transition-all">
                    IMMI HUB
                </Link>
                <div className="flex justify-between items-center w-full">
                    <h2 className="px-4 text-lg font-medium leading-[18px]">Menu</h2>
                    <button
                        className="md:hidden text-2xl mx-4"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <FiX size={38} /> : <FiMenu size={38} />}
                    </button>
                </div>
            </div>
            {menuOpen && (
                <div className="bg-white text-black px-6 py-4 space-y-3">
                    <ul className="md:hidden flex flex-col items-end">
                        <li className="p-[17px] text-base font-medium">
                            <Link href="/" className="">Home</Link>
                        </li>
                        <li className="p-[17px] text-base font-medium group cursor-pointer hover:bg-[#4174FF] transition-all ease-in-out duration-300">
                            <button
                                className="flex items-center gap-1 w-full text-left"
                                onClick={() => toggleDropdown('travel')}
                            >
                                Travel Requirements <span className="sl-arrow-down"></span>
                            </button>
                            <div className={`absolute left-[50%] top-[53%] w-full bg-white text-black transform translate-x-[-50%] md:translate-x-0 ${openDropdown === 'travel' ? 'block' : 'hidden'} group-hover:block border-t border-[#4174ff]`}>
                                <div className="p-8 max-w-screen-xl mx-auto">
                                    <h2 className="text-2xl font-bold mb-5">Travel Requirements</h2>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        <a href="https://www.immigration.gov.fj/entering-fiji/">
                                            <li className="ps-4 hover:bg-[#DDF3FF] border-t border-b border-b-[#D2D2D2] border-t-[#D2D2D2] h-[86px]">
                                                <div className="block font-bold mt-2 mb-4 text-xl"><strong>Entering Fiji</strong></div>
                                                <p className="text-sm text-gray-500 pb-3.5">Need to enter Fiji?</p>
                                            </li>
                                        </a>
                                        <a href="https://www.immigration.gov.fj/departing-fiji/">
                                            <li className="ps-4 hover:bg-[#DDF3FF] border-t border-b border-b-[#D2D2D2] border-t-[#D2D2D2] h-[86px]">
                                                <div className="block font-bold mt-2 mb-4 text-xl"><strong>Departing Fiji</strong></div>
                                                <p className="text-sm text-gray-500 pb-3.5">Leaving Fiji soon?</p>
                                            </li>
                                        </a>
                                        <a href="https://immigration.gov.fj/my-immigration-status/">
                                            <li className="ps-4 hover:bg-[#DDF3FF] border-t border-b border-b-[#D2D2D2] border-t-[#D2D2D2] h-[86px]">
                                                <div className="block font-bold mt-2 mb-4 text-xl"><strong>Uplift of PI Status</strong></div>
                                                <p className="text-sm text-gray-500 pb-3.5">Need to check your PI Status.</p>
                                            </li>
                                        </a>
                                        <a href="https://www.immigration.gov.fj/entering-fiji/">
                                            <li className="ps-4 hover:bg-[#DDF3FF] border-t border-b border-b-[#D2D2D2] border-t-[#D2D2D2] h-[86px]">
                                                <div className="block font-bold mt-2 mb-4 text-xl"><strong>VISA Exempted Countries</strong></div>
                                                <p className="text-sm text-gray-500 pb-3.5">See if a country is on the list.</p>
                                            </li>
                                        </a>
                                        <a href="https://www.immigration.gov.fj/departing-fiji/">
                                            <li className="ps-4 hover:bg-[#DDF3FF] border-t border-b border-b-[#D2D2D2] border-t-[#D2D2D2] h-[86px]">
                                                <div className="block font-bold mt-2 mb-4 text-xl"><strong>Application Forms & Fees</strong></div>
                                                <p className="text-sm text-gray-500 pb-3.5">Download all forms and documents</p>
                                            </li>
                                        </a>
                                        <a href="https://immigration.gov.fj/my-immigration-status/">
                                            <li className="ps-4 hover:bg-[#DDF3FF] border-t border-b border-b-[#D2D2D2] border-t-[#D2D2D2] h-[86px]">
                                                <div className="block font-bold mt-2 mb-4 text-xl"><strong>Passport Photographs</strong></div>
                                                <p className="text-sm text-gray-500 pb-3.5">Guidelines for passport photos.</p>
                                            </li>
                                        </a>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="p-[17px] text-base font-medium cursor-pointer hover:bg-[#4174FF] transition-all ease-in-out duration-300">
                            <a href="https://immigration.gov.fj/about-us/" className="">About Us</a>
                        </li>
                        {/* Media */}
                        <li className="p-[17px] text-base font-medium group cursor-pointer hover:bg-[#4174FF] transition-all ease-in-out duration-300">
                            <button
                                className="flex items-center gap-1 w-full text-left"
                                onClick={() => toggleDropdown('media')}
                            >
                                Media <span className="sl-arrow-down"></span>
                            </button>
                            <div className={`absolute left-[50%] top-[74%] w-full bg-white text-black transform translate-x-[-50%] md:translate-x-0 ${openDropdown === 'media' ? 'block' : 'hidden'} group-hover:block border-t border-[#4174ff]`}>
                                <div className=" p-8 max-w-screen-xl mx-auto">
                                    <h2 className="text-2xl font-bold mb-5">Media</h2>
                                    <ul className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4">
                                        <Link href={'https://immigration.gov.fj/news/'}>
                                            <li className="ps-4 hover:bg-[#DDF3FF] border-t border-b border-b-[#D2D2D2] border-t-[#D2D2D2] h-[86px]">
                                                <div className="block font-bold mt-2 mb-4 text-xl"><strong>News</strong></div>
                                                <p className="text-sm text-gray-500 pb-3.5">Get the latest news.</p>
                                            </li>
                                        </Link>
                                        <Link href={'https://immigration.gov.fj/public-notices/'}>
                                            <li className="ps-4 hover:bg-[#DDF3FF] border-t border-b border-b-[#D2D2D2] border-t-[#D2D2D2] h-[86px]">
                                                <div className="block font-bold mt-2 mb-4 text-xl"><strong>Public Notice</strong></div>
                                                <p className="text-sm text-gray-500 pb-3.5">See our latest Public Notice.</p>
                                            </li>
                                        </Link>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        {/* Careers */}
                        <li className="p-[17px] text-base font-medium group cursor-pointer hover:bg-[#4174FF] transition-all ease-in-out duration-300">
                            <button className="flex items-center gap-1"
                                onClick={() => toggleDropdown('career')}
                            >
                                Careers <span className="sl-arrow-down"></span>
                            </button>
                            <div className={`absolute left-[50%] top-[84%] w-full bg-white text-black transform translate-x-[-50%] md:translate-x-0 ${openDropdown === 'career' ? 'block' : 'hidden'} group-hover:block border-t border-[#4174ff]`}>
                                <div className="p-8 max-w-screen-xl mx-auto">
                                    <h2 className="text-2xl font-bold mb-5">Careers</h2>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        <a href="https://immigration.gov.fj/wp-content/uploads/2023/08/OMRSGuideline2021.pdf">
                                            <li className="ps-4 hover:bg-[#DDF3FF] border-t border-b border-b-[#D2D2D2] border-t-[#D2D2D2] h-[86px]">
                                                <div className="block font-bold mt-2 mb-4 text-xl"><strong>OMRS Guide</strong></div>
                                                <p className="text-sm text-gray-500 pb-3.5">Need to know more?</p>
                                            </li>
                                        </a>
                                        <a href="https://immigration.gov.fj/vacancies/">
                                            <li className="ps-4 hover:bg-[#DDF3FF] border-t border-b border-b-[#D2D2D2] border-t-[#D2D2D2] h-[86px]">
                                                <div className="block font-bold mt-2 mb-4 text-xl"><strong>Open Vacancies</strong></div>
                                                <p className="text-sm text-gray-500 pb-3.5">See our latest vacancies.</p>
                                            </li>
                                        </a>
                                        <a href="/visa-holder">
                                            <li className="ps-4 hover:bg-[#DDF3FF] border-t border-b border-b-[#D2D2D2] border-t-[#D2D2D2] h-[86px]">
                                                <div className="block font-bold mt-2 mb-4 text-xl"><strong>Visa Holder</strong></div>
                                                <p className="text-sm text-gray-500 pb-3.5">See your visa status.</p>
                                            </li>
                                        </a>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="p-[17px] text-base font-medium cursor-pointer hover:bg-[#4174FF] transition-all ease-in-out duration-300">
                            <a href="https://immigration.gov.fj/contact-us/" className="">Contact Us</a>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}