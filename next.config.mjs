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
    ];
  },
};

export default nextConfig;
