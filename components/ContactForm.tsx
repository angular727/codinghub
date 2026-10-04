"use client";
import { useState } from "react";

const field = "w-full border-b border-cream/25 bg-transparent px-0 py-5 text-lg text-cream outline-none transition placeholder:text-cream/35 focus:border-lime";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const f = new FormData(form);
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `Enquiry from ${f.get("name")}`,
          from_name: "CodingHub Website",
          name: f.get("name"),
          email: f.get("email"),
          phone: f.get("phone"),
          interested_in: f.get("topic"),
          message: f.get("message"),
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={submit} className="space-y-2">
      <div className="grid gap-x-10 sm:grid-cols-2">
        <input name="name" required placeholder="Your name" className={field} />
        <input name="phone" placeholder="Phone (optional)" className={field} />
      </div>
      <input name="email" type="email" required placeholder="Your email" className={field} />
      <select name="topic" className={`${field} [&>option]:bg-card`} defaultValue="Web application">
        {["Web application", "Mobile app", "IoT solution", "AI integration", "Website", "Business automation", "A product demo"].map((o) => <option key={o}>{o}</option>)}
      </select>
      <textarea name="message" required rows={4} placeholder="Tell us about your business and what you want to achieve" className={field} />
      <button disabled={status === "sending"} data-magnetic className="mt-8 inline-flex items-center gap-3 rounded-full bg-lime px-10 py-5 text-sm font-semibold text-ink transition hover:bg-cream disabled:opacity-60">{status === "sending" ? "Sending…" : "Send message"} <span>↗</span></button>
      {status === "sent" && <p className="pt-3 text-sm text-lime">Thank you! Your message has been sent. We will get back to you soon.</p>}
      {status === "error" && <p className="pt-3 text-sm text-cream/70">Something went wrong. Please try again, or email us directly at info@codinghub.com.</p>}
    </form>
  );
}
