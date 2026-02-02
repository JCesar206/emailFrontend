import { LogOut, Sun, Moon } from "lucide-react";
import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { logout } = useContext(AuthContext);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b px-4 h-14 flex items-center justify-between">
      <h1 className="font-bold text-lg text-gray-800 dark:text-white">
        Mail App
      </h1>

      <div className="flex items-center gap-3">
        <button onClick={toggleTheme}
          className="p-2 rounded hover:text-blue-500 dark:hover:bg-white dark:text-white dark:hover:text-blue-800 cursor-pointer"
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <button onClick={logout}
          className="p-2 rounded hover:text-red-500 dark:hover:bg-white dark:text-white dark:hover:text-red-800 cursor-pointer"
        >
          <LogOut size={18} />
        </button>
      </div>
    </header>
  );
}
