import Image from "next/image";
import EmailSignupForm from "./EmailSignupForm";

export default function SignupPage()
{
    return (
        <main className="min-h-screen bg-background text-foreground">
            {/* Navbar placeholder — handled in separate PR */}
            <header className="w-full">
                <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
                    {/* Logo */}
                    <Image
                        src="/runwaylogo.png"
                        alt="Runway Avenue logo"
                        width={129}
                        height={116}
                        priority
                    />

                    {/* Nav placeholder */}
                    <div className="hidden h-9 w-72 rounded-full bg-muted md:block" />
                </div>
            </header>

            {/* Page content */}
            <div className="mx-auto w-full max-w-5xl px-6 py-10">
                {/* Email entry */}
                <section className="mt-10">
                    <div className="space-y-4">
                        {/* Text block */}
                        <div className="max-w-2xl space-y-2">
                            <h1 className="text-2xl font-semibold">
                                Join our email list!
                            </h1>

                            <p className="text-sm text-muted-foreground">
                                Be the first to know about the new things that are happening at Runway Ave!
                                Check out our brand new app.
                            </p>
                        </div>

                        {/* Form block */}
                        <div className="max-w-xl">
                            <EmailSignupForm />
                        </div>
                    </div>
                </section>

                {/* Download our app promo section */}
                <section className="mt-12 rounded-2xl bg-primary px-8 py-10">
                    <div className="grid gap-10 md:grid-cols-2 md:items-center">
                        {/* Left: heading + features */}
                        <div className="space-y-6 text-primary-foreground">
                            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
                                Download the
                                <br />
                                app today!
                            </h2>

                            <div className="space-y-2">
                                <p className="text-sm opacity-90">
                                    Main features
                                </p>

                                <ul className="space-y-1 pl-5 text-sm">
                                    <li>•</li>
                                    <li>•</li>
                                    <li>•</li>
                                    <li>•</li>
                                </ul>
                            </div>
                        </div>

                        {/* Right: video/demo placeholder */}
                        <div className="mx-auto w-full max-w-sm">
                            <div className="aspect-square w-full rounded-md bg-background/20">
                                <div className="flex h-full items-center justify-center">
                                    <p className="text-xs text-primary-foreground/80">
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
