import Link from "next/link";

export default function ArrowLink({ href, children, variant = "link" }: { href: string; children: React.ReactNode; variant?: "link" | "primary" | "ghost" | "dark" }) {
  const cls = variant === "link" ? "link" : `btn btn-${variant}`;
  return <Link href={href} className={cls}>{children} <span className="arrow" aria-hidden>→</span></Link>;
}
