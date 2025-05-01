import InvitationRow from "./InvitationRow";

const dummyInvitations = [
  {
    id: 1,
    organization: "CTRL Labs",
    role: "Admin",
    date: "2025-04-30",
  },
  {
    id: 2,
    organization: "AI Enthusiasts",
    role: "Voter",
    date: "2025-04-28",
  },
  {
    id: 3,
    organization: "Class Rep",
    role: "Admin",
    date: "2025-04-26",
  },
];

function InvitationList() {
  return (
    <div className="space-y-4">
      {dummyInvitations.map((invite) => (
        <InvitationRow key={invite.id} invite={invite} />
      ))}
    </div>
  );
}

export default InvitationList;
