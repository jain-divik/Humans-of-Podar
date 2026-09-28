"use client";
import { useState } from "react";
import { themes } from "@/data/themes";

export default function ThemeSelector() {
  const [active, setActive] = useState(0);
  const t = themes[active];
  return (
    <div className="themes">
      <div role="group" aria-label="Themes">
        {themes.map((th, i) => (
          <button key={th.id} className="theme-row" aria-pressed={i === active} onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} onClick={() => setActive(i)}>
            <span className="mono">{String(i + 1).padStart(2, "0")}</span>{th.title}
          </button>
        ))}
      </div>
      <div className="theme-panel" aria-live="polite">
        <span className="mono muted">{String(active + 1).padStart(2, "0")} / {String(themes.length).padStart(2, "0")}</span>
        <div><h3 className="h-lg">{t.title}</h3><p className="body-lg muted" style={{ marginTop: ".75rem" }}>{t.description}</p></div>
      </div>
    </div>
  );
}
