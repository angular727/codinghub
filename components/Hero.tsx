"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Words } from "@/components/Words";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const wrap = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // content drifts up and fades as you scroll away
      gsap.to(".hero-body", { yPercent: -12, opacity: 0.1, ease: "none", scrollTrigger: { trigger: wrap.current, start: "top top", end: "bottom top", scrub: true } });
      // photo composition moves at a different speed (depth)
      gsap.to(".hero-photo", { yPercent: 10, ease: "none", scrollTrigger: { trigger: wrap.current, start: "top top", end: "bottom top", scrub: true } });
      gsap.to(".hero-chip", { yPercent: -30, ease: "none", scrollTrigger: { trigger: wrap.current, start: "top top", end: "bottom top", scrub: true } });
    }, wrap);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={wrap} className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden px-6 pb-8 pt-28 md:px-10">
      {/* ambient background */}
      <div className="absolute inset-0 z-0 [background-image:linear-gradient(rgba(236,232,225,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(236,232,225,.04)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(ellipse_70%_70%_at_70%_40%,#000_20%,transparent_75%)]" />
      <div className="absolute right-[-10vw] top-[8vh] z-0 h-[60vw] w-[60vw] max-h-[780px] max-w-[780px] rounded-full bg-[radial-gradient(circle,rgba(215,255,47,.16),transparent_62%)]" />

      {/* photo composition (desktop) */}
      <div className="hero-photo absolute bottom-[12vh] right-[5vw] top-[14vh] z-10 hidden w-[34vw] max-w-[560px] lg:block">
        <div className="hero-fade absolute inset-0 -translate-x-4 translate-y-4 rounded-[30px] border border-lime/40" />
        <div className="hero-fade relative h-full overflow-hidden rounded-[30px] border border-cream/10 shadow-2xl shadow-black/60">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img data-parallax src="/photos/hero.jpg" alt="The CodingHub team at work" className="absolute inset-x-0 -top-[7%] h-[114%] w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-ink/10" />
        </div>

        <div className="hero-fade hero-chip absolute -left-10 top-10 flex items-center gap-2.5 rounded-full border border-cream/15 bg-ink/70 px-4 py-2.5 text-xs backdrop-blur-xl">
          <span className="h-2 w-2 rounded-full bg-lime [animation:blink_1.6s_infinite]" />Cloud · Mobile · IoT · AI
        </div>

        <div className="hero-fade hero-chip absolute -left-14 bottom-24 w-44 rounded-2xl border border-cream/15 bg-ink/70 p-4 backdrop-blur-xl">
          <p className="font-display text-4xl font-medium leading-none tracking-[-0.05em]">9</p>
          <p className="mt-2 text-xs text-cream/65">Industry products, ready to deploy</p>
        </div>

        <div className="hero-fade hero-chip absolute -right-6 bottom-6 w-40 rounded-2xl border border-cream/15 bg-ink/70 p-4 backdrop-blur-xl">
          <p className="font-display text-3xl font-medium leading-none tracking-[-0.05em]">24<span className="acc">/7</span></p>
          <p className="mt-2 text-xs text-cream/65">Cloud-based availability</p>
        </div>

        <Link href="/contact" aria-label="Get started" data-magnetic data-cursor="Go" className="hero-fade group absolute -right-8 -top-8 grid h-28 w-28 place-items-center rounded-full bg-lime text-ink">
          <svg viewBox="0 0 120 120" className="absolute inset-0" style={{ animation: "spin-slow 16s linear infinite" }}>
            <defs><path id="hc" d="M60 60 m-44 0 a44 44 0 1 1 88 0 a44 44 0 1 1 -88 0" /></defs>
            <text fill="currentColor" fontSize="8.6" letterSpacing="1.2" fontWeight="600"><textPath href="#hc" textLength="272" lengthAdjust="spacing">GET STARTED TODAY • GET STARTED TODAY •</textPath></text>
          </svg>
          <span className="text-2xl transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
        </Link>
      </div>

      {/* photo (mobile / tablet) */}
      <div className="hero-fade relative z-10 mb-8 h-[34vh] overflow-hidden rounded-3xl border border-cream/10 lg:hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/photos/hero.jpg" alt="The CodingHub team at work" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
      </div>

      <div className="hero-body relative z-10 mx-auto w-full max-w-[1600px]">
        <p className="hero-fade t-eyebrow mb-6 flex items-center gap-3 text-cream/70">
          <span className="h-2 w-2 rounded-full bg-lime [animation:blink_1.6s_infinite]" />Welcome to CodingHub
        </p>
        <h1 className="hero-split t-hero max-w-[16ch]">
          <Words text="Empowering businesses through" /> <Words text="innovative" className="acc" /> <Words text="technology." />
        </h1>
        <div className="mt-10 grid items-end gap-8 border-t border-cream/15 pt-6 md:grid-cols-12">
          <p className="hero-fade max-w-md text-[15px] leading-relaxed text-cream/65 md:col-span-5">
            Cloud web apps, cross-platform mobile apps, IoT, AI and business automation, built to help your organization automate its processes and grow.
          </p>
          <div className="hero-fade flex flex-wrap gap-3 md:col-span-4 md:col-start-8">
            <Link href="/contact" data-magnetic data-cursor="Go" className="rounded-full bg-lime px-7 py-3.5 text-sm font-medium text-ink transition hover:bg-cream">Start a project</Link>
            <Link href="/products" data-magnetic className="rounded-full border border-cream/30 px-7 py-3.5 text-sm font-medium transition hover:border-cream hover:bg-cream hover:text-ink">Explore products</Link>
          </div>
          <p className="hero-fade t-eyebrow hidden items-center justify-end gap-3 text-cream/60 md:col-span-1 md:flex">Scroll <span className="block h-8 w-px bg-cream/40" /></p>
        </div>
      </div>
    </section>
  );
}
