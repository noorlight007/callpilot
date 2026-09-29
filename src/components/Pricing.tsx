"use client";

import { useState } from "react";
import Link from "next/link";
import { VOIP_PLANS, VOIP_NOTE, PLANS, PLAN_NOTES } from "@/components/home/content";

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

const Pricing = ({ asH1 = true }: PricingProps) => {
  const [activeTab, setActiveTab] = useState<"voip" | "screening">("voip");

  const scrollToSection = (tab: "voip" | "screening") => {
    setActiveTab(tab);
    const element = document.getElementById(tab);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#f8f7f4] text-[#0a0a0a] py-10 sm:py-14 lg:py-20 border-b border-[#e6e4de] font-sans selection:bg-[#0a0a0a] selection:text-white">
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
        `
      }} />

      <div className="callpilot-pricing-wrap">
        {/* Header with Switcher / Tab Button */}
        <div className="flex items-center justify-center sm:justify-end pt-4 sm:pt-0 mb-8">
          <div className="inline-flex border border-[#0a0a0a] rounded-full overflow-hidden bg-white shadow-xs p-1">
            <button
              type="button"
              onClick={() => scrollToSection("voip")}
              className={`px-6 py-2.5 text-[14px] font-bold rounded-full transition-colors duration-150 cursor-pointer select-none ${
                activeTab === "voip"
                  ? "bg-[#0a0a0a] text-white"
                  : "bg-white text-[#0a0a0a] hover:bg-black/5"
              }`}
            >
              VoIP lines
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("screening")}
              className={`px-6 py-2.5 text-[14px] font-bold rounded-full transition-colors duration-150 cursor-pointer select-none ${
                activeTab === "screening"
                  ? "bg-[#0a0a0a] text-white"
                  : "bg-white text-[#0a0a0a] hover:bg-black/5"
              }`}
            >
              AI screening
            </button>
          </div>
        </div>

        {/* Hero Headline */}
        <div className="flex flex-col items-center gap-3 text-center mb-16">
          {asH1 ? (
            <h1 className="m-0 text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0a0a0a]">
              Simple pricing. Pay for what you use.
            </h1>
          ) : (
            <h2 className="m-0 text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0a0a0a]">
              Simple pricing. Pay for what you use.
            </h2>
          )}
          <div className="w-14 h-1 bg-[#0a0a0a] rounded-full mx-auto my-1" />
          <p className="m-0 text-base sm:text-[18px] text-[#6b6b68] font-medium max-w-xl">
            Choose between business VoIP phone lines or 24/7 AI applicant screening calls.
          </p>
        </div>

        {/* Section 1: id="voip" */}
        <section id="voip" className="mb-20 scroll-mt-28">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-[#005bff] mb-2">01 · Business Phone Lines</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a0a0a] mb-3">CallPilot VoIP</h2>
            <p className="text-[#6b6b68] text-base sm:text-lg max-w-2xl mx-auto">
              Business phone lines with calls, WhatsApp, SMS and email. Prices per line, per month.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch mb-8">
            {VOIP_PLANS.map((plan) => {
              const isPopular = !!plan.recommended;

              return (
                <article key={plan.name} className={`plan-card h-full ${isPopular ? "popular" : ""}`}>
                  {isPopular && <div className="ribbon-recommended">BEST VALUE</div>}

                  <div className="text-center pb-[18px] border-b border-[#ece9e2]">
                    <span className="text-[20px] font-bold text-[#0a0a0a]">{plan.name}</span>
                    <p className="text-[13px] text-[#8a8883] font-medium mt-1 mb-0">{plan.headline}</p>
                  </div>

                  <div className="self-center mt-[22px] px-6 py-3 bg-[#f2f1ec] rounded-[16px] flex items-baseline justify-center gap-1">
                    <span className="text-[44px] font-extrabold text-[#0a0a0a] tracking-tight leading-none">
                      {plan.price}
                    </span>
                    <span className="text-[14px] text-[#8a8883] font-medium">
                      /month
                    </span>
                  </div>

                  <p className="text-[11.5px] font-bold tracking-[0.06em] text-[#8a8883] pt-[20px] pb-[10px] m-0 uppercase">
                    INCLUDES
                  </p>

                  <ul className="flex flex-col gap-3 list-none m-0 p-0 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-[14px] text-[#2a2a28] leading-[1.4]">
                        <CheckIcon />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex-grow" />

                  <Link href={plan.href} className="w-full">
                    <button type="button" className="plan-cta-btn">
                      Get CallPilot VoIP
                    </button>
                  </Link>
                </article>
              );
            })}
          </div>

          <p className="text-center text-sm text-[#8a8883] max-w-2xl mx-auto">
            {VOIP_NOTE}
          </p>
        </section>

        {/* Section 2: id="screening" */}
        <section id="screening" className="scroll-mt-28">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-[#005bff] mb-2">02 · Recruitment Automation</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a0a0a] mb-3">AI Applicant Screening Call + Automation</h2>
            <p className="text-[#6b6b68] text-base sm:text-lg max-w-2xl mx-auto">
              No call, no charge. New clients get their first 100 AI screening calls free.
            </p>
            <p className="text-xs sm:text-sm text-[#8a8883] mt-2">
              WhatsApp and SMS document requests, automatic ATS sync and recruiter alerts included on every plan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch mb-10">
            {PLANS.map((plan) => {
              const isPopular = !!plan.recommended;
              const isEnterprise = plan.name === "Enterprise";

              return (
                <article key={plan.name} className={`plan-card h-full ${isPopular ? "popular" : ""}`}>
                  {isPopular && <div className="ribbon-recommended">RECOMMENDED</div>}

                  <div className="text-center pb-[18px] border-b border-[#ece9e2]">
                    <span className="text-[20px] font-bold text-[#0a0a0a]">{plan.name}</span>
                  </div>

                  <div className="self-center mt-[22px] px-6 py-3 bg-[#f2f1ec] rounded-[16px] flex items-baseline justify-center gap-1">
                    {isEnterprise ? (
                      <span className="text-[40px] font-extrabold text-[#0a0a0a] tracking-tight leading-none">
                        Custom
                      </span>
                    ) : (
                      <>
                        <span className="text-[44px] font-extrabold text-[#0a0a0a] tracking-tight leading-none">
                          {plan.price}
                        </span>
                        <span className="text-[14px] text-[#8a8883] font-medium">
                          {plan.period}
                        </span>
                      </>
                    )}
                  </div>

                  <p className="text-center text-[14px] font-semibold text-[#6b6b68] pt-3 m-0">
                    {plan.includes}
                  </p>

                  <p className="text-center text-[13px] text-[#8a8883] pt-1.5 m-0">
                    {plan.topUp}
                  </p>

                  <p className="text-[11px] font-bold tracking-[0.06em] text-[#8a8883] pt-6 pb-2 m-0 uppercase">
                    BEST FOR
                  </p>

                  <p className="text-[13.5px] text-[#2a2a28] leading-[1.5] m-0">
                    {plan.bestFor}
                  </p>

                  <div className="flex-grow min-h-6" />

                  <Link href={plan.href} className="w-full">
                    <button type="button" className="plan-cta-btn">
                      {plan.cta}
                    </button>
                  </Link>
                </article>
              );
            })}
          </div>

          <ul className="flex items-center justify-center gap-x-4 gap-y-2 text-[13px] text-[#8a8883] font-medium flex-wrap text-center m-0 list-none p-0">
            {PLAN_NOTES.map((note, idx) => (
              <li key={idx} className="flex items-center gap-1.5">
                <CheckIcon />
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Pricing;
