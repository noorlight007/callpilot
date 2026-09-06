"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ATSIntegration, allIntegrations } from "@/data/integrations";

interface Props {
  data: ATSIntegration;
}

interface BoardRowItem {
  id: number;
  name: string;
  job: string;
  initials: string;
  status: "calling" | "unsuccessful" | "requested" | "received" | "verified";
  statusLabel: string;
}

const firstNames = [
  "Jordan", "Casey", "Morgan", "Taylor", "Riley", "Sam", "Alex",
  "Jamie", "Devon", "Avery", "Cameron", "Reese", "Skyler", "Peyton",
  "Quinn", "Emerson", "Rowan", "Hayden"
];
const lastInitials = ["A", "B", "C", "D", "H", "J", "K", "L", "M", "P", "R", "S", "T", "W"];
const jobs = [
  "Warehouse Associate", "CDL Class A Driver", "Forklift Operator",
  "Registered Nurse", "Customer Service Rep", "Administrative Assistant",
  "Machine Operator", "Retail Sales Associate", "Delivery Driver",
  "Certified Nursing Assistant", "Line Cook", "Maintenance Technician",
  "Data Entry Clerk", "Security Officer", "HVAC Technician"
];

function rand<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function makeWobble(min: number, max: number) {
  let value = (min + max) / 2;
  return function () {
    value += (Math.random() - 0.5) * 2.4;
    if (value < min) value = min;
    if (value > max) value = max;
    return Math.round(value);
  };
}

export default function IntegrationDetailClient({ data }: Props) {
  const [calls, setCalls] = useState(0);
  const [requestedPct, setRequestedPct] = useState(48);
  const [receivedPct, setReceivedPct] = useState(33);
  const [verifiedPct, setVerifiedPct] = useState(25);
  const [rows, setRows] = useState<BoardRowItem[]>([]);
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const wobbleReq = makeWobble(45, 50);
    const wobbleRec = makeWobble(30, 35);
    const wobbleVer = makeWobble(22, 28);

    const updateMetrics = () => {
      setCalls((prev) => prev + 1);
      setRequestedPct(wobbleReq());
      setReceivedPct(wobbleRec());
      setVerifiedPct(wobbleVer());
    };

    if (data.panelType === "live-board") {
      let rowCounter = 0;
      const pickOutcome = () => {
        const r = Math.random();
        if (r < 0.03) return { status: "unsuccessful" as const, statusLabel: "Unsuccessful" };
        if (r < 0.48) return { status: "requested" as const, statusLabel: "Qualified" };
        if (r < 0.78) return { status: "received" as const, statusLabel: "Documents Received" };
        return { status: "verified" as const, statusLabel: "Verified" };
      };

      const addRow = () => {
        updateMetrics();
        const fName = rand(firstNames);
        const lInit = rand(lastInitials);
        const fullName = `${fName} ${lInit}.`;
        const jobTitle = rand(jobs);
        const newRow: BoardRowItem = {
          id: ++rowCounter,
          name: fullName,
          job: jobTitle,
          initials: fName.charAt(0),
          status: "calling",
          statusLabel: "Calling…",
        };

        setRows((prev) => [newRow, ...prev.slice(0, 4)]);

        setTimeout(() => {
          const outcome = pickOutcome();
          setRows((prev) =>
            prev.map((r) =>
              r.id === newRow.id
                ? { ...r, status: outcome.status, statusLabel: outcome.statusLabel }
                : r
            )
          );
        }, 1100);
      };

      addRow();
      addRow();
      addRow();
      const interval = setInterval(addRow, 1900);
      return () => clearInterval(interval);
    } else {
      updateMetrics();
      updateMetrics();
      updateMetrics();
      const interval = setInterval(updateMetrics, 750);
      return () => clearInterval(interval);
    }
  }, [data.panelType]);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!waitlistEmail) return;
    setSubmitted(true);
  };

  return (
    <div className="ats-page-root">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-extrabold text-xl tracking-tight text-black">
            CallPilot
          </Link>
          <div className="hidden md:flex items-center gap-7 text-[0.95rem] font-medium text-gray-700">
            <div className="relative group">
              <span className="inline-flex items-center gap-1.5 cursor-pointer hover:text-emerald-600 transition-colors">
                Integrations <span className="text-xs opacity-60">▾</span>
              </span>
              <div className="absolute top-full left-0 mt-3 w-60 p-2 bg-white rounded-xl shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                {allIntegrations.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/integrations/${item.slug}`}
                    className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                      item.slug === data.slug
                        ? "bg-gray-100 font-bold text-black"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <span>{item.name}</span>
                    <span
                      className={`text-[0.68rem] font-bold px-2 py-0.5 rounded-full whitespace-nowrap ${
                        item.status === "Live"
                          ? "bg-emerald-100 text-emerald-700"
                          : item.status === "Live Soon"
                          ? "bg-amber-100 text-amber-800"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {item.status}
                    </span>
                  </Link>
                ))}
                <Link
                  href="/integrations"
                  className="block mt-1 pt-2 border-t border-gray-100 text-center text-xs font-bold text-gray-800 hover:text-emerald-600"
                >
                  View all integrations →
                </Link>
              </div>
            </div>
            <a href="#how-it-works" className="hover:text-emerald-600 transition-colors">How It Works</a>
            <a href="#scoring" className="hover:text-emerald-600 transition-colors">Traffic-Light Scoring</a>
            <a href="#pricing" className="hover:text-emerald-600 transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-emerald-600 transition-colors">FAQ</a>
          </div>
          <a
            href="#book-a-demo"
            className="bg-black text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-gray-800 transition-colors"
          >
            {data.status === "Live" ? "Get Connected" : data.status === "Coming Soon" ? "Join the Waitlist" : "Get Early Access"}
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-black text-white pt-24 pb-20 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full border mb-6"
            style={{
              backgroundColor: data.status === "Live" ? "rgba(30,158,80,0.18)" : "rgba(226,162,32,0.18)",
              color: data.status === "Live" ? "#4ee08a" : data.status === "Coming Soon" ? "rgba(255,255,255,0.7)" : "#f3c34d",
              borderColor: data.status === "Live" ? "rgba(78,224,138,0.35)" : "rgba(243,195,77,0.35)"
            }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{
                backgroundColor: data.status === "Live" ? "#4ee08a" : data.status === "Coming Soon" ? "#999" : "#f3c34d"
              }}
            />
            <span>{data.hero.eyebrowText}</span>
          </div>

          <div className="text-xs md:text-sm font-bold tracking-widest text-white/60 uppercase mb-4">
            {data.hero.overline}
          </div>

          <h1
            className="text-white !text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] mb-6"
            style={{ color: "#ffffff" }}
          >
            {data.hero.h1}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-9 leading-relaxed">
            {data.hero.lead}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto mb-9">
            {data.hero.flowNodes.map((node, i) => (
              <React.Fragment key={i}>
                <span className="bg-white/10 border border-white/20 text-white text-xs md:text-sm font-semibold px-3 py-1.5 rounded-full whitespace-nowrap">
                  {node}
                </span>
                {i < data.hero.flowNodes.length - 1 && (
                  <span className="text-white/40 text-sm">→</span>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={data.hero.primaryCtaLink}
              className="bg-white text-black px-7 py-3.5 rounded-full font-bold text-sm hover:bg-gray-200 transition-colors"
            >
              {data.hero.primaryCtaText}
            </a>
            <a
              href={data.hero.secondaryCtaLink}
              className="border border-white/50 text-white px-7 py-3.5 rounded-full font-bold text-sm hover:border-white transition-colors"
            >
              {data.hero.secondaryCtaText}
            </a>
          </div>
        </div>
      </section>

      {/* Panel: Live Board or Hi-Tech Metrics */}
      {data.panelType === "live-board" ? (
        <section className="bg-white py-16 px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">AI Screening Calls, Live</h2>
              <p className="text-sm text-gray-500">
                Illustrative example of CallPilot qualifying applicants in real time. Names shown are not real applicants.
              </p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-3 bg-gray-50 flex flex-col gap-2.5 min-h-[330px]">
              {rows.map((row) => (
                <div
                  key={row.id}
                  className="flex items-center justify-between gap-4 bg-white border border-gray-200 rounded-xl p-3 sm:px-4 shadow-sm animate-in fade-in slide-in-from-top-2 duration-300"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-full bg-black text-white font-bold text-sm flex items-center justify-center shrink-0">
                      {row.initials}
                    </div>
                    <div className="min-w-0 truncate">
                      <div className="font-bold text-sm text-gray-900 truncate">{row.name}</div>
                      <div className="text-xs text-gray-500 truncate hidden sm:block">{row.job}</div>
                    </div>
                  </div>
                  <div
                    className={`text-xs font-bold px-3 py-1.5 rounded-full shrink-0 flex items-center gap-1.5 whitespace-nowrap ${
                      row.status === "calling"
                        ? "bg-gray-100 text-gray-600"
                        : row.status === "unsuccessful"
                        ? "bg-red-100 text-red-700"
                        : row.status === "requested"
                        ? "bg-amber-100 text-amber-800"
                        : row.status === "received"
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${
                        row.status === "calling"
                          ? "bg-gray-400 animate-pulse"
                          : row.status === "unsuccessful"
                          ? "bg-red-500"
                          : row.status === "requested"
                          ? "bg-amber-500"
                          : row.status === "received"
                          ? "bg-emerald-500"
                          : "bg-blue-500"
                      }`}
                    />
                    {row.statusLabel}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 text-center">
              <div className="border border-gray-200 rounded-xl p-4 bg-gray-50">
                <b className="block text-2xl font-extrabold text-gray-900">{calls}</b>
                <span className="text-xs text-gray-500">AI Calls</span>
              </div>
              <div className="border border-gray-200 rounded-xl p-4 bg-gray-50">
                <b className="block text-2xl font-extrabold text-gray-900">{requestedPct}%</b>
                <span className="text-xs text-gray-500">Documents Requested</span>
              </div>
              <div className="border border-gray-200 rounded-xl p-4 bg-gray-50">
                <b className="block text-2xl font-extrabold text-gray-900">{receivedPct}%</b>
                <span className="text-xs text-gray-500">Documents Received</span>
              </div>
              <div className="border border-gray-200 rounded-xl p-4 bg-gray-50">
                <b className="block text-2xl font-extrabold text-gray-900">{verifiedPct}%</b>
                <span className="text-xs text-gray-500">Submitted to Client</span>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <>
          {/* Hi-Tech Metrics Panel */}
          <section className="bg-[#05070d] text-white py-16 px-6 relative border-y border-gray-800">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 font-mono text-xs font-bold tracking-widest text-[#f3c34d] bg-[#f3c34d]/10 border border-[#f3c34d]/30 px-3 py-1 rounded-full mb-4">
                <span className="w-2 h-2 rounded-full bg-[#f3c34d] shadow-[0_0_8px_#f3c34d] animate-pulse" />
                {data.hitech?.tag}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3">{data.hitech?.h2}</h2>
              <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto mb-10">
                {data.hitech?.description}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
                  <div className="w-14 h-14 mx-auto rounded-full border-2 border-[#f3c34d]/40 flex items-center justify-center mb-2">
                    <b className="font-mono text-xl text-[#f3c34d]">{calls}</b>
                  </div>
                  <span className="text-xs uppercase tracking-wider text-white/50">AI Calls Handled</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
                  <div className="h-1.5 w-full bg-white/10 rounded-full mb-3 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#e2a220] to-[#f3c34d]" style={{ width: `${requestedPct}%` }} />
                  </div>
                  <b className="block font-mono text-2xl text-[#f3c34d] mb-1">{requestedPct}%</b>
                  <span className="text-xs uppercase tracking-wider text-white/50">Documents Requested</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
                  <div className="h-1.5 w-full bg-white/10 rounded-full mb-3 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#e2a220] to-[#f3c34d]" style={{ width: `${receivedPct}%` }} />
                  </div>
                  <b className="block font-mono text-2xl text-[#f3c34d] mb-1">{receivedPct}%</b>
                  <span className="text-xs uppercase tracking-wider text-white/50">Documents Received</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
                  <div className="h-1.5 w-full bg-white/10 rounded-full mb-3 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#e2a220] to-[#f3c34d]" style={{ width: `${verifiedPct}%` }} />
                  </div>
                  <b className="block font-mono text-2xl text-[#f3c34d] mb-1">{verifiedPct}%</b>
                  <span className="text-xs uppercase tracking-wider text-white/50">Submitted to Client</span>
                </div>
              </div>
            </div>
          </section>

          {/* Waitlist Section */}
          <section className="bg-white py-16 px-6">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{data.waitlist?.h2}</h2>
                <p className="text-sm text-gray-500">{data.waitlist?.note}</p>
              </div>

              <div className="border border-gray-200 rounded-2xl p-6 sm:p-8 bg-gray-50 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{data.waitlist?.cardTitle}</h3>
                  <p className="text-xs sm:text-sm text-gray-500 max-w-sm">{data.waitlist?.cardDesc}</p>
                </div>
                {submitted ? (
                  <div className="bg-emerald-100 text-emerald-800 text-sm font-bold px-5 py-3 rounded-full">
                    Thank you! You're on the early access list.
                  </div>
                ) : (
                  <form onSubmit={handleWaitlistSubmit} className="flex gap-2 w-full md:w-auto">
                    <input
                      type="email"
                      value={waitlistEmail}
                      onChange={(e) => setWaitlistEmail(e.target.value)}
                      placeholder="you@company.com"
                      required
                      className="px-4 py-2.5 rounded-full border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-black flex-1 md:w-56"
                    />
                    <button
                      type="submit"
                      className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-gray-800 transition-colors whitespace-nowrap"
                    >
                      {data.waitlist?.buttonText}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Stats Strip */}
      <div className="bg-[#111] text-white py-12 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-gray-800">
          {data.stats.map((stat, i) => (
            <div key={i} className="pt-4 md:pt-0 md:px-6">
              <b className="block text-3xl sm:text-4xl font-extrabold text-white mb-1">{stat.value}</b>
              <span className="block text-xs uppercase tracking-wider text-white/60 font-semibold">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <section className="py-20 px-6 bg-white" id="how-it-works">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">{data.howItWorks.h2}</h2>
            <p className="text-gray-600 text-sm sm:text-base">{data.howItWorks.lead}</p>
          </div>

          <div className="grid gap-4">
            {data.howItWorks.steps.map((step, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-2xl border border-gray-200 bg-white hover:border-gray-300 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-black text-white font-extrabold flex items-center justify-center shrink-0 text-sm">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Traffic-Light Scoring */}
      <section className="py-20 px-6 bg-black text-white" id="scoring">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Automatic Traffic-Light Scoring</h2>
          <p className="text-white/70 max-w-xl mx-auto mb-12 text-sm sm:text-base">
            {data.trafficLights.lead}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors">
              <span className="w-6 h-6 rounded-full bg-amber-400 shadow-[0_0_0_6px_rgba(243,195,77,0.15)] block mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Qualified</h3>
              <p className="text-sm text-white/70 leading-relaxed">{data.trafficLights.qualified}</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors">
              <span className="w-6 h-6 rounded-full bg-emerald-400 shadow-[0_0_0_6px_rgba(78,224,138,0.15)] block mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Documents Received</h3>
              <p className="text-sm text-white/70 leading-relaxed">{data.trafficLights.received}</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors">
              <span className="w-6 h-6 rounded-full bg-red-400 shadow-[0_0_0_6px_rgba(239,106,106,0.15)] block mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Unsuccessful</h3>
              <p className="text-sm text-white/70 leading-relaxed">{data.trafficLights.unsuccessful}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Callout */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="border border-gray-200 rounded-2xl p-8 bg-gray-50 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{data.callout.title}</h3>
              <p className="text-sm text-gray-600 max-w-xl leading-relaxed">{data.callout.desc}</p>
            </div>
            <span
              className="px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider shrink-0 flex items-center gap-2"
              style={{
                backgroundColor: data.status === "Live" ? "#e7f6ec" : data.status === "Coming Soon" ? "#eee" : "#fdf3df",
                color: data.status === "Live" ? "#1e9e50" : data.status === "Coming Soon" ? "#666" : "#8a5a00"
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor: data.status === "Live" ? "#1e9e50" : data.status === "Coming Soon" ? "#999" : "#e2a220"
                }}
              />
              {data.callout.badgeText}
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-20 px-6 bg-white border-t border-gray-100" id="pricing">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">AI Applicant Call Plans</h2>
            <p className="text-gray-500 font-medium">No Call. No Charge.</p>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold text-center py-3 px-6 rounded-2xl mb-10 max-w-2xl mx-auto text-sm sm:text-base">
            New clients: your first 100 AI screening calls are free.
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Starter */}
            <div className="border border-gray-200 rounded-2xl p-6 flex flex-col bg-white">
              <div className="font-extrabold text-lg text-gray-900">Starter</div>
              <div className="text-3xl font-extrabold text-gray-900 my-2">$395<span className="text-sm font-normal text-gray-500">/mo</span></div>
              <div className="text-xs text-gray-500 mb-6">100 screening calls included</div>
              <ul className="text-xs sm:text-sm text-gray-700 divide-y divide-gray-100 mb-8 flex-1">
                <li className="py-2.5">$3.95 per screening</li>
                <li className="py-2.5">$4.45 per top-up screening</li>
                {data.pricingFeatures.map((f, i) => (
                  <li key={i} className="py-2.5">{f}</li>
                ))}
              </ul>
              <a href="#book-a-demo" className="border border-black text-black text-center py-2.5 rounded-full font-bold text-sm hover:bg-black hover:text-white transition-colors">
                Get Started
              </a>
            </div>

            {/* Growth */}
            <div className="border-2 border-black rounded-2xl p-6 flex flex-col bg-white relative shadow-md">
              <span className="absolute -top-3 left-6 bg-black text-white text-[0.68rem] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                RECOMMENDED
              </span>
              <div className="font-extrabold text-lg text-gray-900">Growth</div>
              <div className="text-3xl font-extrabold text-gray-900 my-2">$1,400<span className="text-sm font-normal text-gray-500">/mo</span></div>
              <div className="text-xs text-gray-500 mb-6">400 screening calls included</div>
              <ul className="text-xs sm:text-sm text-gray-700 divide-y divide-gray-100 mb-8 flex-1">
                <li className="py-2.5">$3.50 per screening</li>
                <li className="py-2.5">$3.90 per top-up screening</li>
                {data.pricingFeatures.map((f, i) => (
                  <li key={i} className="py-2.5">{f}</li>
                ))}
              </ul>
              <a href="#book-a-demo" className="bg-black text-white text-center py-2.5 rounded-full font-bold text-sm hover:bg-gray-800 transition-colors">
                Get Started
              </a>
            </div>

            {/* Pro */}
            <div className="border border-gray-200 rounded-2xl p-6 flex flex-col bg-white">
              <div className="font-extrabold text-lg text-gray-900">Pro</div>
              <div className="text-3xl font-extrabold text-gray-900 my-2">$2,950<span className="text-sm font-normal text-gray-500">/mo</span></div>
              <div className="text-xs text-gray-500 mb-6">1,000 screening calls included</div>
              <ul className="text-xs sm:text-sm text-gray-700 divide-y divide-gray-100 mb-8 flex-1">
                <li className="py-2.5">$2.95 per screening</li>
                <li className="py-2.5">$2.95 per top-up screening</li>
                {data.pricingFeatures.map((f, i) => (
                  <li key={i} className="py-2.5">{f}</li>
                ))}
              </ul>
              <a href="#book-a-demo" className="border border-black text-black text-center py-2.5 rounded-full font-bold text-sm hover:bg-black hover:text-white transition-colors">
                Get Started
              </a>
            </div>

            {/* Enterprise */}
            <div className="border border-gray-200 rounded-2xl p-6 flex flex-col bg-white">
              <div className="font-extrabold text-lg text-gray-900">Enterprise</div>
              <div className="text-3xl font-extrabold text-gray-900 my-2">Custom</div>
              <div className="text-xs text-gray-500 mb-6">2,000+ screening calls</div>
              <ul className="text-xs sm:text-sm text-gray-700 divide-y divide-gray-100 mb-8 flex-1">
                <li className="py-2.5">Volume pricing</li>
                <li className="py-2.5">Tailored terms</li>
                {data.pricingFeatures.map((f, i) => (
                  <li key={i} className="py-2.5">{f}</li>
                ))}
              </ul>
              <a href="#book-a-demo" className="border border-black text-black text-center py-2.5 rounded-full font-bold text-sm hover:bg-black hover:text-white transition-colors">
                Talk to Us
              </a>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-gray-500 text-center mt-8 max-w-3xl mx-auto">
            Plus $10/month for an AI phone number (or connect your own compatible number). Unused screenings carry over for one month, then expire. Billed monthly in advance.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-white border-t border-gray-100" id="faq">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Frequently Asked Questions</h2>
          <div className="divide-y divide-gray-200 border-y border-gray-200">
            {data.faqs.map((faq, i) => (
              <div key={i} className="py-6">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-black text-white text-center" id="book-a-demo">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">{data.finalCta.h2}</h2>
          <p className="text-white/75 text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            {data.finalCta.lead}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={data.finalCta.primaryUrl}
              className="bg-white text-black px-8 py-3.5 rounded-full font-bold text-sm hover:bg-gray-200 transition-colors"
            >
              {data.finalCta.primaryText}
            </a>
            <a
              href={data.finalCta.secondaryUrl}
              className="border border-white/50 text-white px-8 py-3.5 rounded-full font-bold text-sm hover:border-white transition-colors"
            >
              {data.finalCta.secondaryText}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>CallPilot is a brand of Swiftwave.ai. Tested and built in a live recruitment environment over 18 months.</div>
          <div className="flex gap-6 font-medium">
            <a href="#pricing" className="hover:text-black transition-colors">Pricing</a>
            <a href="https://www.swiftwave.ai/callpilot" className="hover:text-black transition-colors">Features</a>
            <a href="#faq" className="hover:text-black transition-colors">FAQ</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
