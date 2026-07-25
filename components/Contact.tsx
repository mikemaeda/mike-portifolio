import { profile } from "../lib/data";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-grid">
        <div>
          <p className="section-number">04 / OPEN CHANNEL</p>
          <h2>Have a problem worth<br />pulling apart?</h2>
        </div>
        <div className="contact-copy">
          <p>I’m looking for software engineering opportunities where I can contribute to backend, data, or applied AI systems—and learn from people who care about the details.</p>
          <a href={`mailto:${profile.email}`} className="contact-email">{profile.email} <span>↗</span></a>
          <div className="contact-links">
            <a href={profile.links.github} target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href={profile.links.resume} target="_blank" rel="noreferrer">Résumé ↗</a>
          </div>
        </div>
      </div>
    </section>
  );
}
