/** Decorative line-art that sits *alongside* the photography, never in place
 * of it. The venue's own photos (konobajaz.weebly.com, `_orig`) carry the
 * evidence; these motifs (wave, grapevine, sail) only carry rhythm between
 * them. No stock and no stand-in food photos anywhere on this site. */

export function WaveLines({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 200" fill="none" className={className} aria-hidden>
      <path
        d="M0 100 Q 75 60 150 100 T 300 100 T 450 100 T 600 100"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M0 140 Q 75 100 150 140 T 300 140 T 450 140 T 600 140"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.32"
      />
      <path
        d="M0 60 Q 75 20 150 60 T 300 60 T 450 60 T 600 60"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.2"
      />
    </svg>
  );
}

export function GrapevineLine({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 300" fill="none" className={className} aria-hidden>
      <path
        d="M100 0 C 100 60 60 60 60 110 C 60 160 100 150 100 200 C 100 250 60 250 60 300"
        stroke="currentColor"
        strokeWidth="1.25"
        opacity="0.5"
      />
      <circle cx="72" cy="70" r="6" stroke="currentColor" strokeWidth="1.25" opacity="0.55" />
      <circle cx="90" cy="130" r="6" stroke="currentColor" strokeWidth="1.25" opacity="0.55" />
      <circle cx="70" cy="180" r="6" stroke="currentColor" strokeWidth="1.25" opacity="0.55" />
      <circle cx="88" cy="240" r="6" stroke="currentColor" strokeWidth="1.25" opacity="0.55" />
    </svg>
  );
}

export function SailMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={className} aria-hidden>
      <path d="M60 10 L60 95" stroke="currentColor" strokeWidth="1.25" opacity="0.6" />
      <path d="M60 15 L100 90 L60 90 Z" stroke="currentColor" strokeWidth="1.25" opacity="0.5" />
      <path d="M60 25 L28 88 L60 88 Z" stroke="currentColor" strokeWidth="1.25" opacity="0.35" />
      <path d="M20 100 Q60 112 100 100" stroke="currentColor" strokeWidth="1.25" opacity="0.6" />
    </svg>
  );
}
