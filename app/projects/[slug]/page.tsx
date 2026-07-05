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

      <style>{`
        .detail-page {
          background: var(--paper);
        }
        .detail-main {
          max-width: 780px;
          padding-top: 16px;
        }
        .detail-back {
          display: inline-flex;
          align-items: center;
          font-size: 0.92rem;
          color: var(--fg);
          padding: 8px 4px;
          font-family: Georgia, "Times New Roman", serif;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          text-decoration: underline;
          text-decoration-color: var(--accent);
          text-decoration-thickness: 4px;
          text-underline-offset: 5px;
          transition: color 0.2s var(--ease), text-decoration-color 0.2s var(--ease);
        }
        .detail-back:hover { text-decoration-color: var(--fg); }

        .detail-title {
          margin-top: 1.75rem;
          text-shadow: 4px 4px 0 var(--accent);
        }

        .detail-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 2rem;
        }
        .detail-links {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.85rem 1.2rem;
          margin-top: 1.5rem;
        }

        .detail-action {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 44px;
          padding: 10px 18px;
          border: 0;
          background: transparent;
          color: var(--fg);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 0.98rem;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          isolation: isolate;
          transition: transform 0.2s var(--ease);
        }

        .detail-action::before {
          content: "";
          position: absolute;
          z-index: -1;
          inset: 52% 2px 12% 2px;
          background:
            radial-gradient(circle at 10% 50%, rgba(244, 195, 22, 0.55) 0 9px, transparent 10px),
            linear-gradient(90deg, rgba(244, 195, 22, 0.45), rgba(255, 229, 143, 0.86), rgba(244, 195, 22, 0.5));
          clip-path: polygon(0 28%, 9% 11%, 24% 24%, 38% 8%, 52% 26%, 69% 12%, 84% 22%, 100% 9%, 97% 82%, 78% 73%, 64% 90%, 49% 76%, 31% 88%, 17% 73%, 3% 86%);
          transform: rotate(-1.2deg) scaleX(0.94);
          transform-origin: left;
          transition: inset 0.24s var(--ease), transform 0.24s var(--ease);
        }

        .detail-action:hover {
          transform: translateY(-2px) rotate(-0.4deg);
        }

        .detail-action:hover::before {
          inset: 18% -4px 8% -4px;
          transform: rotate(-0.6deg) scaleX(1);
        }

        .detail-action-soft::before {
          opacity: 0.72;
        }

        .detail-body {
          display: grid;
          gap: clamp(2rem, 4vw, 3rem);
          margin-top: clamp(2.5rem, 5vw, 3.5rem);
          padding: clamp(1.5rem, 4vw, 2.4rem);
          border: 2px solid var(--fg);
          background: var(--paper);
          box-shadow: var(--shadow);
          transform: rotate(-0.35deg);
        }
        .detail-label {
          font-family: "Times New Roman", Times, serif;
          font-size: 0.68rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--fg);
          font-weight: 800;
          background: var(--accent);
          border: 1px solid var(--fg);
          padding: 4px 8px;
          width: fit-content;
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
          border-radius: 0;
          border: 1.5px solid var(--fg);
          background: var(--accent);
          transform: rotate(45deg);
        }

        .detail-foot-nav {
          margin-top: clamp(2.5rem, 5vw, 3.5rem);
          padding-top: clamp(2rem, 4vw, 2.5rem);
          border-top: 2px solid var(--fg);
        }

        @media (max-width: 640px) {
          .detail-body { transform: none; }
        }
      `}</style>
    </section>
    <Footer />
    </>
  );
}
