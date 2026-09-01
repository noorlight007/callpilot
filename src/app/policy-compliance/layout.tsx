import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Policies & Compliance - CallPilot.pro",
  description: "Learn about Swiftwave and CallPilot's compliance measures, data security protocols, and general business calling policies.",
  alternates: {
    canonical: "https://callpilot.pro/policy-compliance",
  },
  openGraph: {
    title: "Policies & Compliance - CallPilot.pro",
    description: "Learn about Swiftwave and CallPilot's compliance measures, data security protocols, and general business calling policies.",
    url: "https://callpilot.pro/policy-compliance",
    siteName: "CallPilot",
    type: "website",
    images: [
      {
        url: "https://callpilot.pro/og-image.png",
        width: 1200,
        height: 630,
        alt: "CallPilot Policies and Compliance",
      },
    ],
  },
};

export default function PolicyComplianceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
