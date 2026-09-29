export default function CallPilotSchema() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://callpilot.pro/#org",
        name: "CallPilot",
        url: "https://callpilot.pro",
        logo: "https://callpilot.pro/adjusted_callPilot_logo.png",
        image: "https://callpilot.pro/images/og-callpilot.png",
        description:
          "VoIP phone lines with WhatsApp, SMS and email automation, plus AI applicant screening calls that qualify every applicant 24/7.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Compass Building, Al Shohada Road, Al Hamra Industrial Zone-FZ",
          addressLocality: "Ras Al Khaimah",
          addressCountry: "AE",
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          telephone: "+971585921525",
          availableLanguage: "English",
        },
        sameAs: [
          "https://www.linkedin.com/company/callpilot-ai-call/",
          "https://www.instagram.com/callpilot.pro/",
          "https://www.facebook.com/profile.php?id=61588398835586",
        ],
        parentOrganization: { "@type": "Organization", name: "Swiftwave FZ-LLC" },
      },
      {
        "@type": "WebSite",
        "@id": "https://callpilot.pro/#website",
        url: "https://callpilot.pro",
        name: "CallPilot",
        publisher: { "@id": "https://callpilot.pro/#org" },
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://callpilot.pro/#app",
        name: "CallPilot",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: "https://callpilot.pro",
        publisher: { "@id": "https://callpilot.pro/#org" },
        offers: [
          { "@type": "Offer", name: "CallPilot VoIP", price: "5.99", priceCurrency: "USD" },
          { "@type": "Offer", name: "CallPilot VoIP + 100 minutes", price: "9.99", priceCurrency: "USD" },
          { "@type": "Offer", name: "CallPilot VoIP + Automation", price: "14.99", priceCurrency: "USD" },
          { "@type": "Offer", name: "AI Screening Starter", price: "395", priceCurrency: "USD" },
          { "@type": "Offer", name: "AI Screening Growth", price: "1400", priceCurrency: "USD" },
          { "@type": "Offer", name: "AI Screening Pro", price: "2950", priceCurrency: "USD" },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
