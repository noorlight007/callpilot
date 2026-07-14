"use client";

import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, CheckCircle2, Clock, Megaphone, Target } from "lucide-react";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

const Hero = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"right" | "left">("right");

  // Drag-to-scroll implementation for desktop/laptop
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const hasMovedRef = useRef(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    const container = scrollRef.current;
    if (!container) return;
    setIsMouseDown(true);
    setStartX(e.pageX - container.offsetLeft);
    setScrollLeftState(container.scrollLeft);
    setDragStart({ x: e.pageX, y: e.pageY });
    hasMovedRef.current = false;
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
    setIsHovered(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown) return;
    const container = scrollRef.current;
    if (!container) return;

    if (Math.abs(e.pageX - dragStart.x) > 5 || Math.abs(e.pageY - dragStart.y) > 5) {
      hasMovedRef.current = true;
    }

    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5;
    container.scrollLeft = scrollLeftState - walk;
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    if (hasMovedRef.current) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let dir = scrollDirection;

    const intervalId = setInterval(() => {
      if (isHovered || isMouseDown) return;

      const maxScroll = container.scrollWidth - container.clientWidth;
      if (maxScroll <= 0) return;

      const cards = container.children;
      let step = 200;
      if (cards.length > 0) {
        const firstCard = cards[0] as HTMLElement;
        step = firstCard.offsetWidth + 16; // card width + gap
      }

      let newScrollLeft = container.scrollLeft;

      if (dir === "right") {
        newScrollLeft += step;
        if (newScrollLeft >= maxScroll - 5) {
          newScrollLeft = maxScroll;
          dir = "left";
          setScrollDirection("left");
        }
      } else {
        newScrollLeft -= step;
        if (newScrollLeft <= 5) {
          newScrollLeft = 0;
          dir = "right";
          setScrollDirection("right");
        }
      }

      container.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }, 3000);

    return () => clearInterval(intervalId);
  }, [isHovered, isMouseDown, scrollDirection]);
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
            <div className="max-w-2xl mx-auto relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-r from-black/80 to-[#0a2540]/20 p-1 sm:p-1 text-left">
              <style dangerouslySetInnerHTML={{ __html: `
                .scrollbar-none::-webkit-scrollbar {
                  display: none;
                }
              `}} />
              {/* Fade overlays */}
              <div className="absolute left-0 right-0 top-0 h-12 xs:h-14 sm:h-16 md:h-18 lg:h-20 xl:h-22 bg-gradient-to-b from-black/60 to-transparent z-10 pointer-events-none" />
              <div className="absolute left-0 right-0 bottom-0 h-12 xs:h-14 sm:h-16 md:h-18 lg:h-20 xl:h-22 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none" />
              <div className="absolute left-0 top-0 bottom-0 w-8 xs:w-12 sm:w-16 md:w-20 lg:w-24 xl:w-28 2xl:w-32 bg-gradient-to-r from-black/80 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-8 xs:w-12 sm:w-16 md:w-20 lg:w-24 xl:w-28 2xl:w-32 bg-gradient-to-l from-[#0a2540]/20 to-transparent z-10 pointer-events-none" />

              {/* Scroll wrapper */}
              <div
                ref={scrollRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                className="flex flex-row flex-nowrap items-center gap-x-4 sm:gap-x-24 overflow-x-auto w-full py-4 px-6 sm:px-12 scrollbar-none cursor-grab active:cursor-grabbing select-none"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  WebkitOverflowScrolling: "touch",
                }}
              >
                {/* Card 1: JobAdder */}
                <Link
                  href="/integration"
                  onClick={handleLinkClick}
                  className="flex flex-col justify-between p-2 sm:p-3 w-[calc(50%-8px)] sm:w-[240px] h-[130px] sm:h-[170px] hover:opacity-80 transition-opacity relative cursor-pointer z-20 flex-shrink-0"
                >
                  <div>
                    <div className="inline-flex items-center px-2 py-0.5 sm:px-3 sm:py-1 rounded-full border border-emerald-500/30 text-emerald-400 text-[9px] sm:text-[10px] font-bold tracking-wider uppercase bg-emerald-950/20 mb-2 sm:mb-4">
                      LIVE
                    </div>

                    {/* JobAdder Logo */}
                    <div className="h-[36px] sm:h-[54px] flex items-center justify-center mb-1 sm:mb-2">
                      <img
                        src="/images/JobAdder.png"
                        alt="JobAdder Logo"
                        className="h-full object-contain max-h-[13.2px] sm:max-h-[37.4px]"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-end mt-1 sm:mt-2">
                    <div className="w-5 h-5 sm:w-[25px] sm:h-[25px] rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
                  </div>
                </Link>

                {/* Card 2: Recruit CRM */}
                <div className="flex flex-col justify-between p-2 sm:p-3 w-[calc(50%-8px)] sm:w-[240px] h-[130px] sm:h-[170px] hover:opacity-80 transition-opacity relative z-20 flex-shrink-0">
                  <div>
                    <div className="inline-flex items-center px-2 py-0.5 sm:px-3 sm:py-1 rounded-full border border-amber-500/30 text-amber-400 text-[9px] sm:text-[10px] font-bold tracking-wider uppercase bg-amber-950/20 mb-2 sm:mb-4">
                      IN PROGRESS
                    </div>

                    {/* Recruit CRM Logo */}
                    <div className="h-[36px] sm:h-[54px] flex items-center justify-center mb-1 sm:mb-2">
                      <div className="flex items-center gap-1 sm:gap-2 h-full max-h-[18px] sm:max-h-[41px]">
                        <img
                          src="/images/Recruit_CRM_icon.jpeg"
                          alt="Recruit CRM Icon"
                          className="h-full w-auto rounded object-cover"
                        />
                        <span className="text-white text-[12px] sm:text-[28px] font-black tracking-tight leading-none">recruit crm</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-end mt-1 sm:mt-2">
                    <div className="w-5 h-5 sm:w-[25px] sm:h-[25px] rounded-full bg-amber-500 shadow-[0_0_10px_#f59e0b]" />
                  </div>
                </div>

                {/* Card 3: Ashby */}
                <div className="flex flex-col justify-between p-2 sm:p-3 w-[calc(50%-8px)] sm:w-[240px] h-[130px] sm:h-[170px] hover:opacity-80 transition-opacity relative z-20 flex-shrink-0">
                  <div>
                    <div className="inline-flex items-center px-2 py-0.5 sm:px-3 sm:py-1 rounded-full border border-amber-500/30 text-amber-400 text-[9px] sm:text-[10px] font-bold tracking-wider uppercase bg-amber-950/20 mb-2 sm:mb-4">
                      IN PROGRESS
                    </div>

                    {/* Ashby Logo */}
                    <div className="h-[36px] sm:h-[54px] flex items-center justify-center mb-1 sm:mb-2">
                      <img
                        src="/wordmark.svg"
                        alt="Ashby Logo"
                        className="h-full object-contain max-h-[17.6px] sm:max-h-[45.1px] filter"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-end mt-1 sm:mt-2">
                    <div className="w-5 h-5 sm:w-[25px] sm:h-[25px] rounded-full bg-amber-500 shadow-[0_0_10px_#f59e0b]" />
                  </div>
                </div>

                {/* Card 4: Bullhorn */}
                {/* <div className="flex flex-col justify-between p-2 sm:p-3 w-[calc(50%-8px)] sm:w-[240px] h-[130px] sm:h-[170px] hover:opacity-80 transition-opacity relative z-20 flex-shrink-0">
                  <div>
                    <div className="inline-flex items-center px-2 py-0.5 sm:px-3 sm:py-1 rounded-full border border-amber-500/30 text-amber-400 text-[9px] sm:text-[10px] font-bold tracking-wider uppercase bg-amber-950/20 mb-2 sm:mb-4">
                      IN PROGRESS
                    </div>

                    
                    <div className="h-[36px] sm:h-[54px] flex items-center justify-center mb-1 sm:mb-2">
                      <div className="flex items-center gap-1 sm:gap-2 h-full max-h-[18px] sm:max-h-[41px]">
                        <div className="w-[18px] h-[18px] sm:w-[41px] sm:h-[41px] rounded bg-[#ff7300] flex items-center justify-center flex-shrink-0">
                          <Megaphone className="w-3.5 h-3.5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <span className="text-white text-[12px] sm:text-[28px] font-black tracking-tight leading-none">bullhorn</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-end mt-1 sm:mt-2">
                    <div className="w-5 h-5 sm:w-[25px] sm:h-[25px] rounded-full bg-amber-500 shadow-[0_0_10px_#f59e0b]" />
                  </div>
                </div> */}

                {/* Card 5: Vincere */}
                {/* <div className="flex flex-col justify-between p-2 sm:p-3 w-[calc(50%-8px)] sm:w-[240px] h-[130px] sm:h-[170px] hover:opacity-80 transition-opacity relative z-20 flex-shrink-0">
                  <div>
                    <div className="inline-flex items-center px-2 py-0.5 sm:px-3 sm:py-1 rounded-full border border-amber-500/30 text-amber-400 text-[9px] sm:text-[10px] font-bold tracking-wider uppercase bg-amber-950/20 mb-2 sm:mb-4">
                      IN PROGRESS
                    </div>

                    
                    <div className="h-[36px] sm:h-[54px] flex items-center justify-center mb-1 sm:mb-2">
                      <div className="flex items-center gap-1 sm:gap-2 h-full max-h-[18px] sm:max-h-[41px]">
                        <div className="w-[18px] h-[18px] sm:w-[41px] sm:h-[41px] rounded bg-[#e81f1b] flex items-center justify-center flex-shrink-0">
                          <Target className="w-3.5 h-3.5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <span className="text-white text-[12px] sm:text-[28px] font-black tracking-tight leading-none">vincere</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-end mt-1 sm:mt-2">
                    <div className="w-5 h-5 sm:w-[25px] sm:h-[25px] rounded-full bg-amber-500 shadow-[0_0_10px_#f59e0b]" />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
