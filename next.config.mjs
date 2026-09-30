/** @type {import('next').NextConfig} */
export default {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Replace 'we-hear-you' with your actual repository name
  basePath: '/Humans-of-Podar',
  assetPrefix: '/Humans-of-Podar',
};
