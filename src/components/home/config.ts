// Shared links for the homepage and inner pages. Edit here.
export const LINKS = {
  bookDemo: "/book-a-demo",
  pricing: "/pricing",
  screeningPricing: "/pricing#screening",
  screening: "/ai-applicant-screening",
  voip: "/voip",
  integrations: "/integrations",
};

/**
 * ATS logos used by the inner-page carousels (features page). The homepage uses
 * components/home/AtsCarousel.tsx. Use each company's OFFICIAL logo file only.
 * `w`/`h` = the logo file's real aspect ratio, scaled so h ≈ 32.
 * Set `logo` to undefined to temporarily fall back to a text name.
 */
export const ATS: {
  name: string;
  slug: string;
  logo?: string;
  w: number;
  h: number;
  note?: string;
}[] = [
  { name: "JobAdder", slug: "jobadder", logo: "/images/unname.png", w: 140, h: 32 },
  { name: "Recruit CRM", slug: "recruit-crm", logo: "/images/Recruit_CRM.webp", w: 134, h: 32 },
  { name: "Ashby", slug: "ashby", logo: "/wordmark.svg", w: 110, h: 32 },
  { name: "Greenhouse", slug: "greenhouse", logo: "/images/GREENHOUSE_WORDMARK_GREEN.jpg", w: 142, h: 32 },
  { name: "iCIMS", slug: "icims", w: 100, h: 32, note: "Coming soon" },
];
