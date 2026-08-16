import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Voice Call Use Cases - CallPilot.pro",
  description: "See how CallPilot adapts to different sectors: Job Applications, Outbound Sales, Customer Support, and Appointment Scheduling.",
};

export default function UseCasesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
