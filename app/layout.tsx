import type { Metadata } from "next";
import { Fraunces, Manrope, Geist_Mono } from "next/font/google";
import { SmoothScroll } from "@/components/smooth-scroll";
import { GradientCanvas } from "@/components/gradient-canvas";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Konoba Jaz — Zaton",
  description:
    "Obiteljska konoba u Zatonu kraj Zadra, otvorena od 2000. Terasa u hladu vinove loze, tridesetak metara od pješčane plaže. Riba, meso, tjestenina i domaća vina.",
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
        <GradientCanvas />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
