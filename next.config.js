const withLess = require('next-with-less');
const path = require('path');

/** @type {import('next').NextConfig} */
module.exports = withLess({
  
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
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
        hostname: 'w3stuffs.alwaysdata.net',
        pathname: '/**'
      }
    ]
  }
});
