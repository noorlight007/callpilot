import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - CallPilot.pro",
  description: "Read our terms of service and conditions for using CallPilot.pro and its AI voice automation services.",
};

export default function TermsConditionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
