"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";

const PricingPage = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main> 
                <Pricing />
            </main>
            <Footer />
        </div>
    );
};

export default PricingPage;
