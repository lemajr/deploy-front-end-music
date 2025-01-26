import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // Skip linting during builds
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "usercontent.jamendo.com",
        pathname: "/**", // Allows all paths on this domain
      },
    ],
  },
};

export default nextConfig;
