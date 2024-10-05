const withLess = require('next-with-less');


/** @type {import('next').NextConfig} */
module.exports = withLess({
  concurrency: 1,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
  eslint: {
    ignoreDuringBuilds: true

  },
  lessLoaderOptions: {
    strictMath: true
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ng.jumia.is',
        pathname: '/**'
      }
    ]
  }
});