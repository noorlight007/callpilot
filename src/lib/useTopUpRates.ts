"use client";

import { useEffect, useState } from "react";

const PLANS_URL = "https://api.callpilot.pro/api/v1/payment/subscriptions/plans";

type ApiPlan = { name: string; type: string; topup_rate: string };

// Live top-up rate per screening plan (keyed by lower-case plan name), from the
// billing API. Empty until loaded; callers fall back to the static pricing.ts value.
export function useTopUpRates(): Record<string, number> {
  const [rates, setRates] = useState<Record<string, number>>({});

  useEffect(() => {
    const ctrl = new AbortController();
    fetch(PLANS_URL, { signal: ctrl.signal })
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((data: { results?: ApiPlan[] }) => {
        const next: Record<string, number> = {};
        for (const p of data.results ?? []) {
          const rate = parseFloat(p.topup_rate);
          if (p.type === "SCREENING_CALL" && rate > 0) next[p.name.toLowerCase()] = rate;
        }
        setRates(next);
      })
      .catch(() => {});
    return () => ctrl.abort();
  }, []);

  return rates;
}
