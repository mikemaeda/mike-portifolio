import { projects } from "../lib/data";
import ProjectArchive from "./ProjectArchive";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <Reveal>
          <h2 className="h-section projects-title">Projects</h2>
        </Reveal>

        <Reveal delay={90}>
          <ProjectArchive projects={projects} />
        </Reveal>
      </div>

      <style>{`
        .projects-section {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at 14% 18%, rgba(255, 248, 232, 0.48), transparent 18rem),
            radial-gradient(circle at 84% 78%, rgba(111, 67, 29, 0.18), transparent 18rem),
            var(--paper-deep);
          border-block: 2px solid var(--fg);
        }

        .projects-section::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            repeating-linear-gradient(90deg, rgba(16, 16, 16, 0.025) 0 1px, transparent 1px 34px),
            repeating-linear-gradient(0deg, rgba(16, 16, 16, 0.025) 0 1px, transparent 1px 31px);
          pointer-events: none;
        }

        .projects-section > .container {
          position: relative;
          z-index: 1;
        }

        .projects-title {
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

      `}</style>
    </section>
  );
}
