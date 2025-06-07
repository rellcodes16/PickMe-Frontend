import React, { useState } from 'react'
import { FaMailBulk, FaPlaneDeparture } from 'react-icons/fa'
import FormRowVertical from '../../../../../UI/FormRowVertical';

function InviteAdmin({ orgName }) {
    const [email, setEmail] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
    };
  return (
<div>
      <div className="w-[400px] p-5">
        <h2 className="text-2xl font-bold text-black text-center mb-6">
          Invite Admin to <span className="text-violet-700">{orgName}</span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <FormRowVertical label="Email" icon={FaMailBulk}>
            <input
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email..."
              className="border border-gray-400 px-2 py-2 rounded-sm placeholder:italic w-full"
            />
          </FormRowVertical>

          <button
            type="submit"
            className="w-full py-2 rounded-md bg-violet-700 text-white font-semibold hover:bg-violet-800"
          >
            Invite <span></span>
          </button>
        </form>
      </div>
    </div>
  )
}

export default InviteAdmin
