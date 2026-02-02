import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import ComposeModal from "../components/ComposeModal";

export default function MailLayout({ children }) {
  const [activeFolder, setActiveFolder] = useState("inbox");
  const [openCompose, setOpenCompose] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-950">
      {/* Navbar */}
      <Navbar onMenu={() => setShowSidebar(true)} />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar desktop */}
        <aside className="hidden md:block">
          <Sidebar
            active={activeFolder}
            onSelect={setActiveFolder}
            onCompose={() => setOpenCompose(true)}
          />
        </aside>

        {/* Sidebar mobile (drawer) */}
        {showSidebar && (
          <div className="fixed inset-0 z-40 flex md:hidden">
            <div
              className="absolute inset-0 bg-black/40"
              onClick={() => setShowSidebar(false)}
            />
            <Sidebar
              active={activeFolder}
              onSelect={(folder) => {
                setActiveFolder(folder);
                setShowSidebar(false);
              }}
              onCompose={() => {
                setOpenCompose(true);
                setShowSidebar(false);
              }}
            />
          </div>
        )}

        {/* Panel central */}
        <main className="flex-1 p-3 md:p-6 overflow-y-auto">
          {children}
        </main>
      </div>

      {/* Modal redactar */}
      {openCompose && (
        <ComposeModal onClose={() => setOpenCompose(false)} />
      )}
      <Footer />
    </div>
  );
}