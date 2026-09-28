import type { Metadata } from "next";
import { resources, resourceCategories } from "@/data/resources";

export const metadata: Metadata = { title: "Resources" };

export default function Resources() {
  return (
    <div className="wrap" style={{ paddingTop: "9rem", paddingBottom: "5rem" }}>
      <p className="label">Resources</p>
      <h1 className="mega" style={{ fontSize: "clamp(56px,11vw,140px)", margin: "1rem 0" }}>Things worth knowing.</h1>
      <p className="lead well">A curated collection from the club. Placeholders for now.</p>
      {resourceCategories.map((c) => (
        <section key={c} style={{ marginTop: "3rem" }}>
          <p className="label">{c}</p>
          <div className="grid g3" style={{ marginTop: "1rem" }}>
            {resources.filter((r) => r.category === c).map((r) => <article key={r.id} className="card"><span className="chip" style={{ cursor: "default" }}>{r.type}</span><h2 className="h-sm" style={{ margin: ".75rem 0 .5rem" }}>{r.title}</h2><p className="muted">{r.description}</p></article>)}
          </div>
        </section>
      ))}
    </div>
  );
}
