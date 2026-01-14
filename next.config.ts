import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['react-map-gl', 'mapbox-gl'],
  async redirects() {
    return [
      {
        source: '/shuttle',
        destination: '/shuttles',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
