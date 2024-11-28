/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { 
    unoptimized: true,
    domains: ['images.unsplash.com']
  },
  // Enable static export for Netlify deployment
  trailingSlash: true,
};

module.exports = nextConfig;