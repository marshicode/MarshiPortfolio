"use client";

import { useState, useEffect, useCallback } from "react";
import { Award, X, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

/* ── Issuer logos ── */

function CiscoLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 40" fill="currentColor">
      <g>
        <rect x="2" y="20" width="3" height="8" rx="1" />
        <rect x="7" y="16" width="3" height="12" rx="1" />
        <rect x="12" y="12" width="3" height="16" rx="1" />
        <rect x="17" y="8" width="3" height="20" rx="1" />
        <rect x="22" y="12" width="3" height="16" rx="1" />
        <rect x="27" y="16" width="3" height="12" rx="1" />
        <rect x="32" y="20" width="3" height="8" rx="1" />
        <text x="40" y="28" fontSize="18" fontWeight="bold" fontFamily="Arial, sans-serif">CISCO</text>
      </g>
    </svg>
  );
}

function IctLogo() {
  return (
    <svg viewBox="0 0 40 40" className="w-8 h-8">
      <circle cx="20" cy="20" r="18" fill="#0066cc" />
      <text x="20" y="26" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold" fontFamily="sans-serif">ICT</text>
    </svg>
  );
}

/* ── Certificate data ── */

interface Cert {
  title: string;
  issuer: string;
  issuerFull: string;
  date: string;
  instructor?: string;
  location?: string;
  image: string;
  logo: React.ReactNode;
  accent: string;
  border: string;
  badge: string;
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
    logo: <CiscoLogo className="h-6 text-[#049fd9]" />,
    accent: "from-[#049fd9]/10 to-[#049fd9]/5",
    border: "border-[#049fd9]/20 hover:border-[#049fd9]/40",
    badge: "bg-[#049fd9]/10 text-[#049fd9]",
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
    logo: <IctLogo />,
    accent: "from-[#0066cc]/10 to-[#0066cc]/5",
    border: "border-[#0066cc]/20 hover:border-[#0066cc]/40",
    badge: "bg-[#0066cc]/10 text-[#0066cc]",
    description:
      'Participated in the annual ICT Congress with the theme "Innovating the Future: Empowering Society Through Intelligent Technologies" at New Cebu Coliseum.',
    skills: ["ICT", "Innovation", "Technology", "Leadership"],
  },
];

/* ── Lightbox Modal ── */

function Lightbox({
  certs,
  initialIndex,
  onClose,
}: {
  certs: Cert[];
  initialIndex: number;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(initialIndex);

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? certs.length - 1 : c - 1));
  }, [certs.length]);

  const next = useCallback(() => {
    setCurrent((c) => (c === certs.length - 1 ? 0 : c + 1));
  }, [certs.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  const cert = certs[current];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
        aria-label="Close"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Navigation */}
      {certs.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Image + info */}
      <div
        className="relative max-w-5xl w-full mx-4 max-h-[90vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={cert.image}
          alt={cert.title}
          className="w-full rounded-xl shadow-2xl object-contain max-h-[75vh]"
        />
        <div className="mt-4 text-center">
          <p className="text-white font-bold text-lg">{cert.title}</p>
          <p className="text-white/60 text-sm mt-1">{cert.issuer} · {cert.date}</p>
        </div>

        {/* Dots */}
        {certs.length > 1 && (
          <div className="flex gap-2 mt-4">
            {certs.map((_cert: Cert, i: number) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === current ? "bg-white" : "bg-white/30"
                }`}
                aria-label={`View certificate ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Main Component ── */

export default function Certifications() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section id="certifications" className="section-padding">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10 reveal visible">
          <div className="flex items-center gap-3 mb-3">
            <Award className="w-5 h-5 text-accent" />
            <p className="text-xs font-mono text-accent tracking-widest uppercase">
              Certifications
            </p>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Credentials &amp; Achievements
          </h2>
        </div>

        {/* Certificate cards */}
        <div className="space-y-5">
          {certs.map((cert, i) => (
            <div
              key={cert.title}
              className={`card-glow rounded-2xl border ${cert.border} bg-gradient-to-br ${cert.accent} p-6 sm:p-8 reveal visible reveal-delay-${i + 1}`}
            >
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Left: Logo + Meta */}
                <div className="flex-shrink-0 flex flex-col items-center sm:items-start gap-3">
                  <div className="flex items-center gap-3">
                    {cert.logo}
                    <span className={`text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-full ${cert.badge}`}>
                      {cert.issuer}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-text-muted">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth="2" />
                      <path d="M16 2v4M8 2v4M3 10h18" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    {cert.date}
                  </div>
                </div>

                {/* Right: Details */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-[10px] font-mono tracking-wide uppercase rounded-full bg-card-bg/60 border border-card-border text-text-muted"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Meta + View button */}
                  <div className="flex flex-wrap items-center gap-4 text-xs text-text-muted">
                    {cert.instructor && (
                      <span className="flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        Instructor: {cert.instructor}
                      </span>
                    )}
                    {cert.location && (
                      <span className="flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {cert.location}
                      </span>
                    )}

                    {/* View Certificate button */}
                    <button
                      onClick={() => setLightboxIndex(i)}
                      className="btn-shine inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-card-border text-text-secondary hover:text-accent hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 ml-auto"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      View Certificate
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          certs={certs}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </section>
  );
}
