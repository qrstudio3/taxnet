import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/taxation",
        destination: "/accounting-and-tax",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
