import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  allowedDevOrigins: ["192.168.100.17"],

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pswmlqgkihbzlhpdlrcg.supabase.co",
      },
    ],
  },
};

export default nextConfig;