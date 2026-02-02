import { Inbox, Send, Trash2, Plus } from "lucide-react";

export default function Sidebar({ onCompose, active = "inbox", onSelect }) {
  const itemBase =
    "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition cursor-pointer";

  const activeItem =
    "bg-blue-50 text-blue-700 dark:bg-gray-800 dark:text-white";

  const inactiveItem =
    "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800";

  return (
    <aside className="w-full md:w-64 bg-white dark:bg-gray-900 border-r dark:border-gray-800 p-4 space-y-5">
      {/* Botón redactar */}
      <button
        onClick={onCompose}
        className="w-full flex items-center justify-center gap-2
          bg-blue-600 hover:bg-blue-700 text-white
          py-2 px-4 rounded-full font-semibold transition"
      >
        <Plus size={18} />
        Redactar
      </button>

      {/* Navegación */}
      <nav className="space-y-1">
        <button
          onClick={() => onSelect?.("inbox")}
          className={`${itemBase} ${
            active === "inbox" ? activeItem : inactiveItem
          }`}
        >
          <Inbox size={16} />
          Inbox
        </button>

        <button
          onClick={() => onSelect?.("sent")}
          className={`${itemBase} ${
            active === "sent" ? activeItem : inactiveItem
          }`}
        >
          <Send size={16} />
          Enviados
        </button>

        <button
          onClick={() => onSelect?.("trash")}
          className={`${itemBase} ${
            active === "trash" ? activeItem : inactiveItem
          }`}
        >
          <Trash2 size={16} />
          Papelera
        </button>
      </nav>
    </aside>
  );
}