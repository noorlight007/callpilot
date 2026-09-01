import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import Script from "next/script";

export const metadata: Metadata = {
    metadataBase: new URL("https://callpilot.pro"),
    title: "CallPilot | AI Applicant Screening Calls for Recruiters",
    description: "AI voice calls that screen applicants in under a minute, sync straight into your ATS, and run 24/7. No call, no charge.",
    alternates: {
        canonical: "https://callpilot.pro/",
    },
    openGraph: {
        title: "CallPilot | AI Applicant Screening Calls for Recruiters",
        description: "AI voice calls that screen applicants in under a minute, sync straight into your ATS, and run 24/7. No call, no charge.",
        url: "https://callpilot.pro/",
        siteName: "CallPilot",
        type: "website",
        images: [
            {
                url: "https://callpilot.pro/og-image.png",
                width: 1200,
                height: 630,
                alt: "CallPilot",
            },
        ],
    },
};

const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CallPilot",
    "url": "https://callpilot.pro",
    "logo": "https://callpilot.pro/adjusted_callPilot_logo.png",
    "description": "AI voice calls that screen applicants in under a minute, sync straight into your ATS, and run 24/7.",
    "parentOrganization": {
        "@type": "Organization",
        "name": "Swiftwave FZ-LLC",
        "url": "https://www.swiftwave.ai/callpilot"
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
                />
            </head>
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
