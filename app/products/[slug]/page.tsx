import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import { getProduct, photo, products } from "@/lib/data";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  return { title: p?.t ?? "Product", description: p?.d };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();
  const i = products.findIndex((x) => x.slug === slug);
  const next = products[(i + 1) % products.length];

  return (
    <>
      <PageHeader eyebrow={p.t} title={p.t} text={p.d} crumbs={[["Products", "/products"]]} image={photo(p.slug)} />

      <section className="wrap py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-12">
          <div data-reveal className="md:col-span-4">
            <p className="t-eyebrow mb-6 flex items-center gap-3 text-mute"><span className="h-2 w-2 rounded-full bg-lime" />{p.tag}</p>
            <p className="max-w-xs text-base leading-relaxed text-cream/70">Deployed on a secure cloud platform, with ongoing support and updates from the CodingHub team.</p>
            <Link href="/contact" className="mt-8 inline-flex rounded-full bg-lime px-7 py-3.5 text-sm font-medium text-ink transition hover:bg-cream">Request a demo</Link>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 md:col-span-8">
            {p.m.map((m, k) => (
              <li key={m.t} data-reveal data-delay={k * 0.06} className="group rounded-[20px] border border-cream/10 bg-card p-7 transition duration-300 hover:-translate-y-1 hover:border-lime/50">
                <span className="font-display text-sm text-lime">0{k + 1}</span>
                <h2 className="t-h3 mt-6">{m.t}</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-cream/60">{m.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="wrap border-t border-cream/15 py-24 md:py-32">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[["Industry", p.tag], ["Focus areas", p.k.join(" · ")], ["Delivery", "Secure cloud platform"], ["Support", "Ongoing updates"]].map(([l, v]) => (
            <div key={l} data-reveal className="relative overflow-hidden rounded-[20px] border border-cream/10 bg-card p-7">
              <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime/70 to-transparent" />
              <p className="t-eyebrow text-mute">{l}</p>
              <p className="mt-3 font-display text-xl font-medium tracking-[-0.03em]">{v}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-4 md:mt-24 md:grid-cols-3">
          {[
            ["The challenge", `${p.tag} teams often juggle disconnected tools, paper records and manual follow-ups. That slows work down and makes it hard to see what is really happening.`],
            ["Our solution", `${p.t} brings ${p.k.join(", ").toLowerCase()} together in one connected system, built around how the team already works and ready to use from day one.`],
            ["The outcome", "Less manual work, clearer visibility and reliable reports, backed by ongoing support and updates from the CodingHub team."],
          ].map(([h, t], k) => (
            <div key={h} data-reveal data-delay={k * 0.08} className="rounded-[20px] border border-cream/10 bg-card p-7 md:p-8">
              <p className="font-display text-sm text-lime">0{k + 1}</p>
              <h2 className="t-h3 mt-4">{h}</h2>
              <p className="mt-4 text-[15px] leading-relaxed text-cream/60">{t}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-24">
          <p className="t-eyebrow mb-8 flex items-center gap-3 text-mute"><span className="h-2 w-2 rounded-full bg-lime" />How we deliver</p>
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[["Discover", "We learn your workflow and goals."], ["Build", "We design and develop the system around them."], ["Deploy", "We launch it securely on the cloud."], ["Support", "We keep improving it with you."]].map(([h, t], k) => (
              <li key={h} data-reveal data-delay={k * 0.06} className="rounded-[20px] border border-cream/10 bg-card p-6 transition duration-300 hover:border-lime/50">
                <span className="font-display text-sm text-lime">0{k + 1}</span>
                <h3 className="mt-3 text-lg font-medium tracking-[-0.02em]">{h}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-cream/60">{t}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Link href={`/products/${next.slug}`} className="group block border-y border-cream/15 py-14 md:py-20">
        <div className="flex wrap items-end justify-between gap-6">
          <div>
            <p className="t-eyebrow mb-4 text-mute">Next product</p>
            <p className="t-h1 transition group-hover:text-lime">{next.t}</p>
          </div>
          <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full border border-cream/30 text-2xl transition group-hover:border-lime group-hover:bg-lime group-hover:text-ink">→</span>
        </div>
      </Link>
    </>
  );
}
