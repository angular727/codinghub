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
      <section className="wrap pb-20 pt-20 md:pb-24 md:pt-28">
        <div className="relative overflow-hidden rounded-[28px] border border-cream/10 bg-card px-7 py-14 md:px-14 md:py-20">
          <div className="absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(215,255,47,.18),transparent_65%)]" />
          <div className="relative grid items-end gap-10 md:grid-cols-12">
            <div className="md:col-span-8">
              <p className="t-eyebrow mb-6 flex items-center gap-3 text-mute"><span className="h-2 w-2 rounded-full bg-lime" />Got a project in mind?</p>
              <h2 className="t-h1" style={{ fontSize: "clamp(2.2rem, 5vw, 4.6rem)" }}>
                <Words text="Let's build something" /> <Words text="remarkable." className="acc" />
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/65">Tell us about your business. We will reply with a clear plan, timeline and next steps.</p>
            </div>
            <div className="flex flex-wrap gap-3 md:col-span-4 md:justify-end">
              <Link href="/contact" className="rounded-full bg-lime px-8 py-4 text-sm font-medium text-ink transition hover:bg-cream">Start a project</Link>
              <a href="https://wa.me/923054948160" target="_blank" rel="noopener noreferrer" className="rounded-full border border-cream/30 px-8 py-4 text-sm font-medium transition hover:border-cream hover:bg-cream hover:text-ink">Chat on WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      {/* full-width email band */}
      <a href="mailto:info@codinghub.com" className="group block border-y border-cream/10 transition-colors duration-300 hover:bg-lime hover:text-ink">
        <div className="wrap flex items-center justify-between gap-6 py-8 md:py-10">
          <span className="font-display font-medium tracking-[-0.045em]" style={{ fontSize: "clamp(1.6rem, 4vw, 3.6rem)", lineHeight: 1 }}>info@codinghub.com</span>
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-current text-xl md:h-16 md:w-16 md:text-2xl">↗</span>
        </div>
      </a>

      {/* columns */}
      <div className="wrap grid grid-cols-2 lg:grid-cols-12">
        <div className="col-span-2 border-b border-cream/10 py-8 md:py-10 lg:col-span-3 lg:border-b-0 lg:border-r lg:pr-8">
          <p className="max-w-xs text-base leading-relaxed text-cream/75">Empowering businesses through innovative technology solutions. We help businesses automate their processes and grow.</p>
          <p className="t-eyebrow mt-10 text-mute">Studio</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/70">Shahab Town, St #2, Khanpur Rd, near Ada Iqbal Nagar, Rahim Yar Khan, Pakistan</p>
          <p className="mt-6 flex items-center gap-2 text-sm text-cream/70"><span className="h-1.5 w-1.5 rounded-full bg-lime [animation:blink_1.6s_infinite]" /><LocalTime /></p>
        </div>

        <div className="border-b border-cream/10 py-8 md:p-8 lg:col-span-2 lg:border-b-0 lg:border-r">
          <p className="t-eyebrow mb-6 text-mute">Menu</p>
          <ul className="space-y-3 text-[15px]">{menu.map(([x, h]) => <li key={x}><Link href={h} className="line-hover transition hover:text-lime">{x}</Link></li>)}</ul>
        </div>

        <div className="border-b border-cream/10 py-8 md:p-8 lg:col-span-2 lg:border-b-0 lg:border-r">
          <p className="t-eyebrow mb-6 text-mute">Services</p>
          <ul className="space-y-3 text-[15px]">{services.map((s) => <li key={s.t}><Link href="/services" className="line-hover transition hover:text-lime">{s.t}</Link></li>)}</ul>
        </div>

        <div className="col-span-2 border-b border-cream/10 py-8 md:p-8 lg:col-span-3 lg:border-b-0 lg:border-r">
          <p className="t-eyebrow mb-6 text-mute">Products</p>
          <ul className="grid gap-x-8 gap-y-3 text-[15px] sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">{products.map((p) => <li key={p.slug}><Link href={`/products/${p.slug}`} className="line-hover transition hover:text-lime">{p.t}</Link></li>)}</ul>
        </div>

        <div className="col-span-2 py-8 md:p-8 lg:col-span-2 lg:pr-0">
          <p className="t-eyebrow mb-6 text-mute">Connect</p>
          <ul className="space-y-3 text-[15px]">
            {social.map((s) => <li key={s}><a href="#" className="group inline-flex items-center gap-2 transition hover:text-lime">{s}<span className="text-xs opacity-0 transition group-hover:opacity-100">↗</span></a></li>)}
          </ul>
          <p className="t-eyebrow mb-3 mt-10 text-mute">Call</p>
          <a href="tel:+923054948160" className="line-hover text-[15px] transition hover:text-lime">+92 305 4948160</a>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="wrap flex flex-wrap items-center justify-between gap-3 py-5 text-xs text-mute">
          <p>© 2026 CodingHub. All rights reserved.</p>
          <p>Rahim Yar Khan · Pakistan</p>
          <p>Photography via Unsplash</p>
        </div>
      </div>
    </footer>
  );
}
