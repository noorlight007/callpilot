import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Get Started",
  description: "Get started with CallPilot: VoIP phone lines with WhatsApp, SMS and email, plus AI applicant screening calls synced to your ATS.",
  alternates: {
    canonical: "https://callpilot.pro/get-started",
  },
  openGraph: {
    title: "Get Started | CallPilot",
    description: "Get started with CallPilot: VoIP phone lines with WhatsApp, SMS and email, plus AI applicant screening calls synced to your ATS.",
    url: "https://callpilot.pro/get-started",
    siteName: "CallPilot",
    type: "website",
    images: [
      {
        url: "https://callpilot.pro/images/og-callpilot.png",
        width: 1200,
        height: 630,
        alt: "Get Started with CallPilot",
      },
    ],
  },
  twitter: {
    title: "Get Started | CallPilot",
    description: "Get started with CallPilot: VoIP phone lines with WhatsApp, SMS and email, plus AI applicant screening calls synced to your ATS.",
    images: ["/images/og-callpilot.png"],
  },
};

export default function GetStartedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbSchema name="Get Started" path="/get-started" />
      {children}
    </>
  );
}
