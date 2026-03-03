"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function EmailSignupForm()
{
    const [email, setEmail] = useState("");

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const sessionID = Math.random().toString(36).substring(7); // This is a temporary placeholder. You may replace it later.
        const sourcePage = "Signup Page";
        
        // Sending data to the API route
        try {
            const response = await fetch('/api/track', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    event_type: 'click_signup',
                    payload: {
                        email,
                        timestamp: new Date().toISOString(),
                        sourcePage,
                        sessionID,
                    },
                }),
            });

            const result = await response.json();

            if (response.ok) {
                console.log('Email submitted successfully:', result);
                alert('Thank you for subscribing!');
                setEmail('');
            } else {
                console.error('Error:', result.error);
                alert('Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Request failed', error);
            alert('There was a problem with your submission. Please try again later.');
        }
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
                    className="h-14 rounded-full bg-input px-5 text-[20px] placeholder:text-[20px] border-0 focus-visible:ring-2"
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
