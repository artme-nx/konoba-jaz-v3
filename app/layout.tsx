import type { Metadata } from "next";
import { Fraunces, Manrope, Geist_Mono } from "next/font/google";
import { SmoothScroll } from "@/components/smooth-scroll";
import { GradientCanvas } from "@/components/gradient-canvas";
import "./globals.css";

// latin-ext carries č ć ž š đ — the menu is full of them.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
  axes: ["opsz", "SOFT", "WONK"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE = process.env.NODE_ENV === "production" ? "/konoba-jaz-v3" : "";

export const metadata: Metadata = {
  title: "Konoba Jaz — Zaton kod Nina",
  description:
    "Konoba Jaz, Šetalište kneza Branimira 41, 23232 Zaton kod Nina — otvorena od 2000. Terasa u hladu stabla vinove loze, tridesetak metara od pješčane plaže. Riba, roštilj, jela ispod peke.",
  icons: {
    icon: `${BASE}/img/konoba-jaz-logo-sq.png`,
    apple: `${BASE}/img/konoba-jaz-logo-sq.png`,
  },
};

/**
 * Only fields verified on the owner's own site (konobajaz.weebly.com) or its
 * map pin. No openingHours (three sources, three answers), no priceRange,
 * no aggregateRating — omitting beats guessing.
 */
const JSONLD = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Konoba Jaz",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Šetalište kneza Branimira 41",
    postalCode: "23232",
    addressLocality: "Zaton",
    addressRegion: "Zadarska županija",
    addressCountry: "HR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 44.2271518,
    longitude: 15.1688526,
  },
  telephone: "+385 98 169 5744",
  email: "Andrijap1110@yahoo.com",
  servesCuisine: ["Dalmatinska", "Mediteranska", "Riba i plodovi mora"],
  foundingDate: "2000",
  sameAs: ["https://www.instagram.com/konoba_jaz/", "https://konobajaz.weebly.com/"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="hr"
      className={`${fraunces.variable} ${manrope.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSONLD) }}
        />
        <GradientCanvas />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
