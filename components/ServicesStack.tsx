"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Words } from "@/components/Words";
import { services } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesStack({ heading = true }: { heading?: boolean }) {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".svc-card");
      const inners = gsap.utils.toArray<HTMLElement>(".svc-inner");
      cards.forEach((_, i) => {
        if (i === cards.length - 1) return;
        gsap.to(inners[i], { scale: 0.92, opacity: 0.4, ease: "none", scrollTrigger: { trigger: cards[i + 1], start: "top 88%", end: "top 12%", scrub: true } });
      });
      gsap.utils.toArray<HTMLElement>(".svc-img").forEach((el) => {
        gsap.fromTo(el, { yPercent: -7 }, { yPercent: 7, ease: "none", scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true } });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative px-4 pb-20 md:px-10">
      <div className="mx-auto max-w-[1600px]">
        {heading && (
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6 px-2 md:mb-20">
            <h2 data-split className="t-h1"><Words text="What we" /> <Words text="do" className="acc" /></h2>
            <p data-reveal className="max-w-xs text-sm leading-relaxed text-cream/60">Six integrated capabilities, delivered by one team: from the first idea to a scalable solution.</p>
          </div>
        )}
        {services.map((s, i) => (
          <article key={s.t} className="svc-card sticky top-[9vh] mb-[7vh] last:mb-0">
            <div className="svc-inner origin-top overflow-hidden rounded-[26px] border border-cream/10 bg-card">
              <div className="grid md:h-[74vh] md:grid-cols-12">
                <div className="flex flex-col justify-between p-7 md:col-span-5 md:p-12">
                  <p className="t-eyebrow flex items-center gap-3 text-mute"><span className="font-display text-sm text-lime">0{i + 1}</span>/ 06</p>
                  <div className="mt-10 md:mt-0">
                    <h3 className="t-h2">{s.t}</h3>
                    <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-cream/60">{s.d}</p>
                    <Link href="/contact" data-magnetic className="mt-7 inline-flex items-center gap-3 rounded-full border border-cream/25 px-5 py-2.5 text-sm transition hover:border-lime hover:bg-lime hover:text-ink">Discuss this service <span>↗</span></Link>
                  </div>
                </div>
                <Link href={heading ? "/services" : "/contact"} aria-label={s.t} data-cursor="View" className="relative block h-[40vh] overflow-hidden md:col-span-7 md:h-auto">
                  <div className="svc-img absolute inset-x-0 -top-[7%] h-[114%]">
                    <Image src={s.img} alt={s.t} fill sizes="(min-width:768px) 58vw, 100vw" className="object-cover" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-card/60 via-transparent to-transparent" />
                </Link>
              </div>
            </div>
          </article>
        ))}
        {heading && (
          <div className="mt-14 flex justify-center">
            <Link href="/services" data-magnetic className="inline-flex items-center gap-3 rounded-full border border-cream/25 px-7 py-3.5 text-sm transition hover:border-lime hover:bg-lime hover:text-ink">View all services <span>↗</span></Link>
          </div>
        )}
      </div>
    </section>
  );
}
