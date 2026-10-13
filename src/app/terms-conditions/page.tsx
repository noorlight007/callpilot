// app/terms-conditions/page.tsx
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for CallPilot VoIP phone lines, AI applicant screening calls and automation, operated by Swiftwave FZ-LLC.",
  alternates: { canonical: "https://callpilot.pro/terms-conditions" },
  openGraph: {
    title: "Terms of Service | CallPilot",
    description:
      "Terms of Service for CallPilot VoIP phone lines, AI applicant screening calls and automation, operated by Swiftwave FZ-LLC.",
    url: "https://callpilot.pro/terms-conditions",
    siteName: "CallPilot",
    type: "website",
    images: ["/images/og-callpilot.png"],
  },
};

const EFFECTIVE_DATE = "13 October 2026";

const SCREENING_PLANS = [
  { name: "Starter", price: "$395", included: "100", each: "$3.95", topUp: "$4.45" },
  { name: "Growth", price: "$1,400", included: "400", each: "$3.50", topUp: "$3.90" },
  { name: "Pro", price: "$2,950", included: "1,000", each: "$2.95", topUp: "$2.95" },
];

type Section = { id: string; title: string; body: ReactNode };

const SECTIONS: Section[] = [
  {
    id: "services",
    title: "CallPilot Services",
    body: (
      <>
        <p>CallPilot provides VoIP phone lines, AI applicant screening calls, an AI call agent and communication automation, together with associated ATS, CRM, messaging and workflow integrations.</p>
        <p>AI Applicant Screening Calls may:</p>
        <ul>
          <li>contact applicants automatically;</li>
          <li>conduct role-specific screening questions;</li>
          <li>assess responses against configured screening criteria;</li>
          <li>provide screening outcomes;</li>
          <li>request documents from qualified applicants;</li>
          <li>communicate through WhatsApp, SMS and/or email where enabled;</li>
          <li>update connected ATS or CRM systems; and</li>
          <li>notify authorised users of screening outcomes.</li>
        </ul>
        <p>Each CallPilot product has its own subscription, allowance and billing unit. Allowances cannot be transferred between products.</p>
      </>
    ),
  },
  {
    id: "customer-responsibilities",
    title: "Customer Responsibilities",
    body: (
      <>
        <p>Customers are responsible for:</p>
        <ul>
          <li>maintaining accurate account information;</li>
          <li>protecting account credentials;</li>
          <li>ensuring applicant and contact information supplied to CallPilot has been obtained and processed lawfully;</li>
          <li>ensuring an appropriate lawful basis exists for communications;</li>
          <li>configuring appropriate and lawful screening criteria;</li>
          <li>providing and maintaining their own WhatsApp sender account where WhatsApp automation is used;</li>
          <li>reviewing automated screening outcomes where appropriate; and</li>
          <li>complying with applicable recruitment, employment, telecommunications, privacy and data protection laws.</li>
        </ul>
      </>
    ),
  },
  {
    id: "screening-plans",
    title: "AI Applicant Screening Call Plans",
    body: (
      <>
        <p>Unless otherwise agreed in writing, the following standard monthly plans apply:</p>
        <table>
          <thead>
            <tr><th>Plan</th><th>Monthly price</th><th>Included completed screenings</th><th>Per screening</th><th>Top-up per screening</th></tr>
          </thead>
          <tbody>
            {SCREENING_PLANS.map((p) => (
              <tr key={p.name}>
                <td>{p.name}</td><td>{p.price}/month</td><td>{p.included}</td><td>{p.each}</td><td>{p.topUp}</td>
              </tr>
            ))}
            <tr><td>Enterprise</td><td>Custom</td><td>2,000+</td><td>Custom</td><td>Custom</td></tr>
          </tbody>
        </table>
        <p>All prices are in USD and exclude applicable taxes unless otherwise stated.</p>
      </>
    ),
  },
  {
    id: "completed-screenings",
    title: "Completed Screenings and Screening Credits",
    body: (
      <>
        <p>CallPilot charges only for completed AI Applicant Screening Calls. No call, no charge.</p>
        <p>A screening is completed when the applicant completes the configured screening process. If an applicant does not answer, hangs up, disconnects or otherwise does not complete the screening, no charge is made.</p>
        <p>One screening credit covers one completed screening call of up to two minutes. Where a completed call runs longer than two minutes, a further screening credit is used for each additional two minutes or part thereof.</p>
      </>
    ),
  },
  {
    id: "top-ups",
    title: "Top-Ups",
    body: (
      <>
        <p>Completed screenings above the included monthly allowance are charged at the top-up rate for the Customer’s plan.</p>
        <p>Top-ups may be purchased manually or through automatic top-up where available. Where automatic top-up is enabled, the Customer authorises CallPilot to charge the registered payment method when the configured threshold is reached.</p>
      </>
    ),
  },
  {
    id: "monthly-allowances",
    title: "Monthly Allowances and Carry-Over",
    body: (
      <>
        <p>Included allowances renew on the Customer’s monthly subscription renewal date.</p>
        <p>Any unused allowance, including screenings, minutes and top-ups, carries over for one month only and then expires.</p>
        <p>Unused allowances have no cash value, cannot be transferred between accounts or products, and are not credited or refunded.</p>
      </>
    ),
  },
  {
    id: "voip-phone-lines",
    title: "VoIP Phone Lines",
    body: (
      <>
        <p>CallPilot VoIP phone lines are billed per line, per month, in advance, at the prices shown on the <Link href="/pricing">CallPilot pricing page</Link> at the time of order or as agreed in writing. There is no setup fee.</p>
        <p>Incoming calls are included subject to fair use. Outbound minutes above any included allowance, WhatsApp messages, SMS messages and other usage are charged separately at the applicable pay-as-you-go rates.</p>
        <p>Customers may transfer an existing number to CallPilot where supported. Number transfers depend on the Customer’s current provider and can take time to complete. The Customer must have authority to transfer the number.</p>
      </>
    ),
  },
  {
    id: "ai-call-agent",
    title: "AI Call Agent",
    body: (
      <p>AI Call Agent plans are billed per minute, at the plan prices, allowances and rates shown within the CallPilot platform or agreed in writing with the Customer.</p>
    ),
  },
  {
    id: "subscription-payment",
    title: "Subscription and Payment",
    body: (
      <>
        <p>Subscriptions are billed monthly in advance and renew automatically until cancelled.</p>
        <p>Customers must maintain a valid payment method.</p>
        <p>Prices exclude applicable taxes. VAT is charged where applicable.</p>
        <p>CallPilot may suspend or restrict Services where payment is overdue or unsuccessful.</p>
      </>
    ),
  },
  {
    id: "free-trial",
    title: "Free Trial and Promotional Offers",
    body: (
      <>
        <p>New clients receive their first 100 AI applicant screening calls free. This is a one-time offer per new client, is not tied to a specific plan, and has no cash value.</p>
        <p>Other promotional offers may be restricted to eligible Customers, may have an expiry date, are non-transferable, have no cash value and may be subject to additional promotional terms.</p>
        <p>Promotional offers do not create an entitlement to continued free usage.</p>
      </>
    ),
  },
  {
    id: "upgrades-downgrades",
    title: "Upgrades and Downgrades",
    body: (
      <>
        <p>Customers may upgrade or downgrade their subscription subject to the options available within CallPilot.</p>
        <p>An upgrade may take effect immediately, with any applicable price adjustment shown before confirmation.</p>
        <p>A downgrade normally takes effect from the next renewal date.</p>
        <p>Once a new plan becomes effective, its allowance and rates apply to future usage.</p>
      </>
    ),
  },
  {
    id: "custom-work",
    title: "Custom Work",
    body: (
      <>
        <p>There is no development fee for the standard CallPilot product.</p>
        <p>Where a Customer requests a bespoke change to the standard product, any development fee will be quoted and agreed in writing before work starts.</p>
      </>
    ),
  },
  {
    id: "telephone-communication",
    title: "Telephone and Communication Services",
    body: (
      <>
        <p>CallPilot may provide telephone numbers, voice calling, WhatsApp, SMS, email and other communication functionality.</p>
        <p>Customers may connect compatible existing numbers or communication services where supported.</p>
        <p>These services rely on third-party telecommunications and technology providers and remain subject to provider availability, technical requirements and applicable laws.</p>
      </>
    ),
  },
  {
    id: "ai-human-oversight",
    title: "AI Screening and Human Decision-Making",
    body: (
      <>
        <p>CallPilot automates applicant screening against criteria configured for the relevant role or workflow.</p>
        <p>CallPilot does not make final hiring or employment decisions.</p>
        <p>The Customer remains responsible for:</p>
        <ul>
          <li>determining applicant suitability;</li>
          <li>ensuring screening questions and criteria are lawful and appropriate;</li>
          <li>preventing unlawful discrimination;</li>
          <li>reviewing screening outcomes where appropriate; and</li>
          <li>making final recruitment and employment decisions.</li>
        </ul>
        <p>AI-generated results are intended to assist recruitment workflows and should not be treated as a substitute for appropriate human oversight.</p>
      </>
    ),
  },
  {
    id: "acceptable-use",
    title: "Acceptable Use",
    body: (
      <>
        <p>Customers must not use CallPilot for:</p>
        <ul>
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
      </>
    ),
  },
  {
    id: "data-protection",
    title: "Data Protection",
    body: (
      <>
        <p>Personal data processed through CallPilot is subject to CallPilot’s <Link href="/privacy-policy">Privacy Policy</Link>, Data Processing Agreement and other applicable data protection policies.</p>
        <p>Depending on the processing activity, Swiftwave FZ-LLC may act as a processor of personal data on behalf of the Customer.</p>
        <p>Customers are responsible for establishing the appropriate lawful basis for personal data supplied to CallPilot and for providing notices or obtaining consent where required by applicable law.</p>
      </>
    ),
  },
  {
    id: "call-audio-transcripts",
    title: "Call Audio and Transcripts",
    body: (
      <>
        <p>CallPilot does not provide permanent storage of call audio recordings as part of its standard AI Applicant Screening service unless expressly agreed otherwise.</p>
        <p>Audio needed to provide AI calling functionality may be processed in real time by CallPilot and its authorised service providers.</p>
        <p>Where transcripts or call text are generated, their processing and retention are governed by CallPilot’s Privacy Policy, Data Processing Agreement and retention policies.</p>
        <p>Customers should not use CallPilot as their sole permanent archive for applicant information.</p>
      </>
    ),
  },
  {
    id: "third-party-integrations",
    title: "Third-Party Integrations",
    body: (
      <>
        <p>CallPilot may integrate with ATS platforms, CRM systems, telecommunications providers, messaging services, AI providers and other third-party services.</p>
        <p>Availability and performance of these services may depend on the relevant third-party provider.</p>
        <p>CallPilot is not responsible for outages, API changes, restrictions, suspensions or failures caused by third-party services outside its reasonable control.</p>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    body: (
      <>
        <p>CallPilot’s software, platform, workflows, interfaces, branding, AI configurations and associated technology remain the property of Swiftwave FZ-LLC or its licensors.</p>
        <p>Customers retain ownership of their own data and content.</p>
        <p>Customers grant Swiftwave FZ-LLC the rights reasonably necessary to process Customer data for the provision, security and operation of the Services.</p>
      </>
    ),
  },
  {
    id: "confidentiality",
    title: "Confidentiality",
    body: (
      <>
        <p>Each party must protect confidential information received from the other and use it only for purposes connected with the provision or use of CallPilot.</p>
        <p>This obligation does not apply to information that:</p>
        <ul>
          <li>is publicly available through no breach of these Terms;</li>
          <li>was already lawfully known;</li>
          <li>is independently developed;</li>
          <li>is lawfully obtained from another source; or</li>
          <li>must be disclosed by law or regulatory requirement.</li>
        </ul>
      </>
    ),
  },
  {
    id: "service-availability",
    title: "Service Availability",
    body: (
      <>
        <p>CallPilot aims to provide a reliable Service but does not guarantee uninterrupted or error-free availability.</p>
        <p>Temporary interruptions may occur because of maintenance, telecommunications networks, internet infrastructure, third-party providers, security requirements or circumstances outside CallPilot’s reasonable control.</p>
      </>
    ),
  },
  {
    id: "ai-accuracy",
    title: "AI Accuracy and Service Outcomes",
    body: (
      <>
        <p>AI systems may occasionally generate inaccurate, incomplete or unexpected results.</p>
        <p>CallPilot does not guarantee:</p>
        <ul>
          <li>that every applicant will answer;</li>
          <li>that every screening will be completed;</li>
          <li>that every AI-generated response, transcript or classification will be error-free;</li>
          <li>that requested documents will be supplied; or</li>
          <li>any particular recruitment, hiring or commercial outcome.</li>
        </ul>
        <p>Customers remain responsible for appropriate human oversight.</p>
      </>
    ),
  },
  {
    id: "cancellation",
    title: "Cancellation",
    body: (
      <>
        <p>Customers may cancel their subscription through their account or by contacting CallPilot.</p>
        <p>Unless otherwise agreed, cancellation takes effect at the end of the current paid subscription period.</p>
        <p>Cancellation stops future renewals but does not entitle the Customer to a credit or refund for subscription fees, allowances, top-ups or usage already purchased or incurred.</p>
      </>
    ),
  },
  {
    id: "suspension-termination",
    title: "Suspension and Termination",
    body: (
      <>
        <p>CallPilot may suspend or terminate access where:</p>
        <ul>
          <li>payment is overdue;</li>
          <li>these Terms or applicable CallPilot policies are materially breached;</li>
          <li>the Service is used unlawfully;</li>
          <li>usage creates a material security, legal or regulatory risk; or</li>
          <li>continued provision of the Service is prevented by a third-party provider or applicable law.</li>
        </ul>
      </>
    ),
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    body: (
      <>
        <p>To the maximum extent permitted by applicable law, Swiftwave FZ-LLC will not be liable for indirect, incidental, special or consequential losses, including loss of profit, revenue, business opportunity, goodwill or data arising from use of CallPilot.</p>
        <p>Except where liability cannot lawfully be limited, Swiftwave FZ-LLC’s total aggregate liability arising from the Services will not exceed the fees paid by the Customer to Swiftwave FZ-LLC during the 12 months immediately preceding the event giving rise to the claim.</p>
      </>
    ),
  },
  {
    id: "indemnity",
    title: "Indemnity",
    body: (
      <p>To the extent permitted by applicable law, the Customer will be responsible for claims, losses and reasonable costs resulting from the Customer’s unlawful use of CallPilot, material breach of these Terms or violation of applicable recruitment, employment, telecommunications, privacy or data protection laws.</p>
    ),
  },
  {
    id: "changes",
    title: "Changes to Services, Pricing and Terms",
    body: (
      <>
        <p>CallPilot may update its Services, functionality, pricing and these Terms from time to time.</p>
        <p>Where a change to subscription pricing affects an existing Customer, the revised price will apply from a future renewal date following reasonable notice.</p>
        <p>Changes will not retrospectively alter charges already incurred.</p>
        <p>The latest version of these Terms is published at callpilot.pro/terms-conditions.</p>
      </>
    ),
  },
  {
    id: "governing-law",
    title: "Governing Law and Jurisdiction",
    body: (
      <>
        <p>These Terms are governed by the laws of the United Arab Emirates.</p>
        <p>Any dispute will be subject to the competent courts applicable to Swiftwave FZ-LLC in the United Arab Emirates, except where mandatory applicable law provides otherwise.</p>
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    body: (
      <address style={{ fontStyle: "normal" }}>
        Swiftwave FZ-LLC, trading as CallPilot<br />
        FAMC1471, Compass Building, Al Shohada Road<br />
        Al Hamra Industrial Zone-FZ, Ras Al Khaimah<br />
        United Arab Emirates<br />
        RAKEZ Licence No: 47028798<br />
        VAT TRN: 105530736500003<br />
        Email: <a href="mailto:contact@swiftwave.ai">contact@swiftwave.ai</a><br />
        Website: <Link href="/">callpilot.pro</Link>
      </address>
    ),
  },
];

export default function TermsPage() {
  return (
    <>
      <Header />
      <main id="top" className="legal-page pt-32">
        <p className="legal-eyebrow">Legal</p>
        <h1>CallPilot Terms of Service</h1>
        <p>Operated by Swiftwave FZ-LLC</p>
        <p>Effective Date: {EFFECTIVE_DATE}</p>

        <p>These Terms of Service (“Terms”) govern access to and use of CallPilot, operated by Swiftwave FZ-LLC (“CallPilot”, “Swiftwave”, “we”, “us” or “our”).</p>
        <p>By creating an account, purchasing a subscription or using CallPilot, you (“Customer”, “you” or “your”) agree to these Terms.</p>

        <nav aria-label="On this page" className="legal-toc">
          <p>On this page</p>
          <ol>
            {SECTIONS.map((s) => (
              <li key={s.id}><a href={`#${s.id}`}>{s.title}</a></li>
            ))}
          </ol>
        </nav>

        {SECTIONS.map((s, i) => (
          <section key={s.id} id={s.id}>
            <h2>{i + 1}. {s.title}</h2>
            {s.body}
          </section>
        ))}

        <p><a href="#top">↑ Back to top</a></p>
      </main>
      <Footer />
    </>
  );
}
