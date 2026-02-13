import MediaItem from "../components/MediaItem";
import ContentItem from "../components/ContentItem";
import ValueBarItem from "../components/ValueBarItem";

export default function AboutSection() {
    return (
        <section className="w-full pt-36">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-screen-2xl mx-auto px-12 mb-20">
                <MediaItem />
                <ContentItem />
            </div>

            <ValueBarItem />
        </section>
    );
}