"use client";

import AboutSection from "./sections/AboutSection";
import MeetTheTeam from "./sections/MeetTheTeam";
import useTrackPage from "../hooks/TrackPage";

export default function Page() {
    useTrackPage({ page: "about" });

    return (
        <main className="min-h-screen bg-white">
            <AboutSection />
            <MeetTheTeam />
        </main>
    );
}
