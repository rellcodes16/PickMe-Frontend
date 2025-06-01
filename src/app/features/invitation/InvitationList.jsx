import InvitationRow from './InvitationRow';
import { useGetInvites } from "../../hooks/useGetInvites";

function InvitationList() {
  const { data, isLoading, isError, error } = useGetInvites();

  console.log(data)

  if (isLoading) return <p className="text-gray-500 italic">Loading invitations...</p>;
  if (isError) return <p className="text-red-500 italic">Error loading invites.</p>;

  if (!data || data.data.length === 0) {
    return <p className="text-gray-500 italic">No pending invitations.</p>;
  }

  return (
    <div className="space-y-4">
      {data.data?.map((invite) => (
        <InvitationRow key={invite._id} invite={invite} />
      ))}
    </div>
  );
}

export default InvitationList;
