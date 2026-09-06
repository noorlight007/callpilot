// CallPilot.pro — ATS logo carousel (JobAdder / Recruit CRM / Greenhouse / Ashby)
//
// Replaces the current static, manually-draggable strip with an actual
// auto-scrolling marquee. Logo sources/alt text below are copied exactly
// from the live site's current DOM, so this is a real drop-in replacement,
// not a placeholder — just find wherever these four <img> tags currently
// render (in the component with the "cursor-grab" class) and swap that
// whole block for this component.
//
// What changed vs. what's live now:
// - It actually moves: previously this measured at 0px of movement over 5+
//   seconds — it only responded to manual drag. This auto-scrolls
//   continuously at a readable pace (28s per full loop) and pauses on hover.
// - Every logo now uses the SAME max-height at each breakpoint. Live site
//   currently has each logo on its own arbitrary size (JobAdder 17.5px/54.5px,
//   Ashby 23.2px/65.7px, Recruit CRM & Greenhouse unsized), which is why they
//   look inconsistent — normalized here to one shared size.

import styles from "./AtsLogoCarousel.module.css";

const LOGO_SIZE = "h-full object-contain max-h-[30px] sm:max-h-[56px]";

const logos = [
  { src: "/images/JobAdder.png", alt: "JobAdder Logo", className: LOGO_SIZE },
  {
    src: "/images/Recruit_CRM_icon.jpeg",
    alt: "Recruit CRM Logo",
    className: `${LOGO_SIZE} rounded object-cover`,
  },
  {
    src: "/images/greenhouse.png",
    alt: "Greenhouse ATS Logo",
    className: `${LOGO_SIZE} rounded object-cover`,
  },
  { src: "/wordmark.svg", alt: "Ashby Logo", className: `${LOGO_SIZE} filter` },
];

export function AtsLogoCarousel() {
  // Render the logo set twice back to back so the marquee loop is seamless —
  // translateX(-50%) lands exactly on the start of the second copy.
  const track = [...logos, ...logos];

  return (
    <div className="overflow-hidden w-full">
      <div className={`flex flex-row flex-nowrap items-center gap-x-4 sm:gap-x-24 py-4 px-6 sm:px-12 ${styles.track}`}>
        {track.map((logo, i) => (
          <img key={i} src={logo.src} alt={logo.alt} className={logo.className} />
        ))}
      </div>
    </div>
  );
}

export default AtsLogoCarousel;
