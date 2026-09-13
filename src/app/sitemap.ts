import type { MetadataRoute } from "next";
import { allIntegrations } from "@/data/integrations";
import { newsArticles, blogArticles } from "@/data/articles";
import { authors } from "@/data/authors";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://callpilot.pro";

  const staticPages = [
    { path: "", priority: 1.0, changeFrequency: "daily" as const },
    { path: "/free-trial", priority: 0.95, changeFrequency: "weekly" as const },
    { path: "/get-started", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/pricing", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/features", priority: 0.85, changeFrequency: "weekly" as const },
    { path: "/use-cases", priority: 0.85, changeFrequency: "weekly" as const },
    { path: "/integrations", priority: 0.95, changeFrequency: "daily" as const },
    { path: "/news", priority: 0.9, changeFrequency: "daily" as const },
    { path: "/blog", priority: 0.9, changeFrequency: "daily" as const },
    { path: "/about-us", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/setup-help-guide", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/privacy-policy", priority: 0.5, changeFrequency: "monthly" as const },
    { path: "/terms-conditions", priority: 0.5, changeFrequency: "monthly" as const },
    { path: "/cookie-policy", priority: 0.5, changeFrequency: "monthly" as const },
    { path: "/policy-compliance", priority: 0.5, changeFrequency: "monthly" as const },
  ];

  const integrationEntries = allIntegrations.map((item) => ({
    url: `${baseUrl}/integrations/${item.slug}/`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.95,
  }));

  const newsEntries = newsArticles.map((article) => ({
    url: `${baseUrl}/news/${article.slug}/`,
    lastModified: new Date(article.modifiedDate || article.isoDate),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const blogEntries = blogArticles.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}/`,
    lastModified: new Date(article.modifiedDate || article.isoDate),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const authorEntries = Object.keys(authors).map((slug) => ({
    url: `${baseUrl}/authors/${slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const staticEntries = staticPages.map((page) => ({
    url: `${baseUrl}${page.path}${page.path ? "/" : ""}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  return [
    ...staticEntries,
    ...integrationEntries,
    ...newsEntries,
    ...blogEntries,
    ...authorEntries,
  ];
}