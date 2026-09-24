import type { Metadata } from "next";
import Header from "@/components/Header";
import HeroThree from "@/components/home/HeroThree";
import Features from "@/components/Features";
import UseCases from "@/components/UseCases";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import VoipTeaser from "@/components/VoipTeaser";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const SITE = "https://www.callpilot.pro";
const TITLE = "VoIP Phone Lines + AI Applicant Screening Calls | CallPilot";
const DESCRIPTION =
  "Low-cost VoIP phone lines with WhatsApp, SMS and email automation, plus AI applicant screening calls that qualify every applicant 24/7 in under 2 minutes.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "VoIP phone lines",
    "business VoIP",
    "WhatsApp calling",
    "SMS automation",
    "email automation",
    "AI applicant screening",
    "AI screening calls",
    "AI call agent",
    "recruitment automation",
    "ATS integration",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "CallPilot",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_GB",
    images: [{ url: "/images/hero-dashboard-laptop.webp", width: 1200, height: 630, alt: "CallPilot: VoIP Phone Lines + AI Applicant Screening" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/images/hero-dashboard-laptop.webp"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
};

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
      featureList: [
        "VoIP phone lines",
        "WhatsApp calling and messaging",
        "SMS and email automation",
        "Call forwarding, IVR and routing",
        "AI applicant screening calls",
        "ATS integration: JobAdder, Recruit CRM, Ashby, Greenhouse",
      ],
    },
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main id="main">
        <HeroThree />
        <Features />
        <UseCases />
        <Pricing />
        <CTASection />

        {/* Business VoIP Announcement Banner */}
        <section className="py-6 bg-blue-50/50 border-y border-blue-100 text-center px-4">
          <div className="container mx-auto max-w-4xl flex items-center justify-center">
            <VoipTeaser variant="home" />
          </div>
        </section>

        {/* Custom Solutions */}
        <section className="py-10 lg:py-15">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-headline mb-4">
                Custom Solutions for Your Business
              </h2>
              <p className="text-lg text-body max-w-2xl mx-auto mb-8">
                Every business is unique. Order custom functionalities tailored to your specific
                needs—from specialized workflows to bespoke integrations.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/get-started">
                  <Button variant="cta" size="xl" className="w-full sm:w-auto group">
                    Contact Sales
                    <ArrowRight size={18} className="ml-1 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button variant="ctaSecondary" size="xl" className="w-full sm:w-auto">
                    View Pricing
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

