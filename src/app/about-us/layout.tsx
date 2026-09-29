import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Meet the team behind CallPilot. We build practical AI calling automations that help businesses scale without enterprise-level complexity.",
  alternates: {
    canonical: "https://callpilot.pro/about-us",
  },
  openGraph: {
    title: "About Us | CallPilot",
    description: "Meet the team behind CallPilot. We build practical AI calling automations that help businesses scale without enterprise-level complexity.",
    url: "https://callpilot.pro/about-us",
    siteName: "CallPilot",
    type: "website",
    images: [
      {
        url: "https://callpilot.pro/images/og-callpilot.png",
        width: 1200,
        height: 630,
        alt: "About CallPilot",
      },
    ],
  },
};

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
