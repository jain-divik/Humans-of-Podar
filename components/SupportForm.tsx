"use client";
import { useState } from "react";

const categories = ["School life", "Academics", "Friendships", "Pressure", "Change", "Something else"];

export default function SupportForm() {
  const [identity, setIdentity] = useState<"anonymous" | "named">("anonymous");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);
  const words = message.trim() ? message.trim().split(/\s+/).length : 0;

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!category) return setError("Choose the category that feels closest.");
    if (!message.trim()) return setError("Write a few words before continuing.");
    setError("");
    // TODO(backend): POST to /api/tickets and show the returned tracking code.
    setDone(true);
  }

  if (done) return (
    <div className="card stack" role="status">
      <p className="label">Not sent</p>
      <h2 className="h-lg">The conversation system is being prepared.</h2>
      <p className="muted">Nothing you typed has been sent or saved. Please check back soon. In the meantime, you can talk to a trusted adult at school.</p>
      <button className="btn btn-ghost" onClick={() => setDone(false)}>Go back</button>
    </div>
  );

  return (
    <form className="card stack" onSubmit={submit} noValidate>
      <h2 className="h-lg">What would you like to share?</h2>
      <fieldset className="field" style={{ border: 0 }}>
        <legend className="caps" style={{ marginBottom: ".5rem" }}>How would you like to share</legend>
        <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }} role="radiogroup">
          {(["anonymous", "named"] as const).map((v) => (
            <button type="button" role="radio" aria-checked={identity === v} key={v} className="chip" onClick={() => setIdentity(v)}>{v === "anonymous" ? "Anonymous" : "With my name"}</button>
          ))}
        </div>
      </fieldset>
      <div className="field">
        <label className="caps" htmlFor="cat">Category</label>
        <select id="cat" className="input" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select a category</option>
          {categories.map((c) => <option key={c}>{c}</option>)}
        </select>
      </div>
      <div className="field">
        <label className="caps" htmlFor="msg">Your message</label>
        <textarea id="msg" className="input" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Write whatever you feel comfortable sharing. There's no word limit." aria-describedby="count" />
        <span id="count" className="label">{words} words</span>
      </div>
      {error && <p className="err" role="alert">{error}</p>}
      <div><button className="btn btn-primary" type="submit">Continue <span className="arrow" aria-hidden>→</span></button></div>
    </form>
  );
}
