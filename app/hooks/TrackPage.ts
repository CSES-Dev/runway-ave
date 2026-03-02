"use client";

import { useEffect } from "react";

type TrackPageProps = {
  page: string;
};

export default function useTrackPage({ page }: TrackPageProps) {
  useEffect(() => {
    const trackPage = async () => {
      try {
        await fetch("/api/demo/track", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            event_type: "page_view",
            payload: {
              page,
              url: window.location.href,
              userAgent: navigator.userAgent,
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