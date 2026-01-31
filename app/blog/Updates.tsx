import React from 'react';

interface UpdatesProps {
  className?: string;
  children?: React.ReactNode;
}

const Updates: React.FC<UpdatesProps> = ({ className, children }) => {
  return <div className={`bg-[#D9D9D9] ${className || ''}`}>{children}</div>;
};

export default Updates;