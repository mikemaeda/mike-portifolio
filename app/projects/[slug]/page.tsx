import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowIcon, ArrowLeftIcon, GitHubIcon } from "../../../components/icons";
import { getProject, profile, projects } from "../../../lib/data";

type Params = { slug: string };

// Pre-render a static page for every project at build time.
export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };

  const title = `${project.title} — ${profile.name}`;
  return {
    title,
    description: project.tagline,
    openGraph: {
      title,
      description: project.tagline,
      url: `/projects/${project.slug}`,
      type: "article",
    },
    alternates: { canonical: `/projects/${project.slug}` },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <section className="section detail-page">
      <div className="container detail-main">
        <Link href="/projects" className="detail-back">
          <ArrowLeftIcon />
          Back to projects
        </Link>

        <p className="kicker" style={{ marginTop: "1.5rem" }}>
          {project.period}
        </p>
        <h1 className="h-display detail-title">{project.title}</h1>
        <p className="lead detail-tagline">{project.tagline}</p>

        <div className="detail-stack">
          {project.stack.map((s) => (
            <span key={s} className="chip">
              {s}
            </span>
          ))}
        </div>

        <div className="detail-links">
          {project.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className={`btn ${l.primary ? "btn-primary" : "btn-ghost"}`}
            >
              {l.label === "GitHub" ? <GitHubIcon /> : <ArrowIcon />}
              {l.label}
            </a>
          ))}
        </div>

        <div className="detail-body">
          <section className="detail-section">
            <span className="detail-label">The challenge</span>
            <p>{project.problem}</p>
          </section>

          <section className="detail-section">
            <span className="detail-label">What I built</span>
            <p>{project.build}</p>
          </section>

          <section className="detail-section">
            <span className="detail-label">Impact</span>
            <ul className="detail-impact">
              {project.impact.map((it, i) => (
                <li key={i}>{it}</li>
              ))}
            </ul>
          </section>
        </div>

        <div className="detail-foot-nav">
          <Link href="/projects" className="btn btn-ghost">
            <ArrowLeftIcon />
            All projects
          </Link>
        </div>
      </div>

      <style>{`
        .detail-main { max-width: 760px; }
        .detail-back {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.92rem;
          color: var(--muted-strong);
          transition: color 0.2s var(--ease);
        }
        .detail-back:hover { color: var(--fg); }
        .detail-back svg { width: 17px; height: 17px; }

        .detail-title { margin-top: 1.25rem; }
        .detail-tagline { margin-top: 1rem; max-width: 46ch; }

        .detail-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 2rem;
        }
        .detail-links {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 1.5rem;
        }

        .detail-body {
          display: grid;
          gap: clamp(2rem, 4vw, 3rem);
          margin-top: clamp(2.5rem, 5vw, 3.5rem);
          padding-top: clamp(2.5rem, 5vw, 3.5rem);
          border-top: 1px solid var(--line);
        }
        .detail-label {
          font-family: var(--font-geist-mono), ui-monospace, monospace;
          font-size: 0.68rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--muted);
        }
        .detail-section { display: grid; gap: 12px; }
        .detail-section > p {
          font-size: 1.06rem;
          line-height: 1.7;
          color: var(--muted-strong);
        }
        .detail-impact { display: grid; gap: 12px; }
        .detail-impact li {
          position: relative;
          padding-left: 20px;
          font-size: 1.02rem;
          line-height: 1.6;
          color: var(--muted-strong);
        }
        .detail-impact li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 11px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          border: 1.5px solid var(--fg);
        }

        .detail-foot-nav {
          margin-top: clamp(2.5rem, 5vw, 3.5rem);
          padding-top: clamp(2rem, 4vw, 2.5rem);
          border-top: 1px solid var(--line);
        }
      `}</style>
    </section>
  );
}
