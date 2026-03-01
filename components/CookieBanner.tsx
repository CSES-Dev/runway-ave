'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const CONSENT_COOKIE_NAME = 'runway_cookie_consent';
const COOKIE_MAX_AGE_DAYS = 365;

function getConsentCookie(): string | null {
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
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        setShowBanner(getConsentCookie() === null);
    }, []);

    const handleAccept = () => {
        setConsentCookie('accepted');
        setShowBanner(false);
    };

    const handleOptOut = () => {
        setConsentCookie('rejected');
        setShowBanner(false);
    };

    if (!showBanner) return null;

    return (
        <div
            className="fixed bottom-0 left-0 right-0 z-50 flex flex-wrap items-center justify-center gap-3 border-t bg-background/95 px-4 py-3 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-background/80"
            role="dialog"
            aria-label="Cookie consent"
        >
            <p className="text-sm text-foreground">
                We use cookies. You can accept or opt out.
            </p>
            <div className="flex flex-wrap items-center gap-2">
                <Button onClick={handleAccept} size="sm">
                    Accept
                </Button>
                <Button onClick={handleOptOut} variant="outline" size="sm">
                    Opt out
                </Button>
            </div>
        </div>
    );
}
