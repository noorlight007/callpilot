import { PhoneOutgoing, PhoneIncoming, Calendar, ClipboardCheck, HeartPulse, Building2, FileUser } from "lucide-react";

const useCases = [
  {
    icon: PhoneOutgoing,
    title: "Outbound Sales",
    description: "Automate prospecting calls, qualify leads, and book meetings at scale.",
  },
  {
    icon: PhoneIncoming,
    title: "Customer Support",
    description: "Handle inbound queries 24/7 with intelligent routing and resolution.",
  },
  {
    icon: Calendar,
    title: "Appointment Scheduling",
    description: "Book, confirm, and reschedule appointments automatically.",
  },
  {
    icon: ClipboardCheck,
    title: "Surveys & Feedback",
    description: "Collect customer insights through natural voice conversations.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare Reminders",
    description: "Patient outreach for appointments, medications, and follow-ups.",
  },
  {
    icon: FileUser,
    title: "Job Applications",
    description: "Auto-respond, screen, and schedule interviews at scale.",
  },
  {
    icon: Building2,
    title: "Real Estate",
    description: "Property inquiries, showing scheduling, and lead qualification.",
  },
];

const UseCases = () => {
  return (
    <section id="use-cases" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full accent-tint-bg border border-accent/20 mb-4">
            <span className="text-sm font-medium accent-text">Use Cases</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-headline mb-4">
            Works Across Every Industry
          </h2>
          <p className="text-lg text-body">
            From sales to support, CallPilot adapts to your unique business needs.
          </p>
        </div>

        {/* Use Case Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.title}
              className="group relative bg-card rounded-xl p-6 border border-border-card card-hover overflow-hidden"
            >
              {/* Accent line on top */}
              <div className="absolute top-0 left-0 right-0 h-1 gradient-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:accent-tint-bg transition-colors">
                <useCase.icon className="w-6 h-6 text-muted-text group-hover:accent-text transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-headline mb-2">
                {useCase.title}
              </h3>
              <p className="text-body">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
