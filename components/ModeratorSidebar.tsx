"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [{ label: "Overview", href: "/moderators/dashboard" }, { label: "Conversations", href: "/moderators/conversations/WY-2841" }];

export default function ModeratorSidebar() {
  const path = usePathname();
  return (
    <aside>
      <div><p className="h-sm">Moderator portal</p><p className="label">Restricted area</p></div>
      <nav aria-label="Moderator">
        {items.map((i) => <Link key={i.href} href={i.href} aria-current={path.startsWith(i.href.split("/").slice(0, 3).join("/")) ? "page" : undefined}>{i.label}</Link>)}
      </nav>
      <Link href="/" className="link" style={{ marginTop: "auto" }}>← Back to site</Link>
    </aside>
  );
}
