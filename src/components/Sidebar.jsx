import { Inbox, Send, Trash2, Plus } from "lucide-react";

export default function Sidebar({ onCompose }) {
	return (
		<div className="p-4 space-y-4">
			<button onClick={onCompose} className="w-full flex items-center gap-2 bg-blue-500 text-white py-2 px-3 rounded-full"><Plus size={18}/> Redactar </button>

			<nav className="space-y-3 text-sm">
				<p className="flex gap-2 items-center font-semibold"><Inbox size={16}/> Inbox </p>
				<p className="flex gap-2 items-center text-gray-500"><Send size={16}/> Enviados </p>
				<p className="flex gap-2 items-center text-gray-500"><Trash2 size={16}/> Papelera </p>
			</nav>
		</div>
	);
}