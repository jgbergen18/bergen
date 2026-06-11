import { useEffect, useState } from 'react';

/**
 * Book cover that fetches a real cover image from the Open Library API by
 * title + author, falling back to the seasonal gradient placeholder when no
 * cover is found. Results are cached in memory and localStorage so each book
 * is only looked up once.
 */

const memCache = new Map<string, string | null>();
const keyFor = (title: string, author: string) => `${title}|||${author}`;

const readStore = (key: string): string | null | undefined => {
  try {
    const raw = localStorage.getItem(`ol-cover:${key}`);
    if (raw === null) return undefined; // never looked up
    return raw === '' ? null : raw; // '' means looked up, no cover
  } catch {
    return undefined;
  }
};

const writeStore = (key: string, value: string | null) => {
  try {
    localStorage.setItem(`ol-cover:${key}`, value ?? '');
  } catch {
    /* ignore quota / privacy errors */
  }
};

interface BookCoverProps {
  title: string;
  author: string;
  fallbackClass: string;
}

const BookCover = ({ title, author, fallbackClass }: BookCoverProps) => {
  const key = keyFor(title, author);

  const [cover, setCover] = useState<string | null | undefined>(() => {
    if (memCache.has(key)) return memCache.get(key)!;
    const stored = readStore(key);
    if (stored !== undefined) {
      memCache.set(key, stored);
      return stored;
    }
    return undefined; // not looked up yet
  });
  const [imgFailed, setImgFailed] = useState(false);

  useEffect(() => {
    if (cover !== undefined) return; // already resolved (url or null)
    let active = true;
    const controller = new AbortController();
    const params = new URLSearchParams({
      title: title.split(':')[0].trim(),
      author,
      limit: '1',
      fields: 'cover_i',
    });

    fetch(`https://openlibrary.org/search.json?${params.toString()}`, { signal: controller.signal })
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error('bad response'))))
      .then((data) => {
        if (!active) return;
        const id = data?.docs?.[0]?.cover_i;
        const url = id ? `https://covers.openlibrary.org/b/id/${id}-M.jpg` : null;
        memCache.set(key, url);
        writeStore(key, url);
        setCover(url);
      })
      .catch(() => {
        if (!active) return;
        memCache.set(key, null);
        setCover(null);
      });

    return () => {
      active = false;
      controller.abort();
    };
  }, [cover, key, title, author]);

  if (cover && !imgFailed) {
    return (
      <div className="w-16 h-24 rounded shadow-sm overflow-hidden bg-surface">
        <img
          src={cover}
          alt={`Cover of ${title}`}
          loading="lazy"
          className="w-full h-full object-cover"
          onError={() => setImgFailed(true)}
        />
      </div>
    );
  }

  // Fallback: seasonal gradient placeholder with title/author text
  return (
    <div className={`w-16 h-24 rounded shadow-sm ${fallbackClass} flex flex-col justify-between p-2 text-white`}>
      <div className="text-[6px] font-bold leading-tight overflow-hidden drop-shadow-sm">
        {title.length > 30 ? `${title.substring(0, 27)}...` : title}
      </div>
      <div className="text-[5px] opacity-90 leading-tight drop-shadow-sm">
        {author.length > 20 ? `${author.substring(0, 17)}...` : author}
      </div>
    </div>
  );
};

export default BookCover;
