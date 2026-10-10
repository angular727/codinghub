"use client";
import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export default function Experience({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const ringLabel = useRef<HTMLSpanElement>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const transitioning = useRef(false);
  const pathname = usePathname();
  const router = useRouter();

  // hero text entrance (first load + after each page transition)
  const playHero = () => {
    gsap.utils.toArray<HTMLElement>(".hero-split").forEach((el) => {
      gsap.set(el, { visibility: "visible" });
      gsap.from(el.querySelectorAll(".w-in"), { yPercent: 120, duration: 1.2, stagger: 0.045, ease: "expo.out" });
    });
    gsap.utils.toArray<HTMLElement>(".hero-fade").forEach((el, i) => {
      gsap.set(el, { visibility: "visible" });
      gsap.from(el, { y: 30, opacity: 0, duration: 1, delay: 0.3 + i * 0.07, ease: "power3.out" });
    });
  };

  // Smooth scroll, cursor, magnetic buttons, link interception (once)
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.085 });
    lenisRef.current = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (t: number) => lenis.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const cleanups: (() => void)[] = [];
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      const dx = gsap.quickTo(dot.current, "x", { duration: 0.08 }), dy = gsap.quickTo(dot.current, "y", { duration: 0.08 });
      const rx = gsap.quickTo(ring.current, "x", { duration: 0.5, ease: "power3" }), ry = gsap.quickTo(ring.current, "y", { duration: 0.5, ease: "power3" });
      const move = (e: MouseEvent) => { dx(e.clientX); dy(e.clientY); rx(e.clientX); ry(e.clientY); };
      const over = (e: MouseEvent) => {
        const t = e.target as HTMLElement;
        const cur = t.closest<HTMLElement>("[data-cursor]");
        const hot = t.closest("a,button,input,textarea,select");
        if (ringLabel.current) ringLabel.current.textContent = cur?.dataset.cursor || "";
        gsap.to(ring.current, { scale: cur ? 2.4 : hot ? 1.7 : 1, backgroundColor: cur ? "#d7ff2f" : "rgba(215,255,47,0)", borderColor: cur ? "#d7ff2f" : "rgba(236,232,225,.6)", duration: 0.35, ease: "power3" });
        gsap.to(dot.current, { opacity: cur ? 0 : 1, duration: 0.2 });
      };
      window.addEventListener("mousemove", move);
      window.addEventListener("mouseover", over);
      cleanups.push(() => { window.removeEventListener("mousemove", move); window.removeEventListener("mouseover", over); });
    }

    const mag = (e: MouseEvent) => {
      document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
        const dist = Math.hypot(e.clientX - cx, e.clientY - cy);
        if (dist < Math.max(r.width, r.height)) gsap.to(el, { x: (e.clientX - cx) * 0.3, y: (e.clientY - cy) * 0.3, duration: 0.5, ease: "power3" });
        else gsap.to(el, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1,.4)" });
      });
    };
    window.addEventListener("mousemove", mag);
    cleanups.push(() => window.removeEventListener("mousemove", mag));

    // page transition: intercept internal links
    const click = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as HTMLElement).closest<HTMLAnchorElement>("a[href]");
      if (!a || a.target === "_blank" || a.hasAttribute("download")) return;
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin) return;
      if (url.pathname === location.pathname) { if (url.hash) return; e.preventDefault(); e.stopPropagation(); lenis.scrollTo(0); return; }
      e.preventDefault(); e.stopPropagation();
      transitioning.current = true;
      router.push(url.pathname + url.search + url.hash);
    };
    document.addEventListener("click", click, true);
    cleanups.push(() => document.removeEventListener("click", click, true));

    return () => { cleanups.forEach((f) => f()); gsap.ticker.remove(tick); lenis.destroy(); };
  }, [router]);

  // per-page scroll animations (re-run on route change)
  useEffect(() => {
    window.scrollTo(0, 0);
    lenisRef.current?.scrollTo(0, { immediate: true });
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, { y: 44, opacity: 0, duration: 1, ease: "power3.out", delay: Number(el.dataset.delay || 0), scrollTrigger: { trigger: el, start: "top 92%" } });
      });
      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
        const o = { v: 0 };
        gsap.to(o, { v: Number(el.dataset.count), duration: 2, ease: "power2.out", scrollTrigger: { trigger: el, start: "top 94%", once: true }, onUpdate: () => { el.textContent = String(Math.round(o.v)); } });
      });
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        gsap.fromTo(el, { yPercent: -9 }, { yPercent: 9, ease: "none", scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true } });
      });
      gsap.utils.toArray<HTMLElement>("[data-clip]").forEach((el) => {
        gsap.from(el, { clipPath: "inset(0 0 100% 0)", duration: 1.5, ease: "expo.out", scrollTrigger: { trigger: el, start: "top 88%" } });
      });
      gsap.utils.toArray<HTMLElement>("[data-split]").forEach((el) => {
        gsap.from(el.querySelectorAll(".w-in"), { yPercent: 120, duration: 1.1, stagger: 0.045, ease: "expo.out", scrollTrigger: { trigger: el, start: "top 88%" } });
      });
      gsap.utils.toArray<HTMLElement>("[data-words]").forEach((el) => {
        gsap.to(el.querySelectorAll(".w-op"), { opacity: 1, stagger: 0.1, ease: "none", scrollTrigger: { trigger: el, start: "top 80%", end: "bottom 50%", scrub: true } });
      });
      gsap.to(".progress", { scaleX: 1, ease: "none", scrollTrigger: { scrub: 0.2, start: 0, end: "max" } });
    }, root);

    lenisRef.current?.start();
    playHero();
    transitioning.current = false;

    const t = setTimeout(() => ScrollTrigger.refresh(), 300);
    return () => { clearTimeout(t); ctx.revert(); };
  }, [pathname]);

  return (
    <div ref={root}>
      <div className="progress fixed left-0 top-0 z-[95] h-[2px] w-full origin-left scale-x-0 bg-lime" />

      <div ref={dot} className="pointer-events-none fixed left-0 top-0 z-[120] hidden h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime [@media(hover:hover)_and_(pointer:fine)]:block" />
      <div ref={ring} className="pointer-events-none fixed left-0 top-0 z-[119] hidden h-9 w-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-cream/60 [@media(hover:hover)_and_(pointer:fine)]:grid">
        <span ref={ringLabel} className="text-[5px] font-bold uppercase tracking-wider text-ink" />
      </div>

      {children}
    </div>
  );
}
