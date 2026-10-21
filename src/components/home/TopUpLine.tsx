"use client";

import { money } from "@/lib/pricing";
import { useTopUpRates } from "@/lib/useTopUpRates";

// Top-up line for a plan card: live rate from the plans API. Plans without an API rate
// (Enterprise) show `fallback`; screening plans render nothing until the rate loads.
export default function TopUpLine({ plan, fallback, className }: { plan: string; fallback: string; className?: string }) {
  const rate = useTopUpRates()[plan.toLowerCase()];
  return <p className={className}>{rate !== undefined ? `Top-up: ${money(rate)} per screening` : fallback}</p>;
}
