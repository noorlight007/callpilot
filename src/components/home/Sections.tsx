// Homepage sections below the hero, in page order:
// StorySection → GettingStartedSection → IntegrationsSection → UseCasesSection
// → PricingSection → DemoSection → FaqSection → FinalCta
import Link from "next/link";
import Pic from "@/components/Pic";
import s from "./landing.module.css";
import { ArrowRight, Check, Plus } from "./icons";
import { LINKS } from "./config";
import { COPY } from "@/lib/pricing";
import { FAQS, GETTING_STARTED, PLANS, PLAN_NOTES, STORY_KEY, STORY_STEPS, USE_CASES, type Tone } from "./content";
import DemoForm from "./DemoForm";
import AtsCarousel from "./AtsCarousel";

const CHIP: Record<Tone, string> = {
  navy: s.chipN, blue: s.chipB, green: s.chipG, amber: s.chipA, red: s.chipR, grey: s.chipN,
};
const TIME: Record<Tone, string> = {
  navy: "", blue: s.timeBlue, green: s.timeGreen, amber: s.timeAmber, red: s.timeRed, grey: "",
};
const WHY: Record<Tone, string> = {
  navy: "", blue: s.whyBlue, green: s.whyGreen, amber: s.whyAmber, red: s.whyRed, grey: "",
};

/* ============ 1. Story: Recruiters sleep. CallPilot qualifies 24/7. ============ */
export function StorySection() {
  return (
    <section id="how" className={`${s.section} ${s.sectionSoft}`} aria-labelledby="story-title">
      <div className={s.container}>
        <p className={s.kicker}>How it works</p>
        <h2 id="story-title" className={s.h2}>Recruiters Sleep. CallPilot Qualifies 24/7.</h2>
        <p className={s.storyLead}>One applicant, Olia, from job advert to interview.</p>
        <div className={s.key}>
          {STORY_KEY.map((k) => <span key={k.label} className={`${s.chip} ${CHIP[k.tone]}`}>{k.label}</span>)}
        </div>

        {STORY_STEPS.map((st, i) => (
          <div key={st.title} className={`${s.story} ${i === 0 ? s.storyFirst : ""}`}>
            <div>
              <div className={`${s.time} ${TIME[st.tone]}`}>{st.time}</div>
              <h3>{st.title}</h3>
              <p>{st.text}</p>
              {st.list && (
                <ol className={s.prio}>
                  {st.list.map((li) => (
                    <li key={li.label}><span className={`${s.chip} ${CHIP[li.tone]}`}>{li.label}</span>{li.text}</li>
                  ))}
                </ol>
              )}
              <p className={`${s.why} ${WHY[st.tone]}`}><b>Why it matters:</b> {st.why}</p>
            </div>
            <div className={s.media}>
              <Pic base={st.image.base} alt={st.image.alt} className={s.shot} sizes="(max-width: 1100px) 100vw, 640px" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============ 2. Getting started ============ */
export function GettingStartedSection() {
  return (
    <section id="benefits" className={`${s.section} ${s.sectionWhite}`} aria-labelledby="start-title">
      <div className={`${s.container} ${s.narrow}`}>
        <p className={s.kicker}>Getting started</p>
        <h2 id="start-title" className={s.h2}>Live in Four Steps</h2>
        <ol className={s.panel} style={{ listStyle: "none", margin: "28px 0 0", padding: 22 }}>
          {GETTING_STARTED.steps.map((t, i) => (
            <li key={t} className={s.panelRow}><span className={s.num}>{i + 1}</span>{t}</li>
          ))}
        </ol>
        <p className={s.support}>{GETTING_STARTED.support}</p>
      </div>
    </section>
  );
}

/* ============ 3. Integrations: ATS carousel ============ */
export function IntegrationsSection() {
  return (
    <section id="integrations" className={`${s.section} ${s.sectionWhite} ${s.center}`} aria-labelledby="int-title" style={{ paddingTop: 0 }}>
      <div className={s.container}>
        <h2 id="int-title" className={s.h2}>Integrates With Your ATS</h2>
        <AtsCarousel />
      </div>
    </section>
  );
}

/* ============ 4. Who it's for ============ */
export function UseCasesSection() {
  return (
    <section id="who" className={`${s.section} ${s.sectionSoft}`} aria-labelledby="use-title">
      <div className={s.container}>
        <div className={s.head}>
          <p className={s.kicker}>Who it&apos;s for</p>
          <h2 id="use-title" className={s.h2}>From One Vacancy to Thousands.</h2>
        </div>
        <div className={s.grid4}>
          {USE_CASES.map((u) => (
            <div key={u.title} className={s.card}>
              <h3 className={s.h3}>{u.title}</h3>
              <p className={s.p}>{u.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ 5. Pricing (black) ============ */
export function PricingSection() {
  return (
    <section id="pricing" className={`${s.section} ${s.sectionBlack}`} aria-labelledby="pricing-title">
      <div className={s.container}>
        <p className={s.kicker}>Pricing</p>
        <h2 id="pricing-title" className={s.h2}>AI Applicant Screening Call + Automation</h2>
        <p className={s.subLeft}>{COPY.trialLine}</p>
        <div className={s.plans} style={{ marginTop: 34 }}>
          {PLANS.map((p) => (
            <div key={p.name} className={`${s.plan} ${p.recommended ? s.planRec : ""}`}>
              {p.recommended ? <span className={s.recBadge}>Recommended</span> : <span className={s.tagSpacer} aria-hidden />}
              <h3 className={s.planName}>{p.name}</h3>
              <p className={s.planPrice}>{p.price}</p>
              <p className={s.planIncludes}>{p.period ? `${p.period} · ${p.includes}` : p.includes}</p>
              {p.topUp && <p className={s.planTop}>{p.topUp}</p>}
              <ul className={s.planFeat}>
                {p.features.map((f) => <li key={f}><Check /> {f}</li>)}
              </ul>
              <Link href={p.href} className={`${s.btn} ${s.btnLight} ${s.btnBlock}`}>{p.cta}</Link>
            </div>
          ))}
        </div>
        <p className={s.creditNote}>{COPY.credit}</p>
        <ul className={s.planNotes}>
          {PLAN_NOTES.map((n) => <li key={n}><Check /> {n}</li>)}
        </ul>
        <div className={s.pricingCta}>
          <Link href={LINKS.bookDemo} className={`${s.btn} ${s.btnLight}`}>Book a Demo</Link>
        </div>
      </div>
    </section>
  );
}

/* ============ 6. Demo (kept as is: wired to the existing call-now / schedule handler) ============ */
export function DemoSection() {
  return (
    <section id="demo" className={`${s.section} ${s.sectionWhite}`} aria-labelledby="demo-title">
      <div className={s.container}>
        <div className={s.demo}>
          <div className={s.demoCopy}>
            <p className={s.kicker}>Try it now</p>
            <h2 id="demo-title" className={`${s.h2}`}>Hear CallPilot for Yourself.</h2>
            <p className={s.subLeft}>Try an AI call now, or schedule one for later.</p>
            <ul className={s.demoTicks}>
              <li><Check /> Real AI screening call to your phone</li>
              <li><Check /> Or schedule it for a time that suits you</li>
              <li><Check /> No commitment</li>
            </ul>
          </div>
          <DemoForm />
        </div>
      </div>
    </section>
  );
}

/* ============ 7. FAQ ============ */
export function FaqSection() {
  return (
    <section id="faq" className={`${s.section} ${s.sectionSoft}`} aria-labelledby="faq-title">
      <div className={`${s.container} ${s.faqWrap}`}>
        <div>
          <p className={s.kicker}>FAQ</p>
          <h2 id="faq-title" className={s.h2}>Questions, Answered.</h2>
          <p className={s.p} style={{ marginTop: 16 }}>Can&apos;t find what you need?</p>
          <Link href="/get-started?intent=sales" className={`${s.btn} ${s.btnDark} ${s.faqBtn}`}>Talk to our team</Link>
        </div>
        <div className={s.faqList}>
          {FAQS.map((f) => (
            <details key={f.q} className={s.faq}>
              <summary>{f.q}<Plus className={s.faqIcon} /></summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ 8. Final CTA (black) ============ */
export function FinalCta() {
  return (
    <section className={`${s.section} ${s.sectionBlack} ${s.finalCenter}`} aria-labelledby="final-title">
      <div className={s.container}>
        <h2 id="final-title" className={s.h2}>Put Your Calls on Autopilot.</h2>
        <div className={s.btns}>
          <Link href={LINKS.bookDemo} className={`${s.btn} ${s.btnDark}`}>Book a Demo <ArrowRight className={s.btnIcon} /></Link>
          <Link href="/get-started?intent=sales" className={`${s.btn} ${s.btnLight}`}>Contact Sales</Link>
        </div>
      </div>
    </section>
  );
}
