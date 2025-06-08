import { useState } from "react";
import ElectionRow from "./ElectionRow";
import { Menu } from "../../../../appUI/AppMenu";
import Modal from "../../../../appUI/AppModal";
import CreateElection from "./CreateElections";
import { useGetOrganizations } from "../../../../hooks/useGetOrg";
import { useSelector } from "react-redux";

// const organizations = [
//   {
//     name: "Tech Club",
//     elections: [
//       { _id: "1", title: "President Election", date: "2025-06-08" },
//       { _id: "2", title: "Treasurer Election", date: "2025-06-15" },
//     ],
//   },
//   {
//     name: "Eco Group",
//     elections: [
//       { _id: "3", title: "Chair Election", date: "2025-06-20" },
//     ],
//   },
// ];

function ElectionList() {
  const user = useSelector((state) => state.auth.user);
  const votes = useSelector((state) => state.votes);

  console.log(votes)
  const [openOrg, setOpenOrg] = useState(null);

  const { data, isLoading, isError, error } = useGetOrganizations()
  
  const organizations = data?.data?.organizations || []

  const adminOrgs = user && user._id
    ? organizations.filter((org) =>
      Array.isArray(org.roles) &&
      org.roles.some((role) => String(role.userId) === String(user._id) && role.role === "admin")
    )
  : [];


    console.log(adminOrgs)

  if (isLoading) return <div className="p-4 text-lg">Loading organizations...</div>;
  if (isError) return <div className="p-4 text-red-500">Error: {error?.message}</div>;
  if (!user || !user._id) return <div className="p-4 text-gray-500">User not loaded.</div>;
  if (adminOrgs.length === 0) return <div className="p-4 text-gray-500">You're not an admin of any organization.</div>;


  const toggleOrg = (name) => {
    setOpenOrg((prev) => (prev === name ? null : name));
  };

  

  return (
    <Modal>
      <div className="p-4 space-y-6">
        {adminOrgs.map((org) => {
          const isOpen = openOrg === org.name;

          return (
            <div
              key={org.name}
              className={`space-y-4 border-gray-500 border-b transition-all duration-300 ${
                isOpen ? "border-b" : ""
              }`}
            >
              <div
                onClick={() => toggleOrg(org.name)}
                className="flex justify-between items-center cursor-pointer py-3"
              >
                <h2 className="text-xl font-semibold">{org.name} Elections</h2>

                <div className="flex items-center gap-2">
                  <Modal.Open openModalName="createOrg">
                    <button
                      className="mb-4 px-4 py-2 cursor-pointer bg-white text-violet-700 font-semibold rounded-md shadow-md hover:bg-violet-700 hover:text-white"
                    >
                      + Create New Election
                    </button>
                  </Modal.Open>

                  <span className="text-2xl text-violet-700">
                    {isOpen ? "▴" : "▾"}
                  </span>
                </div>
              </div>

              {isOpen && (
                <Menu>
                  <div className="overflow-x-auto">
                    <table className="min-w-full table-auto">
                      <tbody>
                        {org.elections.map((session) => (
                          <ElectionRow key={session._id} election={session} />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Menu>
              )}
            </div>
          );
        })}
      </div>

      <Modal.Window name="createOrg">
        <CreateElection />
      </Modal.Window>
    </Modal>
  );
}

export default ElectionList;
