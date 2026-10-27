import Pic from "@/components/Pic";
import s from "./landing.module.css";
import { HERO } from "./content";

export default function HomeHero() {
  return (
    <section className={s.hero} aria-labelledby="hero-title">
      <div className={`${s.container} ${s.heroGrid}`}>
        <div>
          <h1 id="hero-title" className={s.h1}>
            {HERO.titleHighlight} {HERO.titleRest}
          </h1>
          <p className={s.subLeft}>{HERO.lead}</p>
          <div className={s.btns}>
            <a href="#pricing" className={`${s.btn} ${s.btnDark}`}>View Pricing</a>
          </div>
        </div>
        <div className={s.media}>
          <Pic base={HERO.image.base} alt={HERO.image.alt} priority className={s.shot} sizes="(max-width: 1100px) 100vw, 640px" />
        </div>
      </div>
    </section>
  );
}
