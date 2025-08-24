import React from 'react';
import logo from '../../../public/logo.png';
import Image from 'next/image';
import { IoSearch } from "react-icons/io5";

const TopHeader = () => {
  return (
   <div className='h-[117px] ' style={{
            backgroundImage: "url('https://www.immigration.gov.fj/wp-content/uploads/2023/04/Header-1.svg')",
        }}>
            <div className='max-w-[1230px] mx-auto py-4 flex items-center justify-between '>
                <div className='flex gap-4 items-center'>
                    <Image className='size-20' src={logo} alt="" />
                    <div className='border-l border-[]'>
                        <h1 className='ps-5 text-[26px] leading-[26px] font-bold text-[#101B3B]'>Ministry of <br /> Immigration - Fiji</h1>
                    </div>
                </div>
                <div className="lg:mr-10">
                    <div className="relative bg-white w-[265px] h-10 border border-[#101B3B]">
                        <input
                            type="search"
                            placeholder="Search Website"
                            className="w-full px-4 py-2 focus:outline-none  text-[#4174FF] placeholder-[#4174FF] pr-10"
                        />
                        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500">
                            <IoSearch />

                        </button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default TopHeader