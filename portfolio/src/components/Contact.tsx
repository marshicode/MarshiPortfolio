"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, Lines, XIcon, contact } from "./ui";

const links = [
  { label: "Email", value: contact.email, href: `mailto:${contact.email}`, icon: Mail },
  { label: "GitHub", value: "marshicode", href: contact.github, icon: GithubIcon },
  { label: "LinkedIn", value: "Rene James Aleonar", href: contact.linkedin, icon: LinkedinIcon },
  { label: "Twitter", value: "X / Twitter", href: contact.twitter, icon: XIcon },
];

type Errors = Partial<Record<"name" | "email" | "message", string>>;

function validate(data: FormData): Errors {
  const errors: Errors = {};
  const name = String(data.get("name") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const message = String(data.get("message") ?? "").trim();
  if (!name) errors.name = "Enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Enter an email address like name@example.com.";
  if (message.length < 10) errors.message = "Write at least 10 characters so I know what it's about.";
  return errors;
}

export default function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  // No server: the form drafts an email in the visitor's own mail app.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length) {
      const first = Object.keys(found)[0];
      e.currentTarget.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    const name = String(data.get("name")).trim();
    const subject = encodeURIComponent(`Hello from ${name}`);
    const body = encodeURIComponent(`${String(data.get("message")).trim()}\n\n${name}\n${String(data.get("email")).trim()}`);
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative py-[clamp(110px,13vw,170px)]">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(50rem_28rem_at_50%_25%,rgba(255,255,255,0.07),transparent_70%)]"
        aria-hidden="true"
      />
      <div className="wrap">
        <div className="flex flex-col items-center text-center">
          <Lines
            id="contact-title"
            className="h-section max-w-[14ch]"
            lines={["Have an idea?", "Let's build it."]}
          />
          <p data-reveal className="lead mt-8 max-w-[40ch]">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of something great.
          </p>
          <div data-reveal className="mt-10">
            <a href={`mailto:${contact.email}`} className="btn btn-primary">
              <Mail className="h-4 w-4" aria-hidden="true" />
              Say hello
            </a>
          </div>
        </div>

        <div className="mt-[clamp(72px,9vw,120px)] grid grid-cols-1 gap-4 lg:grid-cols-12">
          <form data-reveal noValidate onSubmit={onSubmit} className="panel min-w-0 p-6 sm:p-10 lg:col-span-7" aria-labelledby="form-title">
            <h3 id="form-title" className="text-[1.6rem] font-semibold tracking-[-0.03em]">
              Send a message
            </h3>
            <p className="body-copy mt-1 text-[0.95rem]">This opens your mail app with the message ready to send.</p>

            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" autoComplete="name" error={errors.name} />
              <Field label="Email" name="email" type="email" autoComplete="email" error={errors.email} />
              <div className="sm:col-span-2">
                <Field label="Message" name="message" multiline error={errors.message} />
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <button type="submit" className="btn btn-primary">
                Write the email
              </button>
              <p className="text-sm text-[color:var(--fg-66)]" role="status">
                {sent ? "Your mail app should open with the message. Send it from there." : ""}
              </p>
            </div>
          </form>

          <ul data-reveal className="panel flex min-w-0 flex-col p-3 lg:col-span-5" aria-label="Elsewhere">
            {links.map(({ label, value, href, icon: Icon }) => (
              <li key={label} className="border-b border-line last:border-b-0">
                <a
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-[18px] px-4 py-5 transition-colors hover:bg-white/[0.04]"
                >
                  <span className="icon-btn shrink-0">
                    <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="label block">{label}</span>
                    <span className="block truncate text-[1.02rem] text-[color:var(--fg-86)]">{value}</span>
                  </span>
                  <ArrowUpRight
                    className="h-5 w-5 shrink-0 text-[color:var(--fg-52)] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  multiline,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  multiline?: boolean;
  error?: string;
}) {
  const id = `field-${name}`;
  const errId = `${id}-error`;
  const shared = {
    id,
    name,
    className: "field",
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? errId : undefined,
  };
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-[color:var(--fg-86)]">
        {label}
      </label>
      {multiline ? (
        <textarea {...shared} rows={5} className="field resize-y" />
      ) : (
        <input {...shared} type={type} autoComplete={autoComplete} />
      )}
      {error && (
        <p id={errId} className="mt-2 text-sm text-[#ff9b9b]">
          {error}
        </p>
      )}
    </div>
  );
}
