import { HiMenu } from "react-icons/hi";
import Button from "../../UI/Button";
import { NavLink } from "react-router-dom";

function Header({ toggleSidebar }) {
  return (
    <header className="bg-white w-full z-10 shadow-md py-4 px-6 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <HiMenu
          className="text-3xl md:hidden text-violet-700 cursor-pointer"
          onClick={toggleSidebar}
        />
        <div className="text-xl font-bold text-violet-700">PickMe</div>
      </div>
      <nav className="hidden md:flex gap-6 items-center text-gray-700 font-medium">
        <NavLink to="/" className="hover:text-violet-700">Home</NavLink>
        <NavLink to="/faq" className="hover:text-violet-700">FAQ</NavLink>
        <NavLink to="/about" className="hover:text-violet-700">About Us</NavLink>
        <NavLink to="/contact" className="hover:text-violet-700">Contact Us</NavLink>
      </nav>

      <Button type="primary">Get Started</Button>
    </header>
  );
}

export default Header;
