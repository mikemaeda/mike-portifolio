import { profile } from "../lib/data";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ borderTop: "1px solid var(--line)", padding: "32px 0" }}>
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
        <p style={{ fontSize: "0.86rem", color: "var(--muted)" }}>
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
                borderRadius: 10,
                border: "1px solid var(--line)",
                color: "var(--muted-strong)",
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
