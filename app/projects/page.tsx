import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { getProduct, photo } from "@/lib/data";

export const metadata: Metadata = { title: "Projects" };

const projects = [
  { slug: "point-of-sale-system", i: "Retail & Distribution", d: "A multi-tenant POS with sales, purchases, suppliers and inventory management, running live in the cloud.", s: "Live demo", stack: ["Angular", "Node.js", "MongoDB"], href: "https://demo-pos-frountend.vercel.app" },
  { slug: "complaints-management-system", i: "Deployed with CCI Pakistan", d: "End-to-end complaint intake, assignment and resolution tracking for a real organization.", s: "Deployed", stack: [] },
  { slug: "patient-care-system", i: "Healthcare", d: "Patient records, appointments, prescriptions and billing for clinics and hospitals.", s: "Delivered", stack: [] },
  { slug: "restaurant-management", i: "Food & Hospitality", d: "Table orders, waiter workflow, kitchen display and billing in one connected system.", s: "Delivered", stack: ["Angular", "Node.js", "MongoDB"] },
  { slug: "medistore", i: "Pharmacy", d: "Medical store billing with batch and expiry tracking, purchases and profit reports.", s: "Delivered", stack: ["Angular", "Node.js", "MongoDB"] },
  { slug: "grocery-store-website", i: "E-Commerce", d: "A fast online catalogue and ordering storefront for a grocery retailer.", s: "Delivered", stack: ["Angular", "Node.js", "MongoDB"] },
  { slug: "university-access-attendance", i: "Education", d: "Access control and attendance management for an educational institution.", s: "Delivered", stack: [] },
  { slug: "lab-management-system", i: "Laboratories", d: "Sample tracking from collection to report, with test results and billing.", s: "Delivered", stack: [] },
];

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Projects" title="Real systems," accent="running for real businesses." text="A selection of the solutions we have built and deployed." />
      <section className="mx-auto max-w-[1600px] px-6 pb-24 md:px-10">
        <ul className="border-t border-cream/15">
          {projects.map((p, i) => {
            const prod = getProduct(p.slug)!;
            return (
              <li key={p.slug} data-reveal className="group grid items-center gap-6 border-b border-cream/15 py-7 transition-all duration-500 hover:bg-cream/[0.03] md:grid-cols-12 md:gap-8 md:px-4">
                <span className="font-display text-base text-lime md:col-span-1">0{i + 1}</span>
                <Link href={`/products/${p.slug}`} data-cursor="View" className="overflow-hidden rounded-xl bg-card md:col-span-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={photo(p.slug)} alt={prod.t} loading="lazy" className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-105" />
                </Link>
                <div className="md:col-span-5">
                  <h2 className="t-h3">{prod.t}</h2>
                  <p className="t-eyebrow mt-1.5 text-lime">{p.i}</p>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-cream/60">{p.d}</p>
                  {p.stack.length > 0 && <div className="mt-3 flex flex-wrap gap-2">{p.stack.map((s) => <span key={s} className="rounded-full border border-cream/20 px-3 py-1 text-xs text-cream/70">{s}</span>)}</div>}
                </div>
                <div className="flex flex-wrap items-center gap-3 md:col-span-3 md:justify-end">
                  <span className="rounded-full bg-cream/10 px-4 py-1.5 text-xs">{p.s}</span>
                  {p.href && <a href={p.href} target="_blank" rel="noopener noreferrer" className="rounded-full bg-lime px-5 py-2.5 text-xs font-medium text-ink transition hover:bg-cream">Open live demo ↗</a>}
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
