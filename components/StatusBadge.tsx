import type { Status } from "@/data/conversations";
export default function StatusBadge({ status }: { status: Status }) {
  const c = status === "Open" ? "open" : status === "In progress" ? "progress" : "resolved";
  return <span className={`badge ${c}`}>{status}</span>;
}
