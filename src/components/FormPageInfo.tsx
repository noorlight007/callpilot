import Link from "next/link";
import JsonLd from "@/components/JsonLd";

// Server-rendered copy under the client-only sign-up forms, so crawlers see real content.
export interface FormPageInfoProps {
  heading: string;
  steps: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
}

export default function FormPageInfo({ heading, steps, faqs }: FormPageInfoProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <section className="bg-white text-gray-900 px-4 sm:px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">{heading}</h2>
        <ol className="space-y-5 mb-14">
          {steps.map((st, i) => (
            <li key={st.title} className="flex gap-4">
              <span className="font-bold text-lg w-8 shrink-0">{i + 1}.</span>
              <div>
                <h3 className="font-semibold">{st.title}</h3>
                <p className="text-gray-700 mt-1 leading-relaxed">{st.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <h2 className="text-2xl font-bold mb-6">Common questions</h2>
        <div className="divide-y divide-gray-200 border-y border-gray-200">
          {faqs.map((f) => (
            <details key={f.q} className="py-4">
              <summary className="cursor-pointer font-semibold">{f.q}</summary>
              <p className="mt-2 text-gray-700 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
        <p className="mt-10 text-gray-700">
          See <Link href="/pricing" className="underline font-medium">pricing</Link>, the{" "}
          <Link href="/ai-applicant-screening" className="underline font-medium">AI applicant screening call</Link> or the{" "}
          <Link href="/integrations" className="underline font-medium">ATS integrations</Link>.
        </p>
      </div>
      <JsonLd data={faqSchema} />
    </section>
  );
}
