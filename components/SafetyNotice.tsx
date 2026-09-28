import { site } from "@/data/site";

export default function SafetyNotice() {
  return (
    <aside className="banner" aria-labelledby="safety-title">
      <p id="safety-title" className="h-sm">This is not an emergency service.</p>
      <p className="muted" style={{ marginTop: ".5rem", maxWidth: 640 }}>
        If you or someone else is in immediate danger or needs urgent help, please contact a trusted adult or the appropriate school or emergency support straight away.
      </p>
      <ul style={{ listStyle: "none", marginTop: "1rem", display: "grid", gap: ".35rem" }}>
        {site.helplines.map((h) => <li key={h.name} className="mono"><strong>{h.name}</strong> · {h.contact} · <span className="muted">{h.note}</span></li>)}
      </ul>
    </aside>
  );
}
