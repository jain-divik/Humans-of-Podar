"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/data/site";

export default function Navbar() {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => { const f = () => setScrolled(window.scrollY > 40); f(); window.addEventListener("scroll", f, { passive: true }); return () => window.removeEventListener("scroll", f); }, []);
  useEffect(() => setOpen(false), [path]);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);
  return (
    <>
      <header className={`nav${scrolled ? " scrolled" : ""}`}>
        <Link href="/" className="logo" style={{ position: "relative", zIndex: 60 }}>{site.name}</Link>
        <nav className="nav-links" aria-label="Main">
          {site.nav.map((n) => <Link key={n.href} className="nl" href={n.href} aria-current={path === n.href ? "page" : undefined}>{n.label}</Link>)}
          <Link href={site.cta.href} className="btn btn-primary">{site.cta.label} <span className="arrow" aria-hidden>→</span></Link>
        </nav>
        <button className="menu-btn" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)} style={{ position: "relative", zIndex: 60 }}>{open ? "Close" : "Menu"}</button>
      </header>
      {open && (
        <div id="mobile-menu" className="mobile" role="dialog" aria-label="Menu">
          {site.nav.map((n) => <Link key={n.href} className="ml" href={n.href}>{n.label}</Link>)}
          <Link href={site.cta.href} className="btn btn-primary" style={{ alignSelf: "flex-start" }}>{site.cta.label} →</Link>
        </div>
      )}
    </>
  );
}
