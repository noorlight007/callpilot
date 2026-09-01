import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ATS Integrations - JobAdder, Recruit CRM, Greenhouse, iCIMS | CallPilot.pro",
  description: "CallPilot connects directly to your ATS. See supported integrations including JobAdder, Recruit CRM, Greenhouse, and iCIMS.",
  alternates: {
    canonical: "https://callpilot.pro/integrations",
  },
  openGraph: {
    title: "ATS Integrations - JobAdder, Recruit CRM, Greenhouse, iCIMS | CallPilot.pro",
    description: "CallPilot connects directly to your ATS. See supported integrations including JobAdder, Recruit CRM, Greenhouse, and iCIMS.",
    url: "https://callpilot.pro/integrations",
    siteName: "CallPilot",
    type: "website",
    images: [
      {
        url: "https://callpilot.pro/og-image.png",
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
