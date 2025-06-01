function InvitationRow({ invite }) {
  const organization = invite.organization?.name || invite.organization;
  const role = invite.role;
  const date = invite.createdAt;

  return (
    <div className="border-b border-gray-400 rounded-xl p-4 shadow flex justify-between items-center">
      <div>
        <h2 className="font-semibold text-lg">{organization}</h2>
        <p className="text-sm text-gray-500">Invited as {role}</p>
        <p className="text-xs text-gray-400">Sent on {new Date(date).toLocaleDateString()}</p>
      </div>

      <div className="flex gap-2">
        <button className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">Accept</button>
        <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Reject</button>
      </div>
    </div>
  );
}

  
  export default InvitationRow;
  