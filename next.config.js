/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
  optimizeFonts: false,
  env: {
    API_URL: process.env.API_URL,
    FOTO_URL: process.env.FOTO_URL,
  },
}

module.exports = nextConfig;