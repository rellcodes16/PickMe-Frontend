import { FaChartBar, FaTachometerAlt, FaUserCog, FaUsers } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

function AdminNav() {
    return (
        <nav>
            <h1 className="text-violet-700 text-center">PickMe</h1>
    <ul className="flex flex-col gap-1 mt-6 px-3">
      <li>
        <NavLink to='/app/adminanalytics/election' className={({ isActive }) =>
          `flex items-center gap-3 text-base px-4 py-3 rounded-md transition-colors
           ${isActive ? 'bg-gray-100 text-violet-700 font-semibold' : 'text-gray-600 hover:bg-gray-50 hover:text-violet-700'}`
        }>
          <FaChartBar className="text-2xl" />
          <span>Elections</span>
        </NavLink>
      </li>
      <li>
        <NavLink to='/app/adminanalytics/admins' className={({ isActive }) =>
          `flex items-center gap-3 text-base px-4 py-3 rounded-md transition-colors
           ${isActive ? 'bg-gray-100 text-violet-700 font-semibold' : 'text-gray-600 hover:bg-gray-50 hover:text-violet-700'}`
        }>
          <FaUsers className="text-2xl" />
          <span>Admins</span>
        </NavLink>
      </li>
      <li>
        <NavLink to='/app/adminanalytics/analytics' className={({ isActive }) =>
          `flex items-center gap-3 text-base px-4 py-3 rounded-md transition-colors
           ${isActive ? 'bg-gray-100 text-violet-700 font-semibold' : 'text-gray-600 hover:bg-gray-50 hover:text-violet-700'}`
        }>
          <FaTachometerAlt className="text-2xl" />
          <span>Analytics</span>
        </NavLink>
      </li>
      <li>
        <NavLink to='/app/adminanalytics/settings' className={({ isActive }) =>
          `flex items-center gap-3 text-base px-4 py-3 rounded-md transition-colors
           ${isActive ? 'bg-gray-100 text-violet-700 font-semibold' : 'text-gray-600 hover:bg-gray-50 hover:text-violet-700'}`
        }>
          <FaUserCog className="text-2xl" />
          <span>Settings</span>
        </NavLink>
      </li>
    </ul>
    
        </nav>
      )
}

export default AdminNav
