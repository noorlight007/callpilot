"use client";

import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, CheckCircle2, Clock } from "lucide-react";
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

          {/* Integrations Section */}
          <div className="mt-16 pt-12 border-t border-white/10 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {/* Header */}
            <div className="flex items-center justify-center gap-4 mb-2">
              <div className="h-px bg-gradient-to-r from-transparent to-[#d97706] w-12 sm:w-20"></div>
              <span className="text-xs font-bold tracking-widest text-[#d97706] uppercase">
                INTEGRATIONS
              </span>
              <div className="h-px bg-gradient-to-l from-transparent to-[#d97706] w-12 sm:w-20"></div>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-8 text-center">
              Live & In Progress
            </h3>

            {/* Grid container */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-xl mx-auto text-left">
              {/* Card 1: JobAdder */}
              <Link
                href="/integrations"
                className="border border-emerald-500/20 bg-white/[0.02] backdrop-blur-md rounded-2xl p-2 sm:p-3 flex flex-col justify-between hover:border-emerald-500/35 transition-colors relative cursor-pointer block"
              >
                <div>
                  <div className="inline-flex items-center px-3 py-1 rounded-full border border-emerald-500/30 text-emerald-400 text-[10px] font-bold tracking-wider uppercase bg-emerald-950/20 mb-4">
                    LIVE
                  </div>
                  
                  {/* JobAdder Logo */}
                  <div className="h-[54px] flex items-center justify-center mb-2">
                    <img
                      src="/images/JobAdder.png"
                      alt="JobAdder Logo"
                      className="h-full object-contain max-h-[41px]"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-end mt-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                </div>
              </Link>

              {/* Card 2: Recruit CRM */}
              <div className="border border-amber-500/20 bg-white/[0.02] backdrop-blur-md rounded-2xl p-2 sm:p-3 flex flex-col justify-between hover:border-amber-500/35 transition-colors relative">
                <div>
                  <div className="inline-flex items-center px-3 py-1 rounded-full border border-amber-500/30 text-amber-400 text-[10px] font-bold tracking-wider uppercase bg-amber-950/20 mb-4">
                    IN PROGRESS
                  </div>
                  
                  {/* Recruit CRM Logo */}
                  <div className="h-[54px] flex items-center justify-center mb-2">
                    <div className="flex items-center gap-2 h-full max-h-[41px]">
                      <img
                        src="/images/Recruit_CRM_icon.jpeg"
                        alt="Recruit CRM Icon"
                        className="h-full w-auto rounded-lg object-cover"
                      />
                      <span className="text-white text-[31px] font-black tracking-tight leading-none">recruit crm</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-end mt-2">
                  <Clock className="w-5 h-5 text-amber-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
