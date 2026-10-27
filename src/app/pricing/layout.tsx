import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Pricing: AI Applicant Screening Calls",
  description: "AI applicant screening calls from $49 a month, with SMS and WhatsApp document collection and ATS sync. First 100 screening calls free.",
  alternates: {
    canonical: "https://callpilot.pro/pricing",
  },
  openGraph: {
    title: "Pricing: AI Applicant Screening Calls | CallPilot",
    description: "AI applicant screening calls from $49 a month, with SMS and WhatsApp document collection and ATS sync. First 100 screening calls free.",
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
  return (
    <>
      <BreadcrumbSchema name="Pricing" path="/pricing" />
      {children}
    </>
  );
}
