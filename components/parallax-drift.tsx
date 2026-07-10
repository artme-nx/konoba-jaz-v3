"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Wraps a content block that should drift at its own speed relative to the
 * page scroll and the fixed gradient canvas underneath it — this is what
 * makes the flow read as layers floating over one continuous background
 * instead of stacked, static sections.
 *
 * speed < 1  → block lags behind scroll (feels "further back")
 * speed > 1  → block runs ahead of scroll (feels "closer")
 */
export function ParallaxDrift({
  children,
  speed = 0.85,
  className,
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const distance = (1 - speed) * 140;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: distance },
        {
          y: -distance,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [speed]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
