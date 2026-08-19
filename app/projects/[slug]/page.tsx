import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "../../../components/Footer";
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

  const title = `${project.title} | ${profile.name}`;
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
    <>
    <section className="section detail-page">
      <div className="container detail-main">
        <Link href="/projects" className="detail-back">
          Back to projects
        </Link>

        <h1 className="h-display detail-title">{project.title}</h1>

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
              className="detail-action"
            >
              <span>{l.label}</span>
            </a>
          ))}
        </div>

        <div className="detail-body">
          <section className="detail-section">
            <span className="detail-label">Problem</span>
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
          <Link href="/projects" className="detail-action detail-action-soft">
            <span>All projects</span>
          </Link>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}
