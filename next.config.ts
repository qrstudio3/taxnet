import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/taxation",
        destination: "/accounting-and-tax",
        permanent: true,
      },
      // Redirect all Accounting & Tax sub-pages to the single Accounting & Tax page
      {
        source: "/accounting-and-tax/:slug+",
        destination: "/accounting-and-tax",
        permanent: true,
      },
      // Redirect all Mortgage Broking sub-pages to the single Mortgage Broking page
      {
        source: "/mortgage-broking/:slug+",
        destination: "/mortgage-broking",
        permanent: true,
      },
      // Redirect small-business-bookkeeping and all its sub-pages to Bookkeeping
      {
        source: "/small-business-bookkeeping",
        destination: "/bookkeeping",
        permanent: true,
      },
      {
        source: "/small-business-bookkeeping/:slug+",
        destination: "/bookkeeping",
        permanent: true,
      },
      // Redirect Software We Use and all its sub-pages to Bookkeeping
      {
        source: "/software-we-use",
        destination: "/bookkeeping",
        permanent: true,
      },
      {
        source: "/software-we-use/:slug+",
        destination: "/bookkeeping",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
