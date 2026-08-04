"use client";

import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NewsInsightsPage() {
  useEffect(() => {
    // Dynamically inject the TrySoro embed script
    const script = document.createElement("script");
    script.src = "https://app.trysoro.com/api/embed/075a27da-f806-4ab9-8f6b-3bfeda6d677e";
    script.defer = true;
    
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      <Header />

      <main className="bg-background min-h-screen">
        {/* Header section */}
        <div className="pt-32 lg:pt-40 pb-12 border-b border-border bg-alt">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-sm font-semibold text-accent mb-2 uppercase tracking-wider mt-2">
                Updates & Articles
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold text-headline tracking-tight mb-4">
                News & <span className="accent-text">Insights</span>
              </h1>
              <p className="text-lg text-body max-w-2xl mx-auto">
                Stay updated with the latest trends, news, and insights from CallPilot.
              </p>
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="max-w-4xl mx-auto">
            {/* The TrySoro blog feed widget will mount here */}
            <div id="soro-blog" className="min-h-[500px] w-full">
              {/* Fallback loading state */}
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-10 h-10 border-4 border-accent border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-body text-sm font-medium">Loading news feed...</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
