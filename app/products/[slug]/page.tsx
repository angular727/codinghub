import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import { getDetail, getProduct, photo, products } from "@/lib/data";
import { getExtra } from "@/lib/product-extra";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  return { title: p?.t ?? "Product", description: p?.d };
}

const check = <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12 5 5 9-10" /></svg>;

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();
  const d = getDetail(slug);
  const x = getExtra(slug);
  const i =products.findIndex((x) => x.slug === slug);
  const more = [1, 2, 3, 4].map((n) => products[(i + n) % products.length]);

  return (
    <>
      <PageHeader eyebrow={p.t} title={p.t} text={p.d} crumbs={[["Products", "/products"]]} image={photo(p.slug)} />

      {/* overview */}
      <section className="wrap py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-12">
          <div data-reveal className="lg:col-span-7">
            <p className="t-eyebrow mb-6 flex items-center gap-3 text-mute"><span className="h-2 w-2 rounded-full bg-lime" />Overview</p>
            <h2 className="t-h2 max-w-2xl">What {p.t} does for your business</h2>
            <div className="mt-8 space-y-5 text-[17px] leading-relaxed text-cream/70">
              {d?.overview.map((t) => <p key={t}>{t}</p>)}
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex h-14 items-center gap-2 rounded-full bg-lime px-8 text-sm font-semibold text-ink transition hover:bg-cream">Request a demo <span aria-hidden="true">↗</span></Link>
              {x?.demo && <a href={x.demo} target="_blank" rel="noopener noreferrer" className="inline-flex h-14 items-center gap-2 rounded-full border border-cream/25 px-8 text-sm font-semibold transition hover:border-cream hover:bg-cream hover:text-ink">Open live demo <span aria-hidden="true">↗</span></a>}
            </div>
          </div>

          <aside data-reveal data-delay={0.1} className="space-y-4 lg:col-span-5">
            <div className="rounded-[22px] border border-cream/10 bg-card p-7">
              <p className="t-eyebrow text-mute">Who it is for</p>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {d?.audience.map((a) => <li key={a} className="rounded-full border border-cream/15 px-4 py-2 text-sm text-cream/80">{a}</li>)}
              </ul>
            </div>
            <div className="rounded-[22px] border border-cream/10 bg-card p-7">
              <p className="t-eyebrow text-mute">Key benefits</p>
              <ul className="mt-5 space-y-3.5">
                {d?.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-[15px] text-cream/80">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-lime/15 text-lime">{check}</span>{b}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* features */}
      <section className="border-t border-cream/10">
        <div className="wrap py-20 md:py-28">
          <div data-reveal className="mb-12 flex flex-wrap items-end justify-between gap-6 md:mb-16">
            <div>
              <p className="t-eyebrow mb-6 flex items-center gap-3 text-mute"><span className="h-2 w-2 rounded-full bg-lime" />Highlights</p>
              <h2 className="t-h1 max-w-2xl">The main things {p.t} does</h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-cream/60">The essentials at a glance. The complete list is further down the page.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {(d?.features ?? p.m).slice(0, 6).map((f, k) => (
              <div key={f.t} data-reveal data-delay={(k % 3) * 0.06} className="group rounded-[20px] border border-cream/10 bg-card p-7 transition duration-300 hover:-translate-y-1 hover:border-lime/50">
                <span className="font-display text-sm text-lime">0{k + 1}</span>
                <h3 className="t-h3 mt-6">{f.t}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-cream/60">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* how it works */}
      {x && (
        <section className="border-t border-cream/10">
          <div className="wrap py-20 md:py-28">
            <div data-reveal className="mb-12 md:mb-16">
              <p className="t-eyebrow mb-6 flex items-center gap-3 text-mute"><span className="h-2 w-2 rounded-full bg-lime" />How it works</p>
              <h2 className="t-h1 max-w-2xl">From first use to daily routine</h2>
            </div>
            <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {x.workflow.map((s, k) => (
                <li key={s.t} data-reveal data-delay={k * 0.06} className="relative rounded-[20px] border border-cream/10 bg-card p-7">
                  <span className="font-display text-5xl font-medium leading-none tracking-[-0.05em] text-cream/10">0{k + 1}</span>
                  <h3 className="t-h3 mt-8">{s.t}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-cream/60">{s.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* complete feature list */}
      {x && (
        <section id="all-features" className="border-t border-cream/10">
          <div className="wrap py-20 md:py-28">
            <div data-reveal className="mb-12 flex flex-wrap items-end justify-between gap-6 md:mb-16">
              <div>
                <p className="t-eyebrow mb-6 flex items-center gap-3 text-mute"><span className="h-2 w-2 rounded-full bg-lime" />Complete feature list</p>
                <h2 className="t-h1 max-w-2xl">Everything {p.t} can do</h2>
                <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-cream/60">Grouped by job, so you can find what you care about. Use the list on the left to jump to a section.</p>
              </div>
              {x.stack && (
                <ul className="flex flex-wrap items-center gap-2">
                  <li className="t-eyebrow mr-1 text-mute">Built with</li>
                  {x.stack.map((s) => <li key={s} className="rounded-full border border-cream/15 px-3.5 py-1.5 text-xs text-cream/75">{s}</li>)}
                </ul>
              )}
            </div>

            <div className="grid gap-8 lg:grid-cols-12">
              <nav aria-label="Feature sections" className="hidden lg:col-span-3 lg:block">
                <ul className="sticky top-28 space-y-1 border-l border-cream/10">
                  {x.modules.map((m, k) => (
                    <li key={m.t}>
                      <a href={`#cat-${k}`} className="-ml-px flex items-baseline gap-3 border-l border-transparent py-2 pl-4 text-sm text-cream/60 transition hover:border-lime hover:text-lime">
                        <span className="w-5 text-xs text-mute">{String(k + 1).padStart(2, "0")}</span>{m.t}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="space-y-4 lg:col-span-9">
                {x.modules.map((m, k) => (
                  <div key={m.t} id={`cat-${k}`} className="scroll-mt-28 rounded-[20px] border border-cream/10 bg-card p-7 md:p-9">
                    <div className="flex items-baseline gap-4">
                      <span className="font-display text-sm text-lime">{String(k + 1).padStart(2, "0")}</span>
                      <h3 className="t-h3">{m.t}</h3>
                    </div>
                    {m.blurb && <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-cream/60">{m.blurb}</p>}
                    <ul className="mt-6 grid gap-x-8 gap-y-3.5 border-t border-cream/10 pt-6 sm:grid-cols-2">
                      {m.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-3 text-[15px] leading-snug text-cream/80">
                          <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-lime/15 text-lime">{check}</span>{pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* challenge, solution, outcome */}
      <section className="border-t border-cream/10">
        <div className="wrap py-20 md:py-28">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["The challenge", d?.challenge],
              ["Our solution", d?.solution],
              ["The outcome", d?.outcome],
            ].map(([h, t], k) => (
              <div key={h} data-reveal data-delay={k * 0.08} className="rounded-[20px] border border-cream/10 bg-card p-7 md:p-8">
                <p className="font-display text-sm text-lime">0{k + 1}</p>
                <h2 className="t-h3 mt-4">{h}</h2>
                <p className="mt-4 text-[15px] leading-relaxed text-cream/60">{t}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 md:mt-20">
            {[["Industry", p.tag], ["Focus areas", p.k.join(" · ")], ["Delivery", "Secure cloud platform"], ["Support", "Ongoing updates"]].map(([l, v]) => (
              <div key={l} data-reveal className="relative overflow-hidden rounded-[20px] border border-cream/10 bg-card p-7">
                <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime/70 to-transparent" />
                <p className="t-eyebrow text-mute">{l}</p>
                <p className="mt-3 font-display text-xl font-medium tracking-[-0.03em]">{v}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 md:mt-20">
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
        </div>
      </section>

      {/* FAQ */}
      {x && (
        <section className="border-t border-cream/10">
          <div className="wrap grid gap-12 py-20 md:py-28 lg:grid-cols-12">
            <div data-reveal className="lg:col-span-4">
              <p className="t-eyebrow mb-6 flex items-center gap-3 text-mute"><span className="h-2 w-2 rounded-full bg-lime" />FAQ</p>
              <h2 className="t-h1">Common questions</h2>
              <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-cream/60">Anything else you want to know? Ask us and we will walk you through it.</p>
              <Link href="/contact" className="mt-8 inline-flex h-12 items-center gap-2 rounded-full border border-cream/25 px-6 text-sm font-semibold transition hover:border-lime hover:bg-lime hover:text-ink">Contact us <span aria-hidden="true">↗</span></Link>
            </div>
            <div data-reveal data-delay={0.08} className="divide-y divide-cream/10 border-y border-cream/10 lg:col-span-8">
              {x.faq.map((f) => (
                <details key={f.q} className="group py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium tracking-[-0.01em] [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-cream/20 text-lg transition group-open:rotate-45 group-open:border-lime group-open:text-lime" aria-hidden="true">+</span>
                  </summary>
                  <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-cream/65">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* more products: small cards with a picture */}
      <section className="border-t border-cream/10">
        <div className="wrap py-16 md:py-20">
          <div data-reveal className="mb-8 flex flex-wrap items-end justify-between gap-4 md:mb-10">
            <h2 className="t-h2">More products</h2>
            <Link href="/products" className="inline-flex items-center gap-2 text-sm text-cream/70 transition hover:text-lime">View all products <span aria-hidden="true">→</span></Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {more.map((m, k) => (
              <Link key={m.slug} href={`/products/${m.slug}`} data-reveal data-delay={k * 0.06} className="group flex items-center gap-4 rounded-[18px] border border-cream/10 bg-card p-3 transition duration-300 hover:border-lime/50">
                <span className="relative h-20 w-24 shrink-0 overflow-hidden rounded-xl bg-ink">
                  <Image src={photo(m.slug)} alt="" fill sizes="96px" className="object-cover transition duration-500 group-hover:scale-105" />
                </span>
                <span className="min-w-0">
                  <span className="t-eyebrow block text-[10px] text-mute">{m.tag}</span>
                  <span className="mt-1 block text-[15px] font-medium leading-snug tracking-[-0.01em] transition group-hover:text-lime">{m.t}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}