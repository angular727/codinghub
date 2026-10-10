import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Experience from "@/components/Experience";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const instrument = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-instrument" });

export const metadata: Metadata = {
  title: { default: "CodingHub | Innovative Technology Solutions", template: "%s | CodingHub" },
  description: "CodingHub builds cloud web apps, mobile apps, IoT, AI and automation solutions that help businesses grow.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${instrument.variable}`}>
      <body>
        <Experience>
          <a href="#main" className="sr-only z-[200] rounded-full bg-lime px-5 py-3 text-sm font-medium text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Skip to content</a>
          <Nav />
          <main id="main">{children}</main>
          <Footer />
          <WhatsAppButton />
        </Experience>
      </body>
    </html>
  );
}
