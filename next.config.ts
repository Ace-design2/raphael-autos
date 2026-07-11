import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "localhost:3000",
    "127.0.0.1:3000",
    "172.16.0.44:3000",
    "172.16.0.44",
  ],
  turbopack: {
    root: path.resolve(process.cwd()),
  },
};

export default nextConfig;


