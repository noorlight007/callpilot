import { NextResponse } from "next/server";

// Cache this route handler for 30 minutes (1800 seconds)
export const revalidate = 1800;

export async function GET() {
  try {
    const res = await fetch("https://app.trysoro.com/api/embed/075a27da-f806-4ab9-8f6b-3bfeda6d677e", {
      next: { revalidate: 1800 }
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch TrySoro embed script: ${res.status}`);
    }

    const text = await res.text();
    // Regular expression to find SORO_ARTICLES assignment
    const match = text.match(/var\s+SORO_ARTICLES\s*=\s*(\[[\s\S]*?\]);/);
    if (!match) {
      throw new Error("Could not parse SORO_ARTICLES from embed script");
    }

    let articles = JSON.parse(match[1]);

    // Format and enrich articles
    articles = articles.map((article: any) => {
      // 1. Ensure excerpt is within 150-200 characters if possible.
      let excerpt = article.excerpt || "";
      if (excerpt.length > 200) {
        excerpt = excerpt.substring(0, 197);
        const lastSpace = excerpt.lastIndexOf(" ");
        excerpt = (lastSpace > 120 ? excerpt.substring(0, lastSpace) : excerpt) + "...";
      } else if (excerpt.length < 150 && excerpt.length > 0) {
        // Keep as-is or pad if needed. Default is 152 characters.
      }

      // 2. Assign dynamic category based on content/title keywords
      let category = "Insights";
      const titleLower = (article.title || "").toLowerCase();
      const excerptLower = (article.excerpt || "").toLowerCase();
      const combined = `${titleLower} ${excerptLower}`;

      if (combined.includes("screen") || combined.includes("recruitment") || combined.includes("applicant")) {
        category = "AI Screening";
      } else if (combined.includes("whatsapp") || combined.includes("sms") || combined.includes("email") || combined.includes("communication") || combined.includes("automation")) {
        category = "Automation";
      } else if (combined.includes("ats") || combined.includes("crm") || combined.includes("integration") || combined.includes("connect")) {
        category = "Integrations";
      } else if (combined.includes("voice") || combined.includes("call") || combined.includes("phone")) {
        category = "AI Voice Calling";
      } else if (combined.includes("compliance") || combined.includes("gdpr") || combined.includes("data protection")) {
        category = "Compliance";
      }

      return {
        ...article,
        excerpt,
        category
      };
    });

    // Sort articles by date descending (newest first)
    articles.sort((a: any, b: any) => {
      const dateA = new Date(a.isoDate || a.date).getTime();
      const dateB = new Date(b.isoDate || b.date).getTime();
      return dateB - dateA;
    });

    return NextResponse.json({ articles });
  } catch (error: any) {
    console.error("Error in news feed API:", error);
    return NextResponse.json({ error: error.message || "Failed to load news feed" }, { status: 500 });
  }
}
