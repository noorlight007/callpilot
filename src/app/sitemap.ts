import type { MetadataRoute } from "next";

const BASE = "https://callpilot.pro";

// Update the date when a page's content actually changes
const pages: { path: string; updated: string; priority: number; freq: "daily" | "weekly" | "monthly" }[] = [
  { path: "", updated: "2026-09-29", priority: 1.0, freq: "weekly" },
  { path: "/pricing", updated: "2026-09-29", priority: 0.9, freq: "weekly" },
  { path: "/features", updated: "2026-09-29", priority: 0.9, freq: "monthly" },
  { path: "/use-cases", updated: "2026-09-29", priority: 0.8, freq: "monthly" },
  { path: "/integrations", updated: "2026-09-27", priority: 0.9, freq: "weekly" },
  { path: "/integrations/jobadder", updated: "2026-09-27", priority: 0.85, freq: "monthly" },
  { path: "/integrations/recruit-crm", updated: "2026-09-27", priority: 0.85, freq: "monthly" },
  { path: "/integrations/ashby", updated: "2026-09-27", priority: 0.85, freq: "monthly" },
  { path: "/integrations/greenhouse", updated: "2026-09-27", priority: 0.7, freq: "monthly" },
  { path: "/integrations/icims", updated: "2026-09-27", priority: 0.7, freq: "monthly" },
  { path: "/free-trial", updated: "2026-09-27", priority: 0.8, freq: "monthly" },
  { path: "/get-started", updated: "2026-09-29", priority: 0.7, freq: "monthly" },
  { path: "/book-a-demo", updated: "2026-09-29", priority: 0.7, freq: "monthly" },
  { path: "/news", updated: "2026-09-24", priority: 0.7, freq: "weekly" },
  { path: "/blog", updated: "2026-09-28", priority: 0.7, freq: "weekly" },
  { path: "/about-us", updated: "2026-09-27", priority: 0.5, freq: "monthly" },
  { path: "/setup-help-guide", updated: "2026-09-27", priority: 0.5, freq: "monthly" },
  { path: "/privacy-policy", updated: "2026-09-27", priority: 0.3, freq: "monthly" },
  { path: "/terms-conditions", updated: "2026-09-27", priority: 0.3, freq: "monthly" },
  { path: "/cookie-policy", updated: "2026-09-27", priority: 0.3, freq: "monthly" },
  { path: "/policy-compliance", updated: "2026-09-27", priority: 0.3, freq: "monthly" },
];

// Posts: publish date. Anything dated in the future is left out until that day.
const posts: { path: string; date: string }[] = [
  { path: "/news/callpilot-ashby-integration", date: "2026-09-14" },
  { path: "/news/callpilot-recruit-crm-integration", date: "2026-09-18" },
  { path: "/news/callpilot-jobadder-integration", date: "2026-09-21" },
  { path: "/news/business-voip-whatsapp-sms-ats-integration", date: "2026-09-22" },
  { path: "/news/callpilot-launches-ai-call-agent-business-voip-lines-automation", date: "2026-09-24" },
  { path: "/blog/how-fast-can-ai-qualify-an-applicant", date: "2026-09-16" },
  { path: "/blog/speed-up-recruitment-without-hiring-more-recruiters", date: "2026-09-23" },
  { path: "/blog/ai-screening-call-vs-ai-video-interview", date: "2026-09-28" },
  { path: "/blog/why-ai-voice-calls-screen-applicants-better", date: "2026-10-02" },
  { path: "/blog/24-7-applicant-screening", date: "2026-10-05" },
  { path: "/blog/high-volume-applicant-screening", date: "2026-10-07" },
  { path: "/blog/what-happens-after-the-ai-screening-call", date: "2026-10-09" },
];

export const revalidate = 3600; // rebuild hourly so scheduled posts appear on their date

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    ...pages.map((p) => ({
      url: `${BASE}${p.path}`,
      lastModified: new Date(p.updated),
      changeFrequency: p.freq,
      priority: p.priority,
    })),
    ...posts
      .filter((p) => new Date(p.date) <= now)
      .map((p) => ({
        url: `${BASE}${p.path}`,
        lastModified: new Date(p.date),
        changeFrequency: "monthly" as const,
        priority: 0.6,
      })),
  ];
}