import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon, Lines } from "./ui";

type Project = {
  title: string;
  kind: string;
  live: string;
  /** Public repository. Leave unset for private code: the source card is hidden. */
  source?: string;
  /** `position` is a Tailwind object-position class; defaults to object-top. */
  image: { src: string; alt: string; position?: string };
  description: string;
  features: string[];
  stack: string[];
};

const projects: Project[] = [
  {
    title: "Sit-in Monitoring System",
    kind: "Full-stack web application · UC CICS",
    live: "https://ccs-sitin-aleonar.vercel.app",
    source: "https://github.com/marshicode/sitin-monitoring-system",
    image: { src: "/projects/sitin.jpg", alt: "Home page of the CCS Sit-in Monitoring System" },
    description:
      "A full-stack web application designed to automate and streamline the tracking of students using computer laboratories at UC CICS. Features real-time session management, online reservations, leaderboards, notifications, and a comprehensive admin dashboard.",
    features: [
      "Student registration & authentication",
      "Lab reservation system",
      "Real-time session tracking",
      "Admin dashboard & analytics",
      "Leaderboard & gamification",
      "Notification & announcement system",
      "Feedback & reporting",
      "Lab software inventory",
    ],
    stack: ["Express.js", "Node.js", "Turso/LibSQL", "bcrypt", "Multer", "Vercel"],
  },
  {
    title: "Atomail",
    kind: "Browser app · Random email generator",
    live: "https://atomail.vercel.app",
    image: {
      src: "/projects/atomail.jpg",
      alt: "Atomail generator in dark theme showing a freshly generated gmail.com address",
      // Anchor left so the 4:3 mobile crop keeps the whole address in view.
      position: "object-left-top",
    },
    description:
      "Random email address generator. Pick any of 71 email domains (or type your own), generate a unique address in one click, set your own password and copy the credentials.",
    features: [
      "Searchable picker: 71 domains plus custom",
      "Crypto-random, readable usernames, no duplicates",
      "Your own password with show/hide and copy credentials",
      "Runs entirely in the browser, passwords never stored",
    ],
    stack: ["Vite", "React 18", "TypeScript", "CSS", "Vitest"],
  },
];

const host = (url: string) => new URL(url).host;

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="py-[clamp(80px,9vw,120px)]">
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Lines
            id="projects-title"
            className="h-section"
            lines={["From idea to live.", "Built for real users."]}
          />
          <a
            href="https://github.com/marshicode"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 pb-2 text-[0.95rem] font-semibold"
          >
            All repositories on GitHub
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
        </div>

        {projects.map((project, i) => (
          <div key={project.title} className={i === 0 ? "mt-[clamp(48px,6vw,80px)]" : "mt-[clamp(64px,8vw,120px)]"}>
            <article data-reveal className="panel overflow-hidden p-2 sm:p-3">
              <div className="flex items-center gap-3 px-3 pb-3 pt-1 sm:px-4" aria-hidden="true">
                <span className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                </span>
                <span className="mx-auto truncate rounded-full border border-line px-4 py-1 text-xs text-[color:var(--fg-66)]">
                  {host(project.live)}
                </span>
                <span className="w-[42px]" />
              </div>

              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-[4/3] overflow-hidden rounded-[calc(var(--radius-lg)-6px)] sm:aspect-[16/9]"
                aria-label={`${project.title} — open the live site`}
              >
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  fill
                  sizes="(max-width: 1400px) 96vw, 1340px"
                  className={`object-cover ${project.image.position ?? "object-top"} transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]`}
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                <span className="badge absolute right-3 top-3 px-3.5 py-2 sm:right-5 sm:top-5">
                  <span className="dot" aria-hidden="true" />
                  Live
                </span>
                <span className="glass absolute bottom-3 left-3 rounded-[18px] px-4 py-3 sm:inset-x-auto sm:rounded-[22px] sm:bottom-6 sm:left-6 sm:max-w-[520px] sm:px-7 sm:py-7">
                  <span className="label hidden sm:block">{project.kind}</span>
                  <span className="block text-[1.25rem] font-semibold leading-tight tracking-[-0.03em] sm:mt-3 sm:text-[clamp(1.8rem,3vw,2.7rem)] sm:leading-none sm:tracking-[-0.04em]">{project.title}</span>
                  <span className="mt-4 hidden flex-wrap gap-2 sm:flex">
                    {project.stack.slice(0, 4).map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </span>
                </span>
              </a>

              <div className="grid gap-10 px-4 pb-6 pt-8 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:pb-8">
                <div className="lg:col-span-5">
                  <p className="body-copy">{project.description}</p>
                  <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tech stack">
                    {project.stack.map((t) => (
                      <li key={t} className="tag">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <ul className="grid content-start gap-x-8 sm:grid-cols-2 lg:col-span-6 lg:col-start-7" aria-label="Features">
                  {project.features.map((f) => (
                    <li key={f} className="border-b border-line py-3 text-[0.98rem] text-[color:var(--fg-86)]">
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            <ul className="mt-4 grid gap-4 md:grid-cols-2" aria-label={`${project.title} links`}>
              <li data-reveal>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="panel group flex h-full min-h-[220px] flex-col justify-between p-7 transition-colors duration-300 hover:bg-white/[0.04]"
                >
                  <span className="flex items-start justify-between gap-4">
                    <span className="label">Live demo</span>
                    <span className="icon-btn transition-transform group-hover:rotate-45">
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </span>
                  <span>
                    <span className="block text-[1.375rem] font-semibold tracking-[-0.025em]">Try the live app</span>
                    <span className="body-copy mt-1 block text-[0.95rem]">{host(project.live)}</span>
                  </span>
                </a>
              </li>
              {project.source && (
                <li data-reveal>
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="panel group flex h-full min-h-[220px] flex-col justify-between p-7 transition-colors duration-300 hover:bg-white/[0.04]"
                  >
                    <span className="flex items-start justify-between gap-4">
                      <span className="label">Source code</span>
                      <span className="icon-btn transition-transform group-hover:rotate-12">
                        <GithubIcon className="h-4 w-4" />
                      </span>
                    </span>
                    <span>
                      <span className="block text-[1.375rem] font-semibold tracking-[-0.025em]">Read the code</span>
                      <span className="body-copy mt-1 block text-[0.95rem]">{new URL(project.source).pathname.slice(1)}</span>
                    </span>
                  </a>
                </li>
              )}
              {i === projects.length - 1 && (
                <li data-reveal>
                  <div className="flex h-full min-h-[220px] flex-col justify-between rounded-[var(--radius-lg)] border border-dashed border-white/15 p-7">
                    <span className="label">Next build</span>
                    <span>
                      <span className="block text-[1.375rem] font-semibold tracking-[-0.025em]">More projects coming soon</span>
                      <span className="body-copy mt-1 block text-[0.95rem]">I&apos;m always building.</span>
                    </span>
                  </div>
                </li>
              )}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
