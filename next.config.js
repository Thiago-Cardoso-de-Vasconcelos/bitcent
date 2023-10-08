/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains: [
      'soure.unsplash.com',
      'images.unsplash.com',
      'lh3.googleusercontent.com',
    ]
  }
}

module.exports = nextConfig
