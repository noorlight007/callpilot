import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import Script from "next/script";
import UtmCapture from "@/components/UtmCapture";

export const metadata: Metadata = {
    metadataBase: new URL("https://callpilot.pro"),
    title: {
        default: "CallPilot | VoIP Phone Lines + AI Applicant Screening",
        template: "%s | CallPilot",
    },
    description: "VoIP phone lines with WhatsApp, SMS and email automation, plus AI applicant screening calls that qualify every applicant 24/7 and sync results to your ATS.",
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "CallPilot | VoIP Phone Lines + AI Applicant Screening",
        description: "VoIP phone lines with WhatsApp, SMS and email automation, plus AI applicant screening calls that qualify every applicant 24/7 and sync results to your ATS.",
        url: "https://callpilot.pro/",
        siteName: "CallPilot",
        type: "website",
        images: [
            {
                url: "/images/og-callpilot.png",
                width: 1200,
                height: 630,
                alt: "CallPilot: VoIP Phone Lines + AI Applicant Screening",
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                {/* Google Tag Manager (noscript) */}
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-P3KNMXZJ"
                        height="0"
                        width="0"
                        style={{ display: "none", visibility: "hidden" }}
                    />
                </noscript>
                {/* End Google Tag Manager (noscript) */}
                <Providers>
                    {children}
                    <WhatsAppWidget />
                    <UtmCapture />
                </Providers>
                {/* Google Tag Manager */}
                <Script
                    id="gtm-script"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P3KNMXZJ');`,
                    }}
                />
                {/* End Google Tag Manager */}
            </body>
        </html>
    );
}
