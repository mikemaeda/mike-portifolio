import Link from "next/link";
import { projects } from "../lib/data";

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-heading">
          <p className="section-number">01 / SELECTED PROJECTS</p>
          <h2>Selected work.</h2>
          <p>A selection of software, AI, and data projects I have built.</p>
        </div>
        <div className="project-ledger">
          {projects.slice(0, 4).map((project, index) => (
            <article className="project-row" key={project.slug}>
              <div className="project-id">P-{String(index + 1).padStart(2, "0")}</div>
              <div className="project-main">
                <div className="project-topline">
                  <p>{project.tagline}</p>
                  <span>{project.period}</span>
                </div>
                <h3>{project.title}</h3>
                <p className="project-summary">{project.summary}</p>
                <div className="project-stack">
                  {project.stack.map((item) => <span key={item}>{item}</span>)}
                </div>
              </div>
              <div className="project-result">
                <span className="result-label">KEY RESULT</span>
                <p>{project.impact[0]}</p>
                <Link href={`/projects/${project.slug}`}>View project ↗</Link>
              </div>
            </article>
          ))}
        </div>
        <div className="section-end">
          <Link href="/projects" className="text-link">View all projects <span>→</span></Link>
        </div>
      </div>
    </section>
  );
}
