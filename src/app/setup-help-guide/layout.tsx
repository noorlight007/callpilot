import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Setup & Help Guide",
  description: "Set up your CallPilot account step by step: AI numbers, AI calls, ATS integrations and analytics reports.",
  alternates: {
    canonical: "https://callpilot.pro/setup-help-guide",
  },
  openGraph: {
    title: "Setup & Help Guide | CallPilot",
    description: "Set up your CallPilot account step by step: AI numbers, AI calls, ATS integrations and analytics reports.",
    url: "https://callpilot.pro/setup-help-guide",
    siteName: "CallPilot",
    type: "website",
  },
};

export default function SetupHelpGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
