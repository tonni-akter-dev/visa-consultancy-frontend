// 'use client'
// import React from 'react'
// import { FaLocationDot } from "react-icons/fa6";
// import { FaPhoneAlt } from "react-icons/fa";
// import { MdOutlineEmail } from "react-icons/md";
// import { IoMdArrowDropright } from "react-icons/io";

// const Footer = () => {
//     return (
//         <footer className="bg-[#101B3B] text-white mt-10 py-8">
//             <div className="max-w-[1230px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-5">
//                 <div>
//                     <h3 className="font-bold text-xl mb-2.5">Ministry of Immigration - Fiji</h3>
//                     <p className="text-base mb-6">We offer a range of visas to help those who can contribute to Fiji, visit, work, study, live or invest here.</p>
//                     <div className="text-base">
//                         <p className="flex items-center mb-3.5 gap-1"><FaLocationDot className='text-[#4174FF] text-[14px]' />
//                             40 Robertson Rd, Suva</p>
//                         <p className="flex items-center mb-3.5 gap-1"><FaPhoneAlt className='text-[#4174FF] text-[14px]' />
//                             +679 331 2622</p>
//                         <p className="flex items-center mb-3.5 gap-1"><MdOutlineEmail className='text-[#4174FF] text-[14px]' />
//                             fidqueries@gmail.com</p>
//                     </div>
//                 </div>
//                 <div>
//                     <h3 className="font-medium text-xl mb-5">Quick Links</h3>
//                     <div className='flex gap-1 items-center mb-5'>
//                         <div className='h-[4px] w-[25px] bg-[#4174FF]'></div>
//                         <div className='h-[4px] w-[50px] bg-[#4174FF]'></div>
//                     </div>
//                     <ul className="text-base leading-6 space-y-1.5">
//                         <li><a href="https://www.immigration.gov.fj/about-us/" className="flex gap-1 items-center"><IoMdArrowDropright className='text-[#4174FF] ' />
//                             About Us</a></li>
//                         <li><a href="https://www.immigration.gov.fj/frequently-asked-questions/" className="flex gap-1 items-center"><IoMdArrowDropright className='text-[#4174FF] ' />
//                             FAQs</a></li>
//                         <li><a href="https://www.immigration.gov.fj/privacy-policy/" className="flex gap-1 items-center"><IoMdArrowDropright className='text-[#4174FF] ' />
//                             Privacy Policy</a></li>
//                         <li><a href="https://www.immigration.gov.fj/vacancies" className="flex gap-1 items-center"><IoMdArrowDropright className='text-[#4174FF] ' />
//                             Vacancies</a></li>
//                         <li><a href="https://www.immigration.gov.fj/contact-us/" className="flex gap-1 items-center"><IoMdArrowDropright className='text-[#4174FF] ' />
//                             Contact Us</a></li>
//                         <li><a href="https://www.immigration.gov.fj/gallery/" className="flex gap-1 items-center"><IoMdArrowDropright className='text-[#4174FF] ' />
//                             Gallery</a></li>
//                     </ul>
//                 </div>
//                 <div>
//                     <h3 className="font-medium text-xl mb-5">Travel Requirements</h3>
//                     <div className='flex gap-1 items-center mb-5'>
//                         <div className='h-[4px] w-[25px] bg-[#4174FF]'></div>
//                         <div className='h-[4px] w-[50px] bg-[#4174FF]'></div>
//                     </div>
//                     <ul className="text-base leading-6 space-y-1.5">
//                         <li><a href="https://immigration.gov.fj/entering-fiji/" className="flex gap-1 items-center">
//                             <IoMdArrowDropright className='text-[#4174ff]' />
//                             Entering Fiji</a></li>
//                         <li><a href="https://immigration.gov.fj/departing-fiji/" className="flex gap-1 items-center">
//                             <IoMdArrowDropright className='text-[#4174ff]' />
//                             Departing Fiji</a></li>
//                         <li><a href="https://immigration.gov.fj/uplift-of-prohibited-immigrant-pi-status/" className="flex gap-1 items-center">
//                             <IoMdArrowDropright className='text-[#4174ff]' />
//                             Uplifting PI Status</a></li>
//                         <li><a href="https://www.immigration.gov.fj/visa-exempted-countries/" className="flex gap-1 items-center">
//                             <IoMdArrowDropright className='text-[#4174ff]' />
//                             VISA Exempted Countries</a></li>
//                         <li><a href="https://www.immigration.gov.fj/application-forms-publications-fees/" className="flex gap-1 items-center">
//                             <IoMdArrowDropright className='text-[#4174ff]' />
//                             Forms & Fees</a></li>
//                         <li><a href="https://www.immigration.gov.fj/guidelines-for-passport-photographs/" className="flex gap-1 items-center">
//                             <IoMdArrowDropright className='text-[#4174ff]' />
//                             Passport Photo Guidelines</a></li>
//                     </ul>
//                 </div>
//                 <div>
//                     <h3 className="font-medium text-xl mb-5">Newsletters</h3>
//                     <div className='flex gap-1 items-center mb-5'>
//                         <div className='h-[4px] w-[25px] bg-[#4174FF]'></div>
//                         <div className='h-[4px] w-[50px] bg-[#4174FF]'></div>
//                     </div>
//                     <p className="text-base leading-6 ">Subscribe and get the latest update and news and stay connected.</p>
//                     <div className="mt-2 flex flex-col max-w-[260px] w-full">
//                         <input type="email" placeholder="Email" className="p-2 border border-white rounded-[8px] mb-2 w-full" />
//                         <button className="bg-[#4174FF] text-base font-semibold w-[150px] text-white py-2 px-4 rounded-[8px] ">Subscribe Now</button>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     )
// }

// export default Footer
'use client'
import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";

const Footer = () => {
    return (
        <footer className="bg-[#101B3B] text-white mt-10 py-8">
            <div className="max-w-[1230px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 px-4">
                <div>
                    <h3 className="font-bold text-xl mb-2.5">Ministry of Immigration - Fiji</h3>
                    <p className="text-base mb-6">We offer a range of visas to help those who can contribute to Fiji, visit, work, study, live or invest here.</p>
                    <div className="text-base">
                        <p className="flex items-center mb-3.5 gap-1"><FaLocationDot className='text-[#4174FF] text-[14px]' />
                            40 Robertson Rd, Suva</p>
                        <p className="flex items-center mb-3.5 gap-1"><FaPhoneAlt className='text-[#4174FF] text-[14px]' />
                            +679 331 2622</p>
                        <p className="flex items-center mb-3.5 gap-1"><MdOutlineEmail className='text-[#4174FF] text-[14px]' />
                            fidqueries@gmail.com</p>
                    </div>
                </div>
                <div>
                    <h3 className="font-medium text-xl mb-5">Quick Links</h3>
                    <div className='flex gap-1 items-center mb-5'>
                        <div className='h-[4px] w-[25px] bg-[#4174FF]'></div>
                        <div className='h-[4px] w-[50px] bg-[#4174FF]'></div>
                    </div>
                    <ul className="text-base leading-6 space-y-1.5">
                        <li><a href="https://www.immigration.gov.fj/about-us/" className="flex gap-1 items-center"><IoMdArrowDropright className='text-[#4174FF]' />
                            About Us</a></li>
                        <li><a href="https://www.immigration.gov.fj/frequently-asked-questions/" className="flex gap-1 items-center"><IoMdArrowDropright className='text-[#4174FF]' />
                            FAQs</a></li>
                        <li><a href="https://www.immigration.gov.fj/privacy-policy/" className="flex gap-1 items-center"><IoMdArrowDropright className='text-[#4174FF]' />
                            Privacy Policy</a></li>
                        <li><a href="https://www.immigration.gov.fj/vacancies" className="flex gap-1 items-center"><IoMdArrowDropright className='text-[#4174FF]' />
                            Vacancies</a></li>
                        <li><a href="https://www.immigration.gov.fj/contact-us/" className="flex gap-1 items-center"><IoMdArrowDropright className='text-[#4174FF]' />
                            Contact Us</a></li>
                        <li><a href="https://www.immigration.gov.fj/gallery/" className="flex gap-1 items-center"><IoMdArrowDropright className='text-[#4174FF]' />
                            Gallery</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-medium text-xl mb-5">Travel Requirements</h3>
                    <div className='flex gap-1 items-center mb-5'>
                        <div className='h-[4px] w-[25px] bg-[#4174FF]'></div>
                        <div className='h-[4px] w-[50px] bg-[#4174FF]'></div>
                    </div>
                    <ul className="text-base leading-6 space-y-1.5">
                        <li><a href="https://immigration.gov.fj/entering-fiji/" className="flex gap-1 items-center">
                            <IoMdArrowDropright className='text-[#4174ff]' />
                            Entering Fiji</a></li>
                        <li><a href="https://immigration.gov.fj/departing-fiji/" className="flex gap-1 items-center">
                            <IoMdArrowDropright className='text-[#4174ff]' />
                            Departing Fiji</a></li>
                        <li><a href="https://immigration.gov.fj/uplift-of-prohibited-immigrant-pi-status/" className="flex gap-1 items-center">
                            <IoMdArrowDropright className='text-[#4174ff]' />
                            Uplifting PI Status</a></li>
                        <li><a href="https://www.immigration.gov.fj/visa-exempted-countries/" className="flex gap-1 items-center">
                            <IoMdArrowDropright className='text-[#4174ff]' />
                            VISA Exempted Countries</a></li>
                        <li><a href="https://www.immigration.gov.fj/application-forms-publications-fees/" className="flex gap-1 items-center">
                            <IoMdArrowDropright className='text-[#4174ff]' />
                            Forms & Fees</a></li>
                        <li><a href="https://www.immigration.gov.fj/guidelines-for-passport-photographs/" className="flex gap-1 items-center">
                            <IoMdArrowDropright className='text-[#4174ff]' />
                            Passport Photo Guidelines</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-medium text-xl mb-5">Newsletters</h3>
                    <div className='flex gap-1 items-center mb-5'>
                        <div className='h-[4px] w-[25px] bg-[#4174FF]'></div>
                        <div className='h-[4px] w-[50px] bg-[#4174FF]'></div>
                    </div>
                    <p className="text-base leading-6">Subscribe and get the latest update and news and stay connected.</p>
                    <div className="mt-2 flex flex-col max-w-[260px] w-full">
                        <input type="email" placeholder="Email" className="p-2 border border-white rounded-[8px] mb-2 w-full sm:w-auto" />
                        <button className="bg-[#4174FF] text-base font-semibold w-full sm:w-[150px] text-white py-2 px-4 rounded-[8px]">Subscribe Now</button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer