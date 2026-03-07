"use client";

import { useEffect, useRef } from "react";

export function useTimeTracker(sectionId: string) {
  const ref = useRef<HTMLDivElement>(null);
  const startTime = useRef<number | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const sendTime = async (durationMs: number, startedAt: number, endedAt: number) => {
      const event = {
        event_type: "component_view",
        payload: {
          sectionId,
          durationMs,
        },
      };

      console.log("timetracking sending:", event);

      try {
        const res = await fetch("/api/track", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(event),
          keepalive: true,
        });

        const data = await res.json();
        console.log("response:", data);
      } catch (err) {
        console.error("error:", err);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (startTime.current === null) {
              startTime.current = Date.now();
              console.log("feature entered viewport:", sectionId);
            }
          } else {
            if (startTime.current !== null) {
              const endedAt = Date.now();
              const startedAt = startTime.current;
              const durationMs = endedAt - startedAt;

              console.log("feature left viewport:", sectionId, durationMs);

              void sendTime(durationMs, startedAt, endedAt);
              startTime.current = null;
            }
          }
        });
      },
      { threshold: 0 }
    );

    observer.observe(ref.current);

    //when component unmound
    return () => {
      if (startTime.current !== null) {
        const endedAt = Date.now();
        const startedAt = startTime.current;
        const durationMs = endedAt - startedAt;

        console.log("[TimeTracker] unmount send:", sectionId, durationMs);
        void sendTime(durationMs, startedAt, endedAt);

        startTime.current = null;
      }

      observer.disconnect();
    };
  }, [sectionId]);

  return ref;
}