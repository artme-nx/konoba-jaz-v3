import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * `images.unoptimized` bypasses the Next image loader, and with it the
 * automatic basePath prefix — the _next/ chunks get "/konoba-jaz-v3/"
 * but the image src would stay at "/img/…" and 404 on Pages. Mirror the
 * basePath from next.config here so both resolve under the same root.
 */
export const BASE = process.env.NODE_ENV === "production" ? "/konoba-jaz-v3" : "";

/**
 * A photograph in this site's visual grammar: soft-cornered, edge-lit by a
 * hairline border so it floats over the gradient canvas like the rest of the
 * layered blocks rather than sitting on top of it. Every photo on this site
 * comes from the venue's own website (konobajaz.weebly.com, `_orig`
 * resolution) — no stock, no stand-ins.
 */
export function Photo({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  sizes = "(min-width: 768px) 45vw, 92vw",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <figure
      className={cn(
        "overflow-hidden rounded-lg border border-foreground/10 bg-foreground/5",
        className,
      )}
    >
      <Image
        src={`${BASE}${src}`}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        className="h-full w-full object-cover"
      />
    </figure>
  );
}
