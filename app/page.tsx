import Feature from "./homepage/components/features";
import Title from "./homepage/components/title";
import PreviewSection from "./homepage/components/previewSection";

export default function HomePage() {
  return (
    <main className="bg-white flex flex-col">
      <Title />
      <section className="flex w-full border-t border-b border-black">
        <div className="w-1/2">
        <Feature
          text="Overview of Consumer Features:"
          image="/consumer.png"
          link="/consumer"
        />
        </div>
        <div className="w-1/2 border-l border-black">
        <Feature
          text="Overview of Vendor Offerings:"
          image="/vendor.png"
          link="/vendor"
        />
        </div>
      </section>
      <PreviewSection />
    </main>
  );
}
