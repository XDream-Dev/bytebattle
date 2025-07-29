/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/bytebattle", // <- this is your repo name
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
