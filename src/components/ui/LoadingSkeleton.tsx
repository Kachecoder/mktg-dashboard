"use client";

export function MetricCardSkeleton() {
  return (
    <div className="bg-[#020003] border border-[rgba(242,235,242,0.1)] rounded-lg p-5 animate-pulse">
      <div className="h-4 w-1/2 bg-[rgba(242,235,242,0.1)] rounded mb-3"></div>
      <div className="h-8 w-3/4 bg-[rgba(242,235,242,0.1)] rounded mb-4"></div>
      <div className="h-3 w-full bg-[rgba(242,235,242,0.1)] rounded"></div>
    </div>
  );
}

export function ChartSkeleton() {
  return (
    <div className="w-full h-[300px] bg-[rgba(242,235,242,0.02)] rounded-lg border border-[rgba(242,235,242,0.1)] animate-pulse">
      <div className="flex gap-4 p-4">
        <div className="h-8 w-20 bg-[rgba(242,235,242,0.1)] rounded-md"></div>
        <div className="h-8 w-20 bg-[rgba(242,235,242,0.1)] rounded-md"></div>
        <div className="h-8 w-20 bg-[rgba(242,235,242,0.1)] rounded-md"></div>
      </div>
      <div className="h-[200px] w-full bg-[rgba(242,235,242,0.05)] mt-4"></div>
    </div>
  );
}