import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import { getDetail, getProduct, photo } from "@/lib/data";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  const p = getProduct(slug);
  return { title: p ? `${p.t}: case study` : "Case study", description: c?.summary };
}

const check = <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12 5 5 9-10" /></svg>;

const sections = [
  ["overview", "Overview"],
  ["challenge", "The challenge"],
  ["approach", "Our approach"],
  ["delivered", "What we delivered"],
  ["outcome", "The outcome"],
] as const;

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  const p = getProduct(slug);
  if (!c || !p) notFound();
  const d = getDetail(slug);
  const i = caseStudies.findIndex((x) => x.slug === slug);
  const more = [1, 2, 3].map((n) => caseStudies[(i + n) % caseStudies.length]);

  return (
    <>
      <PageHeader eyebrow={p.t} title={p.t} text={c.summary} crumbs={[["Projects", "/projects"]]} image={photo(slug)} />

      {/* facts */}
      <section className="wrap pb-4">
        <dl data-reveal className="grid gap-px overflow-hidden rounded-[22px] border border-cream/10 bg-cream/10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Client", c.client],
            ["Industry", c.sector],
            ["Type", c.type],
            ["Technology", c.stack.length ? c.stack.join(" · ") : "Web application"],
          ].map(([l, v]) => (
            <div key={l} className="bg-card p-6">
              <dt className="t-eyebrow text-mute">{l}</dt>
              <dd className="mt-2 text-base font-medium text-cream/95">{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* story */}
      <section className="wrap py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <nav aria-label="Case study sections" className="hidden lg:col-span-3 lg:block">
            <ul className="sticky top-28 space-y-1 border-l border-cream/10">
              {sections.map(([id, label], k) => (
                <li key={id}>
                  <a href={`#${id}`} className="-ml-px flex items-baseline gap-3 border-l border-transparent py-2 pl-4 text-sm text-cream/75 transition hover:border-lime hover:text-lime">
                    <span className="w-5 text-[13px] text-mute">{String(k + 1).padStart(2, "0")}</span>{label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-16 lg:col-span-9 md:space-y-20">
            <div id="overview" className="scroll-mt-28">
              <p className="t-eyebrow mb-5 text-lime">Overview</p>
              <p className="t-lead max-w-3xl">{c.brief}</p>
            </div>

            <div id="challenge" className="scroll-mt-28">
              <p className="t-eyebrow mb-5 text-lime">The challenge</p>
              <ul className="grid gap-4 md:grid-cols-3">
                {c.challenge.map((t, k) => (
                  <li key={t} data-reveal data-delay={k * 0.06} className="rounded-[20px] border border-cream/10 bg-card p-6">
                    <span className="font-display text-sm text-lime">0{k + 1}</span>
                    <p className="mt-4 text-[15px] leading-relaxed text-cream/85">{t}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div id="approach" className="scroll-mt-28">
              <p className="t-eyebrow mb-5 text-lime">Our approach</p>
              <p className="max-w-3xl text-lg leading-relaxed text-cream/85">{c.approach}</p>
            </div>

            <div id="delivered" className="scroll-mt-28">
              <p className="t-eyebrow mb-5 text-lime">What we delivered</p>
              <ul className="grid gap-4 sm:grid-cols-2">
                {c.built.map((b, k) => (
                  <li key={b} data-reveal data-delay={(k % 2) * 0.06} className="flex items-start gap-4 rounded-[20px] border border-cream/10 bg-card p-6">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-lime/15 text-lime">{check}</span>
                    <span className="text-[15px] leading-relaxed text-cream/90">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div id="outcome" className="scroll-mt-28">
              <p className="t-eyebrow mb-5 text-lime">The outcome</p>
              <div className="rounded-[24px] border border-lime/25 bg-lime/[0.06] p-7 md:p-10">
                <p className="t-lead max-w-3xl">{c.outcome}</p>
                {d && (
                  <ul className="mt-8 flex flex-wrap gap-2.5 border-t border-cream/10 pt-6">
                    {d.benefits.map((b) => <li key={b} className="rounded-full border border-cream/20 px-4 py-2 text-sm text-cream/90">{b}</li>)}
                  </ul>
                )}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-5 rounded-[24px] border border-cream/10 bg-card p-7 md:p-9">
              <div>
                <p className="t-h3">See everything {p.t} includes</p>
                <p className="mt-2 text-[15px] text-cream/75">The full feature list, how it works and answers to common questions.</p>
              </div>
              <Link href={`/products/${slug}`} className="inline-flex h-14 items-center gap-2 rounded-full bg-lime px-8 text-sm font-semibold text-ink transition hover:bg-cream">View the product <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </div>
      </section>

      {/* more case studies */}
      <section className="border-t border-cream/10">
        <div className="wrap py-16 md:py-24">
          <div data-reveal className="mb-10 flex flex-wrap items-end justify-between gap-4 md:mb-12">
            <h2 className="t-h2">More case studies</h2>
            <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-cream/85 transition hover:text-lime">View all projects <span aria-hidden="true">→</span></Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {more.map((m, k) => {
              const mp = getProduct(m.slug)!;
              return (
                <Link key={m.slug} href={`/projects/${m.slug}`} data-reveal data-delay={k * 0.06} className="group flex flex-col overflow-hidden rounded-[22px] border border-cream/10 bg-card transition duration-300 hover:-translate-y-1 hover:border-lime/50">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src={photo(m.slug)} alt={mp.t} fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover transition duration-500 group-hover:scale-[1.03]" />
                    <span className="absolute left-4 top-4 rounded-full bg-ink/85 px-3 py-1.5 text-[13px] text-lime backdrop-blur">{m.sector}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="t-h3">{mp.t}</h3>
                    <p className="mt-3 flex-1 text-[15px] leading-relaxed text-cream/80">{m.summary}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold transition group-hover:text-lime">Read case study <span aria-hidden="true">→</span></span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
