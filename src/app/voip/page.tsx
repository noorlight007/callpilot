import type { Metadata } from "next";
import Header from "@/components/Header";
import SiteFooter from "@/components/home/SiteFooter";
import { fontClass } from "@/components/home/font";
import s from "@/components/home/landing.module.css";

// VoIP Business Lines are not on sale yet: prices listed, interest by email, not indexed.
export const metadata: Metadata = {
  title: { absolute: "VoIP Business Lines | Coming Soon | CallPilot" },
  description: "Business phone lines with SMS / WhatsApp automation and ATS integration, all in one platform. Coming soon from CallPilot.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://callpilot.pro/voip" },
};

const PLANS = [
  { name: "VoIP", price: "$5.99", per: "per line/month" },
  { name: "VoIP + 100 Minutes", price: "$9.99", per: "per line/month" },
  { name: "VoIP + Automation", price: "$14.99", per: "per line/month" },
];

export default function VoipComingSoonPage() {
  return (
    <div className={`${s.page} ${fontClass}`}>
      <Header />
      <main id="main">
        <section className={s.hero} aria-labelledby="voip-title">
          <div className={`${s.container} ${s.narrow} ${s.center}`}>
            <h1 id="voip-title" className={s.h1} style={{ marginBottom: 8 }}>VoIP Business Lines</h1>
            <p className={s.kicker} style={{ marginBottom: 18 }}>Coming Soon</p>
            <p className={s.subLeft} style={{ margin: "0 auto" }}>
              Business phone lines with SMS / WhatsApp automation and ATS integration, all in one platform.
            </p>
            <ul className={s.voipList}>
              {PLANS.map((p) => (
                <li key={p.name}>
                  <strong>{p.name}:</strong> {p.price} {p.per}
                </li>
              ))}
            </ul>
            <div className={s.btns} style={{ justifyContent: "center" }}>
              <a href="mailto:sales@callpilot.pro?subject=VoIP%20Business%20Lines%20interest" className={`${s.btn} ${s.btnDark}`}>Register Interest</a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
