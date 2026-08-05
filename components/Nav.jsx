"use client";
import { useEffect, useState } from "react";
import HireModal from "./HireModal";
import { RESUME_URL, downloadResume } from "./resume";

const LINKS = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);

  // `mounted` keeps the overlay in the DOM long enough to animate closed;
  // `shown` drives the .open class one frame later so the fade-in actually runs.
  const [mounted, setMounted] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // never leave the mobile overlay open when the layout goes back to desktop
  useEffect(() => {
    const onResize = () => window.innerWidth > 900 && setOpen(false);
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (open) {
      setMounted(true);
      const t = setTimeout(() => setShown(true), 20);
      return () => clearTimeout(t);
    }
    setShown(false);
    const t = setTimeout(() => setMounted(false), 400);
    return () => clearTimeout(t);
  }, [open]);

  return (
    <>
      {/* sticky: stays pinned to the top through every scroll */}
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="container nav-inner">
          <a href="#home" className="logo">
            Vinay&nbsp;<span>Keshari</span>
          </a>

          <div className="nav-links">
            {LINKS.map(([label, href]) => (
              <a key={href} href={href}>{label}</a>
            ))}
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={downloadResume}
            >
              Resume
            </a>
          </div>

          <button className="nav-cta" onClick={() => setModal(true)}>
            Hire Me
          </button>
          <button
            aria-label="Menu"
            aria-expanded={open}
            className={`hamburger ${open ? "open" : ""}`}
            onClick={() => setOpen(!open)}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* `hidden` guarantees this never flashes as a bare list of links,
          even before the stylesheet has loaded */}
      <div className={`mobile-menu ${shown ? "open" : ""}`} hidden={!mounted}>
        {LINKS.map(([label, href], i) => (
          <a
            key={href}
            href={href}
            style={{ transitionDelay: shown ? `${0.08 * i + 0.1}s` : "0s" }}
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{ transitionDelay: shown ? `${0.08 * LINKS.length + 0.1}s` : "0s" }}
          onClick={() => {
            downloadResume();
            setOpen(false);
          }}
        >
          Resume
        </a>
        <a
          href="#"
          style={{ transitionDelay: shown ? "0.62s" : "0s", color: "var(--blue-2)" }}
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
