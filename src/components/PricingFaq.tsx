import JsonLd from "@/components/JsonLd";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const PRICING_FAQ = [
  {
    question: "What counts as one screening credit?",
    answer: "One credit covers one AI screening call of up to 2 minutes.",
  },
  {
    question: "Am I charged if the applicant doesn't answer?",
    answer: "No. If the applicant is not reached, there is no charge.",
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
    answer: "JobAdder, Recruit CRM and Ashby today, with Greenhouse and iCIMS coming soon.",
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
          <Accordion type="single" collapsible className="rounded-xl border border-border bg-card px-6">
            {PRICING_FAQ.map((f, i) => (
              <AccordionItem key={f.question} value={`faq-${i}`} className="last:border-b-0">
                <AccordionTrigger className="text-left text-base text-headline hover:no-underline">
                  {f.question}
                </AccordionTrigger>
                <AccordionContent className="text-body leading-relaxed">{f.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <JsonLd data={faqSchema} />
    </section>
  );
}
