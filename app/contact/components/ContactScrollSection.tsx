'use client';

import { useState, useEffect, useRef } from "react";
import VendorInquiries from "@/app/contact/components/VendorInquiries";
import PressInquiries from "@/app/contact/components/PressInquiries";
import GeneralSupport from "@/app/contact/components/GeneralSupport";

// Add cards into here if needed, ideally with the same visuals as the rest.
const cards = [VendorInquiries, PressInquiries, GeneralSupport];
const scrollSensitivity = 0.00045; // Sensitivity (Higher = more Card switching per scroll)

export default function ContactScrollSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollIndex, setScrollIndex] = useState(0);
    const virtualScroll = useRef(0); // smooth continuous value

    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            // (Warning) Disable scrolling for current page
            e.preventDefault();

        
            virtualScroll.current += e.deltaY * scrollSensitivity;
            virtualScroll.current = Math.max(0, Math.min(cards.length - 1, virtualScroll.current));

            // Round to nearest card for display
            setScrollIndex(Math.round(virtualScroll.current));
        };

        const el = containerRef.current;
        el?.addEventListener("wheel", handleWheel, { passive: false });
        return () => el?.removeEventListener("wheel", handleWheel);
    }, []);

    return (
        <div
        ref={containerRef}
        style={{
            position: "relative",
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
            }}>
                {cards.map((Card, i) => (
                    <div 
                    key={i} 
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        opacity: i === scrollIndex ? 1 : 0,
                        transition: "opacity 0.9s ease", // Use to adjust fade transition
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        }}>
                            <Card />
                    </div>
                ))}
        </div>
    );
}
