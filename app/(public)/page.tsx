import Hero from "@/components/Hero";
import ScrollText from "@/components/ScrollText";
import ThemeSelector from "@/components/ThemeSelector";
import Reveal from "@/components/Reveal";
import ArrowLink from "@/components/ArrowLink";
import MediaSlot from "@/components/MediaSlot";
import { images } from "@/data/images";
import { pillars } from "@/data/team";
import { initiatives } from "@/data/initiatives";
import { voices } from "@/data/voices";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="section"><div className="wrap split">
        <Reveal className="stack">
          <p className="label">The starting point</p>
          <MediaSlot img={images.opening} ratio="4/5" />
        </Reveal>
        <Reveal className="stack">
          <p className="display">Sometimes, there's something you want to say, but you don't know where to start.</p>
          <p className="body-lg muted well">School is full of conversations. Some happen in classrooms, some in corridors, some with friends, and some never get spoken at all.</p>
          <p className="lead well">We Hear You is about making more space for those voices.</p>
        </Reveal>
      </div></section>

      <section className="section" id="why"><div className="wrap grid g2" style={{ gap: "4rem", alignItems: "center" }}>
        <Reveal className="stack">
          <p className="label">Why we hear you</p>
          <h2 className="display">Student life is bigger than the timetable.</h2>
          <p className="body-lg muted well">Academics, friendships, pressure, change, expectations, identity, creativity and belonging. Most of school happens between the lessons.</p>
        </Reveal>
        <Reveal delay={0.1}><MediaSlot img={images.why} ratio="4/5" /></Reveal>
      </div></section>

      <ScrollText />

      <section className="section" id="we-hear-you"><div className="wrap">
        <Reveal><p className="label">What's on your mind?</p><h2 className="h-lg" style={{ margin: "1rem 0 3rem" }}>Pick a theme to explore.</h2></Reveal>
        <ThemeSelector />
      </div></section>

      <section className="section"><div className="wrap">
        <Reveal><p className="label">What we do</p></Reveal>
        <div className="grid g2" style={{ marginTop: "2rem", gap: "3rem 4rem" }}>
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}><div style={{ borderTop: "1px solid var(--hair-3)", paddingTop: "1.25rem" }}>
              <h3 className="display" style={{ fontSize: "clamp(48px,7vw,96px)" }}>{p.title}</h3>
              <p className="muted body-lg" style={{ marginTop: ".75rem", maxWidth: 420 }}>{p.text}</p>
            </div></Reveal>
          ))}
        </div>
      </div></section>

      <section className="statement"><div className="wrap">
        <p className="mega">Every student has a story.</p>
        <p className="lead" style={{ marginTop: "2.5rem", color: "var(--accent-hover)" }}>We want to make room for it.</p>
      </div></section>

      <section className="section" id="voices"><div className="wrap">
        <Reveal><p className="label">Voices</p><h2 className="display" style={{ margin: "1rem 0 1rem", maxWidth: 1000 }}>There's more than one way to be heard.</h2>
        <p className="muted well">Placeholder content. Approved student contributions will appear here, always with permission.</p></Reveal>
        <div className="grid g3" style={{ marginTop: "3rem" }}>
          {voices.map((v, i) => (
            <Reveal key={v.id} delay={i * 0.08}><figure className="card" style={{ height: "100%" }}>
              <span className="quote-mark" aria-hidden>“</span><blockquote className="h-sm" style={{ fontWeight: 400 }}>{v.text}</blockquote>
              <figcaption className="label" style={{ marginTop: "1.5rem" }}>{v.format} · {v.credit}</figcaption>
            </figure></Reveal>
          ))}
        </div>
      </div></section>

      <section className="section" id="latest"><div className="wrap">
        <Reveal><p className="label">What's happening</p></Reveal>
        <div style={{ marginTop: "2rem" }}>
          {initiatives.map((n) => (
            <Reveal key={n.id}><article style={{ display: "grid", gridTemplateColumns: "60px 1fr auto", gap: "1.5rem", alignItems: "baseline", padding: "1.75rem 0", borderTop: "1px solid var(--hair)" }}>
              <span className="mono muted">{n.id}</span>
              <div><h3 className="h-md">{n.title}</h3><p className="muted">{n.summary}</p></div>
              <span className="chip" style={{ cursor: "default" }}>{n.kind} · {n.year}</span>
            </article></Reveal>
          ))}
        </div>
      </div></section>

      <section className="section"><div className="wrap grid g2" style={{ gap: "4rem", alignItems: "center" }}>
        <Reveal><MediaSlot img={images.about} ratio="4/5" /></Reveal>
        <Reveal delay={0.1} className="stack">
          <p className="label">About</p>
          <h2 className="display">Who's behind the voices?</h2>
          <p className="h-lg">Humans of Podar</p>
          <p className="body-lg muted well">A student-led initiative at R.N. Podar School, creating spaces for expression, connection and community.</p>
          <ArrowLink href="/about">Meet Humans of Podar</ArrowLink>
        </Reveal>
      </div></section>

      <section className="section"><div className="wrap"><div className="banner" style={{ padding: "3rem" }}>
        <div className="grid g2" style={{ gap: "3rem", alignItems: "center" }}>
          <Reveal className="stack">
            <h2 className="display">Something on your mind?</h2>
            <p className="lead well">You don't have to know exactly how to say it. You can start a conversation here.</p>
            <ArrowLink href="/support" variant="primary">Talk to us</ArrowLink>
          </Reveal>
          <Reveal delay={0.1}><MediaSlot img={images.cta} ratio="4/3" /></Reveal>
        </div>
      </div></div></section>

      <section className="statement"><div className="wrap">
        <p className="mega">Your voice has a place here.</p>
        <div style={{ marginTop: "2.5rem" }}><ArrowLink href="/about" variant="ghost"><span style={{ color: "var(--canvas)" }}>Explore Humans of Podar</span></ArrowLink></div>
      </div></section>
    </>
  );
}