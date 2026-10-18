import GetStartedForm from "@/components/GetStartedForm";
import FormPageInfo from "@/components/FormPageInfo";

export default function GetStartedPage() {
  return (
    <>
      <GetStartedForm isDemo={false} />
      <FormPageInfo
        heading="What happens after you get started"
        steps={[
          { title: "Tell us what you need", text: "Send your team size, your ATS and whether you want VoIP phone lines, AI applicant screening calls or both." },
          { title: "We set it up", text: "Our team replies within one business day and configures your numbers, screening questions and ATS connection with you." },
          { title: "Go live", text: "VoIP lines start from $5.99 per line per month. AI screening plans start at $49 a month, and new clients get their first 10 screening calls free." },
        ]}
        faqs={[
          { q: "What can I get started with?", a: "CallPilot offers VoIP phone lines with WhatsApp, SMS and email automation, and AI applicant screening calls that qualify every applicant 24/7 and sync results to your ATS." },
          { q: "Which ATS platforms are supported?", a: "JobAdder, Recruit CRM, Ashby and Greenhouse. iCIMS is coming soon." },
          { q: "Do I need a new phone number?", a: "No. You can use a CallPilot number or connect a compatible number you already have." },
          { q: "Is there a free trial?", a: "Yes. New clients get their first 10 AI screening calls free." },
        ]}
      />
    </>
  );
}
