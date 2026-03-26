import type { APIRoute } from 'astro';
import { getAbsoluteUrl } from '../data/site';

export const GET: APIRoute = () => {
  const body = `User-agent: *
Allow: /

Sitemap: ${getAbsoluteUrl('/sitemap.xml')}
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
