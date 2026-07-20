"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { BASE } from "@/components/photo";

const LINKS = [
  { href: "#dobrodosli", label: "Dobrodošli" },
  { href: "#konoba", label: "Konoba" },
  { href: "#stol", label: "Za stolom" },
  { href: "#zaton", label: "Zaton" },
  { href: "#galerija", label: "Galerija" },
  { href: "#kontakt", label: "Kontakt" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3.5 backdrop-blur-md" : "py-6"
        }`}
        style={{
          backgroundColor: scrolled ? "rgba(14, 26, 34, 0.55)" : "transparent",
          boxShadow: scrolled ? "0 1px 0 rgba(246,238,221,0.08)" : "none",
        }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 md:px-8">
          {/* The owner's own mark (konobajaz.weebly.com). It is drawn in black
              and red for a light background, so it sits on a cream plate here
              rather than being recoloured — the logo is not ours to redraw. */}
          <a href="#dobrodosli" aria-label="Konoba Jaz — početak">
            <Image
              src={`${BASE}/img/konoba-jaz-logo.png`}
              alt="Konoba Jaz"
              width={246}
              height={125}
              priority
              className="h-11 w-auto rounded-md bg-[#F6EEDD] px-2.5 py-1 md:h-14"
            />
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-label text-foreground/75 transition-colors duration-(--duration-micro) hover:text-amber"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+385981695744"
              className="text-label rounded-full border border-[var(--button-ghost-border)] px-5 py-2.5 text-foreground transition-colors duration-(--duration-micro) hover:border-amber hover:text-amber"
            >
              +385 98 169 5744
            </a>
          </nav>

          <button
            aria-label={open ? "Zatvori izbornik" : "Otvori izbornik"}
            aria-expanded={open}
            className="z-50 flex size-10 flex-col items-center justify-center gap-1.5 md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`h-px w-6 bg-foreground transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-6 bg-foreground transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </header>

      {/* Mobile nav — sibling of <header>, never nested inside it, so
          backdrop-blur on the header can never clip this fixed overlay. */}
      <nav
        id="mobile-nav"
        aria-hidden={!open}
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-9 bg-[#0E1A22] transition-opacity duration-400 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="font-display text-3xl text-foreground"
          >
            {l.label}
          </a>
        ))}
        <a
          href="tel:+385981695744"
          onClick={() => setOpen(false)}
          className="text-label mt-4 rounded-full border border-[var(--button-ghost-border)] px-6 py-3 text-amber"
        >
          +385 98 169 5744
        </a>
      </nav>
    </>
  );
}
