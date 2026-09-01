import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - CallPilot.pro",
  description: "Read our privacy policy to understand how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "https://callpilot.pro/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy - CallPilot.pro",
    description: "Read our privacy policy to understand how we collect, use, and protect your personal information.",
    url: "https://callpilot.pro/privacy-policy",
    siteName: "CallPilot",
    type: "website",
    images: [
      {
        url: "https://callpilot.pro/og-image.png",
        width: 1200,
        height: 630,
        alt: "CallPilot Privacy Policy",
      },
    ],
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
