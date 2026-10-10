import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Numbers from "@/components/Numbers";
import Process from "@/components/Process";
import Marquee from "@/components/Marquee";
import { ScrubWords } from "@/components/Words";

export const metadata: Metadata = { title: "About" };

const values = [
  { t: "Our mission", d: "Empowering businesses through innovative technology solutions, helping them automate their processes and grow." },
  { t: "Our focus", d: "Cloud-based web applications, cross-platform mobile apps, IoT, AI integration, websites and business automation." },
  { t: "Our promise", d: "Reliable software, clear communication and long-term support, so technology works for you." },
];

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="About" title="We build technology that" accent="helps businesses grow." text="A software company based in Rahim Yar Khan, Pakistan." image="/photos/team.jpg" />
      <section className="wrap py-24 md:py-32">
        <p className="t-lead max-w-5xl">
          <ScrubWords text="CodingHub delivers industry solutions to organizations across healthcare, retail, food, education and more, from cloud web apps to AI, IoT and automation." />
        </p>
        <div className="mt-20 grid border-t border-cream/15 md:grid-cols-3">
          {values.map((v, i) => (
            <div key={v.t} data-reveal data-delay={i * 0.08} className="border-b border-cream/15 py-10 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0">
              <p className="font-display text-base text-lime">0{i + 1}</p>
              <h2 className="t-h2 mt-6">{v.t}</h2>
              <p className="mt-3 text-sm leading-relaxed text-cream/60">{v.d}</p>
            </div>
          ))}
        </div>
      </section>
      <Marquee />
      <Numbers />
      <Process />
    </>
  );
}

