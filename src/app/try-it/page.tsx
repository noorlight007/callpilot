"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

const TryItPage = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                <div className="pt-20 lg:pt-18">
                    <CTASection />
                </div>
                
            </main>
            <Footer />
        </div>
    );
};

export default TryItPage;
