import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import ServiceArt from "@/components/ServiceArt";
import { getProduct, services } from "@/lib/data";
import { getServiceDetail } from "@/lib/service-details";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  return { title: s?.t ?? "Service", description: s?.d };
}

const check = <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12 5 5 9-10" /></svg>;

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const i = services.findIndex((x) => x.slug === slug);
  if (i < 0) notFound();
  const s = services[i];
  const d = getServiceDetail(slug);
  if (!d) notFound();
  const others = [1, 2, 3, 4].map((n) => services[(i + n) % services.length]);

  return (
    <>
      <PageHeader eyebrow={s.t} title={s.t} text={s.d} crumbs={[["Services", "/services"]]} art={<ServiceArt slug={s.slug} />} />

      {/* overview */}
      <section className="wrap py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-12">
          <div data-reveal className="lg:col-span-7">
            <p className="t-eyebrow mb-6 flex items-center gap-3 text-mute"><span className="h-2 w-2 rounded-full bg-lime" />Overview</p>
            <h2 className="t-h2 max-w-2xl">What {s.t} means for your business</h2>
            <div className="mt-8 space-y-5 text-[17px] leading-relaxed text-cream/70">
              {d.overview.map((t) => <p key={t}>{t}</p>)}
            </div>
            <Link href="/contact" className="mt-10 inline-flex h-14 items-center gap-2 rounded-full bg-lime px-8 text-sm font-semibold text-ink transition hover:bg-cream">Discuss this service <span aria-hidden="true">↗</span></Link>
          </div>

          <aside data-reveal data-delay={0.1} className="lg:col-span-5">
            <div className="rounded-[22px] border border-cream/10 bg-card p-7">
              <p className="t-eyebrow text-mute">Technology we use</p>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {d.tech.map((t) => <li key={t} className="rounded-full border border-cream/15 px-4 py-2 text-sm text-cream/80">{t}</li>)}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* what we deliver */}
      <section className="border-t border-cream/10">
        <div className="wrap py-20 md:py-28">
          <div data-reveal className="mb-12 md:mb-16">
            <p className="t-eyebrow mb-6 flex items-center gap-3 text-mute"><span className="h-2 w-2 rounded-full bg-lime" />What we deliver</p>
            <h2 className="t-h1 max-w-2xl">What is included</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {d.deliver.map((f, k) => (
              <div key={f.t} data-reveal data-delay={(k % 3) * 0.06} className="rounded-[20px] border border-cream/10 bg-card p-7 transition duration-300 hover:-translate-y-1 hover:border-lime/50">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-lime/15 text-lime">{check}</span>
                <h3 className="t-h3 mt-6">{f.t}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-cream/60">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* examples from our work */}
      <section className="border-t border-cream/10">
        <div className="wrap py-20 md:py-28">
          <div data-reveal className="mb-12 md:mb-16">
            <p className="t-eyebrow mb-6 flex items-center gap-3 text-mute"><span className="h-2 w-2 rounded-full bg-lime" />From our work</p>
            <h2 className="t-h1 max-w-2xl">Examples of this service</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {d.examples.map((e, k) => {
              const p = getProduct(e.slug);
              return (
                <Link key={e.t} href={`/products/${e.slug}`} data-reveal data-delay={(k % 2) * 0.06} className="group flex items-center gap-5 rounded-[20px] border border-cream/10 bg-card p-4 transition duration-300 hover:border-lime/50">
                  {p && (
                    <span className="relative h-24 w-32 shrink-0 overflow-hidden rounded-xl bg-ink">
                      <Image src={`/photos/${p.slug}.webp`} alt="" fill sizes="128px" className="object-cover transition duration-500 group-hover:scale-105" />
                    </span>
                  )}
                  <span className="min-w-0">
                    <span className="block text-lg font-medium tracking-[-0.01em] transition group-hover:text-lime">{e.t}</span>
                    <span className="mt-1.5 block text-sm leading-relaxed text-cream/60">{e.d}</span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* process */}
      <section className="border-t border-cream/10">
        <div className="wrap py-20 md:py-28">
          <div data-reveal className="mb-12 md:mb-16">
            <p className="t-eyebrow mb-6 flex items-center gap-3 text-mute"><span className="h-2 w-2 rounded-full bg-lime" />How we work</p>
            <h2 className="t-h1 max-w-2xl">From idea to launch</h2>
          </div>
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {d.steps.map((st, k) => (
              <li key={st.t} data-reveal data-delay={k * 0.06} className="rounded-[20px] border border-cream/10 bg-card p-7">
                <span className="font-display text-5xl font-medium leading-none tracking-[-0.05em] text-cream/10">0{k + 1}</span>
                <h3 className="t-h3 mt-8">{st.t}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-cream/60">{st.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-cream/10">
        <div className="wrap grid gap-12 py-20 md:py-28 lg:grid-cols-12">
          <div data-reveal className="lg:col-span-4">
            <p className="t-eyebrow mb-6 flex items-center gap-3 text-mute"><span className="h-2 w-2 rounded-full bg-lime" />FAQ</p>
            <h2 className="t-h1">Common questions</h2>
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-cream/60">Anything else you want to know? Ask us and we will walk you through it.</p>
            <Link href="/contact" className="mt-8 inline-flex h-12 items-center gap-2 rounded-full border border-cream/25 px-6 text-sm font-semibold transition hover:border-lime hover:bg-lime hover:text-ink">Contact us <span aria-hidden="true">↗</span></Link>
          </div>
          <div data-reveal data-delay={0.08} className="divide-y divide-cream/10 border-y border-cream/10 lg:col-span-8">
            {d.faq.map((f) => (
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

      {/* more services */}
      <section className="border-t border-cream/10">
        <div className="wrap py-16 md:py-20">
          <div data-reveal className="mb-8 flex flex-wrap items-end justify-between gap-4 md:mb-10">
            <h2 className="t-h2">More services</h2>
            <Link href="/services" className="inline-flex items-center gap-2 text-sm text-cream/70 transition hover:text-lime">View all services <span aria-hidden="true">→</span></Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((m, k) => (
              <Link key={m.slug} href={`/services/${m.slug}`} data-reveal data-delay={k * 0.06} className="group flex items-center gap-4 rounded-[18px] border border-cream/10 bg-card p-3 transition duration-300 hover:border-lime/50">
                <span className="relative h-20 w-24 shrink-0 overflow-hidden rounded-xl bg-ink">
                  <ServiceArt slug={m.slug} />
                </span>
                <span className="min-w-0 text-[15px] font-medium leading-snug tracking-[-0.01em] transition group-hover:text-lime">{m.t}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
