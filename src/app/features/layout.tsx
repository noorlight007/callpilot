import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Features: AI Screening Calls & Automation",
  description: "Everything in CallPilot: AI applicant screening calls, SMS and WhatsApp document collection, automated follow-up and ATS sync.",
  alternates: { canonical: "https://callpilot.pro/features" },
  openGraph: {
    title: "Features: AI Screening Calls & Automation | CallPilot",
    description: "Everything in CallPilot: AI applicant screening calls, SMS and WhatsApp document collection, automated follow-up and ATS sync.",
    url: "https://callpilot.pro/features",
    siteName: "CallPilot",
    type: "website",
    images: ["https://callpilot.pro/images/og-callpilot.png"],
  },
  twitter: {
    title: "Features: AI Screening Calls & Automation | CallPilot",
    description: "Everything in CallPilot: AI applicant screening calls, SMS and WhatsApp document collection, automated follow-up and ATS sync.",
    images: ["https://callpilot.pro/images/og-callpilot.png"],
  },
};

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbSchema name="Features" path="/features" />
      {children}
    </>
  );
}
