import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Setup & Help Guide | CallPilot",
  description: "Step-by-step instructions for setting up your CallPilot account: provisioning AI numbers, configuring AI calls, connecting ATS integrations, and reading analytics reports.",
  alternates: {
    canonical: "https://callpilot.pro/setup-help-guide",
  },
  openGraph: {
    title: "Setup & Help Guide | CallPilot",
    description: "Step-by-step instructions for setting up your CallPilot account: provisioning AI numbers, configuring AI calls, connecting ATS integrations, and reading analytics reports.",
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
