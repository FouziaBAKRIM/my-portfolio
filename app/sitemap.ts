import type { MetadataRoute } from 'next';
import { siteConfig } from '@/data';

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: siteConfig.url }];
}
