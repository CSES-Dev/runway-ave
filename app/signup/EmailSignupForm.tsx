"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function EmailSignupForm()
{
    const [email, setEmail] = useState("");

    function handleSubmit(event: React.FormEvent<HTMLFormElement>)
    {
        event.preventDefault();

        // Placeholder: wire up server action / API route later
        console.log("Email submitted:", email);
    }

    return (
        <form
            className="flex w-full max-w-[745px] flex-col gap-4 sm:flex-row sm:items-center"
            onSubmit={handleSubmit}
        >
            <div className="flex-1">
                <Label htmlFor="signup-email" className="sr-only">
                    Email
                </Label>

                <Input
                    id="signup-email"
                    type="email"
                    placeholder="youremail@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-14 rounded-full bg-muted px-5 text-[20px] placeholder:text-[20px] border-0 focus-visible:ring-2"
                    required
                />
            </div>

            <Button
                type="submit"
                className="h-14 w-[257px] shrink-0 rounded-full px-6 text-[20px] font-medium"
            >
                Subscribe
            </Button>
        </form>
    );
}
