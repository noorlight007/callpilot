import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import Script from "next/script";

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
