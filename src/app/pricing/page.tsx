"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import PricingFaq from "@/components/PricingFaq";
import { FinalCta } from "@/components/home/Sections";
import { fontClass } from "@/components/home/font";
import landing from "@/components/home/landing.module.css";

const PricingPage = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="py-16 md:py-24 lg:py-24"> 
                <Pricing asH1={true} />
                <PricingFaq />
                <div className={`${landing.page} ${fontClass}`}>
                    <FinalCta />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PricingPage;
