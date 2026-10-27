import GetStartedForm from "@/components/GetStartedForm";
import FormPageInfo from "@/components/FormPageInfo";

export default function GetStartedPage() {
  return (
    <>
      <GetStartedForm isDemo={false} />
      <FormPageInfo
        heading="What happens after you get started"
        steps={[
          { title: "Tell us what you need", text: "Send your company type, your ATS and your approximate applicant volume." },
          { title: "We set it up", text: "Our team replies within one business day and configures your numbers, screening questions and ATS connection with you." },
          { title: "Go live", text: "AI screening plans start at $49 a month, and new clients get their first 100 screening calls free." },
        ]}
        faqs={[
          { q: "What can I get started with?", a: "AI applicant screening calls that qualify every applicant 24/7, collect documents by SMS or WhatsApp and sync results to your ATS." },
          { q: "Which ATS platforms are supported?", a: "JobAdder, Recruit CRM, Ashby and Greenhouse. iCIMS is coming soon." },
          { q: "Do I need a new phone number?", a: "No. You can use a CallPilot number or connect a compatible number you already have." },
          { q: "Is there a free trial?", a: "Yes. New clients get their first 100 AI screening calls free." },
        ]}
      />
    </>
  );
}
