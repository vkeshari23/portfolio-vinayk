"use client";
import { useEffect, useRef, useState } from "react";

const ROLES = [
  "Full Stack Developer",
  "MERN Stack Engineer",
  "Next.js Specialist",
  "Problem Solver",
];

function useTyping(words) {
  const [text, setText] = useState("");
  useEffect(() => {
    let word = 0, char = 0, deleting = false, t;
    const tick = () => {
      const current = words[word];
      char += deleting ? -1 : 1;
      setText(current.slice(0, char));
      let speed = deleting ? 45 : 90;
      if (!deleting && char === current.length) { speed = 1600; deleting = true; }
      else if (deleting && char === 0) { deleting = false; word = (word + 1) % words.length; speed = 350; }
      t = setTimeout(tick, speed);
    };
    t = setTimeout(tick, 400);
    return () => clearTimeout(t);
  }, [words]);
  return text;
}

export default function Hero() {
  const typed = useTyping(ROLES);
  const cardRef = useRef(null);

  // 3D tilt that follows the mouse over the photo
  const onTilt = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `rotateY(${x * 16}deg) rotateX(${-y * 16}deg)`;
  };
  const resetTilt = () => {
    if (cardRef.current) cardRef.current.style.transform = "rotateY(0deg) rotateX(0deg)";
  };

  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div>
          <div className="hero-badge">
            <span className="pulse-dot" /> Open to new opportunities
          </div>
          <h1>
            Hi, I&apos;m <span className="gradient-text">Vinay Keshari</span>
          </h1>
          <div className="typing-line">
            <span className="typed">{typed}</span>
            <span className="caret" />
          </div>
          <p className="hero-desc">
            Full Stack Developer with 1.5+ years of experience building scalable,
            production-grade web applications across fintech, e-commerce, and enterprise
            domains — owning everything from pixel-perfect UIs to robust APIs and databases.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">View My Work ↓</a>
            <a className="btn btn-ghost" href="/Vinay_Keshari_Resume.pdf" download="Vinay_Keshari_Resume.pdf">
              <span className="dl-ico">⬇</span> Download Resume
            </a>
          </div>
          <div className="hero-socials">
            <a className="social-pill" href="https://github.com/vkeshari23" target="_blank" rel="noreferrer" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.78 1.05.78 2.12v3.14c0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>
            </a>
            <a className="social-pill" href="https://www.linkedin.com/in/vinay-keshari-301125240/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>
            </a>
            <a className="social-pill wa" href="https://wa.me/919305266247" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.11 3.22 5.1 4.51.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35M12.05 21.79h-.01a9.8 9.8 0 0 1-5-1.37l-.36-.21-3.72.98.99-3.63-.23-.37a9.8 9.8 0 0 1-1.5-5.22c0-5.42 4.41-9.83 9.84-9.83a9.78 9.78 0 0 1 9.83 9.84c0 5.42-4.41 9.83-9.84 9.83m8.37-18.2A11.71 11.71 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.87 11.87 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.16-3.49-8.4"/></svg>
            </a>
            <a className="social-pill" href="mailto:vinaykeshari076@gmail.com" aria-label="Email">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/></svg>
            </a>
          </div>
        </div>

        <div className="photo-wrap">
          <div
            ref={cardRef}
            className="photo-card"
            onMouseMove={onTilt}
            onMouseLeave={resetTilt}
          >
            <div className="photo-ring" />
            <div className="photo-ring-2" />
            <div className="photo-glow" />
            <img src="/vinay.jpg" alt="Vinay Keshari — Full Stack Developer" />
            <div className="float-chip chip-1">⚛️ <b>React</b> / Next.js</div>
            <div className="float-chip chip-2">🚀 <b>1.5+ yrs</b> experience</div>
            <div className="float-chip chip-3">🗄️ <b>PostgreSQL</b> · <b>MongoDB</b></div>
          </div>
        </div>
      </div>

      <div className="scroll-hint">
        <div className="mouse-icon"><i /></div>
        scroll
      </div>
    </section>
  );
}
