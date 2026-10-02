import React, { Suspense } from "react";
import DocumentUploader from "@/components/JobAdder/document-uploader";

const DocumentUploaderPage = () => {
    return (
        <div className="min-h-screen bg-white">
            <main>
                <Suspense fallback={
                    <div className="mx-auto flex min-h-screen max-w-[460px] flex-col items-center justify-center gap-6 px-4">
                        <div className="relative w-16 h-16">
                            <div className="absolute inset-0 border-4 border-gray-100 rounded-full"></div>
                            <div className="absolute inset-0 border-4 border-black rounded-full border-t-transparent animate-spin"></div>
                        </div>
                    </div>
                }>
                    <DocumentUploader />
                </Suspense>
            </main>
        </div>
    );
};

export default DocumentUploaderPage;
