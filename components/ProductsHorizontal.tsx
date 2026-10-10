"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { products, photo } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function ProductsHorizontal() {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      const t = track.current!;
      const dist = () => t.scrollWidth - window.innerWidth;
      gsap.to(t, {
        x: () => -dist(), ease: "none",
        scrollTrigger: { trigger: section.current, pin: true, scrub: 1, start: "top top", end: () => "+=" + dist(), invalidateOnRefresh: true, anticipatePin: 1,
          onUpdate: (self) => { gsap.set(".prod-progress", { scaleX: self.progress }); } },
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <div>
    <section ref={section} className="relative overflow-hidden bg-cream text-ink md:h-screen">
      <div className="flex h-full flex-col justify-center py-20 md:py-0">
        <div ref={track} className="no-scrollbar flex items-center gap-6 overflow-x-auto px-6 md:w-max md:gap-10 md:overflow-visible md:px-[6vw]">
          <div className="w-[82vw] shrink-0 md:w-[30vw]">
            <p className="t-eyebrow mb-6 flex items-center gap-3 text-ink/50"><span className="h-2 w-2 rounded-full bg-ink" />Products</p>
            <h2 className="t-h1">Our <span className="font-serif font-normal italic text-[1.1em]">products</span></h2>
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-ink/60">Industry solutions built, deployed and trusted by real organizations. Scroll to explore.</p>
          </div>

          {products.slice(0, 4).map((p, i) => (
            <Link key={p.slug} href={`/products/${p.slug}`} data-cursor="View" className="group w-[72vw] shrink-0 md:w-[24vw]">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[20px] bg-ink">
                <Image src={photo(p.slug)} alt={p.t} fill sizes="(min-width:768px) 24vw, 72vw" className="object-cover transition duration-[900ms] group-hover:scale-105" />
                <span className="t-eyebrow absolute left-4 top-4 rounded-full bg-cream px-3 py-1.5 text-[10px] font-medium">{p.tag}</span>
                <span className="absolute bottom-4 right-4 font-display text-4xl font-medium leading-none tracking-[-0.05em] text-cream mix-blend-difference">0{i + 1}</span>
              </div>
              <h3 className="t-h3 mt-5">{p.t}</h3>
              <p className="mt-1.5 line-clamp-2 max-w-sm text-sm text-ink/60">{p.d}</p>
            </Link>
          ))}

          <div className="grid w-[70vw] shrink-0 place-items-center md:w-[26vw]">
            <Link href="/products" data-magnetic data-cursor="Go" className="grid h-44 w-44 place-items-center rounded-full bg-ink text-cream transition-colors duration-300 hover:bg-lime hover:text-ink md:h-52 md:w-52">
              <span className="text-center text-lg font-medium leading-tight">All<br />products<span className="mt-1 block text-3xl">↗</span></span>
            </Link>
          </div>
        </div>
        <div className="absolute inset-x-6 bottom-8 hidden h-px bg-ink/15 md:block md:inset-x-[6vw]"><div className="prod-progress h-full origin-left scale-x-0 bg-ink" /></div>
      </div>
    </section>
    </div>
  );
}
