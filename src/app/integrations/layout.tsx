import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ATS Integrations: JobAdder, Recruit CRM, Ashby",
  description: "CallPilot connects directly to your ATS. See supported integrations including JobAdder, Recruit CRM, Ashby and Greenhouse, plus iCIMS, coming soon.",
  alternates: {
    canonical: "https://callpilot.pro/integrations",
  },
  openGraph: {
    title: "ATS Integrations: JobAdder, Recruit CRM, Ashby | CallPilot",
    description: "CallPilot connects directly to your ATS. See supported integrations including JobAdder, Recruit CRM, Ashby and Greenhouse, plus iCIMS, coming soon.",
    url: "https://callpilot.pro/integrations",
    siteName: "CallPilot",
    type: "website",
    images: [
      {
        url: "https://callpilot.pro/images/og-callpilot.png",
        width: 1200,
        height: 630,
        alt: "CallPilot ATS Integrations",
      },
    ],
  },
};

export default function IntegrationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
