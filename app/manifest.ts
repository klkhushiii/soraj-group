import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Soraj Group',
    short_name: 'Soraj',
    description: 'Premium Real Estate Developer',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#1e3a8a',
    icons: [
      {
        src: '/favicon-logo.jpg',
        sizes: '192x192',
        type: 'image/jpeg',
      },
      {
        src: '/favicon-logo.jpg',
        sizes: '512x512',
        type: 'image/jpeg',
      },
    ],
  };
} 