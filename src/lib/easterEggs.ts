// Console greeting + a small window.jamie API for the curious who open DevTools.

const BOOKS = [
  'The Lilac People by Milo Todd',
  'James by Percival Everett',
  'How High We Go in the Dark by Sequoia Nagamatsu',
  'Martyr! by Kaveh Akbar',
  'Demon Copperhead by Barbara Kingsolver',
  'The Pull of the Stars by Emma Donoghue',
  'Ducks by Kate Beaton',
  'Caste by Isabel Wilkerson',
  'Station Eleven by Emily St. John Mandel',
  'Everything Is Tuberculosis by John Green',
];

export function initEasterEggs() {
  if (typeof window === 'undefined') return;
  const w = window as unknown as Record<string, unknown>;
  if (w.__jamie) return;
  w.__jamie = true;

  const banner = [
    '   ╭───────────────────────────╮',
    '   │      🧠  jamie bergen       │',
    '   │   neuroscience + ai · hi    │',
    '   ╰───────────────────────────╯',
  ].join('\n');

  const muted = 'font-size:12px;color:#64748b;line-height:1.5;';
  const log = (msg: string, style = muted) => console.log('%c' + msg, style);

  log(banner, 'color:#f97316;font-family:monospace;font-size:12px;line-height:1.25;');
  log('Hi, you found the console.', 'font-size:15px;font-weight:700;color:#7c3aed;');
  log(
    "I'm Jamie Bergen, working on neuroscience and AI. If you poke around in here, we'd probably get along.\nSay hi: jgbergen18@gmail.com",
  );
  log('Try  jamie.help()', 'font-size:12px;color:#0ea5e9;font-weight:600;');

  const api = {
    help() {
      log('Commands:', 'font-size:12px;color:#7c3aed;font-weight:700;');
      log('  jamie.spike()      fire the neuron on the home page');
      log('  jamie.recommend()  a book from my reading log');
      log('  jamie.cv()         open my CV');
      return '🧠';
    },
    spike() {
      window.dispatchEvent(new CustomEvent('jamie:spike'));
      document.querySelector('#neuron')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return '⚡ spike!';
    },
    recommend() {
      const book = BOOKS[Math.floor(Math.random() * BOOKS.length)];
      log('📚 ' + book, 'font-size:13px;color:#f97316;font-weight:600;');
      return book;
    },
    cv() {
      window.location.assign('/cv');
      return '📄';
    },
  };

  w.jamie = api;
  w.bergen = api;
}
