import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [{ source: "/duo", destination: "/duo-friends.jpg" }];
  },
};

export default nextConfig;
