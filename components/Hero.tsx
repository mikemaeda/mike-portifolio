import Image from "next/image";
import { hero, profile } from "../lib/data";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid container">
        <div className="hero-copy">
          <p className="hero-index">MIKE MAEDA / CLASS OF 2029</p>
          <h1>{hero.headline}</h1>
          <p className="hero-intro">{hero.subtitle}</p>
          <div className="hero-actions">
            <a href="#projects" className="button button-dark">View my work <span>↓</span></a>
            <a href={`mailto:${profile.email}?subject=Resume request`} className="button button-paper" title="Request Mike's resume by email">Resume <span>↗</span></a>
            <a href={profile.links.github} target="_blank" rel="noreferrer" className="hero-text-link">GitHub ↗</a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="hero-text-link">LinkedIn ↗</a>
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
      <div className="hero-divider" aria-hidden="true"><span /></div>
    </section>
  );
}
