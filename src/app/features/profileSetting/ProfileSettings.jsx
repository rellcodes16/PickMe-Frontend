import { useState } from "react";
import FormRow from "../../../UI/FormRow";
import Button from "../../../UI/Button";
import FormRowVertical from "../../../UI/FormRowVertical";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";

function ProfileSettings() {
  const [profilePic, setProfilePic] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, currentPassword, newPassword });
  };

  return (
    <div className="max-w-3xl p-6">
      <h2 className="text-2xl font-semibold italic">Profile Settings</h2>
      <p className="italic mb-6 text-gray-500">Update your profile, email address and preferences...</p>

      <form onSubmit={handleSubmit} className="space-y-8">

        <div className="flex items-center space-x-6">
          <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-100">
            {profilePic ? (
              <img src={profilePic} alt="Profile" className="object-cover w-full h-full" />
            ) : (
              <div className="flex items-center justify-center h-full text-gray-400">
                Upload
              </div>
            )}
          </div>
          <label className="bg-violet-700 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-violet-800">
            Upload Photo
            <input
              type="file"
              className="hidden"
              onChange={handleImageChange}
              accept="image/*"
            />
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormRowVertical label="Name" icon={FaUser}>
            <input
              id="name"
              type="text"
              className="w-full border border-gray-400 shadow-sm rounded-md p-2 focus:ring-2 focus:ring-violet-700"
              value={name}
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
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FormRowVertical>
        </div>

        <div className="space-y-5 mt-15">
          <h3 className="text-xl font-semibold italic">Change Password</h3>

          <FormRowVertical label="Current Password" icon={FaLock}>
            <input
              id="currentPassword"
              type="password"
              className="w-[50%] border border-gray-400 shadow-sm rounded-md p-2 focus:ring-2 focus:ring-violet-700"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </FormRowVertical>

          <FormRowVertical label="New Password" icon={FaLock}>
            <input
              id="newPassword"
              type="password"
              className="w-[50%] border border-gray-400 shadow-sm rounded-md p-2 focus:ring-2 focus:ring-violet-700"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </FormRowVertical>
        </div>

        <div>
          <Button
            type="primarySquareBtn"
          >
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ProfileSettings;
