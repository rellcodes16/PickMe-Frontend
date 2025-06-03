import { useEffect, useState } from "react";
import FormRowVertical from "../../../UI/FormRowVertical";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import Modal from "../../appUI/AppModal";
import EditUserData from "./EditUserData";
import { useUpdateUserPassword } from "../../hooks/useUpdateUserPassword";

function ProfileSettings() {
  const user = useSelector((state) => state.auth.user);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");


  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setEmail(user.email || "");
    }
  }, [user]);

  
const { mutate, isLoading } = useUpdateUserPassword();

const handlePasswordChange = (e) => {
  e.preventDefault();
  mutate({ passwordCurrent: currentPassword, password: newPassword });
};

  return (
    <div className="max-w-3xl p-6">
      <h2 className="text-2xl font-semibold italic">Profile Settings</h2>
      <p className="italic mb-6 text-gray-500">
        Update your profile, email address and preferences...
      </p>

      <form className="space-y-8">
        <div className="relative w-24 h-24">

      <div className="relative w-24 h-24 mb-6">
        <div className="w-full h-full rounded-full overflow-hidden bg-gray-100 shadow">
          {user?.profilePicture? (
            <img
              src={user.profilePicture}
              alt="Profile"
              className="object-cover w-full h-full"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400 text-sm">
              No Photo
            </div>
          )}
        </div>
      </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormRowVertical label="Name" icon={FaUser}>
            <input
              id="name"
              type="text"
              className="w-full border border-gray-400 shadow-sm rounded-md p-2 focus:ring-2 focus:ring-violet-700"
              value={name}
              disabled
              onChange={(e) => setName(e.target.value)}
              required
            />
          </FormRowVertical>

          <FormRowVertical label="Email" icon={FaEnvelope}>
            <input
              id="email"
              type="email"
              className="w-full border border-gray-400 shadow-sm rounded-md p-2 focus:ring-2 focus:ring-violet-700"
              value={email}
              disabled
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FormRowVertical>

          <Modal.Open openModalName="userData">
            <button
              type="button"
              className="mb-4 px-4 py-2 cursor-pointer bg-white text-violet-700 font-semibold rounded-md shadow-md hover:bg-violet-700 hover:text-white"
            >
              + Edit Personal Data
            </button>
          </Modal.Open>
          <Modal.Window name="userData">
            <EditUserData defaultName={name} defaultEmail={email} onCloseModal={onclose}/>
          </Modal.Window>
        </div>
        </form>
        
       <form onSubmit={handlePasswordChange}>
        <div className="space-y-5 mt-15">
          <h3 className="text-xl font-semibold italic">Change Password</h3>

          <FormRowVertical label="Current Password" icon={FaLock}>
            <input
              id="currentPassword"
              type="password"
              className="w-[50%] border border-gray-400 shadow-sm rounded-md p-2 focus:ring-2 focus:ring-violet-700"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
            />
          </FormRowVertical>

          <FormRowVertical label="New Password" icon={FaLock}>
            <input
              id="newPassword"
              type="password"
              className="w-[50%] border border-gray-400 shadow-sm rounded-md p-2 focus:ring-2 focus:ring-violet-700"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </FormRowVertical>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="mb-4 px-4 py-2 cursor-pointer bg-white text-violet-700 font-semibold rounded-md shadow-md hover:bg-violet-700 hover:text-white"
        >
          {isLoading ? "Updating..." : "+ Edit Password"}
        </button>
      </form>
    </div>
  );
}

export default ProfileSettings;
