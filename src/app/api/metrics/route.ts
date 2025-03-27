import { NextResponse } from 'next/server';

export async function GET() {
  // In a real app, you would fetch from your database here
  const data = {
    revenue: 528976,
    conversionRate: 4.2,
    clickThroughRate: 8.7,
    averageOrderValue: 86.50,
    topProducts: [
      { name: "Emergency Food Kit (30-day)", revenue: 209633, conversions: 2425, rate: 5.8 },
      { name: "Solar Power Generator", revenue: 156841, conversions: 1832, rate: 4.2 },
      { name: "AI Writing Assistant (Annual)", revenue: 117115, conversions: 1356, rate: 3.9 },
    ],
    trafficSources: [
      { name: "Pinterest", value: 227459, percentage: 43 },
      { name: "Instagram", value: 142823, percentage: 27 },
    ]
  };

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 800));

  return NextResponse.json(data);
}