'use client'
import { useState, useEffect } from 'react';
import LearnMoreCard from './LearnMoreCard';

export default function LearnMorePage(){
    return(
        <main className="min-h-screen bg-[#FDFCF7] text-base pt-36">
            <div className="px-4 md:px-8 lg:px-16 py-12 space-y-12">
                <section className="space-y-10">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif tracking-wide">
                        Overview of Consumer Features
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <LearnMoreCard
                            title="Feature:"
                            points={['Subtext', 'Subtext', 'Subtext']}
                            morePoints={['More detail', 'More detail', 'More detail']}
                        />

                        <LearnMoreCard
                            title="Feature:"
                            points={['Subtext', 'Subtext', 'Subtext']}
                            morePoints={['More detail', 'More detail', 'More detail']}
                        />

                        <LearnMoreCard
                            title="Feature:"
                            points={['Subtext', 'Subtext', 'Subtext']}
                            morePoints={['More detail', 'More detail', 'More detail']}
                        />

                        <LearnMoreCard
                            title="Feature:"
                            points={['Subtext', 'Subtext', 'Subtext']}
                            morePoints={['More detail', 'More detail', 'More detail']}
                        />
                    </div>
                </section>
            </div>

        </main>
    )
}