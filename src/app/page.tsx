import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import UseCases from "@/components/UseCases";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    ArrowRight,
} from "lucide-react";
export default function Home() {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                <Hero />
                <Features />
                <UseCases />
                <Pricing />
                <CTASection />

                {/* Custom Solutions */}
                <section className="py-10 lg:py-15">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto text-center">
                            
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-headline mb-4">
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
}
