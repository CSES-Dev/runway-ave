"use client";

import AboutSection from "./sections/AboutSection";
import MeetTheTeam from "./sections/MeetTheTeam";
import useTrackPage from "../hooks/TrackPage";

export default function Page() {
    useTrackPage({ page: "about" });

    return (
        <main className="min-h-screen bg-[#FDFCF7]">
            <AboutSection />
            <MeetTheTeam />
        </main>
    );
}
