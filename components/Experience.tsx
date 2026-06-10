import { experience } from "../lib/data";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <Reveal>
          <p className="kicker">Experience</p>
          <h2 className="h-section" style={{ marginTop: "1.25rem", maxWidth: "16ch" }}>
            Research, robotics, and leadership.
          </h2>
        </Reveal>

        <div className="timeline">
          {experience.map((job, i) => (
            <Reveal key={job.role + job.org} delay={i * 60} className="tl-item">
              <div className="tl-marker" aria-hidden="true">
                <span className="tl-dot" />
                {i < experience.length - 1 && <span className="tl-line" />}
              </div>

              <div className="tl-content">
                <div className="tl-top">
                  <h3 className="tl-role">{job.role}</h3>
                  <span className="tl-period">{job.period}</span>
                </div>
                <p className="tl-org">
                  {job.org} · {job.location}
                </p>
                <p className="tl-context">{job.context}</p>
                <ul className="tl-points">
                  {job.points.map((pt, j) => (
                    <li key={j}>{pt}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .timeline { margin-top: clamp(2.5rem, 5vw, 3.5rem); }
        .tl-item {
          display: grid;
          grid-template-columns: 24px 1fr;
          gap: 20px;
        }
        .tl-marker {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 6px;
        }
        .tl-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--fg);
          flex: none;
        }
        .tl-line {
          flex: 1;
          width: 1.5px;
          background: var(--line-strong);
          margin-top: 6px;
        }
        .tl-content { padding-bottom: clamp(2rem, 4vw, 3rem); }
        .tl-top {
          display: flex;
          flex-wrap: wrap;
          align-items: baseline;
          justify-content: space-between;
          gap: 6px 16px;
        }
        .tl-role { font-size: 1.25rem; font-weight: 600; letter-spacing: -0.02em; }
        .tl-period {
          font-family: var(--font-geist-mono), monospace;
          font-size: 0.78rem;
          color: var(--muted);
          white-space: nowrap;
        }
        .tl-org { margin-top: 4px; font-size: 1rem; color: var(--muted-strong); font-weight: 500; }
        .tl-context {
          margin-top: 6px;
          font-family: var(--font-geist-mono), monospace;
          font-size: 0.76rem;
          letter-spacing: 0.02em;
          color: var(--muted);
        }
        .tl-points {
          margin-top: 16px;
          display: grid;
          gap: 10px;
          max-width: 68ch;
        }
        .tl-points li {
          position: relative;
          padding-left: 20px;
          font-size: 0.98rem;
          line-height: 1.6;
          color: var(--muted-strong);
        }
        .tl-points li::before {
          content: "";
          position: absolute;
          left: 2px;
          top: 11px;
          width: 6px;
          height: 1.5px;
          background: var(--line-strong);
        }
      `}</style>
    </section>
  );
}
