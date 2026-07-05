import { profile } from "../lib/data";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ borderTop: "3px solid var(--fg)", padding: "32px 0", background: "var(--nav-bg)", color: "var(--paper)" }}>
      <div
        className="container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <p style={{ fontSize: "0.86rem", color: "rgba(255, 248, 232, 0.72)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
          © {year} {profile.name}. Built with Next.js.
        </p>

        <div style={{ display: "flex", gap: "8px" }}>
          {[
            { href: profile.links.github, label: "GitHub", Icon: GitHubIcon },
            { href: profile.links.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
            { href: `mailto:${profile.email}`, label: "Email", Icon: MailIcon },
          ].map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
              aria-label={label}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 40,
                height: 40,
                borderRadius: 0,
                border: "1px solid rgba(255, 248, 232, 0.42)",
                color: "var(--paper)",
                background: "rgba(255, 248, 232, 0.04)",
              }}
            >
              <Icon style={{ width: 18, height: 18 }} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
