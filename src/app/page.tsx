import type { Metadata } from "next";
import Header from "@/components/Header";
import { fontClass } from "@/components/home/font";
import s from "@/components/home/landing.module.css";
import HeroThree from "@/components/home/HeroThree";
import {
  VoipSection, ScreeningSection, FeaturesSection, UseCasesSection,
  PricingSection, DemoSection, FaqSection, FinalCta,
} from "@/components/home/Sections";
import SiteFooter from "@/components/home/SiteFooter";
import { FAQS } from "@/components/home/content";

const SITE = "https://callpilot.pro";
const TITLE = "VoIP Phone Lines + AI Applicant Screening Calls | CallPilot";
const DESCRIPTION =
  "Low-cost VoIP phone lines with WhatsApp, SMS and email automation, plus AI applicant screening calls that qualify every applicant 24/7 in under 2 minutes.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,
  keywords: [
    "VoIP phone lines", "business VoIP", "WhatsApp calling", "SMS automation", "email automation",
    "AI applicant screening", "AI screening calls", "AI call agent", "recruitment automation", "ATS integration",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "CallPilot",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_GB",
    images: [{ url: "/images/og-callpilot.png", width: 1200, height: 630, alt: "CallPilot: VoIP Phone Lines + AI Applicant Screening" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/images/og-callpilot.png"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
};

// Structured data: verified facts only.
const jsonLd = {
  "@context": "https://schema.org/",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE}/#org`,
      name: "CallPilot",
      url: SITE,
      logo: `${SITE}/images/callpilot-logo.png`,
      sameAs: [
        "https://www.linkedin.com/company/callpilot-ai-call/",
        "https://www.instagram.com/callpilot.pro/",
        "https://www.facebook.com/profile.php?id=61588398835586",
      ],
      parentOrganization: {
        "@type": "Organization",
        name: "Swiftwave FZ-LLC",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: SITE,
      name: "CallPilot",
      publisher: {
        "@id": `${SITE}/#org`,
      },
    },
  ],
};

export default function Page() {
  return (
    <div className={`${s.page} ${fontClass}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main id="main">
        <HeroThree /> 
        {/* the LIVE hero: keep your existing components/home/HeroThree.tsx exactly as it is */}
        <VoipSection />
        <ScreeningSection />
        <FeaturesSection />
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
