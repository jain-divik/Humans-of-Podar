import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ArrowLink from "@/components/ArrowLink";
import { team, beliefs, activities } from "@/data/team";
import { initiatives } from "@/data/initiatives";

export const metadata: Metadata = { title: "About" };

export default function About() {
  return (
    <>
      <section className="section" style={{ borderTop: 0, paddingTop: "9rem" }}><div className="wrap">
        <p className="label">{`R.N. Podar School / Santacruz`}</p>
        <h1 className="mega" style={{ margin: "1.5rem 0" }}>Humans of Podar</h1>
        <p className="lead well">A student-led initiative built around listening, expression and community.</p>
      </div></section>

      <section className="section"><div className="wrap split">
        <p className="label">Who we are</p>
        <div className="stack well body-lg">
          <p>Humans of Podar is a student-led initiative connected to the school community. Our focus is student expression and community.</p>
          <p className="muted">We create initiatives around student experiences, and we give students a platform to take part and contribute.</p>
        </div>
      </div></section>

      <section className="section"><div className="wrap split">
        <p className="label">Why we exist</p>
        <div className="stack">
          <h2 className="display">School is a community, not just a classroom.</h2>
          <p className="body-lg muted well">A lot of what students experience never fits into a lesson plan. We exist so more of it has somewhere to go.</p>
          <p className="body-lg muted well">Not everything needs fixing. Sometimes it needs someone to listen.</p>
        </div>
      </div></section>

      <section className="section"><div className="wrap">
        <p className="label">What we believe</p>
        <ol style={{ listStyle: "none", marginTop: "2rem" }}>
          {beliefs.map((b, i) => <li key={b}><Reveal><div style={{ display: "grid", gridTemplateColumns: "60px 1fr", gap: "1rem", padding: "1.5rem 0", borderTop: "1px solid var(--hair)" }}>
            <span className="mono muted">{String(i + 1).padStart(2, "0")}</span><p className="h-lg">{b}</p></div></Reveal></li>)}
        </ol>
      </div></section>

      <section className="section"><div className="wrap">
        <p className="label">What we do</p>
        <div className="grid g3" style={{ marginTop: "2rem" }}>
          {activities.map((a) => <article key={a.title} className="card"><h3 className="h-sm">{a.title}</h3><p className="muted" style={{ marginTop: ".5rem" }}>{a.text}</p></article>)}
        </div>
      </div></section>

      <section className="section"><div className="wrap">
        <p className="label">Our people</p>
        <div className="grid g3" style={{ marginTop: "2rem" }}>
          {team.map((t) => <article key={t.id}>
            <div className="ph mono" role="img" aria-label="Photo placeholder">Photo</div>
            <h3 className="h-sm" style={{ marginTop: "1rem" }}>{t.name}</h3><p className="label">{t.role}</p><p className="muted" style={{ marginTop: ".5rem" }}>{t.bio}</p>
          </article>)}
        </div>
      </div></section>

      <section className="section"><div className="wrap">
        <p className="label">Our initiatives</p>
        <div style={{ marginTop: "1.5rem" }}>
          {initiatives.map((n) => <details key={n.id} style={{ borderTop: "1px solid var(--hair)", padding: "1.25rem 0" }}>
            <summary className="h-md" style={{ cursor: "pointer" }}>{n.title} <span className="label" style={{ marginLeft: ".75rem" }}>{n.kind}</span></summary>
            <p className="muted" style={{ marginTop: ".75rem" }}>{n.summary}</p></details>)}
        </div>
      </div></section>

      <section className="section"><div className="wrap stack">
        <h2 className="display">Want to be part of it?</h2>
        <p className="muted well">Contact details will be added here. For now, you can start a conversation.</p>
        <ArrowLink href="/support" variant="primary">Talk to us</ArrowLink>
      </div></section>
    </>
  );
}
