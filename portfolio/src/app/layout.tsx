import type { Metadata, Viewport } from "next";
import { Rethink_Sans } from "next/font/google";
import "./globals.css";

const rethink = Rethink_Sans({
  variable: "--font-rethink",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Marshi — Full-Stack Developer",
  description:
    "Portfolio of Marshi, an aspiring full-stack software engineer building real-world web applications.",
  keywords: ["portfolio", "full-stack developer", "web developer", "Next.js", "React"],
  openGraph: {
    title: "Marshi — Full-Stack Developer",
    description:
      "Aspiring full-stack software engineer building real-world web applications.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
};

// Runs before paint: hide reveal targets only when JS runs and motion is allowed.
// If the motion bundle never boots, the class is removed so content is never stuck hidden.
const motionGate = `(function(){try{if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;var d=document.documentElement;d.classList.add('motion');setTimeout(function(){if(!window.__motionReady)d.classList.remove('motion')},2500)}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${rethink.variable} antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionGate }} />
      </head>
      <body className="min-h-dvh flex flex-col">{children}</body>
    </html>
  );
}
