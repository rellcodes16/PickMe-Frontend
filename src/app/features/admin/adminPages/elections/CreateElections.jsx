import { FaBuilding, FaFileAlt, FaCalendarAlt } from "react-icons/fa";
import FormRowVertical from "../../../../../UI/FormRowVertical";
import { useState } from "react";

function CreateElection() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="w-[400px] p-5">
        <h2 className="text-2xl font-bold text-black text-center mb-6">
          Create New Election
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

          <FormRowVertical label="Description" icon={FaFileAlt}>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter organization description..."
              className="border border-gray-400 px-2 py-2 rounded-sm placeholder:italic w-full"
            />
          </FormRowVertical>

          <FormRowVertical label="Start Date" icon={FaCalendarAlt}>
            <div onClick={(e) => e.stopPropagation()}>
                <input
                    id="start-date"
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="border border-gray-400 px-2 py-2 rounded-sm w-full"
                />
            </div>
          </FormRowVertical>

          <FormRowVertical label="End Date" icon={FaCalendarAlt}>
            <div onClick={(e) => e.stopPropagation()}>
                <input
                    id="end-date"
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="border border-gray-400 px-2 py-2 rounded-sm w-full"
                />
            </div>
          </FormRowVertical>

          <button
            type="submit"
            className="w-full py-2 rounded-md bg-violet-700 text-white font-semibold hover:bg-violet-800"
          >
            Create Election
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateElection;
