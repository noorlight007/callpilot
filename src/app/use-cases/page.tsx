import Link from "next/link";
import Header from "@/components/Header";
import SiteFooter from "@/components/home/SiteFooter";
import { FinalCta } from "@/components/home/Sections";
import { fontClass, font } from "@/components/home/font";
import s from "@/components/home/landing.module.css";
import hs from "@/components/home/hero3.module.css";
import {
  ArrowRight, Building, Users, Bolt, Phone, Check
} from "@/components/home/icons";

interface UseCaseBlock {
  id: string;
  icon: React.ComponentType;
  title: string;
  problem: string;
  benefits: string[];
  linkText: string;
  linkHref: string;
}

const USE_CASE_BLOCKS: UseCaseBlock[] = [
  {
    id: "staffing-agencies",
    icon: Building,
    title: "Staffing & recruitment agencies",
    problem: "Applicants arrive across every client's roles, often out of hours, and the first agency to call wins the candidate.",
    benefits: [
      "Every applicant called 24/7, including evenings and weekends",
      "Role-specific screening questions per client job",
      "ID and work authorisation chased by WhatsApp, SMS and email",
      "Results written back to JobAdder, Recruit CRM or Ashby",
    ],
    linkText: "Explore AI screening",
    linkHref: "/features#ai-applicant-screening",
  },
  {
    id: "in-house-talent",
    icon: Users,
    title: "In-house talent acquisition",
    problem: "Hiring managers want a shortlist, not a spreadsheet of unscreened applicants.",
    benefits: [
      "Hand hiring managers qualified candidates without adding headcount",
      "Same questions asked of every applicant, every time",
      "Recruiter notified only when a candidate is ready to verify",
    ],
    linkText: "See integrations",
    linkHref: "/integrations",
  },
  {
    id: "high-volume-hiring",
    icon: Bolt,
    title: "High-volume hiring",
    problem: "Warehouse, retail, hospitality and care roles can pull hundreds of applicants a week.",
    benefits: [
      "Every applicant screened in under 2 minutes",
      "A “No” on any requirement ends the screen, so recruiters only see qualified people",
      "Pay per screening: no call, no charge",
    ],
    linkText: "See screening plans",
    linkHref: "/pricing#screening",
  },
  {
    id: "business-phone-lines",
    icon: Phone,
    title: "Any business needing a phone line",
    problem: "Separate apps for calls, WhatsApp, texts and email, and nothing connected.",
    benefits: [
      "One low-cost number for calls, WhatsApp, SMS and email",
      "Forwarding, IVR menus and routing",
      "Keep your existing number",
      "From $5.99 per line per month",
    ],
    linkText: "See VoIP plans",
    linkHref: "/pricing#voip",
  },
];

export default function UseCasesPage() {
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
                <span className={hs.dot} /> Use cases
              </p>
              <h1 className={hs.h1}>
                From one vacancy to thousands. <span className={hs.accent}>CallPilot handles every call.</span>
              </h1>
              <p className={hs.lead} style={{ maxWidth: "760px", margin: "18px auto 0" }}>
                Built for recruitment first. Useful to any business that needs a phone line.
              </p>
            </header>
          </div>
        </section>

        {/* Four Use Case Blocks */}
        <section className={`${s.section} ${s.sectionWhite}`} style={{ paddingTop: "40px" }}>
          <div className={s.container}>
            <div style={{ display: "flex", flexDirection: "column", gap: "60px", maxWidth: "960px", margin: "0 auto" }}>
              {USE_CASE_BLOCKS.map((b, idx) => {
                const Icon = b.icon;
                const isEven = idx % 2 === 1;

                return (
                  <article
                    key={b.id}
                    id={b.id}
                    className={s.card}
                    style={{
                      padding: "clamp(24px, 4vw, 48px)",
                      background: isEven ? "var(--soft)" : "#ffffff",
                      border: "1px solid var(--line)",
                      borderRadius: "22px",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                      <span className={s.iconBoxDark} style={{ margin: 0 }}>
                        <Icon />
                      </span>
                      <h2 className={s.h2} style={{ fontSize: "clamp(24px, 2.5vw, 34px)" }}>
                        {b.title}
                      </h2>
                    </div>

                    <div style={{ marginBottom: "24px" }}>
                      <h3
                        style={{
                          fontSize: "14px",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                          color: "#c2410c",
                          marginBottom: "6px",
                        }}
                      >
                        The Problem
                      </h3>
                      <p className={s.p} style={{ fontSize: "17px", color: "var(--ink)" }}>
                        {b.problem}
                      </p>
                    </div>

                    <div>
                      <h3
                        style={{
                          fontSize: "14px",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                          color: "#0f7a3d",
                          marginBottom: "10px",
                        }}
                      >
                        With CallPilot
                      </h3>
                      <ul className={s.planFeat} style={{ marginBottom: "28px" }}>
                        {b.benefits.map((benefit) => (
                          <li key={benefit} style={{ fontSize: "16px", padding: "6px 0" }}>
                            <Check /> {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <Link href={b.linkHref} className={`${s.btn} ${s.btnDark}`}>
                        {b.linkText} <ArrowRight className={s.btnIcon} />
                      </Link>
                    </div>
                  </article>
                );
              })}
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
