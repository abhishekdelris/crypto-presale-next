// /** @type {import('next').NextConfig} */
// const isProd = process.env.NODE_ENV === "production";
// const nextConfig = {

//   // Comment this line when not building the project  output: "export",
//     typescript: {
//       ignoreBuildErrors: true,
//     },
//     reactStrictMode: true,
//     trailingSlash: true,
//     swcMinify: true,
//     basePath: isProd ? "" : undefined,
//     assetPrefix : isProd ? "" : undefined,
//     images: {
//       domains: ['d3iuzwoiyg9qa8.cloudfront.net'],
//       unoptimized: true,
//       loader: "imgix",
//       path: "/",
//     },
// };

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "development";

const nextConfig = {
  // Comment this line when not building the project
  trailingSlash: false, // ❌ disables automatic trailing slash
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,

  basePath: isProd ? "" : undefined,
  assetPrefix: isProd ? "" : undefined,
  images: {
    domains: ['d3iuzwoiyg9qa8.cloudfront.net'],
    unoptimized: true,
    loader: "imgix",
    path: "/",
  },
 
};

module.exports = nextConfig;
