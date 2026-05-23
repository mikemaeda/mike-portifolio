"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";

const techStack = [
  "Python",
  "SQL",
  "JavaScript",
  "TypeScript",
  "React",
  "R",
  "HTML",
  "CSS",
  "Java",
  "Data Modeling",
];

const projects = [
  {
    title: "Expense Tracker Database System",
    category: "Database Engineering",
    description:
      "Designed a normalized relational database for transaction tracking, category management, and reporting-ready financial analysis.",
    impact: "Built for clarity, data integrity, and practical personal finance insights.",
    tags: ["SQL", "ERD", "Data Modeling", "Reporting"],
  },
  {
    title: "NYC Coffee Shop Sales Analysis",
    category: "Data Analytics",
    description:
      "Analyzed retail sales behavior to identify demand patterns, product performance, and opportunities for operational improvement.",
    impact: "Translated raw sales data into recruiter-friendly business recommendations.",
    tags: ["Analytics", "Excel", "Visualization", "Insights"],
  },
  {
    title: "School Management System",
    category: "Software Systems",
    description:
      "Modeled a management workflow for student, course, and administrative records with an emphasis on usability and maintainability.",
    impact: "Connected technical structure to real institutional needs.",
    tags: ["Systems Design", "Database", "Workflow", "Java"],
  },
  {
    title: "Robotics Software Projects",
    category: "Applied Engineering",
    description:
      "Contributed to software logic for robotics builds, connecting control decisions, team planning, and hands-on technical iteration.",
    impact: "Practiced engineering under constraints with measurable team outcomes.",
    tags: ["Robotics", "Programming", "Sensors", "Team Build"],
  },
];

const highlights = [
  {
    title: "Leadership Recognition",
    description:
      "Recognized through Omicron Delta Kappa for academic strength, campus involvement, and leadership impact.",
    action: "View LinkedIn Post",
    href: "https://www.linkedin.com/",
  },
  {
    title: "Teaching Assistant Impact",
    description:
      "Supported analytics students by making technical concepts more approachable, structured, and confidence-building.",
    action: "View LinkedIn Update",
    href: "https://www.linkedin.com/",
  },
  {
    title: "Technical Service",
    description:
      "Helped students and faculty resolve technology issues while strengthening communication and troubleshooting skills.",
    action: "View LinkedIn Highlight",
    href: "https://www.linkedin.com/",
  },
];

const technicalExperience = [
  {
    role: "Analytics Teaching Assistant",
    detail:
      "Guided students through analytics concepts, Excel workflows, data interpretation, and problem-solving habits.",
  },
  {
    role: "ITS HelpDesk Consultant",
    detail:
      "Resolved campus technology issues across devices, accounts, applications, and classroom systems.",
  },
  {
    role: "Database and Analytics Projects",
    detail:
      "Built academic projects around SQL, data modeling, dashboards, and applied analysis.",
  },
];

const leadershipRoles = [
  "Omicron Delta Kappa Inductee",
  "Student leadership and campus involvement",
  "Collaborative robotics and technical project teams",
  "Peer support through analytics instruction",
];

const contactLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "GitHub", href: "https://github.com/" },
  { label: "Email", href: "mailto:mike@example.com" },
];

const metrics = [
  { value: "04", label: "Featured Projects" },
  { value: "03", label: "Technical Roles" },
  { value: "10", label: "Core Tools" },
];

const profilePillars = [
  {
    title: "Data Thinking",
    detail: "Comfortable turning messy information into structure, insights, and next steps.",
  },
  {
    title: "Technical Build",
    detail: "Hands-on with SQL, software systems, analytics workflows, and practical project work.",
  },
  {
    title: "Leadership Signal",
    detail: "Experience supporting peers, solving real campus problems, and communicating clearly.",
  },
];

const metricTargets = metrics.map((metric) => Number(metric.value));

function formatMetric(value: number, index: number) {
  return String(value).padStart(metrics[index].value.length, "0");
}

export default function Home() {
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [visibleItems, setVisibleItems] = useState<Record<string, boolean>>({});
  const [metricValues, setMetricValues] = useState(() => metrics.map(() => 0));
  const hasAnimatedMetrics = useRef(false);

  const visibleClass = (id: string) => (visibleItems[id] ? "is-visible" : "");
  const revealStyle = (delay = 0) =>
    ({ "--delay": `${delay}ms` }) as CSSProperties;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPortfolio(true);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showPortfolio) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal-id]"),
    );

    const revealAll = () => {
      setVisibleItems((current) => {
        const next = { ...current };

        revealElements.forEach((element) => {
          const id = element.dataset.revealId;

          if (id) {
            next[id] = true;
          }
        });

        return next;
      });
    };

    if (reducedMotion.matches) {
      revealAll();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = (entry.target as HTMLElement).dataset.revealId;

          if (!id || !entry.isIntersecting) {
            return;
          }

          setVisibleItems((current) => ({ ...current, [id]: true }));
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.16,
      },
    );

    revealElements.forEach((element) => observer.observe(element));

    const handleMotionChange = () => {
      if (reducedMotion.matches) {
        observer.disconnect();
        revealAll();
        setMetricValues(metricTargets);
      }
    };

    reducedMotion.addEventListener("change", handleMotionChange);

    return () => {
      observer.disconnect();
      reducedMotion.removeEventListener("change", handleMotionChange);
    };
  }, [showPortfolio]);

  useEffect(() => {
    if (!visibleItems.metrics || hasAnimatedMetrics.current) {
      return;
    }

    hasAnimatedMetrics.current = true;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const timeoutId = window.setTimeout(() => {
        setMetricValues(metricTargets);
      }, 0);

      return () => window.clearTimeout(timeoutId);
    }

    let frameId = 0;
    const duration = 900;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setMetricValues(
        metricTargets.map((target) => Math.round(target * eased)),
      );

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      } else {
        setMetricValues(metricTargets);
      }
    };

    frameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameId);
  }, [visibleItems.metrics]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f1ea] font-mono text-[#111]">
      {!showPortfolio ? (
        <section className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
          <div className="w-full max-w-xs text-center">
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-white/45">
              Initializing
            </p>

            <div className="loader-line">
              <div className="loader-fill" />
            </div>
          </div>
        </section>
      ) : (
        <>
          <nav className="fade-in fixed left-0 right-0 top-0 z-50 border-b border-black/10 bg-[#f4f1ea]/82 px-5 py-4 text-[#111] backdrop-blur-2xl md:px-10">
            <div className="mx-auto flex max-w-7xl items-center justify-between">
              <a href="#" className="text-sm font-bold uppercase tracking-[0.28em]">
                Mike Maeda
              </a>

              <div className="hidden items-center gap-7 text-xs font-medium uppercase tracking-[0.22em] text-black/58 md:flex">
                <a href="#projects">Projects</a>
                <a href="#highlights">Highlights</a>
                <a href="#technical">Experience</a>
                <a href="#resume">Resume</a>
                <a href="#contact">Contact</a>
              </div>
            </div>
          </nav>

          <section className="hero-section relative flex min-h-[82vh] items-center px-5 pb-12 pt-28 text-white md:px-10">
            <div className="fade-in mx-auto grid w-full max-w-7xl items-center gap-10 md:grid-cols-[1.08fr_0.92fr]">
              <div className="hero-copy">
                <p className="role-pill mb-7">
                  Software Engineering / Data Analytics / Technical Leadership
                </p>

                <h1 className="hero-name font-bold uppercase">Mike Maeda</h1>

                <h2 className="hero-focus mt-5 font-bold uppercase">
                  Building data-backed software with leadership impact.
                </h2>

                <p className="mt-7 max-w-3xl text-base leading-8 text-white/68 md:text-xl md:leading-9">
                  A project-first portfolio focused on databases, analytics,
                  campus leadership, and practical technical problem solving.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#projects" className="primary-button">
                    View Projects
                  </a>
                  <a href="#highlights" className="secondary-button">
                    Highlights
                  </a>
                  <a href="#resume" className="secondary-button">
                    Resume
                  </a>
                </div>
              </div>

              <div className="hero-visual slide-up">
                <div
                  className="code-mark-card"
                  aria-label="Software engineering code symbol"
                >
                  <svg
                    className="code-mark"
                    viewBox="0 0 400 400"
                    role="img"
                    aria-hidden="true"
                  >
                    <rect width="400" height="400" rx="200" fill="#eef0ed" />
                    <path
                      d="M57 164L142 119V158L92 184L142 211V250L57 205V164Z"
                      fill="#e3544b"
                    />
                    <path
                      d="M258 119L343 164V205L258 250V211L308 184L258 158V119Z"
                      fill="#d74449"
                    />
                    <path
                      d="M186 119H225L193 281H154L186 119Z"
                      fill="#334f55"
                    />
                  </svg>
                </div>

                <div className="impact-note">
                  <span>Current Focus</span>
                  <p>Turning analytics, systems design, and service experience into technical impact.</p>
                </div>
              </div>
            </div>
          </section>

          <section
            className={`toolkit-section reveal reveal-up px-5 py-10 md:px-10 md:py-14 ${visibleClass("toolkit")}`}
            data-reveal-id="toolkit"
            style={revealStyle()}
          >
            <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[0.34fr_1fr] md:items-center">
              <div>
                <p className="section-kicker">Toolkit</p>
                <h2 className="mt-3 text-2xl font-bold uppercase leading-tight md:text-3xl">
                  Tools I use to build and analyze.
                </h2>
              </div>

              <div className="tech-panel">
                <div className="tech-grid">
                  {techStack.map((tech, index) => (
                    <span
                      key={tech}
                      className="tech-pill"
                      style={{ "--chip-delay": `${index * 35}ms` } as CSSProperties}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section
            className="px-5 pb-14 md:px-10 md:pb-18"
            data-reveal-id="metrics"
          >
            <div className="mx-auto grid max-w-7xl gap-3 md:grid-cols-3">
              {metrics.map((metric, index) => (
                <div
                  key={metric.label}
                  className={`metric-card reveal reveal-scale ${visibleClass("metrics")}`}
                  style={revealStyle(index * 90)}
                >
                  <span>{formatMetric(metricValues[index], index)}</span>
                  <p>{metric.label}</p>
                </div>
              ))}
            </div>
          </section>

          <section
            id="about"
            className={`light-section section-spacing reveal reveal-up px-5 md:px-10 ${visibleClass("about")}`}
            data-reveal-id="about"
            style={revealStyle()}
          >
            <div className="profile-layout mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.44fr_0.56fr] md:items-center md:gap-14">
              <aside className="profile-card">
                <div className="profile-shot">
                  <Image
                    src="/profile.png"
                    alt="Mike Maeda"
                    width={420}
                    height={520}
                    className="profile-card-image"
                  />
                </div>

                <div className="profile-card-copy">
                  <p className="section-kicker">Profile Snapshot</p>
                  <h3>Software + analytics student building for practical impact.</h3>
                  <a href="#projects" className="profile-link">
                    See project work
                  </a>
                </div>
              </aside>

              <div className="profile-content">
                <p className="section-kicker">Profile</p>
                <h2 className="section-title">
                  Building systems that make data useful and decisions clearer.
                </h2>

                <p className="mt-7 max-w-4xl text-lg leading-8 text-white/68 md:text-xl md:leading-9">
                  I connect software engineering fundamentals with analytical
                  problem-solving, leadership, and service. My work is centered
                  on building structured, useful systems that help people
                  understand information and act on it.
                </p>

                <div className="profile-pillars">
                  {profilePillars.map((pillar, index) => (
                    <article
                      key={pillar.title}
                      className="profile-pillar"
                      style={revealStyle(index * 70)}
                    >
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <h3>{pillar.title}</h3>
                      <p>{pillar.detail}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="projects" className="project-focus px-5 py-20 md:px-10 md:py-24">
            <div className="mx-auto max-w-7xl">
              <div
                className={`section-header centered reveal reveal-up ${visibleClass("projects-heading")}`}
                data-reveal-id="projects-heading"
                style={revealStyle()}
              >
                <p className="section-kicker">Featured Projects</p>
                <h2 className="section-title mx-auto">
                  Technical work with real-world shape.
                </h2>
                <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-black/62 md:text-lg">
                  Recruiter-focused summaries of the projects that best show
                  database thinking, data analysis, systems design, and applied
                  engineering.
                </p>
              </div>

              <div className="mt-14 grid gap-4 md:grid-cols-2">
                {projects.map((project, index) => (
                  <article
                    key={project.title}
                    className={`project-card reveal reveal-up ${index === 0 ? "featured" : ""} ${visibleClass(`project-${index}`)}`}
                    data-reveal-id={`project-${index}`}
                    style={revealStyle(index * 90)}
                  >
                    <div className="flex items-start justify-between gap-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/44">
                        {project.category}
                      </p>
                      <span className="project-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="mt-10 text-2xl font-bold uppercase leading-tight tracking-[-0.01em] md:text-4xl">
                      {project.title}
                    </h3>

                    <p className="mt-6 max-w-2xl text-base leading-7 text-black/68">
                      {project.description}
                    </p>

                    <p className="mt-5 text-sm leading-6 text-black/54">
                      {project.impact}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="highlights" className="light-section section-spacing px-5 md:px-10">
            <div className="mx-auto max-w-7xl">
              <div
                className={`section-header reveal reveal-up ${visibleClass("highlights-heading")}`}
                data-reveal-id="highlights-heading"
                style={revealStyle()}
              >
                <p className="section-kicker">Featured Highlights</p>
                <h2 className="section-title">
                  Leadership proof points beyond the classroom.
                </h2>
              </div>

              <div className="mt-12 grid gap-4 md:grid-cols-3">
                {highlights.map((highlight, index) => (
                  <article
                    key={highlight.title}
                    className={`highlight-card reveal reveal-up ${visibleClass(`highlight-${index}`)}`}
                    data-reveal-id={`highlight-${index}`}
                    style={revealStyle(index * 90)}
                  >
                    <h3 className="text-xl font-bold uppercase leading-tight">
                      {highlight.title}
                    </h3>
                    <p className="mt-5 text-sm leading-7 text-white/60">
                      {highlight.description}
                    </p>
                    <a
                      href={highlight.href}
                      target="_blank"
                      rel="noreferrer"
                      className="card-link"
                    >
                      {highlight.action}
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="technical" className="light-section section-spacing px-5 md:px-10">
            <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
              <div
                className={`reveal reveal-left ${visibleClass("technical-heading")}`}
                data-reveal-id="technical-heading"
                style={revealStyle()}
              >
                <p className="section-kicker">Technical Experience</p>
                <h2 className="section-title mt-5">
                  Practical support, analysis, and system thinking.
                </h2>
              </div>

              <div className="divide-y divide-black/12 border-y border-black/12">
                {technicalExperience.map((item, index) => (
                  <article
                    key={item.role}
                    className={`experience-row reveal reveal-up ${visibleClass(`experience-${index}`)}`}
                    data-reveal-id={`experience-${index}`}
                    style={revealStyle(index * 90)}
                  >
                    <h3 className="text-lg font-bold uppercase tracking-[-0.01em] md:text-2xl">
                      {item.role}
                    </h3>
                    <p className="max-w-2xl text-sm leading-7 text-white/62 md:text-base">
                      {item.detail}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="leadership" className="light-section section-spacing px-5 md:px-10">
            <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_1fr] md:gap-16">
              <div
                className={`reveal reveal-left ${visibleClass("leadership-heading")}`}
                data-reveal-id="leadership-heading"
                style={revealStyle()}
              >
                <p className="section-kicker">Leadership & Campus Roles</p>
                <h2 className="section-title mt-5">
                  Trusted in rooms where communication matters.
                </h2>
              </div>

              <div className="leadership-list">
                {leadershipRoles.map((role, index) => (
                  <div
                    key={role}
                    className={`leadership-item reveal reveal-left ${visibleClass(`leadership-${index}`)}`}
                    data-reveal-id={`leadership-${index}`}
                    style={revealStyle(index * 90)}
                  >
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{role}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="resume" className="light-section section-spacing px-5 md:px-10">
            <div className="mx-auto max-w-7xl">
              <div
                className={`resume-panel reveal reveal-scale ${visibleClass("resume")}`}
                data-reveal-id="resume"
                style={revealStyle()}
              >
                <div>
                  <p className="section-kicker">Resume Viewer / Download</p>
                  <h2 className="mt-5 max-w-3xl text-4xl font-bold uppercase leading-none tracking-[-0.01em] md:text-6xl">
                    A concise record of projects, experience, and impact.
                  </h2>
                </div>

                <div className="resume-actions">
                  <a href="/resume.pdf" target="_blank" className="primary-button">
                    View Resume
                  </a>
                  <a href="/resume.pdf" download className="secondary-button">
                    Download PDF
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="light-section px-5 pb-16 pt-6 md:px-10 md:pb-20">
            <div className="mx-auto max-w-7xl">
              <div
                className={`contact-panel reveal reveal-up ${visibleClass("contact")}`}
                data-reveal-id="contact"
                style={revealStyle()}
              >
                <p className="section-kicker">Contact Links</p>

                <h2 className="mt-5 max-w-3xl text-4xl font-bold uppercase leading-none tracking-[-0.01em] md:text-6xl">
                  Open to software, data, and analytics opportunities.
                </h2>

                <div className="mt-10 flex flex-wrap gap-3">
                  {contactLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                      rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
                      className="secondary-button"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      <style>{`
        :global(html) {
          scroll-behavior: smooth;
        }

        a {
          transition: color 0.25s ease, border-color 0.25s ease, background 0.25s ease, transform 0.25s ease;
        }

        .reveal {
          opacity: 0;
          transition:
            opacity 700ms cubic-bezier(0.22, 1, 0.36, 1),
            transform 700ms cubic-bezier(0.22, 1, 0.36, 1),
            filter 700ms cubic-bezier(0.22, 1, 0.36, 1);
          transition-delay: var(--delay, 0ms);
          will-change: opacity, transform;
        }

        .reveal-up {
          transform: translateY(34px);
        }

        .reveal-left {
          transform: translateX(-28px);
        }

        .reveal-scale {
          transform: translateY(24px) scale(0.985);
        }

        .reveal.is-visible {
          opacity: 1;
          transform: translate3d(0, 0, 0) scale(1);
        }

        nav a:hover {
          color: black;
        }

        .loader-line {
          width: 100%;
          height: 2px;
          background: rgba(255,255,255,0.12);
          overflow: hidden;
        }

        .loader-fill {
          width: 100%;
          height: 100%;
          background: white;
          animation: loading 1.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        @keyframes loading {
          from {
            transform: translateX(-100%);
          }

          to {
            transform: translateX(0%);
          }
        }

        .hero-section {
          background:
            linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0) 34%),
            radial-gradient(60% 85% at 80% 48%, rgba(224,181,91,0.22), transparent 62%),
            linear-gradient(135deg, #000 0%, #161616 54%, #060606 100%);
        }

        .hero-copy {
          max-width: 820px;
        }

        .role-pill {
          display: inline-flex;
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 999px;
          background: rgba(255,255,255,0.06);
          padding: 10px 14px;
          color: rgba(255,255,255,0.68);
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.18em;
          line-height: 1.45;
          text-transform: uppercase;
        }

        .hero-name {
          color: rgba(255,255,255,0.9);
          font-size: clamp(3rem, 7vw, 7.5rem);
          line-height: 0.88;
          letter-spacing: 0.02em;
          animation: fadeUp 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .hero-focus {
          max-width: 920px;
          color: #f4d27a;
          font-size: clamp(2.1rem, 5.5vw, 5.6rem);
          line-height: 0.95;
          letter-spacing: -0.03em;
        }

        .primary-button,
        .secondary-button {
          display: inline-flex;
          min-height: 44px;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          padding: 0 18px;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .primary-button {
          border: 1px solid white;
          background: white;
          color: black;
        }

        .primary-button:hover {
          transform: translateY(-2px);
          background: rgba(255,255,255,0.86);
        }

        .secondary-button {
          border: 1px solid currentColor;
          background: transparent;
          color: inherit;
        }

        .secondary-button:hover {
          transform: translateY(-2px);
          background: rgba(0,0,0,0.06);
        }

        .code-mark-card {
          display: grid;
          width: min(72vw, 360px);
          aspect-ratio: 1;
          place-items: center;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.24);
          border-radius: 50%;
          background: #eef0ed;
          box-shadow: 0 24px 70px rgba(0,0,0,0.42);
        }

        .code-mark {
          width: 100%;
          height: 100%;
          display: block;
        }

        .profile-orbit {
          position: relative;
          width: min(70vw, 360px);
          aspect-ratio: 1;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.22);
          border-radius: 50%;
          background:
            linear-gradient(145deg, rgba(255,221,128,0.84), rgba(255,246,217,0.56)),
            #e2b24f;
          box-shadow:
            0 30px 90px rgba(0,0,0,0.58),
            0 0 0 14px rgba(255,255,255,0.035),
            inset 0 1px 0 rgba(255,255,255,0.34);
        }

        .profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: saturate(1.08) contrast(1.02);
        }

        .hero-visual {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 22px;
        }

        .impact-note {
          width: min(100%, 410px);
          border: 1px solid rgba(255,255,255,0.16);
          border-radius: 8px;
          background: rgba(255,255,255,0.07);
          padding: 18px;
          backdrop-filter: blur(18px);
        }

        .impact-note span {
          color: #f4d27a;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .impact-note p {
          margin-top: 10px;
          color: rgba(255,255,255,0.72);
          font-size: 0.9rem;
          line-height: 1.7;
        }

        .toolkit-section {
          border-bottom: 1px solid rgba(0,0,0,0.12);
          background: #f4f1ea;
        }

        .tech-panel {
          overflow: hidden;
        }

        .tech-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          gap: 10px;
        }

        .tech-pill,
        .tag {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(0,0,0,0.16);
          border-radius: 999px;
          background: rgba(255,255,255,0.72);
          color: rgba(0,0,0,0.76);
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .tech-pill {
          min-width: auto;
          padding: 11px 16px;
          opacity: 0;
          transform: translateY(10px);
          transition:
            opacity 520ms cubic-bezier(0.22, 1, 0.36, 1),
            transform 520ms cubic-bezier(0.22, 1, 0.36, 1),
            background 0.25s ease,
            border-color 0.25s ease;
          transition-delay: var(--chip-delay, 0ms);
        }

        .toolkit-section.is-visible .tech-pill {
          opacity: 1;
          transform: translateY(0);
        }

        .tech-pill:hover {
          transform: translateY(-3px);
          border-color: rgba(0,0,0,0.34);
          background: rgba(255,255,255,0.96);
        }

        .tag {
          padding: 8px 10px;
        }

        .section-spacing {
          padding-top: clamp(3.5rem, 7vw, 5.5rem);
          padding-bottom: clamp(3.5rem, 7vw, 5.5rem);
        }

        .section-header {
          display: grid;
          gap: 18px;
        }

        .section-header.centered {
          text-align: center;
        }

        .section-kicker {
          color: rgba(0,0,0,0.52);
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.24em;
          text-transform: uppercase;
        }

        .section-title {
          max-width: 900px;
          font-size: clamp(2.15rem, 5vw, 4.9rem);
          font-weight: 800;
          line-height: 0.96;
          letter-spacing: -0.01em;
          text-transform: uppercase;
        }

        .profile-card {
          border: 1px solid rgba(0,0,0,0.14);
          border-radius: 8px;
          background:
            linear-gradient(180deg, rgba(255,255,255,0.88), rgba(255,255,255,0.64)),
            #fffdf8;
          padding: 14px;
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.9),
            0 22px 54px rgba(35,31,24,0.09);
        }

        .profile-shot {
          aspect-ratio: 4 / 5;
          overflow: hidden;
          border-radius: 6px;
          background:
            linear-gradient(145deg, rgba(244,210,122,0.84), rgba(255,246,217,0.58)),
            #e2b24f;
        }

        .profile-card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          filter: saturate(1.08) contrast(1.02);
        }

        .profile-card-copy {
          padding: 22px 8px 8px;
        }

        .profile-card-copy h3 {
          margin-top: 12px;
          max-width: 420px;
          font-size: clamp(1.35rem, 3vw, 2rem);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.02em;
          text-transform: uppercase;
        }

        .profile-link {
          display: inline-flex;
          margin-top: 20px;
          border-bottom: 1px solid rgba(0,0,0,0.36);
          padding-bottom: 6px;
          color: black;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .profile-link:hover {
          transform: translateX(4px);
          border-color: black;
        }

        .profile-pillars {
          display: grid;
          gap: 12px;
          margin-top: 34px;
        }

        .profile-pillar {
          display: grid;
          grid-template-columns: 48px 0.54fr 1fr;
          gap: 18px;
          align-items: start;
          border-top: 1px solid rgba(0,0,0,0.14);
          padding-top: 18px;
        }

        .profile-pillar span {
          color: rgba(0,0,0,0.36);
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.16em;
        }

        .profile-pillar h3 {
          font-size: 0.92rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          line-height: 1.35;
          text-transform: uppercase;
        }

        .profile-pillar p {
          color: rgba(0,0,0,0.62);
          font-size: 0.9rem;
          line-height: 1.7;
        }

        .project-focus {
          border-block: 1px solid rgba(0,0,0,0.16);
          background:
            linear-gradient(180deg, rgba(255,255,255,0.82), rgba(244,241,234,0.96)),
            #f7f5ef;
        }

        .project-card,
        .highlight-card,
        .resume-panel,
        .contact-panel {
          border: 1px solid rgba(0,0,0,0.14);
          border-radius: 8px;
          background:
            linear-gradient(180deg, rgba(255,255,255,0.92), rgba(255,255,255,0.7)),
            #fffdf8;
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.9),
            0 20px 50px rgba(35,31,24,0.08);
        }

        .project-card {
          min-height: 330px;
          padding: clamp(1.4rem, 3.4vw, 2.35rem);
          transition:
            transform 0.34s cubic-bezier(0.22, 1, 0.36, 1),
            border-color 0.34s ease,
            background 0.34s ease;
        }

        .project-card .tag {
          opacity: 0;
          transform: translateY(8px);
          transition:
            opacity 480ms cubic-bezier(0.22, 1, 0.36, 1),
            transform 480ms cubic-bezier(0.22, 1, 0.36, 1),
            border-color 0.25s ease,
            background 0.25s ease;
        }

        .project-card.is-visible .tag {
          opacity: 1;
          transform: translateY(0);
        }

        .project-card.is-visible .tag:nth-child(1) {
          transition-delay: calc(var(--delay, 0ms) + 180ms);
        }

        .project-card.is-visible .tag:nth-child(2) {
          transition-delay: calc(var(--delay, 0ms) + 230ms);
        }

        .project-card.is-visible .tag:nth-child(3) {
          transition-delay: calc(var(--delay, 0ms) + 280ms);
        }

        .project-card.is-visible .tag:nth-child(4) {
          transition-delay: calc(var(--delay, 0ms) + 330ms);
        }

        .project-card.featured {
          background:
            linear-gradient(180deg, #ffffff, rgba(255,255,255,0.78)),
            #fffdf8;
        }

        .project-card:hover,
        .highlight-card:hover {
          transform: translateY(-8px);
          border-color: rgba(0,0,0,0.34);
          background:
            linear-gradient(180deg, #ffffff, rgba(255,255,255,0.86)),
            #ffffff;
        }

        .project-number {
          color: rgba(0,0,0,0.3);
          font-size: 0.82rem;
          font-weight: 800;
          letter-spacing: 0.18em;
        }

        .highlight-card {
          min-height: 240px;
          padding: 28px;
          transition:
            transform 0.34s cubic-bezier(0.22, 1, 0.36, 1),
            border-color 0.34s ease,
            background 0.34s ease;
        }

        .card-link {
          margin-top: 28px;
          display: inline-flex;
          border-bottom: 1px solid rgba(0,0,0,0.34);
          padding-bottom: 7px;
          color: black;
          font-size: 0.74rem;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .card-link:hover {
          border-color: black;
          transform: translateX(4px);
        }

        .experience-row {
          display: grid;
          gap: 18px;
          padding: 30px 0;
        }

        @media (min-width: 768px) {
          .experience-row {
            grid-template-columns: 0.9fr 1.1fr;
            align-items: start;
            padding: 38px 0;
          }
        }

        .leadership-list {
          border-top: 1px solid rgba(0,0,0,0.14);
        }

        .leadership-item {
          display: grid;
          grid-template-columns: 56px 1fr;
          gap: 18px;
          border-bottom: 1px solid rgba(0,0,0,0.14);
          padding: 24px 0;
          color: rgba(0,0,0,0.72);
          font-size: 1rem;
          line-height: 1.7;
        }

        .leadership-item span {
          color: rgba(0,0,0,0.36);
          font-weight: 800;
        }

        .resume-panel {
          display: grid;
          gap: 36px;
          padding: clamp(2rem, 6vw, 4.5rem);
        }

        @media (min-width: 900px) {
          .resume-panel {
            grid-template-columns: 1.2fr 0.8fr;
            align-items: end;
          }
        }

        .resume-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .contact-panel {
          padding: clamp(2rem, 6vw, 4.5rem);
        }

        .light-section {
          color: #111;
        }

        .light-section p,
        .light-section article p {
          color: rgba(0,0,0,0.66);
        }

        .light-section .section-kicker {
          color: rgba(0,0,0,0.52);
        }

        .metric-card {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 18px;
          border: 1px solid rgba(0,0,0,0.14);
          border-radius: 8px;
          background: rgba(255,255,255,0.58);
          padding: 20px;
          transition:
            opacity 700ms cubic-bezier(0.22, 1, 0.36, 1),
            transform 700ms cubic-bezier(0.22, 1, 0.36, 1),
            border-color 0.25s ease,
            background 0.25s ease;
        }

        .metric-card span {
          font-size: clamp(2rem, 5vw, 4.5rem);
          font-weight: 800;
          line-height: 1;
          letter-spacing: -0.04em;
        }

        .metric-card p {
          max-width: 150px;
          text-align: right;
          color: rgba(0,0,0,0.58);
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.18em;
          line-height: 1.45;
          text-transform: uppercase;
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            scroll-behavior: auto !important;
          }

          .reveal,
          .tech-pill,
          .project-card .tag {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
            animation: none !important;
          }
        }

        .fade-in {
          animation: fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .slide-up {
          animation: fadeUp 1.1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(28px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 767px) {
          .hero-section {
            min-height: auto;
            text-align: center;
          }

          .hero-copy {
            margin: 0 auto;
          }

          .hero-visual {
            margin-top: 12px;
          }

          .primary-button,
          .secondary-button {
            width: 100%;
          }

          .project-card {
            min-height: auto;
          }

          .profile-pillar {
            grid-template-columns: 1fr;
            gap: 8px;
          }

          .profile-card-copy {
            padding-inline: 4px;
          }
        }
      `}</style>
    </main>
  );
}
