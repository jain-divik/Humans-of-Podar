import Link from "next/link";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="cols">
          <div><p className="h-md">{site.name}</p><p className="muted" style={{ marginTop: ".5rem" }}>{site.school}<br />{site.place}</p></div>
          <div><p className="label">Explore</p><ul>{[...site.nav, site.cta].map((n) => <li key={n.href}><Link href={n.href}>{n.label}</Link></li>)}</ul></div>
          <div><p className="label">Admin</p><ul><li><Link href="/moderators" className="link">Moderator access →</Link></li></ul></div>
        </div>
        <p className="label" style={{ marginTop: "3rem" }}>© {site.year} {site.name}. A student-led initiative.</p>
      </div>
    </footer>
  );
}
