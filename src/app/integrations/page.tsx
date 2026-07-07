"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Clock,
  Zap,
  User,
  TrendingUp,
  Phone,
  Star,
  ShieldCheck,
  Play,
  Check,
  Settings,
  PhoneCall,
  RefreshCw,
  Bell
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const WhatsAppIcon = ({ className = "w-6 h-6 fill-[#25D366]" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function IntegrationsPage() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="pt-16 md:pt-24 pb-16 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Left Column (Text Content) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-6"
              >
                <div className="text-[#064be2] font-semibold tracking-wider text-sm uppercase">
                  INTEGRATIONS
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0c0f19] tracking-tight leading-tight">
                  <span className="lg:whitespace-nowrap">CallPilot + <span className="text-[#0069b2]">JobAdder</span></span> <br />
                  <span className="text-black">Now Live</span>
                </h1>

                {/* Mobile Image Mockup (Visible only on mobile devices) */}
                <div className="block lg:hidden my-4 relative">
                  <img
                    src="/images/unnamed.png"
                    alt="CallPilot + JobAdder Integration Mockup"
                    className="w-full h-auto object-contain drop-shadow-xl max-w-sm mx-auto"
                  />
                </div>

                <p className="text-lg md:text-xl text-[#0c0f19] font-bold leading-snug max-w-xl">
                  Next Generation AI Applicant Screening Call + Automation.
                </p>
                <p className="text-base text-gray-500 leading-relaxed max-w-xl">
                  CallPilot is now fully integrated with JobAdder.
                  18 months of live recruitment testing.
                  Human-like AI conversations.
                  Less admin. More placements.
                </p>

                <div className="flex flex-wrap gap-4 mt-2">
                  <Link
                    href="/#cta"
                    className="w-52 h-12 bg-[#064be2] text-white font-bold uppercase rounded-lg hover:bg-[#003cb3] transition-all text-xs tracking-wider flex items-center justify-center text-center shadow-sm"
                  >
                    Try AI Call
                  </Link>
                  {/* <Link
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsVideoOpen(true);
                    }}
                    className="w-52 h-12 bg-white border-2 border-[#064be2] text-[#064be2] font-bold uppercase rounded-lg hover:bg-blue-50/30 transition-all flex items-center justify-center gap-2 text-xs tracking-wider"
                  >
                    <div className="w-5 h-5 bg-[#064be2] rounded-full flex items-center justify-center pl-0.5 flex-shrink-0">
                      <Play className="w-2.5 h-2.5 text-white fill-white" />
                    </div>
                    Watch AI Call
                  </Link> */}
                </div>

                {/* <div className="flex items-center gap-2 mt-2 text-[#0c0f19] font-medium text-sm">
                  <div className="w-5 h-5 bg-[#064be2] rounded-full flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-white stroke-[3px]" />
                  </div>
                  <span>Now Live with <span className="font-bold text-[#0069b2]">JobAdder</span></span>
                </div> */}

                {/* Coming Soon RecruitCRM Integration Badge */}
                {/* <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 p-4 rounded-xl bg-gray-50/60 border border-gray-100 mt-28 max-w-lg select-none">
                 
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <img
                        src="/images/Recruit_CRM_icon.jpeg"
                        alt="RecruitCRM Logo"
                        className="w-10 h-10 rounded-lg object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[#064be2] font-bold text-[9px] uppercase tracking-wider leading-none mb-1">
                        COMING SOON
                      </span>
                      <span className="text-[#0c0f19] font-black text-sm tracking-tight leading-none">
                        RecruitCRM
                      </span>
                      <span className="text-gray-400 font-semibold text-[8px] uppercase tracking-wider leading-none mt-1">
                        INTEGRATION IN PROGRESS
                      </span>
                    </div>
                  </div>

                  
                  <div className="hidden sm:block w-px h-10 bg-gray-200" />

                  
                  <p className="text-gray-500 text-xs leading-relaxed max-w-[240px]">
                    We're currently integrating with RecruitCRM. More ATS integrations coming soon.
                  </p>
                </div> */}
              </motion.div>

              {/* Right Column (Image Mockup - Desktop) */}
              <div className="hidden lg:flex justify-center lg:justify-end relative">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="w-full max-w-lg lg:max-w-2xl"
                >
                  <img
                    src="/images/unnamed.png"
                    alt="CallPilot + JobAdder Integration Mockup"
                    className="w-full h-auto object-contain drop-shadow-xl"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Banner Section: Consultant Sleeps. CallPilot Works 24/7 Screening. */}
        <section className="bg-[#020917] text-white py-12 md:py-14 overflow-hidden border-t border-b border-blue-950 relative">
          {/* Mobile Background Image (Only on mobile) */}
          <div className="absolute inset-0 z-0 sm:hidden select-none pointer-events-none">
            <img
              src="/images/sleeping-consultant-mobile.jpg"
              alt="Consultant Sleeping Mobile"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Desktop/Tablet Background Image (Only on sm and above) */}
          <div className="hidden sm:block absolute left-0 top-0 bottom-0 w-[40%] sm:w-[35%] lg:w-[30%] h-full z-0 overflow-hidden select-none pointer-events-none">
            <img
              src="/images/sleeping-consultant.png"
              alt="Consultant Sleeping"
              className="w-full h-full object-cover object-left"
            />
            {/* Gradient overlay to fade the image into the dark navy background */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#020917]/65 to-[#020917]/60 z-10"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Spacer for the left-aligned background image / mobile image vertical height */}
              <div className="col-span-1 lg:col-span-4 h-[460px] sm:h-32 md:h-40 lg:h-auto"></div>

              {/* Right Content Column: Title and Features */}
              <div className="lg:col-span-8 flex flex-col gap-6 lg:pl-6">
                <div className="hidden sm:block">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-extrabold tracking-tight leading-tight">
                    Consultant Sleeps.<br />
                    <span className="text-white block mt-2">CallPilot Works 24/7 Screening.</span>
                  </h2>
                </div>

                {/* 4 Feature Columns with vertical separator lines on larger screens */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 pt-2 border-t border-white/10 mt-2">
                  {/* Feature 1 */}
                  <div className="flex items-center gap-3 md:pr-4 md:border-r md:border-white/10">
                    <PhoneCall className="w-8 h-8 text-white stroke-[1.5px] flex-shrink-0" />
                    <div className="text-xs font-semibold text-gray-300 leading-snug">
                      Engages every<br />applicant
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex items-center gap-3 md:px-6 md:border-r md:border-white/10">
                    <WhatsAppIcon className="w-8 h-8 fill-white text-white flex-shrink-0" />
                    <div className="text-xs font-semibold text-gray-300 leading-snug">
                      Collects documents<br />via WhatsApp
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex items-center gap-3 md:px-6 md:border-r md:border-white/10">
                    <RefreshCw className="w-8 h-8 text-white stroke-[1.5px] flex-shrink-0" />
                    <div className="text-xs font-semibold text-gray-300 leading-snug">
                      Syncs results<br />to JobAdder
                    </div>
                  </div>

                  {/* Feature 4 */}
                  <div className="flex items-center gap-3 md:pl-6">
                    <Bell className="w-8 h-8 text-white stroke-[1.5px] flex-shrink-0" />
                    <div className="text-xs font-semibold text-gray-300 leading-snug">
                      Notifies consultants<br />when ready
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Exclusive Launch Offers Section */}
        <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-12"
            >
              {/* Card Content - Top */}
              <div className="text-center flex flex-col items-center gap-4">
                <span className="text-[#064be2] font-bold tracking-widest text-xs uppercase">
                  EXCLUSIVE <span className="text-[#0069b2]">JOBADDER</span> LAUNCH OFFERS
                </span>
                <div className="flex items-center justify-center gap-6 w-full">
                  <div className="hidden md:block h-px bg-gray-200 w-16 lg:w-24"></div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-[#0c0f19] tracking-tight">
                    Limited-Time Launch Offers
                  </h2>
                  <div className="hidden md:block h-px bg-gray-200 w-16 lg:w-24"></div>
                </div>
                <p className="text-gray-600 text-sm md:text-base max-w-2xl mt-1">
                  Get started faster with complimentary setup and credit to experience CallPilot in action.
                </p>
              </div>

              {/* 4-Column launch offers grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-y-0 w-full mt-2">
                {/* Item 1 */}
                <div className="flex flex-col items-center text-center gap-4 px-4 lg:px-8 lg:first:pl-0 lg:last:pr-0 lg:border-r lg:border-gray-300 last:border-r-0">
                  <div className="w-16 h-16 rounded-full bg-[#25d366]/10 flex items-center justify-center">
                    <WhatsAppIcon className="w-6 h-6 fill-[#0c0f19]" />
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <h3 className="font-extrabold text-[#0c0f19] text-lg leading-tight tracking-tight">
                      FREE <br />
                      WhatsApp <br />
                      Automation
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-[220px]">
                      We set up your document collection workflow via WhatsApp – free.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col items-center text-center gap-4 px-4 lg:px-8 lg:first:pl-0 lg:last:pr-0 lg:border-r lg:border-gray-300 last:border-r-0">
                  <div className="w-16 h-16 rounded-full bg-[#064be2]/10 flex items-center justify-center">
                    <Settings className="w-6 h-6 text-[#0c0f19]" />
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <h3 className="font-extrabold text-[#0c0f19] text-lg leading-tight tracking-tight">
                      FREE <br />
                      Integration & <br />
                      Setup
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-[220px]">
                      No development or setup fees. We handle everything for you.
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex flex-col items-center text-center gap-4 px-4 lg:px-8 lg:first:pl-0 lg:last:pr-0 lg:border-r lg:border-gray-300 last:border-r-0">
                  <div className="w-16 h-16 rounded-full bg-purple-100/50 flex items-center justify-center">
                    <PhoneCall className="w-6 h-6 text-[#0c0f19]" />
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <h3 className="font-extrabold text-[#0c0f19] text-lg leading-tight tracking-tight">
                      200 FREE <br />
                      AI Voice <br />
                      Minutes
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-[220px]">
                      Experience CallPilot with real applicants before you commit.
                    </p>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="flex flex-col items-center text-center gap-4 px-4 lg:px-8 lg:first:pl-0 lg:last:pr-0 lg:border-r lg:border-gray-300 last:border-r-0">
                  <div className="w-16 h-16 rounded-full bg-amber-100/50 flex items-center justify-center">
                    <Star className="w-6 h-6 text-[#0c0f19]" />
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <h3 className="font-extrabold text-[#0c0f19] text-lg leading-tight tracking-tight">
                      Priority <br />
                      Onboarding
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-[220px]">
                      Get your system live faster with priority implementation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Blue Banner */}
              <div className="bg-[#064be2] text-white py-4 px-6 md:px-8 rounded-xl flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 text-center select-none mt-2">
                <div className="flex items-center gap-2 font-bold text-xs md:text-sm uppercase tracking-wider">
                  <ShieldCheck className="w-5 h-5 text-white" />
                  FOUNDING JOBADDER CUSTOMER BENEFITS
                </div>
                <div className="hidden md:block w-px h-5 bg-white/30" />
                <div className="text-xs md:text-sm text-white/90">
                  Available for the first 20 customers.
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Grid Section */}
        <section className="bg-white pt-20 pb-6 sm:py-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-extrabold text-[#0c0f19] relative pb-4"
            >
              Why Recruitment Teams Choose CallPilot
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#064be2] rounded-full"></span>
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-y-0 w-full mt-16">
              {/* Col 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex flex-col items-center text-center gap-4 px-4 lg:px-8 lg:first:pl-0 lg:last:pr-0 lg:border-r lg:border-gray-300 last:border-r-0"
              >
                <Clock className="w-14 h-14 text-[#064be2] stroke-[1.5px]" />
                <div className="flex flex-col items-center gap-2">
                  <h3 className="font-extrabold text-[#0c0f19] text-xl leading-tight">24/7 Engagement</h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-[240px]">
                    Never miss an applicant. AI calls and engages applicants around the clock.
                  </p>
                </div>
              </motion.div>

              {/* Col 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center text-center gap-4 px-4 lg:px-8 lg:first:pl-0 lg:last:pr-0 lg:border-r lg:border-gray-300 last:border-r-0"
              >
                <Zap className="w-14 h-14 text-[#064be2] stroke-[1.5px]" />
                <div className="flex flex-col items-center gap-2">
                  <h3 className="font-extrabold text-[#0c0f19] text-xl leading-tight">Faster Submissions</h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-[240px]">
                    Qualified applicants are ready for review faster so you can submit sooner.
                  </p>
                </div>
              </motion.div>

              {/* Col 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-col items-center text-center gap-4 px-4 lg:px-8 lg:first:pl-0 lg:last:pr-0 lg:border-r lg:border-gray-300 last:border-r-0"
              >
                <User className="w-14 h-14 text-[#064be2] stroke-[1.5px]" />
                <div className="flex flex-col items-center gap-2">
                  <h3 className="font-extrabold text-[#0c0f19] text-xl leading-tight">Reduce Admin</h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-[240px]">
                    Automate repetitive tasks like screening, document collection and updates.
                  </p>
                </div>
              </motion.div>

              {/* Col 4 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex flex-col items-center text-center gap-4 px-4 lg:px-8 lg:first:pl-0 lg:last:pr-0 lg:border-r lg:border-gray-300 last:border-r-0"
              >
                <TrendingUp className="w-14 h-14 text-[#064be2] stroke-[1.5px]" />
                <div className="flex flex-col items-center gap-2">
                  <h3 className="font-extrabold text-[#0c0f19] text-xl leading-tight">Increase Revenue</h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-[240px]">
                    Consultants focus on the best applicants, make more placements and grow revenue.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Bottom CTA Card Section */}
        <section className="bg-white pt-4 pb-16 sm:py-12 sm:pb-24">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-50/40 via-indigo-50/20 to-blue-50/40 border border-blue-100/60 p-6 md:p-8 rounded-3xl flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm"
            >
              <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                <div className="w-40 h-40 flex-shrink-0 flex items-center justify-center">
                  <img
                    src="/images/callpilot-logo.png"
                    alt="CallPilot Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-[#0c0f19] leading-tight">
                    Ready to See CallPilot <br className="hidden md:block" />
                    in Action with <span className="text-[#0069b2]">JobAdder</span>?
                  </h3>
                  <p className="text-gray-500 text-sm md:text-base mt-2 max-w-xl leading-relaxed">
                    Book a personalised demo and see how AI applicant screening can transform your recruitment process.
                  </p>
                </div>
              </div>

              <Link
                href="/get-started"
                className="w-full lg:w-auto px-8 py-4 bg-[#064be2] text-white font-bold uppercase rounded-xl hover:bg-[#003cb3] hover:-translate-y-0.5 active:translate-y-0 active:scale-98 transition-all text-center whitespace-nowrap shadow-md text-sm tracking-wide"
              >
                BOOK A DEMO
              </Link>
            </motion.div>
          </div>
        </section>

      </div>

      <Footer />

      {/* Video Demo Dialog Modal */}
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black border-gray-800">
          <DialogHeader className="sr-only">
            <DialogTitle>AI Call Demo Video</DialogTitle>
          </DialogHeader>
          <div className="aspect-video w-full">
            <video
              src="/Video.mov"
              controls
              autoPlay
              className="w-full h-full"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
