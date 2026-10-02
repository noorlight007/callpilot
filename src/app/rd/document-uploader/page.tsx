import type { Metadata } from "next";
import { Suspense } from "react";

import RDUKDocumentUploader from "@/components/RD/document-uploader";

export const metadata: Metadata = {
    title: "Document Upload | Recruitment Direct",
    alternates: {
        canonical: "/rd/document-uploader",
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
