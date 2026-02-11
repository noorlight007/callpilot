"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
    Briefcase,
    GraduationCap,
    Truck,
    Headphones,
    Landmark,
    ShoppingCart,
    Building2,
    HeartPulse,
    Plane,
    TrendingUp,
    Car,
    Wrench,
    ArrowRight
} from "lucide-react";
import { useRouter } from "next/navigation";
const sectors = [
    {
        icon: Briefcase,
        title: "Job Applications",
        useCases: [
            "Pre-screening candidates",
            "Interview scheduling",
            "Application status updates",
            "Reference checks",
        ],
        whyItWorks: "Automates repetitive HR tasks while maintaining a personal touch, reducing time-to-hire by up to 60%.",
    },
    {
        icon: GraduationCap,
        title: "Education & Training",
        useCases: [
            "Enrollment reminders",
            "Course feedback collection",
            "Attendance follow-ups",
            "Student support queries",
        ],
        whyItWorks: "Scales personalized communication across large student bodies without additional staff.",
    },
    {
        icon: Truck,
        title: "Logistics & Transportation",
        useCases: [
            "Delivery confirmations",
            "Route updates",
            "Driver check-ins",
            "Customer ETAs",
        ],
        whyItWorks: "Provides real-time updates and handles high call volumes during peak delivery times.",
    },
    {
        icon: Headphones,
        title: "Customer Support & Call Centers",
        useCases: [
            "Tier-1 support queries",
            "Ticket status updates",
            "Callback scheduling",
            "Satisfaction surveys",
        ],
        whyItWorks: "Handles 80% of routine inquiries, freeing agents for complex issues and reducing wait times.",
    },
    {
        icon: Landmark,
        title: "Banking, Finance & Insurance",
        useCases: [
            "Payment reminders",
            "Fraud alerts",
            "Policy renewals",
            "Loan application updates",
        ],
        whyItWorks: "Ensures compliance while delivering secure, personalized financial communications at scale.",
    },
    {
        icon: ShoppingCart,
        title: "E-commerce & Retail",
        useCases: [
            "Order confirmations",
            "Abandoned cart recovery",
            "Loyalty program updates",
            "Return processing",
        ],
        whyItWorks: "Increases conversions and customer retention through timely, personalized outreach.",
    },
    {
        icon: Building2,
        title: "Real Estate",
        useCases: [
            "Property inquiries",
            "Showing scheduling",
            "Lead qualification",
            "Contract follow-ups",
        ],
        whyItWorks: "Captures leads 24/7 and ensures no opportunity slips through during busy periods.",
    },
    {
        icon: HeartPulse,
        title: "Healthcare",
        useCases: [
            "Appointment reminders",
            "Prescription refills",
            "Post-visit follow-ups",
            "Health surveys",
        ],
        whyItWorks: "Reduces no-shows by up to 40% while maintaining HIPAA-compliant patient communication.",
    },
    {
        icon: Plane,
        title: "Hospitality & Travel",
        useCases: [
            "Booking confirmations",
            "Check-in reminders",
            "Concierge services",
            "Feedback collection",
        ],
        whyItWorks: "Enhances guest experience with instant responses and personalized recommendations.",
    },
    {
        icon: TrendingUp,
        title: "Sales & Lead Generation",
        useCases: [
            "Cold outreach",
            "Lead qualification",
            "Demo scheduling",
            "Follow-up sequences",
        ],
        whyItWorks: "Multiplies sales capacity by qualifying leads at scale before human handoff.",
    },
    {
        icon: Car,
        title: "Auto Repair Shops",
        useCases: [
            "Service reminders",
            "Appointment booking",
            "Repair status updates",
            "Estimate approvals",
        ],
        whyItWorks: "Keeps customers informed and books appointments even during busy shop hours.",
    },
    {
        icon: Wrench,
        title: "Home Services",
        useCases: [
            "Appointment scheduling",
            "Technician ETAs",
            "Quote follow-ups",
            "Maintenance reminders",
        ],
        whyItWorks: "Captures every lead and coordinates scheduling without tying up office staff.",
    },
];

const UseCasesPage = () => {
    const router = useRouter();
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="pt-32 lg:pt-40 pb-16 lg:pb-24 bg-alt">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-headline leading-tight mb-6">
                                AI Voice for{" "}
                                <span className="accent-text">Every Industry</span>
                            </h1>
                            <p className="text-lg sm:text-xl text-body max-w-2xl mx-auto mb-8">
                                Discover how CallPilot.pro transforms communication across sectors—from healthcare
                                to real estate, sales to support.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Button variant="cta" size="xl" className="w-full sm:w-auto group" onClick={() => router.push("/try-it")}>
                                    Try a Free Call
                                    <ArrowRight size={18} className="ml-1 transition-transform group-hover:translate-x-1" />
                                </Button>
                                <Button variant="ctaSecondary" size="xl" className="w-full sm:w-auto">
                                    Book a Demo
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sectors Grid */}
                <section className="py-16 lg:py-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-headline mb-4">
                                Explore by Industry
                            </h2>
                            <p className="text-lg text-body">
                                See how CallPilot.pro adapts to your specific business needs and use cases.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                            {sectors.map((sector) => (
                                <div
                                    key={sector.title}
                                    className="group bg-card rounded-xl border border-border-card card-hover overflow-hidden"
                                >
                                    {/* Card Header */}
                                    <div className="p-6 border-b border-border">
                                        <div className="flex items-center gap-4 mb-3">
                                            <div className="w-12 h-12 rounded-lg accent-tint-bg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                                                <sector.icon className="w-6 h-6 accent-text" />
                                            </div>
                                            <h3 className="text-lg font-semibold text-headline">
                                                {sector.title}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Card Body */}
                                    <div className="p-6 space-y-4">
                                        {/* Use Cases */}
                                        <div>
                                            <h4 className="text-sm font-semibold text-headline uppercase tracking-wide mb-2">
                                                Use Cases
                                            </h4>
                                            <ul className="space-y-1.5">
                                                {sector.useCases.map((useCase) => (
                                                    <li key={useCase} className="flex items-start gap-2 text-sm text-body">
                                                        <span className="accent-text mt-1">•</span>
                                                        {useCase}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Why It Works */}
                                        <div className="pt-3 border-t border-border">
                                            <h4 className="text-sm font-semibold text-headline uppercase tracking-wide mb-2">
                                                Why It Works
                                            </h4>
                                            <p className="text-sm text-body leading-relaxed">
                                                {sector.whyItWorks}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 lg:py-24 bg-alt">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-headline mb-4">
                                Don't See Your Industry?
                            </h2>
                            <p className="text-lg text-body max-w-2xl mx-auto mb-8">
                                CallPilot.pro is highly customizable. Contact us to discuss how we can tailor
                                our solution for your specific business needs.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Button variant="cta" size="xl" className="w-full sm:w-auto group">
                                    Contact Sales
                                    <ArrowRight size={18} className="ml-1 transition-transform group-hover:translate-x-1" />
                                </Button>
                                <Button variant="ctaSecondary" size="xl" className="w-full sm:w-auto">
                                    View Pricing
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default UseCasesPage;
