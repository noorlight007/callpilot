"use client";
// app/terms-of-service/page.tsx

import Header from "@/components/Header";
import Footer from "@/components/Footer";



const sections = [
  { id: "entity", title: "1. Legal Entity & Ownership" },
  { id: "scope", title: "2. Scope of These Terms" },
  { id: "use", title: "3. Use of Services" },
  { id: "ai", title: "4. AI Services & CallPilot" },
  { id: "privacy", title: "5. Data Protection & Privacy (GDPR Alignment)" },
  { id: "retention", title: "6. Data Retention & Call Data" },
  { id: "ip", title: "7. Intellectual Property" },
  { id: "third-party", title: "8. Third-Party Integrations" },
  { id: "availability", title: "9. Availability & Changes" },
  { id: "liability", title: "10. Limitation of Liability" },
  { id: "termination", title: "11. Termination" },
  { id: "law", title: "12. Governing Law" },
  { id: "contact", title: "13. Contact" },
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
            <div className="">
              <p className="text-sm text-muted-text mb-2">Legal</p>
              <h1 className="text-3xl sm:text-4xl font-bold text-headline tracking-tight">
                Terms &amp; Conditions
              </h1>
              <p className="mt-3 text-sm sm:text-base text-body">
                Last updated:{" "}
                <span className="font-medium">6 February 2026</span>
              </p>

              <div className="mt-6 rounded-2xl border border-border bg-card/40 p-5 sm:p-6">
                <p className="text-sm sm:text-base text-body leading-relaxed">
                  These Terms &amp; Conditions (&quot;Terms&quot;) govern access to
                  and use of the websites, platforms, software, and services
                  operated by <span className="font-medium">Swiftwave FZ-LLC</span>,
                  including the CallPilot AI Phone Call service (&quot;CallPilot.pro&quot;).
                </p>
                <p className="mt-3 text-sm sm:text-base text-body leading-relaxed">
                  By accessing or using the Swiftwave website, Swiftwave platform,
                  CallPilot website, or CallPilot.pro platform, you agree to be bound
                  by these Terms.
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
                  <p className="text-sm font-semibold text-headline">
                    On this page
                  </p>
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
                  <SectionTitle id="entity">1. Legal Entity &amp; Ownership</SectionTitle>
                  <div className="rounded-2xl border border-border bg-card/40 p-5 sm:p-6">
                    <p className="text-body leading-relaxed">
                      Swiftwave FZ-LLC is a company incorporated in the United Arab Emirates.
                      <span className="font-medium"> Registration Number: 47028798</span>
                    </p>
                  </div>

                  <p className="text-body leading-relaxed">
                    Swiftwave FZ-LLC owns and operates:
                  </p>
                  <ul className="list-disc pl-5 text-body space-y-1">
                    <li>The Swiftwave website and platform</li>
                    <li>All associated products and services, including CallPilot.pro</li>
                  </ul>
                  <p className="text-body leading-relaxed">
                    CallPilot.pro is a brand and AI phone call product of Swiftwave FZ-LLC
                    and does not operate as a separate legal entity.
                  </p>
                </section>

                {/* 2 */}
                <section className="space-y-4">
                  <SectionTitle id="scope">2. Scope of These Terms</SectionTitle>
                  <p className="text-body leading-relaxed">These Terms apply to:</p>
                  <ul className="list-disc pl-5 text-body space-y-1">
                    <li>The Swiftwave WEBSITE &amp; PLATFORM</li>
                    <li>The CallPilot WEBSITE &amp; PLATFORM</li>
                    <li>All dashboards, APIs, integrations, trials, and production services</li>
                    <li>All AI-driven functionality, including AI phone calls</li>
                  </ul>
                  <p className="text-body leading-relaxed">
                    References to &quot;Swiftwave&quot;, &quot;we&quot;, &quot;us&quot;,
                    or &quot;our&quot; include Swiftwave FZ-LLC and all products operated
                    by it, including CallPilot.pro.
                  </p>
                </section>

                {/* 3 */}
                <section className="space-y-4">
                  <SectionTitle id="use">3. Use of Services</SectionTitle>
                  <p className="text-body leading-relaxed">You agree to:</p>
                  <ul className="list-disc pl-5 text-body space-y-1">
                    <li>Use the services only for lawful business purposes</li>
                    <li>Provide accurate and up-to-date information</li>
                    <li>Comply with all applicable laws and regulations</li>
                  </ul>

                  <p className="text-body leading-relaxed">You must not:</p>
                  <ul className="list-disc pl-5 text-body space-y-1">
                    <li>Misuse or interfere with the services</li>
                    <li>Attempt unauthorised access to systems or data</li>
                    <li>Use the services for unlawful, abusive, or fraudulent activity</li>
                  </ul>
                </section>

                {/* 4 */}
                <section className="space-y-4">
                  <SectionTitle id="ai">4. AI Services &amp; CallPilot.pro</SectionTitle>
                  <p className="text-body leading-relaxed">
                    CallPilot.pro provides AI-driven phone call functionality, including automated
                    and AI-assisted voice interactions.
                  </p>
                  <p className="text-body leading-relaxed">You acknowledge that:</p>
                  <ul className="list-disc pl-5 text-body space-y-1">
                    <li>AI outputs are generated algorithmically and may require human review</li>
                    <li>Swiftwave does not provide legal, employment, or professional advice</li>
                    <li>You are responsible for how AI outputs are used within your business</li>
                  </ul>
                  <p className="text-body leading-relaxed">
                    Swiftwave may update, improve, or modify AI functionality at any time.
                  </p>
                </section>

                {/* 5 */}
                <section className="space-y-4">
                  <SectionTitle id="privacy">
                    5. Data Protection &amp; Privacy (GDPR Alignment)
                  </SectionTitle>
                  <p className="text-body leading-relaxed">
                    Swiftwave FZ-LLC processes personal data in accordance with:
                  </p>
                  <ul className="list-disc pl-5 text-body space-y-1">
                    <li>UAE Personal Data Protection Law (PDPL)</li>
                    <li>The principles of the EU GDPR and UK GDPR</li>
                    <li>Comparable data protection and privacy laws worldwide</li>
                  </ul>
                  <p className="text-body leading-relaxed">
                    Swiftwave aligns its practices with data minimisation, security, transparency,
                    and deletion-by-design.
                  </p>
                  <div className="rounded-2xl border border-border bg-card/40 p-5 sm:p-6">
                    <p className="text-body leading-relaxed">
                      Full details are set out in the Privacy Policy, Data Protection Policy,
                      and Data Retention &amp; Deletion Policy, which form part of these Terms.
                    </p>
                  </div>
                </section>

                {/* 6 */}
                <section className="space-y-4">
                  <SectionTitle id="retention">6. Data Retention &amp; Call Data</SectionTitle>
                  <ul className="list-disc pl-5 text-body space-y-1">
                    <li>Call recordings are not retained by default and are deleted automatically</li>
                    <li>Call text / transcripts are not stored unless enabled by the customer</li>
                    <li>
                      Where enabled, call text may be retained for a recommended maximum of 5 days
                      for quality review
                    </li>
                    <li>Swiftwave does not store CRM personal data</li>
                    <li>Customers control all configuration and retention settings</li>
                  </ul>
                </section>

                {/* 7 */}
                <section className="space-y-4">
                  <SectionTitle id="ip">7. Intellectual Property</SectionTitle>
                  <p className="text-body leading-relaxed">
                    All intellectual property rights in:
                  </p>
                  <ul className="list-disc pl-5 text-body space-y-1">
                    <li>The Swiftwave platform</li>
                    <li>CallPilot.pro platform</li>
                    <li>AI models, code, interfaces, and documentation</li>
                  </ul>
                  <p className="text-body leading-relaxed">
                    remain the exclusive property of Swiftwave FZ-LLC.
                  </p>
                  <p className="text-body leading-relaxed">
                    You are granted a limited, non-exclusive, non-transferable right to use the
                    services during your authorised access period.
                  </p>
                </section>

                {/* 8 */}
                <section className="space-y-4">
                  <SectionTitle id="third-party">8. Third-Party Integrations</SectionTitle>
                  <p className="text-body leading-relaxed">
                    Swiftwave services may integrate with third-party systems (including CRMs and
                    telephony providers).
                  </p>
                  <p className="text-body leading-relaxed">Swiftwave is not responsible for:</p>
                  <ul className="list-disc pl-5 text-body space-y-1">
                    <li>Third-party services or platforms</li>
                    <li>Their availability, security, or performance</li>
                  </ul>
                  <p className="text-body leading-relaxed">
                    Use of third-party services is governed by their own terms.
                  </p>
                </section>

                {/* 9 */}
                <section className="space-y-4">
                  <SectionTitle id="availability">9. Availability &amp; Changes</SectionTitle>
                  <p className="text-body leading-relaxed">Swiftwave may:</p>
                  <ul className="list-disc pl-5 text-body space-y-1">
                    <li>Modify or update services</li>
                    <li>Suspend access for maintenance or security reasons</li>
                    <li>Introduce or retire features</li>
                  </ul>
                  <p className="text-body leading-relaxed">
                    No guarantee is given that services will always be uninterrupted or error-free.
                  </p>
                </section>

                {/* 10 */}
                <section className="space-y-4">
                  <SectionTitle id="liability">10. Limitation of Liability</SectionTitle>
                  <p className="text-body leading-relaxed">
                    To the maximum extent permitted by law:
                  </p>
                  <ul className="list-disc pl-5 text-body space-y-1">
                    <li>Swiftwave is not liable for indirect or consequential losses</li>
                    <li>Swiftwave&apos;s total liability is limited to fees paid for the relevant services</li>
                    <li>Nothing in these Terms limits liability that cannot be excluded under applicable law</li>
                  </ul>
                </section>

                {/* 11 */}
                <section className="space-y-4">
                  <SectionTitle id="termination">11. Termination</SectionTitle>
                  <p className="text-body leading-relaxed">
                    Swiftwave may suspend or terminate access where:
                  </p>
                  <ul className="list-disc pl-5 text-body space-y-1">
                    <li>These Terms are breached</li>
                    <li>Use presents legal, security, or compliance risk</li>
                  </ul>
                  <p className="text-body leading-relaxed">
                    On termination, data handling follows the applicable data retention and deletion policies.
                  </p>
                </section>

                {/* 12 */}
                <section className="space-y-4">
                  <SectionTitle id="law">12. Governing Law</SectionTitle>
                  <p className="text-body leading-relaxed">
                    These Terms are governed by the laws of the United Arab Emirates, unless otherwise agreed in writing.
                  </p>
                </section>

                {/* 13 */}
                <section className="space-y-4">
                  <SectionTitle id="contact">13. Contact</SectionTitle>
                  <div className="rounded-2xl border border-border bg-card/40 p-5 sm:p-6">
                    <p className="text-body leading-relaxed">
                      For questions regarding these Terms or Swiftwave services:
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
