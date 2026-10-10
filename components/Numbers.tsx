import Image from "next/image";

const stats = [
  { n: "6", s: "", l: "Core service lines", d: "From web and mobile to IoT, AI and automation." },
  { n: "9", s: "", l: "Industry products", d: "Ready-to-deploy solutions for real organizations." },
  { n: "3", s: "", l: "Platforms", d: "Web, mobile and IoT, working together." },
  { n: "24", s: "/7", l: "Cloud availability", d: "Secure hosting with ongoing support." },
];

export default function Numbers() {
  return (
    <section className="relative overflow-hidden border-y border-cream/10 py-20 md:py-28">
      <Image src="/photos/city.jpg" alt="" fill sizes="100vw" className="object-cover opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/70 to-ink" />
      <div className="wrap relative">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6 md:mb-16">
          <div>
            <p className="t-eyebrow mb-6 flex items-center gap-3 text-mute"><span className="h-2 w-2 rounded-full bg-lime" />CodingHub in numbers</p>
            <h2 className="t-h1 max-w-2xl">Built to scale with <span className="acc">your business.</span></h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-cream/60">One focused team delivering reliable, cloud-based software with long-term support.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.l} data-reveal data-delay={i * 0.06} className="relative overflow-hidden rounded-[20px] border border-cream/10 bg-card/70 p-7 backdrop-blur">
              <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime/70 to-transparent" />
              <p className="t-num">{s.n}<span className="acc">{s.s}</span></p>
              <p className="mt-5 text-base font-medium">{s.l}</p>
              <p className="mt-2 text-sm leading-relaxed text-cream/55">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
