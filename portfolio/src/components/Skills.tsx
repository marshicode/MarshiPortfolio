"use client";

import { useState } from "react";
import { Layers } from "lucide-react";

/* ── Tech Logo SVGs ── */

function Html5Logo() {
  return (
    <svg viewBox="0 0 48 48" className="w-7 h-7">
      <path fill="#E44D26" d="M6 4l3.5 38L24 46l14.5-4L42 4H6z" />
      <path fill="#F16529" d="M24 46l12-3.3 3-32.7H16.5L15.2 18H34l-.5 6H17l-.8 8.5L24 36l7.5-2.5.5-6H24V14h17.5l1 11.5L42 4" />
      <path fill="#EBEBEB" d="M24 14v6h10.5l-.5 6H24v6l-7.5-2.5L15.8 28 24 31v6l-10-3.3L12.5 6H35.5L34 20H24z" />
      <path fill="#fff" d="M24 14v6h10l-.5 6H24v6l-7.5-2.5L15.8 28 24 31v6l-10-3.3L12.5 6H35.5L34 20H24z" />
    </svg>
  );
}

function Css3Logo() {
  return (
    <svg viewBox="0 0 48 48" className="w-7 h-7">
      <path fill="#1572B6" d="M6 4l3.5 38L24 46l14.5-4L42 4H6z" />
      <path fill="#33A9DC" d="M24 46l12-3.3 3-32.7H16.5L15.2 18H34l-.5 6H17l-.8 8.5L24 36l7.5-2.5.5-6H24V14h17.5l1 11.5L42 4" />
      <path fill="#fff" d="M24 14v6h10l-.5 6H24v6l-7.5-2.5L15.8 28 24 31v6l-10-3.3L12.5 6H35.5L34 20H24z" />
    </svg>
  );
}

function JsLogo() {
  return (
    <svg viewBox="0 0 48 48" className="w-7 h-7">
      <rect width="48" height="48" rx="6" fill="#F7DF1E" />
      <path d="M12 36.5l3-2.5c.6 1 1.3 1.8 2.5 1.8 1.1 0 1.8-.5 1.8-1.2 0-.8-.6-1.1-1.9-1.6l-.6-.3c-2.1-.9-3.5-2-3.5-4.3 0-2.1 1.6-3.8 4.2-3.8 1.8 0 3.1.6 4 2.2l-2.3 1.5c-.5-.9-1-1.2-1.7-1.2-.8 0-1.3.5-1.3 1.2 0 .8.5 1.1 1.6 1.6l.6.3c2.4.9 3.8 2.1 3.8 4.5 0 2.6-2 3.9-4.7 3.9-2.6 0-4.3-1.2-5.1-2.9zm17.8 0l3-2.5c.8 1.1 1.5 1.8 2.8 1.8 1.2 0 1.8-.5 1.8-1.3 0-.8-.6-1.2-1.8-1.7l-.6-.3c-1.7-.7-2.9-1.5-2.9-3.4 0-2 1.5-3.5 3.8-3.5 1.6 0 2.8.6 3.6 2l-2.2 1.5c-.4-.8-.8-1.1-1.4-1.1-.6 0-1 .4-1 1 0 .7.5 1 1.5 1.4l.6.3c2 .8 3.1 1.6 3.1 3.4 0 2-1.6 3.5-4.1 3.5-2.3 0-3.8-1.1-4.9-2.9z" fill="#323330" />
    </svg>
  );
}

function ReactLogo() {
  return (
    <svg viewBox="0 0 48 48" className="w-7 h-7">
      <circle cx="24" cy="24" r="4" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="2.5" fill="none">
        <ellipse cx="24" cy="24" rx="20" ry="8" />
        <ellipse cx="24" cy="24" rx="20" ry="8" transform="rotate(60 24 24)" />
        <ellipse cx="24" cy="24" rx="20" ry="8" transform="rotate(120 24 24)" />
      </g>
    </svg>
  );
}

function NextjsLogo() {
  return (
    <svg viewBox="0 0 48 48" className="w-7 h-7">
      <circle cx="24" cy="24" r="22" className="fill-foreground" />
      <path d="M18.5 15v18l6-8.5V15h-6z" className="fill-background" />
      <path d="M35 15v8.5c0 3.5-2 5.5-5 5.5s-5-2-5-5.5V15h-2.5v8.5c0 5 3 8 7.5 8s7.5-3 7.5-8V15H35z" className="fill-background" />
    </svg>
  );
}

function TailwindLogo() {
  return (
    <svg viewBox="0 0 48 48" className="w-7 h-7">
      <path fill="#38BDF8" d="M14 20c0-3.5 3-6.5 7-6.5 5.5 0 7 4 10.5 4 3.5 0 5.5-3 9-3 4 0 7 2.5 7 7 0 3.5-3 6.5-7 6.5-5.5 0-7-4-10.5-4-3.5 0-5.5 3-9 3-4 0-7-2.5-7-7z" />
      <path fill="#0EA5E9" d="M7 28c0-3.5 3-6.5 7-6.5 5.5 0 7 4 10.5 4 3.5 0 5.5-3 9-3 4 0 7 2.5 7 7 0 3.5-3 6.5-7 6.5-5.5 0-7-4-10.5-4-3.5 0-5.5 3-9 3-4 0-7-2.5-7-7z" />
    </svg>
  );
}

function NodejsLogo() {
  return (
    <svg viewBox="0 0 48 48" className="w-7 h-7">
      <circle cx="24" cy="24" r="22" fill="#339933" />
      <path d="M24 12l12 7v14l-12 7-12-7V19l12-7z" fill="none" stroke="#fff" strokeWidth="1.5" />
      <path d="M24 12l12 7v14l-12 7-12-7V19l12-7z" fill="#fff" opacity="0.15" />
      <text x="24" y="29" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold" fontFamily="monospace">JS</text>
    </svg>
  );
}

function ExpressLogo() {
  return (
    <svg viewBox="0 0 48 48" className="w-7 h-7">
      <circle cx="24" cy="24" r="22" className="fill-foreground" />
      <text x="24" y="30" textAnchor="middle" className="fill-background" fontSize="16" fontWeight="bold" fontFamily="monospace">Ex</text>
    </svg>
  );
}

function SqliteLogo() {
  return (
    <svg viewBox="0 0 48 48" className="w-7 h-7">
      <circle cx="24" cy="24" r="22" fill="#003B57" />
      <ellipse cx="24" cy="16" rx="14" ry="5" fill="none" stroke="#fff" strokeWidth="1.5" />
      <path d="M10 16v10c0 2.8 6.3 5 14 5s14-2.2 14-5V16" fill="none" stroke="#fff" strokeWidth="1.5" />
      <path d="M10 26v10c0 2.8 6.3 5 14 5s14-2.2 14-5V26" fill="none" stroke="#fff" strokeWidth="1.5" />
    </svg>
  );
}

function TursoLogo() {
  return (
    <svg viewBox="0 0 48 48" className="w-7 h-7">
      <circle cx="24" cy="24" r="22" fill="#4FF8D2" />
      <text x="24" y="30" textAnchor="middle" fill="#000" fontSize="14" fontWeight="bold" fontFamily="monospace">T</text>
    </svg>
  );
}

function GitLogo() {
  return (
    <svg viewBox="0 0 48 48" className="w-7 h-7">
      <circle cx="24" cy="24" r="22" fill="#F05032" />
      <text x="24" y="30" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="bold" fontFamily="monospace">G</text>
    </svg>
  );
}

function GithubLogo() {
  return (
    <svg viewBox="0 0 48 48" className="w-7 h-7">
      <circle cx="24" cy="24" r="22" className="fill-foreground" />
      <path d="M24 10C16.3 10 10 16.3 10 24c0 6.2 4 11.4 9.5 13.3.7.1.9-.3.9-.7v-2.4c-3.9.9-4.7-1.9-4.7-1.9-.6-1.6-1.5-2-1.5-2-1.2-.8.1-.8.1-.8 1.3.1 2 1.4 2 1.4 1.2 2 3.1 1.4 3.8 1.1.1-.8.5-1.4.9-1.7-3.1-.4-6.4-1.6-6.4-7 0-1.5.5-2.8 1.4-3.8-.1-.3-.6-1.8.1-3.8 0 0 1.1-.4 3.8 1.4 1.1-.3 2.2-.5 3.4-.5s2.3.2 3.4.5c2.7-1.8 3.8-1.4 3.8-1.4.7 2 .2 3.5.1 3.8.9 1 1.4 2.3 1.4 3.8 0 5.4-3.3 6.6-6.4 7 .5.4 1 1.3 1 2.5v3.8c0 .4.2.8.9.7C34 35.4 38 30.2 38 24 38 16.3 31.7 10 24 10z" className="fill-background" />
    </svg>
  );
}

function VercelLogo() {
  return (
    <svg viewBox="0 0 48 48" className="w-7 h-7">
      <circle cx="24" cy="24" r="22" className="fill-foreground" />
      <path d="M24 12l12 24H12L24 12z" className="fill-background" />
    </svg>
  );
}

function PostmanLogo() {
  return (
    <svg viewBox="0 0 48 48" className="w-7 h-7">
      <circle cx="24" cy="24" r="22" fill="#FF6C37" />
      <text x="24" y="30" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold" fontFamily="monospace">PM</text>
    </svg>
  );
}

function VscodeLogo() {
  return (
    <svg viewBox="0 0 48 48" className="w-7 h-7">
      <circle cx="24" cy="24" r="22" fill="#007ACC" />
      <text x="24" y="30" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold" fontFamily="monospace">VS</text>
    </svg>
  );
}

function LinuxLogo() {
  return (
    <svg viewBox="0 0 48 48" className="w-7 h-7">
      <circle cx="24" cy="24" r="22" fill="#FCC624" />
      <text x="24" y="30" textAnchor="middle" fill="#000" fontSize="16" fontWeight="bold" fontFamily="monospace">T</text>
    </svg>
  );
}

function SslLogo() {
  return (
    <svg viewBox="0 0 48 48" className="w-7 h-7">
      <circle cx="24" cy="24" r="22" fill="#8B5CF6" />
      <path d="M24 12c-5 0-9 3-9 7v5c0 2-1 3-3 4v2c2-1 3-2 3-4v-5c0-5 4-8 9-8s9 3 9 8v5c0 2 1 3 3 4v-2c-2-1-3-2-3-4v-5c0-4-4-7-9-7z" fill="#fff" />
      <rect x="20" y="28" width="8" height="8" rx="1" fill="#fff" />
      <circle cx="24" cy="31" r="1.5" fill="#8B5CF6" />
    </svg>
  );
}

function SessionLogo() {
  return (
    <svg viewBox="0 0 48 48" className="w-7 h-7">
      <circle cx="24" cy="24" r="22" fill="#10B981" />
      <path d="M16 24h16M28 20l4 4-4 4" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function UploadLogo() {
  return (
    <svg viewBox="0 0 48 48" className="w-7 h-7">
      <circle cx="24" cy="24" r="22" fill="#F59E0B" />
      <path d="M24 14v14M18 20l6-6 6 6" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 30h20" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function ResponsiveLogo() {
  return (
    <svg viewBox="0 0 48 48" className="w-7 h-7">
      <circle cx="24" cy="24" r="22" fill="#EC4899" />
      <rect x="14" y="14" width="20" height="14" rx="2" fill="none" stroke="#fff" strokeWidth="2" />
      <path d="M20 32h8v2h-8z" fill="#fff" />
      <path d="M24 32v3" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/* ── Skills data ── */

type Category = "Frontend" | "Backend" | "Database" | "Tools";

interface Skill {
  name: string;
  category: Category;
  label: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const skills: Skill[] = [
  // Frontend
  {
    name: "HTML5",
    category: "Frontend",
    label: "MARKUP",
    description: "Semantic structure, accessibility, and SEO-friendly markup.",
    icon: <Html5Logo />,
    color: "bg-card-bg border-orange-200 dark:border-white/10",
  },
  {
    name: "CSS3",
    category: "Frontend",
    label: "STYLING",
    description: "Responsive layouts, animations, and modern design systems.",
    icon: <Css3Logo />,
    color: "bg-card-bg border-blue-200 dark:border-white/10",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    label: "LANGUAGE",
    description: "Core client logic, event handling, and dynamic browser behavior.",
    icon: <JsLogo />,
    color: "bg-card-bg border-yellow-200 dark:border-white/10",
  },
  {
    name: "React",
    category: "Frontend",
    label: "LIBRARY",
    description: "Component-driven interfaces, reusable UI patterns, and interactive client views.",
    icon: <ReactLogo />,
    color: "bg-card-bg border-cyan-200 dark:border-white/10",
  },
  {
    name: "Next.js",
    category: "Frontend",
    label: "FRAMEWORK",
    description: "App Router interfaces, polished interactions, and production-ready pages.",
    icon: <NextjsLogo />,
    color: "bg-card-bg border-gray-200 dark:border-white/10",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    label: "STYLING",
    description: "Utility-first styling, rapid prototyping, and consistent design tokens.",
    icon: <TailwindLogo />,
    color: "bg-card-bg border-sky-200 dark:border-white/10",
  },
  // Backend
  {
    name: "Node.js",
    category: "Backend",
    label: "RUNTIME",
    description: "Server-side JavaScript, non-blocking I/O, and scalable network apps.",
    icon: <NodejsLogo />,
    color: "bg-card-bg border-green-200 dark:border-white/10",
  },
  {
    name: "Express.js",
    category: "Backend",
    label: "FRAMEWORK",
    description: "HTTP routing, middleware pipelines, and RESTful API construction.",
    icon: <ExpressLogo />,
    color: "bg-card-bg border-gray-200 dark:border-white/10",
  },
  {
    name: "REST APIs",
    category: "Backend",
    label: "ARCHITECTURE",
    description: "Stateless communication, resource modeling, and HTTP method conventions.",
    icon: <SessionLogo />,
    color: "bg-card-bg border-emerald-200 dark:border-white/10",
  },
  // Database
  {
    name: "SQLite",
    category: "Database",
    label: "DATABASE",
    description: "Lightweight embedded storage, schema design, and reliable query work.",
    icon: <SqliteLogo />,
    color: "bg-card-bg border-blue-200 dark:border-white/10",
  },
  {
    name: "Turso/LibSQL",
    category: "Database",
    label: "DATABASE",
    description: "Edge-first SQLite distribution, embedded replicas, and global low-latency reads.",
    icon: <TursoLogo />,
    color: "bg-card-bg border-teal-200 dark:border-white/10",
  },
  {
    name: "SQL",
    category: "Database",
    label: "LANGUAGE",
    description: "Relational querying, joins, aggregations, and data modeling.",
    icon: <SqliteLogo />,
    color: "bg-card-bg border-indigo-200 dark:border-white/10",
  },
  // Tools
  {
    name: "Git",
    category: "Tools",
    label: "VERSION CONTROL",
    description: "Branching strategies, commit history, and collaborative workflows.",
    icon: <GitLogo />,
    color: "bg-card-bg border-red-200 dark:border-white/10",
  },
  {
    name: "GitHub",
    category: "Tools",
    label: "PLATFORM",
    description: "Code hosting, pull requests, issue tracking, and CI/CD pipelines.",
    icon: <GithubLogo />,
    color: "bg-card-bg border-gray-200 dark:border-white/10",
  },
  {
    name: "Vercel",
    category: "Tools",
    label: "DEPLOYMENT",
    description: "Zero-config deployments, preview URLs, and edge-first infrastructure.",
    icon: <VercelLogo />,
    color: "bg-card-bg border-gray-200 dark:border-white/10",
  },
  {
    name: "Postman",
    category: "Tools",
    label: "API TESTING",
    description: "API exploration, request collections, and automated testing workflows.",
    icon: <PostmanLogo />,
    color: "bg-card-bg border-orange-200 dark:border-white/10",
  },
  {
    name: "VS Code",
    category: "Tools",
    label: "EDITOR",
    description: "Integrated debugging, extension ecosystem, and efficient code editing.",
    icon: <VscodeLogo />,
    color: "bg-card-bg border-blue-200 dark:border-white/10",
  },
];

const allCategories: Category[] = ["Frontend", "Backend", "Database", "Tools"];

export default function Skills() {
  const [active, setActive] = useState<Category | "All">("All");

  const filtered =
    active === "All" ? skills : skills.filter((s) => s.category === active);

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8 reveal visible">
          <p className="text-xs font-mono text-accent tracking-widest uppercase mb-2">
            Tech Stack
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
            Tools I use to design, build, and ship
          </h2>

          {/* Filter pills */}
          <div className="flex flex-wrap gap-2">
            {(["All", ...allCategories] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-1.5 text-xs font-medium rounded-full border transition-all duration-200 ${
                  active === cat
                    ? "bg-accent/10 border-accent/30 text-accent"
                    : "bg-card-bg border-card-border text-text-secondary hover:border-accent/20 hover:text-foreground"
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Card grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((skill) => (
            <div
              key={skill.name}
              className={`card-glow p-5 rounded-2xl border ${skill.color} transition-all duration-300`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-2 rounded-xl bg-card-bg border border-card-border">
                  {skill.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-mono text-slate-500 dark:text-slate-400 tracking-wider uppercase mb-0.5">
                    {skill.label}
                  </p>
                  <h3 className="text-base font-bold text-gray-900 mb-1.5" style={{ color: "var(--foreground)" }}>
                    {skill.name}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {skill.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
