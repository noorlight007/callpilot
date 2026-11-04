// app/privacy-policy/page.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "./BackToTop";

const sections = [
  { id: "who-we-are", title: "1. Who We Are" },
  { id: "our-role", title: "2. Our Role" },
  { id: "information-we-process", title: "3. Information We Process" },
  { id: "how-we-handle-it", title: "4. How We Handle It" },
  { id: "ai-model-training", title: "5. AI Model Training" },
  { id: "security", title: "6. Security" },
  { id: "sub-processors", title: "7. Sub-Processors" },
  { id: "international-transfers", title: "8. International Transfers" },
  { id: "retention", title: "9. Retention" },
  { id: "legal-framework", title: "10. Legal Framework" },
  { id: "your-rights", title: "11. Your Rights" },
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
                CallPilot Privacy Policy
              </h1>
              <p className="mt-3 text-sm sm:text-base text-body">
                Swiftwave FZ-LLC (CallPilot)
              </p>
              <p className="mt-1 text-sm sm:text-base text-body">
                Version <span className="font-medium">2.0</span>
                {" | "}Effective date:{" "}
                <span className="font-medium">4 November 2026</span>
                {" | "}Review date:{" "}
                <span className="font-medium">November 2027</span>
              </p>

              <div className="mt-6 rounded-2xl border border-border bg-card/40 p-5 sm:p-6">
                <p className="text-sm sm:text-base text-body leading-relaxed">
                  This policy explains how{" "}
                  <span className="font-medium">Swiftwave FZ-LLC</span> processes
                  personal data in connection with{" "}
                  <span className="font-medium">CallPilot</span>, our AI
                  pre-qualification service for applicants and candidates.
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

            {/* Policy body */}
            <article className="lg:col-span-8 xl:col-span-9">
              <div className="max-w-3xl space-y-10">
                {/* 1 */}
                <section className="space-y-4">
                  <SectionTitle id="who-we-are">1. Who We Are</SectionTitle>
                  <p className="text-body leading-relaxed">
                    CallPilot is operated by Swiftwave FZ-LLC, a company
                    registered in Ras Al Khaimah, UAE (licence no. 47028798),
                    registered office: Compass Building, Al Shohada Road, Al
                    Hamra Industrial Zone-FZ, Ras Al Khaimah, UAE
                    (&quot;Swiftwave&quot;, &quot;we&quot;, &quot;us&quot;).
                  </p>
                </section>

                {/* 2 */}
                <section className="space-y-4">
                  <SectionTitle id="our-role">2. Our Role</SectionTitle>
                  <p className="text-body leading-relaxed">
                    For data our clients process through CallPilot (including
                    applicant and candidate data), the client is the data
                    controller and Swiftwave is the data processor, acting only
                    on the client&apos;s documented instructions under our Data
                    Processing Agreement (DPA). For our own account, billing and
                    website data, Swiftwave is the data controller.
                  </p>
                </section>

                {/* 3 */}
                <section className="space-y-4">
                  <SectionTitle id="information-we-process">
                    3. Information We Process
                  </SectionTitle>
                  <ul className="list-disc pl-5 text-body space-y-2">
                    <li>
                      <span className="font-medium text-headline">
                        Account data:
                      </span>{" "}
                      name, email, phone number, company name and login
                      credentials
                    </li>
                    <li>
                      <span className="font-medium text-headline">
                        Technical data:
                      </span>{" "}
                      IP address, device and browser details, logs and audit
                      records
                    </li>
                    <li>
                      <span className="font-medium text-headline">
                        ATS/CRM data:
                      </span>{" "}
                      applicant records accessed through the client&apos;s ATS,
                      CRM or HCM integration
                    </li>
                    <li>
                      <span className="font-medium text-headline">
                        Call data:
                      </span>{" "}
                      phone numbers, call time, duration and direction, and
                      answers given during AI calls
                    </li>
                    <li>
                      <span className="font-medium text-headline">
                        Transcripts:
                      </span>{" "}
                      only where the client enables them (off by default)
                    </li>
                    <li>
                      <span className="font-medium text-headline">
                        Documents:
                      </span>{" "}
                      ID, qualifications and other files applicants send by
                      WhatsApp, SMS upload link or email form
                    </li>
                    <li>
                      <span className="font-medium text-headline">
                        AI outputs:
                      </span>{" "}
                      call outcomes and status updates (for example
                      Pre-qualified, Unsuccessful, AI Call - No Reply)
                    </li>
                  </ul>
                </section>

                {/* 4 */}
                <section className="space-y-4">
                  <SectionTitle id="how-we-handle-it">
                    4. How We Handle It
                  </SectionTitle>

                  <div className="space-y-4">
                    <div className="rounded-2xl border border-border bg-card/40 p-5 sm:p-6">
                      <h3 className="font-semibold text-headline">
                        ATS/CRM data
                      </h3>
                      <p className="mt-2 text-body leading-relaxed">
                        Accessed only to carry out the actions the client has set
                        up. It is not copied, enriched or resold, and is not kept
                        once the action is complete.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-border bg-card/40 p-5 sm:p-6">
                      <h3 className="font-semibold text-headline">Calls</h3>
                      <p className="mt-2 text-body leading-relaxed">
                        Processed in real time. CallPilot does not record calls
                        or store audio.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-border bg-card/40 p-5 sm:p-6">
                      <h3 className="font-semibold text-headline">
                        Transcripts
                      </h3>
                      <p className="mt-2 text-body leading-relaxed">
                        Off by default. Where a client enables them, the client
                        sets the retention period and transcripts are deleted
                        automatically when it ends. The recommended maximum is
                        five days.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-border bg-card/40 p-5 sm:p-6">
                      <h3 className="font-semibold text-headline">Documents</h3>
                      <p className="mt-2 text-body leading-relaxed">
                        Applicants reply in the WhatsApp chat with photos or
                        files, use a secure SMS upload link, or use the email
                        upload form. Documents are passed directly to the
                        applicant&apos;s record in the client&apos;s ATS.
                        Documents are not kept on the CallPilot platform once
                        transferred.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-border bg-card/40 p-5 sm:p-6">
                      <h3 className="font-semibold text-headline">
                        Call outcomes
                      </h3>
                      <p className="mt-2 text-body leading-relaxed">
                        Written back to the client&apos;s ATS. The client&apos;s
                        Talent Team remains responsible for all hiring decisions
                        and for reviewing outcomes.
                      </p>
                    </div>
                  </div>
                </section>

                {/* 5 */}
                <section className="space-y-4">
                  <SectionTitle id="ai-model-training">
                    5. AI Model Training
                  </SectionTitle>
                  <p className="text-body leading-relaxed">
                    Client data, including applicant information, call responses,
                    transcripts and uploaded documents, is not used to train or
                    fine-tune AI models by Swiftwave or its sub-processors.
                  </p>
                </section>

                {/* 6 */}
                <section className="space-y-4">
                  <SectionTitle id="security">6. Security</SectionTitle>
                  <ul className="list-disc pl-5 text-body space-y-1">
                    <li>Encryption in transit (HTTPS/TLS) and at rest</li>
                    <li>
                      Role-based access controls and restricted administrative
                      privileges
                    </li>
                    <li>
                      Secure cloud infrastructure with firewalls and network
                      controls
                    </li>
                    <li>Monitoring, logging and audit trails</li>
                    <li>
                      Breaches notified to affected clients without undue delay,
                      and to regulators where required by law
                    </li>
                  </ul>
                </section>

                {/* 7 */}
                <section className="space-y-4">
                  <SectionTitle id="sub-processors">
                    7. Sub-Processors
                  </SectionTitle>
                  <p className="text-body leading-relaxed">
                    We use sub-processors for cloud hosting, AI processing,
                    telephony, SMS and WhatsApp messaging (Meta WhatsApp Business
                    Platform). All are contractually bound to data protection
                    obligations. A current list is available on request from{" "}
                    <a
                      href="mailto:contact@swiftwave.ai"
                      className="text-body hover:text-headline underline underline-offset-4"
                    >
                      contact@swiftwave.ai
                    </a>
                    .
                  </p>
                </section>

                {/* 8 */}
                <section className="space-y-4">
                  <SectionTitle id="international-transfers">
                    8. International Transfers
                  </SectionTitle>
                  <p className="text-body leading-relaxed">
                    Data may be processed outside the UAE. Where data originates
                    in the UK or EU, transfers are protected by appropriate
                    safeguards: the UK International Data Transfer Agreement or
                    UK Addendum, and the EU Standard Contractual Clauses.
                  </p>
                </section>

                {/* 9 */}
                <section className="space-y-4">
                  <SectionTitle id="retention">9. Retention</SectionTitle>
                  <ul className="list-disc pl-5 text-body space-y-1">
                    <li>
                      Account data: for the length of the contract and a
                      reasonable period afterwards, as required by law
                    </li>
                    <li>
                      Transcripts: as set by the client, recommended maximum five
                      days
                    </li>
                    <li>
                      On termination: client data is deleted or returned in line
                      with the contract
                    </li>
                  </ul>
                </section>

                {/* 10 */}
                <section className="space-y-4">
                  <SectionTitle id="legal-framework">
                    10. Legal Framework
                  </SectionTitle>
                  <p className="text-body leading-relaxed">
                    This policy is governed by the UAE Personal Data Protection
                    Law (Federal Decree Law No. 45 of 2021) and is designed to
                    meet the requirements of the EU GDPR and UK GDPR for clients
                    in those regions.
                  </p>
                </section>

                {/* 11 */}
                <section className="space-y-4">
                  <SectionTitle id="your-rights">11. Your Rights</SectionTitle>
                  <p className="text-body leading-relaxed">
                    Subject to applicable law, you may request access to,
                    correction, deletion or restriction of your personal data,
                    object to processing, or withdraw consent. Where we process
                    data for a client, we will pass your request to that client
                    and assist them in responding.
                  </p>

                  <div className="rounded-2xl border border-border bg-card/40 p-5 sm:p-6">
                    <p className="text-body">
                      <span className="text-muted-text">Contact:</span>{" "}
                      <a
                        href="mailto:contact@swiftwave.ai"
                        className="text-body hover:text-headline underline underline-offset-4"
                      >
                        contact@swiftwave.ai
                      </a>
                    </p>
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
