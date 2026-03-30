"use client";

import { getConsentCookie } from "@/components/CookieBanner";
import { useEffect } from "react";

type TrackPageProps = {
  page: string;
};

export default function useTrackPage({ page }: TrackPageProps) {
  useEffect(() => {
    const consent = getConsentCookie();
    if (consent === null) return;

    const trackPage = async () => {
      try {
        await fetch("/api/track", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            event_type: "page_view",
            payload: {
              page,
              url: window.location.href,
              userAgent: consent === 'accepted' ? navigator.userAgent : 'Anonymized',
            },
          }),
        });
      } catch (error) {
        console.error("Page tracking failed:", error);
      }
    };

    trackPage();
  }, [page]);
}