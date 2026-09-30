"use client";
import { motion, useReducedMotion } from "framer-motion";

const STROKES = 48;

export default function RingVisual() {
  const reduce = useReducedMotion();
  const arcs = Array.from({ length: STROKES }, (_, i) => i);
  return (
    <motion.svg
      viewBox="0 0 200 200"
      role="img"
      aria-label="Decorative rotating ring"
      style={{ width: "100%", height: "100%" }}
      animate={reduce ? undefined : { rotate: 360 }}
      transition={reduce ? undefined : { duration: 40, repeat: Infinity, ease: "linear" }}
    >
      {arcs.map((i) => {
        const angle = (i / STROKES) * 360;
        const lit = i / STROKES > 0.62;
        return (
          <line
            key={i}
            x1="100" y1="26" x2="100" y2="50"
            stroke={lit ? "var(--accent)" : "var(--ink)"}
            strokeOpacity={lit ? 0.9 : 0.35}
            strokeWidth="3"
            strokeLinecap="round"
            transform={`rotate(${angle} 100 100)`}
          />
        );
      })}
    </motion.svg>
  );
}