import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "100 Free Screening Credits | CallPilot Free Trial",
  description: "Screen your live vacancy with 100 free AI applicant screening calls. Connects to Ashby, Recruit CRM, JobAdder, and more. No credit card required.",
  alternates: {
    canonical: "https://callpilot.pro/free-trial/",
  },
  openGraph: {
    title: "100 Free Screening Credits | CallPilot Free Trial",
    description: "Screen your live vacancy with 100 free AI applicant screening calls. Connects to Ashby, Recruit CRM, JobAdder, and more. No credit card required.",
    url: "https://callpilot.pro/free-trial/",
    siteName: "CallPilot",
    type: "website",
    images: [
      {
        url: "https://callpilot.pro/og-image.png",
        width: 1200,
        height: 630,
        alt: "CallPilot 100 Free Screening Credits",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "100 Free Screening Credits | CallPilot Free Trial",
    description: "Screen your live vacancy with 100 free AI applicant screening calls. Connects to Ashby, Recruit CRM, JobAdder, and more. No credit card required.",
    images: ["https://callpilot.pro/og-image.png"],
  },
};

export default function FreeTrialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
