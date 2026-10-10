import Link from "next/link";
import { ScrubWords } from "@/components/Words";

export default function Statement() {
  return (
    <section className="wrap py-28 md:py-44">
      <div className="grid gap-10 md:grid-cols-12">
        <p data-reveal className="t-eyebrow flex items-start gap-3 text-mute md:col-span-3"><span className="mt-1 h-2 w-2 rounded-full bg-lime" />About CodingHub</p>
        <div className="md:col-span-9">
          <p className="t-lead">
            <ScrubWords text="We are a software company building cloud applications, mobile apps, IoT and AI solutions that help businesses automate their processes and grow." />
          </p>
          <Link href="/about" className="group mt-12 inline-flex items-center gap-4 text-sm">
            <span className="grid h-12 w-12 place-items-center rounded-full border border-cream/30 transition group-hover:border-lime group-hover:bg-lime group-hover:text-ink">↗</span>
            <span className="line-hover">More about us</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
