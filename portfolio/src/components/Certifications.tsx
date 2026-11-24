"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { Lines } from "./ui";

interface Cert {
  title: string;
  issuer: string;
  issuerFull: string;
  date: string;
  instructor?: string;
  location?: string;
  image: string;
  width: number;
  height: number;
  description: string;
  skills: string[];
}

const certs: Cert[] = [
  {
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco Networking Academy",
    issuerFull: "University of Cebu through the Cisco Networking Academy program",
    date: "07 Jan 2026",
    instructor: "Michael Lapena",
    image: "/certificates/cisco-ccna.png",
    width: 1381,
    height: 940,
    description:
      "Completed coursework covering LAN switching, IPv4/IPv6 routing, wireless network configuration, and security fundamentals through Cisco's Networking Academy program.",
    skills: ["Networking", "Routing", "Switching", "Wireless", "Security"],
  },
  {
    title: "12th UC CCS ICT Congress 2026",
    issuer: "ICT Congress",
    issuerFull:
      'Certificate of Participation in the 12th UC CCS ICT Congress with the theme "Innovating the Future: Empowering Society Through Intelligent Technologies"',
    date: "22 Apr 2026",
    location: "New Cebu Coliseum, Sanciangko St., Cebu City",
    image: "/certificates/ict-congress.png",
    width: 803,
    height: 570,
    description:
      'Participated in the annual ICT Congress with the theme "Innovating the Future: Empowering Society Through Intelligent Technologies" at New Cebu Coliseum.',
    skills: ["ICT", "Innovation", "Technology", "Leadership"],
  },
];

export default function Certifications() {
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const [current, setCurrent] = useState(0);

  const open = (i: number, button: HTMLButtonElement) => {
    opener.current = button;
    setCurrent(i);
    dialog.current?.showModal();
    window.__lenis?.stop();
  };
  const close = () => dialog.current?.close();
  const step = useCallback(
    (d: number) => setCurrent((c) => (c + d + certs.length) % certs.length),
    []
  );

  useEffect(() => {
    const el = dialog.current;
    if (!el) return;
    const onClose = () => {
      window.__lenis?.start();
      opener.current?.focus();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    };
    el.addEventListener("close", onClose);
    el.addEventListener("keydown", onKey);
    return () => {
      el.removeEventListener("close", onClose);
      el.removeEventListener("keydown", onKey);
    };
  }, [step]);

  const cert = certs[current];

  return (
    <section id="certifications" aria-labelledby="certs-title" className="py-[clamp(90px,10vw,140px)]">
      <div className="wrap">
        <Lines
          id="certs-title"
          className="h-section"
          lines={["Certified groundwork.", "Proof on paper."]}
        />

        <ul className="mt-[clamp(48px,6vw,80px)] grid gap-4 lg:grid-cols-2">
          {certs.map((c, i) => (
            <li key={c.title} data-reveal>
              <article className="panel flex h-full flex-col overflow-hidden">
                <button
                  type="button"
                  onClick={(e) => open(i, e.currentTarget)}
                  className="group relative m-2 block overflow-hidden rounded-[calc(var(--radius-lg)-6px)] bg-[#0f0f12] p-4 sm:p-6"
                  aria-label={`View the ${c.title} certificate full size`}
                >
                  <Image
                    src={c.image}
                    alt=""
                    width={c.width}
                    height={c.height}
                    sizes="(max-width: 1024px) 92vw, 640px"
                    className="mx-auto h-auto max-h-[360px] w-auto rounded-md object-contain transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
                  />
                  <span className="icon-btn glass absolute right-4 top-4">
                    <Maximize2 className="h-4 w-4" aria-hidden="true" />
                  </span>
                </button>

                <div className="flex flex-1 flex-col p-6 pt-5 sm:p-8 sm:pt-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                    <p className="label">{c.issuer}</p>
                    <p className="text-sm text-[color:var(--fg-66)]">
                      <time>{c.date}</time>
                    </p>
                  </div>
                  <h3 className="mt-3 text-[clamp(1.4rem,2vw,1.75rem)] font-semibold leading-[1.15] tracking-[-0.03em]">
                    {c.title}
                  </h3>
                  <p className="body-copy mt-3 text-[0.98rem]">{c.description}</p>

                  <dl className="mt-6 border-t border-line text-[0.92rem]">
                    <div className="grid grid-cols-[7rem_1fr] gap-4 border-b border-line py-3">
                      <dt className="label self-center">Issued by</dt>
                      <dd className="text-[color:var(--fg-86)]">{c.issuerFull}</dd>
                    </div>
                    {c.instructor && (
                      <div className="grid grid-cols-[7rem_1fr] gap-4 border-b border-line py-3">
                        <dt className="label self-center">Instructor</dt>
                        <dd className="text-[color:var(--fg-86)]">{c.instructor}</dd>
                      </div>
                    )}
                    {c.location && (
                      <div className="grid grid-cols-[7rem_1fr] gap-4 border-b border-line py-3">
                        <dt className="label self-center">Venue</dt>
                        <dd className="text-[color:var(--fg-86)]">{c.location}</dd>
                      </div>
                    )}
                  </dl>

                  <ul className="mt-6 flex flex-wrap gap-2" aria-label="Topics">
                    {c.skills.map((s) => (
                      <li key={s} className="tag">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>

      <dialog
        ref={dialog}
        className="lightbox"
        aria-labelledby="lightbox-title"
        data-lenis-prevent
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        <div
          className="flex h-full w-full flex-col items-center justify-center gap-5 p-4 sm:p-10"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <button type="button" onClick={close} className="icon-btn glass absolute right-4 top-4 sm:right-8 sm:top-8" aria-label="Close">
            <X className="h-5 w-5" aria-hidden="true" />
          </button>

          <Image
            key={cert.image}
            src={cert.image}
            alt={`${cert.title} certificate`}
            width={cert.width}
            height={cert.height}
            sizes="(max-width: 1200px) 94vw, 1100px"
            className="h-auto max-h-[72vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
          />
          <div className="text-center">
            <p id="lightbox-title" className="text-lg font-semibold tracking-[-0.02em]">
              {cert.title}
            </p>
            <p className="mt-1 text-sm text-[color:var(--fg-66)]">
              {cert.issuer} · {cert.date}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button type="button" onClick={() => step(-1)} className="icon-btn glass" aria-label="Previous certificate">
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <p className="min-w-[4ch] text-center text-sm text-[color:var(--fg-66)]" aria-live="polite">
              {current + 1} / {certs.length}
            </p>
            <button type="button" onClick={() => step(1)} className="icon-btn glass" aria-label="Next certificate">
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </dialog>
    </section>
  );
}
