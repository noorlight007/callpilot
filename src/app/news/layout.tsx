import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Insights - CallPilot.pro",
  description: "Read the latest articles, updates, and insights about AI voice technology and recruitment automations.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://callpilot.pro/news",
  },
  openGraph: {
    title: "News & Insights - CallPilot.pro",
    description: "Read the latest articles, updates, and insights about AI voice technology and recruitment automations.",
    url: "https://callpilot.pro/news",
    siteName: "CallPilot",
    type: "website",
    images: [
      {
        url: "https://callpilot.pro/og-image.png",
        width: 1200,
        height: 630,
        alt: "CallPilot News & Insights",
      },
    ],
  },
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
