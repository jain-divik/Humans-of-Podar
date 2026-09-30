/** @type {import('next').NextConfig} */
export default {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Replace 'we-hear-you' with your actual repository name
  basePath: '/we-hear-you',
  assetPrefix: '/we-hear-you',
};
