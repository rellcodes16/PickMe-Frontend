import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function LandingLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="grid grid-layout min-h-screen">
        {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 backdrop-blur-sm bg-black/30 transition-opacity duration-300"
          onClick={() => setIsSidebarOpen(false)}
        />
        )}

        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

        <Header toggleSidebar={() => setIsSidebarOpen((prev) => !prev)} />

        <main className="overflow-auto bg-gray-100 col-end-[-1] p-0 m-0">
            <div className="max-w-[120rem] h-full flex flex-col bg-gray-100">
                <Outlet />
            </div>
        </main>
</div>
  )
}

export default LandingLayout
