/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  domains:['image.tmdb.org','rb.gy','api.themoviedb.org'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.themoviedb.org',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
