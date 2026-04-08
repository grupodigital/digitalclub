import type { NextConfig } from "next";
import { resolve } from "path";

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  turbopack: {
    root: resolve(__dirname),
  },
  allowedDevOrigins: ["10.10.11.54"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      // Redirect www to non-www (or vice-versa, adjust as needed)
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.digitalclub.pt" }],
        destination: "https://digitalclub.pt/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
