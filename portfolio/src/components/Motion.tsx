"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

declare global {
  interface Window {
    __motionReady?: boolean;
    __lenis?: Lenis;
  }
}

const EASE = "power4.out";

/** Smooth scroll + the page's one load sequence and scroll reveals. Renders nothing. */
export default function Motion() {
  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains("motion")) return;
    window.__motionReady = true;

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({ autoRaf: false, anchors: true, lerp: 0.1 });
    window.__lenis = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      // Hero load sequence: media fades up, headline lines rise, then copy and buttons.
      const tl = gsap.timeline({ defaults: { ease: EASE } });
      tl.fromTo("[data-hero-media]", { opacity: 0, scale: 1.08 }, { opacity: 1, scale: 1, duration: 2 }, 0)
        .to("[data-hero-line] > span", { y: 0, duration: 1.3, stagger: 0.12 }, 0.15)
        .to("[data-hero-fade]", { opacity: 1, y: 0, duration: 1, stagger: 0.08 }, 0.55);

      // Hero media drifts slower than the page.
      gsap.to("[data-hero-parallax]", {
        yPercent: 14,
        ease: "none",
        scrollTrigger: { trigger: "#top", start: "top top", end: "bottom top", scrub: true },
      });

      // Section headlines: each masked line rises in.
      gsap.utils.toArray<HTMLElement>("[data-lines]").forEach((el) => {
        gsap.to(el.querySelectorAll(".line > span"), {
          y: 0,
          duration: 1.1,
          stagger: 0.1,
          ease: EASE,
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        });
      });

      // Blocks: fade and lift, staggered when siblings enter together.
      ScrollTrigger.batch("[data-reveal]", {
        start: "top 88%",
        once: true,
        onEnter: (els) =>
          gsap.to(els, { opacity: 1, y: 0, duration: 0.9, stagger: 0.07, ease: EASE }),
      });
    });

    // Images and fonts change layout after load; re-measure trigger positions.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    document.fonts?.ready.then(refresh);

    return () => {
      window.removeEventListener("load", refresh);
      ctx.revert();
      gsap.ticker.remove(tick);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  return null;
}
