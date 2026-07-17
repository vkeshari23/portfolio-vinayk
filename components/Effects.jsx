"use client";
import { useEffect, useRef } from "react";

export default function Effects() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    let mx = innerWidth / 2, my = innerHeight / 2;
    let rx = mx, ry = my;
    let raf;

    const onMove = (e) => {
      mx = e.clientX; my = e.clientY;
      // page-wide spotlight follows the cursor
      document.documentElement.style.setProperty("--mx", mx + "px");
      document.documentElement.style.setProperty("--my", my + "px");
      if (dot) dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%,-50%)`;

      // per-card glow position (skill groups)
      const el = e.target.closest?.(".skill-group");
      if (el) {
        const r = el.getBoundingClientRect();
        el.style.setProperty("--cx", e.clientX - r.left + "px");
        el.style.setProperty("--cy", e.clientY - r.top + "px");
      }
    };

    const loop = () => {
      // ring trails the dot with easing
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      if (ring) ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(loop);
    };

    const onOver = (e) => {
      const interactive = e.target.closest?.("a, button, .skill-chip, .project-card, .photo-card");
      ring?.classList.toggle("hovering", !!interactive);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div className="grid-bg" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="spotlight" />
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
