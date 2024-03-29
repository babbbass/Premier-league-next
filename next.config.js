/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "media.api-sports.io",
      "media-1.api-sports.io",
      "media-2.api-sports.io",
      "media-3.api-sports.io",
      "media-4.api-sports.io",
      "media-5.api-sports.io",
      "crests.football-data.org",
    ],
  },
}

module.exports = nextConfig
