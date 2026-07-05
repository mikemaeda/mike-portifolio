import { skills } from "../lib/data";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <Reveal>
          <h2 className="h-section skills-title">Skills</h2>
        </Reveal>

        <div className="skills-grid">
          {skills.map((group, i) => (
            <Reveal key={group.label} delay={i * 70} className="skill-group">
              <h3 className="skill-label">{group.label}</h3>
              <div className="skill-chips">
                {group.items.map((item, itemIndex) => (
                  <span
                    key={item}
                    className="skill-button"
                    style={{ animationDelay: `${(i * 120 + itemIndex * 55) % 900}ms` }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .skills-section {
          background:
            radial-gradient(circle at 16% 18%, rgba(255, 248, 232, 0.36), transparent 18rem),
            radial-gradient(circle at 88% 78%, rgba(84, 82, 81, 0.16), transparent 20rem),
            linear-gradient(135deg, rgba(16, 16, 16, 0.08), transparent 28%),
            #d9bd6a;
        }

        .skills-title {
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

        .skills-grid {
          display: grid;
          gap: clamp(1.2rem, 3vw, 1.8rem);
          margin-top: clamp(2.5rem, 5vw, 3.5rem);
          padding: clamp(1rem, 2.8vw, 1.6rem);
          border: 3px solid var(--fg);
          background:
            linear-gradient(90deg, rgba(255, 255, 255, 0.2), transparent 18%, transparent 82%, rgba(16, 16, 16, 0.12)),
            repeating-linear-gradient(90deg, rgba(16, 16, 16, 0.045) 0 1px, transparent 1px 32px),
            #b9b2a6;
          box-shadow:
            12px 12px 0 rgba(16, 16, 16, 0.18),
            inset 2px 2px 3px rgba(255, 255, 255, 0.54),
            inset -5px -5px 12px rgba(16, 16, 16, 0.2);
        }
        .skill-group {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at 18% 22%, rgba(255, 248, 232, 0.4), transparent 8rem),
            linear-gradient(135deg, rgba(255, 255, 255, 0.22), transparent 34%),
            #242424;
          padding: 24px clamp(18px, 3vw, 28px) 28px;
          border: 3px solid #171717;
          border-radius: 8px;
          box-shadow:
            8px 8px 0 rgba(16, 16, 16, 0.22),
            inset 2px 2px 2px rgba(255, 255, 255, 0.12),
            inset -4px -4px 9px rgba(0, 0, 0, 0.34);
          transform: rotate(-0.45deg);
        }

        .skill-group::before {
          content: "";
          position: absolute;
          inset: 10px;
          border: 1px solid rgba(255, 248, 232, 0.18);
          pointer-events: none;
        }

        .skill-group::after {
          content: "";
          position: absolute;
          right: 14px;
          top: 14px;
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: var(--accent);
          box-shadow: 0 0 0 2px #171717, 0 0 14px rgba(244, 195, 22, 0.5);
          pointer-events: none;
        }

        .skill-group:nth-child(even) {
          transform: rotate(0.45deg);
        }
        .skill-label {
          position: relative;
          z-index: 2;
          font-family: "Times New Roman", Times, serif;
          font-size: 0.78rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #171717;
          display: inline-block;
          margin-left: -30px;
          padding: 8px 18px 8px 28px;
          min-width: 190px;
          background:
            linear-gradient(90deg, rgba(255, 255, 255, 0.35), transparent 38%),
            var(--accent);
          border: 2px solid #171717;
          border-left: 0;
          box-shadow:
            7px 7px 0 rgba(0, 0, 0, 0.26),
            inset 1px 1px 0 rgba(255, 248, 232, 0.5);
          font-weight: 800;
        }

        .skill-label::before {
          content: "";
          position: absolute;
          left: 0;
          bottom: -13px;
          width: 13px;
          height: 13px;
          background: #8e700d;
          border-left: 2px solid #171717;
          border-bottom: 2px solid #171717;
          clip-path: polygon(0 0, 100% 0, 100% 100%);
        }

        .skill-label::after {
          content: "";
          position: absolute;
          right: -18px;
          top: -2px;
          width: 18px;
          height: calc(100% + 4px);
          background: var(--accent);
          border: 2px solid #171717;
          border-left: 0;
          clip-path: polygon(0 0, 100% 0, 46% 50%, 100% 100%, 0 100%);
        }

        .skill-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 20px;
          align-items: center;
        }

        .skill-button {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: clamp(76px, 10vw, 104px);
          min-height: 54px;
          padding: 0 12px;
          border: 0;
          border-radius: 10px;
          background-color: #c7c3c0;
          color: #171717;
          font-family: "Times New Roman", Times, serif;
          font-size: 0.74rem;
          font-weight: 900;
          letter-spacing: 0.045em;
          line-height: 1.05;
          text-align: center;
          text-transform: uppercase;
          box-shadow:
            rgba(0, 0, 0, 0.34) 8px 8px 8px,
            #ffffff 1.5px 1.5px 2px 0 inset,
            #9f9b97 -3.2px -3.2px 8px 0 inset;
          animation: skillDrift 5.8s ease-in-out infinite;
          transition:
            transform 0.14s ease-in-out,
            box-shadow 0.14s ease-in-out,
            background 0.14s ease-in-out;
        }

        .skill-button:nth-child(3n) {
          background-color: #d42a02;
          color: #fff8e8;
          box-shadow:
            rgba(0, 0, 0, 0.34) 8px 8px 8px,
            #fb702c 2px 2px 10px 0 inset,
            #9e2003 -4px -4px 1px 0 inset;
        }

        .skill-button:nth-child(4n) {
          background-color: #545251;
          color: #fff8e8;
          box-shadow:
            rgba(0, 0, 0, 0.34) 8px 8px 8px,
            #a8a6a4 1.5px 1.5px 1px 0 inset,
            #3b3938 -3.2px -3.2px 8px 0 inset;
        }

        .skill-button:nth-child(5n) {
          background-color: var(--accent);
          color: #171717;
          box-shadow:
            rgba(0, 0, 0, 0.34) 8px 8px 8px,
            #fff4b8 1.5px 1.5px 2px 0 inset,
            #be9510 -3.2px -3.2px 8px 0 inset;
        }

        .skill-button:hover {
          transform: translateY(-4px) rotate(-1deg);
          animation-play-state: paused;
        }

        .skill-button:active {
          transform: translateY(3px) scale(0.96);
          box-shadow:
            rgba(0, 0, 0, 0.2) 0 0 0,
            inset 0.5px 0.5px 4px #000000,
            rgba(255, 255, 255, 0.2) 1px 1px 1px 0 inset;
        }

        @keyframes skillDrift {
          0%, 100% {
            translate: 0 0;
            rotate: -0.6deg;
          }
          35% {
            translate: 4px -5px;
            rotate: 1deg;
          }
          70% {
            translate: -3px 3px;
            rotate: -1.2deg;
          }
        }

        @media (min-width: 720px) {
          .skills-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .skill-group,
          .skill-group:nth-child(even) {
            transform: none;
          }

          .skill-button {
            min-width: calc(50% - 8px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .skill-button {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
