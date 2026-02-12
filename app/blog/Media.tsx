import React from 'react';

interface MediaProps {
  className?: string;
  children?: React.ReactNode;
}

const Media: React.FC<MediaProps> = ({ className, children }) => {
  return <div className={`bg-[#D9D9D9] h-[422px] rounded-2xl transition-transform duration-300 hover:scale-[1.02] ${className || ''}`}>{children}</div>;
};

export default Media;