import React from 'react'
import { FaBuilding, FaChartBar, FaEnvelopeOpenText, FaHome, FaInfoCircle, FaTachometerAlt, FaUser, FaUserCog, FaVoteYea } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

function AppNav() {
    return (
        <nav>
            <h1 className="text-violet-700 text-center">PickMe</h1>
    <ul className="flex flex-col gap-1 mt-6 px-3">
      <li>
        <NavLink to='/app/organizations' className={({ isActive }) =>
          `flex items-center gap-3 text-base px-4 py-3 rounded-md transition-colors
           ${isActive ? 'bg-gray-100 text-violet-700 font-semibold' : 'text-gray-600 hover:bg-gray-50 hover:text-violet-700'}`
        }>
          <FaBuilding className="text-2xl" />
          <span>Organization</span>
        </NavLink>
      </li>
      <li>
        <NavLink to='about' className={({ isActive }) =>
          `flex items-center gap-3 text-base px-4 py-3 rounded-md transition-colors
           ${isActive ? 'bg-gray-100 text-violet-700 font-semibold' : 'text-gray-600 hover:bg-gray-50 hover:text-violet-700'}`
        }>
          <FaVoteYea className="text-2xl" />
          <span>Voting</span>
        </NavLink>
      </li>
      <li>
        <NavLink to='contact' className={({ isActive }) =>
          `flex items-center gap-3 text-base px-4 py-3 rounded-md transition-colors
           ${isActive ? 'bg-gray-100 text-violet-700 font-semibold' : 'text-gray-600 hover:bg-gray-50 hover:text-violet-700'}`
        }>
          <FaEnvelopeOpenText className="text-2xl" />
          <span>Invitations</span>
        </NavLink>
      </li>
      <li>
        <NavLink to='contact' className={({ isActive }) =>
          `flex items-center gap-3 text-base px-4 py-3 rounded-md transition-colors
           ${isActive ? 'bg-gray-100 text-violet-700 font-semibold' : 'text-gray-600 hover:bg-gray-50 hover:text-violet-700'}`
        }>
          <FaChartBar className="text-2xl" />
          <span>Results</span>
        </NavLink>
      </li>
      <li>
        <NavLink to='contact' className={({ isActive }) =>
          `flex items-center gap-3 text-base px-4 py-3 rounded-md transition-colors
           ${isActive ? 'bg-gray-100 text-violet-700 font-semibold' : 'text-gray-600 hover:bg-gray-50 hover:text-violet-700'}`
        }>
          <FaTachometerAlt className="text-2xl" />
          <span>Admin Analytics</span>
        </NavLink>
      </li>
      <li>
        <NavLink to='/app/profilesettings' className={({ isActive }) =>
          `flex items-center gap-3 text-base px-4 py-3 rounded-md transition-colors
           ${isActive ? 'bg-gray-100 text-violet-700 font-semibold' : 'text-gray-600 hover:bg-gray-50 hover:text-violet-700'}`
        }>
          <FaUserCog className="text-2xl" />
          <span>Profile Settings</span>
        </NavLink>
      </li>
    </ul>
    
        </nav>
      )
}

export default AppNav
