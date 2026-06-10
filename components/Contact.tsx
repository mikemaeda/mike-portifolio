import { profile } from "../lib/data";
import Reveal from "./Reveal";
import { ArrowIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: MailIcon,
  },
  {
    label: "LinkedIn",
    value: "in/mike-maeda",
    href: profile.links.linkedin,
    Icon: LinkedInIcon,
  },
  {
    label: "GitHub",
    value: "github.com/mikemaeda",
    href: profile.links.github,
    Icon: GitHubIcon,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="section"
      style={{ background: "var(--bg-alt)", borderTop: "1px solid var(--line)" }}
    >
      <div className="container">
        <Reveal>
          <p className="kicker">Contact</p>
          <h2 className="h-section" style={{ marginTop: "1.25rem", maxWidth: "14ch" }}>
            Let&rsquo;s build something.
          </h2>
          <p className="lead" style={{ marginTop: "1.25rem", maxWidth: "42ch" }}>
            I&rsquo;m open to software engineering internships.
          </p>
        </Reveal>

        <div className="contact-list">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={i * 70}>
              <a
                href={c.href}
                target={c.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={c.href.startsWith("mailto:") ? undefined : "noreferrer"}
                className="card contact-row"
              >
                <span className="contact-icon">
                  <c.Icon />
                </span>
                <span className="contact-meta">
                  <span className="contact-label">{c.label}</span>
                  <span className="contact-value">{c.value}</span>
                </span>
                <ArrowIcon className="contact-arrow" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .contact-list {
          display: grid;
          gap: 12px;
          margin-top: 2.5rem;
          max-width: 520px;
        }
        .contact-row {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 18px 20px;
        }
        .contact-row:hover {
          transform: translateY(-2px);
          border-color: var(--line-strong);
          box-shadow: var(--shadow-lift);
        }
        .contact-row:hover .contact-arrow { transform: translate(2px, -2px); opacity: 1; }
        .contact-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          flex: none;
          border-radius: 12px;
          background: var(--fg);
          color: var(--bg);
        }
        .contact-icon svg { width: 19px; height: 19px; }
        .contact-meta { display: flex; flex-direction: column; gap: 2px; }
        .contact-label {
          font-family: var(--font-geist-mono), monospace;
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--muted);
        }
        .contact-value { font-size: 1rem; font-weight: 500; letter-spacing: -0.01em; }
        .contact-arrow {
          width: 18px;
          height: 18px;
          margin-left: auto;
          color: var(--muted);
          opacity: 0.55;
          transition: transform 0.25s var(--ease), opacity 0.25s var(--ease);
        }
      `}</style>
    </section>
  );
}
