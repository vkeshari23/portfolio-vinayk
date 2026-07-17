"use client";
import { useEffect, useState } from "react";
import HireModal from "./HireModal";

const LINKS = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Resume", "#resume"],
  ["Contact", "#contact"],
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* nav stays fixed at the top at all times */}
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="container nav-inner">
          <a href="#top" className="logo">
            Vinay<span> Keshari</span>
          </a>
          <div className="nav-links">
            {LINKS.map(([label, href]) => (
              <a key={href} href={href}>{label}</a>
            ))}
          </div>
          <button className="nav-cta" onClick={() => setModal(true)}>
            Hire Me
          </button>
          <button
            aria-label="Menu"
            className={`hamburger ${open ? "open" : ""}`}
            onClick={() => setOpen(!open)}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${open ? "open" : ""}`}>
        {LINKS.map(([label, href], i) => (
          <a
            key={href}
            href={href}
            style={{ transitionDelay: open ? `${0.08 * i + 0.1}s` : "0s" }}
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}
        <a
          href="#"
          style={{ transitionDelay: open ? "0.55s" : "0s", color: "var(--blue-2)" }}
          onClick={(e) => {
            e.preventDefault();
            setOpen(false);
            setModal(true);
          }}
        >
          Hire Me →
        </a>
      </div>

      <HireModal open={modal} onClose={() => setModal(false)} />
    </>
  );
}
