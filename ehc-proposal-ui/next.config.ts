import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/ehc-proposal-ui",
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
