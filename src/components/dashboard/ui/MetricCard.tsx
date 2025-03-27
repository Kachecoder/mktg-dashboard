"use client";

import React from 'react';
import Animation from '../../animations/Animation';
import Animation, { FadeIn } from '../../animations/Animation';
  
interface MetricCardProps {
  label: string;
  value: string;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  className?: string;
  delay?: number;
}

export default function MetricCard({ label, value, trend, className, delay = 0 }: MetricCardProps) {
  return (
    <FadeIn delay={delay}>
      <div className={`bg-[#020003] border border-[rgba(242,235,242,0.1)] rounded-lg p-5 hover:border-[rgba(242,235,242,0.3)] transition-all ${className}`}>
        <div className="text-sm text-[rgba(242,235,242,0.7)] mb-1">{label}</div>
        <div className="text-2xl font-bold text-[#f2ebf2] mb-2">{value}</div>
        
        {trend && (
          <div className={`text-xs flex items-center gap-1 ${trend.isPositive ? 'text-green-400' : 'text-red-400'}`}>
            {trend.isPositive ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            )}
            {trend.value}
          </div>
        )}
      </div>
    </FadeIn>
  );
}