import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Started",
  description: "Tell us about your business and we'll set up your CallPilot phone lines, AI screening calls or both. Or start with 100 free AI screening calls.",
  alternates: {
    canonical: "https://callpilot.pro/get-started",
  },
  openGraph: {
    title: "Get Started | CallPilot",
    description: "Tell us about your business and we'll set up your CallPilot phone lines, AI screening calls or both. Or start with 100 free AI screening calls.",
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
};

export default function GetStartedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
