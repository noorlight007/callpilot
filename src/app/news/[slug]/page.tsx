import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { newsArticles, getArticleBySlug } from "@/data/articles";
import { authors } from "@/data/authors";
import { Calendar, Clock, ArrowRight, Share2, Sparkles } from "lucide-react";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return newsArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article || article.type !== "news") return {};

  const canonicalUrl = `https://callpilot.pro/news/${article.slug}/`;

  return {
    title: article.seoTitle,
    description: article.metaDescription,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: article.seoTitle,
      description: article.metaDescription,
      url: canonicalUrl,
      siteName: "CallPilot",
      type: "article",
      publishedTime: article.isoDate,
      modifiedTime: article.modifiedDate || article.isoDate,
      authors: [authors[article.authorSlug]?.name || "Marcus Vance"],
      images: [
        {
          url: article.featuredImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.seoTitle,
      description: article.metaDescription,
      images: [article.featuredImage],
    },
  };
}

export default async function NewsSlugPage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article || article.type !== "news") {
    notFound();
  }

  const author = authors[article.authorSlug] || authors["marcus-vance"];

  const newsArticleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.seoTitle,
    description: article.metaDescription,
    image: [article.featuredImage],
    datePublished: article.isoDate,
    dateModified: article.modifiedDate || article.isoDate,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://callpilot.pro/news/${article.slug}/`,
    },
    author: {
      "@type": "Person",
      name: author.name,
      jobTitle: author.role,
      url: `https://callpilot.pro/authors/${author.slug}/`,
      sameAs: author.linkedin,
    },
    publisher: {
      "@type": "Organization",
      name: "CallPilot",
      url: "https://callpilot.pro",
      logo: {
        "@type": "ImageObject",
        url: "https://callpilot.pro/adjusted_callPilot_logo.png",
      },
    },
  };

  const breadcrumbItems = [
    { label: "News", href: "/news" },
    { label: article.h1 },
  ];

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(newsArticleSchema) }}
      />
      <Header />

      <main className="pt-28 md:pt-36 pb-24">
        <article className="max-w-4xl mx-auto px-6">
          <Breadcrumbs items={breadcrumbItems} />

          {/* Article Header */}
          <header className="mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 rounded-full mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              {article.category}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.15] mb-6">
              {article.h1}
            </h1>

            {/* Author and Date metadata bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-gray-200 text-sm text-gray-600">
              <div className="flex items-center gap-3">
                <Link href={`/authors/${author.slug}/`} className="group flex items-center gap-3">
                  <img
                    src={author.avatar}
                    alt={author.name}
                    className="w-10 h-10 rounded-full object-cover border border-gray-200 group-hover:border-black transition-colors"
                  />
                  <div>
                    <div className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                      {author.name}
                    </div>
                    <div className="text-xs text-gray-500">{author.role}</div>
                  </div>
                </Link>
              </div>

              <div className="flex items-center gap-4 text-xs sm:text-sm">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <time dateTime={article.isoDate}>{article.publishDate}</time>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span>{article.readingTime}</span>
                </div>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-12 rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <img
              src={article.featuredImage}
              alt={article.title}
              className="w-full h-[360px] sm:h-[440px] object-cover"
            />
          </div>

          {/* Body Content */}
          <div
            className="prose prose-lg max-w-none text-gray-800 leading-relaxed space-y-6"
            dangerouslySetInnerHTML={{ __html: article.contentHtml }}
          />

          {/* Call to Action Banner */}
          <div className="my-16 p-8 bg-black text-white rounded-3xl text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3" style={{ color: "#ffffff" }}>
              Experience AI Screening for Your Team
            </h2>
            <p className="text-white/75 text-sm sm:text-base mb-6 max-w-xl mx-auto">
              Screen your live vacancy with 100 free applicant credits. No card required, connects in minutes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/free-trial/"
                className="bg-white text-black font-bold text-sm px-8 py-3.5 rounded-full hover:bg-gray-200 transition-colors"
              >
                Claim 100 Free Credits
              </Link>
              <Link
                href="/integrations/"
                className="border border-white/40 text-white font-bold text-sm px-8 py-3.5 rounded-full hover:border-white transition-colors"
              >
                Explore All Integrations
              </Link>
            </div>
          </div>

          {/* Author Card Footer */}
          <div className="p-6 sm:p-8 bg-gray-50 border border-gray-200 rounded-2xl flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <img
              src={author.avatar}
              alt={author.name}
              className="w-16 h-16 rounded-full object-cover shrink-0 border border-gray-200"
            />
            <div className="text-center sm:text-left">
              <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Written by</div>
              <Link href={`/authors/${author.slug}/`} className="text-lg font-bold text-gray-900 hover:text-emerald-600 transition-colors">
                {author.name}
              </Link>
              <div className="text-xs text-gray-600 mb-2">{author.role}</div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">{author.bio}</p>
              <Link
                href={`/authors/${author.slug}/`}
                className="text-xs font-semibold text-black underline hover:text-emerald-600"
              >
                View full author profile &amp; articles →
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
