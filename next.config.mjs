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
      // Homepage plan buttons: /signup?plan=... (query string is kept automatically)
      // VoIP plans -> sales form; screening plans + footer trial link -> free-trial form
      {
        source: "/signup",
        has: [{ type: "query", key: "plan", value: "voip(.*)" }],
        destination: "/get-started",
        permanent: false,
      },
      {
        source: "/signup",
        destination: "/free-trial",
        permanent: false,
      },
      // "Contact Sales" buttons (x3 on homepage)
      {
        source: "/contact-sales",
        destination: "/get-started?intent=sales",
        permanent: false,
      },
      // Product links: send to the matching section of the rewritten /features page (section 6)
      {
        source: "/ai-applicant-screening",
        destination: "/features#ai-applicant-screening",
        permanent: false,
      },
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
