import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Applicant Screening Calls & ATS Automation | CallPilot",
  description: "CallPilot provides AI applicant screening calls, automated qualification, WhatsApp and SMS workflows, document collection and ATS status updates for recruitment teams.",
  alternates: {
    canonical: "https://swiftwave.ai/callpilot",
  },
};

export default function CallPilotLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
