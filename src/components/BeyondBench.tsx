const items = [
  {
    title: 'Code.X',
    meta: 'Program coordinator and instructor, 2024 – present',
    body: 'A coding program for 50 Ukrainian high school students: a year-long online course and two summer camps in Lviv. I designed the curriculum, taught computer science and design, and raised over $60,000 to fund it.',
  },
  {
    title: 'AI task force, reNEW',
    meta: 'Founder and lead, 2026 – present',
    body: "I founded and lead a task force with a representative from each lab, drafting the institute's AI guidelines. I teach a monthly session on AI tools for research and will give an institute-wide keynote in April 2027.",
  },
  {
    title: 'Columbia University',
    meta: 'Peer leader and teaching assistant, 2021 – 2023',
    body: 'Five semesters teaching weekly seminars on cryptography, AI and ethics to 40 first-year students, with resume and interview coaching for research applications.',
  },
];

const BeyondBench = () => {
  return (
    <section id="beyond" className="bg-surface px-6 py-20 md:py-24">
      <div className="mx-auto max-w-4xl">
        <p className="eyebrow">Teaching</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-medium text-text-primary">
          Teaching and outreach
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-border-subtle bg-card p-5 shadow-sm"
            >
              <h3 className="text-base font-semibold text-text-primary">{item.title}</h3>
              <p className="mt-1 text-xs text-text-muted">{item.meta}</p>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeyondBench;
