"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface ApiPlanItem {
  id: number | string;
  name: string;
  description?: string;
  des_list?: string[];
  limit: number;
  price: string | number;
  is_number_subscription?: boolean;
  type?: string;
}

interface ScreeningPlanItem {
  id: string;
  name: string;
  isPopular?: boolean;
  isEnterprise?: boolean;
  price?: number;
  period?: string;
  priceLabel?: string;
  subLabel?: string;
  screeningsNote: string;
  topUpNote: string;
  bestFor: string;
  checkoutUrl: string;
}

interface AiCallPlanItem {
  id: string;
  name: string;
  isPopular?: boolean;
  isEnterprise?: boolean;
  price?: number;
  period?: string;
  priceLabel?: string;
  subLabel?: string;
  note: string;
  audience: string;
  checkoutUrl: string;
  features: string[];
}

// Enterprise plan for AI Screening Calls
const SCREENING_ENTERPRISE_PLAN: ScreeningPlanItem = {
  id: "enterprise",
  name: "Enterprise",
  isEnterprise: true,
  priceLabel: "Custom",
  subLabel: "pricing",
  checkoutUrl: "mailto:sales@swiftwave.ai?subject=CallPilot%20Enterprise%20Inquiry",
  screeningsNote: "2,000+ screenings",
  topUpNote: "High-volume screening with custom terms",
  bestFor: "Large teams — integrations, volume, and terms scoped to you."
};

// Default fallback data for AI Screening Calls
const DEFAULT_SCREENING_PLANS: ScreeningPlanItem[] = [
  {
    id: "starter",
    name: "Starter",
    price: 395,
    period: "month",
    checkoutUrl: "https://panel.callpilot.pro/checkout?plan=starter",
    screeningsNote: "100 screenings · $3.95 each",
    topUpNote: "Top-up $4.45 per screening",
    bestFor: "Getting started with AI screening."
  },
  {
    id: "growth",
    name: "Growth",
    isPopular: true,
    price: 1400,
    period: "month",
    checkoutUrl: "https://panel.callpilot.pro/checkout?plan=growth",
    screeningsNote: "400 screenings · $3.50 each",
    topUpNote: "Top-up $3.90 per screening",
    bestFor: "Active hiring — 4x the volume at a lower rate per screening."
  },
  {
    id: "pro",
    name: "Pro",
    price: 2950,
    period: "month",
    checkoutUrl: "https://panel.callpilot.pro/checkout?plan=pro",
    screeningsNote: "1,000 screenings · $2.95 each",
    topUpNote: "Top-up $2.95 per screening",
    bestFor: "High-volume hiring — the lowest cost per screening."
  },
  SCREENING_ENTERPRISE_PLAN
];

// Enterprise plan for AI Calls
const AI_CALL_ENTERPRISE_PLAN: AiCallPlanItem = {
  id: "enterprise",
  name: "Enterprise",
  isEnterprise: true,
  priceLabel: "Custom",
  subLabel: "pricing",
  checkoutUrl: "mailto:sales@swiftwave.ai?subject=CallPilot%20Enterprise%20Inquiry",
  note: "Custom AI call minutes",
  audience: "Large teams — custom minutes, volume discounts, and integrations scoped to you.",
  features: [
    "Paid monthly in advance",
    "Custom AI minute packages",
    "Priority technical support",
    "Volume discounts available",
    "International calling packages",
    "Custom API integrations"
  ]
};

// Default fallback data for AI Calls
const DEFAULT_AI_CALL_PLANS: AiCallPlanItem[] = [
  {
    id: "starter",
    name: "Starter",
    price: 400,
    period: "month + VAT",
    checkoutUrl: "https://callpilot.pro/get-started",
    note: "350 AI voice minutes",
    audience: "Small businesses starting with AI voice calls.",
    features: [
      "Paid monthly in advance",
      "Dedicated onboarding & customer support",
      "$400 one-off setup fee",
      "Setup fee returned as free minutes after 12 months",
      "Additional minutes: $1.15 per minute"
    ]
  },
  {
    id: "growing",
    name: "Growing",
    price: 1000,
    period: "month + VAT",
    checkoutUrl: "https://callpilot.pro/get-started",
    note: "900 AI voice minutes",
    audience: "Businesses scaling AI voice calls across teams.",
    features: [
      "Paid monthly in advance",
      "Dedicated onboarding & customer support",
      "$400 one-off setup fee",
      "Setup fee returned as free minutes after 12 months",
      "Additional minutes: $1.15 per minute"
    ]
  },
  {
    id: "pro",
    name: "Pro",
    price: 1500,
    period: "month + VAT",
    checkoutUrl: "https://callpilot.pro/get-started",
    note: "1,400 AI voice minutes",
    audience: "High-volume automated AI calls.",
    features: [
      "Paid monthly in advance",
      "Priority onboarding & support",
      "$400 one-off setup fee",
      "Setup fee returned as free minutes after 12 months",
      "Additional minutes: $1.15 per minute"
    ]
  },
  AI_CALL_ENTERPRISE_PLAN
];

// Helper to determine order rank (Starter -> Growth/Growing -> Pro -> Enterprise)
const getPlanOrder = (name: string): number => {
  const n = name.toLowerCase();
  if (n.includes("start")) return 1;
  if (n.includes("grow")) return 2;
  if (n.includes("pro")) return 3;
  if (n.includes("enterp")) return 4;
  return 5;
};

// Map API response to ScreeningPlanItem array
const mapScreeningApiResults = (results: ApiPlanItem[]): ScreeningPlanItem[] => {
  const mapped = results.map((apiItem) => {
    const rawPrice = parseFloat(String(apiItem.price)) || 0;
    const limit = apiItem.limit || 0;
    const name = apiItem.name || "Plan";
    const isPopular = name.toLowerCase().includes("grow");
    const perRate = limit > 0 ? (rawPrice / limit).toFixed(2) : "1.99";

    let topUpNote = "Top-up $4.45 per screening";
    let bestFor = "Getting started with AI screening.";

    if (name.toLowerCase().includes("grow")) {
      topUpNote = "Top-up $3.90 per screening";
      bestFor = "Active hiring — 4x the volume at a lower rate per screening.";
    } else if (name.toLowerCase().includes("pro")) {
      topUpNote = "Top-up $2.95 per screening";
      bestFor = "High-volume hiring — the lowest cost per screening.";
    }

    return {
      id: String(apiItem.id || name.toLowerCase()),
      name: name,
      isPopular,
      price: rawPrice,
      period: "month",
      checkoutUrl: `https://panel.callpilot.pro/checkout?plan=${name.toLowerCase()}`,
      screeningsNote: `${limit.toLocaleString()} screenings · $${perRate} each`,
      topUpNote: topUpNote,
      bestFor: bestFor
    };
  });

  mapped.sort((a, b) => getPlanOrder(a.name) - getPlanOrder(b.name));
  return [...mapped, SCREENING_ENTERPRISE_PLAN];
};

// Map API response to AiCallPlanItem array
const mapAiCallApiResults = (results: ApiPlanItem[]): AiCallPlanItem[] => {
  const mapped = results.map((apiItem) => {
    const rawPrice = parseFloat(String(apiItem.price)) || 0;
    const limit = apiItem.limit || 0;
    const name = apiItem.name || "Plan";
    const isPro = name.toLowerCase().includes("pro");

    const defaultFeatures = [
      "Paid monthly in advance",
      isPro ? "Priority onboarding & support" : "Dedicated onboarding & customer support",
      "$400 one-off setup fee",
      "Setup fee returned as free minutes after 12 months",
      "Additional minutes: $1.15 per minute"
    ];

    let audience = "Small businesses starting with AI voice calls.";
    if (name.toLowerCase().includes("grow")) {
      audience = "Businesses scaling AI voice calls across teams.";
    } else if (isPro) {
      audience = "High-volume automated AI calls.";
    }

    return {
      id: String(apiItem.id || name.toLowerCase()),
      name: name,
      price: rawPrice,
      period: "month + VAT",
      checkoutUrl: "https://callpilot.pro/get-started",
      note: `${limit.toLocaleString()} AI voice minutes`,
      audience: audience,
      features: (apiItem.des_list && apiItem.des_list.length > 0) ? apiItem.des_list : defaultFeatures
    };
  });

  mapped.sort((a, b) => getPlanOrder(a.name) - getPlanOrder(b.name));
  return [...mapped, AI_CALL_ENTERPRISE_PLAN];
};

interface PricingProps {
  asH1?: boolean;
}

const CheckIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    className="shrink-0 mt-0.5"
    aria-hidden="true"
  >
    <path
      d="M3 8.5L6.5 12L13 4.5"
      stroke="#0a0a0a"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Pricing = ({ asH1 = false }: PricingProps) => {
  const [activeTab, setActiveTab] = useState<"screening" | "calls">("screening");
  const [screeningPlans, setScreeningPlans] = useState<ScreeningPlanItem[]>(DEFAULT_SCREENING_PLANS);
  const [aiCallPlans, setAiCallPlans] = useState<AiCallPlanItem[]>(DEFAULT_AI_CALL_PLANS);

  // Fetch Screening Calls Plans from API
  useEffect(() => {
    fetch("https://api.callpilot.pro/api/v1/payment/subscriptions/plans?type=SCREENING_CALL")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch screening plans");
        return res.json();
      })
      .then((data) => {
        if (data && Array.isArray(data.results) && data.results.length > 0) {
          setScreeningPlans(mapScreeningApiResults(data.results));
        }
      })
      .catch((err) => {
        console.error("Error fetching SCREENING_CALL plans:", err);
      });
  }, []);

  // Fetch AI Calls Plans from API
  useEffect(() => {
    fetch("https://api.callpilot.pro/api/v1/payment/subscriptions/plans?type=AI_CALL")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch AI call plans");
        return res.json();
      })
      .then((data) => {
        if (data && Array.isArray(data.results) && data.results.length > 0) {
          setAiCallPlans(mapAiCallApiResults(data.results));
        }
      })
      .catch((err) => {
        console.error("Error fetching AI_CALL plans:", err);
      });
  }, []);

  return (
    <section className="bg-[#f8f7f4] text-[#0a0a0a] py-10 sm:py-14 lg:py-20 border-b border-[#e6e4de] font-sans selection:bg-[#0a0a0a] selection:text-white">
      {/* Scoped CSS for the exact pixel-perfect design */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .callpilot-pricing-wrap {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px;
        }
        @media (min-width: 640px) {
          .callpilot-pricing-wrap {
            padding: 0 32px;
          }
        }
        .plan-card {
          display: flex;
          flex-direction: column;
          background: #ffffff;
          border: 1px solid #e6e4de;
          border-radius: 20px;
          padding: 30px 26px;
          position: relative;
          overflow: hidden;
          transition: transform 0.15s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }
        .plan-card:hover {
          border-color: #0a0a0a;
          box-shadow: 0 12px 32px -8px rgba(10, 10, 10, 0.08);
        }
        .plan-card.popular {
          border: 2px solid #0a0a0a;
        }
        .ribbon-recommended {
          position: absolute;
          top: 22px;
          right: -34px;
          transform: rotate(45deg);
          background: #0a0a0a;
          color: #ffffff;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.05em;
          padding: 5px 38px;
          text-align: center;
          user-select: none;
        }
        .plan-cta-btn {
          display: inline-block;
          box-sizing: border-box;
          margin-top: 24px;
          width: 100%;
          padding: 14px;
          background: #0a0a0a;
          color: #ffffff;
          border: none;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 700;
          text-align: center;
          text-decoration: none;
          cursor: pointer;
          transition: background 0.15s ease, transform 0.05s ease;
        }
        .plan-cta-btn:hover {
          background: #262624;
        }
        .plan-cta-btn:active {
          background: #000000;
          transform: scale(0.97);
        }
        .plan-cta-btn:focus-visible {
          outline: 2px solid #2563eb;
          outline-offset: 2px;
        }
        a.enterprise-card-link {
          display: block;
          color: inherit;
          text-decoration: none;
          border-radius: 20px;
          height: 100%;
          transition: box-shadow 0.22s ease, transform 0.12s ease;
        }
        a.enterprise-card-link:hover {
          box-shadow: 0 28px 54px -16px rgba(10, 10, 10, 0.22), 0 10px 22px -8px rgba(10, 10, 10, 0.12);
          transform: translateY(-3px);
        }
        a.enterprise-card-link:active {
          box-shadow: 0 14px 28px -10px rgba(10, 10, 10, 0.35), 0 4px 10px -4px rgba(10, 10, 10, 0.2);
          transform: translateY(-1px) scale(0.99);
        }
        `
      }} />

      <div className="callpilot-pricing-wrap">
        {/* Header with Switcher / Tab Button */}
        <div className="flex items-center justify-start sm:justify-end pt-8 sm:pt-0 mb-6 sm:mb-8">
          <div className="inline-flex border border-[#0a0a0a] rounded-full overflow-hidden bg-white shadow-xs">
            <button
              type="button"
              onClick={() => setActiveTab("screening")}
              className={`px-5 py-2.5 text-[14px] font-semibold transition-colors duration-150 cursor-pointer select-none ${
                activeTab === "screening"
                  ? "bg-[#0a0a0a] text-white"
                  : "bg-white text-[#0a0a0a] hover:bg-black/5"
              }`}
            >
              AI Screening Calls
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("calls")}
              className={`px-5 py-2.5 text-[14px] font-semibold transition-colors duration-150 cursor-pointer select-none ${
                activeTab === "calls"
                  ? "bg-[#0a0a0a] text-white"
                  : "bg-white text-[#0a0a0a] hover:bg-black/5"
              }`}
            >
              AI Calls
            </button>
          </div>
        </div>

        {/* Hero Section */}
        {activeTab === "screening" ? (
          <div className="flex flex-col items-center gap-3 text-center mb-10 md:mb-12">
            {asH1 ? (
              <h1 className="m-0 text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0a0a0a]">
                AI Applicant Call Plans
              </h1>
            ) : (
              <h2 className="m-0 text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0a0a0a]">
                AI Applicant Call Plans
              </h2>
            )}
            <div className="w-14 h-1 bg-[#0a0a0a] rounded-full mx-auto my-1" />
            <p className="m-0 text-base sm:text-[17px] text-[#6b6b68] font-medium max-w-xl">
              No Call. No Charge.
            </p>
            <p className="m-0 text-[13px] sm:text-[14px] text-[#8a8883] font-normal">
              WhatsApp + SMS document requests &middot; Auto ATS sync &middot; Recruiter alerts
            </p>
            <div className="inline-block bg-[#0a0a0a] text-white text-[13px] font-semibold px-5 py-2 rounded-full mt-2">
              New clients: your first 100 AI screening calls are free
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3 text-center mb-10 md:mb-12">
            {asH1 ? (
              <h1 className="m-0 text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0a0a0a]">
                AI Call Plans
              </h1>
            ) : (
              <h2 className="m-0 text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0a0a0a]">
                AI Call Plans
              </h2>
            )}
            <div className="w-14 h-1 bg-[#0a0a0a] rounded-full mx-auto my-1" />
            <p className="m-0 text-base sm:text-[17px] text-[#6b6b68] font-medium max-w-xl">
              Monthly AI voice minutes, scaled to your call volume.
            </p>
          </div>
        )}

        {/* Pricing Grid */}
        {activeTab === "screening" ? (
          /* AI Screening Calls Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch mb-10">
            {screeningPlans.map((plan) => {
              const isPopular = !!plan.isPopular;
              const isEnterprise = !!plan.isEnterprise;

              const cardContent = (
                <article className={`plan-card h-full ${isPopular ? "popular" : ""}`}>
                  {isPopular && <div className="ribbon-recommended">RECOMMENDED</div>}

                  {/* Plan Name */}
                  <div className="text-center pb-[18px] border-b border-[#ece9e2] flex flex-col items-center gap-2">
                    <span className="text-[19px] font-bold text-[#0a0a0a]">{plan.name}</span>
                  </div>

                  {/* Price Row */}
                  <div className="self-center mt-[22px] px-6 py-3 bg-[#f2f1ec] rounded-[16px] flex items-baseline justify-center gap-1">
                    {isEnterprise ? (
                      <>
                        <span className="text-[38px] sm:text-[44px] font-extrabold text-[#0a0a0a] tracking-tight leading-none">
                          {plan.priceLabel}
                        </span>
                        <span className="text-[14px] text-[#8a8883] font-medium ml-1">
                          {plan.subLabel}
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="text-[22px] font-extrabold text-[#0a0a0a]">$</span>
                        <span className="text-[44px] font-extrabold text-[#0a0a0a] tracking-tight leading-none">
                          {plan.price?.toLocaleString()}
                        </span>
                        <span className="text-[14px] text-[#8a8883] font-medium">
                          /{plan.period}
                        </span>
                      </>
                    )}
                  </div>

                  {/* Screenings note */}
                  <p className="text-center text-[13.5px] font-medium text-[#6b6b68] pt-3 m-0">
                    {plan.screeningsNote}
                  </p>

                  {/* Top-up rate note */}
                  <p className="text-center text-[13px] text-[#8a8883] pt-1.5 m-0">
                    {plan.topUpNote}
                  </p>

                  {/* BEST FOR Header */}
                  <p className="text-[11px] font-bold tracking-[0.06em] text-[#8a8883] pt-6 pb-2 m-0 uppercase">
                    BEST FOR
                  </p>

                  {/* Best for audience note */}
                  <p className="text-[13.5px] text-[#2a2a28] leading-[1.5] m-0">
                    {plan.bestFor}
                  </p>

                  {/* Spacer */}
                  <div className="flex-grow min-h-6" />

                  {/* CTA Button */}
                  {isEnterprise ? (
                    <span className="plan-cta-btn" aria-hidden="true">
                      Contact Sales
                    </span>
                  ) : (
                    <Link href="https://callpilot.pro/get-started" className="w-full">
                      <button type="button" className="plan-cta-btn">
                        Get Started
                      </button>
                    </Link>
                  )}
                </article>
              );

              if (isEnterprise) {
                return (
                  <Link
                    key={plan.id}
                    href={plan.checkoutUrl}
                    className="enterprise-card-link"
                    aria-label="Contact Sales — Enterprise plan"
                  >
                    {cardContent}
                  </Link>
                );
              }

              return <div key={plan.id} className="h-full">{cardContent}</div>;
            })}
          </div>
        ) : (
          /* AI Calls Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch mb-10">
            {aiCallPlans.map((plan) => {
              const isPopular = !!plan.isPopular;
              const isEnterprise = !!plan.isEnterprise;

              const cardContent = (
                <article className={`plan-card h-full ${isPopular ? "popular" : ""}`}>
                  {isPopular && <div className="ribbon-recommended">POPULAR</div>}

                  {/* Plan Name */}
                  <div className="text-center pb-[18px] border-b border-[#ece9e2] flex flex-col items-center gap-2">
                    <span className="text-[19px] font-bold text-[#0a0a0a]">{plan.name}</span>
                  </div>

                  {/* Price Row */}
                  <div className="self-center mt-[22px] px-6 py-3 bg-[#f2f1ec] rounded-[16px] flex items-baseline justify-center gap-1">
                    {isEnterprise ? (
                      <>
                        <span className="text-[38px] sm:text-[44px] font-extrabold text-[#0a0a0a] tracking-tight leading-none">
                          {plan.priceLabel}
                        </span>
                        <span className="text-[14px] text-[#8a8883] font-medium ml-1">
                          {plan.subLabel}
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="text-[22px] font-extrabold text-[#0a0a0a]">$</span>
                        <span className="text-[44px] font-extrabold text-[#0a0a0a] tracking-tight leading-none">
                          {plan.price?.toLocaleString()}
                        </span>
                        <span className="text-[14px] text-[#8a8883] font-medium">
                          /{plan.period}
                        </span>
                      </>
                    )}
                  </div>

                  {/* Price Note / Limit */}
                  <p className="text-center text-[13.5px] font-semibold text-[#8a8883] pt-2.5 m-0">
                    {plan.note}
                  </p>

                  {/* Includes Header */}
                  <p className="text-[11.5px] font-bold tracking-[0.06em] text-[#8a8883] pt-[18px] pb-[14px] m-0 uppercase">
                    INCLUDES
                  </p>

                  {/* Features List */}
                  <ul className="flex flex-col gap-3 list-none m-0 p-0">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-[13.5px] text-[#2a2a28] leading-[1.4]">
                        <CheckIcon />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Audience / Note */}
                  <p className="text-[13px] text-[#8a8883] leading-[1.5] mt-4 mb-[18px]">
                    {plan.audience}
                  </p>

                  {/* Spacer */}
                  <div className="flex-grow" />

                  {/* CTA Button */}
                  {isEnterprise ? (
                    <span className="plan-cta-btn" aria-hidden="true">
                      Contact Sales
                    </span>
                  ) : (
                    <Link href="https://callpilot.pro/get-started" className="w-full">
                      <button type="button" className="plan-cta-btn">
                        Get Started
                      </button>
                    </Link>
                  )}
                </article>
              );

              if (isEnterprise) {
                return (
                  <Link
                    key={plan.id}
                    href={plan.checkoutUrl}
                    className="enterprise-card-link"
                    aria-label="Contact Sales — Enterprise plan"
                  >
                    {cardContent}
                  </Link>
                );
              }

              return <div key={plan.id} className="h-full">{cardContent}</div>;
            })}
          </div>
        )}

        {/* Plan Features / Policies Footer */}
        {activeTab === "screening" ? (
          <p className="flex items-center justify-center gap-x-2 sm:gap-x-3 gap-y-1 text-[13px] sm:text-[13.5px] text-[#8a8883] font-normal flex-wrap mt-8 text-center m-0">
            <span>1 credit covers a call of up to 2 minutes</span>
            <span>&middot;</span>
            <span>Automatic top-ups and plan upgrades</span>
            <span>&middot;</span>
            <span>AI number $10/month, or connect a compatible number</span>
          </p>
        ) : (
          <p className="flex items-center justify-center gap-x-2 sm:gap-x-3 gap-y-1 text-[13px] sm:text-[13.5px] text-[#8a8883] font-medium flex-wrap mt-8 text-center m-0">
            <span>Prices shown exclude VAT</span>
            <span>&middot;</span>
            <span>$400 setup fee applies to Starter, Growing &amp; Pro &mdash; returned as free minutes after 12 months</span>
            <span>&middot;</span>
            <span>Additional minutes on Starter/Growing/Pro billed at $1.15/min</span>
          </p>
        )}
      </div>
    </section>
  );
};

export default Pricing;
