"use client";

import React from 'react';

interface ReferrerItemProps {
  icon: string;
  name: string;
  value: string;
  percentage: string;
  className?: string;
}

export default function ReferrerItem({ icon, name, value, percentage, className }: ReferrerItemProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm bg-gradient-to-br from-[#c902ac] to-[#671791] text-[#f2ebf2]">
        {icon}
      </div>
      
      <div className="flex-1">
        <div className="flex justify-between items-center mb-1">
          <div className="font-medium text-[#f2ebf2]">{name}</div>
          <div className="text-[#f2ebf2]">{value}</div>
        </div>
        
        <div className="w-full h-1.5 bg-[rgba(242,235,242,0.1)] rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-[#671791] to-[#c902ac] rounded-full" 
            style={{ width: percentage }}
          ></div>
        </div>
      </div>
    </div>
  );
}
