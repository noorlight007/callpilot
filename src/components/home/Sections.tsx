// Homepage sections below the hero, in page order:
// VoipSection → ScreeningSection → FeaturesSection → UseCasesSection
// → PricingSection → DemoSection → FaqSection → FinalCta
import Image from "next/image";
import Link from "next/link";
import s from "./landing.module.css";
import {
  ArrowRight, Bolt, Brain, Building, Calendar, Chart, Chat, Check, Clock, Cpu, Doc, Headset, House,
  LifeBuoy, Mail, Megaphone, Phone, Plus, Route, Shield, Sms, Swap, Sync, UserCheck, Users,
} from "./icons";
import { LINKS } from "./config";
import { FAQS, FEATURES, PLANS, PLAN_NOTES, USE_CASES, VOIP_NOTE, VOIP_PLANS } from "./content";
import DemoForm from "./DemoForm";

/* ============ 1. VoIP ============ */
export function VoipSection() {
  const items = [
    { icon: Phone, title: "Business calls", text: "Local business numbers for calls on your mobile, laptop or desk." },
    { icon: Chat, title: "WhatsApp calling & messaging", text: "Call and message customers and candidates on the app they already use." },
    { icon: Sms, title: "SMS", text: "Two-way texts, reminders and automated follow-ups from your business number." },
    { icon: Mail, title: "Email automation", text: "Confirmations and follow-up emails sent automatically after every call." },
    { icon: Route, title: "Forwarding, IVR & routing", text: "Menus, call forwarding and routing so every call reaches the right person." },
    { icon: Bolt, title: "Automated workflows", text: "Trigger follow-ups across every channel without lifting a finger." },
  ];
  const steps = [
    { icon: Swap, title: "Keep or choose a number", text: "Transfer your existing number or pick a new local one." },
    { icon: Chat, title: "Connect your channels", text: "Calls, WhatsApp, SMS and email go live on one line." },
    { icon: Bolt, title: "Switch on automation", text: "Set follow-ups and routing once. CallPilot does the rest." },
  ];
  return (
    <section id="voip" className={`${s.section} ${s.sectionWhite}`} aria-labelledby="voip-title">
      <div className={s.container}>
        <div className={s.head}>
          <p className={s.kicker}>Every business needs a phone line</p>
          <h2 id="voip-title" className={s.h2}>VoIP Phone Lines + Automation. <span className={s.muted}>One number. Every channel.</span></h2>
        </div>
        <div className={s.grid3}>
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className={s.card}>
              <span className={s.iconBox}><Icon /></span>
              <h3 className={s.h3}>{title}</h3>
              <p className={s.p}>{text}</p>
            </div>
          ))}
        </div>
        <div className={s.stepsRow}>
          <p className={s.stepsLabel}>Switching is simple</p>
          <ol className={s.hSteps}>
            {steps.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className={s.hStep}>
                <span className={s.hStepNum}>0{i + 1}</span>
                <div>
                  <h3 className={s.hStepTitle}><Icon /> {title}</h3>
                  <p className={s.p}>{text}</p>
                </div>
              </li>
            ))}
          </ol>
          <Link href={LINKS.voip} className={`${s.btn} ${s.btnDark}`}>Explore VoIP Lines <ArrowRight className={s.btnIcon} /></Link>
        </div>
      </div>
    </section>
  );
}

/* ============ 2. AI screening deep-dive ============ */
export function ScreeningSection() {
  const steps = [
    { icon: Headset, title: "AI calls every applicant", text: "Day or night, 24/7, including evenings and weekends." },
    { icon: Clock, title: "Screened in under 2 minutes", text: "Your role-specific questions. A “No” on any requirement ends the screen." },
    { icon: Doc, title: "Documents chased for you", text: "ID and work authorisation requested by WhatsApp, SMS and email." },
    { icon: Sync, title: "ATS updated automatically", text: "Every result, answer and document written back to the candidate record." },
    { icon: UserCheck, title: "Recruiter notified to verify", text: "CallPilot stops at verification. Your recruiter takes it from there." },
  ];
  return (
    <section id="ai-screening" className={`${s.section} ${s.sectionSoft}`} aria-labelledby="screen-title">
      <div className={s.container}>
        <div className={s.split}>
          <div>
            <p className={s.kicker}>AI Applicant Screening Call + Automation</p>
            <h2 id="screen-title" className={`${s.h2} ${s.h2Screen}`}><span className={s.oneLine}>Recruiters sleep.</span> <span className={`${s.muted} ${s.oneLine}`}>CallPilot qualifies 24/7.</span></h2>
            <ol className={s.vSteps}>
              {steps.map(({ icon: Icon, title, text }, i) => (
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
            <div className={s.lights} aria-label="Traffic-light results: green docs received, amber docs requested, red unsuccessful">
              <p className={s.lightsTitle}>Screening results in your ATS</p>
              <div className={`${s.lightRow} ${s.resG}`}><span className={`${s.light} ${s.g}`} />Docs received</div>
              <div className={`${s.lightRow} ${s.resA}`}><span className={`${s.light} ${s.a}`} />Docs requested</div>
              <div className={`${s.lightRow} ${s.resR}`}><span className={`${s.light} ${s.r}`} />Unsuccessful</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ 3. Platform features ============ */
const FEATURE_ICONS = [Headset, Brain, Shield, Chart];
export function FeaturesSection() {
  return (
    <section id="features" className={`${s.section} ${s.sectionWhite}`} aria-labelledby="features-title">
      <div className={s.container}>
        <div className={s.head}>
          <p className={s.kicker}>The complete platform</p>
          <h2 id="features-title" className={s.h2}>Everything you need to automate your phone communications.</h2>
        </div>
        <div className={s.grid4}>
          {FEATURES.map((f, i) => {
            const Icon = FEATURE_ICONS[i];
            return (
              <div key={f.title} className={s.card}>
                <span className={s.iconBoxDark}><Icon /></span>
                <h3 className={s.h3}>{f.title}</h3>
                <p className={s.p}>{f.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============ 4. Use cases ============ */
const USE_ICONS = [Building, Users, Bolt, Phone];
export function UseCasesSection() {
  return (
    <section id="use-cases" className={`${s.section} ${s.sectionSoft}`} aria-labelledby="use-title">
      <div className={s.container}>
        <div className={s.head}>
          <p className={s.kicker}>Who it&apos;s for</p>
          <h2 id="use-title" className={s.h2}>From one vacancy to thousands. <span className={s.muted}>CallPilot handles every call.</span></h2>
        </div>
        <div className={s.grid4}>
          {USE_CASES.map((u, i) => {
            const Icon = USE_ICONS[i];
            return (
              <div key={u.title} className={`${s.card} ${s.cardRow}`}>
                <span className={s.iconBox}><Icon /></span>
                <div>
                  <h3 className={s.h3}>{u.title}</h3>
                  <p className={s.p}>{u.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============ 5. Pricing ============ */
export function PricingSection() {
  return (
    <section id="pricing" className={`${s.section} ${s.sectionWhite}`} aria-labelledby="pricing-title">
      <div className={s.container}>
        <div className={s.head}>
          <p className={s.kicker}>Pricing</p>
          <h2 id="pricing-title" className={s.h2}>Simple pricing. <span className={s.muted}>Pay for what you use.</span></h2>
        </div>

        {/* ---- CallPilot VoIP pricing: 3 simple options ---- */}
        <div id="voip-pricing" className={s.priceBlockHead}>
          <h3 className={s.priceBlockTitle}>CallPilot VoIP</h3>
          <p className={s.p}>Business phone lines with calls, WhatsApp, SMS and email. Prices per line, per month.</p>
        </div>
        <div className={s.voipPlans}>
          {VOIP_PLANS.map((p) => (
            <div key={p.name} className={`${s.plan} ${p.recommended ? s.planRec : ""}`}>
              {p.recommended && <span className={s.recBadge}>Best value</span>}
              <h4 className={s.planName}>{p.name}</h4>
              <p className={s.planPrice}>{p.price}<span>/month</span></p>
              <p className={s.planIncludes}>{p.headline}</p>
              <ul className={s.planFeat}>
                {p.features.map((f) => <li key={f}><Check /> {f}</li>)}
              </ul>
              <Link href={p.href} className={`${s.btn} ${s.btnDark} ${s.btnBlock}`}>
                Get CallPilot VoIP
              </Link>
            </div>
          ))}
        </div>
        <p className={s.voipNote}>{VOIP_NOTE}</p>

        {/* ---- AI Applicant Screening Call + Automation pricing ---- */}
        <div id="screening-pricing" className={`${s.priceBlockHead} ${s.priceBlockGap}`}>
          <h3 className={s.priceBlockTitle}>AI Applicant Screening Call + Automation</h3>
          <p className={s.p}>No call. No charge. New clients get their first 100 AI screening calls free.</p>
        </div>
        <p className={s.planIncl}>WhatsApp and SMS document requests, automatic ATS sync and recruiter alerts included on every plan.</p>
        <div className={s.plans}>
          {PLANS.map((p) => (
            <div key={p.name} className={`${s.plan} ${p.recommended ? s.planRec : ""}`}>
              {p.recommended && <span className={s.recBadge}>Recommended</span>}
              <h3 className={s.planName}>{p.name}</h3>
              <p className={s.planPrice}>{p.price}<span>{p.period}</span></p>
              <p className={s.planIncludes}>{p.includes}</p>
              <p className={s.planTop}>{p.topUp}</p>
              <p className={s.planBest}>{p.bestFor}</p>
              <Link href={p.href} className={`${s.btn} ${s.btnDark} ${s.btnBlock}`}>
                {p.cta}
              </Link>
            </div>
          ))}
        </div>
        <ul className={s.planNotes}>
          {PLAN_NOTES.map((n) => <li key={n}><Check /> {n}</li>)}
        </ul>
      </div>
    </section>
  );
}

/* ============ 6. Demo ============ */
// Visual form only. Wire it to the EXISTING "Call Now" / "Schedule Call" handler (see README).
export function DemoSection() {
  return (
    <section id="demo" className={`${s.section} ${s.sectionWhite}`} aria-labelledby="demo-title">
      <div className={s.container}>
        <div className={s.demo}>
          <div className={s.demoCopy}>
            <p className={s.kicker}>Try it now</p>
            <h2 id="demo-title" className={`${s.h2}`}>Hear CallPilot for yourself.</h2>
            <p className={s.subLeft}>Get an AI demo call to your phone in seconds, or schedule one for later.</p>
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
    <section id="faq" className={`${s.section} ${s.sectionWhite}`} aria-labelledby="faq-title">
      <div className={`${s.container} ${s.faqWrap}`}>
        <div>
          <p className={s.kicker}>FAQ</p>
          <h2 id="faq-title" className={s.h2}>Questions, answered.</h2>
          <p className={s.p}>Can&apos;t find what you need? <Link href="/get-started?intent=sales" className={s.inlineLink}>Talk to our team</Link>.</p>
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

/* ============ 8. Final CTA ============ */
export function FinalCta() {
  return (
    <section className={`${s.section} ${s.sectionWhite}`} aria-labelledby="final-title">
      <div className={s.container}>
        <div className={s.final}>
          <div>
            <h2 id="final-title" className={`${s.h2}`}>Put your calls <span className={s.muted}>on autopilot.</span></h2>
            <p className={s.subLeft}>Book a demo to see CallPilot on your own numbers, roles and ATS. Custom workflows and integrations available.</p>
          </div>
          <div className={s.finalBtns}>
            <Link href={LINKS.bookDemo} className={`${s.btn} ${s.btnDark}`}>Book a Demo <ArrowRight className={s.btnIcon} /></Link>
            <Link href="/get-started?intent=sales" className={`${s.btn} ${s.btnGhost}`}>Contact Sales</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
