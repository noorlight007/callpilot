// Remembers UTM parameters for the browser session so a sign-up that happens a few
// pages after a LinkedIn click is still attributed to LinkedIn.
const KEY = "cp_utm";
const FIELDS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;

export type Utm = Partial<Record<(typeof FIELDS)[number] | "landing_page" | "referrer", string>>;

export function captureUtm(): void {
  try {
    const params = new URLSearchParams(window.location.search);
    if (!FIELDS.some((f) => params.get(f))) return;
    const utm: Utm = { landing_page: window.location.pathname, referrer: document.referrer || "" };
    FIELDS.forEach((f) => {
      const v = params.get(f);
      if (v) utm[f] = v.slice(0, 120);
    });
    sessionStorage.setItem(KEY, JSON.stringify(utm));
  } catch {}
}

export function getUtm(): Utm {
  try {
    captureUtm();
    return JSON.parse(sessionStorage.getItem(KEY) || "{}");
  } catch {
    return {};
  }
}
