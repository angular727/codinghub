import { Words } from "@/components/Words";

const steps = [
  { t: "Discover", d: "We study your operations, goals and bottlenecks to define what really needs to be built.", icon: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></> },
  { t: "Design", d: "Clear architecture and refined interfaces that your team and customers enjoy using.", icon: <><path d="M12 19l7-7-3-3-7 7-1 4Z" /><path d="m15 6 3 3M3 21l4-1" /></> },
  { t: "Build", d: "Full-stack engineering on scalable cloud foundations: web, mobile, IoT and AI.", icon: <path d="m8 8-5 4 5 4M16 8l5 4-5 4M14 5l-4 14" /> },
  { t: "Automate & grow", d: "We deploy, support and keep improving, so your processes run themselves.", icon: <><path d="M3 17l6-6 4 4 8-8" /><path d="M15 7h6v6" /></> },
];

export default function Process() {
  return (
    <section className="wrap py-20 md:py-28">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6 md:mb-16">
        <div>
          <p className="t-eyebrow mb-6 flex items-center gap-3 text-mute"><span className="h-2 w-2 rounded-full bg-lime" />Our process</p>
          <h2 className="t-h1"><Words text="How we" /> <Words text="work" className="acc" /></h2>
        </div>
        <p className="max-w-xs text-sm leading-relaxed text-cream/60">A proven, transparent path from first idea to a system your team relies on every day.</p>
      </div>

      <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <li key={s.t} data-reveal data-delay={i * 0.06} className="group relative rounded-[20px] border border-cream/10 bg-card p-7 transition duration-300 hover:border-lime/50">
            <div className="flex items-center justify-between">
              <span className="grid h-12 w-12 place-items-center rounded-xl border border-cream/10 bg-ink text-lime">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{s.icon}</svg>
              </span>
              <span className="font-display text-5xl font-medium leading-none tracking-[-0.05em] text-cream/10 transition group-hover:text-lime/30">0{i + 1}</span>
            </div>
            <h3 className="t-h3 mt-10">{s.t}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-cream/60">{s.d}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
