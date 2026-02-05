"use client";

import { useEffect, useState } from "react";

const Title = () => {
  const fullText = "Walk The Runway";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayText(fullText.slice(0, i));
      if (i === fullText.length) clearInterval(interval);
    }, 120); // typing speed
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="
        w-full
        h-[calc(878/1512*100vw)]
        bg-[#D9D9D9]
        border-b border-black
      "
    >
      <div
        className="
          h-full
          flex flex-col items-center
          pt-[calc(649/1512*100vw)]
          pb-[calc(22/1512*100vw)]
        "
      >
        <h1
          className="
            font-['Test Family VF']
            text-[calc(96/1512*100vw)]
            leading-[1]
            text-black text-center
            min-h-[calc(96/1512*100vw)]
          "
        >
          {displayText}
        </h1>

        <img
          src="/arrow-icon.svg"
          alt="Scroll down"
          className="
            mt-[calc(25/1512*100vw)]
            w-[calc(77/1512*100vw)]
            h-[calc(77/1512*100vw)]
          "
        />
      </div>
    </section>
  );
};

export default Title;
