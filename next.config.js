/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
    experimental: {
    forceSwcTransforms: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "clevercouncil.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
