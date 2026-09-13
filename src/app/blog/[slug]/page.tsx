import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { blogArticles, getArticleBySlug, allArticles } from "@/data/articles";
import { authors } from "@/data/authors";
import { Calendar, Clock, ArrowRight, BookOpen, HelpCircle } from "lucide-react";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article || article.type !== "blog") return {};

  const canonicalUrl = `https://callpilot.pro/blog/${article.slug}/`;

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

export default async function BlogSlugPage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article || article.type !== "blog") {
    notFound();
  }

  const author = authors[article.authorSlug] || authors["marcus-vance"];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.seoTitle,
    description: article.metaDescription,
    image: [article.featuredImage],
    datePublished: article.isoDate,
    dateModified: article.modifiedDate || article.isoDate,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://callpilot.pro/blog/${article.slug}/`,
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

  const faqSchema =
    article.faqs && article.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: article.faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: f.answer,
            },
          })),
        }
      : null;

  const breadcrumbItems = [
    { label: "Blog", href: "/blog" },
    { label: article.h1 },
  ];

  // Related articles
  const relatedList = (article.relatedSlugs || [])
    .map((s) => allArticles.find((a) => a.slug === s))
    .filter(Boolean) as typeof allArticles;

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <Header />

      <main className="pt-28 md:pt-36 pb-24">
        <article className="max-w-4xl mx-auto px-6">
          <Breadcrumbs items={breadcrumbItems} />

          {/* Article Header */}
          <header className="mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider bg-black text-white px-3.5 py-1.5 rounded-full mb-4">
              <BookOpen className="w-3.5 h-3.5" />
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

          {/* FAQs Section */}
          {article.faqs && article.faqs.length > 0 && (
            <section className="my-16 p-8 bg-gray-50 border border-gray-200 rounded-3xl" id="faq">
              <div className="flex items-center gap-2 mb-6">
                <HelpCircle className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Frequently Asked Questions
                </h2>
              </div>
              <div className="divide-y divide-gray-200">
                {article.faqs.map((faq, i) => (
                  <div key={i} className="py-5 first:pt-0 last:pb-0">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Call to Action Banner */}
          <div className="my-16 p-8 sm:p-10 bg-black text-white rounded-3xl text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3" style={{ color: "#ffffff" }}>
              Ready to Accelerate Your Applicant Screening?
            </h2>
            <p className="text-white/75 text-sm sm:text-base mb-6 max-w-xl mx-auto">
              Screen every applicant in under 2 minutes, gather ID via WhatsApp, and sync results straight to your ATS.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/free-trial/"
                className="bg-white text-black font-bold text-sm px-8 py-3.5 rounded-full hover:bg-gray-200 transition-colors"
              >
                Get 100 Free Screening Credits
              </Link>
              <Link
                href="/integrations/"
                className="border border-white/40 text-white font-bold text-sm px-8 py-3.5 rounded-full hover:border-white transition-colors"
              >
                View ATS Integrations
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
                View full author profile &amp; all articles →
              </Link>
            </div>
          </div>

          {/* Related Content */}
          {relatedList.length > 0 && (
            <div className="mt-16 pt-12 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Reading</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedList.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={rel.type === "news" ? `/news/${rel.slug}/` : `/blog/${rel.slug}/`}
                    className="p-5 border border-gray-200 rounded-2xl hover:border-black hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2 block">
                        {rel.category}
                      </span>
                      <h3 className="font-bold text-gray-900 text-sm mb-2 line-clamp-2">
                        {rel.h1}
                      </h3>
                      <p className="text-xs text-gray-600 line-clamp-2">
                        {rel.excerpt}
                      </p>
                    </div>
                    <span className="text-xs font-bold text-black mt-4 inline-flex items-center gap-1">
                      Read more <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>

      <Footer />
    </div>
  );
}
