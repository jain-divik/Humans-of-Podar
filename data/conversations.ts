// FICTIONAL PLACEHOLDER DATA. Replace with API calls once the ticketing backend exists.
export type Status = "Open" | "In progress" | "Resolved";
export type Conversation = { id: string; category: string; status: Status; updated: string; student: string; preview: string; message: string };
export const conversations: Conversation[] = [
  { id: "WY-2841", category: "School life", status: "Open", updated: "4m", student: "Anonymous", preview: "Placeholder message preview…", message: "This is a fictional placeholder message used to demonstrate the layout of a student note." },
  { id: "WY-1920", category: "Academics", status: "In progress", updated: "21m", student: "Anonymous", preview: "Placeholder message preview…", message: "This is a fictional placeholder message used to demonstrate the layout of a student note." },
  { id: "WY-1832", category: "Friendship", status: "Resolved", updated: "1h", student: "Anonymous", preview: "Placeholder message preview…", message: "This is a fictional placeholder message used to demonstrate the layout of a student note." },
];
export const stats = [
  { label: "Open conversations", value: "08" }, { label: "Awaiting response", value: "03" },
  { label: "In progress", value: "04" }, { label: "Resolved", value: "12" },
];
