import React from "react";
import { Brain, Shield, BarChart3, Users, Headphones } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Call Engine",
    description:
      "Advanced natural language processing enables human-like conversations at scale.",
  },
  {
    icon: Headphones,
    title: "AI Voice Operator",
    description: "Speaks, listens, and adapts in real-time to every unique conversation.",
  },
  {
    icon: Users,
    title: "AI Memory",
    description:
      "Full CRM integration with conversation history for personalized interactions.",
  },
  {
    icon: Shield,
    title: "Compliance by Design",
    description:
      "Built-in compliance features ensure every call meets regulatory standards.",
  },
  {
    icon: BarChart3,
    title: "Call Intelligence",
    description: "Real-time analytics and outcomes tracking for continuous optimization.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 lg:py-24 bg-alt">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <h2 className="text-2xl font-semibold text-headline mb-4">
            The Complete AI Voice Platform
          </h2>
          <p className="text-lg text-body">
            Everything you need to automate and enhance your phone communications.
          </p>
        </div>

        {/* Central Diagram */}
        <div className="mx-auto mb-16 max-w-5xl">
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border bg-background p-2 sm:p-4">
            {/* Mobile Image (< md screens) */}
            <img
              src="/feature_mobile.png"
              alt="CallPilot AI Call Platform Workflow"
              className="w-full h-auto rounded-lg block md:hidden"
            />
            {/* Desktop/Laptop Image (>= md screens) */}
            <img
              src="/feature_desktop.png"
              alt="CallPilot AI Call Platform Workflow"
              className="w-full h-auto rounded-lg hidden md:block"
            />
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-card rounded-xl p-6 border border-border-card card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg accent-tint-bg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 accent-text" />
              </div>
              <h3 className="text-xl font-semibold text-headline mb-2">
                {feature.title}
              </h3>
              <p className="text-body">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;


