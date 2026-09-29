import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { newsArticles } from "@/data/articles";
import { authors } from "@/data/authors";
import { Calendar, Clock, ArrowRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "News & Releases",
  description: "Official product announcements, ATS integrations, and release notes from CallPilot. Explore live connections with Ashby, Recruit CRM, JobAdder, and more.",
  alternates: {
    canonical: "https://callpilot.pro/news",
  },
  openGraph: {
    title: "News & Releases | CallPilot",
    description: "Official product announcements, ATS integrations, and release notes from CallPilot.",
    url: "https://callpilot.pro/news",
    siteName: "CallPilot",
    type: "website",
    images: [
      {
        url: "https://callpilot.pro/images/og-callpilot.png",
        width: 1200,
        height: 630,
        alt: "CallPilot News",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "News & Releases | CallPilot",
    description: "Official product announcements, ATS integrations, and release notes from CallPilot.",
    images: ["https://callpilot.pro/images/og-callpilot.png"],
  },
};

export const revalidate = 3600;

export default function NewsIndexPage() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "CallPilot News & Announcements",
    description: "Official product announcements and ATS integration releases.",
    url: "https://callpilot.pro/news",
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <Header />

      <main className="pt-28 md:pt-36 pb-24">
        {/* Header Hero */}
        <section className="bg-black text-white py-16 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase bg-white/10 text-emerald-400 border border-emerald-500/30 px-4 py-1.5 rounded-full mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              COMPANY &amp; PRODUCT ANNOUNCEMENTS
            </span>
            <h1
              className="text-white !text-white text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
              style={{ color: "#ffffff" }}
            >
              CallPilot News &amp; Releases
            </h1>
            <p className="text-base sm:text-lg text-white/75 max-w-2xl mx-auto">
              The latest platform updates, native ATS integration launches, and recruitment automation milestones.
            </p>
          </div>
        </section>

        {/* News Feed Grid */}
        <section className="max-w-6xl mx-auto px-6 pt-12">
          <Breadcrumbs items={[{ label: "News" }]} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
            {newsArticles.map((article) => {
              const author = authors[article.authorSlug] || authors["steven-peddie"];
              return (
                <article
                  key={article.slug}
                  className="border border-gray-200 rounded-2xl overflow-hidden bg-white hover:shadow-xl hover:border-gray-400 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-48 w-full bg-gray-100 overflow-hidden">
                      <img
                        src={article.featuredImage}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <span className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          <time dateTime={article.isoDate}>{article.publishDate}</time>
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          {article.readingTime}
                        </span>
                      </div>

                      <h2 className="text-xl font-extrabold text-gray-900 mb-3 line-clamp-2 hover:text-emerald-600 transition-colors">
                        <Link href={`/news/${article.slug}`}>{article.h1}</Link>
                      </h2>

                      <p className="text-sm text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-gray-100 mt-auto flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-medium text-gray-700">
                      <img
                        src={author.avatar}
                        alt={author.name}
                        className="w-6 h-6 rounded-full object-cover"
                      />
                      <span>{author.name}</span>
                    </div>

                    <Link
                      href={`/news/${article.slug}`}
                      className="text-xs font-bold text-black hover:text-emerald-600 inline-flex items-center gap-1"
                    >
                      Read story <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Hub CTA */}
        <section className="max-w-4xl mx-auto px-6 mt-20">
          <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Explore Our ATS Integration Hub
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mb-8 max-w-xl mx-auto">
              Looking for dedicated product workflows? Explore live integrations and claim 100 free screening credits.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/integrations"
                className="bg-black text-white px-7 py-3 rounded-full font-bold text-sm hover:bg-gray-800 transition-colors"
              >
                Browse All Integrations
              </Link>
              <Link
                href="/free-trial"
                className="border border-gray-300 text-gray-900 px-7 py-3 rounded-full font-bold text-sm hover:border-black transition-colors"
              >
                Claim 100 Free Credits
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
