import React from 'react';

interface UpdatesProps {
  className?: string;
  children?: React.ReactNode;
}

const Updates: React.FC<UpdatesProps> = ({ className, children }) => {
  return <div className={`bg-[#D9D9D9] transition-all duration-300 flex items-center justify-center text-center p-4 text-sm${className || ''}`}>{children}</div>;
};

export default Updates;