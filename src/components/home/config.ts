// Shared links and ATS list for the homepage hero. Edit here.
export const LINKS = {
  bookDemo: "/book-a-demo",
  pricing: "/pricing",
  screeningPricing: "/pricing#ai-screening",
  screening: "/ai-applicant-screening",
  voip: "/business-voip",
  integrations: "/integrations",
};

/**
 * ATS logos. Use each company's OFFICIAL logo file only. Never retype or redraw a logo.
 * Put the files in /public/images/ats/ with exactly these names (SVG preferred).
 * `w`/`h` = the logo file's real aspect ratio (from its viewBox), scaled so h ≈ 32.
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
  { name: "Recruit CRM", slug: "recruit-crm", logo: "/images/Recruit_CRM_icon.jpeg", w: 150, h: 32 },
  { name: "Ashby", slug: "ashby", logo: "/wordmark.svg", w: 110, h: 32 },
  { name: "Greenhouse", slug: "greenhouse", logo: "/images/GREENHOUSE_WORDMARK_GREEN.jpg", w: 150, h: 32 },
  { name: "iCIMS", slug: "icims", w: 100, h: 32, note: "Coming soon" },
];
