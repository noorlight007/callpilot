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
  "marcus-vance": {
    slug: "marcus-vance",
    name: "Marcus Vance",
    role: "Head of AI Recruitment Solutions at CallPilot",
    bio: "Marcus Vance leads product and recruitment workflow automation at CallPilot. With over a decade of experience across high-volume staffing, ATS integrations, and conversational voice AI systems, Marcus focuses on removing operational dead-air between job applications and qualified hiring decisions.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
    linkedin: "https://www.linkedin.com/company/callpilot-ai-call/",
  },
  "sarah-jenkins": {
    slug: "sarah-jenkins",
    name: "Sarah Jenkins",
    role: "Recruitment Operations & Compliance Lead",
    bio: "Sarah Jenkins specializes in high-volume talent acquisition workflows, Right to Work compliance, and automated document collection architecture for recruitment agencies and enterprise employers.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
    linkedin: "https://www.linkedin.com/company/callpilot-ai-call/",
  }
};

export const defaultAuthor = authors["marcus-vance"];
