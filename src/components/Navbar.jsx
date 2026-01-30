import { LogOut, Search, Sun, Moon } from "lucide-react";
import { useContext, useState } from "react";
import { AuthContext } from "../auth/AuthContext";

export default function Navbar() {
  const { logout } = useContext(AuthContext);
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b">
      <div className="flex items-center justify-between px-4 py-2 gap-3">
        
        {/* Logo */}
        <h1 className="font-bold text-lg text-blue-600"> MailApp</h1>

        {/* Search */}
        <div className="hidden md:flex flex-1 max-w-md items-center bg-gray-100 dark:bg-gray-800 rounded px-2">
          <Search size={18} className="text-gray-500" />
          <input type="text" placeholder="Buscar correo"
            className="bg-transparent outline-none px-2 py-1 w-full text-sm"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button onClick={toggleTheme} className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button onClick={logout} className="flex items-center gap-1 text-sm text-red-600 hover:text-red-800 cursor-pointer">
            <LogOut size={18} />
            <span className="hidden sm:inline">Salir</span>
          </button>
        </div>
      </div>
    </header>
  );
}