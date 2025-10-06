import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  basePath: isProd ? '/Sports-Venue-Finder' : '',
  assetPrefix: isProd ? '/Sports-Venue-Finder/' : '',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
    unoptimized: true,
  },
  output: "export",
};

export default nextConfig;
