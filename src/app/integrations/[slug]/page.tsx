import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { integrationsData, allIntegrations } from "@/data/integrations";
import IntegrationDetailClient from "./IntegrationDetailClient";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return allIntegrations.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = integrationsData[slug];
  if (!data) return {};

  const canonicalUrl = `https://callpilot.pro/integrations/${data.slug}`;

  return {
    title: data.seo.title,
    description: data.seo.description,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: data.seo.ogTitle,
      description: data.seo.ogDescription,
      url: canonicalUrl,
      siteName: "CallPilot",
      type: "website",
      images: [
        {
          url: "https://callpilot.pro/og-image.png",
          width: 1200,
          height: 630,
          alt: data.seo.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data.seo.twitterTitle,
      description: data.seo.twitterDescription,
      images: ["https://callpilot.pro/og-image.png"],
    },
  };
}

export default async function IntegrationSlugPage({ params }: Props) {
  const { slug } = await params;
  const data = integrationsData[slug];
  if (!data) {
    notFound();
  }

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `CallPilot AI Screening Calls for ${data.name}`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: data.seo.schemaDescription,
    offers: [
      {
        "@type": "Offer",
        name: "Starter",
        price: "395",
        priceCurrency: "USD",
        description: "100 AI screening calls per month",
      },
      {
        "@type": "Offer",
        name: "Growth",
        price: "1400",
        priceCurrency: "USD",
        description: "400 AI screening calls per month",
      },
      {
        "@type": "Offer",
        name: "Pro",
        price: "2950",
        priceCurrency: "USD",
        description: "1,000 AI screening calls per month",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <>
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <IntegrationDetailClient data={data} />
    </>
  );
}
