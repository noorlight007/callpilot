import GetStartedForm from "@/components/GetStartedForm";
import FormPageInfo from "@/components/FormPageInfo";

export default function BookADemoPage() {
  return (
    <>
      <GetStartedForm
        isDemo={true}
        heading="Book a CallPilot Walkthrough"
        intro="See how screening, WhatsApp and SMS document collection and ATS sync work for your team."
      />
      <FormPageInfo
        heading="What you will see in the walkthrough"
        steps={[
          { title: "An AI screening call", text: "How CallPilot calls an applicant, asks your role-specific questions and decides whether they meet your requirements." },
          { title: "Document collection", text: "How qualified applicants are asked for ID and documents by WhatsApp or SMS, with automated reminders." },
          { title: "ATS sync", text: "How outcomes, transcripts and documents are written back to JobAdder, Recruit CRM or Ashby, with traffic-light statuses for your recruiters." },
        ]}
        faqs={[
          { q: "How long is the walkthrough?", a: "We tailor it to your team. Tell us your ATS and volumes in the form and we will focus on what matters to you." },
          { q: "Can I try an AI screening call myself?", a: "Yes. The homepage lets you request a demo AI call to your own phone." },
          { q: "Can I see VoIP phone lines too?", a: "Yes. We can cover VoIP lines with WhatsApp, SMS and email automation in the same session." },
          { q: "What does it cost?", a: "VoIP lines start from $5.99 per line per month and AI screening plans from $395 a month. New clients get their first 100 screening calls free." },
        ]}
      />
    </>
  );
}
