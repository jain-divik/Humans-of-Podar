import { notFound } from "next/navigation";
import Link from "next/link";
import ConversationView from "@/components/ConversationView";
import { conversations } from "@/data/conversations";

export function generateStaticParams() { return conversations.map((c) => ({ id: c.id })); }

export default async function ConversationPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const convo = conversations.find((c) => c.id === id);
  if (!convo) notFound();
  return (
    <div className="stack">
      <Link href="/moderators/dashboard" className="link">← Overview</Link>
      <h1 className="h-lg">Conversation {convo.id}</h1>
      <ConversationView convo={convo} />
    </div>
  );
}
