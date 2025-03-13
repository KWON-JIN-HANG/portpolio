'use client';

import { ReactNode } from 'react';
import { useEffect, useState } from 'react';

interface MobileLayoutProps {
  children: ReactNode;
  currentPage: number;
  totalPages: number;
}

const MobileLayout = ({ children, currentPage, totalPages }: MobileLayoutProps) => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setTime(`${hours}:${minutes}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mobile-frame">
      {/* Status Bar */}
      <div className="mobile-status-bar">
        <div className="flex items-center space-x-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
          <span>{time}</span>
        </div>
        <div className="flex items-center space-x-2">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21a2 2 0 01-1.41-.59l-.83-.82a2 2 0 00-2.82 0l-.82.82a2 2 0 01-2.83-2.83l.82-.82a2 2 0 000-2.82l-.82-.83a2 2 0 012.83-2.83l.82.82a2 2 0 002.82 0l.82-.82a2 2 0 012.83 2.83l-.82.82a2 2 0 000 2.82l.82.82A2 2 0 0112 21z" />
          </svg>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 00-3-3.87"></path>
            <path d="M16 3.13a4 4 0 010 7.75"></path>
          </svg>
        </div>
      </div>

      {/* Content Area */}
      <div className="h-full overflow-y-auto px-6 py-4 bg-gray-50 dark:bg-gray-900">
        {children}
      </div>

      {/* Bottom Navigation Bar */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="progress-bar">
          <div 
            className="progress-value"
            style={{ width: `${(currentPage / totalPages) * 100}%` }}
          />
        </div>
      </div>

      {/* iPhone-style Home Indicator */}
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-900 dark:bg-gray-100 rounded-full opacity-20" />
    </div>
  );
};

export default MobileLayout;