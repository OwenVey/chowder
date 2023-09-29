import { type MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Chowder',
    short_name: 'Chowder',
    display: 'standalone',
  };
}
