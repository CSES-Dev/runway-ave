"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type TeamMember = {
    name: string;
    role: string;
    photo: string;
};

const PAGE_SIZE = 4;

const TEAM: TeamMember[] = [
    { name: "Member One", role: "Role A", photo: "/placeholder.png" },
    { name: "Member Two", role: "Role B", photo: "/placeholder.png" },
    { name: "Member Three", role: "Role C", photo: "/placeholder.png" },
    { name: "Member Four", role: "Role D", photo: "/placeholder.png" },
    { name: "Member Five", role: "Role E", photo: "/placeholder.png" },
    { name: "Member Six", role: "Role F", photo: "/placeholder.png" },
    { name: "Member Seven", role: "Role G", photo: "/placeholder.png" },
    { name: "Member Eight", role: "Role H", photo: "/placeholder.png" },
    { name: "Member Nine", role: "Role I", photo: "/placeholder.png" },
    { name: "Member Ten", role: "Role J", photo: "/placeholder.png" },
];

export default function MeetTheTeam() {
    const [page, setPage] = useState(0);
    const pageCount = Math.max(1, Math.ceil(TEAM.length / PAGE_SIZE));
    const start = page * PAGE_SIZE;
    const visible = TEAM.slice(start, start + PAGE_SIZE);
    const canPrev = page > 0;
    const canNext = page < pageCount - 1;
    const showArrows = TEAM.length > PAGE_SIZE;

    return (
        <section className="w-full bg-white pt-10 pb-16 md:pt-14 md:pb-24 px-4 md:px-8">
            <h2 className="text-center font-normal text-black mb-12 md:mb-16 text-[clamp(2rem,5vw,70px)] leading-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
                Meet the Team:
            </h2>

            <div className="flex items-center justify-center gap-6 md:gap-8 max-w-[1800px] mx-auto">
                {showArrows && (
                    <button
                        type="button"
                        onClick={() => setPage((p) => Math.max(0, p - 1))}
                        disabled={!canPrev}
                        aria-label="Previous page"
                        className="shrink-0 self-center rounded-full p-2 text-foreground bg-secondary hover:bg-secondary/80 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-secondary transition-colors -translate-y-[calc(theme(spacing.2)+0.5em)]"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                )}

                <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-[51px]">
                    {visible.map((member) => (
                        <div key={`${member.name}-${member.role}`} className="flex flex-col items-center">
                            <div className="relative w-full max-w-[357px] aspect-[357/375] overflow-hidden bg-[#D9D9D9]">
                                <Image
                                    src={member.photo}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                    sizes="357px"
                                />
                            </div>
                            <p className="mt-2 text-sm font-medium text-foreground text-center">
                                {member.name}, {member.role}
                            </p>
                        </div>
                    ))}
                </div>

                {showArrows && (
                    <button
                        type="button"
                        onClick={() => setPage((p) => Math.min(pageCount - 1, p + 1))}
                        disabled={!canNext}
                        aria-label="Next page"
                        className="shrink-0 self-center rounded-full p-2 text-foreground bg-secondary hover:bg-secondary/80 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-secondary transition-colors -translate-y-[calc(theme(spacing.2)+0.5em)]"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                )}
            </div>
        </section>
    );
}
