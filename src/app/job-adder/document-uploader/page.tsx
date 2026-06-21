"use client";

import React, { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DocumentUploader from "@/components/JobAdder/document-uploader";

const DocumentUploaderPage = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* <Header /> */}
            <main className="pt-2 pb-2 md:pt-2 md:pb-2">
                <Suspense fallback={
                    <div className="container mx-auto px-4 py-24 max-w-4xl flex flex-col items-center justify-center gap-6">
                        <div className="relative w-16 h-16">
                            <div className="absolute inset-0 border-4 border-gray-100 rounded-full"></div>
                            <div className="absolute inset-0 border-4 border-black rounded-full border-t-transparent animate-spin"></div>
                        </div>
                        {/* <div className="space-y-2 text-center">
                            <h3 className="text-xl font-bold text-black italic">Loading Uploader</h3>
                            <p className="text-gray-500 font-medium animate-pulse">Initializing your secure workspace...</p>
                        </div> */}
                    </div>
                }>
                    <DocumentUploader />
                </Suspense>
            </main>
            {/* <Footer /> */}
        </div>
    );
};

export default DocumentUploaderPage;
