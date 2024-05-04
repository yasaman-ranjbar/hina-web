/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode:false , // for call useEffect towise
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.classbon.com",
      },
      {
        protocol: "https",
        hostname: "classbon-blog.s3.ir-thr-at1.arvanstorage.ir",
      },
      {
        protocol: "https",
        hostname: "classbon-blog.s3.ir-thr-at1.arvanstorage.com",
      },
    ],
  },
};

module.exports = nextConfig;
