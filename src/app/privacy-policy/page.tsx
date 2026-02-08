"use client";
// app/privacy-policy/page.tsx
// import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "./BackToTop";

// export const metadata: Metadata = {
//   title: "Privacy Policy | Swiftwave",
//   description: "Swiftwave Privacy Policy (Last updated: 5 February 2026).",
// };

const sections = [
  { id: "scope", title: "1. Scope & Application" },
  { id: "who-we-are", title: "2. Who We Are" },
  { id: "data-we-collect", title: "3. Personal Data We Collect" },
  { id: "how-we-use", title: "4. How We Use Personal Data" },
  { id: "ai-processing", title: "5. AI Processing & Automated Systems" },
  { id: "lawful-basis", title: "6. Lawful Basis & Global Data Protection Alignment" },
  { id: "call-consent", title: "7. Call Consent & Customer Responsibility" },
  { id: "call-recording", title: "8. Call Recording & Call Text Handling" },
  { id: "data-sharing", title: "9. Data Sharing, CRM Data Handling & Sub-Processors" },
  { id: "intl-transfers", title: "10. International Data Transfers" },
  { id: "retention", title: "11. Data Retention" },
  { id: "security", title: "12. Data Security" },
  { id: "rights", title: "13. Individual Rights" },
  { id: "children", title: "14. Children's Data" },
  { id: "changes", title: "15. Changes to This Policy" },
  { id: "contact", title: "16. Contact Information" },
];

function SectionTitle({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
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




export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-background">
        {/* Header */}
        <div className="border-b border-border pt-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
            <div className="">
                <p className="text-sm text-muted-text mb-2">Legal</p>
                <h1 className="text-3xl sm:text-4xl font-bold text-headline tracking-tight">
                Swiftwave Privacy Policy
                </h1>
                <p className="mt-3 text-sm sm:text-base text-body">
                Last updated: <span className="font-medium">5 February 2026</span>
                </p>

                <div className="mt-6 rounded-2xl border border-border bg-card/40 p-5 sm:p-6">
                <p className="text-sm sm:text-base text-body leading-relaxed">
                    This Privacy Policy explains how <span className="font-medium">Swiftwave FZ-LLC</span>, United Arab Emirates
                    (&quot;Swiftwave&quot;, &quot;we&quot;, &quot;us&quot;) collects, uses, stores, and protects personal data
                    in connection with its websites, platforms, and AI-powered products, including{" "}
                    <span className="font-medium">CallPilot.pro</span>
                </p>
                </div>
            </div>
            </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
            <div className="grid grid-cols-2 lg:grid-cols-12 gap-10">
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

            {/* Policy body */}
            <article className="lg:col-span-8 xl:col-span-9">
                <div className="max-w-3xl space-y-10">
                {/* 1 */}
                <section className="space-y-4">
                    <SectionTitle id="scope">1. Scope &amp; Application</SectionTitle>
                    <p className="text-body leading-relaxed">
                    This Privacy Policy applies to personal data processed through:
                    </p>
                    <ul className="list-disc pl-5 text-body space-y-1">
                    <li>Swiftwave FZ-LLC</li>
                    <li>The Swiftwave website</li>
                    <li>The Swiftwave platform</li>
                    <li>All AI modules, services, and applications operated by Swiftwave</li>
                    <li>CallPilot.pro (a Swiftwave product)</li>
                    <li>The CallPilot website</li>
                    <li>The CallPilot platform</li>
                    <li>AI-powered calling functionality, including CallPilot AI Phone Call</li>
                    <li>Related communication, automation, and analytics services</li>
                    </ul>

                    <p className="text-body leading-relaxed">
                    This policy covers personal data collected via:
                    </p>
                    <ul className="list-disc pl-5 text-body space-y-1">
                    <li>Websites and web applications</li>
                    <li>Platforms, dashboards, and APIs</li>
                    <li>
                        Customer relationship management (CRM) systems, including data synced, imported, or integrated from
                        third-party CRMs authorised by customers
                    </li>
                    <li>Integrations with third-party systems, tools, and services connected by customers</li>
                    <li>
                        AI-driven interactions, including CallPilot.pro AI Phone Call, call transcripts, call text, and
                        AI-generated outputs
                    </li>
                    </ul>
                </section>

                {/* 2 */}
                <section className="space-y-4">
                    <SectionTitle id="who-we-are">2. Who We Are</SectionTitle>
                    <div className="rounded-2xl border border-border bg-card/40 p-5 sm:p-6">
                    <ul className="text-body space-y-2">
                        <li>
                        <span className="font-medium text-headline">Company:</span> Swiftwave FZ-LLC
                        </li>
                        <li>
                        <span className="font-medium text-headline">Jurisdiction:</span> United Arab Emirates
                        </li>
                        <li>
                        <span className="font-medium text-headline">Products:</span> CallPilot.pro and other Swiftwave AI modules
                        </li>
                    </ul>
                    </div>
                    <p className="text-body leading-relaxed">
                    Swiftwave acts as a Data Controller and/or Data Processor, depending on the nature of the service and
                    the contractual relationship with customers.
                    </p>
                </section>

                {/* 3 */}
                <section className="space-y-4">
                    <SectionTitle id="data-we-collect">3. Personal Data We Collect</SectionTitle>

                    <div className="space-y-6">
                    <div className="rounded-2xl border border-border bg-card/40 p-5 sm:p-6">
                        <h3 className="font-semibold text-headline">a) Identity &amp; Contact Data</h3>
                        <ul className="mt-3 list-disc pl-5 text-body space-y-1">
                        <li>Name</li>
                        <li>Email address</li>
                        <li>Phone number</li>
                        <li>Company name</li>
                        <li>User account credentials</li>
                        </ul>
                    </div>

                    <div className="rounded-2xl border border-border bg-card/40 p-5 sm:p-6">
                        <h3 className="font-semibold text-headline">b) Technical &amp; Usage Data</h3>
                        <ul className="mt-3 list-disc pl-5 text-body space-y-1">
                        <li>IP address</li>
                        <li>Device and browser information</li>
                        <li>Log files and audit records</li>
                        <li>Platform usage and interaction data</li>
                        </ul>
                    </div>

                    <div className="rounded-2xl border border-border bg-card/40 p-5 sm:p-6">
                        <h3 className="font-semibold text-headline">c) CRM &amp; Customer-Provided Data</h3>
                        <ul className="mt-3 list-disc pl-5 text-body space-y-1">
                        <li>Personal data stored in customer CRM systems</li>
                        <li>Data imported, synced, or transmitted via APIs or integrations</li>
                        </ul>
                        <p className="mt-3 text-body leading-relaxed">
                        Swiftwave processes CRM data only transiently and does not store or retain CRM personal data.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-border bg-card/40 p-5 sm:p-6">
                        <h3 className="font-semibold text-headline">d) CallPilot.pro AI Phone Call Data</h3>
                        <ul className="mt-3 list-disc pl-5 text-body space-y-1">
                        <li>Phone numbers</li>
                        <li>Call metadata (time, duration, direction)</li>
                        </ul>
                        <p className="mt-3 text-body leading-relaxed">
                        Call recordings, call transcripts, and call text are not stored by Swiftwave.
                        </p>
                    </div>
                    </div>
                </section>

                {/* 4 */}
                <section className="space-y-4">
                    <SectionTitle id="how-we-use">4. How We Use Personal Data</SectionTitle>
                    <p className="text-body leading-relaxed">Personal data is used to:</p>
                    <ul className="list-disc pl-5 text-body space-y-1">
                    <li>Operate and deliver Swiftwave and CallPilot.pro services</li>
                    <li>Enable AI-powered functionality, including CallPilot.pro AI Phone Call</li>
                    <li>Execute customer-initiated actions using CRM-sourced data</li>
                    <li>Maintain platform security, reliability, and performance</li>
                    <li>Provide customer support and account management</li>
                    <li>Improve and develop products and features</li>
                    <li>Comply with legal and regulatory obligations</li>
                    <li>Detect, prevent, and investigate misuse or unlawful activity</li>
                    </ul>
                </section>

                {/* 5 */}
                <section className="space-y-4">
                    <SectionTitle id="ai-processing">5. AI Processing &amp; Automated Systems</SectionTitle>
                    <p className="text-body leading-relaxed">
                    Swiftwave products use artificial intelligence and automated systems to:
                    </p>
                    <ul className="list-disc pl-5 text-body space-y-1">
                    <li>Conduct or assist communications</li>
                    <li>Analyse speech and text</li>
                    <li>Generate summaries, insights, classifications, or recommendations</li>
                    </ul>
                    <p className="text-body leading-relaxed">
                    Human oversight mechanisms are in place. Swiftwave does not make legal, employment, or compliance
                    decisions on behalf of customers.
                    </p>
                </section>

                {/* 6 */}
                <section className="space-y-4">
                    <SectionTitle id="lawful-basis">6. Lawful Basis &amp; Global Data Protection Alignment</SectionTitle>
                    <p className="text-body leading-relaxed">
                    Personal data is processed in accordance with the UAE Personal Data Protection Law (PDPL) and is designed
                    to align with internationally recognised data protection and privacy frameworks, including:
                    </p>
                    <ul className="list-disc pl-5 text-body space-y-1">
                    <li>EU General Data Protection Regulation (GDPR)</li>
                    <li>UK GDPR</li>
                    <li>Other comparable national and regional data protection and privacy laws worldwide</li>
                    </ul>

                    <p className="text-body leading-relaxed">
                    Swiftwave applies core privacy principles common to these frameworks, including:
                    </p>
                    <ul className="list-disc pl-5 text-body space-y-1">
                    <li>Lawfulness, fairness, and transparency</li>
                    <li>Purpose limitation</li>
                    <li>Data minimisation</li>
                    <li>Storage limitation</li>
                    <li>Security and confidentiality</li>
                    <li>Accountability</li>
                    </ul>

                    <p className="text-body leading-relaxed">
                    Due to the architecture of Swiftwave products — including automatic deletion of call recordings, non-retention
                    of CRM personal data, and no storage of call text — Swiftwave&apos;s services are designed to support compliance
                    across multiple jurisdictions.
                    </p>

                    <div className="rounded-2xl border border-border bg-card/40 p-5 sm:p-6">
                    <p className="text-body leading-relaxed">
                        Where Swiftwave acts as a data processor, customers remain responsible for:
                    </p>
                    <ul className="mt-3 list-disc pl-5 text-body space-y-1">
                        <li>Determining lawful processing purposes</li>
                        <li>Providing required notices</li>
                        <li>Obtaining any necessary consents</li>
                        <li>Ensuring compliance with local laws applicable to their use case</li>
                    </ul>
                    </div>
                </section>

                {/* 7 */}
                <section className="space-y-4">
                    <SectionTitle id="call-consent">7. Call Consent &amp; Customer Responsibility</SectionTitle>
                    <p className="text-body leading-relaxed">
                    Customers using CallPilot.pro AI Phone Call functionality are solely responsible for:
                    </p>
                    <ul className="list-disc pl-5 text-body space-y-1">
                    <li>Providing lawful call notices</li>
                    <li>Obtaining any required consent from call participants</li>
                    <li>Ensuring CRM data is lawfully collected and shared</li>
                    <li>Complying with applicable telecoms, privacy, and data protection laws</li>
                    </ul>
                    <p className="text-body leading-relaxed">
                    Swiftwave provides the technology platform and does not control the legality or purpose of individual
                    customer communications.
                    </p>
                </section>

                {/* 8 */}
                <section className="space-y-4">
                    <SectionTitle id="call-recording">8. Call Recording &amp; Call Text Handling</SectionTitle>
                    <ul className="list-disc pl-5 text-body space-y-1">
                    <li>Swiftwave does not retain call recordings at any time.</li>
                    <li>Swiftwave does not store call transcripts or call text.</li>
                    </ul>
                    <p className="text-body leading-relaxed">
                    Any temporary availability of call text or transcripts for quality review is customer-controlled, occurs
                    outside of Swiftwave&apos;s data storage, and is limited to a recommended maximum review period of five (5) days.
                    </p>
                </section>

                {/* 9 */}
                <section className="space-y-4">
                    <SectionTitle id="data-sharing">
                    9. Data Sharing, CRM Data Handling &amp; Sub-Processors
                    </SectionTitle>
                    <p className="text-body leading-relaxed">
                    Swiftwave processes personal data only as necessary to provide its services and strictly in accordance
                    with customer instructions.
                    </p>

                    <div className="rounded-2xl border border-border bg-card/40 p-5 sm:p-6 space-y-3">
                    <h3 className="font-semibold text-headline">CRM Data Handling (Important Clarification)</h3>
                    <ul className="list-disc pl-5 text-body space-y-1">
                        <li>Swiftwave does not store, maintain, or retain personal data originating from customer CRM systems.</li>
                        <li>CRM personal data is accessed transiently and securely for the sole purpose of executing customer-initiated actions.</li>
                        <li>Once the relevant action is completed, CRM personal data is not persisted within Swiftwave systems.</li>
                        <li>Swiftwave does not copy, replicate, enrich, resell, or independently use CRM personal data.</li>
                    </ul>
                    </div>

                    <div className="rounded-2xl border border-border bg-card/40 p-5 sm:p-6 space-y-3">
                    <h3 className="font-semibold text-headline">Sub-Processors</h3>
                    <p className="text-body leading-relaxed">
                        Personal data may be processed by vetted third-party sub-processors solely to support service delivery, including:
                    </p>
                    <ul className="list-disc pl-5 text-body space-y-1">
                        <li>Cloud infrastructure providers</li>
                        <li>Security, monitoring, and logging services</li>
                        <li>AI and telecommunications service providers</li>
                    </ul>
                    <p className="text-body leading-relaxed">
                        All sub-processors are contractually required to:
                    </p>
                    <ul className="list-disc pl-5 text-body space-y-1">
                        <li>Process data only on Swiftwave&apos;s instructions</li>
                        <li>Apply appropriate security measures</li>
                        <li>Comply with applicable data protection laws</li>
                    </ul>
                    <p className="text-body leading-relaxed font-medium">
                        Swiftwave does not sell personal data.
                    </p>
                    </div>
                </section>

                {/* 10 */}
                <section className="space-y-4">
                    <SectionTitle id="intl-transfers">10. International Data Transfers</SectionTitle>
                    <p className="text-body leading-relaxed">
                    Personal data may be processed outside the UAE where necessary to provide services. Appropriate safeguards
                    are applied in accordance with UAE PDPL and GDPR-aligned standards.
                    </p>
                </section>

                {/* 11 */}
                <section className="space-y-4">
                    <SectionTitle id="retention">11. Data Retention</SectionTitle>
                    <p className="text-body leading-relaxed">
                    Personal data is retained only for as long as necessary to:
                    </p>
                    <ul className="list-disc pl-5 text-body space-y-1">
                    <li>Provide services</li>
                    <li>Meet contractual, legal, or regulatory obligations</li>
                    </ul>
                    <p className="text-body leading-relaxed">
                    CRM personal data is not retained by Swiftwave. Call recordings are not retained. Call text and transcripts
                    are not stored by Swiftwave.
                    </p>
                </section>

                {/* 12 */}
                <section className="space-y-4">
                    <SectionTitle id="security">12. Data Security</SectionTitle>
                    <p className="text-body leading-relaxed">
                    Swiftwave implements appropriate technical and organisational measures, including:
                    </p>
                    <ul className="list-disc pl-5 text-body space-y-1">
                    <li>Encryption in transit and at rest</li>
                    <li>Role-based access controls</li>
                    <li>Secure cloud infrastructure</li>
                    <li>Monitoring, logging, and audit trails</li>
                    </ul>
                </section>

                {/* 13 */}
                <section className="space-y-4">
                    <SectionTitle id="rights">13. Individual Rights</SectionTitle>
                    <p className="text-body leading-relaxed">
                    Subject to applicable law, individuals may request:
                    </p>
                    <ul className="list-disc pl-5 text-body space-y-1">
                    <li>Access to personal data</li>
                    <li>Correction of inaccurate data</li>
                    <li>Deletion or restriction of processing</li>
                    <li>Withdrawal of consent where applicable</li>
                    </ul>
                </section>

                {/* 14 */}
                <section className="space-y-4">
                    <SectionTitle id="children">14. Children&apos;s Data</SectionTitle>
                    <p className="text-body leading-relaxed">
                    Swiftwave products are not intended for use by children. We do not knowingly collect personal data from minors.
                    </p>
                </section>

                {/* 15 */}
                <section className="space-y-4">
                    <SectionTitle id="changes">15. Changes to This Policy</SectionTitle>
                    <p className="text-body leading-relaxed">
                    This Privacy Policy may be updated from time to time. Continued use of Swiftwave or CallPilot.pro services
                    constitutes acceptance of the updated policy.
                    </p>
                </section>

                {/* 16 */}
                <section className="space-y-4">
                    <SectionTitle id="contact">16. Contact Information</SectionTitle>

                    <div className="rounded-2xl border border-border bg-card/40 p-5 sm:p-6">
                    <p className="text-body leading-relaxed">
                        For privacy or data protection enquiries, you may contact:
                    </p>

                    <div className="mt-4 space-y-2 text-body">
                        <p className="font-medium text-headline">Swiftwave FZ-LLC</p>
                        <p>
                        <span className="text-muted-text">Registered office:</span> United Arab Emirates
                        </p>
                        <p>
                        <span className="text-muted-text">Registered address:</span> As recorded with the relevant UAE Free Zone Authority
                        </p>
                        <p>
                        <span className="text-muted-text">Registration number:</span> 47028798
                        </p>
                        <p>
                        <span className="text-muted-text">Email:</span>{" "}
                        <a
                            href="mailto:contact@swiftwave.ai"
                            className="text-body hover:text-headline underline underline-offset-4"
                        >
                            contact@swiftwave.ai
                        </a>
                        </p>
                    </div>
                    </div>

                    <div className="pt-4">
                        <BackToTop />
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