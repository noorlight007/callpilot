// All landing-page copy and data in one place. Prices are copied from the live
// callpilot.pro pricing section (Sept 2026). Update here if they change.

export const PLANS = [
  {
    name: "Starter",
    price: "$395",
    period: "/month",
    includes: "100 screenings · $3.95 each",
    topUp: "Top-up: $4.45 per screening",
    bestFor: "Getting started with AI screening.",
    cta: "Get Started",
    href: "/signup?plan=starter",
  },
  {
    name: "Growth",
    price: "$1,400",
    period: "/month",
    includes: "400 screenings · $3.50 each",
    topUp: "Top-up: $3.90 per screening",
    bestFor: "Active hiring: 4x the volume at a lower rate per screening.",
    cta: "Get Started",
    href: "/signup?plan=growth",
    recommended: true,
  },
  {
    name: "Pro",
    price: "$2,950",
    period: "/month",
    includes: "1,000 screenings · $2.95 each",
    topUp: "Top-up: $2.95 per screening",
    bestFor: "High-volume hiring: the lowest cost per screening.",
    cta: "Get Started",
    href: "/signup?plan=pro",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    includes: "2,000+ screenings",
    topUp: "Volume pricing and terms scoped to you",
    bestFor: "Large teams: integrations, volume and terms scoped to you.",
    cta: "Contact Sales",
    href: "/contact-sales",
  },
];

// CallPilot VoIP: three simple options. Prices per VoIP line, per month.
export const VOIP_PLANS = [
  {
    name: "CallPilot VoIP",
    price: "$5.99",
    headline: "Your business line",
    features: [
      "Local business number",
      "Calls on mobile, laptop or desk",
      "WhatsApp calling & messaging",
      "SMS from your business number",
      "Call forwarding",
      "Calls at low pay-as-you-go rates",
    ],
    href: "/signup?plan=voip",
  },
  {
    name: "CallPilot VoIP + 100 minutes",
    price: "$9.99",
    headline: "Everything in VoIP, plus",
    features: [
      "100 outbound minutes every month",
      "Keep your existing number or choose a new one",
    ],
    href: "/signup?plan=voip-100",
  },
  {
    name: "CallPilot VoIP + Automation",
    price: "$14.99",
    headline: "Everything in VoIP + 100 minutes, plus",
    features: [
      "Automated WhatsApp, SMS & email follow-ups",
      "IVR menus & call routing",
      "Automated workflows",
      "ATS & CRM sync",
    ],
    href: "/signup?plan=voip-automation",
    recommended: true,
  },
];

export const VOIP_NOTE =
  "Prices per VoIP line. Incoming calls included (fair use). Extra minutes and WhatsApp/SMS messages at low pay-as-you-go rates.";

export const PLAN_NOTES = [
  "1 credit covers a call of up to 2 minutes",
  "Automatic top-ups and plan upgrades",
  "AI number $10/month, or connect a compatible number",
];

export const FEATURES = [
  { title: "AI Call Agent", text: "Natural two-way phone conversations that speak, listen and adapt in real time, at scale." },
  { title: "AI Memory", text: "Full CRM and ATS integration, so every call knows the conversation history." },
  { title: "Compliance by Design", text: "Built-in compliance features designed to keep every call within regulatory standards." },
  { title: "Call Intelligence", text: "Real-time analytics and outcome tracking for continuous improvement." },
];

export const USE_CASES = [
  { title: "Staffing & recruitment agencies", text: "Screen every applicant across all your clients' roles, day and night." },
  { title: "In-house talent acquisition", text: "Hand hiring managers qualified candidates without adding headcount." },
  { title: "High-volume hiring", text: "Warehouse, retail, hospitality and care roles screened at scale." },
  { title: "Any business needing a phone line", text: "CallPilot VoIP from $5.99 a month, with WhatsApp, SMS and email built in." },
];

export const FAQS = [
  {
    q: "What is CallPilot?",
    a: "CallPilot is one platform for VoIP phone lines, an AI call agent and automation. Your business gets a low-cost number for calls, WhatsApp, SMS and email, and recruiters can add AI applicant screening calls that qualify every applicant 24/7.",
  },
  {
    q: "How do AI applicant screening calls work?",
    a: "CallPilot calls each applicant, asks your role-specific screening questions and completes the screen in under 2 minutes. Qualified applicants are asked for documents by WhatsApp, SMS and email, results are written back to your ATS, and your recruiter is notified to verify.",
  },
  {
    q: "What do the traffic-light results mean?",
    a: "Green means documents received, amber means documents requested and awaiting a reply, and red means the applicant was unsuccessful because they did not meet a requirement.",
  },
  {
    q: "Which ATS does CallPilot integrate with?",
    a: "JobAdder, Recruit CRM and Ashby. Greenhouse and iCIMS are coming soon.",
  },
  {
    q: "What does one screening credit cover?",
    a: "One credit covers a call of up to 2 minutes. No call, no charge: if the applicant isn't reached, you don't pay.",
  },
  {
    q: "Can I keep my existing business number?",
    a: "Yes. You can transfer your existing number to a CallPilot VoIP line, or get a new local number. CallPilot VoIP starts from $5.99 per line per month.",
  },
  {
    q: "Is there a free trial?",
    a: "New clients get their first 100 AI screening calls free.",
  },
];

export const FOOTER = {
  about:
    "VoIP phone lines, AI applicant screening calls and automation in one platform. Qualify applicants in under 2 minutes, collect documents via WhatsApp and sync into your ATS.",
  columns: [
    {
      title: "Products",
      links: [
        { label: "VoIP Phone Lines", href: "/business-voip" },
        { label: "AI Applicant Screening", href: "/ai-applicant-screening" },
        { label: "Automation", href: "/features#automation" },
        { label: "Pricing", href: "/pricing" },
        { label: "100 Free Credits Trial", href: "/signup" },
      ],
    },
    {
      title: "Integrations",
      links: [
        { label: "JobAdder", href: "/integrations/jobadder" },
        { label: "Recruit CRM", href: "/integrations/recruit-crm" },
        { label: "Ashby", href: "/integrations/ashby" },
        { label: "Greenhouse (coming soon)", href: "/integrations/greenhouse" },
        { label: "iCIMS (coming soon)", href: "/integrations/icims" },
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
      ],
    },
    {
      title: "Legal & trust",
      links: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Cookie Policy", href: "/cookie-policy" },
        { label: "Policies & Compliance", href: "/compliance" },
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
  linkedin: "https://www.linkedin.com/company/callpilot",
};
