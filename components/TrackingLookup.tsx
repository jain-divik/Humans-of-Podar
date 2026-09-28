"use client";
import { useState } from "react";

export default function TrackingLookup() {
  const [code, setCode] = useState("");
  const [state, setState] = useState<"idle" | "error" | "unavailable">("idle");
  return (
    <form className="card stack" onSubmit={(e) => { e.preventDefault(); setState(code.trim() ? "unavailable" : "error"); /* TODO(backend): move to /check */ }} noValidate>
      <h2 className="h-md">Already have a tracking code?</h2>
      <div className="field">
        <label className="caps" htmlFor="code">Tracking code</label>
        <input id="code" className="input" value={code} onChange={(e) => setCode(e.target.value)} placeholder="e.g. WY-2841" autoComplete="off" />
      </div>
      {state === "error" && <p className="err" role="alert">Enter your tracking code first.</p>}
      {state === "unavailable" && <p className="muted" role="status">Checking a conversation isn't available yet. Please check back soon.</p>}
      <button className="btn btn-dark" type="submit">Continue <span className="arrow" aria-hidden>→</span></button>
    </form>
  );
}
