"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, profile } from "../lib/data";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`masthead ${open ? "is-open" : ""}`}
      style={{
        position: "fixed",
        insetInline: 0,
        top: 0,
        zIndex: 50,
        borderBottom: `3px solid ${scrolled ? "var(--accent)" : "var(--fg)"}`,
        background: "var(--paper)",
        color: "var(--fg)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 68,
        }}
      >
        <Link
          href="/"
          style={{
            fontWeight: 900,
            letterSpacing: "0.02em",
            fontSize: "clamp(1.05rem, 2vw, 1.32rem)",
            textTransform: "uppercase",
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontVariant: "small-caps",
            textShadow: "1px 1px 0 rgba(244, 195, 22, 0.45)",
          }}
        >
          Mike Maeda
        </Link>

        {/* Desktop nav */}
        <nav className="nav-desktop" aria-label="Primary">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${active ? "is-active" : ""}`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={profile.links.resume}
            target="_blank"
            rel="noreferrer"
            className="nav-resume"
          >
            Resume
          </a>
        </nav>

        {/* Mobile controls */}
        <div className="nav-mobile-controls">
          <button
            type="button"
            className="nav-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span style={{ transform: open ? "translateY(4px) rotate(45deg)" : "none" }} />
            <span style={{ opacity: open ? 0 : 1 }} />
            <span style={{ transform: open ? "translateY(-4px) rotate(-45deg)" : "none" }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`nav-mobile ${open ? "is-open" : ""}`}>
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            aria-current={pathname === item.href ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
        <a
          href={profile.links.resume}
          target="_blank"
          rel="noreferrer"
          onClick={() => setOpen(false)}
        >
          Resume
        </a>
      </div>

      <style>{`
        .masthead {
          transform: translateY(-58px);
          box-shadow: 0 12px 0 rgba(16, 16, 16, 0.12);
          transition: transform 0.34s var(--ease), background 0.3s var(--ease),
            border-color 0.3s var(--ease), box-shadow 0.3s var(--ease);
        }

        .masthead::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -20px;
          transform: translateX(-50%);
          width: 58px;
          height: 16px;
          border: 2px solid var(--fg);
          border-top: 0;
          background: var(--accent);
          color: var(--fg);
          opacity: 0.86;
        }

        .masthead::before {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -12px;
          z-index: 1;
          width: 10px;
          height: 10px;
          border-right: 3px solid var(--fg);
          border-bottom: 3px solid var(--fg);
          transform: translateX(-50%) rotate(45deg);
          animation: navHintBounce 1.8s ease-in-out infinite;
        }

        @keyframes navHintBounce {
          0%, 100% {
            translate: 0 -1px;
          }
          50% {
            translate: 0 3px;
          }
        }

        .masthead:hover,
        .masthead:focus-within,
        .masthead.is-open {
          transform: translateY(0);
          box-shadow: 0 14px 0 rgba(16, 16, 16, 0.18);
        }

        .nav-desktop {
          display: none;
          align-items: center;
          gap: 24px;
        }
        .nav-link {
          position: relative;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 0.8rem;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-variant: small-caps;
          color: rgba(16, 16, 16, 0.78);
          transition: color 0.2s var(--ease);
        }
        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -7px;
          height: 2px;
          background: var(--accent);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.22s var(--ease);
        }
        .nav-link:hover::after,
        .nav-link.is-active::after {
          transform: scaleX(1);
        }
        .nav-link:hover { color: var(--fg); }
        .nav-link.is-active { color: var(--fg); font-weight: 900; }
        .nav-resume {
          display: inline-flex;
          min-height: 38px;
          align-items: center;
          justify-content: center;
          padding: 0 16px;
          border: 1px solid var(--fg);
          background: var(--accent);
          color: var(--fg);
          box-shadow: 4px 4px 0 rgba(16, 16, 16, 0.16);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 0.78rem;
          font-weight: 900;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-variant: small-caps;
          transition: transform 0.2s var(--ease), box-shadow 0.2s var(--ease);
        }
        .nav-resume:hover {
          transform: translate(-2px, -2px);
          box-shadow: 6px 6px 0 rgba(16, 16, 16, 0.22);
        }

        .nav-mobile-controls {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .nav-toggle {
          display: inline-flex;
          flex-direction: column;
          justify-content: center;
          gap: 4px;
          width: 40px;
          height: 40px;
          align-items: center;
          background: transparent;
          border: 1px solid var(--fg);
          cursor: pointer;
        }
        .nav-toggle span {
          display: block;
          width: 22px;
          height: 1.6px;
          background: var(--fg);
          transition: transform 0.3s var(--ease), opacity 0.2s var(--ease);
        }

        .nav-mobile {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 0 24px;
          max-height: 0;
          overflow: hidden;
          background: var(--paper);
          border-bottom: 1px solid transparent;
          transition: max-height 0.35s var(--ease), border-color 0.35s var(--ease), padding 0.35s var(--ease);
        }
        .nav-mobile.is-open {
          max-height: 360px;
          padding-block: 12px 22px;
          border-bottom-color: var(--line);
        }
        .nav-mobile a {
          padding: 13px 0;
          font-size: 1.05rem;
          font-family: Georgia, "Times New Roman", serif;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--fg);
          border-bottom: 1px solid rgba(16, 16, 16, 0.18);
        }
        .nav-mobile a:last-child { border-bottom: none; }

        @media (min-width: 768px) {
          .nav-desktop { display: flex; }
          .nav-mobile-controls { display: none; }
          .nav-mobile { display: none; }
        }

        @media (max-width: 767px) {
          .masthead {
            transform: translateY(-50px);
          }
          .masthead::after {
            bottom: -22px;
          }
          .masthead::before {
            bottom: -14px;
          }
          .masthead:hover,
          .masthead:focus-within,
          .masthead.is-open {
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .masthead::before {
            animation: none;
          }
        }
      `}</style>
    </header>
  );
}
