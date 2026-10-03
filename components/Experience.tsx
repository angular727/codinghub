"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const GREETINGS = ["Hello", "Hola", "Bonjour", "مرحبا", "你好", "Namaste", "Ciao", "Salaam", "Hallo"];
const LABELS: Record<string, string> = { "/": "Home", "/services": "Services", "/products": "Products", "/projects": "Projects", "/about": "About", "/contact": "Contact" };

export default function Experience({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  const loader = useRef<HTMLDivElement>(null);
  const curtain = useRef<HTMLDivElement>(null);
  const curtainLabel = useRef<HTMLParagraphElement>(null);
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const ringLabel = useRef<HTMLSpanElement>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const transitioning = useRef(false);
  const [count, setCount] = useState(0);
  const [greet, setGreet] = useState(0);
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
    lenis.stop();

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
      if (transitioning.current) return;
      transitioning.current = true;
      const base = "/" + url.pathname.split("/")[1];
      if (curtainLabel.current) curtainLabel.current.textContent = LABELS[url.pathname] || LABELS[base] || "CodingHub";
      lenis.stop();
      gsap.timeline()
        .set(curtain.current, { display: "flex", yPercent: 100 })
        .to(curtain.current, { yPercent: 0, duration: 0.75, ease: "expo.inOut" })
        .fromTo(curtainLabel.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }, "-=0.35")
        .add(() => router.push(url.pathname + url.search + url.hash));
    };
    document.addEventListener("click", click, true);
    cleanups.push(() => document.removeEventListener("click", click, true));

    return () => { cleanups.forEach((f) => f()); gsap.ticker.remove(tick); lenis.destroy(); };
  }, [router]);

  // preloader (first load only)
  useEffect(() => {
    const iv = setInterval(() => setGreet((g) => (g + 1) % GREETINGS.length), 230);
    const c = { v: 0 };
    const ctx = gsap.context(() => {
      gsap.timeline({ delay: 0.2 })
        .to(c, { v: 100, duration: 2.2, ease: "power2.inOut", onUpdate: () => setCount(Math.round(c.v)) })
        .to(".loader-bar", { scaleX: 1, duration: 2.2, ease: "power2.inOut" }, 0)
        .add(() => clearInterval(iv))
        .to(".loader-content", { y: -30, opacity: 0, duration: 0.5, ease: "power2.in" })
        .to(loader.current, { yPercent: -100, borderBottomLeftRadius: "50% 10vw", borderBottomRightRadius: "50% 10vw", duration: 1.1, ease: "expo.inOut" }, "-=0.1")
        .add(() => { lenisRef.current?.start(); playHero(); }, "-=0.55")
        .set(loader.current, { display: "none" });
    }, root);
    return () => { clearInterval(iv); ctx.revert(); };
  }, []);

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

    if (transitioning.current) {
      gsap.timeline({ delay: 0.25 })
        .to(curtain.current, { yPercent: -100, duration: 0.9, ease: "expo.inOut" })
        .add(() => { lenisRef.current?.start(); playHero(); }, "-=0.55")
        .set(curtain.current, { display: "none" })
        .add(() => { transitioning.current = false; });
    }

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

      <div ref={curtain} className="fixed inset-0 z-[96] hidden items-center justify-center bg-lime text-ink">
        <p ref={curtainLabel} className="font-display text-[8vw] font-medium tracking-[-0.045em]" />
      </div>

      <div ref={loader} className="fixed inset-0 z-[100] bg-ink text-cream">
        <div className="loader-content flex h-full flex-col justify-between p-6 md:p-12">
          <p className="t-eyebrow text-mute">CodingHub · Software company</p>
          <div className="flex items-center gap-4">
            <span className="h-2.5 w-2.5 rounded-full bg-lime" />
            <p dir="auto" className="font-display text-[9vw] font-medium leading-none tracking-[-0.045em] md:text-[5vw]">{GREETINGS[greet]}</p>
          </div>
          <div>
            <div className="mb-4 h-px w-full overflow-hidden bg-cream/15"><div className="loader-bar h-full origin-left scale-x-0 bg-lime" /></div>
            <div className="flex items-end justify-between">
              <p className="max-w-[16rem] text-sm text-mute">Empowering businesses through innovative technology.</p>
              <p className="font-display text-5xl font-medium tabular-nums leading-none tracking-[-0.05em] md:text-7xl">{count}</p>
            </div>
          </div>
        </div>
      </div>

      {children}
    </div>
  );
}
