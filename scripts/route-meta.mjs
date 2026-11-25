// Runs after `vite build`. The site is a single-page app, so every route would
// otherwise be served the home page's <title> and link-preview tags. This writes
// dist/<route>/index.html for each route in src/lib/routeMeta.json with that
// route's title, description and canonical URL, so shared links preview correctly.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const ORIGIN = 'https://jamiebergen.com';
const routes = JSON.parse(readFileSync(join(root, 'src/lib/routeMeta.json'), 'utf8'));
const template = readFileSync(join(root, 'dist/index.html'), 'utf8');

const escapeAttr = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

// Each pattern must match exactly once; a miss means index.html changed shape
// and this script needs updating, so fail the build rather than ship stale tags.
function replaceOnce(html, pattern, replacement, what) {
  const matches = html.match(new RegExp(pattern.source, pattern.flags + 'g')) ?? [];
  if (matches.length !== 1) {
    throw new Error(`route-meta: expected exactly one ${what} in dist/index.html, found ${matches.length}`);
  }
  return html.replace(pattern, replacement);
}

function render(route, { title, description }) {
  const t = escapeAttr(title);
  const d = escapeAttr(description);
  const url = ORIGIN + route;
  let html = template;
  html = replaceOnce(html, /<title>[^<]*<\/title>/, `<title>${t}</title>`, '<title>');
  html = replaceOnce(html, /(<meta name="description" content=")[^"]*(")/, `$1${d}$2`, 'meta description');
  html = replaceOnce(html, /(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`, 'canonical link');
  html = replaceOnce(html, /(<meta property="og:title" content=")[^"]*(")/, `$1${t}$2`, 'og:title');
  html = replaceOnce(html, /(<meta property="og:description" content=")[^"]*(")/, `$1${d}$2`, 'og:description');
  html = replaceOnce(html, /(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`, 'og:url');
  html = replaceOnce(html, /(<meta name="twitter:title" content=")[^"]*(")/, `$1${t}$2`, 'twitter:title');
  html = replaceOnce(html, /(<meta name="twitter:description" content=")[^"]*(")/, `$1${d}$2`, 'twitter:description');
  return html;
}

let written = 0;
for (const [route, meta] of Object.entries(routes)) {
  if (route === '/') continue; // dist/index.html already carries the home page's tags
  const out = join(root, 'dist', route, 'index.html');
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, render(route, meta));
  written += 1;
}
console.log(`route-meta: wrote ${written} route pages`);
