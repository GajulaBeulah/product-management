import { MetadataRoute } from 'next';
import { siteConfig } from '@/site-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/contact',
    '/services/flat-management',
    '/services/apartment-management',
    '/services/villa-farmhouse',
    '/services/plot-land-management',
    '/services/commercial-property',
  ];

  return routes.map((route) => ({
    url: `${siteConfig.brand.url}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
