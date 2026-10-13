import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Who CallPilot Is For: Agencies & TA Teams",
  description: "How staffing agencies, in-house talent teams and high-volume employers use CallPilot's AI screening calls, and how any business uses CallPilot VoIP lines.",
  alternates: { canonical: "https://callpilot.pro/use-cases" },
  openGraph: {
    title: "Who CallPilot Is For | CallPilot",
    description: "How staffing agencies, in-house talent teams and high-volume employers use CallPilot's AI screening calls, and how any business uses CallPilot VoIP lines.",
    url: "https://callpilot.pro/use-cases",
    siteName: "CallPilot",
    type: "website",
    images: ["/images/og-callpilot.png"],
  },
  twitter: {
    title: "Who CallPilot Is For | CallPilot",
    description: "How staffing agencies, in-house talent teams and high-volume employers use CallPilot's AI screening calls, and how any business uses CallPilot VoIP lines.",
    images: ["/images/og-callpilot.png"],
  },
};

export default function UseCasesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbSchema name="Use Cases" path="/use-cases" />
      {children}
    </>
  );
}
