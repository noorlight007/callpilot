import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing: VoIP Lines & AI Applicant Screening",
  description: "CallPilot VoIP lines from $5.99 a month with WhatsApp, SMS and email. AI applicant screening from $395 a month. First 100 screening calls free. No call, no charge.",
  alternates: {
    canonical: "https://callpilot.pro/pricing",
  },
  openGraph: {
    title: "Pricing: VoIP Lines & AI Applicant Screening | CallPilot",
    description: "CallPilot VoIP lines from $5.99 a month with WhatsApp, SMS and email. AI applicant screening from $395 a month. First 100 screening calls free. No call, no charge.",
    url: "https://callpilot.pro/pricing",
    siteName: "CallPilot",
    type: "website",
    images: [
      {
        url: "https://callpilot.pro/images/og-callpilot.png",
        width: 1200,
        height: 630,
        alt: "CallPilot Pricing",
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
