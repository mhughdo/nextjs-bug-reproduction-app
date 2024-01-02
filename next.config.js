/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hughdo-dev.imgix.net',
        port: '',
        pathname: '/**',
      },
    ],
    loader: 'custom',
    path: 'https://hughdo-dev.imgix.net/',
    loaderFile: './loader/index.ts',
  },
}

module.exports = nextConfig
