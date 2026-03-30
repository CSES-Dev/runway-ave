"use client";

import { getConsentCookie } from "@/components/CookieBanner";
import { useEffect, useRef } from "react";
import { useAnalytics } from "@/components/AnalyticsProvider";

type TrackPageProps = {
  page: string;
};

export default function useTrackPage({ page }: TrackPageProps) {
  const sessionId = useAnalytics();
  const hasTracked = useRef(false);
  useEffect(() => {
    const consent = getConsentCookie();
    if (consent === null) return;
    if (hasTracked.current) return;

    const trackPage = async () => {
      hasTracked.current = true;
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
              sessionId,
              userAgent: consent === 'accepted' ? navigator.userAgent : 'Anonymized',
            },
          }),
        });
      } catch (error) {
        console.error("Page tracking failed:", error);
        hasTracked.current = false;
      }
    };

    trackPage();
  }, [page, sessionId]);
}