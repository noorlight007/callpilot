"use client";
// app/terms-of-service/page.tsx

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sections = [
  { id: "service", title: "1. The Service" },
  { id: "eligibility", title: "2. Eligibility" },
  { id: "account", title: "3. Account Registration" },
  { id: "subscription", title: "4. Subscription, Fees & Payment Terms" },
  { id: "acceptable-use", title: "5. Acceptable Use" },
  { id: "compliance", title: "6. Telecommunications & Legal Compliance" },
  { id: "retention", title: "7. Data Retention & Automatic Deletion" },
  { id: "ai-output", title: "8. AI Output & Accuracy" },
  { id: "confidentiality", title: "9. Confidentiality" },
  { id: "ip", title: "10. Intellectual Property" },
  { id: "termination", title: "11. Suspension & Termination" },
  { id: "availability", title: "12. Service Availability" },
  { id: "disclaimers", title: "13. Disclaimers" },
  { id: "liability", title: "14. Limitation of Liability" },
  { id: "indemnity", title: "15. Indemnity" },
  { id: "changes", title: "16. Changes to These Terms" },
  { id: "law", title: "17. Governing Law & Jurisdiction" },
  { id: "contact", title: "18. Contact Information" },
];

function SectionTitle({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <h2
      id={id}
      className="scroll-mt-28 text-xl sm:text-2xl font-semibold text-headline tracking-tight"
    >
      {children}
    </h2>
  );
}

export default function TermsOfServicePage() {
  return (
    <>
      <Header />

      <main id="top" className="bg-background">
        {/* Header */}
        <div className="border-b border-border pt-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
            <div>
              <p className="text-sm text-muted-text mb-2">Legal</p>
              <h1 className="text-3xl sm:text-4xl font-bold text-headline tracking-tight">
                CallPilot – Terms of Service
              </h1>

              <p className="mt-3 text-sm sm:text-base text-body">
                By <span className="font-medium">Swiftwave.ai</span>
              </p>

              <p className="mt-2 text-sm sm:text-base text-body">
                Effective Date:{" "}
                <span className="font-medium">10 February 2026</span>
              </p>

              <div className="mt-6 rounded-2xl border border-border bg-card/40 p-5 sm:p-6">
                <p className="text-sm sm:text-base text-body leading-relaxed">
                  These Terms of Service (&quot;Terms&quot;) govern your access to and use of{" "}
                  <span className="font-medium">CallPilot</span>, an AI-powered automated phone
                  call platform operated by{" "}
                  <span className="font-medium">Swiftwave.ai</span> (&quot;Swiftwave.ai&quot;,
                  &quot;we&quot;, &quot;us&quot;, &quot;our&quot;).
                </p>
                <p className="mt-3 text-sm sm:text-base text-body leading-relaxed">
                  By accessing or using CallPilot, you (&quot;Customer&quot;, &quot;you&quot;)
                  agree to be bound by these Terms.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* TOC */}
            <aside className="lg:col-span-4 xl:col-span-3">
              <div className="lg:sticky lg:top-24">
                <div className="rounded-2xl border border-border bg-card/40 p-5">
                  <p className="text-sm font-semibold text-headline">On this page</p>
                  <nav className="mt-4">
                    <ul className="space-y-2">
                      {sections.map((s) => (
                        <li key={s.id}>
                          <a
                            href={`#${s.id}`}
                            className="text-sm text-body hover:text-headline transition-colors"
                          >
                            {s.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            </aside>

            {/* Body */}
            <article className="lg:col-span-8 xl:col-span-9">
              <div className="max-w-3xl space-y-10">
                {/* 1 */}
                <section className="space-y-4">
                  <SectionTitle id="service">1. The Service</SectionTitle>
                  <p className="text-body leading-relaxed">
                    CallPilot is an AI-driven phone call service that automatically places,
                    receives, manages, and processes telephone calls on your behalf, including
                    but not limited to:
                  </p>
                  <ul className="list-disc pl-5 text-body space-y-1">
                    <li>promotional calls</li>
                    <li>applicant or customer calls</li>
                    <li>booking and reservation calls</li>
                    <li>information capture and qualification calls</li>
                  </ul>
                </section>

                {/* 2 */}
                <section className="space-y-4">
                  <SectionTitle id="eligibility">2. Eligibility</SectionTitle>
                  <p className="text-body leading-relaxed">You must:</p>
                  <ul className="list-disc pl-5 text-body space-y-1">
                    <li>be at least 18 years old;</li>
                    <li>
                      have legal authority to bind a business if using CallPilot commercially;
                    </li>
                    <li>comply with all applicable laws and regulations.</li>
                  </ul>
                </section>

                {/* 3 */}
                <section className="space-y-4">
                  <SectionTitle id="account">3. Account Registration</SectionTitle>
                  <p className="text-body leading-relaxed">You are responsible for:</p>
                  <ul className="list-disc pl-5 text-body space-y-1">
                    <li>providing accurate and complete account information;</li>
                    <li>maintaining the confidentiality of your login credentials;</li>
                    <li>all activity carried out under your account.</li>
                  </ul>
                </section>

                {/* 4 */}
                <section className="space-y-4">
                  <SectionTitle id="subscription">
                    4. Subscription, Fees &amp; Payment Terms
                  </SectionTitle>

                  <div className="rounded-2xl border border-border bg-card/40 p-5 sm:p-6 space-y-6">
                    <div className="space-y-2">
                      <p className="font-semibold text-headline">4.1 Development Fee</p>
                      <p className="text-body leading-relaxed">
                        A one-off development fee of <span className="font-medium">$400 USD</span>{" "}
                        is charged upfront prior to activation of the CallPilot service.
                      </p>
                      <ul className="list-disc pl-5 text-body space-y-1">
                        <li>Covers initial setup, configuration, and onboarding</li>
                        <li>Refundable in free minutes after one year</li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <p className="font-semibold text-headline">4.2 Subscription-Only Service</p>
                      <p className="text-body leading-relaxed">
                        CallPilot is provided strictly on a subscription-only basis. Each
                        subscription includes inclusive free call minutes, as advertised at the
                        time of purchase. There are no per-minute charges within the included
                        allowance.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <p className="font-semibold text-headline">4.3 Subscription Payments</p>
                      <ul className="list-disc pl-5 text-body space-y-1">
                        <li>Monthly subscription fees are payable in advance</li>
                        <li>Subscriptions renew automatically unless cancelled</li>
                        <li>Non-payment will result in suspension or termination</li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <p className="font-semibold text-headline">
                        4.4 Inclusive Minutes &amp; Overage Charges
                      </p>
                      <ul className="list-disc pl-5 text-body space-y-1">
                        <li>Inclusive minutes reset each billing cycle</li>
                        <li>Unused minutes do not roll over</li>
                        <li>
                          If you exceed your included minute allowance, calls will continue and an
                          overage charge of <span className="font-medium">$1.15 (USD)</span> per
                          minute will apply until your next monthly renewal or plan upgrade.
                        </li>
                        <li>Overage charges are billed automatically.</li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <p className="font-semibold text-headline">4.5 Payment Method Requirement</p>
                      <p className="text-body leading-relaxed">
                        A valid credit or debit card is required to activate the Service. By
                        activating CallPilot, you authorise Swiftwave.ai to automatically charge
                        the payment method on file for:
                      </p>
                      <ul className="list-disc pl-5 text-body space-y-1">
                        <li>the upfront development fee</li>
                        <li>monthly subscription fees payable in advance</li>
                        <li>any applicable overage charges</li>
                      </ul>
                      <p className="text-body leading-relaxed">
                        Failure to maintain a valid payment method may result in call restriction
                        or service suspension.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <p className="font-semibold text-headline">4.6 Additional Costs</p>
                      <p className="text-body leading-relaxed">
                        The only additional cost payable is the purchase of one or more telephone
                        numbers (&quot;Telephony Numbers&quot;).
                      </p>
                      <ul className="list-disc pl-5 text-body space-y-1">
                        <li>Pricing shown at point of purchase</li>
                        <li>Numbers remain active only whilst paid</li>
                        <li>
                          No other hidden fees or call charges apply unless agreed in writing.
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <p className="font-semibold text-headline">4.7 Taxes</p>
                      <p className="text-body leading-relaxed">
                        All fees are exclusive of applicable taxes unless stated otherwise.
                      </p>
                    </div>
                  </div>
                </section>

                {/* 5 */}
                <section className="space-y-4">
                  <SectionTitle id="acceptable-use">5. Acceptable Use</SectionTitle>
                  <p className="text-body leading-relaxed">
                    You agree not to use CallPilot to:
                  </p>
                  <ul className="list-disc pl-5 text-body space-y-1">
                    <li>make unlawful, misleading, or deceptive calls;</li>
                    <li>breach telecommunications or privacy laws;</li>
                    <li>spam, harass, or misrepresent identity;</li>
                    <li>contact numbers on &quot;Do Not Call&quot; lists without consent;</li>
                    <li>reverse-engineer, resell, or misuse the platform.</li>
                  </ul>
                  <div className="rounded-2xl border border-border bg-card/40 p-5 sm:p-6">
                    <p className="text-body leading-relaxed">
                      You are solely responsible for obtaining lawful consent for all calls.
                    </p>
                  </div>
                </section>

                {/* 6 */}
                <section className="space-y-4">
                  <SectionTitle id="compliance">6. Telecommunications &amp; Legal Compliance</SectionTitle>
                  <p className="text-body leading-relaxed">
                    Telephone laws vary by jurisdiction. You are responsible for compliance with
                    all applicable regulations, including:
                  </p>
                  <ul className="list-disc pl-5 text-body space-y-1">
                    <li>call recording consent laws</li>
                    <li>automated calling restrictions</li>
                    <li>consumer protection laws</li>
                    <li>data protection legislation</li>
                  </ul>
                  <p className="text-body leading-relaxed">
                    Swiftwave.ai does not provide legal advice or compliance guarantees.
                  </p>
                </section>

                {/* 7 */}
                <section className="space-y-4">
                  <SectionTitle id="retention">7. Data Retention &amp; Automatic Deletion</SectionTitle>

                  <div className="rounded-2xl border border-border bg-card/40 p-5 sm:p-6 space-y-4">
                    <p className="font-semibold text-headline">No Call Recordings Stored</p>
                    <p className="text-body leading-relaxed">
                      No call recordings are stored. All call recordings and related call data are
                      automatically deleted after processing. This includes:
                    </p>
                    <ul className="list-disc pl-5 text-body space-y-1">
                      <li>call audio recordings</li>
                      <li>call transcripts</li>
                      <li>call summaries</li>
                      <li>call metadata linked to identifiable individuals</li>
                    </ul>

                    <p className="font-semibold text-headline pt-2">Customer Responsibility</p>
                    <ul className="list-disc pl-5 text-body space-y-1">
                      <li>Deleted data cannot be recovered</li>
                      <li>
                        If you require data retention text, clients can set this functionality in
                        CallPilot Platform
                      </li>
                      <li>
                        You remain responsible for your own data retention obligations outside
                        CallPilot
                      </li>
                    </ul>

                    <p className="font-semibold text-headline pt-2">Data Protection Roles</p>
                    <p className="text-body leading-relaxed">
                      Swiftwave.ai acts as a data processor. You act as the data controller for all
                      call data processed through CallPilot. Swiftwave.ai does not sell, reuse, or
                      repurpose call data.
                    </p>
                  </div>
                </section>

                {/* 8 */}
                <section className="space-y-4">
                  <SectionTitle id="ai-output">8. AI Output &amp; Accuracy</SectionTitle>
                  <p className="text-body leading-relaxed">
                    AI-generated outputs (including transcripts or summaries):
                  </p>
                  <ul className="list-disc pl-5 text-body space-y-1">
                    <li>may not be error-free</li>
                    <li>must not be relied on as the sole basis for decisions</li>
                    <li>are provided &quot;as is&quot;</li>
                  </ul>
                  <p className="text-body leading-relaxed">
                    You are responsible for reviewing AI output before reliance.
                  </p>
                </section>

                {/* 9 */}
                <section className="space-y-4">
                  <SectionTitle id="confidentiality">9. Confidentiality</SectionTitle>
                  <p className="text-body leading-relaxed">
                    Both parties agree to keep confidential information private unless disclosure is
                    required by law.
                  </p>
                </section>

                {/* 10 */}
                <section className="space-y-4">
                  <SectionTitle id="ip">10. Intellectual Property</SectionTitle>
                  <p className="text-body leading-relaxed">
                    All rights, title, and interest in CallPilot (software, AI models, branding,
                    documentation) remain the exclusive property of Swiftwave.ai.
                  </p>
                </section>

                {/* 11 */}
                <section className="space-y-4">
                  <SectionTitle id="termination">11. Suspension &amp; Termination</SectionTitle>
                  <p className="text-body leading-relaxed">
                    Access may be suspended or terminated if:
                  </p>
                  <ul className="list-disc pl-5 text-body space-y-1">
                    <li>these Terms are breached;</li>
                    <li>unlawful activity is suspected;</li>
                    <li>continued use presents legal or operational risk.</li>
                  </ul>
                  <p className="text-body leading-relaxed">Upon termination:</p>
                  <ul className="list-disc pl-5 text-body space-y-1">
                    <li>access ends immediately;</li>
                    <li>outstanding fees remain payable;</li>
                    <li>all data is permanently deleted.</li>
                  </ul>
                </section>

                {/* 12 */}
                <section className="space-y-4">
                  <SectionTitle id="availability">12. Service Availability</SectionTitle>
                  <p className="text-body leading-relaxed">
                    CallPilot is provided on an &quot;as available&quot; basis. Uninterrupted
                    service is not guaranteed.
                  </p>
                </section>

                {/* 13 */}
                <section className="space-y-4">
                  <SectionTitle id="disclaimers">13. Disclaimers</SectionTitle>
                  <p className="text-body leading-relaxed">
                    The Service is provided &quot;as is&quot;. No guarantees are made regarding
                    accuracy, outcomes, or AI behaviour.
                  </p>
                </section>

                {/* 14 */}
                <section className="space-y-4">
                  <SectionTitle id="liability">14. Limitation of Liability</SectionTitle>
                  <p className="text-body leading-relaxed">
                    Swiftwave.ai is not liable for indirect, consequential, or business losses.
                    Total liability is limited to fees paid in the six (6) months prior to the
                    claim.
                  </p>
                </section>

                {/* 15 */}
                <section className="space-y-4">
                  <SectionTitle id="indemnity">15. Indemnity</SectionTitle>
                  <p className="text-body leading-relaxed">
                    You agree to indemnify Swiftwave.ai against claims arising from:
                  </p>
                  <ul className="list-disc pl-5 text-body space-y-1">
                    <li>your use of the Service;</li>
                    <li>breach of these Terms;</li>
                    <li>violation of applicable laws.</li>
                  </ul>
                </section>

                {/* 16 */}
                <section className="space-y-4">
                  <SectionTitle id="changes">16. Changes to These Terms</SectionTitle>
                  <p className="text-body leading-relaxed">
                    We may update these Terms at any time. Continued use constitutes acceptance.
                  </p>
                </section>

                {/* 17 */}
                <section className="space-y-4">
                  <SectionTitle id="law">17. Governing Law &amp; Jurisdiction</SectionTitle>
                  <p className="text-body leading-relaxed">
                    These Terms are governed by the laws of the United Arab Emirates. Disputes
                    shall fall under the exclusive jurisdiction of the UAE courts, including the
                    DIFC Courts where applicable.
                  </p>
                </section>

                {/* 18 */}
                <section className="space-y-4">
                  <SectionTitle id="contact">18. Contact Information</SectionTitle>
                  <div className="rounded-2xl border border-border bg-card/40 p-5 sm:p-6">
                    <p className="text-body leading-relaxed">
                      Swiftwave.ai
                    </p>
                    <p className="mt-3 text-body">
                      <span className="text-muted-text">Email:</span>{" "}
                      <a
                        href="mailto:contact@swiftwave.ai"
                        className="text-body hover:text-headline underline underline-offset-4"
                      >
                        contact@swiftwave.ai
                      </a>
                    </p>
                    <p className="mt-2 text-body">
                      <span className="text-muted-text">Website:</span>{" "}
                      <a
                        href="https://swiftwave.ai"
                        target="_blank"
                        rel="noreferrer"
                        className="text-body hover:text-headline underline underline-offset-4"
                      >
                        https://swiftwave.ai
                      </a>
                    </p>
                  </div>

                  <div className="pt-4">
                    <a
                      href="#top"
                      className="inline-flex items-center gap-2 text-sm text-body hover:text-headline transition-colors"
                    >
                      <span className="inline-block">↑</span>
                      Back to top
                    </a>
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
