import Link from "next/link";
import Image from "next/image";
import { Words } from "@/components/Words";

const points = [
  ["Built for your industry", "Ready-made products for healthcare, retail, food, education and more."],
  ["Cloud-based by default", "Use your system from any device, anywhere, on secure hosting."],
  ["One team, end to end", "Design, development, deployment and support from the same people."],
  ["Long-term support", "We keep improving the system after launch."],
];

const check = <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12 5 5 9-10" /></svg>;

export default function Statement() {
  return (
    <section className="wrap pb-20 pt-20 md:pb-24 md:pt-28">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        {/* photo */}
        <div data-reveal className="relative lg:col-span-6">
          <div className="relative aspect-[5/4] overflow-hidden rounded-[28px] border border-cream/10">
            <Image src="/photos/team.webp" alt="The CodingHub team working together" fill sizes="(min-width:1024px) 46vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-5 right-5 rounded-2xl border border-cream/15 bg-ink/95 px-5 py-4 shadow-2xl shadow-black/50 backdrop-blur md:right-8">
            <p className="font-display text-3xl font-medium tracking-[-0.04em]">9<span className="text-lime"> products</span></p>
            <p className="mt-1 text-[13px] text-cream/80">Ready to deploy across 6 service lines</p>
          </div>
        </div>

        {/* text */}
        <div data-reveal data-delay={0.08} className="lg:col-span-6 lg:pl-4">
          <p className="t-eyebrow mb-6 flex items-center gap-3 text-mute"><span className="h-2 w-2 rounded-full bg-lime" />About CodingHub</p>
          <h2 className="t-h2"><Words text="One focused team," /> <Words text="built around your business." className="acc" /></h2>
          <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-cream/85">
            We are a software company building cloud applications, mobile apps, IoT and AI solutions that help businesses automate their processes and grow.
          </p>

          <ul className="mt-8 space-y-4">
            {points.map(([t, d]) => (
              <li key={t} className="flex items-start gap-4">
                <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-lime/15 text-lime">{check}</span>
                <p className="text-[15px] leading-relaxed text-cream/80"><span className="font-semibold text-cream">{t}.</span> {d}</p>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/about" className="inline-flex h-12 items-center gap-2 rounded-full border border-cream/30 px-6 text-sm font-semibold transition hover:border-lime hover:bg-lime hover:text-ink">More about us <span aria-hidden="true">→</span></Link>
            <Link href="/contact" className="inline-flex h-12 items-center gap-2 rounded-full bg-lime px-6 text-sm font-semibold text-ink transition hover:bg-cream">Start a project <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
