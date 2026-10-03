"use client";
import { useState } from "react";

const field = "w-full border-b border-cream/25 bg-transparent px-0 py-5 text-lg text-cream outline-none transition placeholder:text-cream/35 focus:border-lime";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = `Name: ${f.get("name")}\nPhone: ${f.get("phone")}\nInterested in: ${f.get("topic")}\n\n${f.get("message")}`;
    window.location.href = `mailto:info@codinghub.com?subject=${encodeURIComponent(`Enquiry from ${f.get("name")}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={submit} className="space-y-2">
      <div className="grid gap-x-10 sm:grid-cols-2">
        <input name="name" required placeholder="Your name" className={field} />
        <input name="phone" placeholder="Phone (optional)" className={field} />
      </div>
      <select name="topic" className={`${field} [&>option]:bg-card`} defaultValue="Web application">
        {["Web application", "Mobile app", "IoT solution", "AI integration", "Website", "Business automation", "A product demo"].map((o) => <option key={o}>{o}</option>)}
      </select>
      <textarea name="message" required rows={4} placeholder="Tell us about your business and what you want to achieve" className={field} />
      <button data-magnetic className="mt-8 inline-flex items-center gap-3 rounded-full bg-lime px-10 py-5 text-sm font-semibold text-ink transition hover:bg-cream">Send message <span>↗</span></button>
      {sent && <p className="pt-3 text-xs text-mute">Your email app will open with the message ready to send to info@codinghub.com.</p>}
    </form>
  );
}
