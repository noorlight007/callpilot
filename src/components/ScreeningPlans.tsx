import { SCREENING_PLANS, COPY, SALES_MAILTO, SALES_EMAIL, money } from "@/lib/pricing";
import styles from "./ScreeningPlans.module.css";

type Props = { showTerms?: boolean; ctaHref?: string };

export default function ScreeningPlans({ showTerms = true, ctaHref = "/free-credits" }: Props) {
  return (
    <section className={styles.wrap} aria-labelledby="screening-plans">
      <h2 id="screening-plans" className={styles.heading}>AI Applicant Call Plans</h2>
      <p className={styles.sub}>{COPY.noCall} {COPY.trialLine}</p>

      <div className={styles.grid}>
        {SCREENING_PLANS.map((p) => (
          <article key={p.id} className={p.recommended ? `${styles.card} ${styles.rec}` : styles.card}>
            {p.recommended && <span className={styles.badge}>RECOMMENDED</span>}
            <h3 className={styles.name}>{p.name}</h3>
            <p className={styles.price}>
              {money(p.monthly)}<span>/month</span>
            </p>
            <p className={styles.calls}>{p.calls} screening calls included</p>
            <p className={styles.small}>{money(p.perCall)} per screening</p>
            <p className={styles.small}>{money(p.topUp)} per top-up screening</p>
            <hr className={styles.rule} />
            <ul className={styles.list}>
              {p.features.map((f) => <li key={f}>{f}</li>)}
            </ul>
            <a className={styles.cta} href={ctaHref}>{COPY.trialCta}</a>
          </article>
        ))}
      </div>

      <p className={styles.enterprise}>
        {COPY.enterpriseLead}{" "}
        <a href={SALES_MAILTO} aria-label={`Email ${SALES_EMAIL} about Enterprise pricing`}>
          {COPY.enterpriseLink}
        </a>
      </p>

      {showTerms && (
        <ul className={styles.terms}>
          <li>{COPY.aiNumber}</li>
          <li>{COPY.credit}</li>
          <li>{COPY.carryOver}</li>
          <li>{COPY.billing}</li>
        </ul>
      )}
    </section>
  );
}
