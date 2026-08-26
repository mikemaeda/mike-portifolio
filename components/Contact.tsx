import { profile } from "../lib/data";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-grid">
        <div>
          <p className="section-number">04 / CONTACT</p>
          <h2>Get in touch.</h2>
        </div>
        <div className="contact-copy">
          <p>If you would like to discuss my work or connect, send me an email.</p>
          <a href={`mailto:${profile.email}`} className="contact-email">{profile.email} <span>↗</span></a>
          <div className="contact-links">
            <a href={profile.links.github} target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
        </div>
      </div>
    </section>
  );
}
