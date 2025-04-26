import { useState } from "react";
import { FaBuilding, FaEnvelope, FaLock, FaKey, FaUser } from "react-icons/fa";
import FormRowVertical from "../../UI/FormRowVertical";
import { useSignup } from "../../app/hooks/useSignUp";
import { useNavigate } from "react-router-dom";

const tabs = [
  { key: "org", label: "With Organization" },
  { key: "no-org", label: "Without Organization" },
  { key: "invite", label: "With Invite Token" },
];

function SignUp() {
  const [activeTab, setActiveTab] = useState("org");
  const { mutate: signup, isSuccess, isError } = useSignup();
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    organizationName: '',
    inviteToken: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
   e.preventDefault();

   if (formData.password !== formData.passwordConfirm) {
    alert("Passwords do not match.");
    return;
  }

   if (activeTab === 'org') {
    signup({
      name: formData.name,
      email: formData.email,
      password: formData.password,
      passwordConfirm: formData.passwordConfirm,
      organizationName: formData.organizationName,
    });
  }

  if (activeTab === 'no-org') {
    signup({
      name: formData.name,
      email: formData.email,
      password: formData.password,
      passwordConfirm: formData.passwordConfirm,
    });
  }

  if (activeTab === 'invite') {
    signup({
      name: formData.name,
      inviteToken: formData.inviteToken,
      email: formData.email,
      password: formData.password,
      passwordConfirm: formData.passwordConfirm,
    });
  }
};

if(isSuccess){
  navigate('/app/organizations')
}
  

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="flex w-full max-w-5xl min-h-[550px] shadow-2xl rounded-2xl overflow-hidden border border-gray-200">
        <div className="w-full md:w-1/2 bg-white p-8">
          <h2 className="text-2xl font-bold text-black text-center mb-6">
            Sign Up
          </h2>

          <div className="flex justify-between mb-6 space-x-2">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                className={`w-full py-2 text-sm font-medium border-b-2 cursor-pointer transition-all ${
                  activeTab === tab.key
                    ? "border-violet-700 text-violet-700"
                    : "border-transparent text-gray-500 hover:text-violet-700"
                }`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === "org" && (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <FormRowVertical label="Name" icon={FaUser}>
                <input id="name" name="name" type="text" placeholder="Enter your name..." value={formData.name} onChange={handleChange} className="border border-gray-400 px-2 py-2 rounded-sm placeholder:italic"/>
              </FormRowVertical>

              <FormRowVertical label="Organization Name" icon={FaBuilding}>
                <input id="orgName" name="organizationName" type="text" placeholder="Enter organization name..." value={formData.organizationName} onChange={handleChange} className="border border-gray-400 px-2 py-2 rounded-sm placeholder:italic"/>
              </FormRowVertical>

              <FormRowVertical label="Email" icon={FaEnvelope}>
                <input id="emailOrg" name="email" type="email" placeholder="Enter your email..." value={formData.email} onChange={handleChange} className="border border-gray-400 px-2 py-2 rounded-sm placeholder:italic"/>
              </FormRowVertical>

              <FormRowVertical label="Password" icon={FaLock}>
                <input id="passwordOrg" name="password" type="password" placeholder="Create a strong password..." value={formData.password} onChange={handleChange} className="border border-gray-400 px-2 py-2 rounded-sm placeholder:italic"/>
              </FormRowVertical>

              <FormRowVertical label="Confirm Password" icon={FaLock}>
                <input id="passwordConfirmOrg" name="passwordConfirm" type="password" placeholder="Confirm your password..."value={formData.passwordConfirm} onChange={handleChange} className="border border-gray-400 px-2 py-2 rounded-sm placeholder:italic"/>
              </FormRowVertical>

              <button
                type="submit"
                className="w-full py-2 rounded-md bg-violet-700 text-white font-semibold hover:bg-violet-800"
              >
                Create Organization & Sign Up
              </button>
            </form>
          )}

          {activeTab === "no-org" && (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <FormRowVertical label="Name" icon={FaUser}>
                <input id="name" name="name" type="text" placeholder="Enter your name..." value={formData.name} onChange={handleChange} className="border border-gray-400 px-2 py-2 rounded-sm placeholder:italic"/>
              </FormRowVertical>

              <FormRowVertical label="Email" icon={FaEnvelope}>
                <input id="emailNoOrg" name="email" type="email" placeholder="Enter your email..." value={formData.email} onChange={handleChange} className="border border-gray-400 px-2 py-2 rounded-sm placeholder:italic"/>
              </FormRowVertical>

              <FormRowVertical label="Password" icon={FaLock}>
                <input id="passwordOrg" name="password" type="password" placeholder="Create a strong password..." value={formData.password} onChange={handleChange} className="border border-gray-400 px-2 py-2 rounded-sm placeholder:italic"/>
              </FormRowVertical>

              <FormRowVertical label="Confirm Password" icon={FaLock}>
                <input id="passwordConfirmOrg" name="passwordConfirm" type="password" placeholder="Confirm your password..." value={formData.passwordConfirm} onChange={handleChange} className="border border-gray-400 px-2 py-2 rounded-sm placeholder:italic"/>
              </FormRowVertical>

              <button
                type="submit"
                className="w-full py-2 rounded-md bg-violet-700 text-white font-semibold hover:bg-violet-800"
              >
                Sign Up Without Organization
              </button>
            </form>
          )}

          {activeTab === "invite" && (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <FormRowVertical label="Name" icon={FaUser}>
                <input id="name" type="text" name="name" placeholder="Enter your name..." value={formData.name} onChange={handleChange} className="border border-gray-400 px-2 py-2 rounded-sm placeholder:italic"/>
              </FormRowVertical>

              <FormRowVertical label="Invite Token" icon={FaKey}>
                <input id="inviteToken" type="text" name="inviteToken" placeholder="Enter your invite token..." value={formData.inviteToken} onChange={handleChange} className="border border-gray-400 px-2 py-2 rounded-sm placeholder:italic"/>
              </FormRowVertical>

              <FormRowVertical label="Email" icon={FaEnvelope}>
                <input id="emailInvite" type="email" name="email" placeholder="Enter your email..." value={formData.email} onChange={handleChange} className="border border-gray-400 px-2 py-2 rounded-sm placeholder:italic"/>
              </FormRowVertical>

              <FormRowVertical label="Password" icon={FaLock}>
                <input id="passwordInvite" type="password" name="password" placeholder="Create a strong password..." value={formData.password} onChange={handleChange} className="border border-gray-400 px-2 py-2 rounded-sm placeholder:italic"/>
              </FormRowVertical>

              <FormRowVertical label="Confirm Password" icon={FaLock}>
                <input id="passwordOrg" type="password" name="passwordConfirm" placeholder="Confirm your password..." value={formData.passwordConfirm} onChange={handleChange} className="border border-gray-400 px-2 py-2 rounded-sm placeholder:italic"/>
              </FormRowVertical>

              <button
                type="submit"
                className="w-full py-2 rounded-md bg-violet-700 text-white font-semibold hover:bg-violet-800"
              >
                Join with Invite
              </button>
            </form>
          )}

          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <a href="/login" className="text-violet-700 hover:underline">
              Log in here
            </a>
          </p>
        </div>

        <div className="hidden md:block w-1/2 bg-gradient-to-tr from-violet-900 to-violet-500 text-white flex items-center justify-center">
          <p className="text-lg font-medium">Temporary Image or Illustration Here</p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
