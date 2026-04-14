"use client";

import React from "react";

export default function PressInquiries() {
    return (
        <div className="flex items-center justify-center group w-[100vw] max-w-[1152px] h-[218px] hover:h-[316px] rounded-[3rem] overflow-hidden text-white transition-all duration-1000 bg-[linear-gradient(90deg,#363A42_0%,#8994A8_100%)] hover:bg-[linear-gradient(90deg,#FF7958,#691F0D_100%)]">
            <div className="flex flex-col items-center text-center text-[clamp(1.2rem,7vw,5rem)] group-hover:w-[479px]">
                PRESS INQUIRIES
            </div>
            <div className="w-[0px] text-[clamp(1.2rem,1.4vw,3rem)] group-hover:pl-16 opacity-0 overflow-hidden transition-all duration-1000 group-hover:w-[497px] group-hover:opacity-100">
                Loren ipsum odt alor
                <p>text</p>
                <p>text</p>
                <p>text</p>
                <p>text</p>
                <p>text</p> 
            </div>
        </div>
    )
}