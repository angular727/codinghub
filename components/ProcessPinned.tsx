"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Process from "@/components/Process";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { t: "Discover", d: "We study your operations, goals and bottlenecks to define what really needs to be built.", img: "/photos/meeting.jpg" },
  { t: "Design", d: "Clear architecture and refined interfaces that your team and customers enjoy using.", img: "/photos/website.jpg" },
  { t: "Build", d: "Full-stack engineering on scalable cloud foundations: web, mobile, IoT and AI.", img: "/photos/webapp.jpg" },
  { t: "Automate & grow", d: "We deploy, support and keep improving, so your processes run themselves.", img: "/photos/automation.jpg" },
];

// Pinned storytelling: photo, title and copy change as you scroll
export default function ProcessPinned() {
  const section = useRef<HTMLElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      const q = gsap.utils.selector(section.current);
      const tl = gsap.timeline({ defaults: { ease: "none" }, scrollTrigger: { trigger: section.current, pin: true, scrub: 0.7, start: "top top", end: "+=320%", anticipatePin: 1 } });
      tl.to(q(".pp-bar"), { scaleX: 1, duration: 3 }, 0);
      steps.forEach((_, i) => {
        if (i === 0) return;
        const t = i - 0.0;
        tl.to(q(".pp-img")[i - 1], { opacity: 0, scale: 1.1, duration: 0.8 }, t - 0.4)
          .fromTo(q(".pp-img")[i], { opacity: 0, scale: 1.12 }, { opacity: 1, scale: 1, duration: 0.8 }, t - 0.4)
          .to(q(".pp-t")[i - 1], { yPercent: -70, opacity: 0, duration: 0.45 }, t - 0.4)
          .fromTo(q(".pp-t")[i], { yPercent: 70, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.45 }, t - 0.1)
          .to(q(".pp-d")[i - 1], { opacity: 0, y: -20, duration: 0.35 }, t - 0.4)
          .fromTo(q(".pp-d")[i], { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.45 }, t - 0.05)
          .to(q(".pp-n")[i - 1], { opacity: 0.3, duration: 0.2 }, t - 0.2)
          .to(q(".pp-n")[i], { opacity: 1, duration: 0.2 }, t - 0.2);
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <div>
      <div className="md:hidden"><Process /></div>
      <section ref={section} className="relative hidden h-screen overflow-hidden md:block">
        {steps.map((s, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={s.t} src={s.img} alt="" loading="lazy" className="pp-img absolute inset-0 h-full w-full object-cover" style={{ opacity: i === 0 ? 1 : 0 }} />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60" />

        <div className="relative mx-auto flex h-full max-w-[1600px] flex-col justify-between px-10 pb-12 pt-32">
          <p className="t-eyebrow flex items-center gap-3 text-cream/70"><span className="h-2 w-2 rounded-full bg-lime" />How we work</p>

          <div className="grid items-end gap-10 md:grid-cols-12">
            <div className="relative h-[26vh] md:col-span-8">
              {steps.map((s, i) => (
                <h3 key={s.t} className="pp-t t-hero absolute inset-x-0 bottom-0" style={{ opacity: i === 0 ? 1 : 0 }}>
                  <span className="acc mr-4 text-[0.55em]">0{i + 1}</span>{s.t}
                </h3>
              ))}
            </div>
            <div className="relative h-24 md:col-span-3 md:col-start-10">
              {steps.map((s, i) => (
                <p key={s.t} className="pp-d absolute inset-x-0 top-0 text-[15px] leading-relaxed text-cream/75" style={{ opacity: i === 0 ? 1 : 0 }}>{s.d}</p>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 h-px w-full bg-cream/20"><div className="pp-bar h-full origin-left scale-x-0 bg-lime" /></div>
            <div className="flex justify-between">
              {steps.map((s, i) => (
                <span key={s.t} className="pp-n t-eyebrow" style={{ opacity: i === 0 ? 1 : 0.3 }}>0{i + 1} · {s.t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
