"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Calm, lightweight page behaviour: below-the-fold blocks fade in once as they scroll into view.
export default function Experience({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("rv-in");
        io.unobserve(e.target);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });

    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) return;
      el.style.transitionDelay = `${Number(el.dataset.delay || 0)}s`;
      el.classList.add("rv");
      io.observe(el);
    });

    return () => io.disconnect();
  }, [pathname]);

  return <>{children}</>;
}
