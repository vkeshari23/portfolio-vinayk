import Effects from "../components/Effects";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Reveal from "../components/Reveal";
import StatCard from "../components/StatCard";
import ResumeButtons from "../components/ResumeButtons";
import ResumePreview from "../components/ResumePreview";
import DemoCreds from "../components/DemoCreds";

const SKILLS = [
  "JavaScript", "TypeScript", "React.js", "Next.js", "Redux", "Redux Toolkit",
  "React Query", "Node.js", "Express.js", "NestJS", "PostgreSQL", "MongoDB",
  "GraphQL", "Tailwind CSS", "Chakra UI", "HTML5", "CSS3", "REST APIs",
  "Git", "CI/CD", "OOP", "DSA", "Responsive Design",
];

const SOFT_SKILLS = [
  ["🧩", "Problem Solving", "Breaking messy requirements down into small, shippable pieces."],
  ["⏱️", "Time Management", "Juggling parallel projects and deadlines without dropping quality."],
  ["🌱", "Adaptability", "Picking up new stacks and codebases fast and staying productive through change."],
  ["🎯", "Ownership", "Taking a feature from first commit to production and supporting it after."],
  ["🗣️", "Communication", "Explaining technical work clearly to clients and non-technical teammates."],
  ["🤝", "Team Collaboration", "Working closely with designers, backend devs and QA to ship on time."],
];

const STATS = [
  { value: "1", suffix: "+", label: "Years Experience" },
  { value: "7", suffix: "+", label: "Projects Delivered" },
  { value: "2", suffix: "", label: "Companies" },
  { value: "1", suffix: "", label: "Product Award" },
];

const EXPERIENCE = [
  {
    role: "Full Stack Developer (MERN)",
    company: "Tatvam AI Labs · Bangalore",
    when: "Current",
    points: [
      "Developed and maintained three production platforms — Divyamarga, Gurumurthy Guruji, and Sai Samasthana — owning end-to-end frontend and backend development.",
      "Built Divyamarga, a hybrid astrology + e-commerce platform combining consultation booking with a full product catalog and checkout flow.",
      "Engineered Sai Samasthana, a management system tracking records of devotees, temples, and volunteers with centralized reporting.",
      "Designed responsive, SEO-friendly UIs with Next.js and Tailwind CSS backed by scalable REST APIs on Node.js, Express, and PostgreSQL.",
    ],
    stack: ["Next.js", "Tailwind CSS", "Node.js", "Express", "PostgreSQL"],
  },
  {
    role: "Freelance Full Stack Developer",
    company: "Remote",
    when: "5+ Months",
    points: [
      "Partnered directly with a startup client to translate business and design requirements into a production-ready website.",
      "Owned the full delivery cycle — UI design, development, and deployment — as an independent freelance developer.",
    ],
    stack: ["Next.js", "Tailwind CSS", "MongoDB", "Express", "Node.js"],
  },
  {
    role: "Full Stack Developer (SDE-1)",
    company: "Sheshi AI",
    when: "9 Months",
    points: [
      "Contributed to Sheshi FR2.0, a financial reporting platform, delivering features across the full stack from UI to database.",
      "Built dynamic, high-performance interfaces with Next.js and Tailwind CSS, backed by scalable services using Node.js, NestJS, and PostgreSQL.",
      "Awarded the “Fingerprint of Sheshi FR2.0” for outstanding contribution to the product's core development.",
    ],
    stack: ["Next.js", "Tailwind CSS", "Node.js", "NestJS", "PostgreSQL"],
  },
];

const EDUCATION = [
  {
    icon: "🎓",
    course: "B.Tech in Computer Science",
    school: "B.N. College of Engineering and Technology, Lucknow",
    note: "Bachelor of Technology — the engineering foundation behind how I approach systems.",
  },
  {
    icon: "💻",
    course: "Full Stack Web Development",
    school: "Masai School, Bangalore",
    note: "Intensive full stack program focused on the MERN stack, DSA, and real-world problem solving.",
  },
];

const PROJECTS = [
  {
    icon: "🚀",
    kind: "Freelance",
    name: "Futureloopix — Company Website",
    desc: "Designed and developed the complete frontend of Futureloopix, a startup's official company website, based on client requirements. Built a custom, fully responsive UI shipped end to end as a live production website.",
    stack: ["Next.js", "Tailwind CSS"],
    live: "https://www.futureloopix.com/",
    liveLabel: "Live Site",
  },
  {
    icon: "🛍️",
    kind: "Industry",
    name: "Divyamarga",
    desc: "A hybrid platform fusing an astrology consultation app with a full e-commerce experience — product catalog, cart, and checkout — in a single seamless product.",
    stack: ["Next.js", "Node.js", "PostgreSQL"],
    live: "https://preview.divyamaarg.com/",
  },
  {
    icon: "🛕",
    kind: "Industry",
    name: "Sai Samasthana",
    desc: "A record-management system for a spiritual organization — tracking devotees, temples, and volunteers with centralized data and reporting.",
    stack: ["Next.js", "Express", "PostgreSQL"],
    live: "https://saisamsthana.app/",
    liveLabel: "View Live App",
    accessNote: "Staff CRM — opens on a login screen",
    // This demo opens straight onto a login screen. Fill in a demo account
    // seeded with dummy data (never real devotee/billing records) and the
    // credentials box appears on the card automatically.
    demo: null,
  },
  {
    icon: "💰",
    kind: "Personal",
    name: "Personal Finance Tracker",
    desc: "Track income, expenses, and savings with daily, weekly, monthly, yearly, and all-time filters — visualized through interactive GraphQL-powered charts.",
    stack: ["React.js", "Node.js", "Express", "MongoDB", "GraphQL"],
    live: "https://pft-rkx5.vercel.app/",
    accessNote: "Landing page is open — the dashboard needs an account",
    // The landing page is public but the dashboard needs an account.
    // Add a demo account here so reviewers can see the actual app.
    demo: null,
  },
  {
    icon: "📊",
    kind: "Industry",
    name: "Sheshi FR2.0",
    desc: "A financial reporting platform delivering dynamic report generation and data-heavy dashboards. Contributed across the full stack and earned the product's core-contributor award.",
    stack: ["Next.js", "NestJS", "PostgreSQL"],
    live: null,
    privateNote: "Internal product — no public link",
  },
  {
    icon: "🙏",
    kind: "Industry",
    name: "Gurumurthy Guruji",
    desc: "A polished personal website for Gurumurthy Guruji, built for fast loads, clean content presentation, and full responsiveness across devices.",
    stack: ["Next.js", "Tailwind CSS", "Node.js"],
    live: null,
    privateNote: "Client-owned — no public link",
  },
  {
    icon: "🎥",
    kind: "Personal",
    name: "Live Video Conferencing",
    desc: "A real-time video conferencing platform supporting live multi-user meetings, with a collaborative in-call notepad for shared note-taking.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    live: null,
    privateNote: "Under development — no live link yet",
  },
];

export default function Home() {
  const half = Math.ceil(SKILLS.length / 2);
  const row1 = SKILLS.slice(0, half);
  const row2 = SKILLS.slice(half);

  return (
    <>
      <Effects />
      <Nav />
      <main>
        {/* HOME */}
        <Hero />

        {/* ABOUT — intro, stats, experience & education all live here */}
        <section id="about">
          <div className="container">
            <Reveal>
              <div className="eyebrow">About Me</div>
              <h2 className="section-title">
                Building products <span className="accent">end to end</span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p style={{ color: "var(--muted)", maxWidth: 780, lineHeight: 1.85, fontSize: 16.5 }}>
                I&apos;m a Full Stack Developer from Varanasi, India, specializing in the MERN
                stack and Next.js. After completing my B.Tech at B.N. College of Engineering
                and Technology, Lucknow, I sharpened my skills in full stack development and
                problem solving at Masai School, Bangalore. Since then I&apos;ve shipped
                production software at Sheshi AI and Tatvam AI Labs — from financial reporting
                platforms to e-commerce and organizational management systems — alongside
                freelance work like the Future Loopix website. I love owning features from
                database schema to the final pixel.
              </p>
            </Reveal>

            <div className="stats">
              {STATS.map((s, i) => (
                <Reveal key={s.label} dir="zoom" delay={i * 100}>
                  <StatCard value={s.value} suffix={s.suffix} label={s.label} />
                </Reveal>
              ))}
            </div>

            {/* career progression */}
            <Reveal>
              <h3 className="sub-title">Experience &amp; career progression</h3>
            </Reveal>
            <div className="timeline">
              {EXPERIENCE.map((job, i) => (
                <Reveal key={job.company} dir="left" delay={i * 130}>
                  <div className="tl-item">
                    <div className="tl-dot" />
                    <div className="tl-card">
                      <div className="tl-head">
                        <div className="tl-role">{job.role}</div>
                        <div className="tl-when">{job.when}</div>
                      </div>
                      <div className="tl-company">{job.company}</div>
                      <ul>
                        {job.points.map((p, j) => <li key={j}>{p}</li>)}
                      </ul>
                      <div className="tl-stack">
                        {job.stack.map((t) => <span className="tag" key={t}>{t}</span>)}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* education */}
            <Reveal>
              <h3 className="sub-title">Education</h3>
            </Reveal>
            <div className="edu-grid">
              {EDUCATION.map((e, i) => (
                <Reveal key={e.school} dir={i === 0 ? "left" : "right"} delay={i * 120}>
                  <div className="edu-card">
                    <div className="edu-icon">{e.icon}</div>
                    <div>
                      <h4>{e.course}</h4>
                      <div className="edu-school">{e.school}</div>
                      <p>{e.note}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" style={{ paddingTop: 0 }}>
          <div className="container">
            <Reveal>
              <div className="eyebrow">Skills</div>
              <h2 className="section-title">
                My <span className="accent">tech arsenal</span>
              </h2>
            </Reveal>
          </div>

          <Reveal>
            <div className="marquee">
              <div className="marquee-track">
                {[...row1, ...row1].map((s, i) => (
                  <span className="skill-chip" key={i}><span className="dot" />{s}</span>
                ))}
              </div>
            </div>
            <div className="marquee reverse" style={{ marginTop: 14 }}>
              <div className="marquee-track">
                {[...row2, ...row2].map((s, i) => (
                  <span className="skill-chip" key={i}><span className="dot" />{s}</span>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="container">
            <div className="skill-groups">
              {[
                ["Frontend", "React.js · Next.js · Redux & Redux Toolkit · TanStack React Query · Tailwind CSS · Chakra UI · Responsive, SEO-friendly interfaces"],
                ["Backend", "Node.js · Express.js · NestJS · GraphQL · REST API design & integration"],
                ["Databases", "PostgreSQL · MongoDB · schema design, queries & data modeling"],
                ["Core", "JavaScript · TypeScript · Git · CI/CD pipelines · OOP · Data Structures & Algorithms"],
              ].map(([title, body], i) => (
                <Reveal key={title} delay={i * 110}>
                  <div className="skill-group">
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* soft skills */}
            <Reveal>
              <h3 className="sub-title">Soft skills</h3>
            </Reveal>
            <div className="soft-grid">
              {SOFT_SKILLS.map(([icon, title, body], i) => (
                <Reveal key={title} delay={(i % 3) * 100}>
                  <div className="soft-card">
                    <span className="soft-icon">{icon}</span>
                    <div>
                      <h4>{title}</h4>
                      <p>{body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" style={{ paddingTop: 0 }}>
          <div className="container">
            <Reveal>
              <div className="eyebrow">Projects</div>
              <h2 className="section-title">
                Things I&apos;ve <span className="accent">built</span>
              </h2>
            </Reveal>
            <div className="projects-grid">
              {PROJECTS.map((p, i) => (
                <Reveal key={p.name} delay={(i % 3) * 110}>
                  <div className="project-card">
                    <div className="project-top">
                      <div className="folder-icon">{p.icon}</div>
                      <span className="proj-kind">{p.kind}</span>
                    </div>
                    <h3>{p.name}</h3>
                    <p>{p.desc}</p>
                    <div className="tl-stack">
                      {p.stack.map((t) => <span className="tag" key={t}>{t}</span>)}
                    </div>
                    {/* login-gated demos carry credentials so anyone can get in */}
                    {p.demo ? (
                      <DemoCreds
                        email={p.demo.email}
                        password={p.demo.password}
                        note={p.demo.note}
                      />
                    ) : null}
                    <div className="project-links">
                      {p.live ? (
                        /* every live link opens in its own new tab */
                        <a
                          className="live-link"
                          href={p.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {p.liveLabel || "Live Demo"} <span className="arr">↗</span>
                        </a>
                      ) : null}
                      {/* say up front when a demo sits behind a login, so the
                          link never lands on an unexplained wall */}
                      {p.live && p.accessNote ? (
                        <span className="access-note">{p.accessNote}</span>
                      ) : null}
                      {!p.live ? (
                        /* no deploy link available — rendered as inert text, not a link */
                        <span className="live-link muted" aria-disabled="true">
                          {p.privateNote}
                        </span>
                      ) : null}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section id="achievements" style={{ paddingTop: 0 }}>
          <div className="container">
            <Reveal>
              <div className="eyebrow">Achievements</div>
              <h2 className="section-title">
                Recognition &amp; <span className="accent">wins</span>
              </h2>
            </Reveal>
            <div className="achieve-grid">
              <Reveal dir="left">
                <div className="achieve-card">
                  <div className="achieve-icon">🏆</div>
                  <div>
                    <h3>Fingerprint of Sheshi FR2.0</h3>
                    <p>Awarded for outstanding contribution to the core development of the Sheshi FR2.0 financial reporting product.</p>
                  </div>
                </div>
              </Reveal>
              <Reveal dir="right" delay={120}>
                <div className="achieve-card">
                  <div className="achieve-icon">♟️</div>
                  <div>
                    <h3>Chess Champion</h3>
                    <p>Recognized for strategic thinking and analytical problem-solving — skills I bring to every engineering decision.</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* RESUME */}
        <section id="resume" style={{ paddingTop: 0 }}>
          <div className="container">
            <Reveal>
              <div className="eyebrow">Resume</div>
              <h2 className="section-title">
                My <span className="accent">resume</span>
              </h2>
            </Reveal>
            <div className="resume-grid">
              <Reveal dir="left">
                <ResumeButtons />
              </Reveal>
              <Reveal dir="right" delay={130}>
                <ResumePreview />
              </Reveal>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" style={{ paddingTop: 0 }}>
          <div className="container">
            <Reveal dir="zoom">
              <div className="contact-box">
                <div className="eyebrow" style={{ justifyContent: "center" }}>Contact</div>
                <h2>
                  Let&apos;s build something <span className="gradient-text">great together</span>
                </h2>
                <p>
                  I&apos;m currently open to new opportunities. Whether you have a role,
                  a project, or just want to say hi — my inbox is always open.
                </p>
                <div className="contact-links">
                  <a className="btn btn-primary" href="mailto:vinaykeshari076@gmail.com">
                    ✉️ vinaykeshari076@gmail.com
                  </a>
                  <a className="btn btn-wa" href="https://wa.me/919305266247" target="_blank" rel="noreferrer">
                    💬 WhatsApp Me
                  </a>
                  <a className="btn btn-ghost" href="tel:+919305266247">📞 +91 93052 66247</a>
                </div>
                <div className="hero-socials" style={{ justifyContent: "center" }}>
                  <a className="social-pill wa" href="https://wa.me/919305266247" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.11 3.22 5.1 4.51.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35M12.05 21.79h-.01a9.8 9.8 0 0 1-5-1.37l-.36-.21-3.72.98.99-3.63-.23-.37a9.8 9.8 0 0 1-1.5-5.22c0-5.42 4.41-9.83 9.84-9.83a9.78 9.78 0 0 1 9.83 9.84c0 5.42-4.41 9.83-9.84 9.83m8.37-18.2A11.71 11.71 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.87 11.87 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.16-3.49-8.4"/></svg>
                  </a>
                  <a className="social-pill" href="https://github.com/vkeshari23" target="_blank" rel="noreferrer" aria-label="GitHub">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.78 1.05.78 2.12v3.14c0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>
                  </a>
                  <a className="social-pill" href="https://www.linkedin.com/in/vinay-keshari-301125240/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer>
        Designed &amp; built by <b>Vinay Keshari</b> · Next.js · {new Date().getFullYear()}
      </footer>
    </>
  );
}
