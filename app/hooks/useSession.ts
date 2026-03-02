import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const useSession = () => {
  const [sessionId, setSessionId] = useState<string | null>(null);

  useEffect(() => {
    let currentId = sessionStorage.getItem("session_id");

    if (!currentId) {
      currentId = uuidv4();
      sessionStorage.setItem("session_id", currentId);
    }

    setSessionId(currentId);
  }, []);

  return sessionId;
};
