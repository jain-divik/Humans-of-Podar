import type { Metadata } from "next";
import { Domine, Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const domine = Domine({ subsets: ["latin"], variable: "--font-domine", display: "swap" });
const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  title: { default: "We Hear You — Humans of Podar", template: "%s — Humans of Podar" },
  description: "A student-led space for expression, connection and community at R.N. Podar School, Santacruz.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${domine.variable} ${geist.variable} ${mono.variable}`}>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
