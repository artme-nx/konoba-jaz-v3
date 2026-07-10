import { SiteHeader } from "@/components/site-header";
import { ParallaxDrift } from "@/components/parallax-drift";
import { Reveal } from "@/components/reveal";
import { WaveLines, GrapevineLine, SailMark } from "@/components/coastal-motifs";

const CUISINE = [
  { hr: "Hladna predjela", en: "Cold starters" },
  { hr: "Topla predjela", en: "Hot starters" },
  { hr: "Morski specijaliteti", en: "Seafood" },
  { hr: "Mesni specijaliteti", en: "Meat dishes" },
  { hr: "Salate i prilozi", en: "Salads & sides" },
  { hr: "Pizze", en: "Pizza" },
  { hr: "Domaća vina", en: "Homemade wine" },
  { hr: "Deserti", en: "Desserts" },
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main className="relative w-full">
        {/* ————— DOBRODOŠLI ————— */}
        <section id="dobrodosli" className="relative flex min-h-svh w-full flex-col justify-center px-5 pt-28 md:px-12 lg:px-24">
          <ParallaxDrift speed={1.15} className="pointer-events-none absolute -right-16 top-16 w-56 text-bay-bright/40 md:w-80">
            <SailMark className="h-auto w-full" />
          </ParallaxDrift>

          <p className="text-label text-amber">Konoba · Zaton</p>

          <h1 className="font-display mt-6 text-[clamp(3.5rem,14vw,9.5rem)] font-light leading-[0.88] tracking-[var(--tracking-display)] text-foreground">
            Jaz
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/80 md:text-xl">
            Obiteljska konoba na obali Zatona, u hladu vinove loze, tridesetak
            koraka od pješčane plaže. Otvoreni od 2000. godine.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="tel:+385981695744"
              className="text-label rounded-full bg-[var(--button-primary-bg)] px-7 py-3.5 text-[var(--button-primary-fg)] transition-colors duration-(--duration-micro) hover:bg-[var(--button-primary-hover-bg)]"
            >
              Rezervirajte stol
            </a>
            <a
              href="#zaton"
              className="text-label flex items-center gap-2 rounded-full border border-[var(--button-ghost-border)] px-7 py-3.5 text-foreground transition-colors duration-(--duration-micro) hover:border-amber"
            >
              Gdje smo
            </a>
          </div>

          <div className="mt-24 flex items-center gap-3 text-foreground/50">
            <span className="text-label">Zaronite</span>
            <span className="h-px w-16 bg-current" />
          </div>
        </section>

        {/* ————— KONOBA (o nama) ————— */}
        <section id="konoba" className="relative w-full px-5 py-32 md:px-12 lg:px-24">
          <ParallaxDrift speed={0.65} className="pointer-events-none absolute -left-10 top-0 h-72 w-40 text-amber/25 md:h-96 md:w-56">
            <GrapevineLine className="h-full w-full" />
          </ParallaxDrift>

          <div className="mx-auto max-w-2xl md:ml-[14vw] md:mr-0">
            <Reveal>
              <p className="text-label text-bay-bright">Priča</p>
              <h2 className="font-display mt-4 text-4xl leading-tight text-foreground md:text-6xl">
                Stara konobarska predaja, na svoj način.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-8 text-base leading-relaxed text-foreground/75 md:text-lg">
                Jaz vodi obitelj koja kuhinju i konobu vodi na isti način —
                s puno truda i malo buke. Enterijer je od starog drva, terasa
                velika i zasjenjena vinovom lozom, a stolovi gledaju prema
                moru i susjednim otocima.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="mt-5 text-base leading-relaxed text-foreground/60">
                Nema pretjerane priče ni glazure — samo mjesto gdje se sjedi
                dulje nego što se planiralo.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ————— ZA STOLOM (kuhinja) ————— */}
        <section id="stol" className="relative w-full px-5 py-32 md:px-12 lg:px-24">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-label text-amber">Za stolom</p>
            <h2 className="font-display mt-4 text-4xl leading-tight text-foreground md:text-6xl">
              Riba, roštilj i domaće vino
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-foreground/70 md:text-lg">
              Kuhinja drži dalmatinske klasike — od svježe ribe do jela s
              roštilja, tjestenina, dagnji i peke — uz vlastita domaća vina.
            </p>
          </Reveal>

          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4">
            {CUISINE.map((item, i) => (
              <ParallaxDrift
                key={item.hr}
                speed={0.85 + (i % 3) * 0.12}
                className="flex flex-col items-center gap-2 text-center"
              >
                <span className="font-display text-xl text-foreground md:text-2xl">
                  {item.hr}
                </span>
                <span className="text-label text-foreground/45">{item.en}</span>
              </ParallaxDrift>
            ))}
          </div>
        </section>

        {/* ————— ZATON ————— */}
        <section id="zaton" className="relative w-full overflow-hidden px-5 py-32 md:px-12 lg:px-24">
          <ParallaxDrift speed={1.25} className="pointer-events-none absolute inset-x-0 bottom-0 text-bay-bright/30">
            <WaveLines className="h-40 w-full md:h-64" />
          </ParallaxDrift>

          <div className="mx-auto max-w-2xl md:mr-[14vw] md:ml-auto md:text-right">
            <Reveal>
              <p className="text-label text-bay-bright">Zaton, kraj Zadra</p>
              <h2 className="font-display mt-4 text-4xl leading-tight text-foreground md:text-6xl">
                Mirna uvala, otvoreno more.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 text-base leading-relaxed text-foreground/75 md:text-lg">
                Zaton je tiho obalno mjesto sjeverno od Zadra — pješčana
                plaža, borova šuma i pogled na otoke. Konoba stoji uz samu
                obalu, dovoljno blizu vodi da se čuje.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ————— KONTAKT ————— */}
        <footer id="kontakt" className="relative w-full px-5 pb-16 pt-32 md:px-12 lg:px-24">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-label text-amber">Rezervacije</p>
            <h2 className="font-display mt-4 text-4xl leading-tight text-foreground md:text-6xl">
              Vidimo se za stolom.
            </h2>

            <div className="mt-10 flex flex-col items-center gap-5">
              <a
                href="tel:+385981695744"
                className="font-display text-2xl text-foreground transition-colors hover:text-amber md:text-3xl"
              >
                +385 98 169 5744
              </a>
              <a
                href="https://www.instagram.com/konoba_jaz/"
                target="_blank"
                rel="noreferrer"
                className="text-label text-foreground/60 transition-colors hover:text-bay-bright"
              >
                @konoba_jaz
              </a>
              <p className="text-label text-foreground/45">Zaton · Zadar</p>
            </div>
          </Reveal>

          <div className="mx-auto mt-24 flex max-w-4xl flex-col items-center justify-between gap-4 border-t border-foreground/10 pt-8 text-foreground/40 md:flex-row">
            <span className="text-label">Konoba Jaz — Zaton</span>
            <span className="text-label">Obiteljska konoba od 2000.</span>
          </div>
        </footer>
      </main>
    </>
  );
}
