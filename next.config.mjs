/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'i.natgeofe.com' },
      { protocol: 'https', hostname: 'www.redrocksonline.com' },
      { protocol: 'https', hostname: 'seatgeekimages.com' },
      { protocol: 'https', hostname: 'images.seatgeek.com' },
      { protocol: 'https', hostname: 'gosnotransportation58.rezdy.com' },
    ],
  },
};
export default nextConfig;
