import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Mail,
  ShieldCheck,
  Trash2,
  ArrowRight,
  CheckCircle2,
  FileAudio,
  FileText,
  Users,
  UserX,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Data Deletion",
  description:
    "How to close your CallPilot account and request deletion of all your data.",
  alternates: {
    canonical: "https://callpilot.pro/data-deletion",
  },
  openGraph: {
    title: "Data Deletion | CallPilot",
    description:
      "How to close your CallPilot account and request deletion of all your data.",
    url: "https://callpilot.pro/data-deletion",
    siteName: "CallPilot",
    type: "website",
    images: [
      {
        url: "https://callpilot.pro/images/og-callpilot.png",
        width: 1200,
        height: 630,
        alt: "CallPilot Data Deletion",
      },
    ],
  },
};

const steps = [
  {
    icon: Mail,
    title: "Send Us an Email",
    text: "Email contact@swiftwave.ai from the address registered to your CallPilot account and ask us to close your account and delete your data.",
  },
  {
    icon: ShieldCheck,
    title: "We Verify Your Request",
    text: "We confirm the request came from the account owner, so nobody else can delete your data on your behalf.",
  },
  {
    icon: Trash2,
    title: "Account Closed, Data Deleted",
    text: "We deactivate your account and permanently delete all data associated with it. Once deleted, it cannot be recovered.",
  },
];

const deletedItems = [
  { icon: FileAudio, label: "Call Recordings" },
  { icon: FileText, label: "Call Transcripts & Summaries" },
  { icon: Users, label: "Candidate Information" },
  { icon: UserX, label: "Your Account & Profile" },
];

export default function DataDeletionPage() {
  return (
    <>
      <Header />

      <main className="bg-background overflow-hidden">
        {/* Hero */}
        <section className="relative border-b border-border">
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
          >
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-[42rem] rounded-full bg-black/5 blur-3xl" />
          </div>

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/40 mb-6 opacity-0 animate-fade-in"
            >
              <ShieldCheck size={16} className="text-headline" />
              <span className="text-sm text-muted-text">
                Your Data, Your Choice
              </span>
            </div>

            <h1
              className="text-4xl sm:text-5xl font-bold text-headline tracking-tight opacity-0 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              Account &amp; Data Deletion
            </h1>

            <p
              className="mt-5 max-w-2xl mx-auto text-lg text-body leading-relaxed opacity-0 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Want to close your CallPilot account and have all of your data
              permanently deleted? One email is all it takes.
            </p>

            <div
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <a href="mailto:contact@swiftwave.ai?subject=Account%20%26%20Data%20Deletion%20Request">
                <Button size="xl" className="group">
                  <Mail size={20} />
                  Request Data Deletion
                  <ArrowRight
                    size={18}
                    className="ml-1 transition-transform group-hover:translate-x-1"
                  />
                </Button>
              </a>
              <span className="text-sm text-muted-text">
                or email{" "}
                <a
                  href="mailto:contact@swiftwave.ai"
                  className="font-medium text-headline underline underline-offset-4 hover:opacity-70 transition-opacity"
                >
                  contact@swiftwave.ai
                </a>
              </span>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <h2
            className="text-2xl sm:text-3xl font-semibold text-headline tracking-tight text-center opacity-0 animate-fade-in"
            style={{ animationDelay: "0.35s" }}
          >
            How It Works
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="group relative rounded-2xl border border-border bg-card/40 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-headline/20 opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.4 + i * 0.1}s` }}
              >
                <span className="absolute top-5 right-6 text-4xl font-bold text-muted-text/15 select-none">
                  {i + 1}
                </span>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black text-white transition-transform duration-300 group-hover:scale-110">
                  <step.icon size={22} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-headline">
                  {step.title}
                </h3>
                <p className="mt-2 text-body leading-relaxed text-sm sm:text-base">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* What gets deleted */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-14 sm:pb-20">
          <div
            className="max-w-5xl mx-auto rounded-3xl border border-border bg-card/40 p-8 sm:p-12 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.7s" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-headline tracking-tight">
                  What Gets Deleted
                </h2>
                <p className="mt-4 text-body leading-relaxed">
                  Once your request is verified, we permanently remove
                  everything associated with your account. For more details on
                  how we handle your data, see our{" "}
                  <a
                    href="/privacy-policy"
                    className="underline underline-offset-4 text-headline hover:opacity-70 transition-opacity"
                  >
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>

              <ul className="space-y-4">
                {deletedItems.map((item) => (
                  <li
                    key={item.label}
                    className="group flex items-center gap-4 rounded-xl border border-border bg-background p-4 transition-all duration-300 hover:translate-x-1 hover:border-headline/20"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-card/60">
                      <item.icon size={18} className="text-headline" />
                    </span>
                    <span className="font-medium text-headline">
                      {item.label}
                    </span>
                    <CheckCircle2
                      size={18}
                      className="ml-auto text-muted-text opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="border-t border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 text-center">
            <h2 className="text-xl sm:text-2xl font-semibold text-headline tracking-tight">
              Ready to Delete Your Account?
            </h2>
            <p className="mt-3 text-body max-w-xl mx-auto">
              Send your request from your registered email address and we will
              take care of the rest.
            </p>
            <div className="mt-6">
              <a href="mailto:contact@swiftwave.ai?subject=Account%20%26%20Data%20Deletion%20Request">
                <Button size="xl" className="group">
                  <Mail size={20} />
                  contact@swiftwave.ai
                  <ArrowRight
                    size={18}
                    className="ml-1 transition-transform group-hover:translate-x-1"
                  />
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
