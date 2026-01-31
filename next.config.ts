import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Ignore TypeScript errors during the build
    ignoreBuildErrors: true,
  },
  // Your other config options can remain here
};

export default nextConfig;