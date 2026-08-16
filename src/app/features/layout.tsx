import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Voice Platform Features - CallPilot.pro",
  description: "Discover the complete AI voice platform. From advanced call engines and CRM integrations to compliance by design and call intelligence.",
};

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
