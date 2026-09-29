import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Demo",
  description: "See CallPilot on your own numbers, roles and ATS. Book a live demo with our team.",
  alternates: {
    canonical: "https://callpilot.pro/book-a-demo",
  },
  openGraph: {
    title: "Book a Demo | CallPilot",
    description: "See CallPilot on your own numbers, roles and ATS. Book a live demo with our team.",
    url: "https://callpilot.pro/book-a-demo",
    siteName: "CallPilot",
    type: "website",
    images: [
      {
        url: "https://callpilot.pro/images/og-callpilot.png",
        width: 1200,
        height: 630,
        alt: "Book a CallPilot Demo",
      },
    ],
  },
};

export default function BookADemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
