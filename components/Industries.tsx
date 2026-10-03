"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Words } from "@/components/Words";
import { photo } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

const industries = [
  { t: "Healthcare", s: "patient-care-system" },
  { t: "Retail & Distribution", s: "point-of-sale-system" },
  { t: "Pharmacy", s: "medistore" },
  { t: "Food & Hospitality", s: "restaurant-management" },
  { t: "Laboratories", s: "lab-management-system" },
  { t: "Public Service", s: "complaints-management-system" },
  { t: "Education", s: "university-access-attendance" },
  { t: "E-Commerce", s: "grocery-store-website" },
];

// Rows light up and their photo expands as each one reaches the centre of the screen
export default function Industries() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const w = window.innerWidth < 768 ? 84 : 168;
      gsap.utils.toArray<HTMLElement>(".ind-row").forEach((row) => {
        const txt = row.querySelector(".ind-txt");
        const img = row.querySelector(".ind-img");
        const tl = gsap.timeline({ scrollTrigger: { trigger: row, start: "top 78%", end: "bottom 30%", scrub: 0.6 } });
        tl.fromTo(txt, { opacity: 0.16 }, { opacity: 1, duration: 1, ease: "none" })
          .fromTo(img, { width: 0, opacity: 0 }, { width: w, opacity: 1, duration: 1, ease: "none" }, 0)
          .to(txt, { opacity: 0.16, duration: 1, ease: "none" }, 2)
          .to(img, { width: 0, opacity: 0, duration: 1, ease: "none" }, 2);
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-40">
      <div className="mb-16 grid gap-6 md:grid-cols-12">
        <p data-reveal className="t-eyebrow flex items-start gap-3 text-mute md:col-span-3"><span className="mt-1 h-2 w-2 rounded-full bg-lime" />Industries we serve</p>
        <h2 data-split className="t-h1 md:col-span-9"><Words text="Software for" /> <Words text="every kind of" className="acc" /> <Words text="business." /></h2>
      </div>
      <ul>
        {industries.map((x, i) => (
          <li key={x.t} className="ind-row flex items-center gap-4 border-t border-cream/10 py-5 last:border-b md:gap-8 md:py-7">
            <span className="w-8 shrink-0 text-xs text-mute md:w-12">0{i + 1}</span>
            <h3 className="ind-txt t-h1 flex items-center">{x.t}</h3>
            <span className="ind-img ml-2 inline-block h-12 shrink-0 overflow-hidden rounded-full md:h-20" style={{ width: 0, opacity: 0 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={photo(x.s)} alt="" loading="lazy" className="h-full w-full object-cover" />
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
