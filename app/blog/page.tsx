"use client";
import { useState } from "react";
import Updates from './Updates';
import Announcement from './Announcement';
import Media from './Media';

const updateContents = [
  "Update 1",
  "Update 2",
  "Update 3",
  "Update 4",
  "Update 5",
];

export default function BlogPage() {
    const [index, setIndex] = useState(0);
    const total = updateContents.length;

    const prev = () =>
    setIndex((i) => (i === 0 ? total - 1 : i - 1));

    const next = () =>
    setIndex((i) => (i === total - 1 ? 0 : i + 1));

    const get = (offset : number) =>
    updateContents[(index + offset + total) % total];

    return (
        <main className="min-h-screen bg-[#FDFCF7] text-base">
            <div className="px-4 md:px-16 lg:px-32 py-12 space-y-12">
                <img
                src="image.png"
                alt="image"
                className="w-full max-w-[1160px] h-[306px]"
                />

                <section className="space-y-10">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif tracking-wide">ANNOUNCEMENTS</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
                        <Announcement />
                        <Announcement />
                        <Announcement />
                        <Announcement />
                    </div>
                </section>

                <section className="space-y-10">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif tracking-wide">UPDATES</h1>
                    <div className="flex items-center justify-center gap-4 sm:gap-8">

                        {/* Previous slide */}
                        <Updates
                            className="h-[150px] sm:h-[226px] w-full sm:w-[234px] flex items-center justify-center text-center p-2 sm:p-4 text-xs sm:text-sm"
                        >
                            {get(-1)}
                        </Updates>

                        {/* Left arrow */}
                        <button
                            onClick={prev}
                            className="text-2xl sm:text-4xl font-light hover:opacity-60"
                        >
                            &#8249;
                        </button>

                        {/* Active slide */}
                        <Updates 
                            className="h-[250px] sm:h-[419px] w-full sm:w-[416px] flex items-center justify-center text-center p-4 sm:p-6 text-sm sm:text-lg"
                        >
                            {get(0)}
                        </Updates>

                        {/* Right arrow */}
                        <button
                            onClick={next}
                            className="text-2xl sm:text-4xl font-light hover:opacity-60"
                        >
                            &#8250;
                        </button>

                        {/* Next slide */}
                        <Updates
                            className="h-[150px] sm:h-[226px] w-full sm:w-[234px] flex items-center justify-center text-center p-2 sm:p-4 text-xs sm:text-sm"
                        >
                            {get(1)}
                        </Updates>
                    </div>
                </section>
                
                <section className="space-y-10">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif tracking-wide">MEDIA</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
                        <Media />
                        <Media />
                        <Media />
                        <Media />
                    </div>
                </section>
            </div>
        </main>

    );
}