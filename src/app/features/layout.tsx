import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Features: VoIP Lines, AI Screening & Automation",
  description: "Everything in CallPilot: VoIP phone lines with WhatsApp, SMS and email, AI applicant screening calls, automated follow-up and ATS sync.",
  alternates: { canonical: "https://callpilot.pro/features" },
  openGraph: {
    title: "Features: VoIP Lines, AI Screening & Automation | CallPilot",
    description: "Everything in CallPilot: VoIP phone lines with WhatsApp, SMS and email, AI applicant screening calls, automated follow-up and ATS sync.",
    url: "https://callpilot.pro/features",
    siteName: "CallPilot",
    type: "website",
    images: ["https://callpilot.pro/images/og-callpilot.png"],
  },
  twitter: {
    title: "Features: VoIP Lines, AI Screening & Automation | CallPilot",
    description: "Everything in CallPilot: VoIP phone lines with WhatsApp, SMS and email, AI applicant screening calls, automated follow-up and ATS sync.",
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
