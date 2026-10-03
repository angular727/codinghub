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

      <section className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-12 md:grid-cols-12">
          <div data-reveal className="md:col-span-4">
            <p className="t-eyebrow mb-6 flex items-center gap-3 text-mute"><span className="h-2 w-2 rounded-full bg-lime" />{p.tag}</p>
            <p className="max-w-xs text-base leading-relaxed text-cream/70">Deployed on a secure cloud platform, with ongoing support and updates from the CodingHub team.</p>
            <Link href="/contact" data-magnetic data-cursor="Go" className="mt-8 inline-flex rounded-full bg-lime px-7 py-3.5 text-sm font-medium text-ink transition hover:bg-cream">Request a demo</Link>
          </div>
          <ul className="border-t border-cream/15 md:col-span-8">
            {p.m.map((m, k) => (
              <li key={m.t} data-reveal className="group grid grid-cols-12 items-baseline gap-4 border-b border-cream/15 py-7 transition-all duration-500 hover:pl-4">
                <span className="col-span-2 font-display text-base text-lime md:col-span-1">0{k + 1}</span>
                <h2 className="t-h3 col-span-10 md:col-span-5">{m.t}</h2>
                <p className="col-span-10 col-start-3 text-sm leading-relaxed text-cream/60 md:col-span-6 md:col-start-7">{m.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Link href={`/products/${next.slug}`} data-cursor="Next" className="group block border-y border-cream/15 px-6 py-14 md:px-10 md:py-20">
        <div className="mx-auto flex max-w-[1600px] items-end justify-between gap-6">
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
