import Link from "next/link";
import LocalTime from "@/components/LocalTime";
import { Words } from "@/components/Words";
import { products, services } from "@/lib/data";

const menu = [["Home", "/"], ["Services", "/services"], ["Products", "/products"], ["Projects", "/projects"], ["About", "/about"], ["Contact", "/contact"]];
const social = ["Facebook", "LinkedIn", "Twitter", "Instagram"];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-cream">
      {/* closing call to action */}
      <section className="px-6 pb-20 pt-28 md:px-10 md:pt-40">
        <p data-reveal className="t-eyebrow mb-8 flex items-center gap-3 text-mute"><span className="h-2 w-2 rounded-full bg-lime" />Got a project in mind?</p>
        <div className="grid items-end gap-10 md:grid-cols-12">
          <h2 data-split className="t-h1 md:col-span-9" style={{ fontSize: "clamp(2.4rem, 6vw, 6rem)" }}>
            <Words text="Let's build something" /> <Words text="remarkable." className="acc" />
          </h2>
          <Link href="/contact" data-magnetic data-cursor="Go" className="group grid h-36 w-36 shrink-0 place-items-center rounded-full bg-lime text-ink transition-colors duration-300 hover:bg-cream md:col-span-3 md:h-44 md:w-44 md:justify-self-end">
            <span className="text-center text-base font-medium leading-tight">Start a<br />project<span className="mt-1 block text-2xl transition group-hover:translate-x-1 group-hover:-translate-y-1">↗</span></span>
          </Link>
        </div>
      </section>

      {/* full-width email band */}
      <a href="mailto:info@codinghub.com" data-cursor="Write" className="group flex items-center justify-between gap-6 border-y border-cream/10 px-6 py-8 transition-colors duration-500 hover:bg-lime hover:text-ink md:px-10 md:py-10">
        <span className="font-display font-medium tracking-[-0.045em]" style={{ fontSize: "clamp(1.6rem, 4.6vw, 4.6rem)", lineHeight: 1 }}>info@codinghub.com</span>
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-current text-xl transition duration-500 group-hover:rotate-45 md:h-16 md:w-16 md:text-2xl">↗</span>
      </a>

      {/* full-width columns */}
      <div className="grid grid-cols-2 border-b border-cream/10 lg:grid-cols-12">
        <div className="col-span-2 border-b border-cream/10 p-6 md:p-10 lg:col-span-3 lg:border-b-0 lg:border-r">
          <p className="max-w-xs text-base leading-relaxed text-cream/75">Empowering businesses through innovative technology solutions. We help businesses automate their processes and grow.</p>
          <p className="t-eyebrow mt-10 text-mute">Studio</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/70">Shahab Town, St #2, Khanpur Rd, near Ada Iqbal Nagar, Rahim Yar Khan, Pakistan</p>
          <p className="mt-6 flex items-center gap-2 text-sm text-cream/70"><span className="h-1.5 w-1.5 rounded-full bg-lime [animation:blink_1.6s_infinite]" /><LocalTime /></p>
        </div>

        <div className="border-b border-cream/10 p-6 md:p-10 lg:col-span-2 lg:border-b-0 lg:border-r">
          <p className="t-eyebrow mb-6 text-mute">Menu</p>
          <ul className="space-y-3 text-[15px]">{menu.map(([x, h]) => <li key={x}><Link href={h} className="line-hover transition hover:text-lime">{x}</Link></li>)}</ul>
        </div>

        <div className="border-b border-cream/10 p-6 md:p-10 lg:col-span-2 lg:border-b-0 lg:border-r">
          <p className="t-eyebrow mb-6 text-mute">Services</p>
          <ul className="space-y-3 text-[15px]">{services.map((s) => <li key={s.t}><Link href="/services" className="line-hover transition hover:text-lime">{s.t}</Link></li>)}</ul>
        </div>

        <div className="col-span-2 border-b border-cream/10 p-6 md:p-10 lg:col-span-3 lg:border-b-0 lg:border-r">
          <p className="t-eyebrow mb-6 text-mute">Products</p>
          <ul className="grid gap-x-8 gap-y-3 text-[15px] sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">{products.map((p) => <li key={p.slug}><Link href={`/products/${p.slug}`} className="line-hover transition hover:text-lime">{p.t}</Link></li>)}</ul>
        </div>

        <div className="col-span-2 p-6 md:p-10 lg:col-span-2">
          <p className="t-eyebrow mb-6 text-mute">Connect</p>
          <ul className="space-y-3 text-[15px]">
            {social.map((s) => <li key={s}><a href="#" className="group inline-flex items-center gap-2 transition hover:text-lime">{s}<span className="text-xs opacity-0 transition group-hover:opacity-100">↗</span></a></li>)}
          </ul>
          <p className="t-eyebrow mb-3 mt-10 text-mute">Call</p>
          <a href="tel:+923054948160" className="line-hover text-[15px] transition hover:text-lime">+92 305 4948160</a>
        </div>
      </div>

      {/* full-bleed wordmark */}
      <div className="select-none overflow-hidden px-2 pt-6">
        <p className="whitespace-nowrap bg-gradient-to-b from-cream/25 via-cream/8 to-transparent bg-clip-text text-center font-display font-medium text-transparent" style={{ fontSize: "19.4vw", lineHeight: 0.8, letterSpacing: "-0.065em", paddingBottom: "1.5vw" }}>CodingHub</p>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-cream/10 px-6 py-5 text-xs text-mute md:px-10">
        <p>© 2026 CodingHub. All rights reserved.</p>
        <p>Rahim Yar Khan · Pakistan</p>
        <p>Photography via Unsplash</p>
      </div>
    </footer>
  );
}
