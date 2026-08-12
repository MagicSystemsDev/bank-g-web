/** @type {import('next').NextConfig} */
const basePath = process.env.PAGES_BASE_PATH || "";

module.exports = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  trailingSlash: true,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  images: { unoptimized: true },
};
