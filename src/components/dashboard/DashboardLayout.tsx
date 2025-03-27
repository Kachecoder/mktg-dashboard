"use client";

import React from 'react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen bg-[#07040a]">
      {/* Sidebar */}
      <div className="w-64 h-full bg-[#020003] border-r border-[rgba(242,235,242,0.1)] flex flex-col">
        {/* Logo */}
        <div className="p-5 border-b border-[rgba(242,235,242,0.1)]">
          <div className="text-xl font-bold text-[#f2ebf2]">Kache</div>
          <div className="text-xs text-[rgba(242,235,242,0.7)]">Affiliate Marketing AI</div>
        </div>
        
        {/* Navigation */}
        <div className="flex-1 py-5 overflow-y-auto scrollbar-none">
          <div className="px-3 mb-4">
            <div className="text-xs font-medium text-[rgba(242,235,242,0.5)] uppercase tracking-wider px-3 mb-2">Main</div>
            
            <div className="space-y-1">
              <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-gradient-to-r from-[#671791] to-[#4a1666] text-[#f2ebf2]">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
                Dashboard
              </a>
              
              <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[rgba(242,235,242,0.7)] hover:bg-[rgba(242,235,242,0.05)] transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
                Analytics
              </a>
              
              <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[rgba(242,235,242,0.7)] hover:bg-[rgba(242,235,242,0.05)] transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                Audience
              </a>
              
              <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[rgba(242,235,242,0.7)] hover:bg-[rgba(242,235,242,0.05)] transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
                Content
              </a>
            </div>
          </div>
          
          <div className="px-3 mb-4">
            <div className="text-xs font-medium text-[rgba(242,235,242,0.5)] uppercase tracking-wider px-3 mb-2">Marketing</div>
            
            <div className="space-y-1">
              <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[rgba(242,235,242,0.7)] hover:bg-[rgba(242,235,242,0.05)] transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
                Campaigns
              </a>
              
              <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[rgba(242,235,242,0.7)] hover:bg-[rgba(242,235,242,0.05)] transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
                Social Media
              </a>
              
              <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[rgba(242,235,242,0.7)] hover:bg-[rgba(242,235,242,0.05)] transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                Email
              </a>
            </div>
          </div>
          
          <div className="px-3 mb-4">
            <div className="text-xs font-medium text-[rgba(242,235,242,0.5)] uppercase tracking-wider px-3 mb-2">Products</div>
            
            <div className="space-y-1">
              <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[rgba(242,235,242,0.7)] hover:bg-[rgba(242,235,242,0.05)] transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                Affiliate Products
              </a>
              
              <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[rgba(242,235,242,0.7)] hover:bg-[rgba(242,235,242,0.05)] transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                Orders
              </a>
            </div>
          </div>
        </div>
        
        {/* User Profile */}
        <div className="p-4 border-t border-[rgba(242,235,242,0.1)] flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#671791] to-[#c902ac] flex items-center justify-center text-[#f2ebf2] font-medium">
            K
          </div>
          <div>
            <div className="font-medium text-[#f2ebf2]">Kache</div>
            <div className="text-xs text-[rgba(242,235,242,0.7)]">Affiliate Marketer</div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex relative">
        {children}
      </div>
    </div>
  );
}
