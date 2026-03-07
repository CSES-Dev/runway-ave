'use client';
import { useState, useEffect } from 'react';
import Updates from './Updates';
import Announcement from './Announcement';
import Media from './Media';

type BlogPageEntry = {
    slug: string;
    title: string;
    date: string;
    description: string;
    imageUrl: string;
};

async function fetchBlogPages(): Promise<BlogPageEntry[]> {
    const indexRes = await fetch('/api/blog');
    if (!indexRes.ok) throw new Error('Failed to fetch blog index');
    const index: {
        slug: string;
        title: string;
        date: string;
        image: string;
        descriptionFile: string;
    }[] = await indexRes.json();

    const pages = await Promise.all(
        index.map(async (entry) => {
            const [descRes, imgRes] = await Promise.all([
                fetch(
                    `/api/blog/${entry.slug}/description?file=${encodeURIComponent(entry.descriptionFile)}`,
                ),
                fetch(
                    `/api/blog/${entry.slug}/image-url?file=${encodeURIComponent(entry.image)}`,
                ),
            ]);
            const description = await descRes.text();
            const { imageUrl } = await imgRes.json();
            return { ...entry, description, imageUrl };
        }),
    );

    return pages;
}

export default function BlogPage() {
    const [updates, setUpdates] = useState<BlogPageEntry[]>([]);
    const [index, setIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchBlogPages()
            .then((pages) => {
                setUpdates(pages);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    const total = updates.length;
    const prev = () => setIndex((i) => (i === 0 ? total - 1 : i - 1));
    const next = () => setIndex((i) => (i === total - 1 ? 0 : i + 1));
    const get = (offset: number) => updates[(index + offset + total) % total];

    return (
        <main className="min-h-screen bg-[#FDFCF7] text-base pt-36">
            <div className="px-4 md:px-16 lg:px-32 py-12 space-y-12">
                <img
                    src="image.png"
                    alt="image"
                    className="w-full max-w-[1160px] h-[306px]"
                />

                <section className="space-y-10">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif tracking-wide">
                        ANNOUNCEMENTS
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
                        <Announcement />
                        <Announcement />
                        <Announcement />
                        <Announcement />
                    </div>
                </section>

                <section className="space-y-10">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif tracking-wide">
                        UPDATES
                    </h1>

                    {loading && (
                        <p className="text-center text-gray-400">
                            Loading updates...
                        </p>
                    )}

                    {error && (
                        <p className="text-center text-red-400">
                            Error: {error}
                        </p>
                    )}

                    {!loading && !error && total > 0 && (
                        <div className="flex items-center justify-center gap-4 sm:gap-8">
                            <Updates className="h-[150px] sm:h-[226px] w-full sm:w-[234px] flex items-center justify-center text-center p-2 sm:p-4 text-xs sm:text-sm">
                                <div>
                                    <img
                                        src={get(-1).imageUrl}
                                        alt={get(-1).title}
                                        className="w-full h-24 object-cover mb-2"
                                    />
                                    <p>{get(-1).title}</p>
                                </div>
                            </Updates>

                            <button
                                onClick={prev}
                                className="text-2xl sm:text-4xl font-light hover:opacity-60"
                            >
                                &#8249;
                            </button>

                            <Updates className="h-[250px] sm:h-[419px] w-full sm:w-[416px] flex items-center justify-center text-center p-4 sm:p-6 text-sm sm:text-lg">
                                <div className="space-y-3">
                                    <img
                                        src={get(0).imageUrl}
                                        alt={get(0).title}
                                        className="w-full h-40 object-cover"
                                    />
                                    <h2 className="font-semibold">
                                        {get(0).title}
                                    </h2>
                                    <p className="text-sm text-gray-600">
                                        {get(0).date}
                                    </p>
                                    <p>{get(0).description}</p>
                                </div>
                            </Updates>

                            <button
                                onClick={next}
                                className="text-2xl sm:text-4xl font-light hover:opacity-60"
                            >
                                &#8250;
                            </button>

                            <Updates className="h-[150px] sm:h-[226px] w-full sm:w-[234px] flex items-center justify-center text-center p-2 sm:p-4 text-xs sm:text-sm">
                                <div>
                                    <img
                                        src={get(1).imageUrl}
                                        alt={get(1).title}
                                        className="w-full h-24 object-cover mb-2"
                                    />
                                    <p>{get(1).title}</p>
                                </div>
                            </Updates>
                        </div>
                    )}
                </section>

                <section className="space-y-10">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif tracking-wide">
                        MEDIA
                    </h1>
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
