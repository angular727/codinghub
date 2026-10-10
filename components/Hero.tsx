import Link from "next/link";
import Image from "next/image";

const stats = [["6", "Core service lines"], ["9", "Industry products"], ["3", "Web, mobile & IoT"], ["24/7", "Cloud availability"]];

export default function Hero() {
  return (
    <section className="relative flex min-h-[min(100svh,860px)] flex-col justify-center overflow-hidden">
      {/* full-width background photo */}
      <Image src="/photos/hero.jpg" alt="The CodingHub team at work" fill priority quality={80} sizes="100vw" className="object-cover object-[50%_18%]" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/0" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/50" />

      <div className="wrap relative pb-10 pt-32 md:pb-14 md:pt-36">
        <p className="t-eyebrow mb-7 flex items-center gap-3 text-cream/75">
          <span className="h-2 w-2 rounded-full bg-lime" />Software company · Rahim Yar Khan
        </p>
        <h1 className="t-hero max-w-[18ch]" style={{ fontSize: "clamp(2.6rem, 6vw, 5.6rem)" }}>
          Empowering businesses through <span className="acc">innovative</span> technology.
        </h1>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-cream/75 md:text-lg">
          Cloud web apps, cross-platform mobile apps, IoT, AI and business automation, built to help your organization automate its processes and grow.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/contact" className="rounded-full bg-lime px-8 py-4 text-sm font-medium text-ink transition hover:bg-cream">Start a project</Link>
          <Link href="/products" className="rounded-full border border-cream/40 bg-ink/30 px-8 py-4 text-sm font-medium backdrop-blur transition hover:border-cream hover:bg-cream hover:text-ink">Explore products</Link>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-y-8 border-t border-cream/20 pt-8 md:mt-20 md:grid-cols-4">
          {stats.map(([n, l], i) => (
            <div key={l} className={i ? "md:border-l md:border-cream/15 md:pl-8" : ""}>
              <dt className="font-display text-3xl font-medium tracking-[-0.04em] md:text-5xl">{n}</dt>
              <dd className="mt-2 text-xs text-cream/65 md:text-sm">{l}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
