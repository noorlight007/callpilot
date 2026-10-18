import type { Metadata } from "next";
import { META } from "@/lib/pricing";

const TITLE = "Get Free AI Screening Credits | CallPilot";

// Shareable promo URL for LinkedIn. Canonical points at /free-trial so the two
// pages do not compete in search; noindex keeps the promo URL out of results.
export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: META.freeTrial,
  alternates: { canonical: "https://callpilot.pro/free-trial" },
  robots: { index: false, follow: true },
  openGraph: {
    title: TITLE,
    description: META.freeTrial,
    url: "https://callpilot.pro/free-credits",
    siteName: "CallPilot",
    type: "website",
    images: [{ url: "/images/og-callpilot.png", width: 1200, height: 630, alt: "CallPilot free AI screening credits" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: META.freeTrial, images: ["/images/og-callpilot.png"] },
};

export default function FreeCreditsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
