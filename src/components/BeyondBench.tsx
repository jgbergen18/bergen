const items = [
  {
    title: 'Code.X',
    meta: 'Program coordinator and instructor, 2024 – present',
    body: 'I run a coding program for 50 Ukrainian high school students: a year-long course online, plus two summer camps in Lviv where I wrote the curriculum and taught computer science and design. I also raised the $60,000 that pays for it.',
  },
  {
    title: 'AI task force at reNEW',
    meta: 'Founder and lead, 2026 – present',
    body: "I started a task force with someone from every lab, and we're writing the institute's AI guidelines. I teach a session on AI tools for research once a month, and I'm giving an institute-wide keynote in April 2027.",
  },
  {
    title: 'Teaching at Columbia',
    meta: 'Peer leader and teaching assistant, 2021 – 2023',
    body: 'For five semesters I taught a weekly seminar on cryptography, AI and ethics to 40 first-years, and helped them with resumes and interviews when they started applying for research jobs.',
  },
];

const BeyondBench = () => {
  return (
    <section id="beyond" className="py-16 px-6 bg-surface">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-text-primary mb-8">
          Outside the lab
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-xl bg-background border border-border-subtle p-6"
            >
              <h3 className="text-lg font-medium text-text-primary">{item.title}</h3>
              <p className="mt-1 text-xs text-text-muted">{item.meta}</p>
              <p className="mt-3 text-sm text-text-secondary leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeyondBench;
