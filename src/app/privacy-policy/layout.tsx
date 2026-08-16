import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - CallPilot.pro",
  description: "Read our privacy policy to understand how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
