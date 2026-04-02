"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DocumentUploader from "@/components/JobAdder/document-uploader";

const DocumentUploaderPage = () => {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="pt-32 pb-24 md:pt-40 md:pb-32">
                <DocumentUploader />
            </main>
            <Footer />
        </div>
    );
};

export default DocumentUploaderPage;
