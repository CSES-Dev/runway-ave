export default function SignupPage()
{
    return (
        <main className = "min-h-screen bg-background text-foreground">
            {/* Navbar is handled elsewhere (layout / separate PR). */}
            <div className = "h-16" />

            <div className = "mx-auto w-full max-w-5xl px-6 py-10">
                {/* Top section: logo + headline + email input */}
                <section className = "space-y-8">
                    <div className = "flex items-start justify-between gap-6">
                        {/* Logo placeholder (replace with actual logo component/image when available) */}
                        <div className = "flex items-start">
                            <div className = "h-10 w-28 rounded-sm border border-border bg-card" />
                        </div>

                        {/* Nav placeholder (someone else owns navbar) */}
                        <div className = "hidden h-10 w-72 rounded-full border border-border bg-card md:block" />
                    </div>

                    <div className = "max-w-xl space-y-4">
                        <div className = "space-y-2">
                            <h1 className = "text-2xl font-semibold">
                                Join our email list!
                            </h1>

                            <p className = "text-sm text-muted-foreground">
                                Be the first to know about the new things that are happening at Runway Ave!
                                Check out our brand new app.
                            </p>
                        </div>

                        <form className = "flex w-full flex-col gap-3 sm:flex-row sm:items-center">
                            <div className = "h-10 w-full rounded-full border border-border bg-muted px-4" />
                            <div className = "h-10 w-40 rounded-full bg-primary" />
                        </form>
                    </div>
                </section>

                {/* App download promo section */}
                <section className = "mt-14">
                    <div className = "rounded-2xl bg-primary px-8 py-10">
                        <div className = "grid gap-8 md:grid-cols-2 md:items-center">
                            {/* Left: headline + features */}
                            <div className = "space-y-6">
                                <h2 className = "text-5xl font-semibold leading-tight text-primary-foreground">
                                    Download the
                                    <br />
                                    app today!
                                </h2>

                                <div className = "space-y-2 text-primary-foreground">
                                    <p className = "text-sm opacity-90">
                                        Main features
                                    </p>

                                    <ul className = "space-y-1 pl-5 text-sm">
                                        <li>•</li>
                                        <li>•</li>
                                        <li>•</li>
                                        <li>•</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Right: video/demo placeholder */}
                            <div className = "mx-auto aspect-square w-full max-w-sm rounded-md bg-card/20">
                                <div className = "flex h-full w-full items-center justify-center">
                                    <p className = "text-xs text-primary-foreground/80">
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
