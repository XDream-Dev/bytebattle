const nextConfig = {
  output: "export", // required for static HTML export
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // required for export with <Image />
  },
  // basePath and assetPrefix ensure proper routing on GitHub Pages
  basePath: "/bytebattle",
  assetPrefix: "/bytebattle/",
};

export default nextConfig;
