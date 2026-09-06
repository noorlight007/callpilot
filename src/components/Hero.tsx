"use client";

import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import { AtsLogoCarousel } from "@/components/AtsLogoCarousel";

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
        <track kind="captions" src="/captions.vtt" srcLang="en" label="English" default />
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
                variant="white"
                size="xl"
                className="w-full sm:w-auto group"
              >
                <Phone size={20} />
                Try a Free AI Call
                <ArrowRight size={18} className="ml-1 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          {/* Integrations Section */}
          <div className="mt-4 pt-1 border-t border-white/10 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {/* Header */}
            <div className="flex items-center justify-center gap-4 mb-2">
              <div className="h-px bg-gradient-to-r from-transparent to-[#d97706] w-12 sm:w-20"></div>
              <span className="text-xs font-bold tracking-widest text-[#d97706] uppercase">
                INTEGRATIONS
              </span>
              <div className="h-px bg-gradient-to-l from-transparent to-[#d97706] w-12 sm:w-20"></div>
            </div>

            <h2 className="text-[21.6px] sm:text-[27px] font-normal text-white mb-4 text-center">
              Live & In Progress
            </h2>

            {/* Grid container */}
            <div className="max-w-2xl mx-auto relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-r from-black/80 to-[#0a2540]/20 p-1 sm:p-1 text-left">
              {/* Fade overlays */}
              <div className="absolute left-0 right-0 top-0 h-12 xs:h-14 sm:h-16 md:h-18 lg:h-20 xl:h-22 bg-gradient-to-b from-black/60 to-transparent z-10 pointer-events-none" />
              <div className="absolute left-0 right-0 bottom-0 h-12 xs:h-14 sm:h-16 md:h-18 lg:h-20 xl:h-22 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none" />
              <div className="absolute left-0 top-0 bottom-0 w-8 xs:w-12 sm:w-16 md:w-20 lg:w-24 xl:w-28 2xl:w-32 bg-gradient-to-r from-black/80 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-8 xs:w-12 sm:w-16 md:w-20 lg:w-24 xl:w-28 2xl:w-32 bg-gradient-to-l from-[#0a2540]/20 to-transparent z-10 pointer-events-none" />

              {/* Marquee Carousel */}
              <AtsLogoCarousel />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
