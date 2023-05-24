/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmbd.org",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
