/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const removeImports = require('next-remove-imports')();

const nextConfig = {
  // ...options,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'glog-image-bucket.s3.ap-northeast-2.amazonaws.com',
      },
    ],
  },
};

module.exports = removeImports({
  ...nextConfig,
});
