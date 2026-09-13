export interface ATSIntegration {
  slug: string;
  name: string;
  status: "Live" | "Live Soon" | "Coming Soon";
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
    steps: {
      title: string;
      desc: string;
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
      description: "Screen every Ashby applicant with an AI call in under 2 minutes. Documents and ID collected via WhatsApp, Ashby updated automatically. 100 free credits.",
      ogTitle: "Ashby AI Applicant Screening | CallPilot Integration",
      ogDescription: "Screen every Ashby applicant with an AI call in under 2 minutes. Documents and ID collected via WhatsApp, Ashby updated automatically. 100 free credits.",
      twitterTitle: "Ashby AI Applicant Screening | CallPilot Integration",
      twitterDescription: "Screen every Ashby applicant with an AI call in under 2 minutes. Documents and ID collected via WhatsApp, Ashby updated automatically. 100 free credits.",
      schemaDescription: "AI applicant screening calls integrated with Ashby. Every applicant screened, documents collected, and candidate record updated automatically.",
      targetKeyword: "Ashby AI applicant screening",
    },
    hero: {
      eyebrowText: "Ashby Integration: LIVE",
      overline: "AI Applicant Screening Calls + WhatsApp/SMS Automation",
      h1: "AI Applicant Screening for Ashby",
      lead: "Screen every Ashby applicant with a human-like AI call in under 2 minutes. Documents and ID collected via WhatsApp, Ashby updated automatically without a recruiter picking up the phone.",
      flowNodes: ["Ashby Job Ad", "Applicant Applies", "AI Screening Call", "Pre-Qualifies", "WhatsApp Request", "ID & Documents Attached", "Ashby Status Synced"],
      primaryCtaText: "Claim 100 Free Credits",
      primaryCtaLink: "/free-trial/",
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
      qualified: "🟠 Qualified – Awaiting Documents: Passed the AI screening call against your role criteria. The automated WhatsApp/SMS chase sequence is actively running.",
      received: "🟢 Qualified – Documents Received: Passed screening with ID and required right-to-work documents collected and attached. Ready for recruiter verification.",
      unsuccessful: "🔴 Unsuccessful: Did not meet the minimum role requirements. Call transcript and recorded responses are logged on the Ashby record for full auditability.",
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
        answer: "The three pipeline statuses are: 🟢 Qualified – Documents Received (passed and files attached), 🟠 Qualified – Awaiting Documents (passed, automated reminder active), and 🔴 Unsuccessful (did not meet role criteria).",
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
      { title: "Greenhouse (Waitlist)", slug: "greenhouse" },
      { title: "iCIMS (Waitlist)", slug: "icims" },
    ],
    finalCta: {
      h2: "Ready to Put Ashby Applicant Screening on Autopilot?",
      lead: "Screen every applicant 24/7, gather compliance documents instantly, and start your week with pre-qualified talent.",
      primaryText: "Claim 100 Free Credits",
      primaryUrl: "/free-trial/",
      secondaryText: "Read Ashby Launch News",
      secondaryUrl: "/news/callpilot-ashby-integration/",
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
      primaryCtaLink: "/free-trial/",
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
          desc: "CallPilot conducts a natural phone screen covering availability, right to work, salary/rate expectations, and key role qualifications in under two minutes.",
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
      qualified: "🟠 Qualified – Awaiting Documents: Passed the AI phone screen. The automated chasing engine handles follow-ups.",
      received: "🟢 Qualified – Documents Received: Compliant, documented, and ready for recruiter verification and client submission.",
      unsuccessful: "🔴 Unsuccessful: Did not meet essential requirements. Saved recruiter hours from dialling mismatches.",
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
        answer: "Plans start at $395/month for 100 screenings ($3.95 each). Growth is $1,400/month for 400 screenings, Pro is $2,950/month for 1,000 screenings, and Enterprise pricing is custom for 2,000+. New clients get their first 100 AI screening calls free.",
      },
      {
        question: "What happens once an applicant is qualified?",
        answer: "Qualified applicants automatically receive a WhatsApp (or SMS) message asking for a photo ID and their qualifications. Once submitted, it's automatically saved to the Recruit CRM applicant record, the status automatically updates, and the recruiter gets an email to verify it.",
      },
    ],
    crossLinks: [
      { title: "Ashby", slug: "ashby" },
      { title: "JobAdder", slug: "jobadder" },
      { title: "Greenhouse (Waitlist)", slug: "greenhouse" },
      { title: "iCIMS (Waitlist)", slug: "icims" },
    ],
    finalCta: {
      h2: "Ready to Put Recruit CRM Screening on Autopilot?",
      lead: "Every applicant called, scored, and actioned automatically, the moment they apply. No manual chasing. Never miss a good applicant again.",
      primaryText: "Claim 100 Free Credits",
      primaryUrl: "/free-trial/",
      secondaryText: "Read Announcement",
      secondaryUrl: "/news/callpilot-recruit-crm-integration/",
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
      primaryCtaLink: "/free-trial/",
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
      qualified: "🟠 Qualified – Awaiting Documents: Passed qualification. Chasing sequence active.",
      received: "🟢 Qualified – Documents Received: Compliant and ready to place on shift.",
      unsuccessful: "🔴 Unsuccessful: Screened out, eliminating wasted callbacks.",
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
      { title: "Greenhouse (Waitlist)", slug: "greenhouse" },
      { title: "iCIMS (Waitlist)", slug: "icims" },
    ],
    finalCta: {
      h2: "Ready to Put JobAdder Screening on Autopilot?",
      lead: "Screen 100 applicants over the weekend without five consultants working overtime. Start your free trial today.",
      primaryText: "Claim 100 Free Credits",
      primaryUrl: "/free-trial/",
      secondaryText: "Read JobAdder Announcement",
      secondaryUrl: "/news/callpilot-jobadder-integration/",
    },
  },

  greenhouse: {
    slug: "greenhouse",
    name: "Greenhouse",
    status: "Live Soon",
    statusBadgeClass: "badge-soon",
    panelType: "hitech-metrics",
    seo: {
      title: "Greenhouse AI Applicant Screening | CallPilot",
      description: "CallPilot's AI screening call integration for Greenhouse is coming soon. Join the waitlist for early access and 100 free screening credits.",
      ogTitle: "Greenhouse AI Applicant Screening | CallPilot",
      ogDescription: "CallPilot's AI screening call integration for Greenhouse is coming soon. Join the waitlist for early access and 100 free screening credits.",
      twitterTitle: "Greenhouse AI Applicant Screening | CallPilot",
      twitterDescription: "CallPilot's AI screening call integration for Greenhouse is coming soon. Join the waitlist for early access and 100 free screening credits.",
      schemaDescription: "AI voice screening calls with instant traffic-light scoring for Greenhouse. Early access waitlist is open with 100 free credits.",
      targetKeyword: "Greenhouse AI applicant screening",
    },
    hero: {
      eyebrowText: "Greenhouse Integration: WAITLIST OPEN",
      overline: "The New Era of Structured Talent Acquisition",
      h1: "AI Applicant Screening for Greenhouse — Coming Soon",
      lead: "CallPilot's AI applicant screening call is coming to Greenhouse. Every applicant screened within the hour of applying by a human-like AI voice, ID and documents collected by WhatsApp, and the Greenhouse candidate record synced automatically. Join the early access waitlist today.",
      flowNodes: ["Greenhouse Job", "Application", "AI Screening Call", "Evaluation", "WhatsApp / SMS", "Docs Uploaded", "Greenhouse Scorecard"],
      primaryCtaText: "Join Greenhouse Waitlist",
      primaryCtaLink: "#waitlist-form",
      secondaryCtaText: "View Integration Specs",
      secondaryCtaLink: "#how-it-works",
    },
    hitech: {
      tag: "EARLY ACCESS PROGRAM",
      h2: "Structured Screening Before the First Interview",
      description: "Greenhouse excels at structured hiring from the first interview onwards. CallPilot brings that same rigorous structure to initial applicant screening at scale.",
      accentColor: "#f3c34d",
    },
    waitlist: {
      h2: "Join the Greenhouse Early Access Waitlist",
      note: "Early access is opening to a limited cohort of Greenhouse talent acquisition teams ahead of general release. Includes 100 free screening credits.",
      cardTitle: "Reserve Your Team's Spot",
      cardDesc: "Enter your work email for priority onboarding, direct input into custom scorecard mapping, and 100 free screening credits.",
      buttonText: "Join Waitlist",
    },
    stats: [
      { value: "100%", label: "Consistent Questioning" },
      { value: "168 hrs", label: "Weekly Automated Coverage" },
      { value: "100 Free", label: "Credits for Waitlist Members" },
    ],
    howItWorks: {
      h2: "What the Greenhouse Integration Will Do",
      lead: "A comprehensive end-to-end qualification and document capture pipeline designed specifically for Greenhouse workflows:",
      steps: [
        {
          title: "1. Trigger on Application",
          desc: "A candidate applies to your Greenhouse job post. CallPilot polls Greenhouse on a schedule and picks the application up within the hour.",
        },
        {
          title: "2. AI Screening Call",
          desc: "CallPilot calls the candidate and runs your screening questions as a natural voice conversation — availability, right to work, experience, location, compensation expectation, configured per job. Most calls complete in under two minutes.",
        },
        {
          title: "3. Document and ID Request",
          desc: "Qualified candidates receive an immediate WhatsApp or SMS requesting their ID and any documents the role requires — sent within the same interaction, not days later.",
        },
        {
          title: "4. Documents Received and Attached",
          desc: "Candidate uploads return and attach straight to their Greenhouse profile without requiring an external portal login.",
        },
        {
          title: "5. Greenhouse Updated Automatically",
          desc: "Screening outcome, call transcript, and stage status write straight to the candidate record. No re-keying, no second dashboard.",
        },
      ],
    },
    trafficLights: {
      lead: "What your talent acquisition team will see in Greenhouse:",
      qualified: "🟢 Qualified – Documents Received: Passed screening, compliance files attached, ready for recruiter interview progression.",
      received: "🟠 Qualified – Awaiting Documents: Passed initial screen, automated WhatsApp/SMS chase sequence running.",
      unsuccessful: "🔴 Unsuccessful: Did not meet role criteria, with transcript and timestamp logged on the record.",
    },
    callout: {
      title: "Why Greenhouse Teams Are Asking for CallPilot",
      desc: "Greenhouse brings structure to interview scorecards. CallPilot brings that exact consistency to top-of-funnel screening before human interviews begin, eliminating queue bias and weekend latency.",
      badgeText: "Greenhouse: COMING SOON",
    },
    pricingFeatures: ["Greenhouse native sync in rollout", "100 free credits on early access", "Priority setup & onboarding support"],
    faqs: [
      {
        question: "When will the Greenhouse integration be available?",
        answer: "Early access is opening now, with general release following shortly. Teams on the waitlist receive priority onboarding and setup support.",
      },
      {
        question: "Will it work with our existing Greenhouse workflows and scorecards?",
        answer: "Yes. CallPilot writes directly to candidate records and custom fields, so your existing stages, scorecards, and email notifications continue to work seamlessly.",
      },
      {
        question: "Can we use CallPilot before the Greenhouse integration is live?",
        answer: "Yes — CallPilot is already live with Ashby, Recruit CRM, and JobAdder, and can run parallel standalone screening workflows for your current roles.",
      },
      {
        question: "Will candidates be told they are speaking to an AI?",
        answer: "Yes, CallPilot explicitly discloses this at the beginning of every screening call for full transparency.",
      },
    ],
    crossLinks: [
      { title: "Ashby (Live)", slug: "ashby" },
      { title: "Recruit CRM (Live)", slug: "recruit-crm" },
      { title: "JobAdder (Live)", slug: "jobadder" },
      { title: "iCIMS (Waitlist)", slug: "icims" },
    ],
    finalCta: {
      h2: "Get Early Access for Greenhouse",
      lead: "Join the waitlist now to secure 100 free screening credits and early onboarding for your talent acquisition team.",
      primaryText: "Join Waitlist",
      primaryUrl: "#waitlist-form",
      secondaryText: "Compare Voice vs Video",
      secondaryUrl: "/blog/ai-screening-call-vs-ai-video-interview/",
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
      description: "CallPilot's AI screening call integration for iCIMS is coming soon. Join the waitlist for early access and 100 free screening credits.",
      ogTitle: "iCIMS AI Applicant Screening | CallPilot",
      ogDescription: "CallPilot's AI screening call integration for iCIMS is coming soon. Join the waitlist for early access and 100 free screening credits.",
      twitterTitle: "iCIMS AI Applicant Screening | CallPilot",
      twitterDescription: "CallPilot's AI screening call integration for iCIMS is coming soon. Join the waitlist for early access and 100 free screening credits.",
      schemaDescription: "Enterprise AI voice screening calls integrated with iCIMS. Join the waitlist for early access and 100 free credits.",
      targetKeyword: "iCIMS AI applicant screening",
    },
    hero: {
      eyebrowText: "iCIMS Integration: EARLY ACCESS WAITLIST",
      overline: "Enterprise High-Volume Qualification Engine",
      h1: "AI Applicant Screening for iCIMS — Coming Soon",
      lead: "CallPilot's AI applicant screening call is coming to iCIMS. Every applicant screened against the same criteria, every call transcribed to the record, every document collected and attached automatically. Built for the volumes enterprise talent teams actually run.",
      flowNodes: ["iCIMS Career Portal", "Volume Applications", "AI Screening Calls", "Automated Criteria", "WhatsApp / SMS", "ID & Docs Captured", "iCIMS Audit Trail"],
      primaryCtaText: "Join iCIMS Waitlist",
      primaryCtaLink: "#waitlist-form",
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
      h2: "Join the iCIMS Early Access Waitlist",
      note: "Early access is opening to enterprise talent acquisition teams. Receive 100 free screening credits and dedicated solution architecture support.",
      cardTitle: "Reserve Enterprise Early Access",
      cardDesc: "Enter your business email to receive integration updates, SOC 2 compliance documentation, and early access onboarding.",
      buttonText: "Join Waitlist",
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
          desc: "Your configured screening questions run as a natural voice conversation. Most calls complete in under two minutes with identical criteria applied.",
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
      qualified: "🟢 Qualified – Documents Received: Criteria met, documents in, ready for recruiter review.",
      received: "🟠 Qualified – Awaiting Documents: Criteria met, automated chase running.",
      unsuccessful: "🔴 Unsuccessful: Below criteria threshold, full transcript logged.",
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
        answer: "Early access is opening now with general rollout following. Teams on the waitlist receive early access and architectural support.",
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
      { title: "Greenhouse (Waitlist)", slug: "greenhouse" },
    ],
    finalCta: {
      h2: "Get Early Access for iCIMS",
      lead: "Join the waitlist now to secure 100 free screening credits and early onboarding for your enterprise talent acquisition team.",
      primaryText: "Join Waitlist",
      primaryUrl: "#waitlist-form",
      secondaryText: "Read Volume Screening Guide",
      secondaryUrl: "/blog/high-volume-applicant-screening/",
    },
  },
};

export const allIntegrations = Object.values(integrationsData);
