import type { NextConfig } from "next";
import withTM from 'next-transpile-modules';

const nextConfig: NextConfig = {
  

  reactStrictMode: true,
  images: {
    formats: ['image/webp', 'image/avif'],
    domains: ['yourdomain.com'], // If loading from external sources
  },

  /* config options here */
  
};

export default nextConfig;