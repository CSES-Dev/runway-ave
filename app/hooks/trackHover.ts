"use client";
import { useAnalytics } from "@/components/AnalyticsProvider";
import { useRef } from "react";

export function useTrackHover(componentId: string, userId?: string)
{
    const hoverStart = useRef<number | null>(null);
    const hoveredAt = useRef<string | null>(null);
    const thresholdMs = 5000; // Change to preference (Currently 5 seconds)
    const sessionId = useAnalytics();

    const onMouseEnter = () =>
    {
        hoverStart.current = Date.now();
        hoveredAt.current = new Date().toISOString();
    };

    const onMouseLeave = async () =>
    {
        if (hoverStart.current === null) return;

        const durationMs = Date.now() - hoverStart.current;
        hoverStart.current = null;

        if (durationMs > thresholdMs) {
            await fetch("/api/track",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(
                        {
                            event_type: "hover",
                            payload:
                            {
                                componentId,
                                durationMs,
                                hoveredAt: hoveredAt.current,
                                sessionId,
                            },
                        }
                    ),
                }
            );
        }
    };
    return { onMouseEnter, onMouseLeave };
}