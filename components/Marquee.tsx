"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const items = ["Web Applications", "Mobile Apps", "IoT", "AI Integration", "Websites", "Automation"];

// Marquee that skews with scroll velocity
export default function Marquee({ rev = false }: { rev?: boolean }) {
  const band = useRef<HTMLDivElement>(null);
  const row = [...items, ...items, ...items, ...items];

  useEffect(() => {
    const skew = gsap.quickTo(band.current, "skewX", { duration: 0.5, ease: "power3" });
    const st = ScrollTrigger.create({ onUpdate: (self) => skew(gsap.utils.clamp(-9, 9, self.getVelocity() / -260)) });
    const id = setInterval(() => skew(0), 120);
    return () => { st.kill(); clearInterval(id); };
  }, []);

  return (
    <section className="overflow-hidden bg-lime py-5 text-ink md:py-6">
      <div ref={band}>
        <div className={`marquee ${rev ? "marquee-rev" : ""}`}>
          {row.map((t, i) => (
            <span key={i} className="flex items-center whitespace-nowrap font-display text-3xl font-medium tracking-[-0.04em] md:text-5xl">
              <span className="mx-5 md:mx-8">{t}</span>
              <span className="font-serif text-2xl italic md:text-4xl">✺</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
