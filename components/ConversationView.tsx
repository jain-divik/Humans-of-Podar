"use client";
import { useState } from "react";
import type { Conversation, Status } from "@/data/conversations";
import StatusBadge from "./StatusBadge";

export default function ConversationView({ convo }: { convo: Conversation }) {
  const [status, setStatus] = useState<Status>(convo.status);
  const [draft, setDraft] = useState("");
  const [thread, setThread] = useState<string[]>([]);
  return (
    <div className="stack">
      <div className="card" style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
        <div><p className="caps">Reference</p><p className="mono">{convo.id}</p></div>
        <div><p className="caps">Category</p><p>{convo.category}</p></div>
        <div><p className="caps">Student</p><p>{convo.student}</p></div>
        <div><p className="caps">Status</p><StatusBadge status={status} /></div>
      </div>
      <div className="card stack">
        <p className="caps">Student message</p>
        <div className="msg"><p className="lead">{convo.message}</p></div>
        {thread.map((t, i) => <div key={i} className="msg" style={{ background: "var(--sand)" }}><p className="caps">Moderator response (demo, not saved)</p><p>{t}</p></div>)}
      </div>
      <form className="card stack" onSubmit={(e) => { e.preventDefault(); if (draft.trim()) { setThread([...thread, draft]); setDraft(""); /* TODO(backend): POST response */ } }}>
        <label className="caps" htmlFor="reply">Write a response</label>
        <textarea id="reply" className="input" value={draft} onChange={(e) => setDraft(e.target.value)} />
        <div className="field" role="radiogroup" aria-label="Update status">
          <span className="caps">Status</span>
          <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
            {(["Open", "In progress", "Resolved"] as Status[]).map((s) => <button type="button" role="radio" aria-checked={status === s} key={s} className="chip" onClick={() => setStatus(s)}>{s}</button>)}
          </div>
        </div>
        <div><button className="btn btn-primary" type="submit">Send response</button></div>
      </form>
    </div>
  );
}
