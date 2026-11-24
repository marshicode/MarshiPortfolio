import {
  Folder,
  ExternalLink,
  Server,
  Database,
  Shield,
  Users,
  BarChart3,
  Bell,
  MessageSquare,
  Package,
  Smartphone,
  Monitor,
} from "lucide-react";
import TiltCard from "./TiltCard";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-10 reveal visible">
          <Folder className="w-5 h-5 text-accent" />
          <h2 className="text-sm font-mono text-accent tracking-widest uppercase">
            Projects
          </h2>
        </div>

        <div className="space-y-6">
          {/* Featured Project */}
          <TiltCard>
          <div className="card-glow rounded-2xl border border-card-border bg-card-bg overflow-hidden reveal visible reveal-delay-1">
            <div className="p-8">
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-accent/10 text-accent">
                  <Monitor className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">
                    Sit-in Monitoring System
                  </h3>
                  <p className="text-xs text-text-muted font-mono">
                    Full-Stack Web Application
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-text-secondary leading-relaxed mb-6">
                A full-stack web application designed to automate and streamline the
                tracking of students using computer laboratories at UC CICS. Features
                real-time session management, online reservations, leaderboards,
                notifications, and a comprehensive admin dashboard.
              </p>

              {/* Features grid */}
              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {[
                  { icon: <Shield className="w-3.5 h-3.5" />, text: "Student registration & authentication" },
                  { icon: <Smartphone className="w-3.5 h-3.5" />, text: "Lab reservation system" },
                  { icon: <Server className="w-3.5 h-3.5" />, text: "Real-time session tracking" },
                  { icon: <BarChart3 className="w-3.5 h-3.5" />, text: "Admin dashboard & analytics" },
                  { icon: <Users className="w-3.5 h-3.5" />, text: "Leaderboard & gamification" },
                  { icon: <Bell className="w-3.5 h-3.5" />, text: "Notification & announcement system" },
                  { icon: <MessageSquare className="w-3.5 h-3.5" />, text: "Feedback & reporting" },
                  { icon: <Package className="w-3.5 h-3.5" />, text: "Lab software inventory" },
                ].map((feature) => (
                  <div
                    key={feature.text}
                    className="flex items-center gap-2.5 text-sm text-text-secondary group"
                  >
                    <span className="text-accent group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </span>
                    {feature.text}
                  </div>
                ))}
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  "Express.js",
                  "Node.js",
                  "Turso/LibSQL",
                  "bcrypt",
                  "Multer",
                  "Vercel",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="tag-hover px-3 py-1.5 text-xs font-mono text-accent bg-accent/5 rounded-full border border-accent/15 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-card-border pt-5 flex items-center gap-4">
                <a
                  href="https://ccs-sitin-aleonar.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shine inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors group"
                >
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  Live Demo
                </a>
                <a
                  href="https://github.com/marshicode/sitin-monitoring-system"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shine inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors group"
                >
                  <GithubIcon className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  Source Code
                </a>
              </div>
            </div>
          </div>
          </TiltCard>

          {/* More projects */}
          <div className="rounded-2xl border border-dashed border-card-border p-10 text-center reveal visible reveal-delay-2">
            <div className="inline-flex p-3 rounded-xl bg-card-bg border border-card-border mb-4">
              <Folder className="w-6 h-6 text-text-muted" />
            </div>
            <p className="text-text-muted text-sm">
              More projects coming soon — I&apos;m always building.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
