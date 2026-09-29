import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Who CallPilot Is For: Agencies, TA Teams & Any Business",
  description: "How staffing agencies, in-house talent teams and high-volume employers use CallPilot's AI screening calls, and how any business uses CallPilot VoIP lines.",
  alternates: { canonical: "https://callpilot.pro/use-cases" },
};

export default function UseCasesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
