/** @type {import('next').NextConfig} */
require('dotenv').config({ path: '../../.env' });

module.exports = {
  distDir: '../../.next',
  reactStrictMode: true,
  swcMinify: false,
  env: {
    NEXT_PUBLIC_URI_ORIGIN: process.env.NEXT_PUBLIC_URI_ORIGIN,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    });
    return config;
  },
  webpackDevMiddleware: (config) => {
    return config;
  },
};
