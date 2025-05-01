import { useState } from "react";
import VotingList from "./VotingList";

const tabs = ["All", "Upcoming", "Active", "Closed"];

function Voting() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div>
      <h1 className="italic font-semibold text-2xl mb-4">Voting</h1>

      <div className="flex gap-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full ${
              activeTab === tab ? "bg-violet-700 text-white" : "bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <VotingList activeTab={activeTab} />
    </div>
  );
}

export default Voting;
