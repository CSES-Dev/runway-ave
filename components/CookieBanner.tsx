'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

const CONSENT_COOKIE_NAME = 'runway_cookie_consent';
const COOKIE_MAX_AGE_DAYS = 365;

export function getConsentCookie(): string | null {
    if (typeof document === 'undefined') return null;
    const match = document.cookie.match(
        new RegExp('(^| )' + CONSENT_COOKIE_NAME + '=([^;]+)')
    );
    return match ? match[2] : null;
}

function setConsentCookie(value: 'accepted' | 'rejected') {
    const maxAge = COOKIE_MAX_AGE_DAYS * 24 * 60 * 60;
    document.cookie = `${CONSENT_COOKIE_NAME}=${value}; path=/; max-age=${maxAge}; SameSite=Lax`;
}

export default function CookieBanner() {
    const router = useRouter();
    const [mounted, setMounted] = useState(false);
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        setMounted(true); 
        const consent = getConsentCookie();
        setShowBanner(consent === null);
    }, []);

    const handleAccept = () => {
        setConsentCookie('accepted');
        setShowBanner(false);
        window.dispatchEvent(new Event('runway_consent_changed'));
        router.refresh(); // Tells Next.js to re-run server logic/middleware
    };

    const handleOptOut = () => {
        setConsentCookie('rejected');
        setShowBanner(false);
        window.dispatchEvent(new Event('runway_consent_changed'));
        router.refresh(); // Updates the 'x-cookie-consent' header globally
    };

    // If we haven't mounted yet, return null to prevent hydration flicker
    if (!mounted || !showBanner) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Cookie consent"
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                aria-hidden="true"
            />
            {/* Modal window */}
            <div className="relative w-full max-w-lg rounded-xl border bg-background p-6 shadow-2xl sm:p-8">
                <h2 className="mb-3 text-lg font-semibold text-foreground sm:text-xl">
                    Cookie notice
                </h2>
                <p className="mb-6 text-sm text-muted-foreground sm:text-base">
                    We use cookies to improve your experience and for analytics.
                    You can accept or opt out.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                    <Button onClick={handleAccept} size="default" className="min-w-[100px]">
                        Accept
                    </Button>
                    <Button onClick={handleOptOut} variant="outline" size="default" className="min-w-[100px]">
                        Opt out
                    </Button>
                </div>
            </div>
        </div>
    );
}
