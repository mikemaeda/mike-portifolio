import Image from "next/image";
import Link from "next/link";
import { hero, profile } from "../lib/data";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid container">
        <div className="hero-copy">
          <p className="hero-index">COMPUTER SCIENCE + DATA ANALYTICS</p>
          <h1>{hero.headline}</h1>
          <p className="hero-intro">{hero.intro}</p>
          <div className="hero-actions">
            <Link href="/projects" className="button button-dark">Selected work</Link>
            <a href={profile.links.resume} target="_blank" rel="noreferrer" className="button button-paper">Résumé</a>
          </div>
          <div className="hero-details" aria-label="Education details">
            <p>Alfred University</p>
            <p>B.A. double major</p>
            <p>Expected May 2029</p>
          </div>
        </div>

        <aside className="hero-visual" aria-label="Portrait of Mike Maeda">
          <div className="portrait-frame">
            <Image src="/profile.png" alt="Mike Maeda" width={1080} height={1350} priority sizes="(max-width: 800px) 78vw, 390px" />
          </div>
          <p className="portrait-caption">Alfred, New York</p>
        </aside>
      </div>
    </section>
  );
}
