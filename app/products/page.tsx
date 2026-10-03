import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { products, photo } from "@/lib/data";

export const metadata: Metadata = { title: "Products" };

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Products" title="Industry solutions," accent="ready to deploy." text="Software built, deployed and trusted by real organizations." />
      <section className="bg-cream py-20 text-ink md:py-32">
        <div className="mx-auto grid max-w-[1600px] gap-x-6 gap-y-14 px-6 md:grid-cols-2 md:px-10 lg:grid-cols-3">
          {products.map((p, i) => (
            <Link key={p.slug} href={`/products/${p.slug}`} data-reveal data-delay={(i % 3) * 0.08} data-cursor="View" className={`group block ${i % 3 === 1 ? "lg:mt-16" : ""}`}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] bg-ink">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={photo(p.slug)} alt={p.t} loading="lazy" className="h-full w-full object-cover transition duration-[900ms] group-hover:scale-105" />
                <span className="t-eyebrow absolute left-4 top-4 rounded-full bg-cream px-3 py-1.5 text-[10px] font-medium">{p.tag}</span>
                <span className="absolute bottom-4 right-4 font-display text-4xl font-medium leading-none tracking-[-0.05em] text-cream mix-blend-difference">0{i + 1}</span>
              </div>
              <h2 className="t-h3 mt-5 transition group-hover:opacity-60">{p.t}</h2>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink/60">{p.d}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
