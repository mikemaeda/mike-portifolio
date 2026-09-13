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
        <div className="project-cases">
          {projects.map((project, index) => (
            <article className={`project-case project-case-${index + 1}`} key={project.slug}>
              <div className="case-header">
                <p className="project-id">P-{String(index + 1).padStart(2, "0")} / {project.period}</p>
                <p className="case-kicker">{project.tagline}</p>
              </div>
              <div className="case-title">
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </div>
              <div className="case-story">
                <div><span>01 / Problem</span><p>{project.problem}</p></div>
                <div><span>02 / What I built</span><p>{project.build}</p></div>
              </div>
              {project.slug === "alfred-rag-assistant" && (
                <div className="rag-flow" aria-label="Alfred RAG answer flow">
                  {['Question', 'Retrieval', 'University sources', 'LLM', 'Cited answer'].map((step, stepIndex) => (
                    <div key={step}><span>{String(stepIndex + 1).padStart(2, '0')}</span>{step}{stepIndex < 4 && <b aria-hidden="true">→</b>}</div>
                  ))}
                </div>
              )}
              <div className="case-footer">
                <div className="case-metric"><strong>{index === 0 ? '1,000+' : index === 1 ? '80%' : '20+'}</strong><span>{index === 0 ? 'records managed offline' : index === 1 ? 'evaluation accuracy' : 'REST API endpoints'}</span></div>
                <div className="case-tools">
                  <div className="project-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                  <div className="case-links">
                    {project.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label} ↗</a>)}
                    <Link href={`/projects/${project.slug}`}>Case study →</Link>
                  </div>
                </div>
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
