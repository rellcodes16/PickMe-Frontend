import { useState } from "react";
import Modal from "../../../../appUI/AppModal";
import AdminRow from "./AdminRow";
import InviteAdmin from "./InviteAdmin";

const admins = [
  {
    name: "Tech Club",
    admins: [
      { _id: "a1", name: "Alex Johnson", email: "alex@tech.com" },
      { _id: "a2", name: "Nina Stone", email: "nina@tech.com" },
    ],
  },
  {
    name: "Eco Group",
    admins: [
      { _id: "a3", name: "Sarah Okoro", email: "sarah@eco.com" },
    ],
  },
];

function AdminList() {
  const [openOrg, setOpenOrg] = useState(null);
  const [selectedOrg, setSelectedOrg] = useState(null);
  const [adminToRemove, setAdminToRemove] = useState(null);

  const toggleOrg = (name) => {
    setOpenOrg((prev) => (prev === name ? null : name));
  };

  return (
    <Modal>
      <div className="p-4 space-y-6">
        {admins.map((org) => {
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
                <h2 className="text-xl font-semibold">{org.name} Admins</h2>

                <div className="flex items-center gap-2">
                  <div
                    onClick={(e) => {
                      e.stopPropagation(); 
                      setSelectedOrg(org.name);
                    }}
                  >
                    <Modal.Open openModalName="inviteAdmin">
                        <button
                          className="mb-4 px-4 py-2 cursor-pointer bg-white text-violet-700 font-semibold rounded-md shadow-md hover:bg-violet-700 hover:text-white"
                        >
                            + Invite Admin
                        </button>
                    </Modal.Open>
                  </div>

                  <span className="text-2xl text-violet-700">
                    {isOpen ? "▴" : "▾"}
                  </span>
                </div>
              </div>

              {isOpen && (
                <div className="overflow-x-auto">
                  <table className="min-w-full table-auto">
                    <tbody>
                      {org.admins.map((admin) => (
                        <AdminRow key={admin._id} admin={admin} orgName={selectedOrg} onRemoveClick={(admin) => setAdminToRemove({ admin, orgName: org.name })}/>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <Modal.Window name="inviteAdmin">
        <InviteAdmin orgName={selectedOrg} />
      </Modal.Window>
    </Modal>
  );
}

export default AdminList;
