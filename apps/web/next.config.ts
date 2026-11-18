import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['@nejmti/shared'],
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // App Router : toutes les routes (/login, /preview/*, …) sont gérées côté serveur —
  // un refresh ne provoque pas de 404 (pas de SPA pure).
  poweredByHeader: false,
};

export default nextConfig;
