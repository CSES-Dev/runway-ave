"use client";

import React from 'react';
import { useTrackHover } from '../hooks/trackHover';

interface UpdatesProps {
  className?: string;
  children?: React.ReactNode;
}

const Updates: React.FC<UpdatesProps> = ({ className, children }) => {
  const { onMouseEnter, onMouseLeave } = useTrackHover("blog_update_card");

  return <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={`bg-[#D9D9D9] transition-all duration-300 ${className || ''}`}>{children}</div>;
};

export default Updates;