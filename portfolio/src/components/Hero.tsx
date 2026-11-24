export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] flex-col items-center justify-center overflow-hidden pb-24 pt-32"
    >
      {/* Soft monochrome glow behind the headline, under a vignette */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div data-hero-parallax className="absolute inset-0">
          <div data-hero-media className="absolute inset-x-0 top-[10%] bottom-[10%] mx-auto max-w-[1100px] bg-[radial-gradient(50%_45%_at_50%_45%,rgba(245,245,247,0.07),transparent_70%)]" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(60%_55%_at_50%_45%,transparent,rgba(5,5,5,0.85)_75%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#050505] to-transparent" />
      </div>

      <div className="wrap flex flex-col items-center text-center">
        <p data-hero-fade className="badge mb-8 sm:mb-10">
          <span className="dot" aria-hidden="true" />
          Open to opportunities · Cebu City
        </p>

        <h1 id="hero-title" className="h-hero">
          <span data-hero-line className="line">
            <span>Hi, I&apos;m Marshi.</span>
          </span>
          <span data-hero-line className="line tone-dim">
            <span>I build for the web.</span>
          </span>
        </h1>

        <p data-hero-fade className="lead mt-8 max-w-[40ch] text-balance sm:mt-10">
          I build real-world web applications from concept to deployment. Turning ideas
          into shipped software with modern full-stack tools.
        </p>

        <div
          data-hero-fade
          className="mt-10 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center"
        >
          <a href="#projects" className="btn btn-primary">
            View work
          </a>
          <a href="#contact" className="btn btn-secondary">
            Contact
          </a>
        </div>
      </div>

      <div
        data-hero-fade
        className="absolute bottom-8 left-[var(--gutter)] hidden items-center gap-3 sm:flex"
        aria-hidden="true"
      >
        <span className="relative h-10 w-px overflow-hidden bg-white/10">
          <span className="scroll-cue absolute inset-0 bg-white/70" />
        </span>
        <span className="label">Scroll</span>
      </div>
    </section>
  );
}
