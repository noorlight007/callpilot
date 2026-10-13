import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "About CallPilot: AI Screening & VoIP Lines",
  description: "Meet the team behind CallPilot. We build practical AI calling automations that help businesses scale without enterprise-level complexity.",
  alternates: {
    canonical: "https://callpilot.pro/about-us",
  },
  openGraph: {
    title: "About CallPilot: AI Screening & VoIP Lines | CallPilot",
    description: "Meet the team behind CallPilot. We build practical AI calling automations that help businesses scale without enterprise-level complexity.",
    url: "https://callpilot.pro/about-us",
    siteName: "CallPilot",
    type: "website",
    images: [
      {
        url: "https://callpilot.pro/images/og-callpilot.png",
        width: 1200,
        height: 630,
        alt: "About CallPilot",
      },
    ],
  },
};

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbSchema name="About Us" path="/about-us" />
      {children}
    </>
  );
}
