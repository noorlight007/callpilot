import GetStartedForm from "@/components/GetStartedForm";

export default function BookADemoPage() {
  return (
    <GetStartedForm
      isDemo={true}
      heading="Book a CallPilot Walkthrough"
      intro="See how screening, WhatsApp and SMS document collection and ATS sync work for your team."
    />
  );
}
