/** @type {import('next').NextConfig} */
require('dotenv').config({ path: '../../.env' });

module.exports = {
  distDir: '../../.next',
  reactStrictMode: true,
  swcMinify: false,
  env: {
    NEXT_PUBLIC_URI_ORIGIN: process.env.NEXT_PUBLIC_URI_ORIGIN,
  },
};
