import Image from "next/image";
import EmailSignupForm from "./EmailSignupForm";

export default function SignupPage()
{
    return (
        <main className="min-h-screen bg-background text-foreground pt-36">
            {/* Page content */}
            <div className="mx-auto w-full max-w-6xl px-6 py-10">
                {/* Email entry */}
                <section className="mt-10">
                    <div className="space-y-4">
                        {/* Text block */}
                        <div className="max-w-6xl space-y-4">
                            <h1 className="text-[25px] font-normal leading-none">
                                Join our email list!
                            </h1>

                            <p className="text-[20px] font-normal leading-none">
                                Be the first to know about the new things that are happening at Runway Ave!
                                Check out our brand new app.
                            </p>
                        </div>

                        {/* Form block */}
                        <div className="max-w-6xl">
                            <EmailSignupForm />
                        </div>
                    </div>
                </section>

                {/* Download our app promo section */}
                <section className="mt-12 rounded-2xl bg-accent px-8 py-10">
                    <div className="flex flex-col gap-10 md:flex-row md:items-center">
                        {/* Left: heading + features */}
                        <div className="space-y-6 text-accent-foreground md:max-w-[560px]">
                            <h2 className="text-[48px] font-normal leading-none md:text-[85px]">
                                Download the
                                <br />
                                app today!
                            </h2>

                            <div className="space-y-2">
                                <p className="text-[20px] font-normal leading-none">
                                    Main features
                                </p>

                                <ul className="space-y-1 pl-5 text-[20px] font-normal leading-none">
                                    <li>•</li>
                                    <li>•</li>
                                    <li>•</li>
                                    <li>•</li>
                                    <li>•</li>
                                </ul>
                            </div>
                        </div>

                        {/* Right: video/demo placeholder */}
                        <div className="mx-auto w-full max-w-sm md:shrink-0">
                            <div className="aspect-square w-full rounded-md bg-background/60">
                                <div className="flex h-full items-center justify-center">
                                    <p className="text-sm text-primary">
                                        video showcasing app demo
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
