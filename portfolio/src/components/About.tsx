import Image from "next/image";
import { Lines, contact } from "./ui";

const details = [
  { label: "Full name", value: "Rene James Aleonar" },
  { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  { label: "Location", value: "Cebu City, Philippines" },
  { label: "Availability", value: "Open to opportunities" },
  { label: "Education", value: "BS Information Technology" },
  { label: "University", value: "University of Cebu – CCS" },
  { label: "Interest", value: "Full-stack development" },
];

// Every figure comes from the content on this page.
const stats = [
  { value: "16", label: "Technologies", text: "Across frontend, backend, databases and tooling." },
  { value: "8", label: "Features shipped", text: "In the Sit-in Monitoring System, from reservations to analytics." },
  { value: "2", label: "Certificates", text: "Cisco CCNA coursework and the 12th UC CCS ICT Congress." },
  { value: "2", label: "Live apps", text: "Deployed and public: the Sit-in Monitoring System and Atomail." },
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-[clamp(90px,11vw,150px)]">
      <div className="wrap">
        <Lines
          id="about-title"
          className="h-section max-w-[16ch]"
          lines={["I learn by building.", "Every project solves a real problem."]}
        />

        <div className="mt-[clamp(56px,7vw,104px)] grid gap-14 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="space-y-6 lg:col-span-6 lg:col-start-7 lg:row-start-1">
            <p data-reveal className="lead">
              I&apos;m a student at the University of Cebu, College of Information &amp;
              Computer Studies, pursuing a career in full-stack software engineering. I
              believe in learning by building — every project I take on is a chance to
              solve a real problem with real users.
            </p>
            <p data-reveal className="body-copy max-w-[60ch]">
              My approach is practical: pick the right tools for the job, ship it, and
              iterate. I&apos;m comfortable across the stack — from designing interfaces
              to building APIs to deploying on the cloud. I&apos;m always looking for the
              next thing to build and the next problem to solve.
            </p>
            <ul data-reveal className="flex flex-wrap gap-2 pt-2" aria-label="At a glance">
              {["Cebu, Philippines", "Full-stack web dev", "BS Information Technology"].map((t) => (
                <li key={t} className="tag">
                  {t}
                </li>
              ))}
            </ul>
          </div>
          {/* Scaled from the top so the generator mark in the bottom-right corner stays out of frame */}
          <figure
            data-reveal
            className="group relative aspect-square w-full max-w-[340px] overflow-hidden rounded-[var(--radius-lg)] border border-line bg-[#0f0f12] lg:col-span-4 lg:col-start-1 lg:row-start-2 lg:max-w-none"
          >
            <Image
              src="/profile.png"
              alt="Rene James Aleonar"
              fill
              sizes="(max-width: 1024px) 340px, 420px"
              className="origin-top scale-[1.2] object-cover grayscale brightness-[0.82] contrast-[1.08] transition-[filter] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100"
            />
          </figure>
          <dl data-reveal className="border-t border-line lg:col-span-6 lg:col-start-7 lg:row-start-2 lg:self-center">
            {details.map((d) => (
              <div
                key={d.label}
                className="grid grid-cols-[minmax(7.5rem,40%)_1fr] gap-4 border-b border-line py-4"
              >
                <dt className="label self-center">{d.label}</dt>
                <dd className="min-w-0 break-words text-[0.98rem] text-[color:var(--fg-86)]">
                  {d.href ? (
                    <a href={d.href} className="underline decoration-white/25 underline-offset-4 hover:decoration-white">
                      {d.value}
                    </a>
                  ) : (
                    d.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <ul
          className="panel mt-[clamp(72px,9vw,128px)] grid overflow-hidden sm:grid-cols-2 lg:grid-cols-4"
          aria-label="By the numbers"
        >
          {stats.map((s, i) => (
            <li
              key={s.label}
              data-reveal
              className={`p-7 sm:p-8 ${i > 0 ? "border-t border-line" : ""} ${i === 1 ? "sm:border-t-0 sm:border-l" : ""} ${i === 2 ? "lg:border-t-0 lg:border-l" : ""} ${i === 3 ? "sm:border-l lg:border-t-0" : ""}`}
            >
              <p className="text-[clamp(3rem,4.6vw,4.1rem)] font-semibold leading-none tracking-[-0.05em]">
                {s.value}
              </p>
              <p className="label mt-5 text-[color:var(--fg)]">{s.label}</p>
              <p className="body-copy mt-2 text-[0.95rem] leading-relaxed">{s.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
