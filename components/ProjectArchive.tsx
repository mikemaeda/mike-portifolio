import Link from "next/link";
import type { Project } from "../lib/data";
import ProjectScroll from "./ProjectScroll";

type ProjectArchiveProps = {
  projects: Project[];
};

export default function ProjectArchive({ projects }: ProjectArchiveProps) {
  return (
    <div className="project-archive">
      <ProjectScroll className="project-long-scroll">
        <div className="project-roll">
          {projects.map((project) => (
            <article key={project.slug} className="project-entry">
              <h3>{project.title}</h3>
              <p className="project-summary">{project.summary}</p>

              <div className="project-actions">
                <Link href={`/projects/${project.slug}`} className="project-cta">
                  <span>Open file</span>
                </Link>
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="project-cta"
                  >
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </ProjectScroll>

      <style>{`
        .project-archive {
          margin-top: clamp(2.5rem, 5vw, 3.5rem);
        }

        .project-long-scroll {
          margin-inline: auto;
        }

        .project-scroll {
          position: relative;
          max-width: 940px;
          padding: clamp(2.8rem, 5vw, 4.3rem) clamp(0.7rem, 2vw, 1.15rem);
          color: var(--fg);
          filter: drop-shadow(10px 16px 16px rgba(37, 20, 7, 0.22));
          transform: rotate(-0.25deg);
        }

        .project-scroll-inner {
          position: relative;
          z-index: 1;
          padding: clamp(2.8rem, 5vw, 4.4rem) clamp(1.1rem, 4.4vw, 3.4rem);
          overflow: hidden;
          background:
            radial-gradient(ellipse at 12% 9%, rgba(94, 49, 13, 0.22) 0 6%, transparent 18%),
            radial-gradient(circle at 84% 22%, rgba(118, 68, 18, 0.14) 0 6%, transparent 18%),
            radial-gradient(ellipse at 78% 74%, rgba(72, 38, 12, 0.18) 0 8%, transparent 22%),
            radial-gradient(circle at 32% 52%, rgba(195, 133, 46, 0.12) 0 12%, transparent 28%),
            linear-gradient(90deg, rgba(79, 39, 12, 0.16), transparent 9%, transparent 91%, rgba(79, 39, 12, 0.2)),
            linear-gradient(180deg, rgba(116, 62, 18, 0.2), transparent 8%, transparent 92%, rgba(116, 62, 18, 0.23)),
            repeating-linear-gradient(1deg, rgba(255, 255, 255, 0.08) 0 1px, transparent 1px 7px),
            repeating-linear-gradient(91deg, rgba(61, 33, 12, 0.03) 0 1px, transparent 1px 13px),
            #efd59b;
          border: 0;
          border-radius: 21px 13px 24px 15px / 12px 23px 14px 25px;
          clip-path: polygon(
            1.2% 0.7%, 9% 0.3%, 18% 0.9%, 29% 0.4%, 41% 0.8%,
            53% 0.35%, 66% 0.85%, 80% 0.25%, 98.8% 0.8%,
            99.2% 15%, 98.9% 31%, 99.3% 48%, 98.8% 66%, 99.1% 84%, 98.7% 98.6%,
            88% 99.1%, 75% 98.7%, 62% 99.2%, 48% 98.8%, 35% 99.3%,
            21% 98.7%, 1.1% 99%,
            0.9% 84%, 1.2% 68%, 0.8% 52%, 1.1% 36%, 0.7% 20%
          );
          box-shadow:
            inset 0 0 0 1px rgba(255, 246, 214, 0.5),
            inset 10px 0 24px rgba(93, 50, 17, 0.12),
            inset -12px 0 28px rgba(67, 35, 12, 0.16),
            inset 0 22px 32px rgba(255, 244, 206, 0.25),
            inset 0 -22px 34px rgba(70, 38, 13, 0.18);
        }

        .project-scroll-inner::before {
          content: "";
          position: absolute;
          inset: 14px;
          pointer-events: none;
          border: 1px solid rgba(72, 38, 12, 0.18);
          border-radius: 18px 10px 20px 12px / 12px 20px 10px 18px;
          background:
            linear-gradient(90deg, transparent 0 49.25%, rgba(74, 41, 14, 0.12) 49.65%, rgba(255, 248, 232, 0.24) 50%, transparent 50.6%),
            linear-gradient(90deg, transparent 0 18%, rgba(255, 248, 232, 0.1) 25%, transparent 35% 65%, rgba(84, 45, 15, 0.06) 82%, transparent);
        }

        .project-scroll-inner::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.42;
          background:
            radial-gradient(circle at 18% 24%, rgba(76, 42, 14, 0.12) 0 1px, transparent 1.4px),
            radial-gradient(circle at 68% 44%, rgba(92, 53, 18, 0.1) 0 1px, transparent 1.6px),
            radial-gradient(circle at 42% 78%, rgba(255, 250, 219, 0.16) 0 1px, transparent 1.7px),
            repeating-linear-gradient(17deg, transparent 0 4px, rgba(71, 41, 15, 0.024) 4px 5px);
          background-size: 19px 19px, 23px 23px, 29px 29px, auto;
          mix-blend-mode: multiply;
        }

        .scroll-curl {
          position: absolute;
          z-index: 2;
          left: clamp(4px, 1.5vw, 18px);
          right: clamp(4px, 1.5vw, 18px);
          height: 54px;
          pointer-events: none;
          border: 0;
          background:
            radial-gradient(ellipse at 20% 48%, rgba(255, 238, 184, 0.48), transparent 34%),
            radial-gradient(ellipse at 82% 55%, rgba(78, 40, 13, 0.22), transparent 42%),
            linear-gradient(90deg, rgba(78, 39, 12, 0.32), rgba(211, 157, 82, 0.78) 17%, rgba(255, 232, 166, 0.64) 48%, rgba(146, 79, 25, 0.54) 83%, rgba(70, 35, 11, 0.38)),
            #c99045;
          box-shadow:
            inset 12px 0 16px rgba(61, 31, 10, 0.2),
            inset -14px 0 16px rgba(55, 28, 8, 0.24),
            inset 0 8px 13px rgba(255, 236, 181, 0.26),
            inset 0 -10px 14px rgba(62, 33, 11, 0.24),
            0 7px 12px rgba(48, 25, 8, 0.18);
        }

        .scroll-curl::before,
        .scroll-curl::after {
          content: "";
          position: absolute;
          top: 7px;
          bottom: 7px;
          width: 38px;
          border-radius: 50%;
          background:
            radial-gradient(circle at 60% 50%, rgba(255, 224, 147, 0.38) 0 22%, transparent 23%),
            radial-gradient(circle at 50% 50%, rgba(48, 27, 10, 0.36) 0 32%, rgba(149, 84, 27, 0.68) 34% 58%, rgba(70, 37, 12, 0.72) 62%);
          box-shadow: inset 0 0 14px rgba(27, 16, 7, 0.35);
        }

        .scroll-curl::before { left: -20px; }
        .scroll-curl::after { right: -20px; }

        .scroll-curl-top {
          top: 6px;
          border-radius: 999px 999px 38px 38px / 42px 42px 18px 18px;
          transform: rotate(0.35deg);
        }

        .scroll-curl-bottom {
          bottom: 6px;
          border-radius: 38px 38px 999px 999px / 18px 18px 42px 42px;
          transform: rotate(-0.25deg);
        }

        .project-roll {
          position: relative;
          z-index: 1;
          display: grid;
          gap: clamp(2rem, 5vw, 3.2rem);
        }

        .project-entry {
          position: relative;
          display: grid;
          gap: 0.9rem;
          padding: clamp(1.25rem, 3.4vw, 2rem);
          border: 1.5px dotted rgba(72, 38, 12, 0.32);
          background:
            linear-gradient(rgba(255, 248, 232, 0.12), rgba(255, 248, 232, 0.025)),
            rgba(255, 248, 232, 0.07);
          box-shadow:
            inset 0 0 0 1px rgba(255, 246, 214, 0.12),
            3px 3px 0 rgba(72, 38, 12, 0.045);
        }

        .project-entry:nth-child(even) {
          transform: rotate(0.25deg);
        }

        .project-entry:nth-child(odd) {
          transform: rotate(-0.18deg);
        }

        .project-entry:not(:last-child)::after {
          content: "";
          position: absolute;
          left: 12%;
          right: 12%;
          bottom: calc(clamp(2rem, 5vw, 3.2rem) / -2);
          height: 1px;
          background:
            repeating-linear-gradient(90deg, rgba(72, 38, 12, 0.42) 0 4px, transparent 4px 9px);
        }

        .project-entry h3 {
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(1.55rem, 3.4vw, 2.85rem);
          font-weight: 900;
          line-height: 1;
          letter-spacing: -0.025em;
          text-transform: uppercase;
        }

        .project-summary {
          max-width: 70ch;
          font-size: clamp(0.98rem, 1.7vw, 1.08rem);
          line-height: 1.68;
          font-style: normal;
          color: rgba(16, 16, 16, 0.82);
        }

        .project-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.75rem 1rem;
          margin-top: 0.35rem;
        }

        .project-cta {
          position: relative;
          display: inline-flex;
          align-items: center;
          width: fit-content;
          min-height: 45px;
          padding: 12px 18px;
          border: none;
          background: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .project-cta::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          display: block;
          border-radius: 50px;
          background: #f4c316;
          width: 45px;
          height: 45px;
          transition: all 0.3s ease;
          box-shadow: inset 1px 1px 0 rgba(255, 248, 232, 0.6);
        }

        .project-cta span {
          position: relative;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 1rem;
          font-weight: 900;
          letter-spacing: 0.05em;
          color: #3f3107;
          text-transform: uppercase;
        }

        .project-cta:hover::before {
          width: 100%;
          background: #ffe58f;
        }

        .project-cta:active {
          transform: scale(0.95);
        }

        @media (max-width: 700px) {
          .project-scroll {
            padding-inline: 0.35rem;
            transform: none;
          }

          .project-scroll-inner {
            padding-inline: 1.15rem;
          }

          .project-entry h3 {
            font-size: clamp(1.55rem, 9vw, 2.25rem);
          }

          .project-entry,
          .project-entry:nth-child(even),
          .project-entry:nth-child(odd) {
            transform: none;
          }

          .project-cta span {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
}
