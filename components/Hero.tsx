import Image from "next/image";
import { hero, profile } from "../lib/data";
import { ArrowIcon, DownloadIcon, GitHubIcon, LinkedInIcon } from "./icons";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <h1 className="h-display hero-anim" style={{ animationDelay: "0.1s" }}>
            {hero.headline}
          </h1>

          <p className="lead hero-anim" style={{ animationDelay: "0.22s", maxWidth: "30ch", marginTop: "1.5rem" }}>
            {hero.subtitle}
          </p>

          <p className="hero-intro hero-anim" style={{ animationDelay: "0.32s" }}>
            {hero.intro}
          </p>

          <div className="hero-cta hero-anim" style={{ animationDelay: "0.4s" }}>
            <a href={profile.links.resume} target="_blank" rel="noreferrer" className="btn btn-primary">
              <DownloadIcon /> Resume
            </a>
            <a href={profile.links.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
              <GitHubIcon /> GitHub
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost">
              <LinkedInIcon /> LinkedIn
            </a>
          </div>

          <a href="#projects" className="hero-scroll hero-anim" style={{ animationDelay: "0.52s" }}>
            See my work <ArrowIcon style={{ width: 14, height: 14 }} />
          </a>
        </div>

        <div className="hero-portrait hero-anim" style={{ animationDelay: "0.32s" }}>
          <div className="portrait-frame">
            <Image
              src="/profile.jpg"
              alt="Mike Maeda"
              width={520}
              height={640}
              priority
              className="portrait-img"
            />
          </div>
        </div>
      </div>

      <style>{`
        .hero {
          padding-top: 132px;
          padding-bottom: clamp(3rem, 8vw, 6rem);
        }
        .hero-grid {
          display: grid;
          gap: clamp(2.5rem, 6vw, 5rem);
          align-items: center;
        }
        .hero-copy { max-width: 640px; }
        .hero-intro {
          margin-top: 1rem;
          max-width: 46ch;
          font-size: 1.02rem;
          line-height: 1.6;
          color: var(--muted);
        }
        .hero-cta {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 2.25rem;
        }
        .hero-scroll {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 2.25rem;
          font-family: var(--font-geist-mono), monospace;
          font-size: 0.78rem;
          letter-spacing: 0.04em;
          color: var(--muted);
        }
        .hero-scroll:hover { color: var(--fg); }

        .hero-portrait {
          position: relative;
          justify-self: center;
          width: 100%;
          max-width: 380px;
        }
        .portrait-frame {
          position: relative;
          aspect-ratio: 4 / 5;
          border-radius: 2px;
          overflow: hidden;
          border: 1px solid var(--line);
          background: var(--bg-alt);
          box-shadow: var(--shadow-lift);
        }
        .portrait-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
        }

        .hero-anim {
          opacity: 0;
          transform: translateY(18px);
          animation: heroUp 0.85s var(--ease) forwards;
        }
        @keyframes heroUp {
          to { opacity: 1; transform: none; }
        }

        @media (min-width: 900px) {
          .hero-grid { grid-template-columns: 1.15fr 0.85fr; }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-anim { opacity: 1; transform: none; animation: none; }
        }
      `}</style>
    </section>
  );
}
