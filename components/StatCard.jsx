"use client";
import { useEffect, useRef, useState } from "react";

export default function StatCard({ value, suffix = "", label }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const target = parseFloat(value);
        const decimals = String(value).includes(".") ? 1 : 0;
        const duration = 1400;
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
          setDisplay((target * eased).toFixed(decimals));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="stat-card">
      <div className="stat-num">{display}{suffix}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}
