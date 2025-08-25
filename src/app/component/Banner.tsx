'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import Image from 'next/image';
import banner1 from '../../../public/banner1.jpg';
import banner2 from '../../../public/banner2.jpg';
import banner3 from '../../../public/banner3.jpg';
import banner4 from '../../../public/banner4.jpg';
import banner5 from '../../../public/banner5.jpg';
import Link from 'next/link';

const Banner = () => {
    const images = [
        banner1,
        banner2,
        banner3,
        banner4,
        banner5,
    ];

    return (
        <div className="w-full h-[1500px] md:h-[800px] lg:h-[631px]  bg-gray-900 text-white relative">
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ delay: 5000 }}
                modules={[Autoplay]}
                className="w-full h-full"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index} className="relative w-full h-screen">
                        <Image
                            src={image}
                            alt={`Fiji Background ${index + 1}`}
                            fill
                            className="object-cover"
                            priority={index === 0}
                        />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="absolute z-30 inset-0  flex flex-col justify-center items-center p-4 max-w-[1230px] mx-auto">
                <div className="max-w-6xl w-full">
                    <h1 className="text-[40px] leading-[40px] font-bold mb-5 text-start">I would like to...</h1>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px]  mb-[3rem] items-stretch">
                        <Link href={'https://www.immigration.gov.fj/work-in-fiji/'}>
                            <div className="bg-[#0000009E] px-5 py-[30px] text-start hover:bg-[#4174FF] ease-in-out duration-300 transition-all cursor-pointer">
                                <h2 className="text-[28px] font-bold leading-[28px] mb-5">Work</h2>
                                <p className="text-sm">Apply for work permit</p>
                            </div>
                        </Link>
                        <Link href={'https://immigration.gov.fj/invest-in-fiji/'}>
                            <div className="bg-[#0000009E] px-5 py-[30px] text-start hover:bg-[#4174FF] ease-in-out duration-300 transition-all cursor-pointer">
                                <h2 className="text-[28px] font-bold leading-[28px] mb-5">Invest</h2>
                                <p className="text-sm">Apply for investor permit</p>
                            </div></Link>

                        <Link href={'https://immigration.gov.fj/study-in-fiji-2/'}>
                            <div className="bg-[#0000009E] px-5 py-[30px] text-start hover:bg-[#4174FF] ease-in-out duration-300 transition-all cursor-pointer">
                                <h2 className="text-[28px] font-bold leading-[28px] mb-5">Study</h2>
                                <p className="text-sm">Apply for study permit</p>
                            </div>
                        </Link>
                        <Link href={'https://www.immigration.gov.fj/visit-fiji/'}>
                            <div className="bg-[#0000009E] px-5 py-[30px] text-start hover:bg-[#4174FF] ease-in-out duration-300 transition-all cursor-pointer">
                                <h2 className="text-[28px] font-bold leading-[28px] mb-5">Visit</h2>
                                <p className="text-sm">Apply for Visitors Visa and Permit</p>
                            </div>
                        </Link>

                        <Link href={'https://immigration.gov.fj/fiji-passports/'}>
                            <div className="bg-[#0000009E] px-5 py-[30px] text-start hover:bg-[#4174FF] ease-in-out duration-300 transition-all cursor-pointer">
                                <h2 className="text-[28px] font-bold leading-[28px] mb-5">Travel for Business</h2>
                                <p className="text-sm">Apply for Business Visitor Permit</p>
                            </div></Link>

                        <Link href={'https://www.immigration.gov.fj/residence-on-assured-income-permit-application/'}>
                            <div className="bg-[#0000009E] px-5 py-[30px] text-start hover:bg-[#4174FF] ease-in-out duration-300 transition-all cursor-pointer">
                                <h2 className="text-[28px] font-bold leading-[28px] mb-5">Retire in Fiji</h2>
                                <p className="text-sm">Apply for retirement in Fiji</p>
                            </div></Link>
                    </div>

                    <div className="pt-8 mt-8">
                        <h2 className="text-[40px] leading-[40px] font-bold mb-5 text-start">I already have a visa...</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5">
                            <Link href={'https://immigration.gov.fj/fiji-citizenship/'}>
                                <div className="bg-[#0000009E] px-5 py-[30px] text-start hover:bg-[#4174FF] ease-in-out duration-300 transition-all cursor-pointer">
                                    <h2 className="text-[28px] font-bold leading-[28px] mb-5">I want citizenship</h2>
                                    <p className="text-sm">How do I become a Fiji citizen?</p>
                                </div>
                            </Link>
                            <Link href={'https://immigration.gov.fj/my-immigration-status/'}>
                                <div className="bg-[#0000009E] px-5 py-[30px] text-start hover:bg-[#4174FF] ease-in-out duration-300 transition-all cursor-pointer">
                                    <h2 className="text-[28px] font-bold leading-[28px] mb-5">My Immigration Status</h2>
                                    <p className="text-sm">How can I check my immigration status?</p>
                                </div>
                            </Link>
                            <Link href={'https://www.immigration.gov.fj/fiji-passports/'}>
                                <div className="bg-[#0000009E] px-5 py-[30px] text-start hover:bg-[#4174FF] ease-in-out duration-300 transition-all cursor-pointer">
                                    <h2 className="text-[28px] font-bold leading-[28px] mb-5">New Fiji passport</h2>
                                    <p className="text-sm">How do I get a Fiji passport?</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;