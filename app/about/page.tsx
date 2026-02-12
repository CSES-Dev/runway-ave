import MeetTheTeam from './MeetTheTeam';
import AboutSection from './sections/AboutSection';

export default function Page() {
    return (
        <main className="min-h-screen bg-white">
            <AboutSection />
            <MeetTheTeam />
        </main>
    );
}
