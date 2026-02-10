"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function AboutUsPage() {
  return (
    <>
      <Header />

      <main className="bg-background">
        {/* Hero */}
        <div className="border-b border-border mt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <div className="max-w-3xl">
              <p className="text-sm text-muted-text mb-2">Platform Introduction</p>
              <h1 className="text-3xl sm:text-4xl font-bold text-headline tracking-tight">
                About Us
              </h1>
              <p className="mt-4 text-base sm:text-lg text-body leading-relaxed">
                At CallPilot, we build AI-powered phone call automation that
                helps businesses take control of their calls, without the
                complexity or cost of traditional systems.
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Side highlights */}
            <aside className="lg:col-span-4 xl:col-span-3">
              <div className="lg:sticky lg:top-24 space-y-4">
                <div className="rounded-2xl border border-border bg-card/40 p-5">
                  <p className="text-sm font-semibold text-headline">
                    What we focus on
                  </p>
                  <ul className="mt-4 space-y-3 text-sm text-body">
                    <li className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-muted-foreground/60" />
                      AI phone calls built for real-world outcomes
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-muted-foreground/60" />
                      Deep CRM integration and clean data flow
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-muted-foreground/60" />
                      Structured capture of key call information
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-muted-foreground/60" />
                      Hands-on onboarding and continued support
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-border bg-card/40 p-5">
                  <p className="text-sm font-semibold text-headline">
                    Built to scale
                  </p>
                  <p className="mt-3 text-sm text-body leading-relaxed">
                    CallPilot is part of a growing suite of AI automation modules
                    designed to deliver practical automation without
                    enterprise-level costs.
                  </p>
                </div>
              </div>
            </aside>

            {/* Main narrative */}
            <article className="lg:col-span-8 xl:col-span-9">
              <div className="max-w-3xl space-y-10">
                <section className="space-y-4">
                  <h2 className="text-xl sm:text-2xl font-semibold text-headline tracking-tight">
                    Why AI phone calls still matter
                  </h2>
                  <p className="text-body leading-relaxed">
                    AI phone calls remain one of the most effective ways to
                    engage in business, whether that’s speaking with clients,
                    job applicants, or internal teams. But most calling
                    processes are still slow, manual, and difficult to scale.
                    Important information gets lost, follow-ups are delayed, and
                    teams waste time updating systems instead of moving
                    conversations forward.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl sm:text-2xl font-semibold text-headline tracking-tight">
                    The problem with “hype-first” platforms
                  </h2>
                  <p className="text-body leading-relaxed">
                    When assessing existing AI phone call platforms, it became
                    clear that many were built around hype rather than outcomes.
                    Limited CRM integration, poor data flow, and basic call
                    playback meant businesses were paying premium prices for
                    systems that behaved more like automated answering machines
                    than intelligent calling solutions.
                  </p>
                </section>

                <section className="space-y-4">
                  <div className="rounded-2xl border border-border bg-card/40 p-6 sm:p-7">
                    <h2 className="text-xl sm:text-2xl font-semibold text-headline tracking-tight">
                      So we built CallPilot
                    </h2>
                    <p className="mt-3 text-body leading-relaxed">
                      Designed and developed by an experienced team, CallPilot
                      is an AI phone call platform built for real-world use. It
                      combines intelligent call handling with deep CRM
                      integration and structured data capture. Every call is
                      logged, key information is captured in real time, and
                      outcomes are pushed directly into your CRM or business
                      systems — automatically.
                    </p>
                  </div>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl sm:text-2xl font-semibold text-headline tracking-tight">
                    Hands-on onboarding and ongoing support
                  </h2>
                  <p className="text-body leading-relaxed">
                    Our developers work closely with every client during
                    onboarding and beyond, providing hands-on support to ensure
                    CallPilot is configured correctly, performs reliably, and
                    continues to deliver value as your business grows.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl sm:text-2xl font-semibold text-headline tracking-tight">
                    What’s next
                  </h2>
                  <p className="text-body leading-relaxed">
                    CallPilot is part of a growing suite of AI automation
                    modules, with additional tools being released soon. Each
                    module is professionally engineered, affordably priced, and
                    designed to deliver practical automation that helps
                    businesses scale without enterprise-level costs.
                  </p>
                </section>

                {/* CTA */}
                <section className="pt-2">
                  <div className="rounded-2xl border border-border bg-card/40 p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <p className="text-sm text-muted-text">Ready to see it?</p>
                      <p className="mt-1 text-base font-semibold text-headline">
                        Get started with CallPilot.pro
                      </p>
                    </div>
                    <Link href="/get-started" className="">
                        <Button variant="cta" size="lg" className="w-full">
                            Get Started
                        </Button>
                    </Link>
                  </div>
                </section>
              </div>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
