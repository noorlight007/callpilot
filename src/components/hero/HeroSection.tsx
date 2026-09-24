// CallPilot homepage HERO
// Image: /public/images/hero-dashboard-laptop.webp

import Image from "next/image";
import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";
import type { SVGProps } from "react";
import { AtsLogoCarousel } from "@/components/AtsLogoCarousel";
import styles from "./HeroSection.module.css";

const font = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "700", "800"], display: "swap" });

const BOOK_DEMO_HREF = "/get-started";
const FREE_TRIAL_HREF = "/free-trial";

/* ---------- icons ---------- */
type P = SVGProps<SVGSVGElement>;
const svg = (p: P) => ({
  width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor",
  strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
  "aria-hidden": true, focusable: false, ...p,
});
const PhoneIcon = (p: P) => (
  <svg {...svg(p)}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" /></svg>
);
const ClockIcon = (p: P) => (
  <svg {...svg(p)}><circle cx="12" cy="12" r="9.5" /><path d="M12 6.5V12l3.5 2" /></svg>
);
const BarsIcon = (p: P) => (
  <svg {...svg({ fill: "currentColor", stroke: "none", ...p })}>
    <rect x="4" y="13" width="4" height="8" rx="1" /><rect x="10" y="8" width="4" height="13" rx="1" /><rect x="16" y="3" width="4" height="18" rx="1" />
  </svg>
);
const ShieldIcon = (p: P) => (
  <svg {...svg(p)}><path d="M12 2.5 4 5.5v6c0 5 3.4 8.6 8 10 4.6-1.4 8-5 8-10v-6l-8-3z" /><path d="m8.5 12 2.5 2.5 4.5-5" /></svg>
);
const ArrowRightIcon = (p: P) => (
  <svg {...svg({ strokeWidth: 2.2, ...p })}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);

const FEATURES = [
  { icon: PhoneIcon, text: "Lower communication costs" },
  { icon: ClockIcon, text: "24/7 AI calling and automation" },
  { icon: BarsIcon, text: "Increase efficiency" },
  { icon: ShieldIcon, text: "Secure and compliant" },
];

export default function HeroSection() {
  return (
    <section className={`${styles.hero} ${font.className}`}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Business VoIP Lines + AI Call Agent + Automation</p>
          <h1 className={styles.h1}>
            <span className={styles.h1Line}>Business VoIP Lines +</span>{" "}
            <span className={styles.h1Line}>AI Call Agent + Automation</span>
          </h1>
          <p className={styles.lead}>
            Let CallPilot handle your calls, screening, messaging and follow-up — all in one platform.
          </p>
          <div className={styles.ctas}>
            <Link href={BOOK_DEMO_HREF} className={styles.btn}>
              Book a Demo <ArrowRightIcon className={styles.btnIcon} />
            </Link>
            <Link href={FREE_TRIAL_HREF} className={styles.btnSecondary}>
              Claim 100 Free Credits
            </Link>
          </div>
          <ul className={styles.features}>
            {FEATURES.map(({ icon: Icon, text }) => (
              <li key={text}>
                <Icon className={styles.featureIcon} />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.visual}>
          <Image
            src="/images/hero-dashboard-laptop.webp"
            alt="CallPilot AI call agent dashboard showing AI applicant screening calls"
            width={1600}
            height={1350}
            priority
            sizes="(max-width: 1100px) 100vw, 50vw"
            className={styles.img}
          />
        </div>
      </div>

      {/* Integrations Marquee Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-6">
        <div className="flex items-center justify-center gap-4 mb-3">
          <div className="h-px bg-gradient-to-r from-transparent to-gray-300 w-12 sm:w-20" />
          <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">
            LIVE &amp; UPCOMING ATS INTEGRATIONS
          </span>
          <div className="h-px bg-gradient-to-l from-transparent to-gray-300 w-12 sm:w-20" />
        </div>
        <div className="max-w-2xl mx-auto relative overflow-hidden rounded-2xl shadow-sm border border-gray-200 bg-white p-2">
          <AtsLogoCarousel />
        </div>
      </div>
    </section>
  );
}

