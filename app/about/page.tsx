import AboutSection from "./sections/AboutSection";
import MeetTheTeam from "./sections/MeetTheTeam";

export default function Page() {
    return (
        <main className="min-h-screen bg-white">
            <AboutSection />
            <MeetTheTeam />
        </main>
    );
}