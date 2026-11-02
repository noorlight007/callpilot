import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

export default function DataDeletionPage() {
  return (
    <>
      <Header />

      <main className="bg-background">
        <div className="border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
            <p className="text-sm text-muted-text mb-2">Legal</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-headline tracking-tight">
              Account &amp; Data Deletion
            </h1>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="max-w-3xl space-y-6">
            <p className="text-body leading-relaxed">
              If you would like to close your CallPilot account and have all of
              your data permanently deleted, simply send us an email at{" "}
              <a
                href="mailto:contact@swiftwave.ai"
                className="underline underline-offset-4 hover:text-headline transition-colors"
              >
                contact@swiftwave.ai
              </a>
              .
            </p>

            <p className="text-body leading-relaxed">
              Please send the request from the email address registered to your
              CallPilot account so we can verify it is you. Once verified, we
              will deactivate your account and permanently delete all data
              associated with it, including call recordings, transcripts, and
              candidate information.
            </p>

            <div className="rounded-2xl border border-border bg-card/40 p-5 sm:p-6">
              <p className="text-body leading-relaxed">
                <span className="font-medium text-headline">
                  Deletion requests:
                </span>{" "}
                <a
                  href="mailto:contact@swiftwave.ai"
                  className="underline underline-offset-4 hover:text-headline transition-colors"
                >
                  contact@swiftwave.ai
                </a>
              </p>
            </div>

            <p className="text-body leading-relaxed">
              For more details on how we handle your data, please see our{" "}
              <a
                href="/privacy-policy"
                className="underline underline-offset-4 hover:text-headline transition-colors"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
