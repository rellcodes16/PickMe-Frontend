import Nav from "./Nav";
import { useOutsideClick } from "../../UI/useOutsideClick";
import { HiX } from "react-icons/hi"; 

function Sidebar({ isOpen, setIsOpen }) {
  const { ref } = useOutsideClick(() => {
    if (isOpen) setIsOpen(false); 
  });

  return (
    <aside
      ref={ref}
      className={`fixed z-50 h-full w-72 overflow-y-auto bg-white shadow-lg border-r border-gray-200 transition-transform duration-300
      ${isOpen ? 'translate-x-0' : '-translate-x-full'} left-0`}
    >
      <div className="flex justify-end items-center p-4 border-b border-gray-100">
        <HiX
          className="text-2xl text-gray-500 hover:text-gray-800 transition cursor-pointer"
          onClick={() => setIsOpen(false)}
        />
      </div>
      <Nav />
    </aside>
  );
}

export default Sidebar;
