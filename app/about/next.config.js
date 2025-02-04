/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'i.imgur.com', // Allow images from Imgur
        },
        {
          protocol: 'https',
          hostname: 'imgur.com',
        },
      ],
    },
  };
  
  module.exports = nextConfig;
  