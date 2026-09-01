import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy - CallPilot.pro",
  description: "Read our cookie policy to learn how and why we use cookies on our platform to enhance your experience.",
  alternates: {
    canonical: "https://callpilot.pro/cookie-policy",
  },
  openGraph: {
    title: "Cookie Policy - CallPilot.pro",
    description: "Read our cookie policy to learn how and why we use cookies on our platform to enhance your experience.",
    url: "https://callpilot.pro/cookie-policy",
    siteName: "CallPilot",
    type: "website",
    images: [
      {
        url: "https://callpilot.pro/og-image.png",
        width: 1200,
        height: 630,
        alt: "CallPilot Cookie Policy",
      },
    ],
  },
};

export default function CookiePolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
