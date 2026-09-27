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
  title: TITLE,
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
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE}/#org`,
      name: "CallPilot",
      url: SITE,
      logo: `${SITE}/images/callpilot-logo.png`,
      parentOrganization: { "@type": "Organization", name: "Swiftwave FZ-LLC", url: "https://swiftwave.ai" },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Compass Building, Al Shohada Road, Al Hamra Industrial Zone-FZ",
        addressLocality: "Ras Al Khaimah",
        addressCountry: "AE",
      },
    },
    { "@type": "WebSite", "@id": `${SITE}/#website`, url: SITE, name: "CallPilot", publisher: { "@id": `${SITE}/#org` } },
    {
      "@type": "SoftwareApplication",
      name: "CallPilot",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: SITE,
      publisher: { "@id": `${SITE}/#org` },
      description:
        "VoIP phone lines with WhatsApp calling and messaging, SMS and email automation, plus AI applicant screening calls that qualify applicants 24/7 in under 2 minutes and sync results to your ATS.",
      offers: [
        { "@type": "Offer", name: "CallPilot VoIP", price: "5.99", priceCurrency: "USD", description: "Per VoIP line per month" },
        { "@type": "Offer", name: "CallPilot VoIP + 100 minutes", price: "9.99", priceCurrency: "USD", description: "Per VoIP line per month, 100 outbound minutes" },
        { "@type": "Offer", name: "CallPilot VoIP + Automation", price: "14.99", priceCurrency: "USD", description: "Per VoIP line per month, 100 outbound minutes and automation" },
        { "@type": "Offer", name: "AI Screening Starter", price: "395", priceCurrency: "USD", description: "100 screenings per month" },
        { "@type": "Offer", name: "AI Screening Growth", price: "1400", priceCurrency: "USD", description: "400 screenings per month" },
        { "@type": "Offer", name: "AI Screening Pro", price: "2950", priceCurrency: "USD", description: "1,000 screenings per month" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ],
};

export default function Page() {
  return (
    <div className={`${s.page} ${fontClass}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main id="main">
        <HeroThree /> {/* the LIVE hero: keep your existing components/home/HeroThree.tsx exactly as it is */}
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
