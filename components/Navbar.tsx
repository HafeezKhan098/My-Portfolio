"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/lib/data";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`site-nav ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="#home" className="brand" onClick={() => setOpen(false)} aria-label="Hafeez Ullah home">
          <span className="brand-name">Hafeez Ullah</span>
          <span className="brand-role">/ developer</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
        </nav>

        <a className="nav-cta" href={profile.emailCompose} target="_blank" rel="noreferrer">Let&apos;s talk <span>↗</span></a>

        <button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div className={`mobile-panel ${open ? "open" : ""}`} aria-hidden={!open}>
        <nav className="container mobile-nav" aria-label="Mobile navigation">
          {navLinks.map((link, i) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              <span>0{i + 1}</span>{link.label}
            </a>
          ))}
          <a className="mobile-contact" href={profile.emailCompose} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
            Email Hafeez ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
