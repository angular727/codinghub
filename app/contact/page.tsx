import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = { title: "Contact" };

const info = [
  ["Email", "info@codinghub.com", "mailto:info@codinghub.com"],
  ["Phone", "+92 305 4948160", "tel:+923054948160"],
  ["Studio", "Shahab Town, St #2, Khanpur Rd, near Ada Iqbal Nagar, Rahim Yar Khan", "#"],
];

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="Let's build your" accent="next big thing." text="Tell us about your business and we will show you how technology can automate it." />
      <section className="wrap pb-12">
        <div className="grid gap-16 border-t border-cream/15 pt-14 lg:grid-cols-12">
          <div data-reveal className="lg:col-span-7"><ContactForm /></div>
          <ul data-reveal className="lg:col-span-4 lg:col-start-9">
            {info.map(([l, v, h]) => (
              <li key={l} className="border-b border-cream/15 py-6 first:pt-0">
                <p className="t-eyebrow text-lime">{l}</p>
                <a href={h} className="t-h3 mt-2 block transition hover:text-lime">{v}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
