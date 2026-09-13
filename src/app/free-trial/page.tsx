"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CheckCircle2, Shield, Zap, PhoneCall, Sparkles, ArrowRight, Clock } from "lucide-react";

export default function FreeTrialPage() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [ats, setAts] = useState("Ashby");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const formData = new FormData();
    formData.append("_subject", `New 100 Free Credits Trial Request – ${company}`);
    formData.append("_template", "table");
    formData.append("_captcha", "false");
    formData.append("Source", "Free Trial Page (/free-trial/)");
    formData.append("Name", name);
    formData.append("Company Name", company);
    formData.append("Email Address", email);
    formData.append("Contact Number", phone);
    formData.append("Current ATS", ats);

    try {
      const res = await fetch("https://formsubmit.co/ajax/steven@rd1.co.uk", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!res.ok) throw new Error("Submission failed");
      setSuccess(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-28 md:pt-36 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs items={[{ label: "Free Trial" }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-6">
            {/* Left Column: Value Proposition */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase bg-emerald-50 text-emerald-800 border border-emerald-200 px-3.5 py-1.5 rounded-full mb-6">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                100 FREE SCREENING CREDITS • NO CREDIT CARD REQUIRED
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.12] mb-6">
                Screen Your First 100 Applicants on CallPilot Free
              </h1>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
                Test CallPilot on your highest-volume live vacancy. Every applicant called within the hour by human-like AI voice, compliance documents collected via WhatsApp, and candidate records synced straight to your ATS.
              </p>

              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900 text-sm sm:text-base block">100 Full AI Screening Calls Included</strong>
                    <span className="text-xs sm:text-sm text-gray-600">Run actual live phone qualification with natural conversation flow and custom role criteria.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900 text-sm sm:text-base block">WhatsApp &amp; SMS Document Collection</strong>
                    <span className="text-xs sm:text-sm text-gray-600">ID and right-to-work documents requested seconds after qualification.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900 text-sm sm:text-base block">Seamless ATS Integration</strong>
                    <span className="text-xs sm:text-sm text-gray-600">Native two-way sync for Ashby, Recruit CRM, JobAdder, and early access for Greenhouse &amp; iCIMS.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900 text-sm sm:text-base block">Zero Obligation, No Card Required</strong>
                    <span className="text-xs sm:text-sm text-gray-600">No automatic rollovers, no setup charges, no sneaky renewal traps.</span>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-2xl flex flex-col sm:flex-row items-center gap-6">
                <div className="flex items-center gap-3">
                  <Shield className="w-8 h-8 text-emerald-700 shrink-0" />
                  <div className="text-xs text-gray-700">
                    <strong className="block font-bold text-gray-900">GDPR &amp; SOC2 Compliant</strong>
                    Strict enterprise-grade data residency and privacy controls.
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-8 h-8 text-emerald-700 shrink-0" />
                  <div className="text-xs text-gray-700">
                    <strong className="block font-bold text-gray-900">5-Minute Activation</strong>
                    Get onboarded and run live test calls within minutes.
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Lead Capture Card */}
            <div className="lg:col-span-5">
              <div className="bg-white border-2 border-black rounded-3xl p-7 sm:p-9 shadow-2xl">
                {success ? (
                  <div className="text-center py-8">
                    <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h2 className="text-2xl font-extrabold text-gray-900 mb-2">
                      Trial Request Received!
                    </h2>
                    <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                      Thank you. We are preparing your workspace with 100 free screening credits and will email your credentials shortly.
                    </p>
                    <Link
                      href="/integrations"
                      className="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-gray-800 transition-colors"
                    >
                      Browse ATS Integrations
                    </Link>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-extrabold text-gray-900 mb-2">
                      Claim Your 100 Free Credits
                    </h2>
                    <p className="text-xs text-gray-500 mb-6">
                      Complete the form below to receive immediate access to your screening sandbox.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Sarah Connor"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-black"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="sarah@company.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-black"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder="Acme Staffing Solutions"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-black"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+44 20 7946 0912"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-black"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                          Your Applicant Tracking System (ATS)
                        </label>
                        <select
                          value={ats}
                          onChange={(e) => setAts(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm bg-white focus:outline-none focus:border-black"
                        >
                          <option value="Ashby">Ashby (Live Integration)</option>
                          <option value="Recruit CRM">Recruit CRM (Live Integration)</option>
                          <option value="JobAdder">JobAdder (Live Integration)</option>
                          <option value="Greenhouse">Greenhouse (Waitlist / Early Access)</option>
                          <option value="iCIMS">iCIMS (Waitlist / Early Access)</option>
                          <option value="Other">Other / Standalone Webhook</option>
                        </select>
                      </div>

                      {error && (
                        <p className="text-xs text-red-600">
                          Submission encountered an error. Please try again or reach out to support.
                        </p>
                      )}

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3.5 px-6 bg-black text-white font-bold text-sm rounded-xl hover:bg-gray-800 transition-colors shadow-md flex items-center justify-center gap-2 mt-4"
                      >
                        {loading ? "Activating Trial..." : "Activate 100 Free Credits →"}
                      </button>

                      <p className="text-[11px] text-gray-400 text-center mt-3">
                        By submitting, you agree to our Terms of Service and Privacy Policy.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
