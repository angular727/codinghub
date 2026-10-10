import Link from "next/link";
import Image from "next/image";
import { products, photo } from "@/lib/data";

// Featured products: a plain responsive grid (no pinned or horizontal scrolling)
export default function ProductsHorizontal() {
  return (
    <section className="bg-cream py-20 text-ink md:py-28">
      <div className="wrap">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6 md:mb-16">
          <div>
            <p className="t-eyebrow mb-5 flex items-center gap-3 text-ink/50"><span className="h-2 w-2 rounded-full bg-ink" />Products</p>
            <h2 className="t-h1">Our <span className="font-serif font-normal italic text-[1.1em]">products</span></h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink/60">Industry solutions built, deployed and trusted by real organizations.</p>
          </div>
          <Link href="/products" className="inline-flex items-center gap-3 rounded-full bg-ink px-7 py-3.5 text-sm text-cream transition hover:bg-lime hover:text-ink">All products <span>↗</span></Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 4).map((p, i) => (
            <Link key={p.slug} href={`/products/${p.slug}`} data-reveal data-delay={i * 0.06} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] bg-ink sm:aspect-[4/5]">
                <Image src={photo(p.slug)} alt={p.t} fill sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-[1.03]" />
                <span className="t-eyebrow absolute left-4 top-4 rounded-full bg-cream px-3 py-1.5 text-[10px] font-medium">{p.tag}</span>
              </div>
              <h3 className="t-h3 mt-5">{p.t}</h3>
              <p className="mt-1.5 line-clamp-2 text-sm text-ink/60">{p.d}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
