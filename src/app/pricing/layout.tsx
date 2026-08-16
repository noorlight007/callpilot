import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Plans - CallPilot.pro",
  description: "Affordable, transparent AI voice call packages. Choose between Starter, Growing, Pro, and Enterprise tiers with no contracts.",
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
