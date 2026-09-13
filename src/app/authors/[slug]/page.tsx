import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { authors } from "@/data/authors";
import { allArticles } from "@/data/articles";
import { Calendar, Clock, ArrowRight, Linkedin, Award, BookOpen } from "lucide-react";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return Object.keys(authors).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const author = authors[slug];
  if (!author) return {};

  const canonicalUrl = `https://callpilot.pro/authors/${author.slug}/`;

  return {
    title: `${author.name} | ${author.role} | CallPilot`,
    description: author.bio.substring(0, 155),
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${author.name} | ${author.role}`,
      description: author.bio,
      url: canonicalUrl,
      siteName: "CallPilot",
      type: "profile",
      images: [
        {
          url: author.avatar,
          width: 400,
          height: 400,
          alt: author.name,
        },
      ],
    },
  };
}

export default async function AuthorProfilePage({ params }: Props) {
  const { slug } = await params;
  const author = authors[slug];

  if (!author) {
    notFound();
  }

  const authorArticles = allArticles.filter((a) => a.authorSlug === author.slug);

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.name,
    jobTitle: author.role,
    description: author.bio,
    image: author.avatar,
    url: `https://callpilot.pro/authors/${author.slug}/`,
    sameAs: [author.linkedin].filter(Boolean),
    worksFor: {
      "@type": "Organization",
      name: "CallPilot",
      url: "https://callpilot.pro",
    },
  };

  const breadcrumbItems = [
    { label: "Authors", href: "/about-us" },
    { label: author.name },
  ];

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Header />

      <main className="pt-28 md:pt-36 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <Breadcrumbs items={breadcrumbItems} />

          {/* Author Header Card */}
          <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 sm:p-12 mb-16 flex flex-col sm:flex-row items-center sm:items-start gap-8">
            <img
              src={author.avatar}
              alt={author.name}
              className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl object-cover border border-gray-200 shadow-md shrink-0"
            />
            <div className="text-center sm:text-left flex-1">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full mb-3">
                <Award className="w-3.5 h-3.5" />
                Verified Contributor
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">
                {author.name}
              </h1>
              <p className="text-sm font-semibold text-emerald-800 mb-4">{author.role}</p>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
                {author.bio}
              </p>
              <div className="flex justify-center sm:justify-start gap-3">
                <a
                  href={author.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-black text-white text-xs font-bold px-4 py-2 rounded-full hover:bg-gray-800 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Authored Articles */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <BookOpen className="w-6 h-6 text-gray-900" />
              <h2 className="text-2xl font-extrabold text-gray-900">
                Articles &amp; Guides by {author.name}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {authorArticles.map((article) => (
                <article
                  key={article.slug}
                  className="border border-gray-200 rounded-2xl p-6 bg-white hover:border-black hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                      <span className="font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                        {article.category}
                      </span>
                      <span>{article.readingTime}</span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                      <Link
                        href={article.type === "news" ? `/news/${article.slug}/` : `/blog/${article.slug}/`}
                        className="hover:text-emerald-600 transition-colors"
                      >
                        {article.h1}
                      </Link>
                    </h3>

                    <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed mb-4">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs text-gray-500">{article.publishDate}</span>
                    <Link
                      href={article.type === "news" ? `/news/${article.slug}/` : `/blog/${article.slug}/`}
                      className="text-xs font-bold text-black hover:text-emerald-600 inline-flex items-center gap-1"
                    >
                      Read full {article.type} <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
