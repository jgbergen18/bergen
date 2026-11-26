import { useEffect } from 'react';
import routeMeta from './routeMeta.json';

const SITE = 'Jamie Bergen';
const ORIGIN = 'https://www.jamiebergen.com';

export type KnownRoute = keyof typeof routeMeta;

/**
 * Sets the tab title, meta description and canonical link for a known route.
 * The same routeMeta.json is used at build time (scripts/route-meta.mjs) to
 * write a static HTML file per route, so link previews match what this sets.
 */
export function usePageMeta(route: KnownRoute) {
  useEffect(() => {
    const meta = routeMeta[route];
    document.title = meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', meta.description);
    document
      .querySelector('link[rel="canonical"]')
      ?.setAttribute('href', ORIGIN + route);
  }, [route]);
}

/** Title only, for pages that are not in routeMeta.json (the 404 page). */
export function usePageTitle(page: string) {
  useEffect(() => {
    document.title = `${page} | ${SITE}`;
  }, [page]);
}
