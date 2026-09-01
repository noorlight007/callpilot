import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - CallPilot.pro",
  description: "Read our terms of service and conditions for using CallPilot.pro and its AI voice automation services.",
  alternates: {
    canonical: "https://callpilot.pro/terms-conditions",
  },
  openGraph: {
    title: "Terms of Service - CallPilot.pro",
    description: "Read our terms of service and conditions for using CallPilot.pro and its AI voice automation services.",
    url: "https://callpilot.pro/terms-conditions",
    siteName: "CallPilot",
    type: "website",
    images: [
      {
        url: "https://callpilot.pro/og-image.png",
        width: 1200,
        height: 630,
        alt: "CallPilot Terms of Service",
      },
    ],
  },
};

export default function TermsConditionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
