"use client";
import Link from "next/link";
import React, { useState } from "react";
type TabContent = {
    [key: string]: { title: string; desc: string; url: string }[];
};

export default function ImmigrationTab() {
    const [activeTab, setActiveTab] = useState("work");

    const tabs = [
        { id: "visa", label: "Visa & Visitors Permit" },
        { id: "work", label: "Work Permit" },
        { id: "invest", label: "Investor Permit" },
        { id: "study", label: "Study Permit" },
        { id: "residence", label: "Residence Permit" },
        { id: "citizenship", label: "Citizenship" },
        { id: "exemption", label: "Exemption" },
        { id: "status", label: "Immigration Status Search" },
        { id: "uplift", label: "Uplift of PI Status" },
        { id: "bond", label: "Bond" },
        { id: "appeal", label: "Appeal" },
    ];

    const content: TabContent = {
        visa: [
            {
                title: "Visa & Visitors Permit",
                desc: "Visa is a pre entry authority issued to a non-citizen passport holder from non-visa exempted countries.",
                url: "https://immigration.gov.fj/visa-application/"
            },
            {
                title: "Business Visitor Permit ",
                desc: "Visa is a pre entry authority issued to a non-citizen passport holder from non-visa exempted countries.",
                url: "https://www.immigration.gov.fj/business-visitors-permit/"
            },
        ],
        work: [
            {
                title: "Non-Government Organization",
                desc: "NGOs often require work permits for foreign employees in humanitarian roles.",
                url: "https://www.immigration.gov.fj/work-permit-application-for-non-government-organisations-international-regional/"
            },
            {
                title: "Maritime and Fishing",
                desc: "Work permits are crucial for those in maritime and fishing industries who want to enter Fiji.",
                url: "https://immigration.gov.fj/work-permit-application-for-maritime-crew-fishing-vessels/"
            },
            {
                title: "Secondments",
                desc: "Needed for overseas employees temporarily seconded to another country.",
                url: "https://www.immigration.gov.fj/work-permit-application-for-overseas-employers-secondments/"
            },
            {
                title: "Work Permit Categories - Long Term (3 Years)",
                desc: "Offering three-year or longer work permits for specific skills or opportunities.",
                url: "https://immigration.gov.fj/long-term-work-permit/"
            },
            {
                title: "Work Permit Categories - One Year or Less",
                desc: "Typically for a year or less, are issued for temporary or seasonal work.",
                url: "https://www.immigration.gov.fj/short-term-work-permit/"
            },

        ],
        invest: [
            {
                title: "Investor Permit",
                desc: "These permits enable individuals to legally work in Fiji's maritime sector, contributing their skills and expertise to the industry.",
                url: 'https://www.immigration.gov.fj/investor-permit-application/'
            },
        ],
        study: [
            {
                title: "Student Permit",
                desc: "Student Permit are issued to foreigners authorizing a person to study at local Institutions or Universities.",
                url: 'https://www.immigration.gov.fj/student-permit-application/'
            },
            {
                title: "Internship",
                desc: "Internship or Training Attachment permit is granted to a person to undertake internship or training at a locally approved institutions.",
                url: 'https://immigration.gov.fj/internship/'
            },
            {
                title: "Research Permit",
                desc: "Research Permit is granted to person to undertake research for the benefit of local universities/institution.",
                url: 'https://www.immigration.gov.fj/research-permit/'
            },
        ],
        residence: [
            {
                title: "Permit on Assured Income",
                desc: "Issued to non-citizen with assets abroad, ensuring self-sufficiency in Fiji.",
                url: 'https://www.immigration.gov.fj/residence-on-assured-income-permit-application/'
            },
            {
                title: "Co-Extensive Residence",
                desc: "Co-Extensive Residence Permit enables dependents to enter and reside with the principal applicant.",
                url: 'https://www.immigration.gov.fj/co-extensive-residence-permit-application/'
            },
            {
                title: "Permit on Special Purpose",
                desc: "Medical Grounds Permit: Non-citizen, recommended by certified practitioner.",
                url: 'https://www.immigration.gov.fj/residence-permit-on-special-purpose/'
            },
        ],
        citizenship: [
            {
                title: "By Registration",
                desc: "The process of citizenship acquisition is guided by Fijian Citizenship Act 2009 that came into force on 10 April 2009.",
                url: 'https://www.immigration.gov.fj/by-registration/'
            },
            {
                title: "By Birth",
                desc: "Every child born in Fiji on or after the commencement date becomes a citizen at the date of birth, unless, at the date of birth.",
                url: 'https://www.immigration.gov.fj/citizenship-by-birth/'
            },
            {
                title: "Dual Citizenship",
                desc: "Under the Citizenship Act, you can be both a Fijian citizen and a citizen of another country. Contact us to find out more.",
                url: 'https://www.immigration.gov.fj/dual-citizenship/'
            },
        ],
        exemption: [
            {
                title: "Child of a Fiji Citizen",
                desc: "Exemption Status granted to unmarried child of Fiji citizen, under 18, with foreign passport.",
                url: 'https://immigration.gov.fj/exemption-status-for-a-child-of-a-fiji-citizen-application/'
            },
            {
                title: "Spouse of a Fiji Citizen",
                desc: "For non-citizen who intend to work, conduct business, study, investment or consultancy.",
                url: 'https://immigration.gov.fj/exemption-status-for-spouse-of-a-fiji-citizen-application/'
            },
            {
                title: "Registered in the VKB",
                desc: "Is granted to a person registered in the Vola ni Kawa Bula maintained by the iTaukei Land Commission (iTLC).",
                url: 'https://www.immigration.gov.fj/registered-in-the-vola-ni-kawa-bula/'
            },
            {
                title: "Exemption by Descent",
                desc: "Principal citizen's children, grandchildren and great grandchildren.",
                url: 'https://immigration.gov.fj/exemption-by-descent/'
            },
            {
                title: "Non Fiji Citizen Civil Servant",
                desc: "Granted to a person employed in the service of the Government of the Fiji Islands.",
                url: 'https://immigration.gov.fj/exemption-status-for-non-citizen-civil-servants/'
            },
            {
                title: "Family of Exempted Person",
                desc: "The Immigration Act 2003 and holder of a valid foreign passport to enter.",
                url: 'https://immigration.gov.fj/exemption-status-for-family-members-of-an-exempted-person-application/'
            },
            {
                title: "Exemption for Members of Military Forces",
                desc: "Granted to any serving member of the military forces of another country.",
                url: 'https://www.immigration.gov.fj/exemption-status-for-members-of-military-forces/'
            },
            {
                title: "Exemptions Notice in the Gazette",
                desc: "Peace Corps, Voluntary Services, person who has been invited by the Government.",
                url: 'https://www.immigration.gov.fj/exemptions-notice-in-the-gazette/'
            },
        ],
        status: [
            {
                title: "Immigration Status Search",
                desc: "An application for Immigration search or clearance request can be made here.",
                url: 'https://immigration.gov.fj/immigration-search-clearance-application-guide/'
            },
        ],
        uplift: [
            {
                title: "Uplift of PI Status",
                desc: "Navigate the PI Uplift Application process seamlessly with our comprehensive application guide.",
                url: 'https://immigration.gov.fj/uplift-of-prohibited-immigrant-pi-status/'
            },
        ],
        bond: [
            {
                title: "Bond Refund",
                desc: "Bond is a sum of money paid by a non-citizen applying for a permit prior to the granting of the permit as a security.",
                url: 'https://www.immigration.gov.fj/bond-refund-application/'
            },
        ],
        appeal: [
            {
                title: "Appeal application",
                desc: "An appeal to the Minister responsible for Immigration can be applied by a foreigner or company for permit.",
                url: 'https://immigration.gov.fj/appeal-application-guide/'
            },
        ],
    };

    return (
        <div className="md:m-0 m-4 flex md:flex-row flex-col max-w-7xl gap-2.5 mx-auto min-h-auto ">
            <div className=" lg:w-[17%] bg-[#101B3B] text-white flex justify-center flex-row flex-wrap md:flex-col">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`p-[15px] text-left transition-all text-lg cursor-pointer font-[300] border-b border-b-[#4174FF33] hover:border-b-[#4174FF] 
                            ${activeTab === tab.id
                                ? "bg-gradient-to-l from-[#101B3B] to-[#4174FF] text-white font-semibold"
                                : " hover:text-[#4174FF] "
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="flex-1 bg-gray-50">
                <div className="grid md:grid-cols-3 md:m-0 m-4">
                    {content[activeTab]?.map((item: { title: string, desc: string, url: string }, i: number) => (
                        <Link href={`${item.url}`} key={i} passHref>
                            <div
                                className="relative h-full bg-white border border-[#D2D2D2] py-2.5 text-black cursor-pointer 
             hover:bg-[#4174FF] hover:text-white px-[30px] transition-all group overflow-hidden">
                                <div className="absolute top-0 left-0 h-[3px] w-0 bg-[#101B3B] group-hover:w-full transition-all duration-500"></div>
                                <h3 className="text-xl font-semibold mt-[30px]">{item.title}</h3>
                                <p className="mt-2.5 mb-10 text-base font-normal">{item.desc}</p>
                            </div></Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
