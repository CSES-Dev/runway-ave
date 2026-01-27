"use client";

export default function EmailSignupForm()
{
    return (
        <form
            className="flex w-full flex-col gap-3 sm:flex-row sm:items-center"
            onSubmit={(e) => e.preventDefault()}
        >
            <input
                type="email"
                placeholder="youremail@email.com"
                className="
                    h-10 w-full rounded-full
                    border border-border
                    bg-muted px-4
                    text-sm
                    placeholder:text-muted-foreground
                    focus:outline-none focus:ring-2 focus:ring-ring
                "
            />

            <button
                type="submit"
                className="
                    h-10 w-full rounded-full
                    bg-primary px-6
                    text-sm font-medium text-primary-foreground
                    sm:w-auto
                "
            >
                Subscribe
            </button>
        </form>
    );
}
