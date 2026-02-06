"use client";

import React from "react";

export default function GeneralSupport() {
    return (
        <div className="flex flex-col md:flex-row pt-6 md:pt-0 items-center md:items-stretch rounded-3xl w-[92vw] max-w-[1152px] h-[clamp(320px,60vw,530px)] md:h-[530px] bg-gradient-to-r from-[#8CDFA8] to-[#34543F]">
            <div className="flex text-center text-[clamp(2.2rem,7vw,6.5rem)] md:text-7xl items-center w-[400px] pl-8 text-white">
                GENERAL SUPPORT
            </div>
            <div className="p-6 md:p-20 text-center md:text-left text-white text-[clamp(0.95rem,2.6vw,1.5rem)] md:text-2xl">
                Loren ipsum odt alor If you need support, you can do this that and the third Contact at email@email.com with inquiries text text
            </div>
        </div>
    )
}