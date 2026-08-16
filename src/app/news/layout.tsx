import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Insights - CallPilot.pro",
  description: "Read the latest articles, updates, and insights about AI voice technology and recruitment automations.",
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
