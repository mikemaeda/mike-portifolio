import Image from "next/image";
import Link from "next/link";
import { hero, profile } from "../lib/data";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid container">
        <div className="hero-copy">
          <p className="hero-index">MIKE MAEDA / SOFTWARE ENGINEER</p>
          <h1>{hero.headline}</h1>
          <div className="hero-actions">
            <Link href="/projects" className="button button-dark">See selected work <span>↗</span></Link>
            <a href={profile.links.resume} target="_blank" rel="noreferrer" className="button button-paper">Read résumé <span>↓</span></a>
          </div>
          <div className="hero-proof" aria-label="Quick facts">
            <div><strong>3.88</strong><span>GPA / 4.0</span></div>
            <div><strong>3</strong><span>Current campus roles</span></div>
            <div><strong>3</strong><span>Selected projects</span></div>
          </div>
        </div>

        <aside className="hero-visual" aria-label="Mike Maeda profile card">
          <div className="portrait-frame">
            <Image src="/profile.png" alt="Mike Maeda" width={1080} height={1350} priority sizes="(max-width: 800px) 78vw, 390px" />
            <span className="photo-code">MM / 26</span>
          </div>
          <div className="profile-slip">
            <p className="slip-label">ABOUT</p>
            <p>New York</p>
            <p>CS + Data Analytics</p>
            <p>Backend systems + applied AI</p>
          </div>
          <div className="orbit-note">BACKEND · DATA · APPLIED AI</div>
        </aside>
      </div>
      <div className="ticker" aria-hidden="true">
        <div>PYTHON · FASTAPI · APPLIED AI · DATA SYSTEMS · PYTHON · FASTAPI · APPLIED AI · DATA SYSTEMS ·</div>
      </div>
    </section>
  );
}
