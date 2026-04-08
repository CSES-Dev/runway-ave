"use client";

import { useEffect, useRef } from "react";
import { useAnalytics } from "@/components/AnalyticsProvider";

export function useTimeTracker(sectionId: string) {
  const ref = useRef<HTMLDivElement>(null);
  const startTime = useRef<number | null>(null);
  const sessionId = useAnalytics()

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (startTime.current === null) {
          startTime.current = Date.now();
        }
      } else {
        if (startTime.current !== null) {
          const durationMs = Date.now() - startTime.current;

          void fetch("/api/track", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              event_type: "component_view",
              payload: {
                sectionId,
                sessionId,
                durationMs,
              },
            }),
            keepalive: true,
          });

          startTime.current = null;
        }
      }
    }, { threshold: 0 }); //start when feature first appears

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [sectionId, sessionId]);

  return ref;
}