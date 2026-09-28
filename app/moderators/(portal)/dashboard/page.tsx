import Link from "next/link";
import StatusBadge from "@/components/StatusBadge";
import { conversations, stats } from "@/data/conversations";

export default function Dashboard() {
  return (
    <div className="stack">
      <p className="label">Moderator portal · Placeholder data</p>
      <h1 className="h-lg">Overview</h1>
      <div className="grid g4">
        {stats.map((s) => <div key={s.label} className="card"><p className="caps">{s.label}</p><p className="stat" style={{ marginTop: ".75rem" }}>{s.value}</p></div>)}
      </div>
      <h2 className="h-md" style={{ paddingTop: "1.5rem" }}>Recent conversations</h2>
      <div className="card table-wrap" style={{ padding: 0 }}>
        <table>
          <thead><tr><th>Reference</th><th>Category</th><th>Status</th><th>Updated</th></tr></thead>
          <tbody>{conversations.map((c) => (
            <tr key={c.id} className="row"><td><Link className="link mono" href={`/moderators/conversations/${c.id}`}>{c.id}</Link></td><td>{c.category}</td><td><StatusBadge status={c.status} /></td><td className="muted">{c.updated}</td></tr>
          ))}</tbody>
        </table>
      </div>
    </div>
  );
}
