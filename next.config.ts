import type { NextConfig } from "next";

// Static export for GitHub Pages (served at /konoba-jaz-v3/)
const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/konoba-jaz-v3" : "",
  images: { unoptimized: true },
};

export default nextConfig;
