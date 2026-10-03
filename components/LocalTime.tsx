"use client";
import { useEffect, useState } from "react";

// Live local time in Rahim Yar Khan (PKT)
export default function LocalTime({ className = "" }: { className?: string }) {
  const [t, setT] = useState("");
  useEffect(() => {
    const f = () => setT(new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false, timeZone: "Asia/Karachi" }).format(new Date()));
    f();
    const id = setInterval(f, 1000);
    return () => clearInterval(id);
  }, []);
  return <span className={className} suppressHydrationWarning>{t || "--:--:--"} PKT</span>;
}
