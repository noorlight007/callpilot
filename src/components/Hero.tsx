"use client";

import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  const scrollToCTA = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // Trigger country sync in CTASection
    window.dispatchEvent(new CustomEvent("trigger-country-sync"));

    const element = document.getElementById("cta");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-40 lg:pt-40 pb-16 lg:pb-24 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/ai-video.mov" type="video/mp4" />
      </video>

      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 animate-fade-in">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-white">
              AI Calling Automations
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Next-Generation 24/7 {" "}
            <span className="accent-text">AI Voice Call & Automation</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            CallPilot makes and receives calls for your business with human-like conversations.
            Scale your customer outreach, support, and engagement—24/7.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button
              variant="cta"
              size="xl"
              className="w-full sm:w-auto group"
              onClick={scrollToCTA}
            >
              <Phone size={20} />
              Try a Free AI Call
              <ArrowRight size={18} className="ml-1 transition-transform group-hover:translate-x-1" />
            </Button>
            {/* <Button variant="ctaSecondary" size="xl" className="w-full sm:w-auto bg-white/10 border-white/30 text-white hover:bg-white/20">
              Book a Demo
            </Button> */}
          </div>

          {/* Trust indicators */}
          <div className="mt-12 pt-8 border-t border-white/20 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <p className="text-sm text-white/60 mb-4">Trusted by innovative companies worldwide</p>
            <div className="flex items-center justify-center gap-8 opacity-60">
              <div className="text-white font-semibold text-lg"><a href="https://www.rd1.co.uk" target="_blank">Recruitment Direct</a></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
