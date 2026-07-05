import type { Project } from "../lib/data";

type ProjectBookProps = {
  project: Project;
  index: number;
  active: boolean;
  onSelect: () => void;
};

export default function ProjectBook({ project, index, active, onSelect }: ProjectBookProps) {
  return (
    <button
      type="button"
      className={`project-book book-${index % 4} ${active ? "is-active" : ""}`}
      onClick={onSelect}
      aria-pressed={active}
    >
      <span className="book-band book-band-top" aria-hidden="true" />
      <span className="book-number">Vol. {String(index + 1).padStart(2, "0")}</span>
      <span className="book-label">
        <span className="book-title">{project.title}</span>
      </span>
      <span className="book-period">{project.period}</span>
      <span className="book-band book-band-bottom" aria-hidden="true" />
    </button>
  );
}
