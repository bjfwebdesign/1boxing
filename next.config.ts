import type { NextConfig } from "next";

// GitHub Pages serves this repo at /1boxing/, so scope paths to that
// basePath only inside GitHub Actions builds — local dev and other hosts
// (which serve from the root) are unaffected.
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const basePath = isGithubActions ? "/1boxing" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: {
    // Static export can't use the default Image Optimization server.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
