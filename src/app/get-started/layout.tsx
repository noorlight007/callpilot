import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Started - CallPilot.pro",
  description: "Sign up for CallPilot today and experience next-generation AI calling automations for your business.",
};

export default function GetStartedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
