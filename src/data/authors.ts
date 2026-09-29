export interface Author {
  slug: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  linkedin: string;
  twitter?: string;
  email?: string;
}

export const authors: Record<string, Author> = {
  "steven-peddie": {
    slug: "steven-peddie",
    name: "Steven Peddie",
    role: "Founder at CallPilot",
    bio: "Steven Peddie is the Founder of CallPilot and Swiftwave.ai, developing conversational AI voice calling systems, screening automation, and business VoIP lines for high-volume recruitment.",
    avatar: "/images/callpilot-logo.png",
    linkedin: "https://www.linkedin.com/company/callpilot-ai-call/",
  },
  "callpilot-team": {
    slug: "callpilot-team",
    name: "CallPilot Team",
    role: "Editorial Team",
    bio: "The CallPilot team produces practical guides, benchmarks, and product updates on AI applicant screening calls and business VoIP lines.",
    avatar: "/images/callpilot-logo.png",
    linkedin: "https://www.linkedin.com/company/callpilot-ai-call/",
  },
};

export const defaultAuthor = authors["steven-peddie"];
