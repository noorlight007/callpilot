"use client";
// app/terms-conditions/page.tsx

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sections = [
  { id: "services", title: "1. CallPilot Services" },
  { id: "customer-responsibilities", title: "2. Customer Responsibilities" },
  { id: "screening-plans", title: "3. AI Applicant Screening Call Plans" },
  { id: "credits", title: "4. Credits" },
  { id: "global-credit-balance", title: "5. Global Credit Balance" },
  { id: "completed-screenings", title: "6. Completed Screenings" },
  { id: "usage-calculation", title: "7. Usage Calculation" },
  { id: "monthly-allowances", title: "8. Monthly Allowances" },
  { id: "upgrades-downgrades", title: "9. Upgrades and Downgrades" },
  { id: "subscription-payment", title: "10. Subscription and Payment" },
  { id: "trials-promotions", title: "11. Trials and Promotional Credits" },
  { id: "telephone-communication", title: "12. Telephone and Communication Services" },
  { id: "ai-human-oversight", title: "13. AI Screening and Human Decision-Making" },
  { id: "acceptable-use", title: "14. Acceptable Use" },
  { id: "data-protection", title: "15. Data Protection" },
  { id: "call-audio-transcripts", title: "16. Call Audio and Transcripts" },
  { id: "third-party-integrations", title: "17. Third-Party Integrations" },
  { id: "intellectual-property", title: "18. Intellectual Property" },
  { id: "confidentiality", title: "19. Confidentiality" },
  { id: "service-availability", title: "20. Service Availability" },
  { id: "ai-accuracy", title: "21. AI Accuracy and Service Outcomes" },
  { id: "cancellation", title: "22. Cancellation" },
  { id: "suspension-termination", title: "23. Suspension and Termination" },
  { id: "liability", title: "24. Limitation of Liability" },
  { id: "indemnity", title: "25. Indemnity" },
  { id: "changes", title: "26. Changes to Services, Pricing and Terms" },
  { id: "governing-law", title: "27. Governing Law and Jurisdiction" },
  { id: "contact", title: "28. Contact" },
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
            <div className="pt-0 md:pt-8">
              <p className="text-sm text-muted-text mb-2">Legal</p>
              <h1 className="text-3xl sm:text-4xl font-bold text-headline tracking-tight">
                CallPilot Terms of Service
              </h1>

              <p className="mt-3 text-sm sm:text-base text-body">
                Operated by <span className="font-semibold text-headline">Swiftwave FZ-LLC</span>
              </p>

              <p className="mt-2 text-sm sm:text-base text-body">
                Effective Date:{" "}
                <span className="font-semibold text-headline">22 September 2026</span>
              </p>

              <div className="mt-6 rounded-2xl border border-border bg-card/40 p-5 sm:p-6 space-y-3">
                <p className="text-sm sm:text-base text-body leading-relaxed">
                  These Terms of Service (&ldquo;Terms&rdquo;) govern access to and use of{" "}
                  <span className="font-medium text-headline">CallPilot</span>, operated by{" "}
                  <span className="font-medium text-headline">Swiftwave FZ-LLC</span> (&ldquo;CallPilot&rdquo;, &ldquo;Swiftwave&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;).
                </p>
                <p className="text-sm sm:text-base text-body leading-relaxed">
                  By creating an account, purchasing a subscription or using CallPilot, you (&ldquo;Customer&rdquo;, &ldquo;you&rdquo; or &ldquo;your&rdquo;) agree to these Terms.
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
                <div className="rounded-2xl border border-border bg-card/40 p-5 max-h-[calc(100vh-8rem)] overflow-y-auto">
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
                  <SectionTitle id="services">1. CallPilot Services</SectionTitle>
                  <p className="text-body leading-relaxed">
                    CallPilot provides AI-powered business communication and automation products, including AI Applicant Screening Calls and associated ATS, CRM, messaging and workflow integrations.
                  </p>
                  <p className="text-body leading-relaxed font-medium text-headline">
                    AI Applicant Screening Calls may:
                  </p>
                  <ul className="list-disc pl-5 text-body space-y-1.5 leading-relaxed">
                    <li>contact applicants automatically;</li>
                    <li>conduct role-specific screening questions;</li>
                    <li>assess responses against configured screening criteria;</li>
                    <li>provide screening outcomes;</li>
                    <li>request documents from qualified applicants;</li>
                    <li>communicate through WhatsApp, SMS and/or email where enabled;</li>
                    <li>update connected ATS or CRM systems; and</li>
                    <li>notify authorised users of screening outcomes.</li>
                  </ul>
                  <p className="text-body leading-relaxed">
                    Additional CallPilot products and modules may be made available separately and may have their own subscription, allowance and credit requirements.
                  </p>
                </section>

                {/* 2 */}
                <section className="space-y-4">
                  <SectionTitle id="customer-responsibilities">2. Customer Responsibilities</SectionTitle>
                  <p className="text-body leading-relaxed font-medium text-headline">
                    Customers are responsible for:
                  </p>
                  <ul className="list-disc pl-5 text-body space-y-1.5 leading-relaxed">
                    <li>maintaining accurate account information;</li>
                    <li>protecting account credentials;</li>
                    <li>ensuring applicant and contact information supplied to CallPilot has been obtained and processed lawfully;</li>
                    <li>ensuring an appropriate lawful basis exists for communications;</li>
                    <li>configuring appropriate and lawful screening criteria;</li>
                    <li>reviewing automated screening outcomes where appropriate; and</li>
                    <li>complying with applicable recruitment, employment, telecommunications, privacy and data protection laws.</li>
                  </ul>
                </section>

                {/* 3 */}
                <section className="space-y-4">
                  <SectionTitle id="screening-plans">3. AI Applicant Screening Call Plans</SectionTitle>
                  <p className="text-body leading-relaxed">
                    Unless otherwise agreed in writing, the following standard plans apply.
                  </p>
                  
                  <div className="space-y-4 mt-2">
                    <div className="rounded-xl border border-border bg-card/30 p-4 space-y-2">
                      <p className="font-semibold text-headline">Starter — $295/month</p>
                      <ul className="list-disc pl-5 text-body space-y-1 text-sm sm:text-base">
                        <li>100 completed AI Applicant Screening Calls included per month</li>
                        <li>Additional completed screenings: $3.50 each</li>
                      </ul>
                    </div>

                    <div className="rounded-xl border border-border bg-card/30 p-4 space-y-2">
                      <p className="font-semibold text-headline">Growth — $1,000/month</p>
                      <ul className="list-disc pl-5 text-body space-y-1 text-sm sm:text-base">
                        <li>400 completed AI Applicant Screening Calls included per month</li>
                        <li>Additional completed screenings: $3.00 each</li>
                      </ul>
                    </div>

                    <div className="rounded-xl border border-border bg-card/30 p-4 space-y-2">
                      <p className="font-semibold text-headline">Pro — $1,950/month</p>
                      <ul className="list-disc pl-5 text-body space-y-1 text-sm sm:text-base">
                        <li>1,000 completed AI Applicant Screening Calls included per month</li>
                        <li>Additional completed screenings: $2.00 each</li>
                      </ul>
                    </div>

                    <div className="rounded-xl border border-border bg-card/30 p-4 space-y-2">
                      <p className="font-semibold text-headline">Enterprise</p>
                      <ul className="list-disc pl-5 text-body space-y-1 text-sm sm:text-base">
                        <li>Custom monthly allowance and pricing agreed with the Customer.</li>
                      </ul>
                    </div>
                  </div>

                  <p className="text-body text-sm text-muted-text">
                    All prices are in USD and exclude applicable taxes unless otherwise stated.
                  </p>
                </section>

                {/* 4 */}
                <section className="space-y-4">
                  <SectionTitle id="credits">4. Credits</SectionTitle>
                  <p className="text-body leading-relaxed">
                    CallPilot operates a credit-based system for additional usage and eligible CallPilot products.
                  </p>
                  <div className="rounded-xl border border-border bg-card/30 p-4 font-semibold text-headline">
                    1 credit = $0.10 USD.
                  </div>
                  <p className="text-body leading-relaxed">
                    Credits are used only after the included monthly allowance for the applicable product has been exhausted.
                  </p>
                  <p className="text-body leading-relaxed font-medium text-headline">
                    For additional AI Applicant Screening usage, the applicable plan rates are:
                  </p>
                  <ul className="list-disc pl-5 text-body space-y-1.5 leading-relaxed">
                    <li><span className="font-medium text-headline">Starter:</span> 35 credits</li>
                    <li><span className="font-medium text-headline">Growth:</span> 30 credits</li>
                    <li><span className="font-medium text-headline">Pro:</span> 20 credits</li>
                    <li><span className="font-medium text-headline">Enterprise:</span> custom rate</li>
                  </ul>
                  <p className="text-body leading-relaxed">
                    Other CallPilot products may have different credit requirements. The applicable credit requirement will be displayed within the CallPilot platform or otherwise agreed with the Customer.
                  </p>
                </section>

                {/* 5 */}
                <section className="space-y-4">
                  <SectionTitle id="global-credit-balance">5. Global Credit Balance</SectionTitle>
                  <p className="text-body leading-relaxed">
                    Purchased top-up credits are added to the Customer’s Global Credit Balance.
                  </p>
                  <p className="text-body leading-relaxed">
                    The Global Credit Balance is separate from the included monthly allowance attached to an individual product subscription.
                  </p>
                  <p className="text-body leading-relaxed">
                    Credits may be used across eligible CallPilot products according to the credit requirement applicable to each product and plan.
                  </p>
                  <p className="text-body leading-relaxed font-medium text-headline">
                    Purchased credits:
                  </p>
                  <ul className="list-disc pl-5 text-body space-y-1.5 leading-relaxed">
                    <li>have a value of $0.10 per credit within CallPilot;</li>
                    <li>have no cash value outside CallPilot;</li>
                    <li>cannot normally be transferred between Customer accounts;</li>
                    <li>are non-refundable except where required by law; and</li>
                    <li>expire two months after purchase unless otherwise agreed.</li>
                  </ul>
                </section>

                {/* 6 */}
                <section className="space-y-4">
                  <SectionTitle id="completed-screenings">6. Completed Screenings</SectionTitle>
                  <p className="text-body leading-relaxed">
                    CallPilot charges for completed AI Applicant Screening Calls.
                  </p>
                  <p className="text-body leading-relaxed">
                    A screening is considered completed when the applicant completes the configured screening process.
                  </p>
                  <p className="text-body leading-relaxed">
                    If an applicant hangs up, disconnects or otherwise fails to complete the screening, the call will not be treated as a completed screening for billing purposes.
                  </p>
                </section>

                {/* 7 */}
                <section className="space-y-4">
                  <SectionTitle id="usage-calculation">7. Usage Calculation</SectionTitle>
                  <p className="text-body leading-relaxed">
                    For billing and usage calculation purposes, a standard AI Applicant Screening Call includes up to two minutes of call time.
                  </p>
                  <p className="text-body leading-relaxed">
                    Where a completed call exceeds this duration, additional usage may be applied in further two-minute increments, or part thereof, at the rate applicable to the Customer’s plan.
                  </p>
                  <p className="text-body leading-relaxed">
                    This calculation applies to both included screening allowances and additional screening usage.
                  </p>
                </section>

                {/* 8 */}
                <section className="space-y-4">
                  <SectionTitle id="monthly-allowances">8. Monthly Allowances</SectionTitle>
                  <p className="text-body leading-relaxed">
                    Included screening allowances reset on the Customer’s monthly subscription renewal date.
                  </p>
                  <p className="text-body leading-relaxed">
                    Included screening calls form part of the relevant subscription and are separate from purchased credits.
                  </p>
                  <p className="text-body leading-relaxed">
                    Unused included screening calls do not have a cash value and do not convert into Global Credit Balance credits.
                  </p>
                </section>

                {/* 9 */}
                <section className="space-y-4">
                  <SectionTitle id="upgrades-downgrades">9. Upgrades and Downgrades</SectionTitle>
                  <p className="text-body leading-relaxed">
                    Customers may upgrade or downgrade their subscription subject to the options available within CallPilot.
                  </p>
                  <p className="text-body leading-relaxed">
                    An upgrade may take effect immediately, with any applicable price adjustment shown before confirmation.
                  </p>
                  <p className="text-body leading-relaxed">
                    A downgrade will normally take effect from the next subscription renewal date.
                  </p>
                  <p className="text-body leading-relaxed">
                    Once a new plan becomes effective, the allowance, pricing and credit usage associated with that plan will apply to future usage.
                  </p>
                  <p className="text-body leading-relaxed">
                    Existing purchased credits remain in the Customer’s Global Credit Balance subject to their original expiry date.
                  </p>
                </section>

                {/* 10 */}
                <section className="space-y-4">
                  <SectionTitle id="subscription-payment">10. Subscription and Payment</SectionTitle>
                  <p className="text-body leading-relaxed">
                    Subscription fees are normally billed monthly in advance.
                  </p>
                  <p className="text-body leading-relaxed">
                    Subscriptions automatically renew until cancelled.
                  </p>
                  <p className="text-body leading-relaxed">
                    Customers must maintain a valid payment method where required.
                  </p>
                  <p className="text-body leading-relaxed">
                    Additional credits may be purchased manually or through automatic top-up where available.
                  </p>
                  <p className="text-body leading-relaxed">
                    Where automatic top-up is enabled, the Customer authorises CallPilot to charge the registered payment method when the Customer’s configured credit threshold is reached.
                  </p>
                  <p className="text-body leading-relaxed">
                    CallPilot may suspend or restrict Services where payment is overdue or unsuccessful.
                  </p>
                </section>

                {/* 11 */}
                <section className="space-y-4">
                  <SectionTitle id="trials-promotions">11. Trials and Promotional Credits</SectionTitle>
                  <p className="text-body leading-relaxed">
                    CallPilot may provide free screening calls, credits, trials or promotional allowances.
                  </p>
                  <p className="text-body leading-relaxed font-medium text-headline">
                    Promotional allowances:
                  </p>
                  <ul className="list-disc pl-5 text-body space-y-1.5 leading-relaxed">
                    <li>may be restricted to eligible Customers;</li>
                    <li>may have an expiry date;</li>
                    <li>are non-transferable;</li>
                    <li>have no cash value; and</li>
                    <li>may be subject to additional promotional terms.</li>
                  </ul>
                  <p className="text-body leading-relaxed">
                    Promotional offers do not create an entitlement to continued free usage.
                  </p>
                </section>

                {/* 12 */}
                <section className="space-y-4">
                  <SectionTitle id="telephone-communication">12. Telephone and Communication Services</SectionTitle>
                  <p className="text-body leading-relaxed">
                    CallPilot may provide telephone numbers, voice calling, WhatsApp, SMS, email and other communication functionality.
                  </p>
                  <p className="text-body leading-relaxed">
                    Customers may also connect compatible existing numbers or communication services where supported.
                  </p>
                  <p className="text-body leading-relaxed">
                    These services may rely on third-party telecommunications and technology providers and remain subject to provider availability, technical requirements and applicable laws.
                  </p>
                  <p className="text-body leading-relaxed">
                    Additional charges may apply where displayed within CallPilot or agreed with the Customer.
                  </p>
                </section>

                {/* 13 */}
                <section className="space-y-4">
                  <SectionTitle id="ai-human-oversight">13. AI Screening and Human Decision-Making</SectionTitle>
                  <p className="text-body leading-relaxed">
                    CallPilot automates applicant screening against criteria configured for the relevant role or workflow.
                  </p>
                  <p className="text-body leading-relaxed">
                    CallPilot does not make final hiring or employment decisions.
                  </p>
                  <p className="text-body leading-relaxed font-medium text-headline">
                    The Customer remains responsible for:
                  </p>
                  <ul className="list-disc pl-5 text-body space-y-1.5 leading-relaxed">
                    <li>determining applicant suitability;</li>
                    <li>ensuring screening questions and criteria are lawful and appropriate;</li>
                    <li>preventing unlawful discrimination;</li>
                    <li>reviewing screening outcomes where appropriate; and</li>
                    <li>making final recruitment and employment decisions.</li>
                  </ul>
                  <p className="text-body leading-relaxed">
                    AI-generated results are intended to assist recruitment workflows and should not be treated as a substitute for appropriate human oversight.
                  </p>
                </section>

                {/* 14 */}
                <section className="space-y-4">
                  <SectionTitle id="acceptable-use">14. Acceptable Use</SectionTitle>
                  <p className="text-body leading-relaxed font-medium text-headline">
                    Customers must not use CallPilot for:
                  </p>
                  <ul className="list-disc pl-5 text-body space-y-1.5 leading-relaxed">
                    <li>unlawful, fraudulent or deceptive activities;</li>
                    <li>unlawful unsolicited communications;</li>
                    <li>harassment or intimidation;</li>
                    <li>impersonation;</li>
                    <li>unlawful discrimination;</li>
                    <li>infringement of privacy or data protection rights;</li>
                    <li>communications prohibited by applicable telecommunications laws;</li>
                    <li>attempts to circumvent CallPilot security or usage controls; or</li>
                    <li>any activity prohibited by CallPilot’s applicable policies.</li>
                  </ul>
                </section>

                {/* 15 */}
                <section className="space-y-4">
                  <SectionTitle id="data-protection">15. Data Protection</SectionTitle>
                  <p className="text-body leading-relaxed">
                    Personal data processed through CallPilot is subject to CallPilot’s Privacy Policy, Data Processing Agreement and other applicable data protection policies.
                  </p>
                  <p className="text-body leading-relaxed">
                    Depending on the processing activity, Swiftwave FZ-LLC may act as a processor of personal data on behalf of the Customer.
                  </p>
                  <p className="text-body leading-relaxed">
                    Customers are responsible for establishing the appropriate lawful basis for personal data supplied to CallPilot and for providing notices or obtaining consent where required by applicable law.
                  </p>
                </section>

                {/* 16 */}
                <section className="space-y-4">
                  <SectionTitle id="call-audio-transcripts">16. Call Audio and Transcripts</SectionTitle>
                  <p className="text-body leading-relaxed">
                    CallPilot does not provide permanent storage of call audio recordings as part of its standard AI Applicant Screening Service unless expressly agreed otherwise.
                  </p>
                  <p className="text-body leading-relaxed">
                    Audio necessary to provide AI calling functionality may be processed in real time by CallPilot and its authorised service providers.
                  </p>
                  <p className="text-body leading-relaxed">
                    Where transcripts or call text are generated, their processing and retention are governed by CallPilot’s applicable Privacy Policy, Data Processing Agreement and retention policies.
                  </p>
                  <p className="text-body leading-relaxed">
                    Customers should not use CallPilot as their sole permanent archive for applicant information.
                  </p>
                </section>

                {/* 17 */}
                <section className="space-y-4">
                  <SectionTitle id="third-party-integrations">17. Third-Party Integrations</SectionTitle>
                  <p className="text-body leading-relaxed">
                    CallPilot may integrate with ATS platforms, CRM systems, telecommunications providers, messaging services, AI providers and other third-party services.
                  </p>
                  <p className="text-body leading-relaxed">
                    Availability and performance of these services may depend on the relevant third-party provider.
                  </p>
                  <p className="text-body leading-relaxed">
                    CallPilot is not responsible for outages, API changes, restrictions, suspensions or failures caused by third-party services outside its reasonable control.
                  </p>
                </section>

                {/* 18 */}
                <section className="space-y-4">
                  <SectionTitle id="intellectual-property">18. Intellectual Property</SectionTitle>
                  <p className="text-body leading-relaxed">
                    CallPilot’s software, platform, workflows, interfaces, branding, AI configurations and associated technology remain the property of Swiftwave FZ-LLC or its licensors.
                  </p>
                  <p className="text-body leading-relaxed">
                    Customers retain ownership of their own data and content.
                  </p>
                  <p className="text-body leading-relaxed">
                    Customers grant Swiftwave FZ-LLC the rights reasonably necessary to process Customer data for the provision, security and operation of the Services.
                  </p>
                </section>

                {/* 19 */}
                <section className="space-y-4">
                  <SectionTitle id="confidentiality">19. Confidentiality</SectionTitle>
                  <p className="text-body leading-relaxed">
                    Each party must protect confidential information received from the other and use it only for purposes connected with the provision or use of CallPilot.
                  </p>
                  <p className="text-body leading-relaxed font-medium text-headline">
                    This obligation does not apply to information that:
                  </p>
                  <ul className="list-disc pl-5 text-body space-y-1.5 leading-relaxed">
                    <li>is publicly available through no breach of these Terms;</li>
                    <li>was already lawfully known;</li>
                    <li>is independently developed;</li>
                    <li>is lawfully obtained from another source; or</li>
                    <li>must be disclosed by law or regulatory requirement.</li>
                  </ul>
                </section>

                {/* 20 */}
                <section className="space-y-4">
                  <SectionTitle id="service-availability">20. Service Availability</SectionTitle>
                  <p className="text-body leading-relaxed">
                    CallPilot aims to provide a reliable Service but does not guarantee uninterrupted or error-free availability.
                  </p>
                  <p className="text-body leading-relaxed">
                    Temporary interruptions may occur because of maintenance, telecommunications networks, internet infrastructure, third-party providers, security requirements or circumstances outside CallPilot’s reasonable control.
                  </p>
                </section>

                {/* 21 */}
                <section className="space-y-4">
                  <SectionTitle id="ai-accuracy">21. AI Accuracy and Service Outcomes</SectionTitle>
                  <p className="text-body leading-relaxed">
                    AI systems may occasionally generate inaccurate, incomplete or unexpected results.
                  </p>
                  <p className="text-body leading-relaxed font-medium text-headline">
                    CallPilot does not guarantee:
                  </p>
                  <ul className="list-disc pl-5 text-body space-y-1.5 leading-relaxed">
                    <li>that every applicant will answer;</li>
                    <li>that every screening will be completed;</li>
                    <li>that every AI-generated response, transcript or classification will be error-free;</li>
                    <li>that requested documents will be supplied; or</li>
                    <li>any particular recruitment, hiring or commercial outcome.</li>
                  </ul>
                  <p className="text-body leading-relaxed">
                    Customers remain responsible for appropriate human oversight.
                  </p>
                </section>

                {/* 22 */}
                <section className="space-y-4">
                  <SectionTitle id="cancellation">22. Cancellation</SectionTitle>
                  <p className="text-body leading-relaxed">
                    Customers may cancel their subscription through available account functionality or by contacting CallPilot.
                  </p>
                  <p className="text-body leading-relaxed">
                    Unless otherwise agreed, cancellation takes effect at the end of the current paid subscription period.
                  </p>
                  <p className="text-body leading-relaxed">
                    Cancellation prevents future subscription renewals but does not automatically entitle the Customer to a refund for subscription fees, credits or usage already purchased or incurred.
                  </p>
                </section>

                {/* 23 */}
                <section className="space-y-4">
                  <SectionTitle id="suspension-termination">23. Suspension and Termination</SectionTitle>
                  <p className="text-body leading-relaxed font-medium text-headline">
                    CallPilot may suspend or terminate access where:
                  </p>
                  <ul className="list-disc pl-5 text-body space-y-1.5 leading-relaxed">
                    <li>payment is overdue;</li>
                    <li>these Terms or applicable CallPilot policies are materially breached;</li>
                    <li>the Service is used unlawfully;</li>
                    <li>usage creates a material security, legal or regulatory risk; or</li>
                    <li>continued provision of the Service is prevented by a third-party provider or applicable law.</li>
                  </ul>
                </section>

                {/* 24 */}
                <section className="space-y-4">
                  <SectionTitle id="liability">24. Limitation of Liability</SectionTitle>
                  <p className="text-body leading-relaxed">
                    To the maximum extent permitted by applicable law, Swiftwave FZ-LLC will not be liable for indirect, incidental, special or consequential losses, including loss of profit, revenue, business opportunity, goodwill or data arising from use of CallPilot.
                  </p>
                  <p className="text-body leading-relaxed">
                    Except where liability cannot lawfully be limited, Swiftwave FZ-LLC’s total aggregate liability arising from the Services will not exceed the fees paid by the Customer to Swiftwave FZ-LLC during the 12 months immediately preceding the event giving rise to the claim.
                  </p>
                </section>

                {/* 25 */}
                <section className="space-y-4">
                  <SectionTitle id="indemnity">25. Indemnity</SectionTitle>
                  <p className="text-body leading-relaxed">
                    To the extent permitted by applicable law, the Customer will be responsible for claims, losses and reasonable costs resulting from the Customer’s unlawful use of CallPilot, material breach of these Terms or violation of applicable recruitment, employment, telecommunications, privacy or data protection laws.
                  </p>
                </section>

                {/* 26 */}
                <section className="space-y-4">
                  <SectionTitle id="changes">26. Changes to Services, Pricing and Terms</SectionTitle>
                  <p className="text-body leading-relaxed">
                    CallPilot may update its Services, functionality, credit requirements, pricing and these Terms from time to time.
                  </p>
                  <p className="text-body leading-relaxed">
                    Where a change to subscription pricing affects an existing Customer, the revised subscription price will apply from a future renewal date following reasonable notice where required.
                  </p>
                  <p className="text-body leading-relaxed">
                    Changes will not retrospectively alter charges already incurred.
                  </p>
                  <p className="text-body leading-relaxed">
                    The latest version of these Terms will be published on CallPilot.pro.
                  </p>
                </section>

                {/* 27 */}
                <section className="space-y-4">
                  <SectionTitle id="governing-law">27. Governing Law and Jurisdiction</SectionTitle>
                  <p className="text-body leading-relaxed">
                    These Terms are governed by the applicable laws of the United Arab Emirates.
                  </p>
                  <p className="text-body leading-relaxed">
                    Any dispute will be subject to the competent courts applicable to Swiftwave FZ-LLC in the United Arab Emirates, except where mandatory applicable law provides otherwise.
                  </p>
                </section>

                {/* 28 */}
                <section className="space-y-4">
                  <SectionTitle id="contact">28. Contact</SectionTitle>
                  <div className="rounded-2xl border border-border bg-card/40 p-5 sm:p-6 space-y-2">
                    <p className="font-semibold text-headline text-lg">Swiftwave FZ-LLC</p>
                    <p className="text-body">Trading as CallPilot</p>
                    <div className="text-body text-sm sm:text-base leading-relaxed text-muted-text pt-2 space-y-0.5">
                      <p>Compass Building</p>
                      <p>Al Shohada Road</p>
                      <p>Al Hamra Industrial Zone-FZ</p>
                      <p>Ras Al Khaimah</p>
                      <p>United Arab Emirates</p>
                      <p className="pt-2 font-medium text-headline">Company Registration: FAMC1471</p>
                    </div>

                    <div className="pt-4 space-y-2 border-t border-border mt-4">
                      <p className="text-body">
                        <span className="text-muted-text">Email:</span>{" "}
                        <a
                          href="mailto:contact@swiftwave.ai"
                          className="text-body hover:text-headline underline underline-offset-4 font-medium"
                        >
                          contact@swiftwave.ai
                        </a>
                      </p>
                      <p className="text-body">
                        <span className="text-muted-text">Website:</span>{" "}
                        <a
                          href="https://callpilot.pro"
                          target="_blank"
                          rel="noreferrer"
                          className="text-body hover:text-headline underline underline-offset-4 font-medium"
                        >
                          callpilot.pro
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
