const icons: Record<string, React.ReactNode> = {
  "Web Applications": <><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M3 9h18M8 21h8M12 18v3" /></>,
  "Mobile Apps": <><rect x="7" y="2" width="10" height="20" rx="2" /><path d="M11 18h2" /></>,
  IoT: <><path d="M5 12.5a10 10 0 0 1 14 0M8 15.5a6 6 0 0 1 8 0" /><circle cx="12" cy="19" r="1" /><path d="M2 9a14 14 0 0 1 20 0" /></>,
  "AI Integration": <><rect x="6" y="6" width="12" height="12" rx="2" /><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" /><path d="M10 12h4" /></>,
  Websites: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></>,
  Automation: <><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9 7 7M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1" /></>,
};

const items = Object.keys(icons);

// Scrolling capability strip: moves slowly, pauses on hover
export default function Marquee({ rev = false }: { rev?: boolean }) {
  const list = rev ? [...items].reverse() : items;
  const row = [...list, ...list, ...list, ...list];
  return (
    <section className="group overflow-hidden bg-lime py-5 text-ink md:py-6">
      <div className={`marquee ${rev ? "marquee-rev" : ""}`}>
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-3 whitespace-nowrap px-8 font-display text-base font-medium tracking-[-0.01em] md:px-12 md:text-lg">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{icons[t]}</svg>
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}
