import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy - CallPilot.pro",
  description: "Read our cookie policy to learn how and why we use cookies on our platform to enhance your experience.",
};

export default function CookiePolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
