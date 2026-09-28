"use client";
import { motion, useReducedMotion } from "framer-motion";
import ArrowLink from "./ArrowLink";
import { site } from "@/data/site";

const lines = ["WE", "HEAR", "YOU."];

export default function Hero() {
  const reduce = useReducedMotion();
  const t = (delay: number) => (reduce ? { duration: 0 } : { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const });
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="wrap">
        <motion.p className="label" initial={{ opacity: reduce ? 1 : 0 }} animate={{ opacity: 1 }} transition={t(0.2)} style={{ marginBottom: "1.5rem" }}>
          {site.name} / {site.school} / {site.place}
        </motion.p>
        <h1 id="hero-title" className="mega" aria-label="We hear you.">
          {lines.map((l, i) => (
            <span key={l} className="mask" aria-hidden style={{ display: "block" }}>
              <motion.span style={{ display: "block", color: i === 2 ? "var(--accent)" : undefined }} initial={{ y: reduce ? 0 : "105%" }} animate={{ y: 0 }} transition={t(0.35 + i * 0.12)}>{l}</motion.span>
            </span>
          ))}
        </h1>
        <motion.div className="hero-foot" initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 16 }} animate={{ opacity: 1, y: 0 }} transition={t(1)}>
          <div className="stack" style={{ maxWidth: 460 }}>
            <p className="lead">A student-led space for expression, connection and community.</p>
            <div style={{ display: "flex", gap: ".75rem", flexWrap: "wrap" }}>
              <ArrowLink href="/support" variant="primary">Talk to us</ArrowLink>
              <ArrowLink href="#we-hear-you" variant="ghost">Explore the campaign</ArrowLink>
            </div>
          </div>
          <div className="scroll-cue label" aria-hidden><i />Scroll</div>
        </motion.div>
      </div>
    </section>
  );
}
