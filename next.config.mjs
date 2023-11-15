await import('./src/env.mjs');

/** @type {import("next").NextConfig} */
const config = {
  eslint: {
    dirs: ['src', 'prisma'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default config;
