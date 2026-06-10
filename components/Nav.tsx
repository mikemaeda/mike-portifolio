"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, profile } from "../lib/data";
import ThemeToggle from "./ThemeToggle";

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
      style={{
        position: "fixed",
        insetInline: 0,
        top: 0,
        zIndex: 50,
        borderBottom: `1px solid ${scrolled ? "var(--line)" : "transparent"}`,
        background: scrolled ? "var(--nav-bg)" : "transparent",
        backdropFilter: scrolled ? "saturate(180%) blur(16px)" : "none",
        transition: "background 0.3s var(--ease), border-color 0.3s var(--ease)",
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
          style={{ fontWeight: 600, letterSpacing: "-0.02em", fontSize: "1.02rem" }}
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
            className="btn btn-primary"
            style={{ minHeight: 40, padding: "0 18px", fontSize: "0.85rem" }}
          >
            Resume
          </a>
          <ThemeToggle />
        </nav>

        {/* Mobile controls */}
        <div className="nav-mobile-controls">
          <ThemeToggle />
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
          Resume ↗
        </a>
      </div>

      <style>{`
        .nav-desktop {
          display: none;
          align-items: center;
          gap: 30px;
        }
        .nav-link {
          font-size: 0.92rem;
          color: var(--muted-strong);
          transition: color 0.2s var(--ease);
        }
        .nav-link:hover { color: var(--fg); }
        .nav-link.is-active { color: var(--fg); font-weight: 500; }

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
          border: none;
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
          background: var(--nav-mobile-bg);
          backdrop-filter: saturate(180%) blur(16px);
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
          font-weight: 500;
          border-bottom: 1px solid var(--line);
        }
        .nav-mobile a:last-child { border-bottom: none; }

        @media (min-width: 768px) {
          .nav-desktop { display: flex; }
          .nav-mobile-controls { display: none; }
          .nav-mobile { display: none; }
        }
      `}</style>
    </header>
  );
}
