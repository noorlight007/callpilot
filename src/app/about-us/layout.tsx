import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - CallPilot.pro",
  description: "Meet the team behind CallPilot. We build practical AI calling automations that help businesses scale without enterprise-level complexity.",
};

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
