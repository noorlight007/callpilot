import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { SITE_URL, SITE_NAME, SITE_LOGO, ROUTES } from '@/config/site';
import {
  VOIP_PLANS,
  VOIP_DISCLAIMER,
  getPlan,
  formatPrice,
} from '@/config/voip';
import styles from './voip-news.module.css';

const SLUG = '/news/business-voip-whatsapp-sms-ats-integration';
const URL = `${SITE_URL}${SLUG}`;

const HERO =
  '/images/news/callpilot-business-voip-whatsapp-sms-ats-integration.webp';
const HERO_ALT =
  'CallPilot Business VoIP phone system with WhatsApp SMS ATS and CRM integration';

const TITLE =
  'Business VoIP with WhatsApp, SMS & ATS Integration | CallPilot';
const HEADLINE =
  'Business VoIP Phone System with WhatsApp, SMS & ATS Integration – Coming Soon';
const DESCRIPTION =
  'CallPilot Business VoIP is coming soon from $5.99/user/month. Get VoIP, WhatsApp, SMS and ATS/CRM integration from $9.99/user/month.';

const PUBLISHED = '2026-09-22';
const MODIFIED = '2026-09-22';

const line = getPlan('voip-line');
const automation = getPlan('voip-automation');

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'article',
    title: TITLE,
    description:
      'CallPilot Business VoIP is coming soon from $5.99/user/month. Add WhatsApp, SMS and ATS/CRM integration from $9.99/user/month.',
    url: URL,
    siteName: SITE_NAME,
    images: [{ url: `${SITE_URL}${HERO}`, width: 1600, height: 900, alt: HERO_ALT }],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description:
      'Business VoIP from $5.99/user/month. VoIP + Automation from $9.99/user/month.',
    images: [`${SITE_URL}${HERO}`],
  },
};

const newsArticleSchema = {
  '@context': 'https://schema.org',
  '@type': 'NewsArticle',
  headline: HEADLINE,
  description:
    'CallPilot Business VoIP is coming soon from $5.99 per user/month, with WhatsApp, SMS and ATS/CRM integration available from $9.99 per user/month.',
  image: [`${SITE_URL}${HERO}`],
  datePublished: PUBLISHED,
  dateModified: MODIFIED,
  author: { '@type': 'Organization', name: SITE_NAME, url: `${SITE_URL}/` },
  publisher: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    logo: { '@type': 'ImageObject', url: SITE_LOGO },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': URL },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'News & Insights', item: `${SITE_URL}${ROUTES.news}` },
    { '@type': 'ListItem', position: 3, name: 'Business VoIP', item: URL },
  ],
};

function PriceTag({ price, unit }: { price: number; unit: string }) {
  return (
    <div className={styles.price}>
      {formatPrice(price)}
      <span>{unit}</span>
    </div>
  );
}

export default function BusinessVoipNewsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <JsonLd data={newsArticleSchema} />
      <JsonLd data={breadcrumbSchema} />

      <main className="pt-28 md:pt-36">
        <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
          <Link href={ROUTES.home}>Home</Link>
          <span aria-hidden="true">›</span>
          <Link href={ROUTES.news}>News &amp; Insights</Link>
          <span aria-hidden="true">›</span>
          <span aria-current="page">Business VoIP</span>
        </nav>

        <article className={styles.newsArticle}>
          <header className={styles.articleHeader}>
            <p className={styles.articleCategory}>Product News</p>
            <h1>{HEADLINE}</h1>
            <p className={styles.articleIntro}>
              CallPilot is expanding with a new Business VoIP phone system, bringing business
              calls, WhatsApp, SMS and ATS/CRM integration together in one platform.
            </p>
            <div className={styles.articleMeta}>
              <time dateTime={PUBLISHED}>22 September 2026</time>
              <span aria-hidden="true">•</span>
              <span>4 min read</span>
            </div>
          </header>

          <figure className={styles.articleHero}>
            {/* Plain img so the exact eager/high-priority attributes survive.
                The .webp must already be compressed — see README. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={HERO}
              alt={HERO_ALT}
              width={1600}
              height={900}
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </figure>

          <section>
            <p>
              CallPilot is expanding with the launch of a new{' '}
              <strong>Business VoIP phone system</strong>, bringing business calls, WhatsApp,
              SMS and ATS/CRM integration together in one platform.
            </p>
            <p>
              Starting from just <strong>{formatPrice(line.price)} per user/month</strong>,
              CallPilot Business VoIP is being built to give businesses a simple, modern and
              affordable alternative to traditional business phone systems.
            </p>
            <p>
              Businesses looking for deeper integration and automation will be able to choose{' '}
              <strong>
                VoIP + Automation for {formatPrice(automation.price)} per user/month
              </strong>
              , connecting everyday communications directly with supported ATS and CRM
              platforms.
            </p>
          </section>

          <section>
            <h2>Business VoIP from {formatPrice(line.price)} per User/Month</h2>
            <p>
              The CallPilot VoIP Line gives businesses a straightforward cloud-based phone
              system for everyday inbound and outbound business calls.
            </p>
            <div className={styles.pricingCard}>
              <h3>{line.name}</h3>
              <PriceTag price={line.price} unit={line.unit} />
              <ul>
                {line.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
            <p>
              Whether a business is replacing a traditional office phone system or setting up
              new business numbers, CallPilot is designed to make business calling simpler and
              more affordable.
            </p>
          </section>

          <section>
            <h2>VoIP + Automation for {formatPrice(automation.price)} per User/Month</h2>
            <p>
              The real power of CallPilot comes when business communications are connected
              directly to the systems teams already use.
            </p>
            <div className={`${styles.pricingCard} ${styles.featured}`}>
              <h3>{automation.name}</h3>
              <PriceTag price={automation.price} unit={automation.unit} />
              <ul>
                {automation.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
            <p>
              Instead of operating a separate business phone system, WhatsApp account, SMS
              platform and ATS or CRM, CallPilot is being designed to connect those
              communication channels into one workflow.
            </p>
          </section>

          <section>
            <h2>VoIP Built for Recruitment Agencies</h2>
            <p>
              CallPilot Business VoIP will provide additional functionality for recruitment
              companies using supported Applicant Tracking Systems.
            </p>
            <p>
              Recruiters will be able to use <strong>click-to-call</strong> directly from
              supported ATS and CRM platforms.
            </p>
            <p>
              Call activity can then be automatically recorded against the relevant applicant
              or client record, reducing the need for recruiters to manually record every
              telephone call.
            </p>
            <p>
              With VoIP + Automation, WhatsApp and SMS can also become part of the recruitment
              workflow, creating one connected communications system for calling, messaging,
              following up and updating records.
            </p>
          </section>

          <section>
            <h2>Connect CallPilot with Your ATS or CRM</h2>
            <p>CallPilot already integrates with leading recruitment and hiring platforms.</p>
            <ul className={styles.integrationLinks}>
              <li>
                <Link href={ROUTES.jobadder}>CallPilot JobAdder Integration</Link>
              </li>
              <li>
                <Link href={ROUTES.ashby}>CallPilot Ashby Integration</Link>
              </li>
              <li>
                <Link href={ROUTES.recruitCrm}>CallPilot Recruit CRM Integration</Link>
              </li>
              <li>
                <Link href={ROUTES.integrations}>View All CallPilot ATS Integrations</Link>
              </li>
            </ul>
            <p>
              Business VoIP extends CallPilot beyond{' '}
              <Link href={ROUTES.home}>AI Applicant Screening Calls</Link> and into everyday
              recruiter and business communications.
            </p>
          </section>

          <section>
            <h2>Keep Your Existing Business Phone Number</h2>
            <p>
              Businesses do not necessarily need to change their existing telephone number when
              moving to CallPilot.
            </p>
            <p>
              Existing business numbers can be ported to CallPilot where supported, allowing
              organisations to retain telephone numbers already known by their customers,
              clients and applicants.
            </p>
            <p>
              New local and international business numbers will also be available in supported
              countries.
            </p>
          </section>

          <section>
            <h2>Business Calls, Messages and AI Automation in One Platform</h2>
            <p>
              Business VoIP is being developed as part of the wider CallPilot AI and
              communications platform.
            </p>
            <p>
              CallPilot already provides{' '}
              <Link href={ROUTES.home}>AI Applicant Screening Calls</Link>, applicant
              communication automation and integrations with recruitment technology platforms.
            </p>
            <p>Business VoIP adds everyday business calling and messaging to that ecosystem.</p>
            <blockquote className={styles.pullQuote}>
              Calls. Messages. AI. Automation. One platform.
            </blockquote>
          </section>

          <section>
            <h2>CallPilot Business VoIP Pricing</h2>
            <div className={styles.pricingGrid}>
              {VOIP_PLANS.map((plan) => (
                <div
                  key={plan.id}
                  className={`${styles.pricingCard} ${plan.featured ? styles.featured : ''}`}
                >
                  <h3>{plan.name}</h3>
                  <PriceTag price={plan.price} unit={plan.unit} />
                  <p>{plan.summary}</p>
                </div>
              ))}
            </div>
            <p>
              <strong>No setup fee.</strong>
            </p>
          </section>

          <section className={styles.ctaSection}>
            <h2>CallPilot Business VoIP – Coming Soon</h2>
            <p>
              CallPilot Business VoIP is currently being developed. Businesses interested in
              being among the first to use the new service can register for early access.
            </p>
            <div className={styles.ctaRow}>
              <Link href={ROUTES.contact} className={styles.primaryCta}>
                Register for Early Access
              </Link>
              <Link href={ROUTES.integrations} className={styles.secondaryCta}>
                Explore CallPilot Integrations
              </Link>
            </div>
          </section>

          <footer className={styles.articleDisclaimer}>
            <p>{VOIP_DISCLAIMER}</p>
          </footer>
        </article>

        <Link href={ROUTES.news} className={styles.backLink}>
          ← Back to News &amp; Insights
        </Link>
      </main>

      <Footer />
    </div>
  );
}
