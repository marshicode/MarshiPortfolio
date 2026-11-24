import { Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-card-border py-8 px-6">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-text-muted">
          &copy; {new Date().getFullYear()} Marshi. All rights reserved.
        </p>
        <div className="flex items-center gap-1.5 text-xs text-text-muted">
          <span>Built with</span>
          <Code2 className="w-3.5 h-3.5 text-accent" />
          <span className="text-accent">Next.js</span>
          <span>&amp;</span>
          <span className="text-accent">Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
}
