/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.callpilot.pro" }],
        destination: "https://callpilot.pro/:path*",
        permanent: true,
      },
      {
        source: "/trial",
        destination: "/free-trial",
        permanent: true,
      },
      {
        source: "/help",
        destination: "/setup-help-guide",
        permanent: false,
      },
      {
        source: "/helps",
        destination: "/setup-help-guide",
        permanent: false,
      },
      // Footer links on the new homepage point at URLs that don't exist
      {
        source: "/terms",
        destination: "/terms-conditions",
        permanent: true,
      },
      {
        source: "/compliance",
        destination: "/policy-compliance",
        permanent: true,
      },
      // Renamed news URL (dropped "business")
      {
        source: "/news/callpilot-launches-ai-call-agent-business-voip-lines-automation",
        destination: "/news/callpilot-launches-ai-call-agent-voip-lines-automation",
        permanent: true,
      },
      {
        source: "/news/business-voip-whatsapp-sms-ats-integration",
        destination: "/news/voip-whatsapp-sms-ats-integration",
        permanent: true,
      },
      // Old /signup links: screening plans -> free trial, everything else -> get-started.
      // The screening rule must stay above the general one. Query strings are kept automatically.
      {
        source: "/signup",
        has: [{ type: "query", key: "plan", value: "(starter|growth|pro)" }],
        destination: "/free-trial",
        permanent: true,
      },
      {
        source: "/signup",
        destination: "/get-started",
        permanent: true,
      },
      // "Contact Sales" buttons (x3 on homepage)
      {
        source: "/contact-sales",
        destination: "/get-started?intent=sales",
        permanent: false,
      },
      // Product links: send to the matching section of the rewritten /features page (section 6)
      {
        source: "/business-voip",
        destination: "/features#voip-phone-lines",
        permanent: false,
      },
      // Author redirects (section 10)
      {
        source: "/authors/:path*",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
