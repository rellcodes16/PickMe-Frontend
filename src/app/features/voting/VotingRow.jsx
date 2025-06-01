import Button from "../../../UI/Button";

function VotingRow({ session }) {
  const { title, organization, status, startDate, endDate } = session;

  const formatDate = (d) =>
    new Date(d).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  const normalizedStatus = status?.toLowerCase();

  return (
    <div className="border-b border-gray-400 rounded-xl p-4 shadow flex justify-between items-center">
      <div>
        <h2 className="font-semibold text-lg">{title}</h2>
        <p className="text-sm text-gray-500">{organization.name}</p>
      </div>

      <div>
        {normalizedStatus === "active" ? (
          <Button type="primarySquareBtn">Vote</Button>
        ) : normalizedStatus === "pending" ? (
          <span className="text-violet-700 text-sm">Starts {formatDate(startDate)}</span>
        ) : (
          <span className="text-gray-500 text-sm">Ended {formatDate(endDate)}</span>
        )}
      </div>
    </div>
  );
}

  export default VotingRow;
  