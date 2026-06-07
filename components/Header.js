"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { NAV } from "@/lib/data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("");

  // Ombre du header au défilement
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Surlignage de la section active
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const sections = NAV.map((n) => document.querySelector(n.href)).filter(Boolean);
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive("#" + e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => spy.observe(s));
    return () => spy.disconnect();
  }, []);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`} id="top">
      <div className={`wrap nav${mobileOpen ? " mobile-open" : ""}`}>
        <a className="brand" href="#top" aria-label="ADEF Consulting — accueil">
          <Image className="brand-logo" src="/logo.png" alt="ADEF Consulting" width={174} height={120} priority />
          <span className="brand-text">
            <strong>ADEF, Consulting</strong>
            <small>Cabinet de consultance · Dakar</small>
          </span>
        </a>
        <nav className="nav-links" aria-label="Navigation principale">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={active === n.href ? "active" : ""}
              onClick={() => setMobileOpen(false)}
            >
              {n.label}
            </a>
          ))}
          <a className="btn btn-primary nav-cta-mobile" href="#contact" onClick={() => setMobileOpen(false)}>
            Nous contacter <span className="arr">→</span>
          </a>
        </nav>
        <div className="nav-cta">
          <a className="btn btn-ghost" href="#references">Nos références</a>
          <a className="btn btn-primary" href="#contact">Nous contacter <span className="arr">→</span></a>
        </div>
        <button
          className="nav-toggle"
          aria-label="Ouvrir le menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
}
