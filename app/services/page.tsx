import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ServicesStack from "@/components/ServicesStack";
import Process from "@/components/Process";
import Marquee from "@/components/Marquee";

export const metadata: Metadata = { title: "Services" };

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Services" title="Technology that moves your" accent="business forward." text="Six integrated capabilities, delivered by one team." />
      <ServicesStack heading={false} />
      <Marquee rev />
      <Process />
    </>
  );
}

