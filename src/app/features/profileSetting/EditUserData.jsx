import { useState, useEffect } from "react";
import { FaEnvelope, FaUser } from "react-icons/fa";
import FormRowVertical from "../../../UI/FormRowVertical";
import { useUpdateUser } from "../../hooks/useUpdateUserData";
import { useSelector } from "react-redux";

function EditUserData({ defaultName, defaultEmail, onClose }) {
  const user = useSelector((state) => state.auth.user); // to get existing photo URL

  const [name, setName] = useState(defaultName);
  const [email, setEmail] = useState(defaultEmail);
  const [profilePicFile, setProfilePicFile] = useState(null);
  const [profilePicPreview, setProfilePicPreview] = useState(user?.photo || null);

  const { mutate, isLoading } = useUpdateUser();

  useEffect(() => {
    if (profilePicFile) {
      const url = URL.createObjectURL(profilePicFile);
      setProfilePicPreview(url);

      return () => URL.revokeObjectURL(url); // cleanup old URL
    }
  }, [profilePicFile]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setProfilePicFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    if (name.trim() !== defaultName) formData.append("name", name.trim());
    if (email.trim() !== defaultEmail) formData.append("email", email.trim());
    if (profilePicFile) formData.append("profilePicture", profilePicFile);

    if ([...formData.keys()].length === 0) {
      onClose?.();
      return;
    }

    mutate(formData, { onSuccess: onClose });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4">
      <h2 className="text-2xl font-bold text-center">Update Info</h2>

      <div className="flex flex-col items-center mb-4">
        <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 shadow mb-2">
          {profilePicPreview ? (
            <img
              src={profilePicPreview}
              alt="Profile Preview"
              className="object-cover w-full h-full"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400 text-sm">
              No Photo
            </div>
          )}
        </div>

        <label
          htmlFor="profilePicture"
          className="cursor-pointer text-violet-700 hover:underline"
        >
          Change Profile Picture
        </label>
        <input
          id="profilePicture"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      <FormRowVertical label="Name" icon={FaUser}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input"
        />
      </FormRowVertical>

      <FormRowVertical label="Email" icon={FaEnvelope}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input"
        />
      </FormRowVertical>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-2 rounded-md bg-violet-700 text-white hover:bg-violet-800"
      >
        {isLoading ? "Saving…" : "Save Changes"}
      </button>
    </form>
  );
}

export default EditUserData;
