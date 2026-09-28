import type { Metadata } from "next";
import SupportForm from "@/components/SupportForm";
import TrackingLookup from "@/components/TrackingLookup";
import SafetyNotice from "@/components/SafetyNotice";

export const metadata: Metadata = { title: "Talk to us" };
const steps = [
  { t: "Share", d: "Tell us what's on your mind." },
  { t: "Receive", d: "You'll receive a private tracking reference." },
  { t: "Return", d: "Use your reference to check the conversation later." },
];

export default function Support() {
  return (
    <div className="wrap" style={{ paddingTop: "9rem", paddingBottom: "5rem" }}>
      <h1 className="mega" style={{ fontSize: "clamp(64px,13vw,160px)" }}>Talk to us.</h1>
      <p className="lead well" style={{ marginTop: "1.5rem" }}>If there's something you'd like to share, you can start here.</p>
      <ol className="grid g3" style={{ listStyle: "none", margin: "4rem 0" }}>
        {steps.map((s, i) => <li key={s.t} className="card"><span className="mono accent">{String(i + 1).padStart(2, "0")}</span><h2 className="h-md" style={{ margin: ".5rem 0" }}>{s.t}</h2><p className="muted">{s.d}</p></li>)}
      </ol>
      <div className="split" style={{ gridTemplateColumns: "7fr 5fr" }}>
        <SupportForm /><TrackingLookup />
      </div>
      <div style={{ marginTop: "3rem" }}><SafetyNotice /></div>
    </div>
  );
}
