"use client";

import React, { createContext, useContext } from "react";
import { useSession } from "@/app/hooks/useSession";

const AnalyticsContext = createContext<string | null>(null);

export const AnalyticsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const sessionId = useSession();

  return (
    <AnalyticsContext.Provider value={sessionId}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export const useAnalytics = () => useContext(AnalyticsContext);
