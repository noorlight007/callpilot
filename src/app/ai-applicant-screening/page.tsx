import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import SiteFooter from "@/components/home/SiteFooter";
import JsonLd from "@/components/JsonLd";
import { FinalCta } from "@/components/home/Sections";
import { fontClass, font } from "@/components/home/font";
import s from "@/components/home/landing.module.css";
import hs from "@/components/home/hero3.module.css";
import { ArrowRight, Check, Doc, Headset, Plus, Sync, UserCheck } from "@/components/home/icons";

const URL = "https://callpilot.pro/ai-applicant-screening";
const TITLE = "AI Applicant Screening Calls for Recruiters";
const DESCRIPTION =
  "CallPilot calls every applicant 24/7, asks your role-specific questions, collects ID by WhatsApp or SMS and writes results to your ATS. First 100 calls free.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: `${TITLE} | CallPilot`,
    description: DESCRIPTION,
    url: URL,
    siteName: "CallPilot",
    type: "website",
    images: ["/images/og-callpilot.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} | CallPilot`,
    description: DESCRIPTION,
    images: ["/images/og-callpilot.png"],
  },
};

const STEPS = [
  { icon: Headset, title: "An applicant applies", text: "CallPilot picks the application up from your ATS and calls the applicant, day or night, including evenings and weekends." },
  { icon: Doc, title: "The AI asks your questions", text: "Availability, right to work, experience, location, pay expectations and anything else you set per role. The AI tells the applicant it is an AI at the start of the call." },
  { icon: UserCheck, title: "Requirements are checked", text: "A “No” on any requirement ends the screen and marks the applicant Unsuccessful. Everyone else is qualified." },
  { icon: Doc, title: "Documents are requested", text: "Qualified applicants get a WhatsApp or SMS asking for ID and the documents the role needs. Automated reminders chase anything outstanding." },
  { icon: Sync, title: "Your ATS is updated", text: "The outcome, call transcript and documents are written to the candidate record, and your recruiter is notified to verify." },
];

const COMPARISON = [
  ["Who makes the first call", "A recruiter, when they have time", "The AI call agent, as soon as the application is picked up"],
  ["Hours covered", "Office hours", "24/7, including evenings and weekends"],
  ["Questions asked", "Varies by recruiter", "The same role-specific questions for every applicant"],
  ["Documents", "Chased by hand", "Requested and chased automatically by WhatsApp, SMS and email"],
  ["ATS update", "Typed up afterwards", "Outcome, transcript and documents written back automatically"],
  ["Final decision and verification", "Recruiter", "Recruiter. CallPilot stops at verification"],
];

const FAQ = [
  { q: "What is an AI applicant screening call?", a: "It is a phone call made by an AI call agent to a job applicant. The AI asks the screening questions you have set for the role, records the answers, and decides whether the applicant meets your requirements. Qualified applicants are then asked for documents, and the result is written to your ATS." },
  { q: "Does the AI tell applicants it is an AI?", a: "Yes. CallPilot discloses that the caller is an AI at the start of every screening call." },
  { q: "Does CallPilot make hiring decisions?", a: "No. It screens against the criteria you configure and collects documents. Verification, right-to-work checks and final hiring decisions stay with your recruiters." },
  { q: "Which ATS platforms does it connect to?", a: "JobAdder, Recruit CRM, Ashby and Greenhouse. iCIMS is coming soon." },
  { q: "How much does it cost?", a: "Plans start at $395 a month for 100 completed screenings, with Growth at $1,400 and Pro at $2,950. New clients get their first 100 screening calls free. You only pay for completed screenings, so no call means no charge." },
  { q: "What happens if an applicant does not answer?", a: "Nothing is charged. A screening only counts once the applicant completes it." },
  { q: "How do applicants send their documents?", a: "They reply to a WhatsApp or SMS message with photos of their documents. There is no app to install and no portal login." },
  { q: "Can I use it without an ATS?", a: "Yes. CallPilot can run standalone screening workflows. Book a demo and we will set it up around how you work today." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "AI Applicant Screening Calls",
      serviceType: "AI applicant screening",
      provider: { "@type": "Organization", name: "CallPilot", url: "https://callpilot.pro" },
      description: DESCRIPTION,
      url: URL,
      areaServed: "Worldwide",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://callpilot.pro" },
        { "@type": "ListItem", position: 2, name: "AI Applicant Screening", item: URL },
      ],
    },
  ],
};

export default function AiApplicantScreeningPage() {
  return (
    <div className={`${s.page} ${fontClass}`}>
      <Header />
      <JsonLd data={pageSchema} />
      <JsonLd data={faqSchema} />

      <main id="main">
        <section className={`${hs.hero} ${font.className}`} style={{ minHeight: "auto", paddingBottom: "60px" }}>
          <div className={hs.bg} aria-hidden />
          <div className={hs.container}>
            <header className={hs.head} style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center" }}>
              <p className={hs.eyebrow} style={{ justifyContent: "center" }}>
                <span className={hs.dot} /> AI Applicant Screening Call
              </p>
              <h1 className={hs.h1}>
                AI Applicant Screening Calls <span className={hs.accent}>for Recruiters</span>
              </h1>
              <p className={hs.lead} style={{ maxWidth: "760px", margin: "18px auto 0" }}>
                An AI call agent phones every applicant, asks your role-specific questions, collects ID and documents by
                WhatsApp or SMS, and writes the result straight to your ATS. 24/7. First 100 calls free.
              </p>
              <div className={hs.ctas} style={{ justifyContent: "center", marginTop: "32px" }}>
                <Link href="/free-trial" className={`${hs.btn} ${hs.btnPrimary}`}>
                  Get 100 Free Screening Calls <ArrowRight className={hs.btnIcon} />
                </Link>
                <Link href="/book-a-demo" className={`${hs.btn} ${hs.btnGhost}`}>Book a Demo</Link>
              </div>
            </header>
          </div>
        </section>

        <section className={`${s.section} ${s.sectionWhite}`} aria-labelledby="what-title">
          <div className={s.container}>
            <div className={s.head}>
              <p className={s.kicker}>The basics</p>
              <h2 id="what-title" className={s.h2}>What is an AI applicant screening call?</h2>
              <p className={s.sub}>
                An AI applicant screening call is a phone call placed by an AI call agent to a job applicant. It does the
                first-round phone screen that a recruiter would otherwise do by hand: it asks the questions you have set for
                the role, records the answers and checks them against your requirements.
              </p>
              <p className={s.sub} style={{ marginTop: "16px" }}>
                Qualified applicants are then asked for ID and documents by WhatsApp or SMS, and everything is written back to
                the candidate record in your ATS. Recruiters open their ATS to applicants who are already screened, and
                CallPilot stops at verification so your team keeps the final decision.
              </p>
            </div>
          </div>
        </section>

        <section className={`${s.section} ${s.sectionSoft}`} aria-labelledby="how-title">
          <div className={s.container}>
            <div className={s.split}>
              <div>
                <p className={s.kicker}>How it works</p>
                <h2 id="how-title" className={s.h2}>From application to recruiter-ready</h2>
                <ol className={s.vSteps} style={{ marginTop: "32px" }}>
                  {STEPS.map(({ icon: Icon, title, text }, i) => (
                    <li key={title} className={s.vStep}>
                      <span className={s.vStepIcon}><Icon /></span>
                      <div>
                        <span className={s.vStepNum}>0{i + 1}</span>
                        <h3>{title}</h3>
                        <p>{text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
              <div className={s.phoneCol}>
                <Image
                  src="/images/screening-call-phone.webp"
                  alt="CallPilot AI screening call in progress on a mobile phone"
                  width={680}
                  height={1350}
                  sizes="(max-width: 1100px) 60vw, 280px"
                  className={s.phoneImg}
                />
                <div className={s.lights}>
                  <p className={s.lightsTitle}>Traffic-light results in your ATS</p>
                  <div className={`${s.lightRow} ${s.resG}`}><span className={`${s.light} ${s.g}`} /><span><strong>Green:</strong> qualified, documents received.</span></div>
                  <div className={`${s.lightRow} ${s.resA}`}><span className={`${s.light} ${s.a}`} /><span><strong>Amber:</strong> qualified, awaiting documents.</span></div>
                  <div className={`${s.lightRow} ${s.resR}`}><span className={`${s.light} ${s.r}`} /><span><strong>Red:</strong> unsuccessful, did not meet a requirement.</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`${s.section} ${s.sectionWhite}`} aria-labelledby="compare-title">
          <div className={s.container}>
            <div className={s.head}>
              <p className={s.kicker}>Comparison</p>
              <h2 id="compare-title" className={s.h2}>AI screening calls vs manual phone screening</h2>
            </div>
            <div style={{ overflowX: "auto", marginTop: "24px" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "640px" }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: "left", padding: "12px", borderBottom: "2px solid #0b1220" }} />
                    <th style={{ textAlign: "left", padding: "12px", borderBottom: "2px solid #0b1220" }}>Manual phone screen</th>
                    <th style={{ textAlign: "left", padding: "12px", borderBottom: "2px solid #0b1220" }}>CallPilot AI screening call</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map(([label, manual, ai]) => (
                    <tr key={label}>
                      <th scope="row" style={{ textAlign: "left", padding: "12px", borderBottom: "1px solid #e5e7eb" }}>{label}</th>
                      <td style={{ padding: "12px", borderBottom: "1px solid #e5e7eb" }}>{manual}</td>
                      <td style={{ padding: "12px", borderBottom: "1px solid #e5e7eb" }}>{ai}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className={`${s.section} ${s.sectionSoft}`} aria-labelledby="fit-title">
          <div className={s.container}>
            <div className={s.head}>
              <p className={s.kicker}>Who it is for</p>
              <h2 id="fit-title" className={s.h2}>Built for high-volume and agency recruiting</h2>
            </div>
            <ul className={s.planFeat} style={{ marginTop: "24px", maxWidth: "720px" }}>
              <li style={{ fontSize: "16px", padding: "8px 0" }}><Check /> Staffing and recruitment agencies with hundreds of applicants a week</li>
              <li style={{ fontSize: "16px", padding: "8px 0" }}><Check /> In-house talent acquisition teams in warehouse, retail, hospitality and care</li>
              <li style={{ fontSize: "16px", padding: "8px 0" }}><Check /> Teams that need ID and right-to-work documents collected before a recruiter steps in</li>
            </ul>
            <p className={s.p} style={{ marginTop: "20px" }}>
              Connects to <Link href="/integrations/jobadder" className={s.inlineLink}>JobAdder</Link>,{" "}
              <Link href="/integrations/recruit-crm" className={s.inlineLink}>Recruit CRM</Link> and{" "}
              <Link href="/integrations/ashby" className={s.inlineLink}>Ashby</Link> and{" "}
              <Link href="/integrations/greenhouse" className={s.inlineLink}>Greenhouse</Link>. The{" "}
              <Link href="/integrations/icims" className={s.inlineLink}>iCIMS</Link> is coming soon. See{" "}
              <Link href="/pricing" className={s.inlineLink}>pricing</Link> or read{" "}
              <Link href="/blog/ai-screening-call-vs-ai-video-interview" className={s.inlineLink}>AI screening call vs AI video interview</Link>.
            </p>
          </div>
        </section>

        <section id="faq" className={`${s.section} ${s.sectionWhite}`} aria-labelledby="faq-title">
          <div className={`${s.container} ${s.faqWrap}`}>
            <div>
              <p className={s.kicker}>FAQ</p>
              <h2 id="faq-title" className={s.h2}>AI screening call questions</h2>
            </div>
            <div className={s.faqList}>
              {FAQ.map((f) => (
                <details key={f.q} className={s.faq}>
                  <summary>{f.q}<Plus className={s.faqIcon} /></summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <FinalCta />
      </main>

      <SiteFooter />
    </div>
  );
}
