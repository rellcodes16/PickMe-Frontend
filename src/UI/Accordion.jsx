import { FiChevronDown, FiChevronUp } from "react-icons/fi";

function Accordion({ title, children, isOpen, onClick }) {
  return (
    <div className={`border border-gray-200 rounded-2xl mb-2 shadow-sm ${isOpen && 'border-violet-500 border-2'}`}>
      <button
        onClick={onClick}
        className="flex items-center justify-between w-full p-4 text-left font-medium text-gray-800 hover:bg-gray-100 rounded-2xl cursor-pointer"
      >
        {title}
        {isOpen ? <FiChevronUp size={20} className="text-violet-700" /> : <FiChevronDown size={20} />}
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-screen px-4 pb-4" : "max-h-0"}`}
      >
        {isOpen && <div className="text-gray-700 italic">{children}</div>}
      </div>
    </div>
  );
}

export default Accordion;
