'use client';
import React, { useState } from 'react';

interface LearnMoreProps {
  className?: string;
  title?: string;
  points?: string[];
  morePoints?: string[];
}

const LearnMoreCard: React.FC<LearnMoreProps> = ({
  className = '',
  title = '',
  points = [],
  morePoints = [],
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`relative bg-[#612414] h-[471px] w-full rounded-xl p-6 text-white transition-transform duration-300 hover:scale-[1.05] ${className}`}
    >

      <div className="flex flex-col h-full">
        <h2 className="text-lg mb-4">{title}</h2>

        <div className="space-y-1 text-sm">
          {points.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>

      <div className="absolute bottom-4 right-4 flex flex-col items-end">
        
        <div
          className={`
            mb-3 w-56 rounded-lg bg-white text-black text-sm p-3 shadow-lg
            transition-all duration-200 origin-bottom-right
            ${expanded ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
          `}
        >
          {morePoints.map((p, i) => (
            <p key={i} className="mb-1 last:mb-0">
              {p}
            </p>
          ))}

          {/* tail */}
          <div className="absolute bottom-[-6px] right-4 w-3 h-3 bg-white rotate-45" />
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="w-10 h-10 rounded-full bg-[#d4502f] flex items-center justify-center text-black text-xl font-bold hover:scale-110 transition"
        >
          {expanded ? '−' : '+'}
        </button>
      </div>
    </div>
  );
};

export default LearnMoreCard;