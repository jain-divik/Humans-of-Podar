"use client";
import { motion, useReducedMotion } from "framer-motion";
import ArrowLink from "./ArrowLink";
import RingVisual from "./RingVisual";
import { site } from "@/data/site";

export default function Hero() {
  const reduce = useReducedMotion();
  const t = (delay: number) => (reduce ? { duration: 0 } : { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const });

  return (
    <section className="hero-frame" aria-labelledby="hero-title">
      <div className="hf-grid">
        <div className="hf-cell hf-tl">
          <p className="mono">{site.name}</p>
          <p className="mono muted" style={{ marginTop: 4 }}>{site.school}, {site.place}</p>
        </div>
        <div className="hf-cell hf-tc">
          <a href="#why" className="mono">Why We Hear You</a>
        </div>
        <div className="hf-cell hf-tr">
          <span className="mono">Scroll down</span>
          <span className="scroll-cue" aria-hidden style={{ marginTop: 10 }}><i /></span>
        </div>

        <div className="hf-cell hf-ml">
          <p className="mono muted" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
            Expression / Listening / Community
          </p>
        </div>
        <div className="hf-cell hf-center" aria-hidden>
          <motion.div className="hf-ring" initial={{ opacity: reduce ? 1 : 0, scale: reduce ? 1 : 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={t(0.3)}>
            <RingVisual />
          </motion.div>
        </div>
        <div className="hf-cell hf-mr" />

        <div className="hf-cell hf-bl">
          <motion.p className="label" initial={{ opacity: reduce ? 1 : 0 }} animate={{ opacity: 1 }} transition={t(0.15)}>
            {site.campaign} · {site.year}
          </motion.p>
          <motion.h1
            id="hero-title"
            className="hf-headline"
            initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={t(0.35)}
          >
            We hear <span className="accent">you.</span>
          </motion.h1>
        </div>
        <div className="hf-cell hf-br">
          <motion.div className="stack" initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 16 }} animate={{ opacity: 1, y: 0 }} transition={t(0.55)}>
            <p className="body-lg">A student-led space for expression, connection and community.</p>
            <div style={{ display: "flex", gap: ".75rem", flexWrap: "wrap" }}>
              <ArrowLink href="/support" variant="primary">Talk to us</ArrowLink>
              <ArrowLink href="#we-hear-you" variant="ghost">Explore the campaign</ArrowLink>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}