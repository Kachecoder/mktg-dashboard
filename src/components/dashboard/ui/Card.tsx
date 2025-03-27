"use client";

import React from 'react';

interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Card({ title, children, className }: CardProps) {
  return (
    <div className={`bg-[#020003] border border-[rgba(242,235,242,0.1)] rounded-lg overflow-hidden ${className}`}>
      {title && (
        <div className="px-5 py-4 border-b border-[rgba(242,235,242,0.1)]">
          <h2 className="font-medium text-[#f2ebf2]">{title}</h2>
        </div>
      )}
      <div className="p-5">
        {children}
      </div>
    </div>
  );
}
