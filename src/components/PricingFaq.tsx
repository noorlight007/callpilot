import JsonLd from "@/components/JsonLd";

const PRICING_FAQ = [
  {
    question: "What counts as one screening credit?",
    answer: "One credit covers one AI screening call of up to 2 minutes.",
  },
  {
    question: "Am I charged if the applicant doesn't answer?",
    answer: "No. No call, no charge. You only pay for completed screenings.",
  },
  {
    question: "Is there a free trial?",
    answer: "Yes. New clients get their first 100 screening calls free, with no credit card required.",
  },
  {
    question: "Do I need a new phone number?",
    answer: "You can use a CallPilot AI number for $10 a month, or connect a compatible number you already have.",
  },
  {
    question: "Which ATS platforms does CallPilot connect to?",
    answer: "JobAdder, Recruit CRM, Ashby, Greenhouse and iCIMS.",
  },
  {
    question: "What if I need more than 1,000 screenings a month?",
    answer: "Enterprise plans cover 2,000+ screenings a month with custom pricing. Top-ups are also available on every plan.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: PRICING_FAQ.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function PricingFaq() {
  return (
    <section aria-labelledby="pricing-faq" className="py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 id="pricing-faq" className="text-3xl font-semibold text-headline text-center mb-8">
            Pricing questions
          </h2>
          <div className="rounded-xl border border-border bg-card px-6 divide-y divide-border">
            {PRICING_FAQ.map((f) => (
              <details key={f.question} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-medium text-headline">
                  <h3 className="text-base font-medium">{f.question}</h3>
                  <span aria-hidden className="text-xl leading-none group-open:hidden">+</span>
                  <span aria-hidden className="hidden text-xl leading-none group-open:inline">−</span>
                </summary>
                <p className="mt-3 text-body leading-relaxed">{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
      <JsonLd data={faqSchema} />
    </section>
  );
}
