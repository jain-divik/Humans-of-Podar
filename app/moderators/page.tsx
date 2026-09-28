import Link from "next/link";

export default function ModeratorLogin() {
  return (
    <div className="login"><div className="card stack" style={{ width: "min(420px,100%)" }}>
      <p className="label">Moderator access only</p>
      <h1 className="h-lg">Sign in</h1>
      {/* TODO(backend): replace with real authentication */}
      <div className="field"><label className="caps" htmlFor="email">Email</label><input id="email" className="input" type="email" disabled /></div>
      <div className="field"><label className="caps" htmlFor="pw">Password</label><input id="pw" className="input" type="password" disabled /></div>
      <button className="btn btn-dark" disabled>Sign in</button>
      <p className="muted" style={{ fontSize: 13 }}>Sign-in isn't connected yet. This is a preview of the portal layout with placeholder data.</p>
      <Link href="/moderators/dashboard" className="link">Open portal preview →</Link>
    </div></div>
  );
}
