import type { Metadata } from "next";
import { Suspense } from "react";

import RDUKDocumentUploader from "@/components/RD/document-uploader";

export const metadata: Metadata = {
    title: { absolute: "Upload Your Documents | Recruitment Direct" },
    description:
        "Securely upload your ID and certificates to Recruitment Direct. Your information is kept private and used only for your application.",
    alternates: {
        canonical: "/rd/document-uploader",
    },
    openGraph: {
        title: "Upload Your Documents",
        description:
            "Securely upload your ID and certificates.",
        siteName: "Recruitment Direct",
        url: "/rd/document-uploader",
        type: "website",
        images: [
            {
                url: "/images/rd-logo.png",
                width: 494,
                height: 494,
                alt: "Recruitment Direct",
            },
        ],
    },
    twitter: {
        card: "summary",
        title: "Upload Your Documents",
        description:
            "Securely upload your ID and certificates.",
        images: ["/images/rd-logo.png"],
    },
    robots: {
        index: false,
        follow: false,
    },
};

const RDUKDocumentUploaderPage = () => {
    return (
        <div className="min-h-screen bg-white">
            <Suspense
                fallback={
                    <div className="flex min-h-screen items-center justify-center bg-white">
                        <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#eef1f6] border-t-[#0b0f17]" />
                    </div>
                }
            >
                <RDUKDocumentUploader />
            </Suspense>
        </div>
    );
};

export default RDUKDocumentUploaderPage;
