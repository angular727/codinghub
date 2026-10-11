import Link from "next/link";
import LocalTime from "@/components/LocalTime";
import { Words } from "@/components/Words";
import { products, services } from "@/lib/data";

const menu = [["Home", "/"], ["Services", "/services"], ["Products", "/products"], ["Projects", "/projects"], ["About", "/about"], ["Contact", "/contact"]];
const social = [
  { n: "Facebook", h: "#", icon: <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8Z" /> },
  { n: "LinkedIn", h: "#", icon: <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 11v5M8 8v.01M12 16v-5M12 13a2.5 2.5 0 0 1 5 0v3" /></> },
  { n: "X", h: "#", icon: <path d="m4 4 16 16M20 4 4 20" /> },
  { n: "Instagram", h: "#", icon: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5v.01" /></> },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-cream">
      {/* closing call to action */}
      <section className="wrap pb-20 pt-20 md:pb-24 md:pt-28">
        <div data-reveal className="relative overflow-hidden rounded-[32px] border border-cream/10 bg-gradient-to-br from-[#17171b] via-card to-ink p-8 md:p-16">
          {/* soft grid, glow and rings */}
          <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(236,232,225,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(236,232,225,.05)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_80%_100%_at_100%_0%,#000,transparent_70%)]" />
          <div className="absolute -right-32 -top-32 h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,rgba(215,255,47,.16),transparent_62%)]" />
          <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime/60 to-transparent" />

          <div className="relative grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="t-eyebrow mb-7 flex items-center gap-3 text-cream/70"><span className="h-2 w-2 rounded-full bg-lime" />Got a project in mind?</p>
            <h2 className="t-h1" style={{ fontSize: "clamp(2.2rem, 5vw, 4.4rem)" }}>
              <Words text="Let's build something" /> <Words text="remarkable." className="acc" />
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/65 md:text-lg">Tell us about your business. We will reply with a clear plan, timeline and next steps.</p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex h-14 items-center gap-2 rounded-full bg-lime px-8 text-sm font-semibold text-ink transition hover:bg-cream">Start a project <span aria-hidden="true">↗</span></Link>
              <a href="https://wa.me/923058444160" target="_blank" rel="noopener noreferrer" className="inline-flex h-14 items-center gap-2.5 rounded-full border border-cream/25 bg-ink/40 px-8 text-sm font-semibold backdrop-blur transition hover:border-cream hover:bg-cream hover:text-ink">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.23 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.23-.16-.48-.29Z" /></svg>
                Chat on WhatsApp
              </a>
            </div>

          </div>

          <ul className="divide-y divide-cream/10 rounded-[22px] border border-cream/10 bg-ink/50 backdrop-blur lg:col-span-5">
            {[
              { l: "Call us", v: "+92 305 8444160", h: "tel:+923058444160", icon: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" /> },
              { l: "Email us", v: "codinghubpro@gmail.com", h: "mailto:codinghubpro@gmail.com", icon: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></> },
              { l: "Visit us", v: "Rahim Yar Khan, Pakistan", h: undefined, icon: <><path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11Z" /><circle cx="12" cy="10" r="2.5" /></> },
            ].map(({ l, v, h, icon }) => {
              const inner = (
                <>
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-cream/10 bg-card text-lime">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{icon}</svg>
                  </span>
                  <span className="min-w-0">
                    <span className="t-eyebrow block text-mute">{l}</span>
                    <span className="mt-1 block break-words text-base font-medium">{v}</span>
                  </span>
                </>
              );
              return (
                <li key={l}>
                  {h ? <a href={h} className="flex items-center gap-4 p-5 transition hover:text-lime md:p-6">{inner}</a> : <div className="flex items-center gap-4 p-5 md:p-6">{inner}</div>}
                </li>
              );
            })}
          </ul>
          </div>
        </div>
      </section>

      {/* main footer */}
      <div className="border-t border-cream/10">
        <div data-reveal className="wrap grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-20">
          <div className="sm:col-span-2 lg:col-span-4 lg:pr-10">
            <Link href="/" className="font-display text-2xl font-medium tracking-[-0.04em]">CodingHub</Link>
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-cream/60">Empowering businesses through innovative technology solutions. We help businesses automate their processes and grow.</p>
            <ul className="mt-7 flex gap-3">
              {social.map(({ n, h, icon }) => (
                <li key={n}>
                  <a href={h} aria-label={n} className="grid h-10 w-10 place-items-center rounded-full border border-cream/15 text-cream/70 transition hover:border-lime hover:bg-lime hover:text-ink">
                    <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{icon}</svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Company" className="lg:col-span-2">
            <p className="t-eyebrow mb-5 text-cream/45">Company</p>
            <ul className="space-y-3.5 text-[15px]">{menu.map(([x, h]) => <li key={x}><Link href={h} className="text-cream/75 transition hover:text-lime">{x}</Link></li>)}</ul>
          </nav>

          <nav aria-label="Services" className="lg:col-span-2">
            <p className="t-eyebrow mb-5 text-cream/45">Services</p>
            <ul className="space-y-3.5 text-[15px]">{services.map((s) => <li key={s.t}><Link href="/services" className="text-cream/75 transition hover:text-lime">{s.t}</Link></li>)}</ul>
          </nav>

          <div className="lg:col-span-4">
            <p className="t-eyebrow mb-5 text-cream/45">Get in touch</p>
            <ul className="space-y-5 text-[15px]">
              <li>
                <span className="block text-xs text-cream/45">Phone</span>
                <a href="tel:+923058444160" className="mt-1 inline-block text-cream/90 transition hover:text-lime">+92 305 8444160</a>
              </li>
              <li>
                <span className="block text-xs text-cream/45">Email</span>
                <a href="mailto:codinghubpro@gmail.com" className="mt-1 inline-block break-words text-cream/90 transition hover:text-lime">codinghubpro@gmail.com</a>
              </li>
              <li>
                <span className="block text-xs text-cream/45">Studio</span>
                <p className="mt-1 max-w-xs leading-relaxed text-cream/75">Shahab Town, St #2, Khanpur Rd, near Ada Iqbal Nagar, Rahim Yar Khan, Pakistan</p>
                <p className="mt-2 flex items-center gap-2 text-xs text-cream/50"><span className="h-1.5 w-1.5 rounded-full bg-lime" /><LocalTime /></p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="wrap flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-6 text-xs text-cream/45">
          <p>© 2026 CodingHub. All rights reserved.</p>
          <p className="hidden sm:block">Photography via Unsplash</p>
          <a href="#main" className="inline-flex items-center gap-2 transition hover:text-lime">Back to top <span aria-hidden="true">↑</span></a>
        </div>
      </div>
    </footer>
  );
}
