"use client";
import { useState } from "react";

const slides = [
  "image.png",
  "image.png",
  "image.png",
  "image.png",
  "image.png",
];

export default function BlogPage() {
    const [index, setIndex] = useState(0);
    const total = slides.length;

    const prev = () =>
    setIndex((i) => (i === 0 ? total - 1 : i - 1));

    const next = () =>
    setIndex((i) => (i === total - 1 ? 0 : i + 1));

    const get = (offset : number) =>
    slides[(index + offset + total) % total];

    return (
        <main className="min-h-screen bg-[#FDFCF7] text-base">
            <div className="px-32 py-12 space-y-12">
                <img
                src="image.png"
                alt="image"
                className="w-full max-w-[1160px] h-[306px]"
                />

                <section className="space-y-10">
                    <h1 className="text-5xl font-serif tracking-wide">ANNOUNCEMENTS</h1>
                    <div className="grid grid-cols-2 gap-[16px]">
                        <div className="h-[124px] bg-[#D9D9D9]"></div>
                        <div className="h-[124px] bg-[#D9D9D9]"></div>
                        <div className="h-[124px] bg-[#D9D9D9]"></div>
                        <div className="h-[124px] bg-[#D9D9D9]"></div>
                    </div>
                </section>

                <section className="space-y-10">
                    <h1 className="text-5xl font-serif tracking-wide">UPDATES</h1>
                    <div className="flex items-center justify-center gap-8">

                        {/* Previous slide */}
                        <img
                            src={get(-1)}
                            alt="previous update"
                            className="h-[226px] w-[234px] object-cover transition-all duration-300"
                        />

                        {/* Left arrow */}
                        <button
                            onClick={prev}
                            className="text-4xl font-light hover:opacity-60"
                        >
                            &#8249;
                        </button>

                        {/* Active slide */}
                        <img
                            src={get(0)}
                            alt="current update"
                            className="h-[419px] w-[416px] object-cover transition-all duration-300"
                        />

                        {/* Right arrow */}
                        <button
                            onClick={next}
                            className="text-4xl font-light hover:opacity-60"
                        >
                            &#8250;
                        </button>

                        {/* Next slide */}
                        <img
                            src={get(1)}
                            alt="next update"
                            className="h-[226px] w-[234px] object-cover transition-all duration-300"
                        />
                    </div>
                </section>
                
                <section className="space-y-10">
                    <h1 className="text-5xl font-serif tracking-wide">MEDIA</h1>
                    <div className="grid grid-cols-2 gap-[16px]">
                        <div className="h-[422px] bg-[#D9D9D9] rounded-2xl"></div>
                        <div className="h-[422px] bg-[#D9D9D9] rounded-2xl"></div>
                        <div className="h-[422px] bg-[#D9D9D9] rounded-2xl"></div>
                        <div className="h-[422px] bg-[#D9D9D9] rounded-2xl"></div>
                    </div>
                </section>
            </div>
        </main>

    );
}