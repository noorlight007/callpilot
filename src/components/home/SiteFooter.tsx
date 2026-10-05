import Link from "next/link";
import s from "./landing.module.css";
import { Chat, Linkedin, Mark } from "./icons";
import { FOOTER } from "./content";

export default function SiteFooter() {
  return (
    <footer className={s.footer}>
      <div className={`${s.container} ${s.footerGrid}`}>
        <div className={s.footerAbout}>
          <Link href="/" className={s.brand} aria-label="CallPilot home">
            <Mark className={s.brandMarkLight} />
            <span className={s.brandText}>
              <span className={s.brandName}>CallPilot</span>
              <span className={s.brandTagLight}>AI Phone Calls</span>
            </span>
          </Link>
          <p>{FOOTER.about}</p>
          <div className={s.footerSocial}>
            <a href={FOOTER.whatsapp.href} rel="noopener" target="_blank"><Chat /> {FOOTER.whatsapp.label}</a>
            <a href={FOOTER.linkedin} rel="noopener" target="_blank"><Linkedin /> Follow on LinkedIn</a>
          </div>
        </div>
        {FOOTER.columns.map((c) => (
          <nav key={c.title} aria-label={c.title} className={s.footerCol}>
            <h3>{c.title}</h3>
            <ul>{c.links.map((l) => <li key={l.label}><Link href={l.href}>{l.label}</Link></li>)}</ul>
          </nav>
        ))}
      </div>
      <div className={`${s.container} ${s.footerBottom}`}>
        <address>{FOOTER.company.join(" · ")}</address>
        <p>© {new Date().getFullYear()} CallPilot. Operated by Swiftwave FZ-LLC (RAKEZ licence 47028798). All rights reserved.</p>
      </div>
    </footer>
  );
}
