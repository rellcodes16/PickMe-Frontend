import { Outlet } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import AdminSidebar from "./AdminSidebar";
import AppHeader from "../../../AppUI/AppHeader";
import { useOutsideClick } from "../../../../UI/useOutsideClick";

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const { ref: sidebarRef } = useOutsideClick(() => {
    if (isSidebarOpen) setIsSidebarOpen(false);
  });

  return (
    <div className="h-screen flex flex-col">
      <header className="h-[60px] bg-white shadow-md flex items-center justify-between px-4 z-20">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="text-gray-600 hover:text-violet-700 text-xl lg:hidden"
        >
          <FaBars />
        </button>
        <AppHeader />
      </header>

      <div className="flex flex-1 overflow-hidden">
        <aside className="hidden lg:block w-[250px] bg-white shadow-md">
          <AdminSidebar />
        </aside>

        <main className="flex-1 overflow-auto bg-slate-100 p-6">
          <div className="max-w-[120rem] mx-auto h-full flex flex-col">
            <Outlet />
          </div>
        </main>
      </div>

      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
          isSidebarOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >

        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            isSidebarOpen ? "opacity-70" : "opacity-0"
          }`}
        />

        <aside
          ref={sidebarRef}
          className={`absolute left-0 top-0 h-full w-[250px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          `}
        >

          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-gray-700 hover:text-red-600 text-xl"
            >
              <FaTimes />
            </button>
          </div>

          <AdminSidebar />
        </aside>
      </div>
    </div>
  );
};

export default AdminLayout;
