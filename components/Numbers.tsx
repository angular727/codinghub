const stats = [
  { n: 6, s: "", l: "Core service lines" },
  { n: 9, s: "", l: "Industry products" },
  { n: 3, s: "", l: "Platforms: web, mobile & IoT" },
  { n: 24, s: "/7", l: "Cloud-based availability" },
];

export default function Numbers() {
  return (
    <section className="relative overflow-hidden py-24 md:py-36">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img data-parallax src="/photos/city.jpg" alt="" className="absolute inset-x-0 -top-[10%] h-[120%] w-full object-cover opacity-20 grayscale" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/60 to-ink" />
      <div className="relative mx-auto max-w-[1600px] px-6 md:px-10">
        <p data-reveal className="t-eyebrow mb-10 flex items-center gap-3 text-mute"><span className="h-2 w-2 rounded-full bg-lime" />CodingHub in numbers</p>
        <div className="grid border-t border-cream/15 md:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.l} data-reveal data-delay={i * 0.08} className={`border-b border-cream/15 py-10 md:border-b-0 md:py-12 ${i ? "md:border-l md:pl-8" : ""}`}>
              <p className="t-num"><span data-count={s.n}>0</span><span className="acc">{s.s}</span></p>
              <p className="mt-4 text-sm text-cream/60">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
