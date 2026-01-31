import React from 'react';

interface AnnouncementProps {
  className?: string;
  children?: React.ReactNode;
}

const Announcement: React.FC<AnnouncementProps> = ({ className, children }) => {
  return <div className={`bg-[#D9D9D9] h-[124px] ${className || ''}`}>{children}</div>;
};

export default Announcement;