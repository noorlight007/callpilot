"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    ArrowRight,
} from "lucide-react";

const TryItPage = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                <div className="pt-20 lg:pt-18">
                    <CTASection />
                </div>
                {/* Custom Solutions */}
                <section className="py-15 lg:py-18 my-10">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto text-center">
                            
                            <h2 className="text-3xl font-semibold text-headline mb-4">
                                Ready to start AI Calling in your Business?
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
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default TryItPage;
