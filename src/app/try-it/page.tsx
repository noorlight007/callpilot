"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

const TryItPage = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main> 
                <CTASection />
            </main>
            <Footer />
        </div>
    );
};

export default TryItPage;
