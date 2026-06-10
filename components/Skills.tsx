import { skills } from "../lib/data";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal>
          <p className="kicker">Toolkit</p>
          <h2 className="h-section" style={{ marginTop: "1.25rem", maxWidth: "16ch" }}>
            Languages, frameworks, and tools.
          </h2>
        </Reveal>

        <div className="skills-grid">
          {skills.map((group, i) => (
            <Reveal key={group.label} delay={i * 70} className="skill-group">
              <h3 className="skill-label">{group.label}</h3>
              <div className="skill-chips">
                {group.items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .skills-grid {
          display: grid;
          gap: 1px;
          margin-top: clamp(2.5rem, 5vw, 3.5rem);
          background: var(--line);
          border: 1px solid var(--line);
          border-radius: 16px;
          overflow: hidden;
        }
        .skill-group { background: var(--bg); padding: 26px clamp(20px, 3vw, 32px); }
        .skill-label {
          font-family: var(--font-geist-mono), monospace;
          font-size: 0.78rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--muted);
        }
        .skill-chips { display: flex; flex-wrap: wrap; gap: 9px; margin-top: 16px; }

        @media (min-width: 720px) {
          .skills-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </section>
  );
}
