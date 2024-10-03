/** @type {import('next').NextConfig} */
const nextConfig = {
  // swcMinify: true,
  output: "export",
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
  sassOptions: {
    additionalData: `
    @import "app/_styles/_mantine.scss";
    @import "app/_styles/_variables.scss";
    `,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
