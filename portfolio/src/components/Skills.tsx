import { Lines } from "./ui";

interface Skill {
  name: string;
  description: string;
}

interface Group {
  category: string;
  title: string;
  skills: Skill[];
}

const groups: Group[] = [
  {
    category: "Frontend",
    title: "Markup & styling",
    skills: [
      { name: "HTML5", description: "Semantic structure, accessibility, and SEO-friendly markup." },
      { name: "CSS3", description: "Responsive layouts, animations, and modern design systems." },
      { name: "Tailwind CSS", description: "Utility-first styling, rapid prototyping, and consistent design tokens." },
    ],
  },
  {
    category: "Frontend",
    title: "Interfaces",
    skills: [
      { name: "JavaScript", description: "Core client logic, event handling, and dynamic browser behavior." },
      { name: "React", description: "Component-driven interfaces, reusable UI patterns, and interactive client views." },
      { name: "Next.js", description: "App Router interfaces, polished interactions, and production-ready pages." },
    ],
  },
  {
    category: "Backend",
    title: "Servers & APIs",
    skills: [
      { name: "Node.js", description: "Server-side JavaScript, non-blocking I/O, and scalable network apps." },
      { name: "Express.js", description: "HTTP routing, middleware pipelines, and RESTful API construction." },
      { name: "REST APIs", description: "Stateless communication, resource modeling, and HTTP method conventions." },
    ],
  },
  {
    category: "Database",
    title: "Data",
    skills: [
      { name: "SQLite", description: "Lightweight embedded storage, schema design, and reliable query work." },
      { name: "Turso/LibSQL", description: "Edge-first SQLite distribution, embedded replicas, and global low-latency reads." },
      { name: "SQL", description: "Relational querying, joins, aggregations, and data modeling." },
    ],
  },
  {
    category: "Tools",
    title: "Version control",
    skills: [
      { name: "Git", description: "Branching strategies, commit history, and collaborative workflows." },
      { name: "GitHub", description: "Code hosting, pull requests, issue tracking, and CI/CD pipelines." },
    ],
  },
  {
    category: "Tools",
    title: "Ship & test",
    skills: [
      { name: "Vercel", description: "Zero-config deployments, preview URLs, and edge-first infrastructure." },
      { name: "Postman", description: "API exploration, request collections, and automated testing workflows." },
      { name: "VS Code", description: "Integrated debugging, extension ecosystem, and efficient code editing." },
    ],
  },
];

const names = groups.flatMap((g) => g.skills.map((s) => s.name));
const rowA = names.slice(0, 8);
const rowB = names.slice(8);

function MarqueeRow({ items, reverse }: { items: string[]; reverse?: boolean }) {
  return (
    <div className="marquee">
      <div className="marquee-track" data-reverse={reverse || undefined}>
        {[0, 1].map((copy) => (
          <ul key={copy} className="marquee-copy flex" aria-hidden={copy === 1 || undefined}>
            {items.map((name) => (
              <li key={name} className="marquee-item">
                {name}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="py-[clamp(90px,10vw,140px)]">
      <div className="wrap grid gap-8 lg:grid-cols-12 lg:items-end">
        <Lines
          id="skills-title"
          className="h-section lg:col-span-7"
          lines={["The stack.", "Front to back."]}
        />
        <p data-reveal className="body-copy max-w-[44ch] lg:col-span-4 lg:col-start-9">
          Sixteen tools I use to take an app from the first screen to a deployed
          database, grouped by where they sit in the build.
        </p>
      </div>

      <div className="mt-[clamp(48px,6vw,80px)] space-y-1" aria-label="Technologies">
        <MarqueeRow items={rowA} />
        <MarqueeRow items={rowB} reverse />
      </div>

      <div className="wrap mt-[clamp(56px,7vw,96px)]">
        <ul className="panel grid overflow-hidden md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => (
            <li
              key={g.title}
              data-reveal
              className={`flex flex-col gap-10 p-7 sm:p-8 transition-colors duration-300 hover:bg-white/[0.025] border-line
                ${i > 0 ? "border-t" : ""}
                ${i === 1 ? "md:border-t-0" : ""}
                ${i % 2 === 1 ? "md:border-l" : ""}
                ${i < 3 ? "lg:border-t-0" : "lg:border-t"}
                ${i % 3 === 0 ? "lg:border-l-0" : "lg:border-l"}`}
            >
              <div className="flex items-baseline justify-between gap-4">
                <p className="label">{g.category}</p>
                <p className="text-sm text-[color:var(--fg-52)]">{g.skills.length} tools</p>
              </div>
              <div>
                <h3 className="text-[1.375rem] font-semibold leading-snug tracking-[-0.025em]">{g.title}</h3>
                <dl className="mt-4 space-y-3">
                  {g.skills.map((s) => (
                    <div key={s.name}>
                      <dt className="text-[0.98rem] font-semibold text-[color:var(--fg-86)]">{s.name}</dt>
                      <dd className="body-copy text-[0.92rem] leading-relaxed">{s.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
