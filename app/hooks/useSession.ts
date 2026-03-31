// app/hooks/useSession.ts
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { getConsentCookie } from "@/components/CookieBanner"; // Adjust path

export const useSession = () => {
  const [sessionId, setSessionId] = useState<string | null>(null);

  useEffect(() => {
    const evaluateSession = () => {
      const consent = getConsentCookie();

      if (consent === 'accepted') {
        let currentId = sessionStorage.getItem("session_id");
        if (!currentId) {
          currentId = uuidv4();
          sessionStorage.setItem("session_id", currentId);
        }
        setSessionId(currentId);
      } else {
        setSessionId(null);
        sessionStorage.removeItem("session_id");
      }
    };
    evaluateSession();
    window.addEventListener('runway_consent_changed', evaluateSession);

    return () => {
      window.removeEventListener('runway_consent_changed', evaluateSession);
    };
  }, []); 

  return sessionId;
};