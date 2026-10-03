import { Words } from "@/components/Words";

const steps = [
  { t: "Discover", d: "We study your operations, goals and bottlenecks to define what really needs to be built." },
  { t: "Design", d: "Clear architecture and refined interfaces that your team and customers enjoy using." },
  { t: "Build", d: "Full-stack engineering on scalable cloud foundations: web, mobile, IoT and AI." },
  { t: "Automate & grow", d: "We deploy, support and keep improving, so your processes run themselves." },
];

export default function Process() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-40">
      <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
        <h2 data-split className="t-h1"><Words text="How we" /> <Words text="work" className="acc" /></h2>
        <p data-reveal className="max-w-xs text-sm text-cream/60">A proven path from idea to impact.</p>
      </div>
      <ul className="border-t border-cream/15">
        {steps.map((s, i) => (
          <li key={s.t} data-reveal className="group grid grid-cols-12 items-baseline gap-4 border-b border-cream/15 py-8 transition-all duration-500 hover:pl-4 md:py-10">
            <span className="col-span-2 font-display text-base text-lime md:col-span-1">0{i + 1}</span>
            <h3 className="t-h2 col-span-10 transition group-hover:text-lime md:col-span-6">{s.t}</h3>
            <p className="col-span-10 col-start-3 text-sm leading-relaxed text-cream/60 md:col-span-4 md:col-start-9">{s.d}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
