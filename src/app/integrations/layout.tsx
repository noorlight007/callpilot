import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ATS & CRM Integrations - CallPilot.pro",
  description: "Connect CallPilot with your applicant tracking systems and CRMs. Now live with JobAdder. Seamless automated screenings.",
};

export default function IntegrationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
