import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "withjoy.com",
        pathname: "**", // allow all images under /media
      },
    ],
  },
};

export default nextConfig;
