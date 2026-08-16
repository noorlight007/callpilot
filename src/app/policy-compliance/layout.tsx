import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Policies & Compliance - CallPilot.pro",
  description: "Learn about Swiftwave and CallPilot's compliance measures, data security protocols, and general business calling policies.",
};

export default function PolicyComplianceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
