// ATS logo carousel: pure CSS marquee, pauses on hover, static for reduced motion.
// Uses the official logo files already in /public. iCIMS has no logo yet: text + "Coming soon".
import Link from "next/link";
import s from "./landing.module.css";

export const ATS_LOGOS: { name: string; slug: string; logo?: string; w: number; h: number; soon?: boolean }[] = [
  { name: "JobAdder", slug: "jobadder", logo: "/images/unname.png", w: 2048, h: 517 },
  { name: "Recruit CRM", slug: "recruit-crm", logo: "/images/Recruit_CRM.webp", w: 384, h: 92 },
  { name: "Ashby", slug: "ashby", logo: "/wordmark.svg", w: 110, h: 32 },
  { name: "Greenhouse", slug: "greenhouse", logo: "/images/GREENHOUSE_WORDMARK_GREEN.jpg", w: 2212, h: 497 },
  { name: "iCIMS", slug: "icims", w: 100, h: 32, soon: true },
];

function Tile({ a, hidden }: { a: (typeof ATS_LOGOS)[number]; hidden?: boolean }) {
  return (
    <Link
      href={`/integrations/${a.slug}`}
      className={s.ats}
      aria-hidden={hidden || undefined}
      tabIndex={hidden ? -1 : undefined}
    >
      {a.logo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={a.logo} alt={hidden ? "" : a.name} width={a.w} height={a.h} loading="lazy" className={s.atsLogo} />
      ) : (
        <span className={s.atsName}>{a.name}</span>
      )}
      {a.soon && <em className={s.atsSoon}>Coming soon</em>}
    </Link>
  );
}

export default function AtsCarousel() {
  return (
    <div className={s.carousel} aria-label="ATS integrations">
      <div className={s.track}>
        {[0, 1].map((set) => ATS_LOGOS.map((a) => <Tile key={`${set}-${a.slug}`} a={a} hidden={set > 0} />))}
      </div>
    </div>
  );
}
