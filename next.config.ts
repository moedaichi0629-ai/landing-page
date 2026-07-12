import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/landing-page",
  assetPrefix: "/landing-page/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
