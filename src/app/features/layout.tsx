import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features: VoIP Lines, AI Screening Calls & Automation",
  description: "Everything in CallPilot: business VoIP lines with WhatsApp, SMS and email, AI applicant screening calls, automated follow-up and ATS sync.",
  alternates: { canonical: "https://callpilot.pro/features" },
  openGraph: {
    images: ["https://callpilot.pro/images/og-callpilot.png"],
  },
};

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
