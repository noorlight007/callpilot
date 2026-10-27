import { Suspense } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import SiteFooter from "@/components/home/SiteFooter";
import BookDemoForm from "@/components/BookDemoForm";
import JsonLd from "@/components/JsonLd";
import { fontClass } from "@/components/home/font";
import s from "@/components/home/landing.module.css";
import { Plus } from "@/components/home/icons";
import { FREE_TRIAL_CALLS, STARTING_PRICE, money } from "@/lib/pricing";

const WALKTHROUGH = [
  { title: "The AI Applicant Screening Call", text: "How CallPilot calls an applicant, asks yes/no questions taken from your job advert and marks them Pre-qualified or Unsuccessful." },
  { title: "Document collection", text: "How pre-qualified applicants are asked for ID and documents by secure SMS link or WhatsApp, with automated reminders." },
  { title: "ATS sync", text: "How outcomes, transcripts and documents are written back to JobAdder, Recruit CRM, Ashby or Greenhouse, with traffic-light statuses for your Talent Team." },
];

const FAQS = [
  { q: "How long is the walkthrough?", a: "We tailor it to your team. Tell us your ATS and volumes in the form and we will focus on what matters to you." },
  { q: "Can I try an AI screening call myself?", a: "Yes. The homepage lets you request a demo AI call to your own phone." },
  { q: "What does it cost?", a: `Plans start at ${money(STARTING_PRICE)} a month, and new clients get their first ${FREE_TRIAL_CALLS} calls free.` },
];

export default function BookADemoPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <div className={`${s.page} ${fontClass}`}>
      <Header />
      <main id="main">
        <section className={s.hero} aria-labelledby="demo-title">
          <div className={`${s.container} ${s.heroGrid} ${s.demoGrid}`}>
            <div>
              <p className={s.kicker}>AI Applicant Screening</p>
              <h1 id="demo-title" className={s.h1}><span className={s.hl}>Book a Demo</span> + Walkthrough</h1>
              <p className={s.subLeft}>Fill out the form and our team will contact you within one business day.</p>
              <div style={{ marginTop: 22 }}>
                <Suspense fallback={<div className={s.form} style={{ minHeight: 520 }} aria-busy />}>
                  <BookDemoForm />
                </Suspense>
              </div>
            </div>
            <div className={s.walk}>
              <h2 className={s.h2} style={{ fontSize: "clamp(26px, 3.2vw, 38px)" }}>What you will see in the walkthrough</h2>
              <ol className={s.walkList}>
                {WALKTHROUGH.map((w, i) => (
                  <li key={w.title}>
                    <span className={s.num}>{i + 1}</span>
                    <div>
                      <h3>{w.title}</h3>
                      <p>{w.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className={`${s.section} ${s.sectionSoft}`} aria-labelledby="faq-title">
          <div className={`${s.container} ${s.narrow}`}>
            <h2 id="faq-title" className={s.h2} style={{ marginBottom: 24 }}>Common questions</h2>
            <div className={s.faqList}>
              {FAQS.map((f) => (
                <details key={f.q} className={s.faq}>
                  <summary>{f.q}<Plus className={s.faqIcon} /></summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
            <p className={s.p} style={{ marginTop: 24 }}>
              See <Link href="/pricing" className={s.inlineLink}>pricing</Link>, the{" "}
              <Link href="/ai-applicant-screening" className={s.inlineLink}>AI Applicant Screening Call</Link> or the{" "}
              <Link href="/integrations" className={s.inlineLink}>ATS integrations</Link>.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
      <JsonLd data={faqSchema} />
    </div>
  );
}
