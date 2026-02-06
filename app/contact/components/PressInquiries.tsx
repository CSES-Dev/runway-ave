"use client";

import React from "react";

export default function PressInquiries() {
    return (
        <div className="flex flex-col md:flex-row pt-6 md:pt-0 items-center md:items-stretch rounded-3xl w-[92vw] max-w-[1152px] h-[clamp(320px,60vw,530px)] md:h-[530px] bg-gradient-to-r from-[#FF7958] to-[#691F0D]">
            <div className="flex text-center text-[clamp(2.2rem,7vw,6.5rem)] md:text-7xl items-center w-[400px] pl-8 text-white">
                PRESS INQUIRIES
            </div>
            <div className="p-6 md:p-20 text-center md:text-left text-white text-[clamp(0.95rem,2.6vw,1.5rem)] md:text-2xl">
                Contact US at 
                <p>local@domain.com for inquiries </p>
                <p>Press can do this that and the third</p>
                <p>that are useful for everyone</p>
                <p>text</p>
                <p>text</p>
            </div>
        </div>
    )
}