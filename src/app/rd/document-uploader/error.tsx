"use client";

export default function RDDocumentUploaderError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <main className="mx-auto flex min-h-screen w-full max-w-[480px] flex-col items-center justify-center gap-4 bg-white px-5 text-center text-[#0b0f17]">
            <h1 className="text-2xl font-extrabold">Something went wrong</h1>
            <p className="text-base">
                Please try again. If it keeps happening, send us a screenshot of this page.
            </p>
            <pre className="w-full whitespace-pre-wrap break-words rounded-lg bg-[#f4f6f9] p-3 text-left text-xs text-[#5b6474]">
                {error.message}
                {error.digest ? `\n${error.digest}` : ""}
                {`\n${typeof navigator !== "undefined" ? navigator.userAgent : ""}`}
            </pre>
            <button
                type="button"
                onClick={reset}
                className="h-[54px] w-full rounded-[10px] border-2 border-black bg-white px-4 text-base font-bold"
            >
                Try again
            </button>
        </main>
    );
}
