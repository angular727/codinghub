import Link from "next/link";
import { Words } from "@/components/Words";
import { getProduct } from "@/lib/data";

const industries: { t: string; s: string; icon: React.ReactNode }[] = [
  { t: "Healthcare", s: "patient-care-system", icon: <path d="M12 21s-7-4.5-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.5-9 9-9 9Z" /> },
  { t: "Retail & Distribution", s: "point-of-sale-system", icon: <><path d="M3 9l1.5-5h15L21 9" /><path d="M4 9v11h16V9" /><path d="M9 20v-6h6v6" /></> },
  { t: "Pharmacy", s: "medistore", icon: <><rect x="3" y="9" width="18" height="6" rx="3" /><path d="M12 9v6" /></> },
  { t: "Food & Hospitality", s: "restaurant-management", icon: <><path d="M6 3v8a2 2 0 0 0 2 2v8M10 3v6M6 7h4" /><path d="M17 3c-2 2-3 5-3 8h3v10" /></> },
  { t: "Laboratories", s: "lab-management-system", icon: <><path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3" /><path d="M7.5 15h9" /></> },
  { t: "Public Service", s: "complaints-management-system", icon: <><path d="M3 21h18M5 21V10M19 21V10M9 21V10M15 21V10M2 10l10-7 10 7" /></> },
  { t: "Education", s: "university-access-attendance", icon: <><path d="M2 9l10-5 10 5-10 5Z" /><path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" /></> },
  { t: "E-Commerce", s: "grocery-store-website", icon: <><circle cx="9" cy="20" r="1.3" /><circle cx="18" cy="20" r="1.3" /><path d="M2 3h3l2.4 11.5a1 1 0 0 0 1 .8h9.2a1 1 0 0 0 1-.8L20 7H6" /></> },
];

export default function Industries() {
  return (
    <section className="wrap py-20 md:py-28">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6 md:mb-16">
        <div>
          <p className="t-eyebrow mb-6 flex items-center gap-3 text-mute"><span className="h-2 w-2 rounded-full bg-lime" />Industries we serve</p>
          <h2 className="t-h1 max-w-3xl"><Words text="Software for" /> <Words text="every kind of" className="acc" /> <Words text="business." /></h2>
        </div>
        <p className="max-w-xs text-sm leading-relaxed text-cream/60">Purpose-built products for the sectors we know best, each ready to deploy and tailored to your workflow.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {industries.map(({ t, s, icon }, i) => (
          <Link key={t} href={`/products/${s}`} data-reveal data-delay={(i % 4) * 0.06} className="group relative flex flex-col rounded-[20px] border border-cream/10 bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-lime/50 md:p-7">
            <div className="flex items-start justify-between">
              <span className="grid h-12 w-12 place-items-center rounded-xl border border-cream/10 bg-ink text-lime">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{icon}</svg>
              </span>
              <span className="text-xs text-mute">0{i + 1}</span>
            </div>
            <h3 className="t-h3 mt-10">{t}</h3>
            <p className="mt-2 text-sm text-cream/55">{getProduct(s)?.t}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm text-cream/80 transition group-hover:text-lime">Learn more <span className="transition group-hover:translate-x-0.5">→</span></span>
          </Link>
        ))}
      </div>
    </section>
  );
}
