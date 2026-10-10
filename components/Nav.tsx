"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LocalTime from "@/components/LocalTime";

const links = [
  { l: "Home", h: "/" },
  { l: "Services", h: "/services" },
  { l: "Products", h: "/products" },
  { l: "Projects", h: "/projects" },
  { l: "About", h: "/about" },
];

export default function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const on = (h: string) => (h === "/" ? path === "/" : path.startsWith(h));

  useEffect(() => { setOpen(false); }, [path]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-[90] flex flex-col items-center px-4">
      <div className="pointer-events-auto flex w-full max-w-[44rem] items-center justify-between gap-1 rounded-full border border-cream/15 bg-ink/90 p-1.5 pl-5 shadow-lg shadow-black/30 backdrop-blur-xl md:w-auto md:max-w-none">
        <Link href="/" className="mr-3 font-display text-[17px] font-medium tracking-[-0.04em] transition hover:[-webkit-text-stroke:0.5px_currentColor]">CodingHub<span className="text-lime">.</span></Link>

        <nav className="hidden items-center md:flex">
          {links.map(({ l, h }) => (
            <Link key={h} href={h} className={`rounded-full px-4 py-2 text-[13px] transition ${on(h) ? "bg-cream/10 text-cream" : "text-cream/60 hover:text-cream"} hover:[-webkit-text-stroke:0.5px_currentColor]`}>{l}</Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <Link href="/contact" className="hidden rounded-full bg-lime px-4 py-2 text-[13px] font-medium text-ink transition hover:bg-cream sm:inline-block">Let&apos;s talk</Link>
          <button onClick={() => setOpen((o) => !o)} aria-label="Menu" className="grid h-9 w-9 place-items-center rounded-full border border-cream/15 md:hidden">
            <span className="relative block h-2 w-4">
              <span className={`absolute left-0 h-px w-4 bg-current transition-all duration-300 ${open ? "top-[3.5px] rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 h-px w-4 bg-current transition-all duration-300 ${open ? "top-[3.5px] -rotate-45" : "top-[7px]"}`} />
            </span>
          </button>
        </div>
      </div>

      {/* compact dropdown (mobile) */}
      <div className={`pointer-events-auto mt-2 w-full max-w-[44rem] rounded-3xl border border-cream/10 bg-card/95 p-5 shadow-2xl shadow-black/50 backdrop-blur-xl md:hidden ${open ? "block" : "hidden"}`}>
        <ul>
          {[...links, { l: "Contact", h: "/contact" }].map(({ l, h }, i) => (
            <li key={h} className="m-item">
              <Link href={h} className={`flex items-baseline gap-4 border-b border-cream/10 py-3 text-xl font-medium tracking-[-0.03em] ${on(h) ? "text-lime" : ""}`}>
                <span className="w-5 text-[11px] text-mute">0{i + 1}</span>{l}
              </Link>
            </li>
          ))}
        </ul>
        <div className="m-item mt-4 flex items-center justify-between text-xs text-mute">
          <a href="mailto:info@codinghub.com">info@codinghub.com</a>
          <LocalTime />
        </div>
      </div>
    </header>
  );
}
