// app/robots.ts: served at https://callpilot.pro/robots.txt
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://callpilot.pro/sitemap.xml",
    host: "https://callpilot.pro",
  };
}
