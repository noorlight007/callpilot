import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Voice Call Use Cases - CallPilot.pro",
  description: "See how CallPilot adapts to different sectors: Job Applications, Outbound Sales, Customer Support, and Appointment Scheduling.",
  alternates: {
    canonical: "https://callpilot.pro/use-cases",
  },
  openGraph: {
    title: "AI Voice Call Use Cases - CallPilot.pro",
    description: "See how CallPilot adapts to different sectors: Job Applications, Outbound Sales, Customer Support, and Appointment Scheduling.",
    url: "https://callpilot.pro/use-cases",
    siteName: "CallPilot",
    type: "website",
    images: [
      {
        url: "https://callpilot.pro/og-image.png",
        width: 1200,
        height: 630,
        alt: "CallPilot Use Cases",
      },
    ],
  },
};

export default function UseCasesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
