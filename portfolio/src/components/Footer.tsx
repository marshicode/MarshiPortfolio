import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon, contact } from "./ui";

const columns = [
  {
    title: "Sections",
    links: [
      { label: "About", href: "#about" },
      { label: "Projects", href: "#projects" },
      { label: "Skills", href: "#skills" },
      { label: "Certifications", href: "#certifications" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Work",
    links: [
      { label: "Sit-in Monitoring System", href: "https://ccs-sitin-aleonar.vercel.app" },
      { label: "Source code", href: "https://github.com/marshicode/sitin-monitoring-system" },
      { label: "All repositories", href: contact.github },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: contact.email, href: `mailto:${contact.email}` },
      { label: "LinkedIn", href: contact.linkedin },
    ],
    note: "Cebu City, Philippines",
  },
];

const socials = [
  { label: "GitHub", href: contact.github, icon: GithubIcon },
  { label: "LinkedIn", href: contact.linkedin, icon: LinkedinIcon },
  { label: "Twitter", href: contact.twitter, icon: XIcon },
  { label: "Email", href: `mailto:${contact.email}`, icon: Mail },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-[#0c0c10]/40 pt-[clamp(64px,7vw,96px)]">
      <div className="wrap">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-[1.6rem] font-bold tracking-[-0.05em]">Marshi</p>
            <p className="body-copy mt-3 max-w-[32ch]">
              Full-stack developer and BS Information Technology student at the University
              of Cebu.
            </p>
            <ul className="mt-6 flex gap-2.5" aria-label="Social links">
              {socials.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="icon-btn"
                    aria-label={label}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer" className="grid gap-10 sm:grid-cols-3 lg:col-span-7 lg:col-start-6">
            {columns.map((col) => (
              <div key={col.title}>
                <h2 className="label">{col.title}</h2>
                <ul className="mt-5 space-y-3 text-[0.95rem]">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="break-words text-[color:var(--fg-78)] transition-colors hover:text-white"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                  {col.note && <li className="text-[color:var(--fg-52)]">{col.note}</li>}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </div>

      <p
        aria-hidden="true"
        className="mt-[clamp(56px,7vw,96px)] select-none text-center text-[clamp(6rem,27vw,25rem)] font-bold leading-[0.78] tracking-[-0.07em] text-white/[0.06]"
      >
        Marshi
      </p>

      <div className="border-t border-line">
        <div className="wrap flex flex-col gap-2 py-6 text-sm text-[color:var(--fg-52)] sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Marshi. All rights reserved.</p>
          <p>Built with Next.js &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
