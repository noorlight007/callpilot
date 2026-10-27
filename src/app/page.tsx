import type { Metadata } from "next";
import Header from "@/components/Header";
import { fontClass } from "@/components/home/font";
import s from "@/components/home/landing.module.css";
import HomeHero from "@/components/home/HomeHero";
import {
  StorySection, GettingStartedSection, IntegrationsSection, UseCasesSection,
  PricingSection, DemoSection, FaqSection, FinalCta,
} from "@/components/home/Sections";
import SiteFooter from "@/components/home/SiteFooter";
import CallPilotSchema from "@/components/seo/CallPilotSchema";

const SITE = "https://callpilot.pro";
const TITLE = "AI Applicant Screening Calls + Automation | CallPilot";
const DESCRIPTION =
  "CallPilot pre-qualifies applicants by phone 24/7, collects ID and documents by SMS or WhatsApp, and records every outcome in your ATS. First 100 calls free.";

export const revalidate = 300; // rebuild at most every 5 minutes, never serve a stale build for days

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,
  keywords: [
    "AI applicant screening", "AI screening calls", "applicant pre-qualification", "recruitment automation",
    "document collection", "ATS integration", "JobAdder", "Recruit CRM", "Ashby", "Greenhouse",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "CallPilot",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_GB",
    images: [{ url: "/images/og-callpilot.png", width: 1200, height: 630, alt: "CallPilot: AI Applicant Screening Calls + Automation" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/images/og-callpilot.png"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
};

export default function Page() {
  return (
    <div className={`${s.page} ${fontClass}`}>
      <CallPilotSchema />
      <Header />
      <main id="main">
        <HomeHero />
        <StorySection />
        <GettingStartedSection />
        <IntegrationsSection />
        <UseCasesSection />
        <PricingSection />
        <DemoSection />
        <FaqSection />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}
