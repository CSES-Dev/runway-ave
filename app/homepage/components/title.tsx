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
        bg-cover bg-center
        border-b border-black
      "
      style={{ backgroundImage: `url("/homebg.jpg")` }}
    >
      <div
        className="
          h-full
          flex flex-col items-center
          pt-[calc(610/1512*100vw)]
          pb-[calc(22/1512*100vw)]
        "
      >
        <h1
          className="
            font-serif 
            text-[calc(96/1512*100vw)]
            leading-[1]
            text-[#F5F5F5] text-center
            min-h-[calc(96/1512*100vw)]
          "
        >
          {displayText}
        </h1>

        <img
          src="/arrow-icon.png"
          alt="Scroll down"
          className="
            mt-[calc(40/1512*100vw)]
            w-[calc(77/1512*100vw)]
            h-[calc(77/1512*100vw)]
          "
        />
      </div>
    </section>
  );
};

export default Title;
