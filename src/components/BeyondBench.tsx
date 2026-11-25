const items = [
  {
    title: 'Code.X',
    meta: '2024 – now',
    body: 'A coding program for 50 Ukrainian high school students: a year-long online course plus two summer camps in Lviv, where I wrote the curriculum and taught. I raised the $60,000 that funds it.',
  },
  {
    title: 'AI task force at reNEW',
    meta: '2026 – now',
    body: "I started a task force with someone from every lab to write the institute's AI guidelines. I teach a monthly session on AI tools, and give an institute-wide keynote in April 2027.",
  },
  {
    title: 'Teaching at Columbia',
    meta: '2021 – 2023',
    body: 'Five semesters of a weekly seminar on cryptography, AI and ethics for 40 first-years, plus resume and interview coaching.',
  },
];

const BeyondBench = () => {
  return (
    <section id="beyond" className="bg-surface px-6 py-20 md:py-24">
      <div className="mx-auto max-w-4xl">
        <p className="eyebrow">Outside the lab</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-medium text-text-primary">
          Teaching, mostly
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-border-subtle bg-card p-5 shadow-sm"
            >
              <h3 className="text-base font-semibold text-text-primary">{item.title}</h3>
              <p className="mt-0.5 font-mono text-xs text-text-muted">{item.meta}</p>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeyondBench;
