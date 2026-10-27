import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Who CallPilot Is For: Agencies & TA Teams",
  description: "How ATS, HCM and CRM platforms, staffing agencies, talent acquisition teams and high-volume employers use CallPilot's AI applicant screening calls.",
  alternates: { canonical: "https://callpilot.pro/use-cases" },
  openGraph: {
    title: "Who CallPilot Is For | CallPilot",
    description: "How ATS, HCM and CRM platforms, staffing agencies, talent acquisition teams and high-volume employers use CallPilot's AI applicant screening calls.",
    url: "https://callpilot.pro/use-cases",
    siteName: "CallPilot",
    type: "website",
    images: ["/images/og-callpilot.png"],
  },
  twitter: {
    title: "Who CallPilot Is For | CallPilot",
    description: "How ATS, HCM and CRM platforms, staffing agencies, talent acquisition teams and high-volume employers use CallPilot's AI applicant screening calls.",
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
