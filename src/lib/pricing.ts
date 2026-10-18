// Single source of truth for AI Applicant Screening Call pricing.
// Every page, component, FAQ and meta description must read from here.

export const CURRENCY = "USD";
export const FREE_TRIAL_CALLS = 10;
export const AI_NUMBER_MONTHLY = 10;
export const CREDIT_MAX_MINUTES = 2;
export const ENTERPRISE_THRESHOLD = 300;
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
    calls: 10,
    perCall: 4.9,
    topUp: 4.9,
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
    calls: 75,
    perCall: 3.99,
    topUp: 3.99,
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
    calls: 300,
    perCall: 3.33,
    topUp: 3.33,
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
  enterpriseLead: `Over ${ENTERPRISE_THRESHOLD} calls a month?`,
  enterpriseLink: "Talk to us.",
  aiNumber: `Plus ${money(AI_NUMBER_MONTHLY)}/month for an AI phone number (or connect your own compatible number).`,
  carryOver: "Unused screenings carry over for one month, then expire.",
  billing: "Billed monthly in advance. Prices in USD.",
  credit: `1 credit covers a call of up to ${CREDIT_MAX_MINUTES} minutes.`,
  faqCost:
    `Plans start at ${money(STARTING_PRICE)}/month for ${SCREENING_PLANS[0].calls} screenings ` +
    `(${money(SCREENING_PLANS[0].perCall)} each). Growth is ${money(SCREENING_PLANS[1].monthly)}/month for ` +
    `${SCREENING_PLANS[1].calls} screenings, Pro is ${money(SCREENING_PLANS[2].monthly)}/month for ` +
    `${SCREENING_PLANS[2].calls} screenings, and Enterprise pricing is custom for over ${ENTERPRISE_THRESHOLD} a month. ` +
    `New clients get their first ${FREE_TRIAL_CALLS} AI screening calls free.`,
};

// Meta descriptions
export const META = {
  pricing: `AI applicant screening from ${money(STARTING_PRICE)} a month. First ${FREE_TRIAL_CALLS} screening calls free.`,
  freeTrial: `Screen your live vacancy with ${FREE_TRIAL_CALLS} free AI applicant screening calls. Connects to Ashby, Recruit CRM, JobAdder, Greenhouse and more. No credit card required.`,
  freeTrialTitle: `${FREE_TRIAL_CALLS} Free AI Screening Calls | CallPilot`,
};
