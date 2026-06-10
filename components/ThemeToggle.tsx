"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./icons";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  // Start unmounted so the icon only renders once we know the real theme,
  // which the no-flash script in layout.tsx has already applied to <html>.
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const current = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    setTheme(current);
    setMounted(true);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Private mode / blocked storage — fall back to in-session only.
    }
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {/* Keep markup stable across SSR/hydration; reveal the icon after mount. */}
      <span style={{ opacity: mounted ? 1 : 0, transition: "opacity 0.2s var(--ease)" }}>
        {isDark ? <SunIcon /> : <MoonIcon />}
      </span>

      <style>{`
        .theme-toggle {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 999px;
          border: 1px solid var(--line-strong);
          background: transparent;
          color: var(--fg);
          cursor: pointer;
          transition: border-color 0.2s var(--ease), background 0.2s var(--ease),
            transform 0.2s var(--ease);
        }
        .theme-toggle:hover {
          border-color: var(--fg);
          transform: translateY(-1px);
        }
        .theme-toggle svg {
          width: 18px;
          height: 18px;
          display: block;
        }
      `}</style>
    </button>
  );
}
