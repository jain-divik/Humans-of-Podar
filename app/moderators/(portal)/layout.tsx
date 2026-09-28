import ModeratorSidebar from "@/components/ModeratorSidebar";
export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return <div className="mod"><ModeratorSidebar /><main>{children}</main></div>;
}
