import Link from "next/link";
import { projects } from "../lib/data";

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-heading">
          <p className="section-number">SELECTED PROJECTS</p>
          <h2>Selected work.</h2>
          <p>Three projects tied to problems I care about.</p>
        </div>
        <div className="project-ledger">
          {projects.map((project) => (
            <article className="project-row" key={project.slug}>
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
                <p>{project.impact[0]}</p>
                <Link href={`/projects/${project.slug}`}>Read more</Link>
              </div>
            </article>
          ))}
        </div>
        <div className="section-end">
          <Link href="/projects" className="text-link">View projects</Link>
        </div>
      </div>
    </section>
  );
}
