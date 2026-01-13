import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/shuttle',
        destination: '/shuttles',
        permanent: true, // This tells Google the move is permanent (301)
      },
    ];
  },
};

export default nextConfig;
