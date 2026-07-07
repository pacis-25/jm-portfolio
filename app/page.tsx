"use client";

import { useState, useEffect, useRef } from "react";
import { CONFIG, STACK_MARQUEE, EXPERIENCE, HIGHLIGHTS, SKILLS } from "./data";

function useReveal(): [React.RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setSeen(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, seen];
}

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const [ref, seen] = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${seen ? "seen" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function Portfolio() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`site ${loaded ? "is-loaded" : ""}`}>
      <div className="backdrop" aria-hidden="true"></div>
      <div className="glow" aria-hidden="true"></div>

      <div className="content">
        {/* Nav */}
        <nav className="nav">
          <div className="nav-inner">
            <a className="nav-logo" href="#top">jm<span>.</span>pacis</a>
            <div className="nav-links">
              <a href="#work">Work</a>
              <a href="#experience">Experience</a>
              <a href="#skills">Skills</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <header className="hero wrap" id="top">
          <div className="fade">
            <span className="badge"><span className="pulse" aria-hidden="true"></span>Available for opportunities</span>
          </div>
          <h1 className="fade d1">
            Building web apps that are <span className="accent">fast</span>, <span className="amber">scalable</span>, and built to last.
          </h1>
          <p className="lede fade d2">
            I&apos;m <strong>{CONFIG.name}</strong>, a software engineer from {CONFIG.location} with{" "}
            <strong>3+ years</strong> of experience shipping production systems end-to-end, from
            role-based access control and multi-repository safety infrastructure to real-time
            scheduling platforms and B2B SaaS features.
          </p>
          <div className="hero-cta fade d3">
            <a className="btn btn-primary" href="#work">See my work</a>
            <a className="btn btn-ghost" href={`mailto:${CONFIG.email}`}>Get in touch</a>
          </div>
          <div className="hero-stats fade d3">
            <div className="stat"><div className="n">3<em>+</em></div><div className="l">years experience</div></div>
            <div className="stat"><div className="n">4</div><div className="l">companies shipped for</div></div>
            <div className="stat"><div className="n">E2E</div><div className="l">frontend to database</div></div>
          </div>
        </header>

        {/* Tech marquee */}
        <div className="marquee" aria-label="Technology stack">
          <div className="marquee-track">
            {[...STACK_MARQUEE, ...STACK_MARQUEE].map((s, i) => (
              <span className="marquee-item" key={s.slug + i}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://cdn.simpleicons.org/${s.slug}${s.color ? `/${s.color}` : ""}`}
                  width={20}
                  height={20}
                  loading="lazy"
                  alt=""
                  aria-hidden="true"
                />
                {s.label}
              </span>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <section id="work" className="wrap">
          <Reveal>
            <p className="kicker">Selected work</p>
            <h2 className="section-title">Things I&apos;ve shipped</h2>
            <p className="section-sub">
              Highlights from production systems. Each one solved a real operational or business problem.
            </p>
          </Reveal>
          <div className="grid2">
            {HIGHLIGHTS.map((h, i) => (
              <Reveal key={h.k} delay={i * 80}>
                <article className="card">
                  <p className="k">{h.k}</p>
                  <h3>{h.title}</h3>
                  <p>{h.desc}</p>
                  <p className="meta">{h.meta}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="wrap">
          <Reveal>
            <p className="kicker">Career</p>
            <h2 className="section-title">Experience</h2>
            <p className="section-sub">
              Agile teams, code reviews, mentoring, and delivery. Here&apos;s where I&apos;ve done it.
            </p>
          </Reveal>
          <div className="timeline">
            {EXPERIENCE.map((e, i) => (
              <Reveal key={e.company} delay={i * 60}>
                <div className="tl-item">
                  <p className="tl-period">{e.period}</p>
                  <h3 className="tl-role">{e.role}</h3>
                  <p className="tl-company">{e.company}</p>
                  <p className="tl-summary">{e.summary}</p>
                  <ul className="tl-points">
                    {e.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                  <div className="chips">
                    {e.stack.map((s) => <span className="chip" key={s}>{s}</span>)}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="wrap">
          <Reveal>
            <p className="kicker">Toolbox</p>
            <h2 className="section-title">Skills</h2>
            <p className="section-sub">
              Fullstack range with a frontend center of gravity, plus the testing and delivery
              practices that keep it reliable.
            </p>
          </Reveal>
          <Reveal>
            <div>
              {SKILLS.map((s) => (
                <div className="skill-row" key={s.group}>
                  <h4>{s.group}</h4>
                  <p>{s.items}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Contact */}
        <section id="contact" className="wrap">
          <Reveal>
            <div className="contact-card">
              <h2>Let&apos;s build something that lasts.</h2>
              <p>
                I&apos;m open to fulltime roles and freelance projects, especially anything involving
                React/Next.js frontends, fullstack features, or systems where reliability matters.
              </p>
              <div className="contact-links">
                <a className="btn btn-primary" href={`mailto:${CONFIG.email}`}>Email me</a>
                <a className="btn btn-ghost" href={CONFIG.github} target="_blank" rel="noreferrer">GitHub</a>
                <a className="btn btn-ghost" href={CONFIG.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
              <p className="contact-email">{CONFIG.email}</p>
            </div>
          </Reveal>
        </section>

        <footer>
          © 2026 {CONFIG.name} <span className="heart">·</span> {CONFIG.location} <span className="heart">·</span> BSIT, Pangasinan State University
        </footer>
      </div>
    </div>
  );
}
