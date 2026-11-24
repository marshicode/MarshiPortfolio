import {
  MapPin,
  Target,
  GraduationCap,
  User,
  Mail,
  Phone,
  Calendar,
  BookOpen,
  Briefcase,
} from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-10 reveal visible">
          <User className="w-5 h-5 text-accent" />
          <h2 className="text-sm font-mono text-accent tracking-widest uppercase">
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: Bio */}
          <div className="lg:col-span-3 space-y-5 reveal visible reveal-delay-1">
            <p className="text-text-secondary leading-relaxed text-base">
              I&apos;m a student at the University of Cebu, College of Information &amp;
              Computer Studies, pursuing a career in full-stack software engineering.
              I believe in learning by building — every project I take on is a chance
              to solve a real problem with real users.
            </p>
            <p className="text-text-secondary leading-relaxed text-base">
              My approach is practical: pick the right tools for the job, ship it,
              and iterate. I&apos;m comfortable across the stack — from designing
              interfaces to building APIs to deploying on the cloud. I&apos;m
              always looking for the next thing to build and the next problem to solve.
            </p>

            {/* Quick info pills */}
            <div className="flex flex-wrap gap-3 pt-2">
              <InfoPill icon={<MapPin className="w-3.5 h-3.5" />} label="Cebu, Philippines" />
              <InfoPill icon={<Target className="w-3.5 h-3.5" />} label="Full-Stack Web Dev" />
              <InfoPill icon={<GraduationCap className="w-3.5 h-3.5" />} label="BS Information Technology" />
            </div>
          </div>

          {/* Right: Personal Information card */}
          <div className="lg:col-span-2 reveal visible reveal-delay-2">
            <PersonalInfoCard />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoPill({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card-bg border border-card-border text-xs text-text-secondary">
      <span className="text-accent">{icon}</span>
      {label}
    </div>
  );
}

function PersonalInfoCard() {
  const info = [
    {
      icon: <User className="w-4 h-4" />,
      label: "Full Name",
      value: "Rene James Aleonar",
    },
    {
      icon: <Mail className="w-4 h-4" />,
      label: "Email",
      value: "renejamesaleonar27@gmail.com",
      href: "mailto:renejamesaleonar27@gmail.com",
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      label: "Location",
      value: "Cebu City, Philippines",
    },
    {
      icon: <Calendar className="w-4 h-4" />,
      label: "Availability",
      value: "Open to Opportunities",
    },
    {
      icon: <GraduationCap className="w-4 h-4" />,
      label: "Education",
      value: "BS Information Technology",
    },
    {
      icon: <BookOpen className="w-4 h-4" />,
      label: "University",
      value: "University of Cebu - CCS",
    },
    {
      icon: <Briefcase className="w-4 h-4" />,
      label: "Interest",
      value: "Full-Stack Development",
    },
  ];

  return (
    <div className="card-glow rounded-2xl border border-card-border bg-card-bg overflow-hidden">
      {/* Profile picture + Header */}
      <div className="relative">
        <div className="h-24 bg-gradient-to-r from-accent/10 via-accent/5 to-transparent" />
        <div className="absolute -bottom-10 left-6">
          <div className="w-20 h-20 rounded-2xl border-4 border-card-bg overflow-hidden bg-card-bg shadow-lg">
            <img
              src="/profile.png"
              alt="Rene James Aleonar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Name + role */}
      <div className="px-6 pt-14 pb-3">
        <h3 className="text-lg font-bold text-foreground">Rene James Aleonar</h3>
        <p className="text-xs text-accent font-mono">Full-Stack Developer</p>
      </div>

      {/* Divider */}
      <div className="px-6 border-t border-card-border">
        <h4 className="text-[10px] font-mono text-text-muted tracking-wider uppercase py-3">
          Details
        </h4>
      </div>

      {/* Info rows */}
      <div className="divide-y divide-card-border">
        {info.map((item) => (
          <div
            key={item.label}
            className="px-6 py-3 flex items-center gap-4 hover:bg-accent/5 transition-colors duration-200"
          >
            <span className="text-accent flex-shrink-0">{item.icon}</span>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-mono text-text-muted tracking-wider uppercase">
                {item.label}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-sm text-text-secondary hover:text-accent transition-colors truncate block"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-sm text-text-secondary truncate">{item.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
