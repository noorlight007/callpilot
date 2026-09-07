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
        source: "/help",
        destination: "/setup-help-guide",
        permanent: false,
      },
      {
        source: "/helps",
        destination: "/setup-help-guide",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
