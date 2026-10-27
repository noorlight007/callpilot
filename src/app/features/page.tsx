import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import SiteFooter from "@/components/home/SiteFooter";
import { FinalCta } from "@/components/home/Sections";
import { fontClass, font } from "@/components/home/font";
import s from "@/components/home/landing.module.css";
import hs from "@/components/home/hero3.module.css";
import {
  ArrowRight, Bolt, Brain, Clock, Doc, Headset, Shield, Sync, UserCheck
} from "@/components/home/icons";
import { ATS } from "@/components/home/config";

function AtsTile({ a, hidden }: { a: (typeof ATS)[number]; hidden?: boolean }) {
  return (
    <Link
      href={`/integrations/${a.slug}`}
      className={hs.atsTile}
      aria-hidden={hidden || undefined}
      tabIndex={hidden ? -1 : undefined}
    >
      {a.logo ? (
        <Image
          src={a.logo}
          alt={hidden ? "" : `${a.name} logo`}
          width={a.w}
          height={a.h}
          unoptimized
          className={hs.atsLogo}
        />
      ) : (
        <span className={hs.atsName} data-ats={a.slug}>{a.name}</span>
      )}
      {a.note && <span className={hs.atsNote}>{a.note}</span>}
    </Link>
  );
}

export default function FeaturesPage() {
  const screeningSteps = [
    { icon: Headset, title: "AI calls every applicant", text: "Day or night, 24/7, including evenings and weekends." },
    { icon: Clock, title: "Role-specific questions", text: "Your role-specific questions. A “No” on any requirement ends the screen." },
    { icon: Doc, title: "ID and work authorisation requested", text: "Requested automatically by WhatsApp, SMS and email." },
    { icon: Sync, title: "ATS updated automatically", text: "Every result, answer and document written back to the candidate record in your ATS." },
    { icon: UserCheck, title: "Recruiter notified to verify", text: "CallPilot stops at verification. Your recruiter takes it from there." },
  ];

  const automationBullets = [
    "Automated WhatsApp, SMS and email follow-ups after every call",
    "Documents requested and chased until they arrive",
    "Calls routed to the right person",
    "Results and call activity synced to your ATS or CRM",
  ];

  const platformCards = [
    {
      icon: Headset,
      title: "AI Call Agent",
      text: "Two-way phone conversations that speak, listen and adapt in real time, at scale.",
    },
    {
      icon: Brain,
      title: "AI Memory",
      text: "CRM and ATS integration, so every call knows the conversation history.",
    },
    {
      icon: Shield,
      title: "Compliance by Design",
      text: "Built-in controls designed to keep every call within regulatory standards.",
    },
    {
      icon: Bolt,
      title: "Call Intelligence",
      text: "Outcome tracking and analytics for continuous improvement.",
    },
  ];

  return (
    <div className={`${s.page} ${fontClass}`}>
      <Header />

      <main id="main">
        {/* Hero Section */}
        <section className={`${hs.hero} ${font.className}`} style={{ minHeight: "auto", paddingBottom: "60px" }}>
          <div className={hs.bg} aria-hidden />
          <div className={hs.container}>
            <header className={hs.head} style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center" }}>
              <p className={hs.eyebrow} style={{ justifyContent: "center" }}>
                <span className={hs.dot} /> Features
              </p>
              <h1 className={hs.h1}>
                AI Screening Calls, <span className={hs.accent}>Automation &amp; ATS Sync</span>
              </h1>
              <p className={hs.lead} style={{ maxWidth: "760px", margin: "18px auto 0" }}>
                CallPilot calls every applicant, collects their documents by SMS or WhatsApp, and writes every
                result straight back to your ATS.
              </p>
              <div className={hs.ctas} style={{ justifyContent: "center", marginTop: "32px" }}>
                <Link href="/book-a-demo" className={`${hs.btn} ${hs.btnPrimary}`}>
                  Book a Demo <ArrowRight className={hs.btnIcon} />
                </Link>
                <Link href="/pricing" className={`${hs.btn} ${hs.btnGhost}`}>
                  See Pricing
                </Link>
              </div>
            </header>
          </div>
        </section>

        {/* 01. AI Applicant Screening Calls */}
        <section id="ai-applicant-screening" className={`${s.section} ${s.sectionSoft}`} aria-labelledby="screen-title">
          <div className={s.container}>
            <div className={s.split}>
              <div>
                <p className={s.kicker}>01</p>
                <h2 id="screen-title" className={s.h2}>AI Applicant Screening Calls</h2>
                <p className={s.subLeft}>
                  Every applicant called and qualified, 24/7.
                </p>
                <ol className={s.vSteps} style={{ marginTop: "32px" }}>
                  {screeningSteps.map(({ icon: Icon, title, text }, i) => (
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
                <div style={{ marginTop: "36px" }}>
                  <Link href="/pricing#screening" className={`${s.btn} ${s.btnDark}`}>
                    See screening plans <ArrowRight className={s.btnIcon} />
                  </Link>
                </div>
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
                <div className={s.lights} aria-label="Traffic-light explainer: Green: documents received. Amber: documents requested, awaiting reply. Red: unsuccessful, did not meet a requirement.">
                  <p className={s.lightsTitle}>Traffic-light results in your ATS</p>
                  <div className={`${s.lightRow} ${s.resG}`}>
                    <span className={`${s.light} ${s.g}`} />
                    <span><strong>Green:</strong> documents received.</span>
                  </div>
                  <div className={`${s.lightRow} ${s.resA}`}>
                    <span className={`${s.light} ${s.a}`} />
                    <span><strong>Amber:</strong> documents requested, awaiting reply.</span>
                  </div>
                  <div className={`${s.lightRow} ${s.resR}`}>
                    <span className={`${s.light} ${s.r}`} />
                    <span><strong>Red:</strong> unsuccessful, did not meet a requirement.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 02. Automation */}
        <section id="automation" className={`${s.section} ${s.sectionWhite}`} aria-labelledby="auto-title">
          <div className={s.container}>
            <div className={s.head}>
              <p className={s.kicker}>02</p>
              <h2 id="auto-title" className={s.h2}>Automation</h2>
              <p className={s.subLeft}>Set it once. Every call triggers the right next step.</p>
            </div>
            <div className={s.grid4}>
              {automationBullets.map((bullet, idx) => (
                <div key={idx} className={s.card}>
                  <span className={s.iconBoxDark}><Bolt /></span>
                  <p className={s.p} style={{ fontWeight: 600, marginTop: "12px" }}>{bullet}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section id="integrations" className={`${s.section} ${s.sectionSoft}`} aria-labelledby="integrations-title">
          <div className={s.container}>
            <div className={s.head} style={{ textAlign: "center", margin: "0 auto 40px" }}>
              <p className={s.kicker}>ATS Connections</p>
              <h2 id="integrations-title" className={s.h2}>Works with your ATS</h2>
              <p className={s.sub} style={{ margin: "16px auto 0" }}>
                JobAdder, Recruit CRM, Ashby and Greenhouse. iCIMS is coming soon.
              </p>
            </div>

            <div className={hs.ats} style={{ marginTop: "0", background: "transparent", borderTop: "none" }}>
              <div className={hs.atsViewport}>
                <div className={hs.atsTrack}>
                  {[0, 1, 2].map((set) =>
                    ATS.map((a) => <AtsTile key={`${set}-${a.slug}`} a={a} hidden={set > 0} />)
                  )}
                </div>
              </div>
            </div>

            <div style={{ textAlign: "center", marginTop: "36px" }}>
              <Link href="/integrations" className={`${s.btn} ${s.btnDark}`}>
                All integrations <ArrowRight className={s.btnIcon} />
              </Link>
            </div>
          </div>
        </section>

        {/* Platform: Built in, on every plan */}
        <section id="platform" className={`${s.section} ${s.sectionWhite}`} aria-labelledby="platform-title">
          <div className={s.container}>
            <div className={s.head}>
              <p className={s.kicker}>The complete platform</p>
              <h2 id="platform-title" className={s.h2}>Built in, on every plan</h2>
            </div>
            <div className={s.grid4}>
              {platformCards.map(({ icon: Icon, title, text }) => (
                <div key={title} className={s.card}>
                  <span className={s.iconBoxDark}><Icon /></span>
                  <h3 className={s.h3}>{title}</h3>
                  <p className={s.p}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <FinalCta />
      </main>

      <SiteFooter />
    </div>
  );
}
