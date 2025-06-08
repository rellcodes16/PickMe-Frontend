import VotingRow from "./VotingRow";
import { useGetVotes } from "../../hooks/useGetVotes";

function VotingList({ activeTab }) {
  const { data, isLoading, isError, error } = useGetVotes();

  console.log(data)

  function normalizeStatus(status) {
    switch (status?.toLowerCase()) {
      case "active":
        return "Active";
      case "pending":
        return "Upcoming";
      case "closed":
        return "Closed";
      default:
        return "";
    }
  }

  const sessions = data || [];

  const filtered = sessions.filter((session) =>
    activeTab === "All"
      ? true
      : normalizeStatus(session.status) === activeTab
  );

  if (isLoading) return <p className="text-gray-500 italic">Loading voting sessions...</p>;
  if (isError) return <p className="text-red-500 italic">Error: {error?.message}</p>;
  if (!sessions.length) return <p className="text-gray-500 italic">No voting sessions found.</p>;

  return (
    <div className="space-y-4">
      {filtered.map((session) => (
        <VotingRow key={session._id} session={session} />
      ))}
    </div>
  );
}

export default VotingList;
