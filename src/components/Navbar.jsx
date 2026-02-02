import { LogOut, Sun, Moon, Menu } from "lucide-react";
import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { useTheme } from "../context/ThemeContext";

export default function Navbar({ onMenu }) {
  const { logout } = useContext(AuthContext);
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      className="sticky top-0 z-50 h-14 flex items-center justify-between px-4
      bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700"
    >
      {/* Izquierda */}
      <div className="flex items-center gap-2">
        {/* Botón menú mobile */}
        <button
          onClick={onMenu}
          className="md:hidden p-2 rounded-full
            hover:bg-gray-100 dark:hover:bg-gray-800
            text-gray-700 dark:text-gray-200"
          aria-label="Abrir menú"
        >
          <Menu size={20} />
        </button>

        <h1 className="font-semibold text-lg text-gray-800 dark:text-gray-100">
          Mail App
        </h1>
      </div>

      {/* Derecha */}
      <div className="flex items-center gap-2">
        <button
          onClick={toggleTheme}
          aria-label="Cambiar tema"
          title="Cambiar tema"
          className="p-2 rounded-full transition
            hover:bg-gray-100 dark:hover:bg-gray-800
            text-gray-700 dark:text-gray-200"
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <button
          onClick={logout}
          aria-label="Cerrar sesión"
          title="Cerrar sesión"
          className="p-2 rounded-full transition
            hover:bg-red-100 dark:hover:bg-red-900/30
            text-gray-700 dark:text-gray-200
            hover:text-red-600 dark:hover:text-red-400"
        >
          <LogOut size={18} />
        </button>
      </div>
    </header>
  );
}