import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://9teascafe.com';
  const routes = ['', '/about', '/menu', '/locations', '/franchise', '/gallery', '/contact'];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : route === '/franchise' ? 0.9 : 0.8,
  }));
}
