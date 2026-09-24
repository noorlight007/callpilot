// News post: https://www.callpilot.pro/news/callpilot-launches-ai-call-agent-business-voip-lines-automation
// This is the page the press release and LinkedIn posts link back to.

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "@/components/news/NewsPost.module.css";

const font = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "700", "800"], display: "swap" });

/* ---------- CONFIG: fill before publishing ---------- */
const SITE = "https://www.callpilot.pro";
const SLUG = "/news/callpilot-launches-ai-call-agent-business-voip-lines-automation";
const PUBLISHED_ISO = "2026-09-24";
const PUBLISHED_DISPLAY = "24 September 2026";
const MEDIA_CONTACT = { name: "CallPilot Media Relations", email: "support@callpilot.pro", phone: "Available via website" };

const LINKS = {
  screening: "/ai-applicant-screening",
  voip: "/business-voip",
  demo: "/book-a-demo",
  pricing: "/pricing",
};

const TITLE = "CallPilot Launches One Platform for Business VoIP Lines, an AI Call Agent and Automation";
const DESCRIPTION =
  "CallPilot's AI applicant screening calls qualify candidates 24/7 in under 2 minutes and sync to your ATS. Business VoIP lines with automation launch soon.";
const IMAGE = "/images/hero-dashboard-laptop.webp";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "CallPilot Launches AI Call Agent, VoIP Lines & Automation",
  description: DESCRIPTION,
  keywords: [
    "AI applicant screening calls",
    "AI call agent",
    "business VoIP lines",
    "recruitment automation",
    "AI phone screening",
    "ATS integration",
  ],
  alternates: { canonical: SLUG },
  openGraph: {
    type: "article",
    url: `${SITE}${SLUG}`,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "CallPilot",
    publishedTime: PUBLISHED_ISO,
    images: [{ url: IMAGE, alt: "CallPilot AI call agent dashboard showing AI applicant screening calls" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [IMAGE] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: TITLE,
  description: DESCRIPTION,
  datePublished: PUBLISHED_ISO,
  dateModified: PUBLISHED_ISO,
  mainEntityOfPage: `${SITE}${SLUG}`,
  image: [`${SITE}${IMAGE}`],
  author: { "@type": "Organization", name: "CallPilot", url: SITE },
  publisher: {
    "@type": "Organization",
    name: "CallPilot",
    url: SITE,
    logo: { "@type": "ImageObject", url: `${SITE}/images/callpilot-logo.png` },
  },
};

export default function NewsPost() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className={`${styles.wrap} ${font.className}`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <nav className={styles.crumbs} aria-label="Breadcrumb">
          <Link href="/">Home</Link> <span aria-hidden>/</span> <Link href="/news">News</Link>
        </nav>

        <article className={styles.article}>
          <header className={styles.head}>
            <p className={styles.kicker}>Press release</p>
            <h1 className={styles.h1}>{TITLE}</h1>
            <p className={styles.standfirst}>
              AI applicant screening calls qualify job applicants 24/7 in under 2 minutes, chase documents by WhatsApp,
              SMS and email, and update the ATS automatically. Business VoIP lines are launching soon.
            </p>
            <p className={styles.meta}>
              <time dateTime={PUBLISHED_ISO}>{PUBLISHED_DISPLAY}</time> · Ras Al Khaimah, UAE
            </p>
          </header>

          <Image
            src={IMAGE}
            alt="CallPilot AI call agent dashboard showing AI applicant screening calls"
            width={1600}
            height={1350}
            priority
            sizes="(max-width: 800px) 100vw, 760px"
            className={styles.hero}
          />

          <div className={styles.body}>
            <p>
              <strong>RAS AL KHAIMAH, UAE, {PUBLISHED_DISPLAY}:</strong> <Link href="https://www.callpilot.pro">CallPilot</Link>, the AI phone calls platform from
              Swiftwave.ai, today announced one platform that brings together business VoIP lines, an AI call agent and
              workflow automation. The launch is led by CallPilot&apos;s{" "}
              <Link href={LINKS.screening}>AI applicant screening calls</Link>, which are live now for staffing agencies,
              recruitment firms and high-volume employers. Low-cost <Link href={LINKS.voip}>business VoIP lines</Link> with
              built-in automation will follow soon.
            </p>

            <h2>The problem: applicants go cold while recruiters are busy or asleep</h2>
            <p>
              High-volume hiring runs on speed. Applicants apply at all hours, often to several jobs at once, and the first
              recruiter to reach them usually wins. But recruiters can only make so many calls in a day. They spend hours
              phoning applicants who don&apos;t meet basic requirements, and hours more chasing ID and work authorisation
              documents.
            </p>
            <p>CallPilot takes that repetitive first stage off the recruiter&apos;s desk.</p>

            <h2>How CallPilot AI applicant screening calls work</h2>
            <ol>
              <li>
                <strong>The AI call agent phones every applicant, 24/7.</strong> CallPilot calls applicants day or night,
                including evenings and weekends.
              </li>
              <li>
                <strong>Role-specific screening in under 2 minutes.</strong> The AI asks the questions set for each role. A
                &quot;No&quot; on any requirement ends the screen immediately as Unsuccessful. It is not a scoring system,
                so results are clear-cut.
              </li>
              <li>
                <strong>Documents requested automatically.</strong> Qualified applicants are asked for their documents by
                WhatsApp, SMS and email, and follow-ups continue until the documents arrive.
              </li>
              <li>
                <strong>Traffic-light results in the ATS.</strong> Every outcome is written back to the recruiter&apos;s
                applicant tracking system: Qualified, Awaiting Docs or Unsuccessful.
              </li>
              <li>
                <strong>The recruiter is notified to verify.</strong> CallPilot deliberately stops at verification. The
                recruiter&apos;s judgement starts where the automation ends.
              </li>
            </ol>
            <p>
              CallPilot integrates with <strong>Recruit CRM, Ashby, Greenhouse and JobAdder</strong>, with{" "}
              <strong>iCIMS</strong> coming soon.
            </p>

            <h2>Business VoIP lines with automation: launching soon</h2>
            <p>
              Alongside AI calling, CallPilot is launching business VoIP lines for recruitment agencies and businesses of
              all sizes. One low-cost number will handle:
            </p>
            <ul>
              <li>Calls, WhatsApp, SMS and email on the same line</li>
              <li>Call forwarding, IVR menus and call routing</li>
              <li>Automation and workflows connected to the AI call agent</li>
              <li>ATS integration, so every call and message is logged in one place</li>
            </ul>
            <p>
              Businesses will be able to start with a VoIP line and add the AI call agent and automation when they are
              ready. All of it is managed from one platform.
            </p>

            <h2>Pricing and availability</h2>
            <ul>
              <li>
                <strong>AI applicant screening calls:</strong> available now.{" "}
                <Link href={LINKS.pricing}>See pricing</Link>.
              </li>
              <li>
                <strong>Business VoIP lines + automation:</strong> launching soon.{" "}
                <Link href={LINKS.voip}>Register interest</Link>.
              </li>
            </ul>

            <h2>Who CallPilot is for</h2>
            <ul>
              <li>Staffing and recruitment agencies handling large applicant volumes</li>
              <li>In-house talent teams and RPOs running high-volume hiring</li>
              <li>Businesses that want a low-cost business phone line with messaging and automation built in</li>
            </ul>

            <div className={styles.cta}>
              <p>See CallPilot screen an applicant for yourself.</p>
              <Link href={LINKS.demo} className={styles.btn}>
                Book a Demo →
              </Link>
            </div>

            <h2>About CallPilot</h2>
            <p>
              CallPilot is an AI phone calls platform that combines an AI call agent, business VoIP lines and automation.
              Its AI applicant screening calls qualify job applicants 24/7 in under 2 minutes, request documents by
              WhatsApp, SMS and email, and sync results to leading applicant tracking systems. CallPilot is a brand of
              Swiftwave.ai, operated by Swiftwave FZ-LLC, Ras Al Khaimah, United Arab Emirates.
            </p>

            <h2>Media contact</h2>
            <p>
              {MEDIA_CONTACT.name}
              <br />
              <a href={`mailto:${MEDIA_CONTACT.email}`}>{MEDIA_CONTACT.email}</a>
              <br />
              <Link href="https://www.callpilot.pro">https://www.callpilot.pro</Link>
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}


