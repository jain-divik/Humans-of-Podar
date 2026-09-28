import type { Metadata } from "next";
export const metadata: Metadata = { title: "Moderator portal", robots: { index: false, follow: false } };
export default function ModLayout({ children }: { children: React.ReactNode }) { return <main id="main">{children}</main>; }
