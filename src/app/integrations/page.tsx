import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { allIntegrations } from "@/data/integrations";
import { CheckCircle2, ArrowRight, PhoneCall, Zap, Shield, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "ATS Integrations | CallPilot",
  description: "Connect CallPilot's AI screening call engine to your ATS. Explore native integrations for JobAdder, Recruit CRM, Greenhouse, Ashby, and iCIMS.",
  alternates: {
    canonical: "https://callpilot.pro/integrations",
  },
  openGraph: {
    title: "ATS Integrations | CallPilot",
    description: "Connect CallPilot's AI screening call engine to your ATS. Explore native integrations for JobAdder, Recruit CRM, Greenhouse, Ashby, and iCIMS.",
    url: "https://callpilot.pro/integrations",
    siteName: "CallPilot",
    type: "website",
    images: [
      {
        url: "https://callpilot.pro/og-image.png",
        width: 1200,
        height: 630,
        alt: "CallPilot ATS Integrations",
      },
    ],
  },
};

export default function IntegrationsHubPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-28 md:pt-36">
        {/* Hero */}
        <section className="bg-black text-white py-20 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase bg-white/10 text-emerald-400 border border-emerald-500/30 px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              ECOSYSTEM &amp; INTEGRATIONS
            </span>
            <h1
              className="text-white !text-white text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6"
              style={{ color: "#ffffff" }}
            >
              AI Screening Calls Built For Your ATS
            </h1>
            <p className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto mb-8 leading-relaxed">
              Every applicant called, scored, and synced automatically. Zero manual chasing. Connect CallPilot to your recruitment workflow today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#all-integrations"
                className="bg-white text-black font-bold text-sm px-8 py-3.5 rounded-full hover:bg-gray-200 transition-colors"
              >
                Browse Integrations
              </a>
              <Link
                href="/get-started"
                className="border border-white/40 text-white font-bold text-sm px-8 py-3.5 rounded-full hover:border-white transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </section>

        {/* Integration Directory Grid */}
        <section className="py-24 px-6 max-w-7xl mx-auto" id="all-integrations">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Supported ATS Platforms
            </h2>
            <p className="text-gray-600 text-base">
              Select your ATS to see how CallPilot automates initial qualification, collects documents via WhatsApp &amp; SMS, and syncs status in real-time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allIntegrations.map((item) => (
              <div
                key={item.slug}
                className="border border-gray-200 rounded-2xl p-7 bg-white hover:shadow-xl hover:border-gray-400 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-extrabold text-gray-900">{item.name}</h3>
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full ${
                        item.status === "Live"
                          ? "bg-emerald-100 text-emerald-800"
                          : item.status === "Live Soon"
                          ? "bg-amber-100 text-amber-800"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                    {item.seo.description}
                  </p>
                  <ul className="text-xs text-gray-700 space-y-2.5 mb-8">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Instant AI Voice Qualification</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Traffic-Light Scoring Automation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>WhatsApp / SMS ID &amp; Document Collection</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Two-way candidate record sync</span>
                    </li>
                  </ul>
                </div>

                <Link
                  href={`/integrations/${item.slug}`}
                  className="w-full py-3 px-4 bg-black text-white font-bold text-sm rounded-xl text-center flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
                >
                  <span>Explore {item.name} Page</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Value Prop Banner */}
        <section className="bg-gray-50 border-y border-gray-200 py-20 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-gray-200">
              <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center mb-4">
                <PhoneCall className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">100% Faster First Contact</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Applicants are dialed automatically within the hour, 24/7, while interest is at its absolute peak.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-200">
              <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">70% Less Admin Time</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Traffic-light auto-scoring and automated document collection eliminate repetitive manual follow-ups.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-200">
              <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">18 Months Live Tested</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Refined and proven inside real, high-volume recruitment agencies with thousands of live applicant calls.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black text-white py-24 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-white !text-white text-3xl sm:text-4xl font-extrabold mb-4" style={{color: "#ffffff"}}>
              Ready to automate applicant qualification?
            </h2>
            <p className="text-white/75 text-base sm:text-lg mb-8">
              New clients get their first 100 AI screening calls free. No setup fees, no contracts.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/get-started"
                className="bg-white text-black font-bold text-sm px-8 py-3.5 rounded-full hover:bg-gray-200 transition-colors"
              >
                Claim 100 Free Calls
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
