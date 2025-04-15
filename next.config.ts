import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/dg4jhba5c/image/upload/**', // Allow specific path
      },
    ],
  },
};

export default nextConfig;
