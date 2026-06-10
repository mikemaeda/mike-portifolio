import Link from "next/link";
import { projects } from "../lib/data";
import Reveal from "./Reveal";
import { ArrowIcon, GitHubIcon } from "./icons";

export default function Projects() {
  return (
    <section
      id="projects"
      className="section"
      style={{ background: "var(--bg-alt)", borderBlock: "1px solid var(--line)" }}
    >
      <div className="container">
        <Reveal>
          <p className="kicker">Selected Work</p>
          <h2 className="h-section" style={{ marginTop: "1.25rem", maxWidth: "18ch" }}>
            Projects
          </h2>
        </Reveal>

        <div className="proj-grid">
          {projects.map((p, i) => (
            <Reveal
              key={p.title}
              delay={(i % 2) * 80}
              className={`card proj-card ${p.featured ? "is-featured" : ""}`}
            >
              <div className="proj-head">
                <div>
                  <h3 className="proj-title">{p.title}</h3>
                  <p className="proj-tagline">{p.tagline}</p>
                </div>
                <span className="proj-period">{p.period}</span>
              </div>

              <p className="proj-summary">{p.summary}</p>

              <div className="proj-stack">
                {p.stack.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>

              <div className="proj-links">
                <Link
                  href={`/projects/${p.slug}`}
                  className="btn btn-primary"
                  style={{ minHeight: 42, padding: "0 18px", fontSize: "0.86rem" }}
                >
                  View details
                  <ArrowIcon />
                </Link>
                {p.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-ghost"
                    style={{ minHeight: 42, padding: "0 18px", fontSize: "0.86rem" }}
                  >
                    {l.label === "GitHub" ? <GitHubIcon /> : <ArrowIcon />}
                    {l.label}
                  </a>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .proj-grid {
          display: grid;
          gap: 20px;
          margin-top: clamp(2.5rem, 5vw, 3.5rem);
        }
        .proj-card {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: clamp(1.6rem, 3vw, 2.4rem);
        }
        .proj-card:hover {
          transform: translateY(-4px);
          border-color: var(--line-strong);
          box-shadow: var(--shadow-lift);
        }
        .proj-head {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
        }
        .proj-title { font-size: 1.5rem; font-weight: 600; letter-spacing: -0.025em; }
        .proj-tagline { margin-top: 4px; color: var(--muted-strong); font-size: 0.98rem; }
        .proj-period {
          font-family: var(--font-geist-mono), monospace;
          font-size: 0.74rem;
          color: var(--muted);
          white-space: nowrap;
          padding-top: 4px;
        }
        .proj-summary {
          font-size: 0.98rem;
          line-height: 1.65;
          color: var(--muted-strong);
        }
        .proj-stack { display: flex; flex-wrap: wrap; gap: 8px; margin-top: auto; }
        .proj-links { display: flex; flex-wrap: wrap; gap: 10px; }

        @media (min-width: 880px) {
          .proj-grid { grid-template-columns: repeat(2, 1fr); align-items: stretch; }
        }
      `}</style>
    </section>
  );
}
