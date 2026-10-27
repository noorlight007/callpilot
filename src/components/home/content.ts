import { SCREENING_PLANS, COPY, FREE_TRIAL_CALLS, AI_NUMBER_MONTHLY, ENTERPRISE_THRESHOLD, SALES_MAILTO, money } from "@/lib/pricing";

// All landing-page copy and data in one place. Prices come from lib/pricing.ts
// (single source of truth). Update there if they change.

export const PLANS = [
  ...SCREENING_PLANS.map((p) => ({
    name: p.name,
    price: money(p.monthly),
    period: "per month",
    includes: `${p.calls} calls · ${money(p.perCall)} each`,
    features: p.features,
    topUp: "", // live from plans API (TopUpLine)
    cta: "Get Started",
    href: `/free-credits?plan=${p.id}`,
    recommended: !!p.recommended,
  })),
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    includes: `${ENTERPRISE_THRESHOLD}+ calls a month`,
    features: ["Volume pricing", "Tailored setup"],
    topUp: "",
    cta: "Contact Sales",
    href: SALES_MAILTO,
    recommended: false,
  },
];

export const PLAN_NOTES = [
  COPY.billing,
  COPY.credit.replace(/\.$/, ""),
  `AI number ${money(AI_NUMBER_MONTHLY)}/month, or connect a compatible number`,
];

/* ---------- Hero ---------- */
export const HERO = {
  eyebrow: "AI Applicant Screening",
  titleHighlight: "AI Applicant Screening Calls",
  titleRest: "+ Automation",
  lead: "Pre-qualify applicants by phone and gather their paperwork, with every outcome recorded in the hiring system you already use.",
  image: {
    base: "/images/home/home-status-board",
    alt: "Applicants sorted by status: Qualified, Documents Received, Documents Requested and Unsuccessful",
  },
};

/* ---------- Story: "Recruiters sleep. CallPilot qualifies 24/7." ---------- */
export type Tone = "navy" | "blue" | "amber" | "green" | "red" | "grey";

export const STORY_KEY: { tone: Tone; label: string }[] = [
  { tone: "blue", label: "Blue · Pre-qualified / Qualified" },
  { tone: "green", label: "Green · Documents Received" },
  { tone: "amber", label: "Amber · Documents Requested" },
  { tone: "red", label: "Red · Unsuccessful" },
];

export const STORY_STEPS: {
  time: string;
  tone: Tone;
  title: string;
  text: string;
  list?: { tone: Tone; label: string; text: string }[];
  why: string;
  image: { base: string; alt: string };
}[] = [
  {
    time: "Step 1",
    tone: "navy",
    title: "The job goes live",
    text: "CallPilot reads the advert and turns its requirements into yes/no questions, asked in a set order: work authorization, the role criteria, then travel and commute.",
    why: "Every applicant for a role is measured against the same standard.",
    image: { base: "/images/home/story-1-questions", alt: "Job advert turned into yes/no pre-qualifying questions" },
  },
  {
    time: "Step 2 · Monday, 9:00 PM",
    tone: "blue",
    title: "Olia applies and is called",
    text: "The AI Applicant Screening Call opens by saying it is an AI, then works through each question. A no ends the call and marks the applicant unsuccessful. Olia answers yes throughout and is marked Pre-qualified.",
    why: "Your team no longer makes first-round phone screens.",
    image: { base: "/images/home/story-2-call", alt: "AI Applicant Screening Call with every answer yes" },
  },
  {
    time: "Step 3 · Monday, 9:02 PM",
    tone: "amber",
    title: "Documents are requested",
    text: "A secure SMS upload link reaches her phone, or a WhatsApp message she can reply to with photos. Anyone who stays silent receives the same form by email.",
    why: "Paperwork arrives without anyone chasing it.",
    image: { base: "/images/home/story-3-candidate", alt: "Applicant uploading ID and documents from her phone" },
  },
  {
    time: "Step 4 · Monday, 9:17 PM",
    tone: "green",
    title: "Your ATS is updated",
    text: "Her files attach to her record, the status changes from Documents Requested to Documents Received, and an email alert goes out.",
    why: "Progress is visible without asking for updates.",
    image: { base: "/images/home/story-4-ats-sync", alt: "Files attached and ATS status changed to Documents Received" },
  },
  {
    time: "Step 5 · Tuesday, 9:00 AM",
    tone: "blue",
    title: "Your team works through the list",
    text: "By the morning, every applicant is sorted by status, so your team knows where to start.",
    list: [
      { tone: "green", label: "Documents Received", text: "Check the files and CV. Once suitable, the candidate is Qualified and moves to interview." },
      { tone: "amber", label: "Documents Requested", text: "Pre-qualified on the call; a short follow-up completes their documents." },
      { tone: "grey", label: "No Answer", text: "Called 3 times over 24 hours; a quick check decides the next step." },
      { tone: "red", label: "Unsuccessful", text: "No work needed." },
    ],
    why: "Time goes on candidates ready to progress.",
    image: { base: "/images/home/story-5-verify", alt: "Applicants sorted by outcome with a verified candidate moved to interview" },
  },
];

/* ---------- Getting started ---------- */
export const GETTING_STARTED = {
  steps: ["Connect your ATS", "Buy an AI Business Number", "Set up SMS and WhatsApp sender accounts", "Switch on calling"],
  support: "Our support team is here to help you get connected.",
};

/* ---------- Who it's for ---------- */
export const USE_CASES = [
  { title: "ATS, HCM and CRM platforms", text: "Offer AI applicant screening calls and document automation to your customers as an add-on to your platform." },
  { title: "Staffing and recruitment agencies", text: "Screen applicants for every client role without adding call time." },
  { title: "Talent Acquisition Teams", text: "Give every applicant a prompt first response, whatever the volume." },
  { title: "High-volume hiring", text: "Healthcare, warehousing, hospitality and other roles with many applicants per vacancy." },
];

/* ---------- FAQ ---------- */
export const FAQS = [
  {
    q: "What is CallPilot?",
    a: "CallPilot is AI Applicant Screening Calls + Automation. It calls every applicant, asks yes/no questions taken from your job advert, collects ID and documents by SMS or WhatsApp, and records every outcome in the ATS you already use.",
  },
  {
    q: "How do AI applicant screening calls work?",
    a: "CallPilot calls each applicant, asks your role-specific screening questions and completes the screen. Pre-qualified applicants are asked for documents by SMS, WhatsApp and email, results are written back to your ATS, and your team is notified to verify.",
  },
  {
    q: "What do the status colours mean?",
    a: "Blue means pre-qualified or qualified, green means documents received, amber means documents requested and awaiting a reply, red means the applicant was unsuccessful because they did not meet a requirement, and grey means no answer after three attempts.",
  },
  {
    q: "Which ATS does CallPilot integrate with?",
    a: "JobAdder, Recruit CRM, Ashby and Greenhouse. iCIMS is coming soon.",
  },
  {
    q: "Which languages are supported?",
    a: "English and Spanish.",
  },
  {
    q: "Can I use my own phone number?",
    a: `Yes, if it is compatible. Otherwise an AI phone number costs ${money(AI_NUMBER_MONTHLY)} a month.`,
  },
  {
    q: "What does one screening credit cover?",
    a: "One credit covers a call of up to 2 minutes. No call, no charge: if the applicant isn't reached, you don't pay.",
  },
  {
    q: "Do unused screenings carry over?",
    a: "Yes, for one month.",
  },
  {
    q: "Is there a free trial?",
    a: `New clients get their first ${FREE_TRIAL_CALLS} AI screening calls free.`,
  },
  {
    q: "Do I need a credit card for the free calls?",
    a: "No.",
  },
];

/* ---------- Footer ---------- */
export const FOOTER = {
  about: "CallPilot is a brand of Swiftwave.ai. AI Applicant Screening Calls + Automation.",
  columns: [
    {
      title: "Products",
      links: [
        { label: "AI Applicant Screening Call", href: "/ai-applicant-screening" },
        { label: "VoIP Lines (Coming Soon)", href: "/voip" },
        { label: "Pricing", href: "/pricing" },
        { label: COPY.trialFooterLink, href: "/free-credits" },
      ],
    },
    {
      title: "Integrations",
      links: [
        { label: "JobAdder", href: "/integrations/jobadder" },
        { label: "Recruit CRM", href: "/integrations/recruit-crm" },
        { label: "Ashby", href: "/integrations/ashby" },
        { label: "Greenhouse", href: "/integrations/greenhouse" },
        { label: "iCIMS (Coming Soon)", href: "/integrations/icims" },
        { label: "All integrations", href: "/integrations" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Features", href: "/features" },
        { label: "Use cases", href: "/use-cases" },
        { label: "News & releases", href: "/news" },
        { label: "Blog & guides", href: "/blog" },
        { label: "FAQ", href: "/#faq" },
      ],
    },
    {
      title: "Legal & trust",
      links: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms of Service", href: "/terms-conditions" },
        { label: "Cookie Policy", href: "/cookie-policy" },
        { label: "Security Policy & Compliance", href: "/policy-compliance" },
      ],
    },
  ],
  company: [
    "Swiftwave FZ-LLC",
    "Compass Building, Al Shohada Road",
    "Al Hamra Industrial Zone-FZ",
    "Ras Al Khaimah, UAE",
  ],
  whatsapp: { label: "WhatsApp +971 58 592 1525", href: "https://wa.me/971585921525" },
  linkedin: "https://www.linkedin.com/company/callpilot-ai-call/",
};
