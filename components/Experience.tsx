import { experience } from "../lib/data";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <Reveal>
          <h2 className="h-section experience-title">Experience</h2>
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
        .experience-section {
          background:
            radial-gradient(circle at 18% 16%, rgba(244, 195, 22, 0.28), transparent 19rem),
            radial-gradient(circle at 84% 82%, rgba(111, 67, 29, 0.18), transparent 18rem),
            radial-gradient(circle at 48% 42%, rgba(255, 223, 117, 0.22), transparent 24rem),
            repeating-linear-gradient(90deg, rgba(16, 16, 16, 0.018) 0 1px, transparent 1px 36px),
            #ead18a;
        }

        .experience-title {
          margin-top: 1.25rem;
          max-width: 18ch;
          font-family: "Brush Script MT", "Snell Roundhand", "Apple Chancery", cursive;
          font-size: clamp(3.6rem, 8.6vw, 6.6rem);
          font-weight: 500;
          line-height: 0.92;
          letter-spacing: 0;
          text-shadow:
            4px 4px 0 var(--accent),
            0 3px 0 rgba(16, 16, 16, 0.12);
          transform: rotate(-0.3deg);
        }

        .timeline {
          margin-top: clamp(2.5rem, 5vw, 3.5rem);
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: clamp(1.4rem, 3vw, 2.1rem);
        }
        .tl-item {
          position: relative;
          display: block;
          transform: rotate(-0.7deg);
        }

        .tl-item::before,
        .tl-item::after {
          content: "";
          position: absolute;
          z-index: 3;
          pointer-events: none;
        }

        .tl-item::before {
          top: -32px;
          left: clamp(0.9rem, 2vw, 1.4rem);
          width: 25px;
          height: 56px;
          border: 4px solid rgba(64, 62, 55, 0.72);
          border-left-width: 3px;
          border-radius: 999px;
          background: transparent;
          box-shadow:
            inset 0 0 0 3px rgba(238, 234, 205, 0.38),
            2px 4px 0 rgba(16, 16, 16, 0.12);
          transform: rotate(-11deg);
        }

        .tl-item::after {
          top: -20px;
          left: calc(clamp(0.9rem, 2vw, 1.4rem) + 7px);
          width: 12px;
          height: 34px;
          border: 3px solid rgba(91, 87, 76, 0.76);
          border-left-width: 2px;
          border-radius: 999px;
          transform: rotate(-11deg);
          box-shadow: 1px 3px 0 rgba(16, 16, 16, 0.1);
        }

        .tl-item:nth-child(2n) { transform: rotate(0.85deg); }
        .tl-item:nth-child(3n) { transform: rotate(-1.25deg); }
        .tl-item:nth-child(4n) { transform: rotate(0.45deg); }

        .tl-item:nth-child(2n)::before {
          left: auto;
          right: clamp(0.9rem, 2vw, 1.4rem);
          transform: rotate(10deg);
        }

        .tl-item:nth-child(2n)::after {
          left: auto;
          right: calc(clamp(0.9rem, 2vw, 1.4rem) + 7px);
          transform: rotate(10deg);
        }

        .tl-item:nth-child(3n)::before,
        .tl-item:nth-child(3n)::after {
          border-color: rgba(122, 94, 35, 0.68);
        }

        .tl-marker {
          display: none;
        }

        .tl-content {
          position: relative;
          min-height: 100%;
          padding: clamp(1.35rem, 2.8vw, 1.85rem) clamp(1.1rem, 2.5vw, 1.55rem)
            clamp(1.1rem, 2.5vw, 1.55rem);
          overflow: hidden;
          border: 1.5px solid rgba(18, 16, 12, 0.9);
          outline: 1px solid rgba(18, 16, 12, 0.22);
          outline-offset: -7px;
          background:
            radial-gradient(circle at 18% 22%, rgba(111, 67, 29, 0.13), transparent 7rem),
            radial-gradient(circle at 76% 72%, rgba(111, 67, 29, 0.11), transparent 8rem),
            linear-gradient(90deg, rgba(16, 16, 16, 0.05), transparent 18%, transparent 82%, rgba(16, 16, 16, 0.055)),
            repeating-linear-gradient(0deg, rgba(16, 16, 16, 0.028) 0 1px, transparent 1px 7px),
            #ead99d;
          color: var(--fg);
          box-shadow:
            10px 12px 0 rgba(16, 16, 16, 0.12),
            0 18px 28px rgba(55, 35, 13, 0.18);
          clip-path: polygon(
            0.7% 1.2%, 12% 0.4%, 24% 1%, 36% 0.5%, 51% 1.1%, 67% 0.3%, 82% 1%, 99.1% 0.5%,
            98.7% 16%, 99.5% 31%, 98.9% 46%, 99.3% 62%, 98.8% 79%, 99.4% 98.4%,
            86% 99.1%, 72% 98.5%, 59% 99.2%, 43% 98.6%, 30% 99.3%, 14% 98.7%, 0.8% 99.2%,
            1.4% 84%, 0.6% 69%, 1.2% 54%, 0.7% 37%, 1.3% 20%
          );
        }

        .tl-content::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            linear-gradient(94deg, transparent 0 48.5%, rgba(50, 38, 21, 0.16) 49.2%, rgba(255, 247, 213, 0.2) 50%, transparent 51.2%),
            radial-gradient(circle at 32% 36%, rgba(16, 16, 16, 0.07) 0 1px, transparent 1.5px),
            radial-gradient(circle at 71% 64%, rgba(16, 16, 16, 0.055) 0 1px, transparent 1.5px),
            repeating-linear-gradient(23deg, transparent 0 5px, rgba(16, 16, 16, 0.024) 5px 6px);
          background-size: auto, 19px 19px, 23px 23px, auto;
          mix-blend-mode: multiply;
        }

        .tl-content::after {
          content: "";
          position: absolute;
          right: clamp(0.9rem, 2vw, 1.3rem);
          bottom: clamp(0.8rem, 2vw, 1.15rem);
          width: 82px;
          height: 28px;
          border: 2px solid rgba(16, 16, 16, 0.36);
          color: rgba(16, 16, 16, 0.4);
          transform: rotate(-9deg);
          pointer-events: none;
        }

        .tl-top,
        .tl-org,
        .tl-context,
        .tl-points {
          position: relative;
          z-index: 1;
        }

        .tl-top {
          display: flex;
          flex-wrap: wrap;
          align-items: baseline;
          justify-content: space-between;
          gap: 6px 16px;
        }
        .tl-role {
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(1.25rem, 2.6vw, 1.8rem);
          font-weight: 900;
          line-height: 0.98;
          letter-spacing: -0.02em;
          text-transform: uppercase;
        }
        .tl-period {
          font-family: "Times New Roman", Times, serif;
          font-size: 0.78rem;
          color: var(--fg);
          background: var(--accent-soft);
          border: 1px solid var(--fg);
          padding: 3px 6px;
          white-space: nowrap;
        }
        .tl-org {
          margin-top: 0.55rem;
          padding-top: 0.45rem;
          border-top: 1px solid rgba(16, 16, 16, 0.34);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 1rem;
          color: rgba(16, 16, 16, 0.82);
          font-weight: 700;
        }
        .tl-context {
          margin-top: 6px;
          font-family: "Times New Roman", Times, serif;
          font-size: 0.76rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--muted);
        }
        .tl-points {
          margin-top: 16px;
          display: grid;
          gap: 10px;
          max-width: 68ch;
          padding-top: 14px;
          border-top: 1px solid rgba(16, 16, 16, 0.22);
        }
        .tl-points li {
          position: relative;
          padding-left: 20px;
          font-size: 0.96rem;
          line-height: 1.6;
          color: rgba(16, 16, 16, 0.82);
        }
        .tl-points li::before {
          content: "";
          position: absolute;
          left: 2px;
          top: 11px;
          width: 6px;
          height: 6px;
          background: var(--accent);
          border: 1px solid var(--fg);
        }

        @media (max-width: 780px) {
          .timeline {
            grid-template-columns: 1fr;
          }

          .tl-item,
          .tl-item:nth-child(2n),
          .tl-item:nth-child(3n),
          .tl-item:nth-child(4n) {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}
