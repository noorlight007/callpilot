// app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://callpilot.pro";

  const staticPages = [
    "",
    "/get-started",
    "/try-ai-call",
    "/pricing",
    "/features",
    "/use-cases",
    "/about-us",
    "/integrations",
    "/news",
    "/privacy-policy",
    "/terms-conditions",
    "/cookie-policy",
    "/policy-compliance"
  ];

  return staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));
}