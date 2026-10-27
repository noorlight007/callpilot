import Link from "next/link";
import Pic from "@/components/Pic";
import s from "./landing.module.css";
import { ArrowRight } from "./icons";
import { LINKS } from "./config";
import { HERO } from "./content";

export default function HomeHero() {
  return (
    <section className={s.hero} aria-labelledby="hero-title">
      <div className={`${s.container} ${s.heroGrid}`}>
        <div>
          <p className={s.kicker}>{HERO.eyebrow}</p>
          <h1 id="hero-title" className={s.h1}>
            <span className={s.hl}>{HERO.titleHighlight}</span> {HERO.titleRest}
          </h1>
          <p className={s.subLeft}>{HERO.lead}</p>
          <div className={s.btns}>
            <Link href={LINKS.bookDemo} className={`${s.btn} ${s.btnDark}`}>
              Book a Demo <ArrowRight className={s.btnIcon} />
            </Link>
            <a href="#how" className={`${s.btn} ${s.btnGhost}`}>See how it works</a>
          </div>
        </div>
        <div className={s.media}>
          <Pic base={HERO.image.base} alt={HERO.image.alt} priority className={s.shot} sizes="(max-width: 1100px) 100vw, 640px" />
        </div>
      </div>
    </section>
  );
}
