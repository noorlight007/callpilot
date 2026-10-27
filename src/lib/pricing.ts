// Single source of truth for AI Applicant Screening Call pricing.
// Every page, component, FAQ and meta description must read from here.

export const CURRENCY = "USD";
export const FREE_TRIAL_CALLS = 100;
export const AI_NUMBER_MONTHLY = 10;
export const CREDIT_MAX_MINUTES = 2;
export const ENTERPRISE_THRESHOLD = 800;
export const SALES_EMAIL = "sales@callpilot.pro";
export const SALES_MAILTO = `mailto:${SALES_EMAIL}?subject=${encodeURIComponent("CallPilot Enterprise pricing")}`;

export type ScreeningPlan = {
  id: "starter" | "growth" | "pro";
  name: string;
  monthly: number;
  calls: number;
  perCall: number;
  topUp: number;
  recommended?: boolean;
  features: string[];
};

export const SCREENING_PLANS: ScreeningPlan[] = [
  {
    id: "starter",
    name: "Starter",
    monthly: 49,
    calls: 25,
    perCall: 1.96,
    topUp: 2.49,
    features: [
      "AI applicant screening calls",
      "WhatsApp or SMS document collection",
      "1 ATS integration",
      "Email notifications",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    monthly: 299,
    calls: 200,
    perCall: 1.5,
    topUp: 1.99,
    recommended: true,
    features: [
      "Everything in Starter",
      "Multiple ATS integrations",
      "Team access",
      "Reporting",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    monthly: 999,
    calls: 800,
    perCall: 1.25,
    topUp: 1.49,
    features: [
      "Everything in Growth",
      "Workflow automation",
      "Multi-location support",
      "Priority support",
    ],
  },
];

export const money = (n: number) =>
  "$" + n.toLocaleString("en-US", {
    minimumFractionDigits: Number.isInteger(n) ? 0 : 2,
    maximumFractionDigits: 2,
  });

export const STARTING_PRICE = SCREENING_PLANS[0].monthly;

// Shared copy strings
export const COPY = {
  trialLine: `New clients: your first ${FREE_TRIAL_CALLS} AI screening calls are free.`,
  trialCta: `Claim ${FREE_TRIAL_CALLS} Free Credits`,
  trialFooterLink: "Get Free Credits",
  noCall: "No Call. No Charge.",
  enterpriseLead: `Over ${ENTERPRISE_THRESHOLD} credits a month?`,
  enterpriseLink: "Talk to us.",
  aiNumber: `Plus ${money(AI_NUMBER_MONTHLY)}/month for an AI phone number (or connect your own compatible number).`,
  carryOver: "Unused credits carry over for one month, then expire.",
  billing: "Billed monthly in advance. Prices in USD.",
  credit: `1 Screening Credit = 1 answered call of up to ${CREDIT_MAX_MINUTES} minutes, plus SMS / WhatsApp document collection. Longer calls use 1 extra credit per further ${CREDIT_MAX_MINUTES} minutes. No Call. No Charge.`,
  faqCost:
    `Plans start at ${money(STARTING_PRICE)}/month for ${SCREENING_PLANS[0].calls} credits ` +
    `(${money(SCREENING_PLANS[0].perCall)} each). Growth is ${money(SCREENING_PLANS[1].monthly)}/month for ` +
    `${SCREENING_PLANS[1].calls} credits, Pro is ${money(SCREENING_PLANS[2].monthly)}/month for ` +
    `${SCREENING_PLANS[2].calls} credits, and Enterprise pricing is custom for ${ENTERPRISE_THRESHOLD}+ credits a month. ` +
    `New clients get their first ${FREE_TRIAL_CALLS} AI screening calls free.`,
};

// Meta descriptions
export const META = {
  pricing: `AI applicant screening from ${money(STARTING_PRICE)} a month. First ${FREE_TRIAL_CALLS} screening calls free.`,
  freeTrial: `Screen your live vacancy with ${FREE_TRIAL_CALLS} free AI applicant screening calls. Connects to Ashby, Recruit CRM, JobAdder, Greenhouse and more. No credit card required.`,
  freeTrialTitle: `${FREE_TRIAL_CALLS} Free AI Screening Calls | CallPilot`,
};
