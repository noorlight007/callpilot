// app/policies-and-compliance/page.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sections = [
  { id: "data-protection-policy", title: "CallPilot Data Protection Policy" },
  { id: "dpa", title: "CallPilot Data Processing Agreement (DPA)" },
  { id: "sip", title: "Security & Infrastructure Policy" },
  { id: "atrp", title: "AI Transparency & Responsible Use Policy" },
  { id: "aup", title: "Acceptable Use Policy" },
  { id: "chp", title: "Call Handling Policy" },
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
      className="scroll-mt-28 text-lg sm:text-xl font-semibold text-headline tracking-tight"
    >
      {children}
    </h2>
  );
}

function SubTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-sm sm:text-base font-semibold text-headline tracking-tight">
      {children}
    </h3>
  );
}

function SmallList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-5 space-y-1 text-sm text-body leading-relaxed">
      {items.map((it) => (
        <li key={it}>{it}</li>
      ))}
    </ul>
  );
}

export default function PoliciesAndCompliancePage() {
  return (
    <>
      <Header />

      <main id="top" className="bg-background">
        {/* Header */}
        <div className="border-b border-border pt-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
            <p className="text-xs text-muted-text mb-2">Legal</p>
            <h1 className="text-2xl sm:text-3xl font-bold text-headline tracking-tight">
              Policies &amp; Compliance
            </h1>
            <p className="mt-3 text-sm text-body leading-relaxed max-w-3xl">
              This page includes key policies and agreements related to CallPilot’s
              data protection and processing practices.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: Sections */}
            <aside className="lg:col-span-4 xl:col-span-3">
              <div className="lg:sticky lg:top-24">
                <div className="rounded-2xl border border-border bg-card/40 p-4 sm:p-5">
                  <p className="text-sm font-semibold text-headline">Sections</p>
                  <nav className="mt-3">
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

                  <div className="mt-4 pt-4 border-t border-border">
                    <a
                      href="#top"
                      className="text-xs text-muted-text hover:text-headline transition-colors"
                    >
                      ↑ Back to top
                    </a>
                  </div>
                </div>
              </div>
            </aside>

            {/* Right: Content */}
            <article className="lg:col-span-8 xl:col-span-9">
              <div className="max-w-4xl space-y-10">
                {/* =======================
                    SECTION 1: Data Protection Policy
                   ======================= */}
                <section className="space-y-4">
                  <SectionTitle id="data-protection-policy">
                    CallPilot Data Protection Policy
                  </SectionTitle>

                  <div className="rounded-2xl border border-border bg-card/40 p-4 sm:p-5 space-y-3">
                    <p className="text-sm text-body leading-relaxed">
                      CallPilot is a trading name and product of Swiftwave FZ-LLC, a
                      company registered in Ras Al Khaimah, United Arab Emirates.
                    </p>

                    <div className="text-sm text-body leading-relaxed">
                      <p className="font-medium text-headline">Swiftwave FZ-LLC</p>
                      <p>RAKEZ Business Zone</p>
                      <p>Ras Al Khaimah</p>
                      <p>United Arab Emirates</p>
                    </div>

                    <p className="text-sm text-body">
                      <span className="text-muted-text">Effective Date:</span>{" "}
                      <span className="font-medium">11 February 2026</span>
                    </p>
                  </div>

                  {/* 1 */}
                  <div className="space-y-2">
                    <SubTitle>1. Purpose</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      This Data Protection Policy explains how Swiftwave FZ-LLC, operating
                      under the brand name &quot;CallPilot&quot;, protects and manages personal
                      data processed through its AI-powered voice communication platform.
                    </p>
                    <p className="text-sm text-body leading-relaxed">
                      Swiftwave FZ-LLC is committed to complying with the UAE Personal Data
                      Protection Law (Federal Decree Law No. 45 of 2021) and other applicable
                      data protection regulations.
                    </p>
                  </div>

                  {/* 2 */}
                  <div className="space-y-2">
                    <SubTitle>2. Scope</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      This policy applies to:
                    </p>
                    <SmallList
                      items={[
                        "Client account data",
                        "Authorised user information",
                        "Contact data uploaded by clients",
                        "Technical and usage data",
                        "Optional transcript data (where enabled by the client)",
                      ]}
                    />
                  </div>

                  {/* 3 */}
                  <div className="space-y-2">
                    <SubTitle>3. Data Protection Roles</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      Depending on the processing context:
                    </p>
                    <SmallList
                      items={[
                        "CallPilot acts as a Data Processor when processing data on behalf of clients.",
                        "Swiftwave FZ-LLC acts as a Data Controller for its own operational, administrative, and compliance-related data.",
                        "Clients are responsible for ensuring they have a lawful basis for submitting personal data to the platform.",
                      ]}
                    />
                  </div>

                  {/* 4 */}
                  <div className="space-y-2">
                    <SubTitle>4. Categories of Data Processed</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      CallPilot processes the following categories of personal data:
                    </p>

                    <div className="rounded-2xl border border-border bg-card/40 p-4 sm:p-5 space-y-3">
                      <div className="space-y-1">
                        <p className="text-sm font-semibold text-headline">
                          Client Account Data
                        </p>
                        <SmallList
                          items={[
                            "Organisation name",
                            "Authorised user contact details",
                            "Billing information",
                          ]}
                        />
                      </div>

                      <div className="space-y-1">
                        <p className="text-sm font-semibold text-headline">
                          Contact Data Uploaded by Clients
                        </p>
                        <SmallList items={["Names", "Phone numbers", "Email addresses (if applicable)"]} />
                      </div>

                      <div className="space-y-1">
                        <p className="text-sm font-semibold text-headline">
                          Technical Data
                        </p>
                        <SmallList items={["IP address", "Device information", "Usage logs"]} />
                      </div>

                      <p className="text-sm text-body leading-relaxed">
                        CallPilot does not intentionally collect sensitive personal data.
                      </p>
                    </div>
                  </div>

                  {/* 5 */}
                  <div className="space-y-2">
                    <SubTitle>5. Audio Processing</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      CallPilot does not provide call recording functionality. Audio transmitted
                      through the platform is processed in real time solely to enable live
                      communication functionality.
                    </p>
                    <p className="text-sm text-body leading-relaxed">CallPilot:</p>
                    <SmallList
                      items={[
                        "Does not record calls",
                        "Does not store audio files",
                        "Does not maintain call archives",
                      ]}
                    />
                    <p className="text-sm text-body leading-relaxed">
                      Audio data is processed transiently and is not permanently saved.
                    </p>
                  </div>

                  {/* 6 */}
                  <div className="space-y-2">
                    <SubTitle>6. Transcript Handling</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      CallPilot does not store call transcripts by default. Clients may optionally
                      enable temporary transcript storage for quality assurance or operational
                      review purposes.
                    </p>
                    <p className="text-sm text-body leading-relaxed">Where enabled:</p>
                    <SmallList
                      items={[
                        "Transcript storage is controlled by the client",
                        "Retention duration is configurable within the client platform",
                        "A recommended maximum retention period of five (5) days applies",
                        "Transcript data is automatically deleted after the configured retention period",
                      ]}
                    />
                    <p className="text-sm text-body leading-relaxed">
                      CallPilot does not maintain permanent transcript archives.
                    </p>
                  </div>

                  {/* 7 */}
                  <div className="space-y-2">
                    <SubTitle>7. Lawful Basis for Processing</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      Processing activities may be based on:
                    </p>
                    <SmallList
                      items={[
                        "Contractual necessity",
                        "Client instruction",
                        "Legitimate business interest",
                        "Legal obligation",
                        "Consent, where required",
                      ]}
                    />
                    <p className="text-sm text-body leading-relaxed">
                      Clients are responsible for ensuring lawful authority to contact individuals.
                    </p>
                  </div>

                  {/* 8 */}
                  <div className="space-y-2">
                    <SubTitle>8. Data Security Measures</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      CallPilot implements appropriate technical and organisational safeguards,
                      including:
                    </p>
                    <SmallList
                      items={[
                        "Encrypted data transmission (HTTPS/TLS)",
                        "Secure cloud infrastructure",
                        "Role-based access controls",
                        "Restricted access to authorised personnel",
                        "Authentication and monitoring systems",
                      ]}
                    />
                    <p className="text-sm text-body leading-relaxed">
                      Security safeguards are reviewed periodically.
                    </p>
                  </div>

                  {/* 9 */}
                  <div className="space-y-2">
                    <SubTitle>9. Data Retention</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      Client account data is retained for the duration of the contractual
                      relationship and for a reasonable period thereafter as required by law or
                      legitimate business needs.
                    </p>
                    <p className="text-sm text-body leading-relaxed">
                      Optional transcript data, where enabled, is retained only for the
                      client-configured period and is automatically deleted.
                    </p>
                    <p className="text-sm text-body leading-relaxed">
                      CallPilot does not retain audio recordings.
                    </p>
                  </div>

                  {/* 10 */}
                  <div className="space-y-2">
                    <SubTitle>10. Cross-Border Data Transfers</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      Where personal data is transferred outside the UAE:
                    </p>
                    <SmallList
                      items={[
                        "Appropriate safeguards are implemented",
                        "Contractual protections are applied",
                        "Secure cloud providers are used",
                      ]}
                    />
                    <p className="text-sm text-body leading-relaxed">
                      Further information may be provided upon request.
                    </p>
                  </div>

                  {/* 11 */}
                  <div className="space-y-2">
                    <SubTitle>11. Data Subject Rights</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      Where applicable under law, individuals may request:
                    </p>
                    <SmallList
                      items={[
                        "Access to their personal data",
                        "Correction of inaccurate information",
                        "Deletion of personal data",
                        "Restriction of processing",
                      ]}
                    />
                    <p className="text-sm text-body leading-relaxed">
                      Requests may be submitted to:{" "}
                      <a
                        href="mailto:contact@swiftwave.ai"
                        className="underline underline-offset-4 hover:text-headline transition-colors"
                      >
                        contact@swiftwave.ai
                      </a>
                    </p>
                  </div>

                  {/* 12 */}
                  <div className="space-y-2">
                    <SubTitle>12. Data Breach Management</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      In the event of a confirmed data breach:
                    </p>
                    <SmallList
                      items={[
                        "An investigation will be conducted promptly",
                        "Affected clients will be notified without undue delay",
                        "Regulatory authorities will be notified where required by law",
                      ]}
                    />
                  </div>

                  {/* 13 */}
                  <div className="space-y-2">
                    <SubTitle>13. Third-Party Service Providers</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      CallPilot may use trusted third-party providers for:
                    </p>
                    <SmallList
                      items={[
                        "Cloud infrastructure",
                        "AI processing services",
                        "Telecommunications services",
                      ]}
                    />
                    <p className="text-sm text-body leading-relaxed">
                      All third-party providers are contractually required to maintain appropriate
                      data protection and security standards.
                    </p>
                  </div>

                  {/* 14 */}
                  <div className="space-y-2">
                    <SubTitle>14. Policy Updates</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      This policy may be updated periodically to reflect operational, regulatory,
                      or legal developments. Updated versions will be published on the CallPilot
                      website.
                    </p>
                  </div>

                  {/* 15 */}
                  <div className="space-y-2">
                    <SubTitle>15. Contact Information</SubTitle>
                    <div className="rounded-2xl border border-border bg-card/40 p-4 sm:p-5">
                      <div className="text-sm text-body leading-relaxed">
                        <p className="font-medium text-headline">Swiftwave FZ-LLC</p>
                        <p>RAKEZ Business Zone</p>
                        <p>Ras Al Khaimah</p>
                        <p>United Arab Emirates</p>
                      </div>

                      <p className="mt-3 text-sm text-body">
                        <span className="text-muted-text">Email:</span>{" "}
                        <a
                          href="mailto:contact@swiftwave.ai"
                          className="underline underline-offset-4 hover:text-headline transition-colors"
                        >
                          contact@swiftwave.ai
                        </a>
                      </p>
                    </div>
                  </div>
                </section>

                {/* =======================
                    SECTION 2: DPA
                   ======================= */}
                <section className="space-y-4">
                  <SectionTitle id="dpa">
                    <div className="mt-10">
                        CallPilot Data Processing Agreement (DPA)
                    </div>
                    
                  </SectionTitle>

                  <div className="rounded-2xl border border-border bg-card/40 p-4 sm:p-5 space-y-3">
                    <p className="text-sm text-body leading-relaxed">
                      CallPilot is a trading name and product of Swiftwave FZ-LLC, a
                      company registered in Ras Al Khaimah, United Arab Emirates.
                    </p>

                    <div className="text-sm text-body leading-relaxed">
                      <p className="font-medium text-headline">Swiftwave FZ-LLC</p>
                      <p>RAKEZ Business Zone</p>
                      <p>Ras Al Khaimah</p>
                      <p>United Arab Emirates</p>
                    </div>

                    <p className="text-sm text-body">
                      <span className="text-muted-text">Effective Date:</span>{" "}
                      <span className="font-medium">11 February 2026</span>
                    </p>

                    <p className="text-sm text-body">
                      <span className="text-muted-text">Email:</span>{" "}
                      <a
                        href="mailto:contact@swiftwave.ai"
                        className="underline underline-offset-4 hover:text-headline transition-colors"
                      >
                        contact@swiftwave.ai
                      </a>
                    </p>
                  </div>

                  {/* 1 */}
                  <div className="space-y-2">
                    <SubTitle>1. Purpose</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      This Data Processing Agreement (&quot;DPA&quot;) forms part of the Terms of
                      Service between Swiftwave FZ-LLC (&quot;Processor&quot;) and the Client
                      (&quot;Controller&quot;).
                    </p>
                    <p className="text-sm text-body leading-relaxed">
                      This DPA governs the processing of personal data through the CallPilot
                      platform in accordance with applicable data protection laws, including the
                      UAE Personal Data Protection Law (PDPL).
                    </p>
                    <p className="text-sm text-body leading-relaxed">
                      CallPilot is designed to support compliance with applicable data protection
                      laws and incorporates technical and organisational safeguards aligned with
                      internationally recognised data protection principles, including those
                      reflected in UAE PDPL and the EU General Data Protection Regulation (GDPR).
                    </p>
                    <p className="text-sm text-body leading-relaxed">
                      Clients remain responsible for ensuring lawful data collection and use within
                      their respective jurisdictions.
                    </p>
                  </div>

                  {/* 2 */}
                  <div className="space-y-2">
                    <SubTitle>2. Roles of the Parties</SubTitle>
                    <SmallList
                      items={[
                        "The Client acts as the Data Controller.",
                        "Swiftwave FZ-LLC (CallPilot) acts as the Data Processor.",
                        "The Client determines the purpose and means of processing.",
                        "CallPilot processes personal data solely on documented instructions from the Client.",
                      ]}
                    />
                  </div>

                  {/* 3 */}
                  <div className="space-y-2">
                    <SubTitle>3. Nature of Processing</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      Processing activities may include:
                    </p>
                    <SmallList
                      items={[
                        "Hosting contact data uploaded by the Client",
                        "Real-time audio processing during calls",
                        "Optional temporary transcript storage (if enabled by Client)",
                      ]}
                    />
                  </div>

                  {/* 4 */}
                  <div className="space-y-2">
                    <SubTitle>4. No Call Recording</SubTitle>
                    <SmallList
                      items={[
                        "Does not record calls",
                        "Does not store audio recordings",
                        "Does not maintain audio archives",
                      ]}
                    />
                    <p className="text-sm text-body leading-relaxed">
                      Audio is processed transiently in real time and is not permanently retained.
                    </p>
                  </div>

                  {/* 5 */}
                  <div className="space-y-2">
                    <SubTitle>5. Transcript Storage</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      By default, transcripts are not stored. If enabled by the Client:
                    </p>
                    <SmallList
                      items={[
                        "Transcript retention is client-controlled",
                        "A recommended maximum retention period of five (5) days applies",
                        "Automatic deletion occurs after the configured retention period",
                        "CallPilot does not maintain permanent transcript archives.",
                      ]}
                    />
                  </div>

                  {/* 6 */}
                  <div className="space-y-2">
                    <SubTitle>6. Security Measures</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      CallPilot implements appropriate technical and organisational measures,
                      including:
                    </p>
                    <SmallList
                      items={[
                        "Encrypted data transmission (TLS)",
                        "Secure cloud infrastructure",
                        "Role-based access controls",
                        "Authentication systems",
                        "Monitoring and logging",
                      ]}
                    />
                    <p className="text-sm text-body leading-relaxed">
                      Access to personal data is restricted to authorised personnel.
                    </p>
                  </div>

                  {/* 7 */}
                  <div className="space-y-2">
                    <SubTitle>7. Subprocessors</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      CallPilot may engage trusted third-party service providers for:
                    </p>
                    <SmallList
                      items={["Cloud infrastructure", "AI processing", "Telecommunications services"]}
                    />
                    <p className="text-sm text-body leading-relaxed">
                      All subprocessors are contractually bound by data protection obligations.
                    </p>
                  </div>

                  {/* 8 */}
                  <div className="space-y-2">
                    <SubTitle>8. International Data Transfers</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      Where personal data is transferred outside the UAE:
                    </p>
                    <SmallList
                      items={[
                        "Appropriate safeguards are implemented",
                        "Contractual protections are applied",
                        "Secure cloud providers are utilised",
                      ]}
                    />
                  </div>

                  {/* 9 */}
                  <div className="space-y-2">
                    <SubTitle>9. Data Subject Rights</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      CallPilot shall assist the Client, where reasonably possible, in responding
                      to data subject requests under applicable law.
                    </p>
                  </div>

                  {/* 10 */}
                  <div className="space-y-2">
                    <SubTitle>10. Data Breach Notification</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      In the event of a confirmed data breach affecting Client data:
                    </p>
                    <SmallList
                      items={[
                        "CallPilot will notify the Client without undue delay",
                        "Provide relevant information to support regulatory reporting obligations",
                      ]}
                    />
                  </div>

                  {/* 11 */}
                  <div className="space-y-2">
                    <SubTitle>11. Deletion of Data</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      Upon termination of services, Client data will be deleted or returned in
                      accordance with contractual terms and legal obligations.
                    </p>
                    <p className="text-sm text-body leading-relaxed">
                      Transcript data (if enabled) is automatically deleted after the configured
                      retention period.
                    </p>
                  </div>

                  {/* 12 */}
                  <div className="space-y-2">
                    <SubTitle>12. Liability</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      Liability under this DPA is subject to the limitations set out in the Terms
                      of Service.
                    </p>
                  </div>

                  {/* 13 */}
                  <div className="space-y-2">
                    <SubTitle>13. Contact</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                      For data processing matters:{" "}
                      <a
                        href="mailto:contact@swiftwave.ai"
                        className="underline underline-offset-4 hover:text-headline transition-colors"
                      >
                        contact@swiftwave.ai
                      </a>
                    </p>
                  </div>
                </section>

                {/* =======================
                    SECTION: Security & Infrastructure Policy
                ======================= */}
                <section className="space-y-4">
                <SectionTitle id="sip">
                    <div className="mt-10">Security &amp; Infrastructure Policy</div>
                </SectionTitle>

                <div className="rounded-2xl border border-border bg-card/40 p-4 sm:p-5 space-y-3">
                    <p className="text-sm text-body leading-relaxed">
                    CallPilot is a trading name and product of Swiftwave FZ-LLC, a company
                    registered in Ras Al Khaimah, United Arab Emirates.
                    </p>

                    <div className="text-sm text-body leading-relaxed">
                    <p className="font-medium text-headline">Swiftwave FZ-LLC</p>
                    <p>RAKEZ Business Zone</p>
                    <p>Ras Al Khaimah</p>
                    <p>United Arab Emirates</p>
                    </div>

                    <p className="text-sm text-body">
                    <span className="text-muted-text">Effective Date:</span>{" "}
                    <span className="font-medium">11 February 2026</span>
                    </p>

                    <p className="text-sm text-body">
                    <span className="text-muted-text">Email:</span>{" "}
                    <a
                        href="mailto:contact@swiftwave.ai"
                        className="underline underline-offset-4 hover:text-headline transition-colors"
                    >
                        contact@swiftwave.ai
                    </a>
                    </p>
                </div>

                {/* 1 */}
                <div className="space-y-2">
                    <SubTitle>1. Purpose</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                    This Security &amp; Infrastructure Policy outlines the technical and
                    organisational measures implemented by Swiftwave FZ-LLC to protect data
                    processed through the CallPilot platform.
                    </p>
                    <p className="text-sm text-body leading-relaxed">
                    CallPilot is designed using privacy-by-design and security-by-design
                    principles aligned with internationally recognised data protection
                    standards.
                    </p>
                </div>

                {/* 2 */}
                <div className="space-y-2">
                    <SubTitle>2. Infrastructure Security</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                    CallPilot operates on secure cloud-based infrastructure incorporating:
                    </p>
                    <SmallList
                    items={[
                        "Encrypted data transmission (HTTPS / TLS)",
                        "Secure hosting environments",
                        "Firewall and network security controls",
                        "Segregated environments where applicable",
                        "System hardening practices",
                    ]}
                    />
                    <p className="text-sm text-body leading-relaxed">
                    Infrastructure is configured to reduce exposure to unauthorised access.
                    </p>
                </div>

                {/* 3 */}
                <div className="space-y-2">
                    <SubTitle>3. Access Control</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                    Access to platform systems is restricted through:
                    </p>
                    <SmallList
                    items={[
                        "Role-based access controls",
                        "Authentication safeguards",
                        "Restricted administrative privileges",
                        "Access limited to authorised personnel",
                    ]}
                    />
                    <p className="text-sm text-body leading-relaxed">
                    Access rights are granted based on operational necessity.
                    </p>
                </div>

                {/* 4 */}
                <div className="space-y-2">
                    <SubTitle>4. Audio &amp; Call Data Handling</SubTitle>
                    <SmallList
                    items={[
                        "Does not provide call recording functionality",
                        "Does not store audio recordings",
                        "Does not maintain audio archives",
                    ]}
                    />
                    <p className="text-sm text-body leading-relaxed">
                    Audio is processed in real time solely to enable live communication
                    functionality and is not permanently retained.
                    </p>
                </div>

                {/* 5 */}
                <div className="space-y-2">
                    <SubTitle>5. Transcript Controls</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                    CallPilot does not store transcripts by default.
                    </p>
                    <p className="text-sm text-body leading-relaxed">
                    Where clients enable transcript storage:
                    </p>
                    <SmallList
                    items={[
                        "Retention is client-controlled",
                        "A recommended maximum retention period of five (5) days applies",
                        "Automatic deletion occurs after the configured period",
                        "CallPilot does not maintain permanent transcript archives",
                    ]}
                    />
                </div>

                {/* 6 */}
                <div className="space-y-2">
                    <SubTitle>6. Monitoring &amp; Incident Management</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                    Systems are monitored to detect:
                    </p>
                    <SmallList
                    items={[
                        "Unauthorised access attempts",
                        "Suspicious activity",
                        "Service anomalies",
                    ]}
                    />
                    <p className="text-sm text-body leading-relaxed">
                    In the event of a confirmed security incident, internal investigation
                    procedures are initiated and affected clients are notified where required.
                    </p>
                </div>

                {/* 7 */}
                <div className="space-y-2">
                    <SubTitle>7. Third-Party Service Providers</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                    CallPilot may engage trusted third-party providers for:
                    </p>
                    <SmallList
                    items={[
                        "Cloud infrastructure",
                        "AI processing",
                        "Telecommunications services",
                    ]}
                    />
                    <p className="text-sm text-body leading-relaxed">
                    Such providers are contractually required to maintain appropriate
                    security safeguards.
                    </p>
                </div>

                {/* 8 */}
                <div className="space-y-2">
                    <SubTitle>8. Data Protection Alignment</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                    CallPilot incorporates security measures aligned with internationally
                    recognised data protection principles, including those reflected in UAE
                    PDPL and GDPR frameworks.
                    </p>
                    <p className="text-sm text-body leading-relaxed">
                    Clients remain responsible for ensuring lawful data collection and usage
                    within their jurisdictions.
                    </p>
                </div>

                {/* 9 */}
                <div className="space-y-2">
                    <SubTitle>9. Continuous Improvement</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                    Security controls are periodically reviewed and updated to address
                    emerging risks and technological developments.
                    </p>
                </div>

                {/* 10 */}
                <div className="space-y-2">
                    <SubTitle>10. Contact</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                    For security-related enquiries:{" "}
                    <a
                        href="mailto:contact@swiftwave.ai"
                        className="underline underline-offset-4 hover:text-headline transition-colors"
                    >
                        contact@swiftwave.ai
                    </a>
                    </p>
                </div>
                </section>


                {/* =======================
                    SECTION: AI Transparency & Responsible Use Policy
                ======================= */}
                <section className="space-y-4">
                <SectionTitle id="atrp">
                    <div className="mt-10">AI Transparency &amp; Responsible Use Policy</div>
                </SectionTitle>

                <div className="rounded-2xl border border-border bg-card/40 p-4 sm:p-5 space-y-3">
                    <p className="text-sm text-body leading-relaxed">
                    CallPilot is a trading name and product of Swiftwave FZ-LLC, a company
                    registered in Ras Al Khaimah, United Arab Emirates.
                    </p>

                    <div className="text-sm text-body leading-relaxed">
                    <p className="font-medium text-headline">Swiftwave FZ-LLC</p>
                    <p>RAKEZ Business Zone</p>
                    <p>Ras Al Khaimah</p>
                    <p>United Arab Emirates</p>
                    </div>

                    <p className="text-sm text-body">
                    <span className="text-muted-text">Effective Date:</span>{" "}
                    <span className="font-medium">11 February 2026</span>
                    </p>

                    <p className="text-sm text-body">
                    <span className="text-muted-text">Email:</span>{" "}
                    <a
                        href="mailto:contact@swiftwave.ai"
                        className="underline underline-offset-4 hover:text-headline transition-colors"
                    >
                        contact@swiftwave.ai
                    </a>
                    </p>
                </div>

                {/* 1 */}
                <div className="space-y-2">
                    <SubTitle>1. Purpose</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                    This policy explains how artificial intelligence (AI) is used within the
                    CallPilot platform and outlines our commitment to responsible and lawful
                    AI deployment.
                    </p>
                </div>

                {/* 2 */}
                <div className="space-y-2">
                    <SubTitle>2. How AI Is Used</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                    CallPilot uses AI technologies to:
                    </p>
                    <SmallList
                    items={[
                        "Process live audio input during calls",
                        "Generate conversational responses",
                        "Facilitate automated call interactions",
                        "Support communication efficiency",
                    ]}
                    />
                    <p className="text-sm text-body leading-relaxed">
                    AI operates in real time to enable platform functionality.
                    </p>
                </div>

                {/* 3 */}
                <div className="space-y-2">
                    <SubTitle>3. No Autonomous Decision-Making</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                    CallPilot does not:
                    </p>
                    <SmallList
                    items={[
                        "Make legally binding decisions",
                        "Enter into contracts",
                        "Approve financial transactions",
                        "Take independent enforcement action",
                    ]}
                    />
                    <p className="text-sm text-body leading-relaxed">
                    All business decisions remain the responsibility of the client.
                    </p>
                </div>

                {/* 4 */}
                <div className="space-y-2">
                    <SubTitle>4. No Call Recording</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                    CallPilot does not provide call recording functionality.
                    </p>
                    <p className="text-sm text-body leading-relaxed">
                    Audio transmitted through the platform is processed in real time and is
                    not recorded, stored, or archived.
                    </p>
                </div>

                {/* 5 */}
                <div className="space-y-2">
                    <SubTitle>5. Transcript Handling</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                    CallPilot does not store transcripts by default.
                    </p>
                    <p className="text-sm text-body leading-relaxed">
                    Clients may enable temporary transcript storage for quality or performance
                    review purposes.
                    </p>
                    <p className="text-sm text-body leading-relaxed">Where enabled:</p>
                    <SmallList
                    items={[
                        "Storage is client-controlled",
                        "A recommended maximum retention period of five (5) days applies",
                        "Transcripts are automatically deleted after the configured period",
                        "CallPilot does not maintain permanent archives of call content",
                    ]}
                    />
                </div>

                {/* 6 */}
                <div className="space-y-2">
                    <SubTitle>6. Human Oversight</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                    Clients retain full control over:
                    </p>
                    <SmallList
                    items={[
                        "Campaign configuration",
                        "Call scripts",
                        "Target lists",
                        "Communication objectives",
                    ]}
                    />
                    <p className="text-sm text-body leading-relaxed">
                    CallPilot does not independently initiate communications without client
                    instruction.
                    </p>
                </div>

                {/* 7 */}
                <div className="space-y-2">
                    <SubTitle>7. Responsible Use Requirements</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                    Clients must not use CallPilot AI to:
                    </p>
                    <SmallList
                    items={[
                        "Engage in fraud or deception",
                        "Conduct unlawful marketing",
                        "Impersonate individuals or organisations",
                        "Harass or intimidate recipients",
                        "Violate telecommunications laws",
                        "Conduct prohibited political or religious campaigning",
                    ]}
                    />
                </div>

                {/* 8 */}
                <div className="space-y-2">
                    <SubTitle>8. Bias &amp; Fairness</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                    CallPilot aims to deploy AI technologies responsibly.
                    </p>
                    <p className="text-sm text-body leading-relaxed">
                    While AI systems are designed to operate reliably, clients are responsible
                    for reviewing outputs and ensuring communications remain lawful and
                    appropriate.
                    </p>
                </div>

                {/* 9 */}
                <div className="space-y-2">
                    <SubTitle>9. Continuous Improvement</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                    AI models and platform capabilities may evolve over time. Updates are
                    implemented to improve performance, compliance, and security.
                    </p>
                </div>

                {/* 10 */}
                <div className="space-y-2">
                    <SubTitle>10. Contact</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                    For questions regarding AI usage:{" "}
                    <a
                        href="mailto:contact@swiftwave.ai"
                        className="underline underline-offset-4 hover:text-headline transition-colors"
                    >
                        contact@swiftwave.ai
                    </a>
                    </p>
                </div>
                </section>


                {/* =======================
                    SECTION: Acceptable Use Policy
                ======================= */}
                <section className="space-y-4">
                <SectionTitle id="aup">
                    <div className="mt-10">Acceptable Use Policy</div>
                </SectionTitle>

                <div className="rounded-2xl border border-border bg-card/40 p-4 sm:p-5 space-y-3">
                    <p className="text-sm text-body leading-relaxed">
                    CallPilot is a trading name and product of Swiftwave FZ-LLC, a company
                    registered in Ras Al Khaimah, United Arab Emirates.
                    </p>

                    <div className="text-sm text-body leading-relaxed">
                    <p className="font-medium text-headline">Swiftwave FZ-LLC</p>
                    <p>RAKEZ Business Zone</p>
                    <p>Ras Al Khaimah</p>
                    <p>United Arab Emirates</p>
                    </div>

                    <p className="text-sm text-body">
                    <span className="text-muted-text">Effective Date:</span>{" "}
                    <span className="font-medium">11 February 2026</span>
                    </p>

                    <p className="text-sm text-body">
                    <span className="text-muted-text">Email:</span>{" "}
                    <a
                        href="mailto:contact@swiftwave.ai"
                        className="underline underline-offset-4 hover:text-headline transition-colors"
                    >
                        contact@swiftwave.ai
                    </a>
                    </p>
                </div>

                {/* 1 */}
                <div className="space-y-2">
                    <SubTitle>1. Purpose</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                    This Acceptable Use Policy governs the permitted and prohibited uses of
                    the CallPilot platform.
                    </p>
                    <p className="text-sm text-body leading-relaxed">
                    By using CallPilot, clients agree to comply with this policy.
                    </p>
                </div>

                {/* 2 */}
                <div className="space-y-2">
                    <SubTitle>2. Lawful Use Requirement</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                    CallPilot may only be used for lawful business communication purposes.
                    </p>
                    <p className="text-sm text-body leading-relaxed">
                    Clients are solely responsible for ensuring compliance with:
                    </p>
                    <SmallList
                    items={[
                        "UAE telecommunications regulations",
                        "Applicable marketing and consent laws",
                        "Data protection legislation",
                        "Any industry-specific regulations applicable to their business",
                    ]}
                    />
                </div>

                {/* 3 */}
                <div className="space-y-2">
                    <SubTitle>3. Prohibited Activities</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                    Clients must not use CallPilot to:
                    </p>
                    <SmallList
                    items={[
                        "Conduct unsolicited spam campaigns",
                        "Engage in fraudulent or deceptive activity",
                        "Impersonate individuals or organisations",
                        "Misrepresent identity or intent",
                        "Harass, threaten, or intimidate recipients",
                        "Distribute misleading or unlawful content",
                        "Conduct political campaigning where restricted by law",
                        "Conduct religious solicitation where prohibited",
                        "Violate telecommunications or consumer protection regulations",
                    ]}
                    />
                </div>

                {/* 4 */}
                <div className="space-y-2">
                    <SubTitle>4. Call Recording Restrictions</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                    CallPilot does not provide call recording functionality.
                    </p>
                    <p className="text-sm text-body leading-relaxed">
                    Clients must not attempt to use the platform to bypass or circumvent this
                    restriction.
                    </p>
                    <p className="text-sm text-body leading-relaxed">
                    If clients independently record calls outside the platform, they are
                    solely responsible for compliance with applicable laws and disclosure
                    obligations.
                    </p>
                </div>

                {/* 5 */}
                <div className="space-y-2">
                    <SubTitle>5. Transcript Usage</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                    CallPilot does not store transcripts by default.
                    </p>
                    <p className="text-sm text-body leading-relaxed">
                    If transcript storage is enabled:
                    </p>
                    <SmallList
                    items={[
                        "It must be used for legitimate operational or quality purposes",
                        "Retention must remain reasonable",
                        "A recommended maximum retention period of five (5) days applies",
                        "CallPilot does not maintain permanent archives of call content",
                    ]}
                    />
                </div>

                {/* 6 */}
                <div className="space-y-2">
                    <SubTitle>6. Platform Integrity</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                    Clients must not:
                    </p>
                    <SmallList
                    items={[
                        "Attempt to reverse engineer the platform",
                        "Attempt to bypass security controls",
                        "Interfere with system integrity",
                        "Upload malicious code or scripts",
                    ]}
                    />
                </div>

                {/* 7 */}
                <div className="space-y-2">
                    <SubTitle>7. Enforcement</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                    Swiftwave FZ-LLC reserves the right to:
                    </p>
                    <SmallList
                    items={[
                        "Suspend accounts",
                        "Restrict access",
                        "Terminate services",
                    ]}
                    />
                    <p className="text-sm text-body leading-relaxed">
                    If this policy is violated.
                    </p>
                </div>

                {/* 8 */}
                <div className="space-y-2">
                    <SubTitle>8. Updates</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                    This policy may be updated periodically to reflect regulatory or
                    operational developments.
                    </p>
                </div>

                {/* 9 */}
                <div className="space-y-2">
                    <SubTitle>9. Contact</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                    For compliance or policy questions:{" "}
                    <a
                        href="mailto:contact@swiftwave.ai"
                        className="underline underline-offset-4 hover:text-headline transition-colors"
                    >
                        contact@swiftwave.ai
                    </a>
                    </p>
                </div>
                </section>

                {/* =======================
                    SECTION: Call Handling Policy
                ======================= */}
                <section className="space-y-4">
                <SectionTitle id="chp">
                    <div className="mt-10">Call Handling Policy</div>
                </SectionTitle>

                <div className="rounded-2xl border border-border bg-card/40 p-4 sm:p-5 space-y-3">
                    <p className="text-sm text-body leading-relaxed">
                    CallPilot is a trading name and product of Swiftwave FZ-LLC, a company
                    registered in Ras Al Khaimah, United Arab Emirates.
                    </p>

                    <div className="text-sm text-body leading-relaxed">
                    <p className="font-medium text-headline">Swiftwave FZ-LLC</p>
                    <p>RAKEZ Business Zone</p>
                    <p>Ras Al Khaimah</p>
                    <p>United Arab Emirates</p>
                    </div>

                    <p className="text-sm text-body">
                    <span className="text-muted-text">Effective Date:</span>{" "}
                    <span className="font-medium">11 February 2026</span>
                    </p>

                    <p className="text-sm text-body">
                    <span className="text-muted-text">Email:</span>{" "}
                    <a
                        href="mailto:contact@swiftwave.ai"
                        className="underline underline-offset-4 hover:text-headline transition-colors"
                    >
                        contact@swiftwave.ai
                    </a>
                    </p>
                </div>

                {/* 1 */}
                <div className="space-y-2">
                    <SubTitle>1. Purpose</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                    This Call Handling Policy explains how audio and call-related data are
                    processed within the CallPilot platform.
                    </p>
                </div>

                {/* 2 */}
                <div className="space-y-2">
                    <SubTitle>2. No Call Recording</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                    CallPilot does not provide call recording functionality.
                    </p>
                    <p className="text-sm text-body leading-relaxed">The platform:</p>
                    <SmallList
                    items={[
                        "Does not record calls",
                        "Does not store audio files",
                        "Does not maintain audio archives",
                        "Does not retain voice recordings",
                    ]}
                    />
                    <p className="text-sm text-body leading-relaxed">
                    Audio transmitted through CallPilot is processed in real time solely to
                    enable live communication functionality. Audio data is not permanently
                    saved.
                    </p>
                </div>

                {/* 3 */}
                <div className="space-y-2">
                    <SubTitle>3. Real-Time Processing</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                    Audio data is processed transiently to:
                    </p>
                    <SmallList
                    items={[
                        "Enable AI-assisted interaction",
                        "Facilitate conversational responses",
                        "Deliver communication functionality",
                    ]}
                    />
                    <p className="text-sm text-body leading-relaxed">
                    Once processing is complete, audio data is not retained.
                    </p>
                </div>

                {/* 4 */}
                <div className="space-y-2">
                    <SubTitle>4. Transcript Handling</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                    CallPilot does not store call transcripts by default.
                    </p>
                    <p className="text-sm text-body leading-relaxed">
                    Clients may optionally enable temporary transcript storage for operational
                    review or quality assurance purposes.
                    </p>
                    <p className="text-sm text-body leading-relaxed">Where enabled:</p>
                    <SmallList
                    items={[
                        "Transcript storage is fully controlled by the client",
                        "Retention duration is configurable within the client platform",
                        "A recommended maximum retention period of five (5) days applies",
                        "Transcript data is automatically deleted after the configured period",
                        "CallPilot does not maintain permanent transcript archives",
                    ]}
                    />
                </div>

                {/* 5 */}
                <div className="space-y-2">
                    <SubTitle>5. Client Responsibility</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                    Clients are responsible for:
                    </p>
                    <SmallList
                    items={[
                        "Ensuring lawful authority to contact recipients",
                        "Providing any required call disclosures",
                        "Complying with telecommunications and data protection regulations",
                    ]}
                    />
                    <p className="text-sm text-body leading-relaxed">
                    If clients independently record calls outside of CallPilot, they are
                    solely responsible for compliance with applicable legal requirements.
                    </p>
                </div>

                {/* 6 */}
                <div className="space-y-2">
                    <SubTitle>6. Security</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                    Call-related data is transmitted using encrypted communication channels
                    and processed within secure infrastructure. Access to platform systems is
                    restricted to authorised personnel.
                    </p>
                </div>

                {/* 7 */}
                <div className="space-y-2">
                    <SubTitle>7. Updates</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                    This policy may be updated periodically to reflect operational or
                    regulatory developments.
                    </p>
                </div>

                {/* 8 */}
                <div className="space-y-2">
                    <SubTitle>8. Contact</SubTitle>
                    <p className="text-sm text-body leading-relaxed">
                    For questions regarding call handling:{" "}
                    <a
                        href="mailto:contact@swiftwave.ai"
                        className="underline underline-offset-4 hover:text-headline transition-colors"
                    >
                        contact@swiftwave.ai
                    </a>
                    </p>
                </div>
                </section>


                {/* Back to top */}
                <div className="pt-2">
                  <a
                    href="#top"
                    className="inline-flex items-center gap-2 text-xs text-body hover:text-headline transition-colors"
                  >
                    <span className="inline-block">↑</span>
                    Back to top
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
