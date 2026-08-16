import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Try a Free AI Call - CallPilot.pro",
  description: "Experience CallPilot first-hand. Receive a free test AI call and witness our natural voice system in action.",
};

export default function TryAiCallLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
