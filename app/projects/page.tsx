import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import { getProduct, photo } from "@/lib/data";
import { caseStudies } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Projects",
  description: "Case studies: what each client needed, what CodingHub built, and what changed.",
};

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Projects" title="Real systems," accent="running for real businesses." text="A selection of the solutions we have built and deployed." />
      <section className="wrap pb-24">
        <ul className="border-t border-cream/15">
          {caseStudies.map((c, i) => {
            const prod = getProduct(c.slug)!;
            return (
              <li key={c.slug} data-reveal className="group grid items-center gap-6 border-b border-cream/15 py-7 transition-all duration-500 hover:bg-cream/[0.03] md:grid-cols-12 md:gap-8 md:px-4">
                <span className="font-display text-base text-lime md:col-span-1">0{i + 1}</span>
                <Link href={`/projects/${c.slug}`} className="relative aspect-[16/10] overflow-hidden rounded-xl bg-card md:col-span-3">
                  <Image src={photo(c.slug)} alt={prod.t} fill sizes="(min-width:768px) 25vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
                </Link>
                <div className="md:col-span-5">
                  <h2 className="t-h3">{prod.t}</h2>
                  <p className="t-eyebrow mt-1.5 text-lime">{c.sector}</p>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-cream/85">{c.summary}</p>
                  {c.stack.length > 0 && <div className="mt-3 flex flex-wrap gap-2">{c.stack.map((s) => <span key={s} className="rounded-full border border-cream/20 px-3 py-1 text-[13px] text-cream/85">{s}</span>)}</div>}
                </div>
                <div className="flex items-center md:col-span-3 md:justify-end">
                  <Link href={`/projects/${c.slug}`} className="inline-flex h-12 items-center gap-2 rounded-full border border-cream/30 px-6 text-sm font-semibold transition hover:border-lime hover:bg-lime hover:text-ink">Read case study <span aria-hidden="true">→</span></Link>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
