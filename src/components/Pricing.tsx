"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Manrope, Inter } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const CALLPILOT_PRICING_CONFIG = {
  currencySymbol: "$",
  addOns: {
    aiPhoneNumber: {
      price: 10,
      period: "month"
    }
  },
  plans: [
    {
      id: "starter",
      name: "STARTER",
      price: 199,
      period: "month",
      credits: 100,
      perScreeningRate: 1.99,
      checkoutUrl: "https://panel.callpilot.pro/checkout?plan=starter"
    },
    {
      id: "growth",
      name: "GROWTH",
      isPopular: true,
      price: 795,
      period: "month",
      credits: 500,
      perScreeningRate: 1.59,
      checkoutUrl: "https://panel.callpilot.pro/checkout?plan=growth"
    },
    {
      id: "pro",
      name: "PRO",
      price: 1995,
      period: "month",
      credits: 1500,
      perScreeningRate: 1.33,
      checkoutUrl: "https://panel.callpilot.pro/checkout?plan=pro"
    },
    {
      id: "enterprise",
      name: "ENTERPRISE",
      isEnterprise: true,
      priceLabel: "High Volume?",
      subLabel: "Custom Volume Pricing",
      checkoutUrl: "mailto:sales@swiftwave.ai?subject=CallPilot%20Enterprise%20Inquiry"
    }
  ]
};

const Pricing = () => {
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  return (
    <section className="bg-white py-10 lg:py-20 border-b border-gray-100" style={{ fontFamily: `${manrope.style.fontFamily}, ${inter.style.fontFamily}, sans-serif` }}>
      {/* Custom Styles for buttons */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .btn-white-section {
          background-color: #05070A !important;
          color: #FFFFFF !important;
          font-weight: 700 !important;
          border-radius: 8px !important;
          height: 44px !important;
          padding-left: 20px !important;
          padding-right: 20px !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          transition: transform 200ms ease, box-shadow 200ms ease, background-color 200ms ease !important;
          border: 1px solid transparent !important;
          outline: none;
        }
        @media (min-width: 1024px) {
          .btn-white-section {
            height: 40px !important;
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
        }
        .btn-white-section:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 6px 20px rgba(6, 103, 249, 0.22) !important;
        }
        .btn-white-section:active {
          transform: translateY(0) scale(0.98) !important;
          box-shadow: 0 2px 8px rgba(6, 103, 249, 0.1) !important;
        }
        .btn-white-section:focus-visible {
          outline: 2px solid #0667F9 !important;
          outline-offset: 2px !important;
        }
        `
      }} />

      <div className="container mx-auto px-6 sm:px-8 max-w-7xl">
        {/* Header Block */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-[#05070A] tracking-tight mt-2 mb-3">
            Choose Your Screening Plan
          </h2>
          <div className="text-xl sm:text-2xl font-extrabold text-[#36454F] mb-3">
            No Answer. No Charge.
          </div>
        </div>

        {/* Four Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch max-w-7xl mx-auto mb-12">
          {CALLPILOT_PRICING_CONFIG.plans.map((plan) => {
            const isGrowth = plan.id === "growth";
            const hideGrowthHighlight = hoveredPlan !== null && hoveredPlan !== plan.id;
            const isHighlighted = isGrowth ? !hideGrowthHighlight : hoveredPlan === plan.id;
            return (
              <div
                key={plan.id}
                onMouseEnter={() => setHoveredPlan(plan.id)}
                onMouseLeave={() => setHoveredPlan(null)}
                className={`bg-white rounded-xl p-8 flex flex-col justify-between relative transition-all duration-300 ${
                  isHighlighted
                    ? "border-2 border-[#0667F9] shadow-xl shadow-blue-500/10 ring-4 ring-[#0667F9]/15 scale-[1.02] z-10"
                    : "border border-gray-200/80 shadow-sm hover:border-[#0667F9]/30"
                }`}
              >
                {isGrowth && isHighlighted && (
                  <div className="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-[#0667F9] text-white text-[10px] font-black uppercase tracking-wider px-4 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}
                
                <div className="flex-grow flex flex-col">
                  <h3 className={`text-xs font-extrabold tracking-widest uppercase mb-2 ${isGrowth ? 'mt-2' : ''} text-[#36454F]`}>
                    {plan.name}
                  </h3>
                  
                  {plan.isEnterprise ? (
                    <div className="mb-6 flex-grow flex flex-col justify-center">
                      <div className="text-3xl sm:text-4xl font-black text-[#05070A] mb-2 leading-none">
                        {plan.priceLabel}
                      </div>
                      <div className="text-sm font-semibold text-[#36454F]">
                        {plan.subLabel}
                      </div>
                    </div>
                  ) : (
                    <div className="mb-6">
                      <div className="text-4xl sm:text-5xl font-black text-[#05070A] mb-6">
                        ${(plan.price ?? 0).toLocaleString()} <span className="text-sm font-normal text-[#36454F]">/ month</span>
                      </div>
                      <div className="border-t border-gray-100 pt-6 space-y-4">
                        <div className="font-semibold text-[#36454F] text-sm sm:text-base">
                          {(plan.credits ?? 0).toLocaleString()} Applicant Screenings
                        </div>
                        <div className="text-[#36454F] text-sm font-medium">
                          ${(plan.perScreeningRate ?? 0).toFixed(2)} per screening
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-8">
                  <Link href={plan.isEnterprise ? plan.checkoutUrl : "https://callpilot.pro/get-started"} className="w-full">
                    <Button className="btn-white-section w-full">
                      {plan.isEnterprise ? "Contact Sales" : "Start Screening"}
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* INCLUDED AUTOMATION */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-[#36454F]">
            All plans include WhatsApp, SMS and email automation
          </p>
        </div>

        {/* PLAN INFORMATION */}
        <div className="border-t border-gray-200/60 pt-8 pb-10 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-y-4 gap-x-8 text-sm text-[#36454F] font-semibold text-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="w-full md:w-auto px-4">
              Prepaid monthly screening credits
            </div>
            <div className="w-full md:w-auto px-4 pt-4 md:pt-0">
              Credits used on completed calls only
            </div>
            <div className="w-full md:w-auto px-4 pt-4 md:pt-0">
              Optional automatic credit top-up
            </div>
            <div className="w-full md:w-auto px-4 pt-4 md:pt-0">
              Upgrade your plan at any time
            </div>
          </div>
        </div>

        {/* CALLING AND AUTOMATION PANEL */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl border border-gray-200/80 shadow-sm p-6 sm:p-8">
          <div className="flex flex-col gap-4 text-sm text-[#36454F] font-medium leading-relaxed">
            <div className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0667F9] shrink-0 mt-2" />
              <span>
                Optional AI phone number: $10 per month, or connect an existing compatible number
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0667F9] shrink-0 mt-2" />
              <span>
                SMS availability is based on the country associated with the phone number
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0667F9] shrink-0 mt-2" />
              <span>
                Email automation included as a fallback
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
