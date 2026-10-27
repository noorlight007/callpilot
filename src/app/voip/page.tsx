import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import SiteFooter from "@/components/home/SiteFooter";
import { fontClass } from "@/components/home/font";
import s from "@/components/home/landing.module.css";
import { Check } from "@/components/home/icons";

// VoIP Lines are not on sale yet. No prices, no buy buttons, not indexed.
export const metadata: Metadata = {
  title: { absolute: "CallPilot VoIP Lines | Coming Soon" },
  description: "CallPilot VoIP Lines + Automation are coming soon. AI Applicant Screening Calls are available now.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://callpilot.pro/voip" },
};

const BULLETS = [
  "Business calls on one number",
  "SMS, WhatsApp and email automation",
  "Call forwarding, IVR and routing",
  "Keep your existing number or choose a new one",
];

export default function VoipComingSoonPage() {
  return (
    <div className={`${s.page} ${fontClass}`}>
      <Header />
      <main id="main">
        <section className={s.hero} aria-labelledby="voip-title">
          <div className={`${s.container} ${s.heroGrid}`}>
            <div>
              <p className={s.kicker}>Coming soon</p>
              <h1 id="voip-title" className={s.h1}><span className={s.hl}>VoIP Lines</span> + Automation</h1>
              <p className={s.subLeft}>One business number for calls, SMS, WhatsApp and email automation, connected to your ATS.</p>
              <ul className={s.demoTicks} style={{ marginTop: 18 }}>
                {BULLETS.map((b) => <li key={b}><Check /> {b}</li>)}
              </ul>
              <div className={s.btns}>
                <a href="mailto:sales@callpilot.pro?subject=VoIP%20Lines%20launch" className={`${s.btn} ${s.btnDark}`}>Notify me at launch</a>
                <Link href="/" className={`${s.btn} ${s.btnGhost}`}>See AI Applicant Screening Calls</Link>
              </div>
            </div>
            <div className={s.media}>
              <div className={s.panel} style={{ textAlign: "center", padding: "48px 30px", marginTop: 0 }}>
                <p className={s.kicker} style={{ marginBottom: 6 }}>Available now</p>
                <h2 className={s.h2} style={{ fontSize: "clamp(26px, 3.2vw, 38px)", margin: "0 0 10px" }}>
                  <span className={s.hl}>AI Applicant Screening Calls</span>
                </h2>
                <p className={s.p} style={{ margin: "0 0 22px" }}>With SMS and WhatsApp document automation, built into your ATS.</p>
                <Link href="/book-a-demo" className={`${s.btn} ${s.btnDark}`}>Book a Demo</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
