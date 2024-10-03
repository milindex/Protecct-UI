/** @type {import('next').NextConfig} */
const nextConfig = {
  // swcMinify: true,
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
  sassOptions: {
    additionalData: `
    @import "app/_styles/_mantine.scss";
    @import "app/_styles/_variables.scss";
    `,
  },
  env: {
    // disbale cache for deployment
    NEXT_PUBLIC_DISABLE_CACHE: "true",
    NEXT_DISABLE_CACHE: "true",
  },
  distDir: "out",
};

export default nextConfig;
