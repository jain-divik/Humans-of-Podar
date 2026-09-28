"use client";
import { motion, useScroll, useTransform, useReducedMotion, MotionValue } from "framer-motion";
import { useRef } from "react";

const beats = [
  { lines: ["YOU HAVE", "SOMETHING", "TO SAY."], r: [0, 0.08, 0.26, 0.34] },
  { lines: ["BUT SOMETIMES,"], r: [0.32, 0.4, 0.54, 0.62] },
  { lines: ["YOU DON'T", "KNOW WHERE", "TO START."], r: [0.6, 0.7, 0.99, 1], last: true },
];

function Beat({ lines, r, last, p }: { lines: string[]; r: number[]; last?: boolean; p: MotionValue<number> }) {
  const opacity = useTransform(p, r, [0, 1, 1, last ? 1 : 0]);
  const scale = useTransform(p, r, [0.9, 1, 1, last ? 1 : 1.08]);
  const y = useTransform(p, r, [50, 0, 0, last ? 0 : -50]);
  return <motion.div className="beat" style={{ opacity, scale, y }}>{lines.map((l) => <span key={l}>{l}</span>)}</motion.div>;
}

export default function ScrollText() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  if (reduce) return (
    <section className="section static-beats wrap">
      {beats.map((b) => <div key={b.lines[0]} className="beat">{b.lines.map((l) => <span key={l}>{l}</span>)}</div>)}
    </section>
  );
  return (
    <section ref={ref} className="scrolltext" aria-label="You have something to say, but sometimes you don't know where to start.">
      <div className="pin" aria-hidden>{beats.map((b) => <Beat key={b.lines[0]} lines={b.lines} r={b.r} last={b.last} p={scrollYProgress} />)}</div>
    </section>
  );
}
