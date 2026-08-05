"use client";
import { useEffect, useRef, useState } from "react";
import { RESUME_URL, downloadResume } from "./resume";

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
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div>
          <div className="hero-badge">
            <span className="pulse-dot" /> Open to new opportunities
          </div>
          <h1>
            Hey, I&apos;m <span className="gradient-text">Vinay Keshari</span>
          </h1>
          <div className="typing-line">
            <span className="typed">{typed}</span>
            <span className="caret" />
          </div>
          <p className="hero-desc">
            I build fast, scalable web applications end to end — from the interface
            all the way down to the database.
          </p>
          {/* Home stays deliberately minimal: name, one-line intro, resume.
              Contact links live in #contact, skills in #skills. */}
          <div className="hero-actions">
            <a
              className="btn btn-primary"
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={downloadResume}
            >
              <span className="dl-ico">⬇</span> My Resume
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
