"use client";

import { useEffect, useState } from 'react';
import { MetricCardSkeleton, ChartSkeleton } from './LoadingSkeleton';
import React from 'react';
import DashboardLayout from './DashboardLayout';
import MetricCard from './ui/MetricCard';
import Card from './ui/Card';
import ChatPanel from './ui/ChatPanel';
import ChartContainer from './ui/ChartContainer';
import ReferrerItem from './ui/ReferrerItem';


"use client";

import { useEffect, useState } from 'react';
import MetricCard from './MetricCard';
import ChartContainer from './ChartContainer';
import { MetricCardSkeleton, ChartSkeleton } from './LoadingSkeleton';

interface DashboardData {
  revenue: number;
  conversionRate: number;
  clickThroughRate: number;
  averageOrderValue: number;
  topProducts: Array<{
    name: string;
    revenue: number;
    conversions: number;
    rate: number;
  }>;
  trafficSources: Array<{
    name: string;
    value: number;
    percentage: number;
  }>;
}

export default function MainDashboard() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/metrics');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
          <MetricCardSkeleton />
          <MetricCardSkeleton />
          <MetricCardSkeleton />
          <MetricCardSkeleton />
        </div>
        <ChartSkeleton className="mb-6" />
      </div>
    );
  }

  if (!data) {
    return <div className="p-6 text-red-400">Failed to load data</div>;
  }

  return (
    <div className="p-6">
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
        <MetricCard 
          label="Total Revenue" 
          value={`$${data.revenue.toLocaleString()}`} 
          trend={{ value: "7.9% vs previous period", isPositive: true }} 
        />
        <MetricCard 
          label="Conversion Rate" 
          value={`${data.conversionRate}%`} 
          trend={{ value: "1.2% vs previous period", isPositive: true }} 
        />
        <MetricCard 
          label="Click-Through Rate" 
          value={`${data.clickThroughRate}%`} 
          trend={{ value: "2.3% vs previous period", isPositive: true }} 
        />
        <MetricCard 
          label="Average Order Value" 
          value={`$${data.averageOrderValue.toFixed(2)}`} 
          trend={{ value: "0.8% vs previous period", isPositive: false }} 
        />
      </div>

      {/* Charts */}
      <ChartContainer className="mb-6" />

      {/* Data Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          {/* Top Products Table */}
        </div>
        <div>
          {/* Traffic Sources */}
        </div>
      </div>
    </div>
  );
}


{/*


export default function MainDashboard() {
  return (
    <>
      <DashboardLayout>
        <div className="flex-1 p-6 overflow-y-auto bg-[#07040a] bg-[radial-gradient(at_10%_10%,rgba(103,23,145,0.1)_0px,transparent_50%),radial-gradient(at_90%_90%,rgba(201,2,172,0.1)_0px,transparent_50%)]">
          {/* Header *
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-[#f2ebf2]">Affiliate Dashboard</h1>

            <div className="flex gap-3">
              <div className="relative w-[400px]">
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[rgba(242,235,242,0.5)]" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input
                  type="text"
                  className="w-full py-2.5 pl-10 pr-4 rounded-lg border border-[rgba(242,235,242,0.2)] bg-[rgba(242,235,242,0.05)] text-[#f2ebf2] text-sm focus:outline-none focus:border-[#c902ac] focus:ring-1 focus:ring-[#c902ac] placeholder-[rgba(242,235,242,0.5)]"
                  placeholder="Search for campaigns, products, or metrics..."
                />
              </div>

              <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#671791] to-[#4a1666] text-[#f2ebf2] font-medium flex items-center gap-1.5 hover:shadow-md hover:-translate-y-0.5 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}>
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                New Campaign
              </button>
            </div>
          </div>

          {/* Timeframe Selector *
          <div className="flex items-center gap-3 mb-6">
            <div className="font-medium text-[#f2ebf2]">Timeframe:</div>
            <div className="px-4 py-2 rounded-lg border border-[rgba(242,235,242,0.2)] bg-[rgba(242,235,242,0.05)] text-[#f2ebf2] font-medium flex items-center gap-2 cursor-pointer hover:bg-[rgba(242,235,242,0.1)] transition-all">
              Sep 1 - Nov 30, 2023
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </div>

          {/* Metrics Row *
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
  <MetricCard 
    label="Total Revenue" 
    value="$528,976" 
    trend={{ value: "7.9% vs previous period", isPositive: true }}
    delay={0.1}
  />
  
  <MetricCard 
    label="Conversion Rate" 
    value="4.2%" 
    trend={{ value: "1.2% vs previous period", isPositive: true }}
    delay={0.2}
  />
  
  <MetricCard 
    label="Click-Through Rate" 
    value="8.7%" 
    trend={{ value: "2.3% vs previous period", isPositive: true }}
    delay={0.3}
  />
  
  <MetricCard 
    label="Average Order Value" 
    value="$86.50" 
    trend={{ value: "0.8% vs previous period", isPositive: false }}
    delay={0.4}
  />
</div>

          {/* Revenue Chart *
          <Card title="Revenue Trends" className="mb-6">
            <ChartContainer />
          </Card>

          {/* Two Column Layout *
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Top Performing Links - Takes 2/3 width on large screens *
            <Card title="Top Performing Links" className="lg:col-span-2">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="py-3 px-4 text-left font-semibold text-[rgba(242,235,242,0.7)] text-sm border-b border-[rgba(242,235,242,0.2)]">Product</th>
                      <th className="py-3 px-4 text-left font-semibold text-[rgba(242,235,242,0.7)] text-sm border-b border-[rgba(242,235,242,0.2)]">Revenue</th>
                      <th className="py-3 px-4 text-left font-semibold text-[rgba(242,235,242,0.7)] text-sm border-b border-[rgba(242,235,242,0.2)]">Conversions</th>
                      <th className="py-3 px-4 text-left font-semibold text-[rgba(242,235,242,0.7)] text-sm border-b border-[rgba(242,235,242,0.2)]">Conv. Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-[rgba(242,235,242,0.05)]">
                      <td className="py-3 px-4 border-b border-[rgba(242,235,242,0.1)] text-[#f2ebf2]">Emergency Food Kit (30-day)</td>
                      <td className="py-3 px-4 border-b border-[rgba(242,235,242,0.1)] text-[#f2ebf2]">$209,633</td>
                      <td className="py-3 px-4 border-b border-[rgba(242,235,242,0.1)] text-[#f2ebf2]">2,425</td>
                      <td className="py-3 px-4 border-b border-[rgba(242,235,242,0.1)] text-[#f2ebf2]">5.8%</td>
                    </tr>
                    <tr className="hover:bg-[rgba(242,235,242,0.05)]">
                      <td className="py-3 px-4 border-b border-[rgba(242,235,242,0.1)] text-[#f2ebf2]">Solar Power Generator</td>
                      <td className="py-3 px-4 border-b border-[rgba(242,235,242,0.1)] text-[#f2ebf2]">$156,841</td>
                      <td className="py-3 px-4 border-b border-[rgba(242,235,242,0.1)] text-[#f2ebf2]">1,832</td>
                      <td className="py-3 px-4 border-b border-[rgba(242,235,242,0.1)] text-[#f2ebf2]">4.2%</td>
                    </tr>
                    <tr className="hover:bg-[rgba(242,235,242,0.05)]">
                      <td className="py-3 px-4 border-b border-[rgba(242,235,242,0.1)] text-[#f2ebf2]">AI Writing Assistant (Annual)</td>
                      <td className="py-3 px-4 border-b border-[rgba(242,235,242,0.1)] text-[#f2ebf2]">$117,115</td>
                      <td className="py-3 px-4 border-b border-[rgba(242,235,242,0.1)] text-[#f2ebf2]">1,356</td>
                      <td className="py-3 px-4 border-b border-[rgba(242,235,242,0.1)] text-[#f2ebf2]">3.9%</td>
                    </tr>
                    <tr className="hover:bg-[rgba(242,235,242,0.05)]">
                      <td className="py-3 px-4 border-b border-[rgba(242,235,242,0.1)] text-[#f2ebf2]">Water Filtration System</td>
                      <td className="py-3 px-4 border-b border-[rgba(242,235,242,0.1)] text-[#f2ebf2]">$45,386</td>
                      <td className="py-3 px-4 border-b border-[rgba(242,235,242,0.1)] text-[#f2ebf2]">524</td>
                      <td className="py-3 px-4 border-b border-[rgba(242,235,242,0.1)] text-[#f2ebf2]">2.7%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>

            {/* Traffic Sources - Takes 1/3 width on large screens *
            <Card title="Traffic Sources">
              <div className="flex flex-col gap-4">
                <ReferrerItem
                  icon="P"
                  name="Pinterest"
                  value="$227,459"
                  percentage="43%"
                />

                <ReferrerItem
                  icon="I"
                  name="Instagram"
                  value="$142,823"
                  percentage="27%"
                />

                <ReferrerItem
                  icon="T"
                  name="TikTok"
                  value="$89,935"
                  percentage="17%"
                />

                <ReferrerItem
                  icon="X"
                  name="Twitter"
                  value="$37,028"
                  percentage="7%"
                />

                <ReferrerItem
                  icon="O"
                  name="Other"
                  value="$31,731"
                  percentage="6%"
                />
              </div>
            </Card>
          </div>

          {/* Social Media Performance *
          <Card title="Social Media Performance" className="mb-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="py-3 px-4 text-left font-semibold text-[rgba(242,235,242,0.7)] text-sm border-b border-[rgba(242,235,242,0.2)]">Platform</th>
                    <th className="py-3 px-4 text-left font-semibold text-[rgba(242,235,242,0.7)] text-sm border-b border-[rgba(242,235,242,0.2)]">Followers</th>
                    <th className="py-3 px-4 text-left font-semibold text-[rgba(242,235,242,0.7)] text-sm border-b border-[rgba(242,235,242,0.2)]">Engagement</th>
                    <th className="py-3 px-4 text-left font-semibold text-[rgba(242,235,242,0.7)] text-sm border-b border-[rgba(242,235,242,0.2)]">CTR</th>
                    <th className="py-3 px-4 text-left font-semibold text-[rgba(242,235,242,0.7)] text-sm border-b border-[rgba(242,235,242,0.2)]">Revenue</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-[rgba(242,235,242,0.05)]">
                    <td className="py-3 px-4 border-b border-[rgba(242,235,242,0.1)] text-[#f2ebf2]">Pinterest</td>
                    <td className="py-3 px-4 border-b border-[rgba(242,235,242,0.1)] text-[#f2ebf2]">125,450</td>
                    <td className="py-3 px-4 border-b border-[rgba(242,235,242,0.1)] text-[#f2ebf2]">4.8%</td>
                    <td className="py-3 px-4 border-b border-[rgba(242,235,242,0.1)] text-[#f2ebf2]">3.2%</td>
                    <td className="py-3 px-4 border-b border-[rgba(242,235,242,0.1)] text-[#f2ebf2]">$227,459</td>
                  </tr>
                  <tr className="hover:bg-[rgba(242,235,242,0.05)]">
                    <td className="py-3 px-4 border-b border-[rgba(242,235,242,0.1)] text-[#f2ebf2]">Instagram</td>
                    <td className="py-3 px-4 border-b border-[rgba(242,235,242,0.1)] text-[#f2ebf2]">87,320</td>
                    <td className="py-3 px-4 border-b border-[rgba(242,235,242,0.1)] text-[#f2ebf2]">3.6%</td>
                    <td className="py-3 px-4 border-b border-[rgba(242,235,242,0.1)] text-[#f2ebf2]">2.1%</td>
                    <td className="py-3 px-4 border-b border-[rgba(242,235,242,0.1)] text-[#f2ebf2]">$142,823</td>
                  </tr>
                  <tr className="hover:bg-[rgba(242,235,242,0.05)]">
                    <td className="py-3 px-4 border-b border-[rgba(242,235,242,0.1)] text-[#f2ebf2]">TikTok</td>
                    <td className="py-3 px-4 border-b border-[rgba(242,235,242,0.1)] text-[#f2ebf2]">65,780</td>
                    <td className="py-3 px-4 border-b border-[rgba(242,235,242,0.1)] text-[#f2ebf2]">5.2%</td>
                    <td className="py-3 px-4 border-b border-[rgba(242,235,242,0.1)] text-[#f2ebf2]">1.8%</td>
                    <td className="py-3 px-4 border-b border-[rgba(242,235,242,0.1)] text-[#f2ebf2]">$89,935</td>
                  </tr>
                  <tr className="hover:bg-[rgba(242,235,242,0.05)]">
                    <td className="py-3 px-4 border-b border-[rgba(242,235,242,0.1)] text-[#f2ebf2]">Twitter</td>
                    <td className="py-3 px-4 border-b border-[rgba(242,235,242,0.1)] text-[#f2ebf2]">42,150</td>
                    <td className="py-3 px-4 border-b border-[rgba(242,235,242,0.1)] text-[#f2ebf2]">2.4%</td>
                    <td className="py-3 px-4 border-b border-[rgba(242,235,242,0.1)] text-[#f2ebf2]">1.2%</td>
                    <td className="py-3 px-4 border-b border-[rgba(242,235,242,0.1)] text-[#f2ebf2]">$37,028</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>

          {/* AI Insights *
          <Card title="AI Insights & Recommendations">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center p-3 rounded-lg bg-[rgba(242,235,242,0.05)] transition-all hover:bg-[rgba(242,235,242,0.1)] hover:translate-x-0.5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm bg-gradient-to-br from-[#c902ac] to-[#671791] text-[#f2ebf2]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-[#f2ebf2]">Increase Pinterest Content for Survival Niche</div>
                    <div className="text-xs text-[rgba(242,235,242,0.7)]">Pinterest shows the highest conversion rates for survival products</div>
                  </div>
                </div>
                <div className="px-2 py-1 rounded-md bg-[rgba(201,2,172,0.2)] text-[#f2ebf2] text-xs font-medium">
                  High Impact
                </div>
              </div>

              <div className="flex justify-between items-center p-3 rounded-lg bg-[rgba(242,235,242,0.05)] transition-all hover:bg-[rgba(242,235,242,0.1)] hover:translate-x-0.5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm bg-gradient-to-br from-[#c902ac] to-[#671791] text-[#f2ebf2]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-[#f2ebf2]">Create TikTok Demonstrations for AI Tools</div>
                    <div className="text-xs text-[rgba(242,235,242,0.7)]">Short-form video demos perform exceptionally well</div>
                  </div>
                </div>
                <div className="px-2 py-1 rounded-md bg-[rgba(201,2,172,0.2)] text-[#f2ebf2] text-xs font-medium">
                  High Impact
                </div>
              </div>

              <div className="flex justify-between items-center p-3 rounded-lg bg-[rgba(242,235,242,0.05)] transition-all hover:bg-[rgba(242,235,242,0.1)] hover:translate-x-0.5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm bg-gradient-to-br from-[#c902ac] to-[#671791] text-[#f2ebf2]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-[#f2ebf2]">Optimize Instagram Ads for Engagement</div>
                    <div className="text-xs text-[rgba(242,235,242,0.7)]">Focus on carousel ads for better performance</div>
                  </div>
                </div>
                <div className="px-2 py-1 rounded-md bg-[rgba(201,2,172,0.2)] text-[#f2ebf2] text-xs font-medium">
                  Medium Impact
                </div>
              </div>
            </div>
          </Card>
          <Card>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center p-3 rounded-lg bg-[rgba(242,235,242,0.05)] transition-all hover:bg-[rgba(242,235,242,0.1)] hover:translate-x-0.5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm bg-gradient-to-br from-[#c902ac] to-[#671791] text-[#f2ebf2]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-[#f2ebf2]">Increase Pinterest Content for Survival Niche</div>
                  <div className="text-xs text-[rgba(242,235,242,0.7)]">Pinterest shows the highest conversion rates for survival products</div>
                </div>
              </div>
              <div className="px-2 py-1 rounded-md bg-[rgba(201,2,172,0.2)] text-[#f2ebf2] text-xs font-medium">
                High Impact
              </div>
            </div>

            <div className="flex justify-between items-center p-3 rounded-lg bg-[rgba(242,235,242,0.05)] transition-all hover:bg-[rgba(242,235,242,0.1)] hover:translate-x-0.5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm bg-gradient-to-br from-[#c902ac] to-[#671791] text-[#f2ebf2]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-[#f2ebf2]">Create TikTok Demonstrations for AI Tools</div>
                  <div className="text-xs text-[rgba(242,235,242,0.7)]">Short-form video demos perform exceptionally well</div>
                </div>
              </div>
              <div className="px-2 py-1 rounded-md bg-[rgba(201,2,172,0.2)] text-[#f2ebf2] text-xs font-medium">
                High Impact
              </div>
            </div>

            <div className="flex justify-between items-center p-3 rounded-lg bg-[rgba(242,235,242,0.05)] transition-all hover:bg-[rgba(242,235,242,0.1)] hover:translate-x-0.5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm bg-gradient-to-br from-[#c902ac] to-[#671791] text-[#f2ebf2]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
              </div>
              <div className="font-medium text-[#f2ebf2]">Optimize Instagram Ads for Engagement</div>
              <div className="text-xs text-[rgba(242,235,242,0.7)]">Focus on carousel ads for better performance</div>
            </div>
            <div className="px-2 py-1 rounded-md bg-[rgba(201,2,172,0.2)] text-[#f2ebf2] text-xs font-medium">
              Medium Impact
            </div>
            </div>
          </Card>
          </div>
      <ChatPanel className="hidden lg:block" />
    </DashboardLayout>
    </>
      );
    }
    */}