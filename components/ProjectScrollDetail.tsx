import Link from "next/link";
import type { Project } from "../lib/data";
import ProjectScroll from "./ProjectScroll";
import { GitHubIcon } from "./icons";

type ProjectScrollDetailProps = {
  project: Project;
};

export default function ProjectScrollDetail({ project }: ProjectScrollDetailProps) {
  return (
    <ProjectScroll className="project-detail-scroll">
      <div className="scroll-heading">
        <h3>{project.title}</h3>
      </div>

      <p className="scroll-summary">{project.summary}</p>

      <div className="scroll-copy-grid">
        <section>
          <span className="scroll-label">Problem</span>
          <p>{project.problem}</p>
        </section>
        <section>
          <span className="scroll-label">What I built</span>
          <p>{project.build}</p>
        </section>
      </div>

      <div className="stamp-row" aria-label="Tech stack">
        {project.stack.map((item) => (
          <span key={item} className="stack-stamp">
            {item}
          </span>
        ))}
      </div>

      <div className="scroll-actions">
        <Link href={`/projects/${project.slug}`} className="scroll-action-link">
          Open file
        </Link>
        {project.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="scroll-action-link"
          >
            {link.label === "GitHub" ? <GitHubIcon /> : null}
            {link.label}
          </a>
        ))}
      </div>
    </ProjectScroll>
  );
}
