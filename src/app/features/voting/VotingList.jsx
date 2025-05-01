import VotingRow from "./VotingRow";

const dummySessions = [
  {
    id: 1,
    title: "AI Enthusiasts Exec Election",
    organization: "AI Enthusiasts",
    status: "Active",
    date: "2025-05-01",
  },
  {
    id: 2,
    title: "CTRL Labs Onboarding Vote",
    organization: "CTRL Labs",
    status: "Upcoming",
    date: "2025-05-03",
  },
  {
    id: 3,
    title: "Class Rep Semester Vote",
    organization: "Class Rep",
    status: "Closed",
    date: "2025-04-27",
  },
];

function VotingList({ activeTab }) {
  const filtered = dummySessions.filter((session) =>
    activeTab === "All" ? true : session.status === activeTab
  );

  return (
    <div className="space-y-4">
      {filtered.map((session) => (
        <VotingRow key={session.id} session={session} />
      ))}
    </div>
  );
}

export default VotingList;
