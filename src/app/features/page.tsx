"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
    Brain,
    Database,
    Shield,
    BarChart3,
    Link2,
    Puzzle,
    ArrowRight,
    CheckCircle2,
    Phone
} from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const coreFeatures = [
    {
        icon: Brain,
        title: "AI Call Engine",
        description: "Our advanced AI Call Engine powers human-like conversations at scale. Using state-of-the-art natural language processing, it understands context, handles interruptions, and adapts in real-time to deliver seamless voice experiences.",
        highlights: [
            "Natural language understanding",
            "Real-time conversation adaptation",
            "Multi-language support",
            "Human-like voice synthesis",
        ],
    },
    {
        icon: Database,
        title: "AI Memory (CRM & History)",
        description: "Every conversation is remembered. Our AI Memory system integrates with your CRM and maintains complete conversation history, enabling personalized interactions that build stronger customer relationships.",
        highlights: [
            "Full conversation history",
            "CRM data synchronization",
            "Customer preference tracking",
            "Context-aware responses",
        ],
    },
    {
        icon: Shield,
        title: "Compliance by Design",
        description: "Built from the ground up with compliance in mind. Every call meets regulatory standards with automatic consent handling, call recording disclosures, and data protection measures.",
        highlights: [
            "GDPR compliant",
            "Automatic consent handling",
            "Secure data encryption",
            "Audit trail logging",
        ],
    },
    {
        icon: BarChart3,
        title: "Call Intelligence & Outcomes",
        description: "Transform every call into actionable insights. Our Call Intelligence system tracks outcomes, analyzes sentiment, and provides real-time analytics for continuous optimization.",
        highlights: [
            "Real-time analytics dashboard",
            "Sentiment analysis",
            "Outcome tracking",
            "Performance reporting",
        ],
    },
];

const integrationOptions = [
    {
        icon: Link2,
        title: "CRM Connected",
        description: "Connect your existing CRM to unlock the full potential of CallPilot.pro; Sync contacts, automate workflows, and leverage your customer data for personalized conversations.",
        features: [
            "Automatic contact sync",
            "Two-way data updates",
            "Workflow automation",
            "Custom field mapping",
            "Activity logging",
        ]
    },
    {
        icon: Phone,
        title: "Standalone Mode",
        description: "Get started without any CRM connection. Upload contacts manually or use our built-in contact management to run AI-powered calls with essential features.",
        features: [
            "Manual contact upload",
            "Basic contact management",
            "Call scheduling",
            "Outcome tracking",
            "Standard analytics",
        ]
    },
];

const FeaturesPage = () => {
    const router = useRouter();
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="pt-32 lg:pt-40 pb-16 lg:pb-24 bg-alt">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto text-center">

                            <h1 className="text-3xl font-semibold text-headline leading-tight mb-6">
                                Powerful Features for{" "}
                                <span className="accent-text">Modern Business</span>
                            </h1>
                            <p className="text-lg sm:text-xl text-body max-w-2xl mx-auto mb-8">
                                CallPilot.pro acts as your AI Voice Operator, handling calls with intelligence,
                                memory, and compliance—so your team can focus on what matters most.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link href="/try-it">
                                <Button variant="cta" size="xl" className="w-full sm:w-auto group" onClick={() => router.push("/try-it")}>
                                    Try a Free Call
                                    <ArrowRight size={18} className="ml-1 transition-transform group-hover:translate-x-1" />
                                </Button>
                                </Link>
                                
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Features Section */}
                <section className="py-16 lg:py-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
                            <h2 className="text-2xl font-semibold text-headline mb-4">
                                Core Capabilities
                            </h2>
                            <p className="text-lg text-body">
                                Everything you need to automate and enhance your business phone communications.
                            </p>
                        </div>

                        <div className="space-y-16 lg:space-y-24 max-w-6xl mx-auto">
                            {coreFeatures.map((feature, index) => (
                                <div
                                    key={feature.title}
                                    className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}
                                >
                                    {/* Content */}
                                    <div className="flex-1">
                                        <div className="w-14 h-14 rounded-xl accent-tint-bg flex items-center justify-center mb-6">
                                            <feature.icon className="w-7 h-7 accent-text" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-headline mb-4">
                                            {feature.title}
                                        </h3>
                                        <p className="text-lg text-body mb-6">
                                            {feature.description}
                                        </p>
                                        <ul className="space-y-3">
                                            {feature.highlights.map((highlight) => (
                                                <li key={highlight} className="flex items-center gap-3">
                                                    <CheckCircle2 className="w-5 h-5 accent-text flex-shrink-0" />
                                                    <span className="text-body">{highlight}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Visual Card */}
                                    <div className="flex-1 w-full">
                                        <div className="bg-card rounded-2xl p-8 border border-border-card shadow-lg">
                                            <div className="aspect-video bg-alt rounded-xl flex items-center justify-center">
                                                <feature.icon className="w-20 h-20 text-accent/30" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CRM Integration Options */}
                <section className="py-10 lg:py-15 bg-alt">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
                            <h2 className="text-2xl font-semibold text-headline mb-4">
                                Flexible Integration Options
                            </h2>
                            <p className="text-lg text-body">
                                Connect your CRM for full automation or use standalone mode—the choice is yours.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {integrationOptions.map((option) => (
                                <div
                                    key={option.title}
                                    className="bg-card rounded-2xl p-8 border border-border-card card-hover"
                                >
                                    <div className="w-14 h-14 rounded-xl accent-tint-bg flex items-center justify-center mb-6">
                                        <option.icon className="w-7 h-7 accent-text" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-headline mb-3">
                                        {option.title}
                                    </h3>
                                    <p className="text-body mb-6">
                                        {option.description}
                                    </p>
                                    <ul className="space-y-3 mb-8">
                                        {option.features.map((feature) => (
                                            <li key={feature} className="flex items-center gap-3">
                                                <CheckCircle2 className="w-5 h-5 accent-text flex-shrink-0" />
                                                <span className="text-body">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Custom Solutions */}
                <section className="py-10 lg:py-15">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto text-center">
                            
                            <h2 className="text-3xl font-bold text-headline mb-4">
                                Custom Solutions for Your Business
                            </h2>
                            <p className="text-lg text-body max-w-2xl mx-auto mb-8">
                                Every business is unique. Order custom functionalities tailored to your specific
                                needs—from specialized workflows to bespoke integrations.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link href="/get-started">
                                    <Button variant="cta" size="xl" className="w-full sm:w-auto group">
                                        Contact Sales
                                        <ArrowRight size={18} className="ml-1 transition-transform group-hover:translate-x-1" />
                                    </Button>
                                </Link>
                                <Link href="/pricing">
                                    <Button variant="ctaSecondary" size="xl" className="w-full sm:w-auto">
                                        View Pricing
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default FeaturesPage;
