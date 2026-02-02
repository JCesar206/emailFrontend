import { Inbox, Send, Trash2, Plus } from "lucide-react";

export default function Sidebar({ onCompose }) {
	return (
		<aside className="w-full md:w-64 bg-white dark:bg-gray-900 border-r dark:border-gray-800 p-4 space-y-6">
			{/* Boton redactar */}
			<button onClick={onCompose} className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full font-bold transition cursor-pointer">
				<Plus size={18}/> Redactar
			</button>

			{/* Navegación */}
			<nav className="space-y-2 text-sm">
				<p className="flex gap-3 items-center px-3 py-2 rounded-lg font-semibold cursor-pointer bg-blue-50 text-blue-700 dark:bg-gray-800 dark:text-white">
					<Inbox size={16}/> Inbox
				</p>

				<p className="flex gap-3 items-center px-3 py-2 rounded-lg font-semibold cursor-pointer text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800">
					<Send size={16}/> Enviados
				</p>

				<p className="flex gap-3 items-center px-3 py-2 rounded-lg font-semibold cursor-pointer text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800">
					<Trash2 size={16}/> Papelera
				</p>
			</nav>
		</aside>
	);
}