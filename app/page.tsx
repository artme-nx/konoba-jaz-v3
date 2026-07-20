import { SiteHeader } from "@/components/site-header";
import { ParallaxDrift } from "@/components/parallax-drift";
import { Reveal } from "@/components/reveal";
import { Photo } from "@/components/photo";
import { WaveLines, GrapevineLine, SailMark } from "@/components/coastal-motifs";

/**
 * Dish names verbatim from the owner's own menu (konobajaz.weebly.com/menu.html).
 * Prices are deliberately absent: the only published price list is from 06/2023
 * (dual EUR/Kn) and is three years stale — a wrong price is worse than none.
 * Opening hours are absent for the same reason: three sources, three answers,
 * and the owner's own site lists none.
 */
const MENU = [
  {
    hr: "Morski specijaliteti",
    en: "Seafood",
    items: [
      "Riblja plata „Jaz” (za 2 osobe)",
      "Bijela riba (brancin, orada…)",
      "Lignje s žara sa blitvom",
      "File brancina s žara sa blitvom",
      "Odrezak tune s žara sa blitvom",
      "Škampi „Buzara”",
      "Škarpina u bijelom vinu s palentom",
    ],
  },
  {
    hr: "Mesni specijaliteti",
    en: "Meat dishes",
    items: [
      "Kućna steak plata (za 2 osobe)",
      "Mesna plata s prženim krumpirom",
      "Biftek u umaku od gljiva",
      "Janjeći kotlet s povrćem",
      "Punjena piletina s pršutom",
      "Bečki odrezak s prženim krumpirom",
    ],
  },
  {
    hr: "Topla predjela",
    en: "Hot starters",
    items: [
      "Dagnje na domaće",
      "Crni rižot od sipe",
      "Rižoto sa škampima",
      "Pašta / rižot vegetariano",
      "Špageti bolognese",
    ],
  },
  {
    hr: "Hladna predjela i dječji meni",
    en: "Cold starters & kids",
    items: [
      "Dalmatinski pršut",
      "Paški sir",
      "Hladna riblja plata",
      "Dječja pileća prsa s prženim krumpirom",
      "Dječji bečki odrezak",
    ],
  },
];

const GALERIJA = [
  { src: "/img/konoba-jaz-ulaz.webp", alt: "Ulaz u Konobu Jaz s natpisom „konoba JAZ”" },
  { src: "/img/konoba-jaz-terasa-natkrivena.webp", alt: "Natkrivena terasa Konobe Jaz" },
  { src: "/img/konoba-jaz-terasa-zavjese.webp", alt: "Terasa Konobe Jaz s bijelim zavjesama" },
  { src: "/img/konoba-jaz-ulaz-loza.webp", alt: "Ulaz u konobu pod vinovom lozom" },
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

          <p className="text-label text-amber">Konoba · Zaton kod Nina</p>

          <h1 className="font-display mt-6 text-[clamp(3.5rem,14vw,9.5rem)] font-light leading-[0.88] tracking-[var(--tracking-display)] text-foreground">
            Jaz
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/80 md:text-xl">
            Konoba u Zatonu kod Nina, terasa u hladu stabla vinove loze,
            tridesetak metara od pješčane plaže. Otvoreni od 2000. godine.
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

          <ParallaxDrift speed={0.9} className="mt-16 w-full max-w-3xl md:mt-20">
            <Photo
              src="/img/konoba-jaz-terasa-more.webp"
              alt="Terasa Konobe Jaz sa suncobranima i pogledom na more"
              width={1100}
              height={619}
              priority
              sizes="(min-width: 768px) 62vw, 92vw"
            />
          </ParallaxDrift>

          <div className="mt-14 flex items-center gap-3 text-foreground/50">
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
                Ista konoba, ista terasa, od 2000.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-8 text-base leading-relaxed text-foreground/75 md:text-lg">
                Konoba Jaz radi u Zatonu kod Nina od 2000. godine. Interijer je
                drveni, uređen u tradicionalnom stilu, a terasa je velika i u
                hladu stabla vinove loze. Od pješčane plaže dijeli je tridesetak
                metara.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="mt-5 text-base leading-relaxed text-foreground/60">
                Nema pretjerane priče ni glazure — samo mjesto gdje se sjedi
                dulje nego što se planiralo.
              </p>
            </Reveal>

            <Reveal delay={0.24} className="mt-12 grid gap-5 sm:grid-cols-2">
              <Photo
                src="/img/konoba-jaz-terasa-loza.webp"
                alt="Terasa Konobe Jaz u hladu stabla vinove loze"
                width={1100}
                height={619}
                sizes="(min-width: 640px) 32vw, 92vw"
              />
              <Photo
                src="/img/konoba-jaz-interijer.webp"
                alt="Drveni interijer Konobe Jaz"
                width={1100}
                height={619}
                sizes="(min-width: 640px) 32vw, 92vw"
              />
            </Reveal>
          </div>
        </section>

        {/* ————— ZA STOLOM (kuhinja) ————— */}
        <section id="stol" className="relative w-full px-5 py-32 md:px-12 lg:px-24">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-label text-amber">Za stolom</p>
            <h2 className="font-display mt-4 text-4xl leading-tight text-foreground md:text-6xl">
              Riba, roštilj i jela ispod peke
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-foreground/70 md:text-lg">
              Kvalitetna riba, mesna jela, tijestenina i školjke, tradicionalna
              domaća jela ispod peke i velik izbor jela s roštilja. Uz to pizza,
              domaća vina i dječji meni.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mx-auto mt-14 max-w-3xl">
            <Photo
              src="/img/konoba-jaz-hobotnica-ispod-peke.webp"
              alt="Hobotnica ispod peke u Konobi Jaz"
              width={900}
              height={598}
              sizes="(min-width: 768px) 62vw, 92vw"
            />
          </Reveal>

          <div className="mx-auto mt-20 grid max-w-5xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 md:grid-cols-4">
            {MENU.map((group, i) => (
              <ParallaxDrift
                key={group.hr}
                speed={0.85 + (i % 3) * 0.12}
                className="flex flex-col gap-4"
              >
                <div>
                  <span className="font-display block text-xl text-foreground md:text-2xl">
                    {group.hr}
                  </span>
                  <span className="text-label text-foreground/45">{group.en}</span>
                </div>
                <ul className="flex flex-col gap-2.5 border-t border-foreground/10 pt-4">
                  {group.items.map((dish) => (
                    <li key={dish} className="text-sm leading-snug text-foreground/70">
                      {dish}
                    </li>
                  ))}
                </ul>
              </ParallaxDrift>
            ))}
          </div>

          <p className="mx-auto mt-14 max-w-xl text-center text-sm leading-relaxed text-foreground/50">
            Izbor iz jelovnika. Uz navedeno: juhe, salate i prilozi, deserti,
            pizza i domaća vina. Za cijene i današnju ponudu nazovite
            +385 98 169 5744.
          </p>
        </section>

        {/* ————— ZATON ————— */}
        <section id="zaton" className="relative w-full overflow-hidden px-5 py-32 md:px-12 lg:px-24">
          <ParallaxDrift speed={1.25} className="pointer-events-none absolute inset-x-0 bottom-0 text-bay-bright/30">
            <WaveLines className="h-40 w-full md:h-64" />
          </ParallaxDrift>

          <div className="mx-auto max-w-2xl md:mr-[14vw] md:ml-auto md:text-right">
            <Reveal>
              <p className="text-label text-bay-bright">Zaton kod Nina</p>
              <h2 className="font-display mt-4 text-4xl leading-tight text-foreground md:text-6xl">
                Između Nina i Zadra.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 text-base leading-relaxed text-foreground/75 md:text-lg">
                Konoba je na Šetalištu kneza Branimira 41, uz sam ulaz u Zaton
                Holiday Resort, tridesetak metara od pješčane plaže. Nin je 2 km
                dalje, Zadar 15 km. Mjesto ima pješčane i šljunčane plaže, čisto
                more i hlad borovih šuma. Parking je dostupan uz konobu.
              </p>
            </Reveal>
            <Reveal delay={0.18} className="mt-12">
              <Photo
                src="/img/konoba-jaz-terasa-suncobrani.webp"
                alt="Terasa Konobe Jaz sa suncobranima"
                width={1100}
                height={619}
                sizes="(min-width: 768px) 45vw, 92vw"
              />
            </Reveal>
          </div>
        </section>

        {/* ————— GALERIJA ————— */}
        <section id="galerija" className="relative w-full px-5 py-24 md:px-12 lg:px-24">
          <Reveal className="mx-auto max-w-5xl">
            <p className="text-label text-amber">Atmosfera</p>
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
              {GALERIJA.map((p) => (
                <Photo
                  key={p.src}
                  src={p.src}
                  alt={p.alt}
                  width={1100}
                  height={619}
                  sizes="(min-width: 768px) 22vw, 45vw"
                  className="aspect-[4/3]"
                />
              ))}
            </div>
          </Reveal>
        </section>

        {/* ————— KONTAKT ————— */}
        <footer id="kontakt" className="relative w-full px-5 pb-16 pt-24 md:px-12 lg:px-24">
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
              <address className="not-italic text-base leading-relaxed text-foreground/70">
                Šetalište kneza Branimira 41
                <br />
                23232 Zaton (Nin)
              </address>
              <a
                href="https://www.instagram.com/konoba_jaz/"
                target="_blank"
                rel="noreferrer"
                className="text-label text-foreground/60 transition-colors hover:text-bay-bright"
              >
                @konoba_jaz
              </a>
              <p className="text-sm text-foreground/45">
                Radno vrijeme se mijenja kroz sezonu — nazovite i provjerite za
                dan kada dolazite.
              </p>
            </div>
          </Reveal>

          <div className="mx-auto mt-24 flex max-w-4xl flex-col items-center justify-between gap-4 border-t border-foreground/10 pt-8 text-foreground/40 md:flex-row">
            <span className="text-label">Konoba Jaz — Zaton kod Nina</span>
            <span className="text-label">Otvorena od 2000.</span>
          </div>
        </footer>
      </main>
    </>
  );
}
