// HERO: three panels left → right on desktop (stacked on mobile):
// 1) VoIP Phone Lines  2) One Platform. All Automated.  3) AI Applicant Screening Call
import Image from "next/image";
import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";
import s from "./hero3.module.css";
import { ArrowRight, Chat, Check, Mail, Phone, Sms, Route, Bolt, Sync, Doc, Headset } from "./icons";
import { ATS, LINKS } from "./config";

const font = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], display: "swap" });

function AtsTile({ a, hidden }: { a: (typeof ATS)[number]; hidden?: boolean }) {
  return (
    <Link
      href={`${LINKS.integrations}/${a.slug}`}
      className={s.atsTile}
      aria-hidden={hidden || undefined}
      tabIndex={hidden ? -1 : undefined}
    >
      {a.logo ? (
        <Image
          src={a.logo}
          alt={hidden ? "" : `${a.name} logo`}
          width={a.w}
          height={a.h}
          unoptimized /* SVG logos: served as-is, no optimisation needed */
          className={s.atsLogo}
        />
      ) : (
        <span className={s.atsName} data-ats={a.slug}>{a.name}</span>
      )}
      {a.note && <span className={s.atsNote}>{a.note}</span>}
    </Link>
  );
}

export default function HeroThree() {
  return (
    <section className={`${s.hero} ${font.className}`} aria-labelledby="hero-title">
      <div className={s.bg} aria-hidden />
      <div className={s.container}>
        {/* Headline */}
        <header className={s.head}>
          <p className={s.eyebrow}><span className={s.dot} /> VoIP Phone Lines · AI Call Agent · Automation</p>
          <h1 id="hero-title" className={s.h1}>
            VoIP Phone Lines + AI Applicant Screening. <span className={s.accent}>All Automated.</span>
          </h1>
          <p className={s.lead}>
            Business calls, WhatsApp, SMS and email on one low-cost number, plus an AI call agent that screens every
            applicant 24/7 in under 2 minutes.
          </p>
          <div className={s.ctas}>
            <Link href={LINKS.bookDemo} className={`${s.btn} ${s.btnPrimary}`}>
              Book a Demo <ArrowRight className={s.btnIcon} />
            </Link>
            <Link href={LINKS.pricing} className={`${s.btn} ${s.btnGhost}`}>See Pricing</Link>
          </div>
        </header>

        {/* Three panels */}
        <div className={s.panels}>
          {/* 1. VoIP */}
          <article className={s.panel}>
            <div className={s.visual}>
              <div className={s.lineCard} aria-hidden>
                <div className={s.lineHead}>
                  <span><em>Your business line</em>+44 (0) 20 8000 7000</span>
                  <span className={s.online}><span /> Online</span>
                </div>
                <div className={s.lineRow}><span className={`${s.ch} ${s.chCall}`}><Phone /></span><b>Incoming call</b><i>Forwarded</i></div>
                <div className={s.lineRow}><span className={`${s.ch} ${s.chWa}`}><Chat /></span><b>WhatsApp</b><i>Auto-reply sent</i></div>
                <div className={s.lineRow}><span className={`${s.ch} ${s.chSms}`}><Sms /></span><b>SMS</b><i>Follow-up sent</i></div>
                <div className={s.lineRow}><span className={`${s.ch} ${s.chMail}`}><Mail /></span><b>Email</b><i>Confirmation sent</i></div>
              </div>
            </div>
            <div className={s.body}>
              <span className={s.num}>01</span>
              <h2 className={s.h2}>VoIP Phone Lines</h2>
              <p className={s.text}>Every business needs a phone line. Get one low-cost number with every channel built in.</p>
              <ul className={s.list}>
                <li><Check /> WhatsApp calling &amp; messaging</li>
                <li><Check /> SMS and email automation</li>
                <li><Check /> Call forwarding, IVR &amp; routing</li>
                <li><Check /> Keep your number: we handle the transfer</li>
              </ul>
              <Link href={LINKS.voip} className={s.link}>Explore VoIP Lines <ArrowRight /></Link>
            </div>
          </article>

          {/* 2. Platform (featured, centre) */}
          <article className={`${s.panel} ${s.panelFeatured}`}>
            <div className={`${s.visual} ${s.visualDark}`}>
              <Image
                src="/images/hero-dashboard-laptop.webp"
                alt="CallPilot platform dashboard showing calls, applicants, documents and automation"
                width={1600}
                height={1350}
                priority
                sizes="(max-width: 1100px) 100vw, 400px"
                className={s.laptop}
              />
            </div>
            <div className={s.body}>
              <span className={s.num}>02</span>
              <h2 className={s.h2} style={{ color: "#ffffff" }}>
                One Platform. <span className={s.accentLight}>All Automated.</span>
              </h2>
              <p className={s.text}>Your phone line, AI call agent and follow-up working together, synced to your ATS.</p>
              <ul className={s.list}>
                <li><Bolt /> Automated follow-up on every channel</li>
                <li><Doc /> Documents requested and chased</li>
                <li><Sync /> Results written back to your ATS</li>
                <li><Route /> Calls routed to the right person</li>
              </ul>
              <Link href={LINKS.integrations} className={s.link}>See how it works <ArrowRight /></Link>
            </div>
          </article>

          {/* 3. AI Applicant Screening */}
          <article className={s.panel}>
            <div className={`${s.visual} ${s.visualPhone}`}>
              <Image
                src="/images/screening-call-phone.webp"
                alt="CallPilot AI screening call in progress on a mobile phone"
                width={680}
                height={1350}
                sizes="(max-width: 1100px) 40vw, 150px"
                className={s.phone}
              />
              <div className={s.results} aria-label="Screening results: green docs received, amber docs requested, red unsuccessful">
                <p className={s.resultsTitle}>Screening results</p>
                <div className={`${s.result} ${s.resG}`}><span className={`${s.light} ${s.g}`} />Docs received</div>
                <div className={`${s.result} ${s.resA}`}><span className={`${s.light} ${s.a}`} />Docs requested</div>
                <div className={`${s.result} ${s.resR}`}><span className={`${s.light} ${s.r}`} />Unsuccessful</div>
              </div>
            </div>
            <div className={s.body}>
              <span className={s.num}>03</span>
              <h2 className={s.h2}>AI Applicant Screening Call</h2>
              <p className={s.text}>Recruiters sleep. CallPilot works: every applicant called and qualified while you&apos;re off the clock.</p>
              <ul className={s.list}>
                <li><Headset /> AI calls every applicant 24/7</li>
                <li><Check /> Screened in under 2 minutes</li>
                <li><Doc /> ID &amp; work authorisation chased</li>
                <li><Sync /> ATS updated, recruiter notified to verify</li>
              </ul>
              <Link href={LINKS.screening} className={s.link}>Explore AI Screening <ArrowRight /></Link>
            </div>
          </article>
        </div>

        {/* ATS carousel */}
        <div className={s.ats}>
          <p className={s.atsLabel}>Integrates with your ATS</p>
          <div className={s.atsViewport}>
            <div className={s.atsTrack}>
              {[0, 1, 2].map((set) => ATS.map((a) => <AtsTile key={`${set}-${a.slug}`} a={a} hidden={set > 0} />))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
