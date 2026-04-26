/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    domains: [],
  },
  experimental: {
    mdxRs: true,
  },
};

export default nextConfig;
