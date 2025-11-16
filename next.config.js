/** @type {import('next').NextConfig} */
const nextConfig = {
  // ESLint configuration is now handled in eslint.config.mjs
  typescript: {
    // Disable TypeScript type checking during builds
    ignoreBuildErrors: true,
  },
  // Configure Turbopack root directory
  turbopack: {
    root: '/Users/anwarhussain/src/MY-NEXT',
  },
};

module.exports = nextConfig;