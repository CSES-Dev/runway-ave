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
            className="flex w-full flex-col gap-4 sm:flex-row sm:items-center"
            onSubmit={handleSubmit}
        >
            <div className="w-full">
                <Label htmlFor="signup-email" className="sr-only">
                    Email
                </Label>

                <Input
                    id="signup-email"
                    name="email"
                    type="email"
                    placeholder="youremail@email.com"
                    autoComplete="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="h-14 rounded-full bg-muted px-4 border-0 focus-visible:ring-2"
                    required
                />
            </div>

            <Button
                type="submit"
                className="h-14 w-[257px] rounded-full px-6 sm:w-auto"
            >
                Subscribe
            </Button>
        </form>
    );
}
