import { useState } from "react";
import { FaBuilding, FaEnvelope, FaLock, FaKey, FaUser } from "react-icons/fa";
import FormRowVertical from "../../UI/FormRowVertical";

const tabs = [
  { key: "org", label: "With Organization" },
  { key: "no-org", label: "Without Organization" },
  { key: "invite", label: "With Invite Token" },
];

function SignUp() {
  const [activeTab, setActiveTab] = useState("org");

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
            <form className="space-y-4">
              <FormRowVertical label="Name" icon={FaUser}>
                <input id="name" type="text" placeholder="Enter your name..." className="border border-gray-400 px-2 py-2 rounded-sm placeholder:italic"/>
              </FormRowVertical>

              <FormRowVertical label="Organization Name" icon={FaBuilding}>
                <input id="orgName" type="text" placeholder="Enter organization name..." className="border border-gray-400 px-2 py-2 rounded-sm placeholder:italic"/>
              </FormRowVertical>

              <FormRowVertical label="Email" icon={FaEnvelope}>
                <input id="emailOrg" type="email" placeholder="Enter your email..." className="border border-gray-400 px-2 py-2 rounded-sm placeholder:italic"/>
              </FormRowVertical>

              <FormRowVertical label="Password" icon={FaLock}>
                <input id="passwordOrg" type="password" placeholder="Create a strong password..." className="border border-gray-400 px-2 py-2 rounded-sm placeholder:italic"/>
              </FormRowVertical>

              <FormRowVertical label="Confirm Password" icon={FaLock}>
                <input id="passwordOrg" type="password" placeholder="Confirm your password..." className="border border-gray-400 px-2 py-2 rounded-sm placeholder:italic"/>
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
            <form className="space-y-4">
              <FormRowVertical label="Name" icon={FaUser}>
                <input id="name" type="text" placeholder="Enter your name..." className="border border-gray-400 px-2 py-2 rounded-sm placeholder:italic"/>
              </FormRowVertical>

              <FormRowVertical label="Email" icon={FaEnvelope}>
                <input id="emailNoOrg" type="email" placeholder="Enter your email..." className="border border-gray-400 px-2 py-2 rounded-sm placeholder:italic"/>
              </FormRowVertical>

              <FormRowVertical label="Password" icon={FaLock}>
                <input id="passwordNoOrg" type="password" placeholder="Create a strong password..." className="border border-gray-400 px-2 py-2 rounded-sm placeholder:italic"/>
              </FormRowVertical>

              <FormRowVertical label="Confirm Password" icon={FaLock}>
                <input id="passwordOrg" type="password" placeholder="Confirm your password..." className="border border-gray-400 px-2 py-2 rounded-sm placeholder:italic"/>
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
            <form className="space-y-4">
              <FormRowVertical label="Name" icon={FaUser}>
                <input id="name" type="text" placeholder="Enter your name..." className="border border-gray-400 px-2 py-2 rounded-sm placeholder:italic"/>
              </FormRowVertical>

              <FormRowVertical label="Invite Token" icon={FaKey}>
                <input id="inviteToken" type="text" placeholder="Enter your invite token..." className="border border-gray-400 px-2 py-2 rounded-sm placeholder:italic"/>
              </FormRowVertical>

              <FormRowVertical label="Email" icon={FaEnvelope}>
                <input id="emailInvite" type="email" placeholder="Enter your email..." className="border border-gray-400 px-2 py-2 rounded-sm placeholder:italic"/>
              </FormRowVertical>

              <FormRowVertical label="Password" icon={FaLock}>
                <input id="passwordInvite" type="password" placeholder="Create a strong password..." className="border border-gray-400 px-2 py-2 rounded-sm placeholder:italic"/>
              </FormRowVertical>

              <FormRowVertical label="Confirm Password" icon={FaLock}>
                <input id="passwordOrg" type="password" placeholder="Confirm your password..." className="border border-gray-400 px-2 py-2 rounded-sm placeholder:italic"/>
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
