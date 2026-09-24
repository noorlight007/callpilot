/** @type {import('next').NextConfig} */
const nextConfig = {
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
      {
        source: "/ai-applicant-screening",
        destination: "/features",
        permanent: false,
      },
      {
        source: "/business-voip",
        destination: "/news/business-voip-whatsapp-sms-ats-integration",
        permanent: false,
      },
      {
        source: "/book-a-demo",
        destination: "/get-started",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
