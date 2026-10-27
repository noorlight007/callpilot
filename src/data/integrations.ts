import { COPY } from "@/lib/pricing";
export interface ATSIntegration {
  slug: string;
  name: string;
  status: "Live" | "Coming Soon";
  statusBadgeClass: "badge-live" | "badge-soon" | "badge-later";
  panelType: "live-board" | "hitech-metrics";
  seo: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    twitterTitle: string;
    twitterDescription: string;
    schemaDescription: string;
    targetKeyword: string;
  };
  hero: {
    eyebrowText: string;
    overline: string;
    h1: string;
    lead: string;
    flowNodes: string[];
    primaryCtaText: string;
    primaryCtaLink: string;
    secondaryCtaText: string;
    secondaryCtaLink: string;
  };
  hitech?: {
    tag: string;
    h2: string;
    description: string;
    accentColor: string;
  };
  waitlist?: {
    h2: string;
    note: string;
    cardTitle: string;
    cardDesc: string;
    buttonText: string;
  };
  stats: {
    value: string;
    label: string;
  }[];
  howItWorks: {
    h2: string;
    lead: string;
    /** Optional full-width workflow image under the heading. `base` = path without extension (.webp + .png). */
    image?: { base: string; alt: string };
    steps: {
      title: string;
      desc: string;
      /** Optional 16:9 image beside the step (alternates left/right on desktop, stacks on mobile). */
      image?: { base: string; alt: string };
    }[];
  };
  trafficLights: {
    lead: string;
    qualified: string;
    received: string;
    unsuccessful: string;
  };
  callout: {
    title: string;
    desc: string;
    badgeText: string;
  };
  pricingFeatures: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  crossLinks?: {
    title: string;
    slug: string;
  }[];
  finalCta: {
    h2: string;
    lead: string;
    primaryText: string;
    primaryUrl: string;
    secondaryText: string;
    secondaryUrl: string;
  };
}

export const integrationsData: Record<string, ATSIntegration> = {
  ashby: {
    slug: "ashby",
    name: "Ashby",
    status: "Live",
    statusBadgeClass: "badge-live",
    panelType: "live-board",
    seo: {
      title: "Ashby AI Applicant Screening | CallPilot Integration",
      description: "Screen every Ashby applicant with an AI call. Documents and ID collected via WhatsApp, Ashby updated automatically. 100 free credits.",
      ogTitle: "Ashby AI Applicant Screening | CallPilot Integration",
      ogDescription: "Screen every Ashby applicant with an AI call. Documents and ID collected via WhatsApp, Ashby updated automatically. 100 free credits.",
      twitterTitle: "Ashby AI Applicant Screening | CallPilot Integration",
      twitterDescription: "Screen every Ashby applicant with an AI call. Documents and ID collected via WhatsApp, Ashby updated automatically. 100 free credits.",
      schemaDescription: "AI applicant screening calls integrated with Ashby. Every applicant screened, documents collected, and candidate record updated automatically.",
      targetKeyword: "Ashby AI applicant screening",
    },
    hero: {
      eyebrowText: "Ashby Integration: LIVE",
      overline: "AI Applicant Screening Calls + WhatsApp/SMS Automation",
      h1: "AI Applicant Screening for Ashby",
      lead: "Screen every Ashby applicant with a human-like AI call. Documents and ID collected via WhatsApp, Ashby updated automatically without a recruiter picking up the phone.",
      flowNodes: ["Ashby Job Ad", "Applicant Applies", "AI Screening Call", "Pre-Qualifies", "WhatsApp Request", "ID & Documents Attached", "Ashby Status Synced"],
      primaryCtaText: "Claim 100 Free Credits",
      primaryCtaLink: "/free-credits",
      secondaryCtaText: "See How It Works",
      secondaryCtaLink: "#how-it-works",
    },
    stats: [
      { value: "< 2 Mins", label: "Average Call Duration" },
      { value: "100%", label: "Applicant Coverage 24/7" },
      { value: "100 Free", label: "Screening Credits on Signup" },
    ],
    howItWorks: {
      h2: "How the CallPilot Ashby Integration Works",
      lead: "Automate top-of-funnel screening completely. Here is what happens from application to a fully-updated candidate record in Ashby:",
      steps: [
        {
          title: "1. Polls Ashby on Application",
          desc: "An applicant applies to your Ashby job posting. CallPilot polls Ashby on a schedule and picks up the new application within the hour.",
        },
        {
          title: "2. Natural AI Screening Call",
          desc: "CallPilot places a voice call to the applicant running your configured screening questions (availability, right to work, experience, location, compensation) in a natural, human-like AI voice.",
        },
        {
          title: "3. Instant Document & ID Collection",
          desc: "If the applicant qualifies, CallPilot immediately sends a WhatsApp or SMS message requesting their ID and required documents seconds after the call finishes.",
        },
        {
          title: "4. Two-Way Sync Straight into Ashby",
          desc: "Submitted documents attach directly to the applicant's Ashby profile. The screening outcome, transcript, and status sync automatically without any re-keying.",
        },
      ],
    },
    trafficLights: {
      lead: "Your recruiters open Ashby on Monday to a pipeline that has already been screened and organized into three clean statuses:",
      qualified: "Amber: Qualified – Awaiting Documents: Passed the AI screening call against your role criteria. The automated WhatsApp/SMS chase sequence is actively running.",
      received: "Green: Qualified – Documents Received: Passed screening with ID and required right-to-work documents collected and attached. Ready for recruiter verification.",
      unsuccessful: "Red: Unsuccessful: Did not meet the minimum role requirements. Call transcript and recorded responses are logged on the Ashby record for full auditability.",
    },
    callout: {
      title: "Built Natively for Ashby Hiring Teams",
      desc: "Two-way integration keeps candidate stage, screening transcript, and uploaded documents in sync in real time. Never let high-intent applicants go cold over weekends or evenings.",
      badgeText: "Ashby: LIVE",
    },
    pricingFeatures: ["Ashby native sync included", "100 free screening credits on trial", "Zero per-seat software fees"],
    faqs: [
      {
        question: "How does the CallPilot integration with Ashby work?",
        answer: "CallPilot monitors your Ashby job requisitions, detects new applicants, and dials them automatically for an AI phone screen. Once qualified, it collects verification documents via WhatsApp/SMS and writes the transcript, outcome, and files directly to the Ashby candidate profile.",
      },
      {
        question: "What are the three screening status outcomes in Ashby?",
        answer: "The three pipeline statuses are: Green: Qualified – Documents Received (passed and files attached), Amber: Qualified – Awaiting Documents (passed, automated reminder active), and Red: Unsuccessful (did not meet role criteria).",
      },
      {
        question: "Are candidates informed that they are speaking to an AI?",
        answer: "Yes, CallPilot transparently discloses that it is an AI assistant at the very start of every screening call, ensuring full regulatory compliance and candidate comfort.",
      },
      {
        question: "How do I claim 100 free screening credits for Ashby?",
        answer: "You can sign up on our free trial page with no credit card required. Connect your high-volume vacancy and test the pipeline live.",
      },
    ],
    crossLinks: [
      { title: "Recruit CRM", slug: "recruit-crm" },
      { title: "JobAdder", slug: "jobadder" },
      { title: "Greenhouse (Live)", slug: "greenhouse" },
      { title: "iCIMS (Coming Soon)", slug: "icims" },
    ],
    finalCta: {
      h2: "Ready to Put Ashby Applicant Screening on Autopilot?",
      lead: "Screen every applicant 24/7, gather compliance documents instantly, and start your week with pre-qualified talent.",
      primaryText: "Claim 100 Free Credits",
      primaryUrl: "/free-credits",
      secondaryText: "Read Ashby Launch News",
      secondaryUrl: "/news/callpilot-ashby-integration",
    },
  },

  "recruit-crm": {
    slug: "recruit-crm",
    name: "Recruit CRM",
    status: "Live",
    statusBadgeClass: "badge-live",
    panelType: "live-board",
    seo: {
      title: "Recruit CRM AI Applicant Screening | CallPilot",
      description: "CallPilot screens every Recruit CRM applicant by AI call, collects ID and documents, and updates your CRM automatically. Try 100 free credits.",
      ogTitle: "Recruit CRM AI Applicant Screening | CallPilot",
      ogDescription: "CallPilot screens every Recruit CRM applicant by AI call, collects ID and documents, and updates your CRM automatically. Try 100 free credits.",
      twitterTitle: "Recruit CRM AI Applicant Screening | CallPilot",
      twitterDescription: "CallPilot screens every Recruit CRM applicant by AI call, collects ID and documents, and updates your CRM automatically. Try 100 free credits.",
      schemaDescription: "AI applicant screening calls with automatic traffic-light scoring, integrated directly with Recruit CRM.",
      targetKeyword: "Recruit CRM AI applicant screening",
    },
    hero: {
      eyebrowText: "Recruit CRM Integration: LIVE",
      overline: "AI Applicant Screening Calls + Automation",
      h1: "AI Applicant Screening for Recruit CRM",
      lead: "CallPilot screens every Recruit CRM applicant by AI call, collects ID and documents via WhatsApp, and updates your CRM automatically. Beat competing agencies to high-intent candidates.",
      flowNodes: ["Job Board Ad", "Candidate Applies", "AI Voice Call", "Qualifies", "WhatsApp / SMS", "ID & Docs Collected", "Recruit CRM Synced"],
      primaryCtaText: "Claim 100 Free Credits",
      primaryCtaLink: "/free-credits",
      secondaryCtaText: "See How It Works",
      secondaryCtaLink: "#how-it-works",
    },
    stats: [
      { value: "100% Faster", label: "Candidate first contact" },
      { value: "70% Less", label: "Consultant admin time" },
      { value: "100 Free", label: "Screening calls on trial" },
    ],
    howItWorks: {
      h2: "Automate Screening & Stop the Document Chase",
      lead: "Agency recruitment is a speed race. Here is what happens automatically from candidate application to a fully updated Recruit CRM record:",
      steps: [
        {
          title: "1. Instant Applicant Detection",
          desc: "When an applicant applies to your Recruit CRM vacancy, CallPilot detects the entry and dials them within the hour, 24/7.",
        },
        {
          title: "2. Human-Like AI Qualifying Screen",
          desc: "CallPilot conducts a natural phone screen covering availability, right to work, salary/rate expectations, and key role qualifications.",
        },
        {
          title: "3. WhatsApp / SMS Document Request",
          desc: "The second the candidate qualifies, an automated message requests photos of their ID and compliance documents while their attention is peaked.",
        },
        {
          title: "4. Automatic Recruit CRM Sync",
          desc: "Documents and transcripts save directly onto the candidate profile in Recruit CRM with updated status codes.",
        },
      ],
    },
    trafficLights: {
      lead: "Three clear outcomes update automatically on your Recruit CRM candidate pipeline:",
      qualified: "Amber: Qualified – Awaiting Documents: Passed the AI phone screen. The automated chasing engine handles follow-ups.",
      received: "Green: Qualified – Documents Received: Compliant, documented, and ready for recruiter verification and client submission.",
      unsuccessful: "Red: Unsuccessful: Did not meet essential requirements. Saved recruiter hours from dialling mismatches.",
    },
    callout: {
      title: "Built for Fast-Moving Recruitment Agencies",
      desc: "Two-way sync keeps applicant status and submitted documents up to date on Recruit CRM automatically, with nothing to export or re-key.",
      badgeText: "Recruit CRM: LIVE",
    },
    pricingFeatures: ["Recruit CRM sync included", "100 free trial credits", "No card required"],
    faqs: [
      {
        question: "Does CallPilot integrate directly with Recruit CRM?",
        answer: "Yes, the Recruit CRM integration is live. Applicant status and submitted documents sync straight into the applicant record automatically.",
      },
      {
        question: "How does the traffic-light scoring work?",
        answer: "After each AI screening call, CallPilot automatically scores the applicant amber, green, or red against the job brief. Amber means qualified and documents requested, green means documents received, and red means unsuccessful. Recruiters never have to review the scoring themselves.",
      },
      {
        question: "How much does AI applicant screening cost?",
        answer: COPY.faqCost,
      },
      {
        question: "What happens once an applicant is qualified?",
        answer: "Qualified applicants automatically receive a WhatsApp (or SMS) message asking for a photo ID and their qualifications. Once submitted, it's automatically saved to the Recruit CRM applicant record, the status automatically updates, and the recruiter gets an email to verify it.",
      },
    ],
    crossLinks: [
      { title: "Ashby", slug: "ashby" },
      { title: "JobAdder", slug: "jobadder" },
      { title: "Greenhouse (Live)", slug: "greenhouse" },
      { title: "iCIMS (Coming Soon)", slug: "icims" },
    ],
    finalCta: {
      h2: "Ready to Put Recruit CRM Screening on Autopilot?",
      lead: "Every applicant called, scored, and actioned automatically, the moment they apply. No manual chasing. Never miss a good applicant again.",
      primaryText: "Claim 100 Free Credits",
      primaryUrl: "/free-credits",
      secondaryText: "Read Announcement",
      secondaryUrl: "/news/callpilot-recruit-crm-integration",
    },
  },

  jobadder: {
    slug: "jobadder",
    name: "JobAdder",
    status: "Live",
    statusBadgeClass: "badge-live",
    panelType: "live-board",
    seo: {
      title: "JobAdder AI Applicant Screening | CallPilot",
      description: "Screen JobAdder applicants 24/7 with AI calls. Documents and ID requested by WhatsApp, JobAdder updated automatically. 100 free screening credits.",
      ogTitle: "JobAdder AI Applicant Screening | CallPilot",
      ogDescription: "Screen JobAdder applicants 24/7 with AI calls. Documents and ID requested by WhatsApp, JobAdder updated automatically. 100 free screening credits.",
      twitterTitle: "JobAdder AI Applicant Screening | CallPilot",
      twitterDescription: "Screen JobAdder applicants 24/7 with AI calls. Documents and ID requested by WhatsApp, JobAdder updated automatically. 100 free screening credits.",
      schemaDescription: "AI voice screening calls with instant traffic-light scoring, integrated directly with JobAdder for high-volume recruitment agencies.",
      targetKeyword: "JobAdder AI applicant screening",
    },
    hero: {
      eyebrowText: "JobAdder Integration: LIVE",
      overline: "AI Screening Calls + WhatsApp Automation",
      h1: "AI Applicant Screening for JobAdder",
      lead: "Screen JobAdder applicants 24/7 with human-like AI calls. Compliance documents and ID requested by WhatsApp, JobAdder updated automatically with zero recruiter dial time.",
      flowNodes: ["JobAdder Vacancy", "Application Received", "AI Voice Screen", "Candidate Qualifies", "WhatsApp Request", "Tickets & ID Returned", "JobAdder Updated"],
      primaryCtaText: "Claim 100 Free Credits",
      primaryCtaLink: "/free-credits",
      secondaryCtaText: "Explore Workflow",
      secondaryCtaLink: "#how-it-works",
    },
    stats: [
      { value: "100% Faster", label: "Applicant follow-up" },
      { value: "70% Less", label: "Time spent chasing paperwork" },
      { value: "100 Free", label: "Screening credits on trial" },
    ],
    howItWorks: {
      h2: "From Application to Compliant Placement in One Flow",
      lead: "High-volume temp, contract, and shift desks cannot afford manual paperwork delays. Here is how CallPilot integrates with JobAdder:",
      steps: [
        {
          title: "1. Auto-Polls JobAdder Vacancies",
          desc: "As soon as an applicant applies or is assigned to a JobAdder job, CallPilot dials them automatically, day or night.",
        },
        {
          title: "2. Dynamic AI Screening Conversation",
          desc: "The AI conducts a voice screen evaluating shift availability, transport, tickets/certifications, and pay rates.",
        },
        {
          title: "3. Point-of-Interest Document Request",
          desc: "Qualified candidates get an instant WhatsApp/SMS requesting their tickets, right-to-work documents, and ID while they remain actively engaged.",
        },
        {
          title: "4. Direct Sync to JobAdder Record",
          desc: "Documents, transcripts, and status outcomes write straight into JobAdder for same-day recruiter verification.",
        },
      ],
    },
    trafficLights: {
      lead: "Keep your temp and contract pipeline structured with three real-time statuses:",
      qualified: "Amber: Qualified – Awaiting Documents: Passed qualification. Chasing sequence active.",
      received: "Green: Qualified – Documents Received: Compliant and ready to place on shift.",
      unsuccessful: "Red: Unsuccessful: Screened out, eliminating wasted callbacks.",
    },
    callout: {
      title: "JobAdder Two-Way Realtime Sync",
      desc: "Every call outcome, document, and status change writes straight to the JobAdder record the moment it happens. No exports, no re-keying.",
      badgeText: "JobAdder: LIVE",
    },
    pricingFeatures: ["JobAdder sync included", "100 free credits on trial"],
    faqs: [
      {
        question: "Is the JobAdder integration live?",
        answer: "Yes. It is live now. Applicant status and documents sync into the JobAdder record automatically as soon as CallPilot processes the call.",
      },
      {
        question: "How does traffic-light scoring work for temp desks?",
        answer: "Calls are scored green (qualified & documents received), amber (qualified & awaiting documents), or red (unsuccessful). Consultants can immediately see who is ready to be rostered.",
      },
      {
        question: "Can CallPilot request tickets and right-to-work certifications?",
        answer: "Yes, CallPilot prompts candidates for required certifications, forklift licenses, CSCS cards, or right-to-work IDs based on the job requirements.",
      },
      {
        question: "How fast does first contact happen?",
        answer: "Within the hour, 24 hours a day, 7 days a week — eliminating weekend backlogs completely.",
      },
    ],
    crossLinks: [
      { title: "Ashby", slug: "ashby" },
      { title: "Recruit CRM", slug: "recruit-crm" },
      { title: "Greenhouse (Live)", slug: "greenhouse" },
      { title: "iCIMS (Coming Soon)", slug: "icims" },
    ],
    finalCta: {
      h2: "Ready to Put JobAdder Screening on Autopilot?",
      lead: "Screen every applicant over the weekend without five recruiters working overtime. Start your free trial today.",
      primaryText: "Claim 100 Free Credits",
      primaryUrl: "/free-credits",
      secondaryText: "Read JobAdder Announcement",
      secondaryUrl: "/news/callpilot-jobadder-integration",
    },
  },

  greenhouse: {
    slug: "greenhouse",
    name: "Greenhouse",
    status: "Live",
    statusBadgeClass: "badge-live",
    panelType: "live-board",
    seo: {
      title: "Greenhouse AI Applicant Screening Integration | CallPilot",
      description: "CallPilot's AI Applicant Screening Call for Greenhouse screens applicants 24/7 and collects documents by WhatsApp or SMS. Claim 100 free credits.",
      ogTitle: "Greenhouse AI Applicant Screening Integration | CallPilot",
      ogDescription: "CallPilot's AI Applicant Screening Call for Greenhouse screens applicants 24/7 and collects documents by WhatsApp or SMS. Claim 100 free credits.",
      twitterTitle: "Greenhouse AI Applicant Screening Integration | CallPilot",
      twitterDescription: "CallPilot's AI Applicant Screening Call for Greenhouse screens applicants 24/7 and collects documents by WhatsApp or SMS. Claim 100 free credits.",
      schemaDescription: "AI applicant screening calls integrated with Greenhouse. Every applicant screened, documents collected and the candidate record updated automatically.",
      targetKeyword: "Greenhouse AI applicant screening",
    },
    hero: {
      eyebrowText: "Greenhouse Integration: LIVE",
      overline: "AI Applicant Screening Calls + WhatsApp/SMS Automation",
      h1: "AI Applicant Screening for Greenhouse",
      lead: "Screen every Greenhouse applicant with a human-like AI call. ID and documents are collected by WhatsApp or SMS, and the Greenhouse candidate record is updated automatically without a recruiter picking up the phone.",
      flowNodes: ["Greenhouse Job", "Application", "AI Screening Call", "Evaluation", "WhatsApp / SMS", "Docs Uploaded", "Greenhouse Updated"],
      primaryCtaText: "Claim 100 Free Credits",
      primaryCtaLink: "/free-credits",
      secondaryCtaText: "See How It Works",
      secondaryCtaLink: "#how-it-works",
    },
    stats: [
      { value: "24/7", label: "Applicant Coverage" },
      { value: "100%", label: "Consistent Questioning" },
      { value: "100 Free", label: "Screening Credits on Signup" },
    ],
    howItWorks: {
      h2: "How the CallPilot Greenhouse Integration Works",
      lead: "Automate top-of-funnel screening end to end. Here is what happens from application to a fully updated candidate record in Greenhouse:",
      image: {
        base: "/images/integrations/greenhouse/gh-workflow",
        alt: "CallPilot Greenhouse integration workflow, from job advert to Talent Team notification",
      },
      steps: [
        {
          title: "1. Picks Up the Application",
          desc: "A candidate applies to your Greenhouse job post. CallPilot polls Greenhouse on a schedule and picks the application up within the hour.",
          image: { base: "/images/integrations/greenhouse/gh-step-1-questions", alt: "CallPilot Greenhouse integration, step 1: Picks Up the Application" },
        },
        {
          title: "2. AI Screening Call",
          desc: "CallPilot calls the candidate and runs your screening questions as a natural voice conversation: availability, right to work, experience, location and compensation expectation, configured per job.",
          image: { base: "/images/integrations/greenhouse/gh-step-2-ai-call", alt: "CallPilot Greenhouse integration, step 2: AI Screening Call" },
        },
        {
          title: "3. Document and ID Request",
          desc: "Qualified candidates receive a WhatsApp or SMS requesting their ID and any documents the role requires.",
          image: { base: "/images/integrations/greenhouse/gh-step-3-candidate", alt: "CallPilot Greenhouse integration, step 3: Document and ID Request" },
        },
        {
          title: "4. Documents Attached",
          desc: "Candidate uploads return and attach to their Greenhouse profile without an external portal login.",
          image: { base: "/images/integrations/greenhouse/gh-step-4-greenhouse-sync", alt: "CallPilot Greenhouse integration, step 4: Documents Attached" },
        },
        {
          title: "5. Greenhouse Updated Automatically",
          desc: "The screening outcome, call transcript and stage status are written to the candidate record. No re-keying and no second dashboard.",
          image: { base: "/images/integrations/greenhouse/gh-step-5-verify", alt: "CallPilot Greenhouse integration, step 5: Greenhouse Updated Automatically" },
        },
      ],
    },
    trafficLights: {
      lead: "Your recruiters open Greenhouse to a pipeline that has already been screened and sorted into three clean statuses:",
      qualified: "Amber: Qualified – Awaiting Documents: Passed the AI screening call against your role criteria. The automated WhatsApp/SMS chase sequence is running.",
      received: "Green: Qualified – Documents Received: Passed screening with ID and required documents collected and attached. Ready for recruiter verification.",
      unsuccessful: "Red: Unsuccessful: Did not meet the minimum role requirements. The call transcript is logged on the Greenhouse record.",
    },
    callout: {
      title: "Built for Greenhouse Hiring Teams",
      desc: "Greenhouse brings structure to interview scorecards. CallPilot brings the same consistency to top-of-funnel screening before human interviews begin, so applicants are not left waiting over evenings and weekends.",
      badgeText: "Greenhouse: LIVE",
    },
    pricingFeatures: ["Greenhouse sync included", "100 free screening credits on trial", "Priority setup and onboarding support"],
    faqs: [
      {
        question: "How does the CallPilot integration with Greenhouse work?",
        answer: "CallPilot detects new applicants in Greenhouse and calls them automatically for an AI phone screen. Qualified applicants are asked for documents by WhatsApp or SMS, and the outcome, transcript and files are written to the Greenhouse candidate record.",
      },
      {
        question: "What are the three screening statuses in Greenhouse?",
        answer: "Green: Qualified – Documents Received (passed and files attached). Amber: Qualified – Awaiting Documents (passed, automated reminder running). Red: Unsuccessful (did not meet role criteria).",
      },
      {
        question: "Are candidates told they are speaking to an AI?",
        answer: "Yes. CallPilot discloses that it is an AI assistant at the start of every screening call.",
      },
      {
        question: "Does CallPilot make hiring decisions?",
        answer: "No. CallPilot screens against the criteria you configure and collects documents. Verification and final hiring decisions stay with your recruiters.",
      },
      {
        question: "How do I claim 100 free screening credits for Greenhouse?",
        answer: "Sign up on the free trial page. No credit card is required.",
      },
    ],
    crossLinks: [
      { title: "Ashby (Live)", slug: "ashby" },
      { title: "Recruit CRM (Live)", slug: "recruit-crm" },
      { title: "JobAdder (Live)", slug: "jobadder" },
      { title: "iCIMS (Coming Soon)", slug: "icims" },
    ],
    finalCta: {
      h2: "Ready to Put Greenhouse Applicant Screening on Autopilot?",
      lead: "Screen every applicant 24/7, collect documents by WhatsApp or SMS, and start your week with pre-qualified talent.",
      primaryText: "Claim 100 Free Credits",
      primaryUrl: "/free-credits",
      secondaryText: "Compare Voice vs Video",
      secondaryUrl: "/blog/ai-screening-call-vs-ai-video-interview",
    },
  },

  icims: {
    slug: "icims",
    name: "iCIMS",
    status: "Coming Soon",
    statusBadgeClass: "badge-later",
    panelType: "hitech-metrics",
    seo: {
      title: "iCIMS AI Applicant Screening | CallPilot",
      description: "CallPilot's AI screening call integration for iCIMS is coming soon. Get notified at launch and claim 100 free screening credits.",
      ogTitle: "iCIMS AI Applicant Screening | CallPilot",
      ogDescription: "CallPilot's AI screening call integration for iCIMS is coming soon. Get notified at launch and claim 100 free screening credits.",
      twitterTitle: "iCIMS AI Applicant Screening | CallPilot",
      twitterDescription: "CallPilot's AI screening call integration for iCIMS is coming soon. Get notified at launch and claim 100 free screening credits.",
      schemaDescription: "Enterprise AI voice screening calls for iCIMS, coming soon. Get notified at launch and claim 100 free credits.",
      targetKeyword: "iCIMS AI applicant screening",
    },
    hero: {
      eyebrowText: "iCIMS Integration: COMING SOON",
      overline: "Enterprise High-Volume Qualification Engine",
      h1: "AI Applicant Screening for iCIMS: Coming Soon",
      lead: "CallPilot's AI applicant screening call for iCIMS is coming soon. Every applicant screened against the same criteria, every call transcribed to the record, every document collected and attached automatically. Built for the volumes enterprise talent teams actually run.",
      flowNodes: ["iCIMS Career Portal", "Volume Applications", "AI Screening Calls", "Automated Criteria", "WhatsApp / SMS", "ID & Docs Captured", "iCIMS Audit Trail"],
      primaryCtaText: "Get Notified",
      primaryCtaLink: "#notify-form",
      secondaryCtaText: "Explore Architecture",
      secondaryCtaLink: "#how-it-works",
    },
    hitech: {
      tag: "ENTERPRISE RESILIENCE",
      h2: "Consistent Qualification at 50 or 50,000 Applicants",
      description: "Manual screening at enterprise scale creates unavoidable human variance. CallPilot ensures the 500th applicant on Sunday night receives the exact same rigorous evaluation as the first on Monday morning.",
      accentColor: "#4fa8f0",
    },
    waitlist: {
      h2: "Get Notified When iCIMS Launches",
      note: "Be first to know when the iCIMS integration launches. Includes 100 free screening credits and dedicated solution architecture support.",
      cardTitle: "Get Launch Updates",
      cardDesc: "Enter your business email to receive integration updates and onboarding details at launch.",
      buttonText: "Notify Me",
    },
    stats: [
      { value: "50,000+", label: "Monthly Applicant Capacity" },
      { value: "100%", label: "Verifiable Audit Trail" },
      { value: "100 Free", label: "Screening Credits on Trial" },
    ],
    howItWorks: {
      h2: "What the iCIMS Integration Will Do",
      lead: "A structured, defensible qualification workflow designed for enterprise governance and high applicant volume:",
      steps: [
        {
          title: "1. Trigger on Application",
          desc: "A candidate applies through your iCIMS careers portal. CallPilot polls iCIMS on a schedule and picks the application up within the hour.",
        },
        {
          title: "2. Consistent AI Voice Screening",
          desc: "Your configured screening questions run as a natural voice conversation. Identical criteria are applied to every applicant.",
        },
        {
          title: "3. WhatsApp / SMS Document Request",
          desc: "Qualified candidates receive an immediate message requesting ID and required compliance files within the same interaction.",
        },
        {
          title: "4. Documents Attached to iCIMS Profile",
          desc: "Uploads attach directly to the candidate profile, accessible to recruiter review.",
        },
        {
          title: "5. Complete Governance & Status Write-Back",
          desc: "Status, outcome, and verbatim call transcripts write straight into iCIMS for a complete, defensible audit log.",
        },
      ],
    },
    trafficLights: {
      lead: "Structured pipeline visibility inside iCIMS:",
      qualified: "Amber: Qualified – Awaiting Documents: Criteria met, automated chase running.",
      received: "Green: Qualified – Documents Received: Criteria met, documents in, ready for recruiter review.",
      unsuccessful: "Red: Unsuccessful: Below criteria threshold, full transcript logged.",
    },
    callout: {
      title: "Enterprise Governance & Audit Trail",
      desc: "Every CallPilot screening produces a timestamped transcript attached to the iCIMS candidate record. Screening criteria are applied identically to every applicant, eliminating bias and variance.",
      badgeText: "iCIMS: COMING SOON",
    },
    pricingFeatures: ["iCIMS enterprise sync in rollout", "100 free screening credits", "Enterprise SLA & dedicated support"],
    faqs: [
      {
        question: "When will the iCIMS integration be available?",
        answer: "The iCIMS integration is coming soon. Leave your email and we will tell you as soon as it launches.",
      },
      {
        question: "How does CallPilot handle enterprise data compliance and security?",
        answer: "CallPilot enforces strict data isolation, encrypted transit (TLS 1.3), encrypted storage (AES-256), and GDPR-compliant candidate data retention policies.",
      },
      {
        question: "Does CallPilot make hiring decisions automatically?",
        answer: "No. CallPilot qualifies applicants against your configured baseline criteria and logs transcripts. Final selection and hiring decisions remain 100% with your human recruiters.",
      },
      {
        question: "Can CallPilot support multilingual screening for global operations?",
        answer: "Yes, CallPilot's voice engine supports multiple languages and accents across North America, the UK, Europe, and APAC.",
      },
    ],
    crossLinks: [
      { title: "Ashby (Live)", slug: "ashby" },
      { title: "Recruit CRM (Live)", slug: "recruit-crm" },
      { title: "JobAdder (Live)", slug: "jobadder" },
      { title: "Greenhouse (Live)", slug: "greenhouse" },
    ],
    finalCta: {
      h2: "Get Notified When iCIMS Launches",
      lead: "Leave your email to be told at launch and to secure 100 free screening credits for your enterprise talent acquisition team.",
      primaryText: "Get Notified",
      primaryUrl: "#notify-form",
      secondaryText: "Read Volume Screening Guide",
      secondaryUrl: "/blog/high-volume-applicant-screening/",
    },
  },
};

export const allIntegrations = Object.values(integrationsData);
