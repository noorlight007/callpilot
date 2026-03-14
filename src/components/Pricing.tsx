"use client";

import { useState } from "react";
import { Check, Building, Building2, Rocket, Star } from "lucide-react";
import { useRouter } from "next/navigation";

// Static pricing tiers based on user request
const pricingTiers = [
  {
    name: "Starter",
    icon: Building,
    price: "$400",
    unit: " / month + VAT",
    description: "Ideal for organisations beginning to automate phone conversations using AI. Designed for small businesses starting AI voice calls.",
    minimumMinutes: "350 AI Voice Minutes",
    features: [
      "Paid monthly in advance",
      "Dedicated onboarding & customer support",
      "$400 one-off setup fee",
      "Setup fee returned as free minutes after 12 months",
      "Additional minutes: $1.15 per minute",
    ],
    cta: "Get now",
    popular: false,
  },
  {
    name: "Growing",
    icon: Building2,
    price: "$1,000",
    unit: " / month + VAT",
    description: "Designed for businesses scaling AI voice calls across teams.",
    minimumMinutes: "900 AI Voice Minutes",
    features: [
      "Paid monthly in advance",
      "Dedicated onboarding & customer support",
      "$400 one-off setup fee",
      "Setup fee returned as free minutes after 12 months",
      "Additional minutes: $1.15 per minute",
    ],
    cta: "Get now",
    popular: false,
  },
  {
    name: "Pro",
    icon: Star,
    price: "$1,500",
    unit: " / month + VAT",
    description: "Built for organisations running high-volume automated AI calls.",
    minimumMinutes: "1,400 AI Voice Minutes",
    features: [
      "Paid monthly in advance",
      "Priority onboarding & support",
      "$400 one-off setup fee",
      "Setup fee returned as free minutes after 12 months",
      "Additional minutes: $1.15 per minute",
    ],
    cta: "Get now",
    popular: true,
  },
  {
    name: "Enterprise",
    icon: Rocket,
    price: "Custom Pricing",
    unit: "",
    description: "Tailored AI voice solutions for large organisations & advanced automation to Tailored AI calling & automation.",
    minimumMinutes: "",
    features: [
      "Paid monthly in advance",
      "Custom AI minute packages",
      "Priority technical support",
      "Volume discounts available",
      "International calling packages",
      "Custom API integrations",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const Pricing = () => {
  const [hoveredTier, setHoveredTier] = useState<string | null>(null);
  const router = useRouter();

  return (
    <section id="pricing" className="py-16 lg:py-24 bg-alt">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full accent-tint-bg border border-accent/20 mb-4">
            <span className="text-sm font-medium accent-text">Pricing</span>
          </div>
          <h2 className="text-2xl font-semibold text-headline mb-4">
            AI Call Plans
          </h2>
          <p className="text-lg text-body">
            Monthly packages with included minutes. No contract — cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {pricingTiers.map((tier) => {
            // If a non-popular card is hovered, disable the popular highlight temporarily.
            const hidePopularHighlight =
              hoveredTier !== null && hoveredTier !== tier.name;

            const isHighlighted = tier.popular ? !hidePopularHighlight : hoveredTier === tier.name;

            return (
              <div
                key={tier.name}
                onMouseEnter={() => setHoveredTier(tier.name)}
                onMouseLeave={() => setHoveredTier(null)}
                className={[
                  "relative bg-card rounded-2xl p-6 lg:p-8 border card-hover-lg flex flex-col transition-all duration-200",
                  // default border
                  "border-border-card",
                  // highlighted state (popular by default, OR any hovered card)
                  isHighlighted ? "shadow-lg ring-2 ring-accent/20 border-accent" : "shadow-sm",
                ].join(" ")}
              >
                {/* Popular badge (only visible while popular highlight is active) */}
                {tier.popular && isHighlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-accent text-accent-foreground">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Icon & Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={[
                      "w-10 h-10 rounded-lg flex items-center justify-center transition-colors",
                      isHighlighted ? "bg-accent/10" : "bg-secondary",
                    ].join(" ")}
                  >
                    <tier.icon
                      className={[
                        "w-5 h-5 transition-colors",
                        isHighlighted ? "accent-text" : "text-muted-text",
                      ].join(" ")}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-headline">{tier.name}</h3>
                </div>

                {/* Price */}
                <div className="mb-2">
                  <span className="text-2xl font-semibold text-headline">{tier.price}</span>
                  <span className="text-muted-text">{tier.unit}</span>
                </div>

                {/* Included minutes / minimum */}
                <p className="text-sm font-medium accent-text mb-4">{tier.minimumMinutes}</p>

                {/* Description */}
                <p className="text-body mb-6 text-sm">{tier.description}</p>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {tier.features.map((feature: string) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="w-5 h-5 accent-text flex-shrink-0 mt-0.5" />
                      <span className="text-body text-sm font-light">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div className="mt-auto">
                  <button
                    onClick={() => router.push('/get-started')}
                    className={[
                      "w-full py-3 px-4 rounded-xl font-semibold transition-all duration-200",
                      isHighlighted
                        ? "bg-accent text-white shadow-md hover:shadow-lg scale-[1.02]"
                        : "bg-secondary text-headline hover:bg-secondary/80"
                    ].join(" ")}
                  >
                    {tier.cta}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <p className="text-[13px] mt-10 text-body mx-auto text-center">* Purchasing Phone numbers price is not included in here</p>
      </div>
    </section>
  );
};

export default Pricing;
