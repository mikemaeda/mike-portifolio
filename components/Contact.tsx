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
    <section id="contact" className="section contact-section">
      <div className="container">
        <Reveal>
          <h2 className="h-section contact-title">Contact</h2>
          <p className="contact-note">Let&rsquo;s build something.</p>
        </Reveal>

        <div className="contact-list">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={i * 70}>
              <a
                href={c.href}
                target={c.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={c.href.startsWith("mailto:") ? undefined : "noreferrer"}
                className="contact-row"
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
        .contact-section {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at 16% 18%, rgba(255, 248, 232, 0.34), transparent 18rem),
            radial-gradient(circle at 84% 78%, rgba(111, 67, 29, 0.2), transparent 18rem),
            repeating-linear-gradient(90deg, rgba(16, 16, 16, 0.022) 0 1px, transparent 1px 34px),
            #e8ca76;
          border-top: 2px solid var(--fg);
        }

        .contact-title {
          margin-top: 1.25rem;
          max-width: 18ch;
          font-family: "Brush Script MT", "Snell Roundhand", "Apple Chancery", cursive;
          font-size: clamp(3.6rem, 8.6vw, 6.6rem);
          font-weight: 500;
          line-height: 0.92;
          letter-spacing: 0;
          text-shadow:
            4px 4px 0 var(--accent),
            0 3px 0 rgba(16, 16, 16, 0.12);
          transform: rotate(-0.3deg);
        }

        .contact-note {
          width: fit-content;
          margin-top: 1.1rem;
          padding: 8px 12px;
          border: 1px dashed rgba(16, 16, 16, 0.48);
          background: rgba(255, 248, 232, 0.42);
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(1.02rem, 2vw, 1.2rem);
          font-style: italic;
          color: rgba(16, 16, 16, 0.82);
          transform: rotate(0.55deg);
        }

        .contact-list {
          display: grid;
          gap: 18px;
          margin-top: 2.5rem;
          max-width: 680px;
          padding: clamp(1rem, 3vw, 1.5rem);
          background:
            radial-gradient(circle at 12% 22%, rgba(111, 67, 29, 0.12), transparent 8rem),
            repeating-linear-gradient(0deg, rgba(16, 16, 16, 0.025) 0 1px, transparent 1px 9px),
            rgba(255, 248, 232, 0.44);
          box-shadow: 10px 12px 0 rgba(16, 16, 16, 0.14);
          clip-path: polygon(1% 2%, 12% 0.8%, 24% 1.8%, 38% 0.6%, 54% 1.5%, 70% 0.7%, 99% 1.8%, 98.6% 31%, 99.2% 66%, 98.3% 98%, 82% 99.2%, 64% 98.5%, 46% 99.1%, 27% 98.4%, 1.3% 99%, 0.8% 72%, 1.5% 44%);
        }
        .contact-row {
          position: relative;
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 18px 20px 18px 18px;
          border: 2px dotted rgba(16, 16, 16, 0.46);
          background:
            linear-gradient(90deg, rgba(255, 248, 232, 0.5), rgba(255, 248, 232, 0.14)),
            rgba(255, 248, 232, 0.28);
          box-shadow: 4px 4px 0 rgba(16, 16, 16, 0.08);
          transform: rotate(-0.4deg);
          transition: transform 0.22s var(--ease), background 0.22s var(--ease),
            box-shadow 0.22s var(--ease);
        }

        .contact-list > *:nth-child(even) .contact-row { transform: rotate(0.5deg); }
        .contact-row:hover {
          transform: translateY(-3px) rotate(0deg);
          background: rgba(255, 248, 232, 0.55);
          box-shadow: 7px 8px 0 rgba(16, 16, 16, 0.13);
        }
        .contact-row:hover .contact-arrow { transform: translate(2px, -2px); opacity: 1; }
        .contact-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          flex: none;
          border-radius: 50%;
          background: var(--accent);
          color: var(--fg);
          border: 2px solid var(--fg);
          box-shadow: 3px 3px 0 rgba(16, 16, 16, 0.16);
        }
        .contact-icon svg { width: 19px; height: 19px; }
        .contact-meta { display: flex; flex-direction: column; gap: 2px; }
        .contact-label {
          font-family: "Times New Roman", Times, serif;
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--fg);
          font-weight: 800;
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

        @media (max-width: 620px) {
          .contact-row {
            align-items: flex-start;
            gap: 12px;
            padding-inline: 14px;
          }

          .contact-value {
            overflow-wrap: anywhere;
          }
        }
      `}</style>
    </section>
  );
}
