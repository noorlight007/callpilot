"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sections = [
  { id: "what-are-cookies", title: "1. What Are Cookies" },
  { id: "how-we-use", title: "2. How We Use Cookies" },
  { id: "types", title: "3. Types of Cookies We Use" },
  { id: "not-used-for", title: "4. What We Do NOT Use Cookies For" },
  { id: "third-party", title: "5. Third-Party Cookies" },
  { id: "consent", title: "6. Cookie Consent & Control" },
  { id: "alignment", title: "7. Legal & Regulatory Alignment" },
  { id: "changes", title: "8. Changes to This Cookie Policy" },
  { id: "contact", title: "9. Contact Information" },
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

export default function CookiePolicyPage() {
  return (
    <>
      <Header />

      <main id="top" className="bg-background">
        {/* Header */}
        <div className="border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
            <div className="">
              <p className="text-sm text-muted-text mb-2">Legal</p>
              <h1 className="text-3xl sm:text-4xl font-bold text-headline tracking-tight">
                Swiftwave Cookie Policy
              </h1>

              <div className="mt-6 rounded-2xl border border-border bg-card/40 p-5 sm:p-6">
                <p className="text-sm sm:text-base text-body leading-relaxed">
                  This Cookie Policy explains how Swiftwave FZ-LLC, United Arab Emirates
                  (&quot;Swiftwave&quot;, &quot;we&quot;, &quot;us&quot;) uses cookies and
                  similar technologies on its websites and platforms, including <b>CallPilot.pro</b>
                </p>
                <p className="mt-3 text-sm sm:text-base text-body leading-relaxed">
                  This policy should be read alongside our{" "}
                  <a
                    href="/privacy-policy"
                    className="underline underline-offset-4 hover:text-headline transition-colors"
                  >
                    Privacy Policy
                  </a>
                  .
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
                  <SectionTitle id="what-are-cookies">1. What Are Cookies</SectionTitle>
                  <p className="text-body leading-relaxed">
                    Cookies are small text files placed on your device when you visit a website.
                    They are widely used to make websites function properly, improve security,
                    and enhance user experience.
                  </p>
                  <p className="text-body leading-relaxed">
                    Cookies do not give us access to your device or personal files.
                  </p>
                </section>

                {/* 2 */}
                <section className="space-y-4">
                  <SectionTitle id="how-we-use">2. How We Use Cookies</SectionTitle>
                  <p className="text-body leading-relaxed">
                    Swiftwave uses cookies only where necessary to operate its websites and
                    platforms.
                  </p>
                  <p className="text-body leading-relaxed">We do not use cookies to:</p>
                  <ul className="list-disc pl-5 text-body space-y-1">
                    <li>Track individuals across unrelated websites</li>
                    <li>Collect CRM personal data</li>
                    <li>Store call recordings, call text, or call transcripts</li>
                  </ul>
                </section>

                {/* 3 */}
                <section className="space-y-4">
                  <SectionTitle id="types">3. Types of Cookies We Use</SectionTitle>

                  <div className="rounded-2xl border border-border bg-card/40 p-5 sm:p-6 space-y-3">
                    <h3 className="font-semibold text-headline">Strictly Necessary Cookies</h3>
                    <p className="text-body leading-relaxed">
                      These cookies are essential for the operation of our websites and platforms
                      and cannot be disabled.
                    </p>
                    <p className="text-body leading-relaxed">They are used for:</p>
                    <ul className="list-disc pl-5 text-body space-y-1">
                      <li>User authentication and session management</li>
                      <li>Security and fraud prevention</li>
                      <li>Load balancing and platform stability</li>
                    </ul>
                    <p className="text-body leading-relaxed">
                      Without these cookies, core services may not function correctly.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border bg-card/40 p-5 sm:p-6 space-y-3">
                    <h3 className="font-semibold text-headline">Analytics Cookies (Limited Use)</h3>
                    <p className="text-body leading-relaxed">
                      Where enabled, analytics cookies may be used to:
                    </p>
                    <ul className="list-disc pl-5 text-body space-y-1">
                      <li>Understand how visitors interact with our website</li>
                      <li>Improve performance and usability</li>
                    </ul>
                    <p className="text-body leading-relaxed">Analytics data is:</p>
                    <ul className="list-disc pl-5 text-body space-y-1">
                      <li>Aggregated</li>
                      <li>Anonymised where possible</li>
                      <li>Not used to identify individual users</li>
                    </ul>
                    <p className="text-body leading-relaxed">
                      Analytics cookies are only used where legally permitted and subject to
                      user consent where required.
                    </p>
                  </div>
                </section>

                {/* 4 */}
                <section className="space-y-4">
                  <SectionTitle id="not-used-for">4. What We Do NOT Use Cookies For</SectionTitle>
                  <p className="text-body leading-relaxed">Swiftwave does not use cookies to:</p>
                  <ul className="list-disc pl-5 text-body space-y-1">
                    <li>Store personal data from CRM systems</li>
                    <li>Store call recordings, transcripts, or call text</li>
                    <li>Build behavioural or advertising profiles</li>
                    <li>Sell or share data with advertisers</li>
                  </ul>
                </section>

                {/* 5 */}
                <section className="space-y-4">
                  <SectionTitle id="third-party">5. Third-Party Cookies</SectionTitle>
                  <p className="text-body leading-relaxed">
                    Some third-party services used for security, hosting, or analytics may place
                    cookies on your device.
                  </p>
                  <p className="text-body leading-relaxed">All third-party providers are:</p>
                  <ul className="list-disc pl-5 text-body space-y-1">
                    <li>Carefully selected</li>
                    <li>Contractually bound to comply with data protection laws</li>
                    <li>Restricted to processing data only for their intended purpose</li>
                  </ul>
                </section>

                {/* 6 */}
                <section className="space-y-4">
                  <SectionTitle id="consent">6. Cookie Consent &amp; Control</SectionTitle>
                  <p className="text-body leading-relaxed">
                    When you visit our website, you may see a cookie banner allowing you to:
                  </p>
                  <ul className="list-disc pl-5 text-body space-y-1">
                    <li>Accept non-essential cookies</li>
                    <li>Reject non-essential cookies</li>
                    <li>Manage cookie preferences</li>
                  </ul>
                  <p className="text-body leading-relaxed">
                    You can also control cookies through your browser settings. Please note that
                    disabling strictly necessary cookies may affect site functionality.
                  </p>
                </section>

                {/* 7 */}
                <section className="space-y-4">
                  <SectionTitle id="alignment">7. Legal &amp; Regulatory Alignment</SectionTitle>
                  <p className="text-body leading-relaxed">
                    Swiftwave&apos;s use of cookies is designed to align with:
                  </p>
                  <ul className="list-disc pl-5 text-body space-y-1">
                    <li>EU GDPR</li>
                    <li>UK GDPR</li>
                    <li>UAE Personal Data Protection Law (PDPL)</li>
                    <li>Other comparable global privacy and data protection laws</li>
                  </ul>
                  <p className="text-body leading-relaxed">We apply principles of:</p>
                  <ul className="list-disc pl-5 text-body space-y-1">
                    <li>Data minimisation</li>
                    <li>Purpose limitation</li>
                    <li>Transparency</li>
                  </ul>
                </section>

                {/* 8 */}
                <section className="space-y-4">
                  <SectionTitle id="changes">8. Changes to This Cookie Policy</SectionTitle>
                  <p className="text-body leading-relaxed">
                    We may update this Cookie Policy from time to time. The &quot;Last updated&quot;
                    date reflects the current version.
                  </p>
                  <p className="text-body leading-relaxed">
                    Continued use of our websites constitutes acceptance of the updated policy.
                  </p>
                </section>

                {/* 9 */}
                <section className="space-y-4">
                  <SectionTitle id="contact">9. Contact Information</SectionTitle>
                  <div className="rounded-2xl border border-border bg-card/40 p-5 sm:p-6">
                    <p className="text-body leading-relaxed">
                      For questions about this Cookie Policy:
                    </p>

                    <div className="mt-4 space-y-2 text-body">
                      <p className="font-medium text-headline">Swiftwave FZ-LLC</p>
                      <p>United Arab Emirates</p>
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
