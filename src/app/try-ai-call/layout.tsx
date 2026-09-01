import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Try a Free AI Call - CallPilot.pro",
  description: "Experience CallPilot first-hand. Receive a free test AI call and witness our natural voice system in action.",
  alternates: {
    canonical: "https://callpilot.pro/try-ai-call",
  },
  openGraph: {
    title: "Try a Free AI Call - CallPilot.pro",
    description: "Experience CallPilot first-hand. Receive a free test AI call and witness our natural voice system in action.",
    url: "https://callpilot.pro/try-ai-call",
    siteName: "CallPilot",
    type: "website",
    images: [
      {
        url: "https://callpilot.pro/og-image.png",
        width: 1200,
        height: 630,
        alt: "Try a Free AI Call with CallPilot",
      },
    ],
  },
};

export default function TryAiCallLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
