import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["http://192.168.1.4:3000", "http://localhost:3000"],
};

export default nextConfig;
