const path = require("path");

require("dotenv").config({
  path: path.resolve(__dirname + "/config/" + process.env.SERVER_ENV + ".env")
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig
