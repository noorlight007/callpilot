import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import WhatsAppWidget from "@/components/WhatsAppWidget";

export const metadata: Metadata = {
    title: "CallPilot.pro",
    description: "AI-powered voice technology for modern businesses.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Providers>
                    {children}
                    <WhatsAppWidget />
                </Providers>
            </body>
        </html>
    );
}
