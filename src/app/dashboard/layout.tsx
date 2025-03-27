import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - Kache Affiliate Marketing AI",
  description: "AI-powered affiliate marketing dashboard",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>{children}</div>
  );
}
