"use client";

import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, CheckCircle2, Clock } from "lucide-react";
import Link from "next/link";

const Hero = () => {
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
            <Link href="/try-ai-call" className="w-auto sm:w-auto">
              <Button
                variant="black"
                size="xl"
                className="w-full sm:w-auto group"
              >
                <Phone size={20} />
                Try a Free AI Call
                <ArrowRight size={18} className="ml-1 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
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

            <h3 className="text-[21.6px] sm:text-[27px] font-normal text-white mb-8 text-center">
              Live & In Progress
            </h3>

            {/* Grid container */}
            <div className="flex flex-row items-center justify-center gap-12 sm:gap-24 max-w-2xl mx-auto text-left bg-gradient-to-r from-black/80 to-[#0a2540]/20 p-1 sm:p-1 rounded-2xl shadow-2xl relative overflow-hidden">
              {/* Fade overlays */}
              <div className="absolute left-0 right-0 top-0 h-12 xs:h-14 sm:h-16 md:h-18 lg:h-20 xl:h-22 bg-gradient-to-b from-black/60 to-transparent z-10 pointer-events-none" />
              <div className="absolute left-0 right-0 bottom-0 h-12 xs:h-14 sm:h-16 md:h-18 lg:h-20 xl:h-22 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none" />
              <div className="absolute left-0 top-0 bottom-0 w-8 xs:w-12 sm:w-16 md:w-20 lg:w-24 xl:w-28 2xl:w-32 bg-gradient-to-r from-black/80 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-8 xs:w-12 sm:w-16 md:w-20 lg:w-24 xl:w-28 2xl:w-32 bg-gradient-to-l from-[#0a2540]/20 to-transparent z-10 pointer-events-none" />
              {/* <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" /> */}

              {/* Card 1: JobAdder */}
              <Link
                href="/integration"
                className="flex flex-col justify-between p-2 sm:p-3 w-[200px] h-[140px] sm:w-[240px] sm:h-[170px] hover:opacity-80 transition-opacity relative cursor-pointer z-20"
              >
                <div>
                  <div className="inline-flex items-center px-3 py-1 rounded-full border border-emerald-500/30 text-emerald-400 text-[10px] font-bold tracking-wider uppercase bg-emerald-950/20 mb-4">
                    LIVE
                  </div>

                  {/* JobAdder Logo */}
                  <div className="h-[40px] sm:h-[54px] flex items-center justify-center mb-2">
                    <img
                      src="/images/JobAdder.png"
                      alt="JobAdder Logo"
                      className="h-full object-contain max-h-[18px] sm:max-h-[41px]"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-end mt-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                </div>
              </Link>

              {/* Card 2: Recruit CRM */}
              <div className="flex flex-col justify-between p-2 sm:p-3 w-[200px] h-[140px] sm:w-[240px] sm:h-[170px] hover:opacity-80 transition-opacity relative z-20">
                <div>
                  <div className="inline-flex items-center px-3 py-1 rounded-full border border-amber-500/30 text-amber-400 text-[10px] font-bold tracking-wider uppercase bg-amber-950/20 mb-4">
                    IN PROGRESS
                  </div>

                  {/* Recruit CRM Logo */}
                  <div className="h-[44px] sm:h-[54px] flex items-center justify-center mb-2">
                    <div className="flex items-center gap-1.5 sm:gap-2 h-full max-h-[22px] sm:max-h-[41px]">
                      <img
                        src="/images/Recruit_CRM_icon.jpeg"
                        alt="Recruit CRM Icon"
                        className="h-full w-auto rounded-lg object-cover"
                      />
                      <span className="text-white text-[16px] sm:text-[28px] font-black tracking-tight leading-none">recruit crm</span>
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
