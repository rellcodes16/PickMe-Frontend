import { NavLink } from "react-router-dom"
import {  FaHome, FaInfoCircle } from "react-icons/fa"
import { FaUser } from "react-icons/fa6"

const Nav = () => {
  return (
    <nav>
        <h1 className="text-violet-700 text-center">PickMe</h1>
<ul className="flex flex-col gap-1 mt-6 px-3">
  <li>
    <NavLink to='/' className={({ isActive }) =>
      `flex items-center gap-3 text-base px-4 py-3 rounded-md transition-colors
       ${isActive ? 'bg-gray-100 text-violet-700 font-semibold' : 'text-gray-600 hover:bg-gray-50 hover:text-violet-700'}`
    }>
      <FaHome className="text-lg" />
      <span>Home</span>
    </NavLink>
  </li>
  <li>
    <NavLink to='about' className={({ isActive }) =>
      `flex items-center gap-3 text-base px-4 py-3 rounded-md transition-colors
       ${isActive ? 'bg-gray-100 text-violet-700 font-semibold' : 'text-gray-600 hover:bg-gray-50 hover:text-violet-700'}`
    }>
      <FaInfoCircle className="text-lg" />
      <span>About</span>
    </NavLink>
  </li>
  <li>
    <NavLink to='contact' className={({ isActive }) =>
      `flex items-center gap-3 text-base px-4 py-3 rounded-md transition-colors
       ${isActive ? 'bg-gray-100 text-violet-700 font-semibold' : 'text-gray-600 hover:bg-gray-50 hover:text-violet-700'}`
    }>
      <FaUser className="text-lg" />
      <span>Contacts</span>
    </NavLink>
  </li>
</ul>

    </nav>
  )
}

export default Nav