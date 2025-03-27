"use client";

import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const revenueData = [
  { name: 'Jan', value: 65000 },
  { name: 'Feb', value: 80000 },
  { name: 'Mar', value: 75000 },
  { name: 'Apr', value: 90000 },
  { name: 'May', value: 110000 },
  { name: 'Jun', value: 95000 },
  { name: 'Jul', value: 120000 },
  { name: 'Aug', value: 105000 },
  { name: 'Sep', value: 140000 },
];

const conversionsData = [
  { name: 'Jan', value: 1200 },
  { name: 'Feb', value: 1500 },
  { name: 'Mar', value: 1350 },
  { name: 'Apr', value: 1800 },
  { name: 'May', value: 2200 },
  { name: 'Jun', value: 1900 },
  { name: 'Jul', value: 2400 },
  { name: 'Aug', value: 2100 },
  { name: 'Sep', value: 2800 },
];

const trafficData = [
  { name: 'Pinterest', value: 43 },
  { name: 'Instagram', value: 27 },
  { name: 'TikTok', value: 17 },
  { name: 'Twitter', value: 7 },
  { name: 'Other', value: 6 },
];

const COLORS = ['#671791', '#8e24aa', '#ba68c8', '#d81b60', '#f06292'];

export default function ChartContainer({ className }: { className?: string }) {
  const [activeChart, setActiveChart] = useState('revenue');

  return (
    <div className={`w-full h-[300px] flex flex-col ${className}`}>
      <div className="flex gap-4 mb-4">
        <button 
          className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${activeChart === 'revenue' ? 'bg-[#671791] text-[#f2ebf2]' : 'bg-[rgba(242,235,242,0.05)] text-[rgba(242,235,242,0.7)] hover:bg-[rgba(242,235,242,0.1)]'}`}
          onClick={() => setActiveChart('revenue')}
        >
          Revenue
        </button>
        <button 
          className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${activeChart === 'conversions' ? 'bg-[#671791] text-[#f2ebf2]' : 'bg-[rgba(242,235,242,0.05)] text-[rgba(242,235,242,0.7)] hover:bg-[rgba(242,235,242,0.1)]'}`}
          onClick={() => setActiveChart('conversions')}
        >
          Conversions
        </button>
        <button 
          className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${activeChart === 'traffic' ? 'bg-[#671791] text-[#f2ebf2]' : 'bg-[rgba(242,235,242,0.05)] text-[rgba(242,235,242,0.7)] hover:bg-[rgba(242,235,242,0.1)]'}`}
          onClick={() => setActiveChart('traffic')}
        >
          Traffic
        </button>
      </div>
      
      <div className="flex-1 bg-[rgba(242,235,242,0.02)] rounded-lg border border-[rgba(242,235,242,0.1)] relative overflow-hidden">
        {activeChart === 'revenue' && (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(242,235,242,0.1)" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'rgba(242,235,242,0.5)' }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: 'rgba(242,235,242,0.5)' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#020003',
                  borderColor: 'rgba(242,235,242,0.1)',
                  borderRadius: '8px',
                  color: '#f2ebf2'
                }}
              />
              <Bar dataKey="value" fill="url(#colorGradient)" radius={[4, 4, 0, 0]} />
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#c902ac" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#671791" stopOpacity={0.8}/>
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        )}
        
        {activeChart === 'conversions' && (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={conversionsData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(242,235,242,0.1)" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'rgba(242,235,242,0.5)' }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: 'rgba(242,235,242,0.5)' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#020003',
                  borderColor: 'rgba(242,235,242,0.1)',
                  borderRadius: '8px',
                  color: '#f2ebf2'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#c902ac" 
                strokeWidth={2} 
                dot={{ fill: '#671791', strokeWidth: 2, r: 4 }} 
                activeDot={{ r: 6, fill: '#c902ac' }} 
              />
            </LineChart>
          </ResponsiveContainer>
        )}
        
        {activeChart === 'traffic' && (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={trafficData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
              >
                {trafficData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#020003',
                  borderColor: 'rgba(242,235,242,0.1)',
                  borderRadius: '8px',
                  color: '#f2ebf2'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
}