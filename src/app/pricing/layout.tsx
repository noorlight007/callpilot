import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - AI Applicant Screening Call Plans | CallPilot.pro",
  description: "Simple per-screening pricing for AI applicant screening calls. No call, no charge — pick the plan that matches your hiring volume.",
  alternates: {
    canonical: "https://callpilot.pro/pricing",
  },
  openGraph: {
    title: "Pricing - AI Applicant Screening Call Plans | CallPilot.pro",
    description: "Simple per-screening pricing for AI applicant screening calls. No call, no charge — pick the plan that matches your hiring volume.",
    url: "https://callpilot.pro/pricing",
    siteName: "CallPilot",
    type: "website",
    images: [
      {
        url: "https://callpilot.pro/og-image.png",
        width: 1200,
        height: 630,
        alt: "CallPilot Pricing Plans",
      },
    ],
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
