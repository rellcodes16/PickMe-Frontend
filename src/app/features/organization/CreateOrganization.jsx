import { FaBuilding, FaFileAlt, FaImage, FaEnvelope } from "react-icons/fa";
import FormRowVertical from "../../../UI/FormRowVertical";
import { useState } from "react";
import { useCreateOrganization } from "../../hooks/useCreateOrg";

function CreateOrganization() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [validEmailDomain, setValidEmailDomain] = useState('');
  

  const { mutate, isLoading } = useCreateOrganization();

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({ name, description, profilePicture, validEmailDomain });
  };
  return (
    <div className="">
      <div className="">
        <div className="w-full p-8">
          <h2 className="text-2xl font-bold text-black text-center mb-6">
            Create Organization
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <FormRowVertical label="Organization Name" icon={FaBuilding}>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter organization name..."
                className="border border-gray-400 px-2 py-2 rounded-sm placeholder:italic w-full"
              />
            </FormRowVertical>

            {/* Description */}
            <FormRowVertical label="Description" icon={FaFileAlt}>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter organization description..."
                className="border border-gray-400 px-2 py-2 rounded-sm placeholder:italic w-full"
              />
            </FormRowVertical>

            {/* Profile Picture */}
            <FormRowVertical label="Profile Picture" icon={FaImage}>
              <input
                id="profilePicture"
                type="file"
                onChange={(e) => setProfilePicture(e.target.files[0])}
                className="border border-gray-400 px-2 py-2 rounded-sm placeholder:italic w-full"
              />
            </FormRowVertical>

            {/* Valid Email Domain (Optional) */}
            <FormRowVertical label="Valid Email Domain (Optional)" icon={FaEnvelope}>
              <input
                id="validEmailDomain"
                type="text"
                value={validEmailDomain}
                onChange={(e) => setValidEmailDomain(e.target.value)}
                placeholder="Enter email domain (e.g., example.com)"
                className="border border-gray-400 px-2 py-2 rounded-sm placeholder:italic w-full"
              />
            </FormRowVertical>

            <button
              type="submit"
              className="w-full py-2 rounded-md bg-violet-700 text-white font-semibold hover:bg-violet-800"
            >
              Create Organization
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateOrganization;
