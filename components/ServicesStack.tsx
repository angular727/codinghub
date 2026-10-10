import Link from "next/link";
import Image from "next/image";
import { Words } from "@/components/Words";
import { services } from "@/lib/data";

export default function ServicesStack({ heading = true }: { heading?: boolean }) {
  return (
    <section className="pb-20 md:pb-28">
      <div className="wrap">
        {heading && (
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6 md:mb-16">
            <h2 className="t-h1"><Words text="What we" /> <Words text="do" className="acc" /></h2>
            <p className="max-w-xs text-sm leading-relaxed text-cream/60">Six integrated capabilities, delivered by one team: from the first idea to a scalable solution.</p>
          </div>
        )}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <article key={s.t} data-reveal className="group flex flex-col overflow-hidden rounded-[22px] border border-cream/10 bg-card transition hover:border-cream/25">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image src={s.img} alt={s.t} fill sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-[1.03]" />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <p className="font-display text-sm text-lime">0{i + 1}</p>
                <h3 className="t-h3 mt-3">{s.t}</h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-cream/60">{s.d}</p>
                <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm text-cream transition hover:text-lime">Discuss this service <span>↗</span></Link>
              </div>
            </article>
          ))}
        </div>
        {heading && (
          <div className="mt-12 flex justify-center">
            <Link href="/services" className="inline-flex items-center gap-3 rounded-full border border-cream/25 px-7 py-3.5 text-sm transition hover:border-lime hover:bg-lime hover:text-ink">View all services <span>↗</span></Link>
          </div>
        )}
      </div>
    </section>
  );
}
