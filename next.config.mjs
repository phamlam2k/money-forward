/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['src']
  },

  reactStrictMode: false,
  experimental: {
    optimizeCss: true // enabling this will enable SSR for Tailwind
  },

  swcMinify: true
};

export default nextConfig;
