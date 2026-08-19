"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, profile } from "../lib/data";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-shell container">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">M</span>
          <span>Mike Maeda<small>Engineer / Researcher</small></span>
        </Link>
        <button className="menu-button" type="button" aria-expanded={open} aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
          <span>{open ? "Close" : "Menu"}</span>
        </button>
        <nav className={open ? "primary-nav is-open" : "primary-nav"} aria-label="Primary navigation">
          {nav.map((item, index) => (
            <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined} onClick={() => setOpen(false)}>
              <span>0{index + 1}</span>{item.label}
            </Link>
          ))}
          <a href={profile.links.resume} target="_blank" rel="noreferrer" className="nav-resume">Résumé ↗</a>
        </nav>
      </div>
    </header>
  );
}
