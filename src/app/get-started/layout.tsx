import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Started - CallPilot.pro",
  description: "Sign up for CallPilot today and experience next-generation AI calling automations for your business.",
  alternates: {
    canonical: "https://callpilot.pro/get-started",
  },
  openGraph: {
    title: "Get Started - CallPilot.pro",
    description: "Sign up for CallPilot today and experience next-generation AI calling automations for your business.",
    url: "https://callpilot.pro/get-started",
    siteName: "CallPilot",
    type: "website",
    images: [
      {
        url: "https://callpilot.pro/og-image.png",
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
