"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * The site has no boxed "sections" — this fixed layer is the single canvas
 * every block of content sits on top of. As the page scrolls, the gradient
 * itself pans (background-position) and the "sun" drifts down and dims,
 * turning from amber dusk into deep bay teal by the footer. Content blocks
 * scroll normally in-flow; this layer moves at a different rate underneath
 * them, which is what produces the parallax-canvas feel instead of stacked
 * section backgrounds.
 */
export function GradientCanvas() {
  const canvasRef = useRef<HTMLDivElement | null>(null);
  const sunRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const sun = sunRef.current;
    if (!canvas || !sun) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.6,
        onUpdate: (self) => {
          const p = self.progress; // 0 → 1 across the whole page
          canvas.style.setProperty("--canvas-shift", `${p * 100}%`);
          canvas.style.setProperty("--canvas-angle", `${165 - p * 40}deg`);
          sun.style.setProperty("--sun-y", `${p * 118}vh`);
          sun.style.setProperty("--sun-scale", `${1.15 - p * 0.55}`);
          sun.style.opacity = `${1 - p * 0.75}`;
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={canvasRef} className="gradient-canvas" aria-hidden>
      <div ref={sunRef} className="canvas-sun" />
    </div>
  );
}
