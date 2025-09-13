/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Keep output: 'export' for static pages
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
