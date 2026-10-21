import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    // Imagens demonstrativas servidas pela CDN do Unsplash (claramente provisórias).
    // Substitua pelas fotografias oficiais da MANARI editando src/content/site.ts.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
