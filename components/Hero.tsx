import Image from "next/image";
import Link from "next/link";
import { hero, profile } from "../lib/data";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid container">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" />
            Open to Summer 2027 software engineering internships
          </div>
          <p className="hero-index">FIELD NOTE 001 / MIKE MAEDA</p>
          <h1>{hero.headline}</h1>
          <p className="hero-intro">{hero.intro}</p>
          <div className="hero-actions">
            <Link href="/projects" className="button button-dark">See selected work <span>↗</span></Link>
            <a href={profile.links.resume} target="_blank" rel="noreferrer" className="button button-paper">Read résumé <span>↓</span></a>
          </div>
          <div className="hero-proof" aria-label="Quick facts">
            <div><strong>3.88</strong><span>GPA / 4.0</span></div>
            <div><strong>4</strong><span>AI apps at FlyRank</span></div>
            <div><strong>90%</strong><span>CV validation accuracy</span></div>
          </div>
        </div>

        <aside className="hero-visual" aria-label="Mike Maeda profile card">
          <div className="portrait-frame">
            <Image src="/profile.png" alt="Mike Maeda" width={1080} height={1350} priority sizes="(max-width: 800px) 78vw, 390px" />
            <span className="photo-code">MM / 26</span>
          </div>
          <div className="profile-slip">
            <p className="slip-label">CURRENT COORDINATES</p>
            <p>New York</p>
            <p>CS + Data Analytics</p>
            <p>Backend systems + applied AI</p>
          </div>
          <div className="orbit-note">BUILD → TEST → TRACE → IMPROVE</div>
        </aside>
      </div>
      <div className="ticker" aria-hidden="true">
        <div>PYTHON · FASTAPI · APPLIED AI · DATA SYSTEMS · MEASURED RESULTS · PYTHON · FASTAPI · APPLIED AI · DATA SYSTEMS · MEASURED RESULTS ·</div>
      </div>
    </section>
  );
}
