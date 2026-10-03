import Link from "next/link";
import { Words } from "@/components/Words";

export default function PageHeader({ eyebrow, title, accent, text, crumbs, image }: {
  eyebrow: string; title: string; accent?: string; text?: string; crumbs?: [string, string][]; image?: string;
}) {
  return (
    <section className="px-6 pb-12 pt-36 md:px-10 md:pt-44">
      <div className="mx-auto max-w-[1600px]">
        <p className="hero-fade t-eyebrow mb-8 flex items-center gap-3 text-mute">
          <span className="h-2 w-2 rounded-full bg-lime" />
          <Link href="/" className="line-hover transition hover:text-cream">Home</Link>
          {crumbs?.map(([l, h]) => (<span key={h} className="flex gap-3">/ <Link href={h} className="line-hover transition hover:text-cream">{l}</Link></span>))}
          <span>/</span><span className="text-cream">{eyebrow}</span>
        </p>
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <h1 className="hero-split t-h1 md:col-span-8">
            <Words text={title} />{accent && <> <Words text={accent} className="acc" /></>}
          </h1>
          {text && <p className="hero-fade text-[15px] leading-relaxed text-cream/60 md:col-span-3 md:col-start-10">{text}</p>}
        </div>
        {image && (
          <div data-clip className="relative mt-14 h-[44vh] overflow-hidden rounded-[26px] md:h-[68vh]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img data-parallax src={image} alt="" className="absolute inset-x-0 -top-[9%] h-[118%] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
          </div>
        )}
      </div>
    </section>
  );
}
