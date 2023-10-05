import './src/env.mjs';

/** @type {import("next").NextConfig} */
const config = {
  experimental: {
    serverActions: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/recipes',
        permanent: true,
      },
    ];
  },
  /** ... */
};

export default config;
