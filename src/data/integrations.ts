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
  "recruit-crm": {
    slug: "recruit-crm",
    name: "Recruit CRM",
    status: "Live",
    statusBadgeClass: "badge-live",
    panelType: "live-board",
    seo: {
      title: "AI Applicant Screening Calls + Automation for Recruit CRM | CallPilot",
      description: "CallPilot's AI screening calls qualify applicants, collect ID and documents via WhatsApp, and sync straight into Recruit CRM. First 100 calls free.",
      ogTitle: "AI Applicant Screening Calls + Automation for Recruit CRM | CallPilot",
      ogDescription: "Human-like AI voice calls, automatic traffic-light scoring, and WhatsApp document collection, synced straight into Recruit CRM. Built for recruitment agencies.",
      twitterTitle: "AI Applicant Screening Calls + Automation for Recruit CRM | CallPilot",
      twitterDescription: "CallPilot's AI screening calls qualify applicants, collect ID and documents via WhatsApp, and sync straight into Recruit CRM. First 100 calls free.",
      schemaDescription: "AI applicant screening calls with automatic traffic-light scoring, integrated directly with Recruit CRM.",
    },
    hero: {
      eyebrowText: "Recruit CRM Integration: LIVE",
      overline: "AI Applicant Screening Calls + Automation",
      h1: "Recruiters Sleep. CallPilot Qualifies 24/7.",
      lead: "Built for recruitment agencies who never want to miss a good applicant again. Beat your competitors. Increase revenue & profit.",
      flowNodes: ["Advert", "Applies", "AI Call", "Qualifies", "WhatsApp / SMS / Email", "ID & Documents", "Recruit CRM Updated"],
      primaryCtaText: "Get Connected",
      primaryCtaLink: "#book-a-demo",
      secondaryCtaText: "See Pricing",
      secondaryCtaLink: "#pricing",
    },
    stats: [
      { value: "100% Faster", label: "CVs submitted" },
      { value: "70% Less", label: "Recruiter admin" },
      { value: "100 Free", label: "New client screening calls" },
    ],
    howItWorks: {
      h2: "Stop Chasing Documents",
      lead: "Give recruiters their time back. Here's what happens automatically, from application to a fully-updated Recruit CRM record.",
      steps: [
        {
          title: "Applicant applies through your Recruit CRM job ad",
          desc: "CallPilot places a screening call automatically, within the hour of the application landing.",
        },
        {
          title: "CallPilot reads the job advert and asks the qualification questions",
          desc: "Qualifies the applicant against the role's requirements: a natural, human-like conversation, not a script.",
        },
        {
          title: "Automatic traffic-light scoring",
          desc: "Every call is auto-scored the moment it ends. No recruiter time taken to listen back or re-check anything.",
        },
        {
          title: "Qualified applicants get an automatic message",
          desc: "Either a WhatsApp message asking them to reply with their documents, or an SMS/email with a secure upload link for their ID and qualifications.",
        },
        {
          title: "Documents sync straight into Recruit CRM",
          desc: "A WhatsApp reply or SMS document upload automatically updates the applicant's status, and the documents are saved directly to their Recruit CRM record.",
        },
        {
          title: "Recruiter gets a verification email",
          desc: "Documents arrive into your Recruit CRM instantly. Recruiter time chasing documents is significantly reduced.",
        },
      ],
    },
    trafficLights: {
      lead: "Recruiters don't see a score to review. It's fully automatic, and Recruit CRM is updated instantly, every time, with the right people notified.",
      qualified: "Passed the AI screening call. CallPilot requests documents over WhatsApp or SMS, with email as a fallback.",
      received: "ID and qualification documents are saved straight to the Recruit CRM record, ready for the recruiter to verify.",
      unsuccessful: "Screened out automatically, saving recruiters the time of calling or reviewing applicants who don't match.",
    },
    callout: {
      title: "Built for Recruit CRM",
      desc: "Two-way sync keeps applicant status and submitted documents up to date on the Recruit CRM record automatically, with nothing to export or re-key.",
      badgeText: "Recruit CRM: LIVE",
    },
    pricingFeatures: ["Recruit CRM sync included"],
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
    finalCta: {
      h2: "Ready to Put Recruit CRM Screening on Autopilot?",
      lead: "Every applicant called, scored, and actioned automatically, the moment they apply. No manual chasing. Never miss a good applicant again.",
      primaryText: "Get Connected",
      primaryUrl: "https://www.callpilot.pro/?utm_source=integrations&utm_medium=cta&utm_campaign=recruit-crm&utm_content=get-connected",
      secondaryText: "Arrange a Call",
      secondaryUrl: "https://www.callpilot.pro/?utm_source=integrations&utm_medium=cta&utm_campaign=recruit-crm&utm_content=arrange-a-call",
    },
  },

  jobadder: {
    slug: "jobadder",
    name: "JobAdder",
    status: "Live",
    statusBadgeClass: "badge-live",
    panelType: "live-board",
    seo: {
      title: "AI Screening Calls for JobAdder Agencies | CallPilot",
      description: "CallPilot's AI voice calls screen every JobAdder applicant day or night, weekends included, so temp and contract desks never lose one to slow follow-up.",
      ogTitle: "AI Screening Calls for JobAdder Agencies | CallPilot",
      ogDescription: "Human-like AI screening calls with instant traffic-light scoring, built for high-volume JobAdder agencies running temp and contract desks day or night.",
      twitterTitle: "AI Screening Calls for JobAdder Agencies | CallPilot",
      twitterDescription: "CallPilot's AI voice calls screen every JobAdder applicant day or night, weekends included, so temp and contract desks never lose one to slow follow-up.",
      schemaDescription: "AI voice screening calls with instant traffic-light scoring, integrated directly with JobAdder for high-volume recruitment agencies.",
    },
    hero: {
      eyebrowText: "JobAdder Integration: LIVE",
      overline: "AI Screening Calls + WhatsApp Automation",
      h1: "Looking for Faster Hiring With End-to-End Automation? CallPilot Has Cracked It.",
      lead: "No more applicants going cold in the queue. CallPilot calls and screens every JobAdder applicant within the hour, day or night, weekends included, so high-volume temp and contract desks stop losing applicants to slow follow-up.",
      flowNodes: ["Advert", "Applies", "AI Call", "Qualifies", "WhatsApp / SMS / Email", "ID & Documents", "JobAdder Updated"],
      primaryCtaText: "Get Connected",
      primaryCtaLink: "#book-a-demo",
      secondaryCtaText: "See Pricing",
      secondaryCtaLink: "#pricing",
    },
    stats: [
      { value: "100% Faster", label: "Applicant follow-up" },
      { value: "70% Less", label: "Time spent chasing" },
      { value: "100 Free", label: "New client screening calls" },
    ],
    howItWorks: {
      h2: "From Application to Screened in One Call",
      lead: "No queue, no backlog, no chasing paperwork. Here's what happens the moment someone applies to a job posted through JobAdder.",
      steps: [
        {
          title: "An applicant applies to your JobAdder ad, or a recruiter adds one to a job",
          desc: "CallPilot dials automatically, usually inside the hour, any time of day or night.",
        },
        {
          title: "CallPilot runs the screening interview",
          desc: "It reads the job spec from the advert and asks the qualifying questions in a natural, human-like voice conversation.",
        },
        {
          title: "The call is scored the second it ends",
          desc: "Traffic-light scoring runs automatically. Nobody has to listen back or double-check the result.",
        },
        {
          title: "Qualified applicants are messaged instantly",
          desc: "A WhatsApp or SMS request for ID and qualifications, with a secure email upload link if they'd rather use that.",
        },
        {
          title: "Documents land straight in JobAdder",
          desc: "Whatever they send back updates the applicant's status and attaches the files to their record automatically.",
        },
        {
          title: "One email, ready to verify",
          desc: "The recruiter gets notified once and confirms. No spreadsheet, no follow-up calls, no lost paperwork.",
        },
      ],
    },
    trafficLights: {
      lead: "No manual review, no listening back to calls. JobAdder gets updated the second a call ends, and the right person is notified straight away.",
      qualified: "The applicant passed the screening call, so no shift or start date is lost to a slow follow-up. CallPilot requests their documents straight over WhatsApp or SMS, with email as a backup.",
      received: "ID and right-to-work documents land straight on the JobAdder record, ready for a quick check before the next shift needs filling.",
      unsuccessful: "Ruled out automatically, so a recruiter's time never goes on a callback or interview slot for a mismatch.",
    },
    callout: {
      title: "JobAdder Sync, Live Both Ways",
      desc: "Every call outcome, document, and status change writes straight to the JobAdder record the moment it happens. No exports, no re-keying, no lag between CallPilot and your ATS.",
      badgeText: "JobAdder: LIVE",
    },
    pricingFeatures: ["JobAdder sync included"],
    faqs: [
      {
        question: "Is the JobAdder integration actually live?",
        answer: "Yes. It's live now, applicant status and documents sync into the JobAdder record automatically as soon as CallPilot has them.",
      },
      {
        question: "How does the traffic-light scoring work?",
        answer: "Every screening call is scored amber, green, or red against the job brief the moment it ends. Amber is qualified and awaiting documents, green is qualified and documents received, red is unsuccessful. No recruiter has to sit and mark it manually.",
      },
      {
        question: "How much does AI applicant screening cost?",
        answer: "Plans start at $395/month for 100 screenings ($3.95 each). Growth is $1,400/month for 400 screenings, Pro is $2,950/month for 1,000 screenings, and Enterprise pricing is custom for 2,000+. New clients get their first 100 AI screening calls free.",
      },
      {
        question: "What happens after an applicant qualifies?",
        answer: "They're messaged automatically over WhatsApp or SMS for a photo ID and their qualifications. Once sent, it's attached to their JobAdder record, the status flips over, and the recruiter gets one email to sign it off.",
      },
    ],
    finalCta: {
      h2: "Ready to Put JobAdder Screening on Autopilot?",
      lead: "Every applicant called, scored, and actioned the moment they apply, no matter the hour. No backlog on Monday morning, no chasing paperwork, no missed applicants.",
      primaryText: "Get Connected",
      primaryUrl: "https://www.callpilot.pro/?utm_source=integrations&utm_medium=cta&utm_campaign=jobadder&utm_content=get-connected",
      secondaryText: "Arrange a Call",
      secondaryUrl: "https://www.callpilot.pro/?utm_source=integrations&utm_medium=cta&utm_campaign=jobadder&utm_content=arrange-a-call",
    },
  },

  greenhouse: {
    slug: "greenhouse",
    name: "Greenhouse",
    status: "Live Soon",
    statusBadgeClass: "badge-soon",
    panelType: "hitech-metrics",
    seo: {
      title: "Fast AI Screening for Greenhouse | CallPilot",
      description: "CallPilot's AI voice calls qualify every Greenhouse applicant and hand your team structured screening notes, not a resume. Native Greenhouse sync launches soon.",
      ogTitle: "Fast AI Screening for Greenhouse | CallPilot",
      ogDescription: "AI voice calls that qualify applicants against the job brief automatically, built for enterprise hiring teams on Greenhouse. Native sync launches soon.",
      twitterTitle: "Fast AI Screening for Greenhouse | CallPilot",
      twitterDescription: "CallPilot's AI voice calls qualify every Greenhouse applicant and hand your team structured screening notes, not a resume. Native sync launches soon.",
      schemaDescription: "AI voice screening calls with instant traffic-light scoring. Native Greenhouse sync is in final sign-off.",
    },
    hero: {
      eyebrowText: "Greenhouse Integration: LIVE SOON",
      overline: "The New Era of Talent Acquisition",
      h1: "AI Applicant Calls Built for Enterprise Hiring at Scale",
      lead: "CallPilot calls, qualifies, and updates the Greenhouse record within the hour, day or night, so your team starts with structured applicant insights, not a cold résumé, and qualified talent never sits waiting.",
      flowNodes: ["Advert", "Applies", "AI Call", "Qualifies", "WhatsApp / SMS / Email", "ID & Documents", "Greenhouse Updated"],
      primaryCtaText: "Get Early Access",
      primaryCtaLink: "#book-a-demo",
      secondaryCtaText: "See Pricing",
      secondaryCtaLink: "#pricing",
    },
    hitech: {
      tag: "LIVE ENGINE METRICS",
      h2: "Already Proven at Scale, Greenhouse Sync Launching Soon",
      description: "Greenhouse sync is in final sign-off, the underlying AI screening engine is already handling calls at volume on other integrations today.",
      accentColor: "#f3c34d",
    },
    waitlist: {
      h2: "Get Early Access",
      note: "Greenhouse sync is in final sign-off and launching shortly. Leave your email and your team will be among the first connected.",
      cardTitle: "Join the Greenhouse early access list",
      cardDesc: "One email when it's live, and an invitation to get connected straight away. Nothing else, no spam.",
      buttonText: "Notify Me",
    },
    stats: [
      { value: "100% Faster", label: "Applicant response time" },
      { value: "70% Less", label: "Manual screening work" },
      { value: "100 Free", label: "New client screening calls" },
    ],
    howItWorks: {
      h2: "From Application to Screened in One Call",
      lead: "No queue, no backlog, no chasing paperwork. Here's what happens the moment someone applies to a job posted through Greenhouse.",
      steps: [
        {
          title: "An applicant applies to your Greenhouse ad",
          desc: "CallPilot dials automatically, usually inside the hour, any time of day or night.",
        },
        {
          title: "CallPilot runs the screening interview",
          desc: "It reads the job spec and asks the qualifying questions in a natural, human-sounding conversation.",
        },
        {
          title: "The call is scored the second it ends",
          desc: "Traffic-light scoring runs automatically. Nobody has to listen back or double-check the result.",
        },
        {
          title: "Qualified applicants are messaged instantly",
          desc: "A WhatsApp or SMS request for ID and qualifications, with a secure email upload link if they'd rather use that.",
        },
        {
          title: "Documents land straight in Greenhouse",
          desc: "Whatever they send back updates the applicant's status and attaches the files to their record automatically.",
        },
        {
          title: "One email, ready to verify",
          desc: "The recruiter gets notified once and confirms. No spreadsheet, no follow-up calls, no lost paperwork.",
        },
      ],
    },
    trafficLights: {
      lead: "No manual review, no listening back to calls. Greenhouse gets updated the second a call ends, and the right person is notified straight away.",
      qualified: "The applicant passed the screening call, so the scorecard starts from a completed interview, not a resume. CallPilot requests their documents over WhatsApp or SMS, with email as a backup.",
      received: "ID and qualifications land straight on the Greenhouse record, ready for a quick check before the next stage.",
      unsuccessful: "Ruled out automatically, so nobody on the hiring team spends a slot on a mismatch.",
    },
    callout: {
      title: "Greenhouse Sync, Launching Soon",
      desc: "Two-way status and document sync with Greenhouse is in final sign-off. Screening calls run on the same proven engine already live across other integrations, and Greenhouse clients go live the moment sync ships.",
      badgeText: "Greenhouse: LIVE SOON",
    },
    pricingFeatures: ["Greenhouse sync: live soon"],
    faqs: [
      {
        question: "Is the Greenhouse integration actually live?",
        answer: "Not yet. Greenhouse sync is in final sign-off and launching shortly. Join the early access list and your account will be switched on automatically the moment it ships.",
      },
      {
        question: "How does the traffic-light scoring work?",
        answer: "Every screening call is scored amber, green, or red against the job brief the moment it ends. Amber is qualified and awaiting documents, green is documents received, red is unsuccessful. No recruiter has to sit and mark it manually.",
      },
      {
        question: "How much does AI applicant screening cost?",
        answer: "Plans start at $395/month for 100 screenings ($3.95 each). Growth is $1,400/month for 400 screenings, Pro is $2,950/month for 1,000 screenings, and Enterprise pricing is custom for 2,000+. New clients get their first 100 AI screening calls free.",
      },
      {
        question: "What happens after an applicant qualifies?",
        answer: "They're messaged automatically over WhatsApp or SMS for a photo ID and their qualifications. Once sent, it's attached to their Greenhouse record, the status flips over, and the recruiter gets one email to sign it off.",
      },
    ],
    finalCta: {
      h2: "Be Ready the Moment Greenhouse Sync Goes Live",
      lead: "Join the early access list now and every applicant will be called, scored, and actioned the moment they apply, no matter the hour, from day one.",
      primaryText: "Get Early Access",
      primaryUrl: "https://www.callpilot.pro/?utm_source=integrations&utm_medium=cta&utm_campaign=greenhouse&utm_content=get-early-access",
      secondaryText: "Talk to Us",
      secondaryUrl: "https://www.callpilot.pro/?utm_source=integrations&utm_medium=cta&utm_campaign=greenhouse&utm_content=talk-to-us",
    },
  },

  ashby: {
    slug: "ashby",
    name: "Ashby",
    status: "Live Soon",
    statusBadgeClass: "badge-soon",
    panelType: "hitech-metrics",
    seo: {
      title: "AI Screening Calls for Ashby | CallPilot",
      description: "CallPilot's AI voice calls screen every Ashby applicant the moment they apply, so hiring teams never let a good one go quiet. Native sync launches soon.",
      ogTitle: "AI Screening Calls for Ashby | CallPilot",
      ogDescription: "Human-like AI screening calls with instant traffic-light scoring, built for fast-moving Ashby hiring teams. Native sync launches soon, screening calls run today.",
      twitterTitle: "AI Screening Calls for Ashby | CallPilot",
      twitterDescription: "CallPilot's AI voice calls screen every Ashby applicant the moment they apply, so hiring teams never let a good one go quiet. Native sync launches soon.",
      schemaDescription: "AI voice screening calls with instant traffic-light scoring. Native Ashby sync is in final sign-off.",
    },
    hero: {
      eyebrowText: "Ashby Integration: LIVE SOON",
      overline: "AI Screening Calls + WhatsApp/SMS Automation",
      h1: "Looking for a Faster Way to Screen, Qualify, and Submit Ashby Applicants? CallPilot Makes It Effortless.",
      lead: "Built for fast-moving hiring teams who can't afford to let a good applicant go quiet. CallPilot calls, screens, and updates the Ashby record automatically, day or night, so nobody sits in a queue waiting on a human to catch up.",
      flowNodes: ["Advert", "Applies", "AI Call", "Qualifies", "WhatsApp / SMS / Email", "ID & Documents", "Ashby Updated"],
      primaryCtaText: "Get Early Access",
      primaryCtaLink: "#book-a-demo",
      secondaryCtaText: "See Pricing",
      secondaryCtaLink: "#pricing",
    },
    hitech: {
      tag: "LIVE ENGINE METRICS",
      h2: "Already Proven at Scale, Ashby Sync Launching Soon",
      description: "Ashby sync is in final sign-off, the underlying AI screening engine is already handling calls at volume on other integrations today.",
      accentColor: "#f3c34d",
    },
    waitlist: {
      h2: "Get Early Access",
      note: "Ashby sync is in final sign-off and launching shortly. Leave your email and your team will be among the first connected.",
      cardTitle: "Join the Ashby early access list",
      cardDesc: "One email when it's live, and an invitation to get connected straight away. Nothing else, no spam.",
      buttonText: "Notify Me",
    },
    stats: [
      { value: "100% Faster", label: "Time to first contact" },
      { value: "70% Less", label: "Recruiter screening time" },
      { value: "100 Free", label: "New client screening calls" },
    ],
    howItWorks: {
      h2: "Nobody Waits for a Callback",
      lead: "Fast-growing teams can't afford a slow follow-up. Here's what happens automatically the second someone applies to your Ashby job.",
      steps: [
        {
          title: "An applicant applies to your Ashby ad",
          desc: "CallPilot dials automatically, usually inside the hour, any time of day or night.",
        },
        {
          title: "CallPilot runs the screening interview",
          desc: "It reads the job spec and asks the qualifying questions in a natural, human-sounding conversation.",
        },
        {
          title: "The call is scored the second it ends",
          desc: "Traffic-light scoring runs automatically. Nobody has to listen back or double-check the result.",
        },
        {
          title: "Qualified applicants are messaged instantly",
          desc: "A WhatsApp or SMS request for ID and qualifications, with a secure email upload link if they'd rather use that.",
        },
        {
          title: "Documents land straight in Ashby",
          desc: "Whatever they send back updates the applicant's status and attaches the files to their record automatically.",
        },
        {
          title: "One email, ready to verify",
          desc: "The recruiter gets notified once and confirms. No spreadsheet, no follow-up calls, no lost paperwork.",
        },
      ],
    },
    trafficLights: {
      lead: "No manual review, no listening back to calls. Ashby gets updated the second a call ends, and the right person is notified straight away.",
      qualified: "The applicant passed the screening call before they've had a chance to go quiet. CallPilot requests their documents over WhatsApp or SMS, with email as a backup.",
      received: "ID and qualifications land straight on the Ashby record, ready for a same-day check.",
      unsuccessful: "Ruled out automatically, so nobody on a fast-moving team wastes a callback on a mismatch.",
    },
    callout: {
      title: "Ashby Sync, Launching Soon",
      desc: "Two-way status and document sync with Ashby is in final sign-off. Screening calls run on the same proven engine already live across other integrations, and Ashby clients go live the moment sync ships.",
      badgeText: "Ashby: LIVE SOON",
    },
    pricingFeatures: ["Ashby sync: live soon"],
    faqs: [
      {
        question: "Is the Ashby integration actually live?",
        answer: "Not yet. Ashby sync is in final sign-off and launching shortly. Join the early access list and your account will be switched on automatically the moment it ships.",
      },
      {
        question: "How does the traffic-light scoring work?",
        answer: "Every screening call is scored amber, green, or red against the job brief the moment it ends. Amber is qualified and awaiting documents, green is documents received, red is unsuccessful. No recruiter has to sit and mark it manually.",
      },
      {
        question: "How much does AI applicant screening cost?",
        answer: "Plans start at $395/month for 100 screenings ($3.95 each). Growth is $1,400/month for 400 screenings, Pro is $2,950/month for 1,000 screenings, and Enterprise pricing is custom for 2,000+. New clients get their first 100 AI screening calls free.",
      },
      {
        question: "What happens after an applicant qualifies?",
        answer: "They're messaged automatically over WhatsApp or SMS for a photo ID and their qualifications. Once sent, it's attached to their Ashby record, the status flips over, and the recruiter gets one email to sign it off.",
      },
    ],
    finalCta: {
      h2: "Be Ready the Moment Ashby Sync Goes Live",
      lead: "Join the early access list now and every applicant will be called, scored, and actioned the moment they apply, no matter the hour, from day one.",
      primaryText: "Get Early Access",
      primaryUrl: "https://www.callpilot.pro/?utm_source=integrations&utm_medium=cta&utm_campaign=ashby&utm_content=get-early-access",
      secondaryText: "Talk to Us",
      secondaryUrl: "https://www.callpilot.pro/?utm_source=integrations&utm_medium=cta&utm_campaign=ashby&utm_content=talk-to-us",
    },
  },

  icims: {
    slug: "icims",
    name: "iCIMS",
    status: "Coming Soon",
    statusBadgeClass: "badge-later",
    panelType: "hitech-metrics",
    seo: {
      title: "Fast Enterprise-Scale AI Screening for iCIMS | CallPilot",
      description: "Looking for fast enterprise-scale talent acquisition? CallPilot screens applicants at volume today; native iCIMS sync ships October 2026. Join the waitlist.",
      ogTitle: "Fast Enterprise-Scale AI Screening for iCIMS | CallPilot",
      ogDescription: "Enterprise talent acquisition teams using iCIMS turn to CallPilot to screen applicants by phone the moment they apply. Native iCIMS sync is in development, join the waitlist for early access.",
      twitterTitle: "Fast Enterprise-Scale AI Screening for iCIMS | CallPilot",
      twitterDescription: "Looking for fast enterprise-scale talent acquisition? CallPilot's AI screening calls run at volume today, native two-way iCIMS sync is in development.",
      schemaDescription: "AI voice screening calls with instant traffic-light scoring. Native iCIMS sync is in development.",
    },
    hero: {
      eyebrowText: "iCIMS Integration: COMING SOON",
      overline: "AI Screening Calls + Fast Automation",
      h1: "10,000 Applicants. Qualified Without Adding 100 Recruiters. Let CallPilot Transform Your Talent Acquisition.",
      lead: "CallPilot's AI voice calls are already proven at volume, automatically qualifying and scoring talent within the hour, day or night, 24/7.",
      flowNodes: ["Advert", "Applies", "AI Call", "Qualifies", "WhatsApp / SMS / Email", "ID & Documents", "iCIMS Updated"],
      primaryCtaText: "Join the Waitlist",
      primaryCtaLink: "#book-a-demo",
      secondaryCtaText: "See Pricing",
      secondaryCtaLink: "#pricing",
    },
    hitech: {
      tag: "LIVE ENGINE METRICS",
      h2: "10,000 Applicants a Month, Already Proven at Scale",
      description: "Native iCIMS sync is on the roadmap for October 2026, the underlying AI screening engine is already handling calls at volume on other integrations today.",
      accentColor: "#4fa8f0",
    },
    waitlist: {
      h2: "Targeted for October 2026",
      note: "Native iCIMS sync is on the roadmap. Leave your email and your team will be among the first invited to test it.",
      cardTitle: "Join the iCIMS waitlist",
      cardDesc: "One email when it ships, and an invitation to try it ahead of general release. Nothing else, no spam.",
      buttonText: "Notify Me",
    },
    stats: [
      { value: "100% Faster", label: "First contact at scale" },
      { value: "70% Less", label: "Talent acquisition screening hours" },
      { value: "100 Free", label: "New client screening calls" },
    ],
    howItWorks: {
      h2: "Screening That Keeps Up With Enterprise Volume",
      lead: "Large talent acquisition teams can't call every applicant by hand. Here's what happens automatically the second someone applies to your iCIMS job.",
      steps: [
        {
          title: "An applicant applies to your iCIMS ad",
          desc: "CallPilot dials automatically, usually inside the hour, any time of day or night.",
        },
        {
          title: "CallPilot runs the screening interview",
          desc: "It reads the job spec and asks the qualifying questions in a natural, human-sounding conversation.",
        },
        {
          title: "The call is scored the second it ends",
          desc: "Traffic-light scoring runs automatically. Nobody has to listen back or double-check the result.",
        },
        {
          title: "Qualified applicants are messaged instantly",
          desc: "A WhatsApp or SMS request for ID and qualifications, with a secure email upload link if they'd rather use that.",
        },
        {
          title: "Documents land straight in iCIMS",
          desc: "Whatever they send back updates the applicant's status and attaches the files to their record automatically.",
        },
        {
          title: "One email, ready to verify",
          desc: "The recruiter gets notified once and confirms. No spreadsheet, no follow-up calls, no lost paperwork.",
        },
      ],
    },
    trafficLights: {
      lead: "No manual review, no listening back to calls. iCIMS gets updated the second a call ends, and the right person is notified straight away.",
      qualified: "The applicant passed the screening call at whatever volume the role attracts. CallPilot requests their documents over WhatsApp or SMS, with email as a backup.",
      received: "ID and qualifications land straight on the iCIMS record, ready for a quick check without adding headcount to review them.",
      unsuccessful: "Ruled out automatically, so no one on the talent acquisition team spends time on a mismatch.",
    },
    callout: {
      title: "Native iCIMS Sync, In Development",
      desc: "Two-way status and document sync with iCIMS is being built now, targeted for October 2026. New iCIMS clients onboard once it ships, so nothing has to be re-keyed by hand in the meantime.",
      badgeText: "iCIMS: COMING SOON",
    },
    pricingFeatures: ["iCIMS sync: coming soon"],
    faqs: [
      {
        question: "Is the iCIMS integration live yet?",
        answer: "Not yet. Native iCIMS sync is targeted for October 2026. Join the waitlist and you'll get an email the moment it's live, plus early access ahead of general availability.",
      },
      {
        question: "How does the traffic-light scoring work?",
        answer: "Every screening call is scored amber, green, or red against the job brief the moment it ends. Amber is qualified and awaiting documents, green is documents received, red is unsuccessful. No recruiter has to sit and mark it manually.",
      },
      {
        question: "How much does AI applicant screening cost?",
        answer: "Plans start at $395/month for 100 screenings ($3.95 each). Growth is $1,400/month for 400 screenings, Pro is $2,950/month for 1,000 screenings, and Enterprise pricing is custom for 2,000+. New clients get their first 100 AI screening calls free.",
      },
      {
        question: "Can I start using CallPilot before the iCIMS sync ships?",
        answer: "No. New iCIMS clients go live once native sync ships, so status and documents update into the iCIMS record automatically from day one instead of anyone re-keying anything by hand. Join the waitlist and you'll be invited to onboard the moment it's released in October 2026.",
      },
    ],
    finalCta: {
      h2: "Get Ready for October 2026",
      lead: "Join the iCIMS waitlist now and you'll be invited to onboard the moment native sync ships, with early access ahead of general release.",
      primaryText: "Join the Waitlist",
      primaryUrl: "https://www.callpilot.pro/?utm_source=integrations&utm_medium=cta&utm_campaign=icims&utm_content=join-the-waitlist",
      secondaryText: "Talk to Us",
      secondaryUrl: "https://www.callpilot.pro/?utm_source=integrations&utm_medium=cta&utm_campaign=icims&utm_content=talk-to-us",
    },
  },
};

export const allIntegrations = Object.values(integrationsData);
