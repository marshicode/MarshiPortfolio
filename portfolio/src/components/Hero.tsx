import { ArrowDown, Sparkles } from "lucide-react";
import TypeWriter from "./TypeWriter";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding pt-24 relative">
      {/* Blob decorations */}
      <div className="blob-bg" aria-hidden="true">
        <div
          className="blob"
          style={{
            width: 600,
            height: 600,
            background: "var(--accent)",
            top: "10%",
            left: "10%",
            animationDelay: "0s",
          }}
        />
        <div
          className="blob"
          style={{
            width: 400,
            height: 400,
            background: "#a78bfa",
            bottom: "10%",
            right: "10%",
            animationDelay: "-7s",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/5 border border-accent/10 text-accent text-xs font-mono tracking-wider mb-8">
            <Sparkles className="w-3.5 h-3.5" />
            OPEN TO OPPORTUNITIES
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-4 animate-fade-in-up">
          Hi, I&apos;m{" "}
          <span className="gradient-text">Marshi</span>
        </h1>

        {/* Typing animation */}
        <div className="text-xl sm:text-2xl md:text-3xl font-mono mb-8 animate-fade-in-up h-10">
          <TypeWriter
            words={[
              "Full-Stack Developer",
              "Problem Solver",
              "Student Engineer",
              "UI Enthusiast",
            ]}
            typingSpeed={70}
            deletingSpeed={40}
            pauseTime={2000}
          />
        </div>

        <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-in-up">
          I build real-world web applications from concept to deployment.
          Turning ideas into shipped software with modern full-stack tools.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up">
          <a
            href="#projects"
            className="btn-shine group px-8 py-3.5 bg-accent text-background font-medium rounded-xl hover:bg-accent-dim transition-all duration-300 flex items-center gap-2 hover:gap-3"
          >
            View My Work
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#contact"
            className="btn-shine px-8 py-3.5 border border-card-border text-foreground font-medium rounded-xl hover:border-accent/50 hover:text-accent hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-5 h-5 text-text-muted" />
        </div>
      </div>
    </section>
  );
}
