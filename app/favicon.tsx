import { MetadataRoute } from 'next';

export default function favicon(): MetadataRoute.Icons {
  return {
    icon: '/favicon-logo.jpg',
    shortcut: '/favicon-logo.jpg',
    apple: '/favicon-logo.jpg',
  };
} 