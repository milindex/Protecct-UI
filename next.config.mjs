/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
  sassOptions: {
    additionalData: `
    @import "app/_styles/_mantine.scss";
    @import "app/_styles/_variables.scss";
    `,
  },
};

export default nextConfig;
