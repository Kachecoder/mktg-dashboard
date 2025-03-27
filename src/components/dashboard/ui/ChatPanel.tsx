"use client";

import React, { useState, useRef, useEffect } from 'react';

interface ChatPanelProps {
  className?: string;
}

export default function ChatPanel({ className }: ChatPanelProps) {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm your AI affiliate marketing assistant. How can I help you today?", sender: 'ai' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatPanelRef = useRef<HTMLDivElement>(null);
  const resizeHandleRef = useRef<HTMLDivElement>(null);
  const [isResizing, setIsResizing] = useState(false);
  const [chatWidth, setChatWidth] = useState(280);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Handle resize functionality
  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      e.preventDefault();
      setIsResizing(true);
      document.documentElement.classList.add('resizing');
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing) return;
      
      const chatPanel = chatPanelRef.current;
      if (!chatPanel) return;
      
      // Calculate new width based on mouse position
      const newWidth = window.innerWidth - e.clientX;
      
      // Limit width between 280px and 600px
      const limitedWidth = Math.max(280, Math.min(600, newWidth));
      
      setChatWidth(limitedWidth);
    };

    const handleMouseUp = () => {
      setIsResizing(false);
      document.documentElement.classList.remove('resizing');
    };

    const resizeHandle = resizeHandleRef.current;
    if (resizeHandle) {
      resizeHandle.addEventListener('mousedown', handleMouseDown);
    }
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      if (resizeHandle) {
        resizeHandle.removeEventListener('mousedown', handleMouseDown);
      }
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.documentElement.classList.remove('resizing');
    };
  }, [isResizing]);

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;
    
    // Add user message
    const newUserMessage = { id: messages.length + 1, text: inputValue, sender: 'user' };
    setMessages([...messages, newUserMessage]);
    setInputValue('');
    
    // Simulate AI response after a short delay
    setTimeout(() => {
      const aiResponses = [
        "I'm analyzing your affiliate marketing data now. Based on recent trends, Pinterest is showing the highest conversion rates for your survival niche products.",
        "Your TikTok engagement has increased by 24% this month. Consider creating more short-form video content for AI tools to capitalize on this trend.",
        "I've identified a potential opportunity in the DIY home improvement niche. Would you like me to prepare a detailed analysis?",
        "Your current ROI on Instagram campaigns is 3.2x. I recommend increasing your budget allocation for this platform.",
        "Based on market research, water filtration systems are trending in the survival niche. Consider featuring these products more prominently."
      ];
      
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      const newAiMessage = { id: messages.length + 2, text: randomResponse, sender: 'ai' };
      setMessages(prevMessages => [...prevMessages, newAiMessage]);
    }, 1000);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div 
      ref={chatPanelRef}
      className={`fixed top-0 right-0 h-full bg-[#020003] border-l border-[rgba(242,235,242,0.1)] flex flex-col z-10 transition-all ${className}`}
      style={{ width: `${chatWidth}px` }}
    >
      <div 
        ref={resizeHandleRef}
        className="absolute top-0 left-0 w-1 h-full cursor-ew-resize hover:bg-[#c902ac] group"
      >
        <div className="absolute top-1/2 left-0 w-1 h-16 -translate-y-1/2 bg-[rgba(242,235,242,0.1)] group-hover:bg-[#c902ac] transition-colors"></div>
      </div>
      
      {/* Chat Header */}
      <div className="flex justify-between items-center p-4 border-b border-[rgba(242,235,242,0.1)]">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#671791] to-[#c902ac] flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#f2ebf2]">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </div>
          <div>
            <div className="font-medium text-[#f2ebf2]">AI Assistant</div>
            <div className="text-xs text-[rgba(242,235,242,0.7)]">Online</div>
          </div>
        </div>
        
        <button 
          onClick={toggleExpand}
          className="w-8 h-8 rounded-md flex items-center justify-center bg-[rgba(242,235,242,0.05)] text-[rgba(242,235,242,0.7)] hover:bg-[rgba(242,235,242,0.1)] transition-all"
        >
          {isExpanded ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="4 14 10 14 10 20"></polyline>
              <polyline points="20 10 14 10 14 4"></polyline>
              <line x1="14" y1="10" x2="21" y2="3"></line>
              <line x1="3" y1="21" x2="10" y2="14"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 3 21 3 21 9"></polyline>
              <polyline points="9 21 3 21 3 15"></polyline>
              <line x1="21" y1="3" x2="14" y2="10"></line>
              <line x1="3" y1="21" x2="10" y2="14"></line>
            </svg>
          )}
        </button>
      </div>
      
      {/* Messages Container */}
      <div className="flex-1 p-4 overflow-y-auto scrollbar-none">
        <div className="flex flex-col gap-4">
          {messages.map((message) => (
            <div 
              key={message.id} 
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.sender === 'user' 
                    ? 'bg-[#671791] text-[#f2ebf2]' 
                    : 'bg-[rgba(242,235,242,0.05)] text-[#f2ebf2]'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      {/* Input Area */}
      <div className="p-4 border-t border-[rgba(242,235,242,0.1)]">
        <div className="flex gap-2">
          <input 
            type="text" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            className="flex-1 py-2.5 px-4 rounded-lg border border-[rgba(242,235,242,0.2)] bg-[rgba(242,235,242,0.05)] text-[#f2ebf2] text-sm focus:outline-none focus:border-[#c902ac] focus:ring-1 focus:ring-[#c902ac] placeholder-[rgba(242,235,242,0.5)]" 
            placeholder="Type your message..." 
          />
          
          <button 
            onClick={handleSendMessage}
            className="px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#671791] to-[#4a1666] text-[#f2ebf2] font-medium flex items-center gap-1.5 hover:shadow-md hover:-translate-y-0.5 transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
