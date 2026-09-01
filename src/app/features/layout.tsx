import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features - AI Call Engine, Memory & Compliance | CallPilot.pro",
  description: "See what CallPilot's AI voice platform includes: the AI Call Engine, AI Memory, compliance-by-design, and call intelligence built for recruiting teams.",
  alternates: {
    canonical: "https://callpilot.pro/features",
  },
  openGraph: {
    title: "Features - AI Call Engine, Memory & Compliance | CallPilot.pro",
    description: "See what CallPilot's AI voice platform includes: the AI Call Engine, AI Memory, compliance-by-design, and call intelligence built for recruiting teams.",
    url: "https://callpilot.pro/features",
    siteName: "CallPilot",
    type: "website",
    images: [
      {
        url: "https://callpilot.pro/og-image.png",
        width: 1200,
        height: 630,
        alt: "CallPilot Features",
      },
    ],
  },
};

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
