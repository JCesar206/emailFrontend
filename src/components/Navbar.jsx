import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { LogOut, Mail, Moon, Sun } from "lucide-react";

export default function Navbar() {
	const { logout } = useContext(AuthContext);

	return (
		<header className="h-14 bg-white border-b flex items-center justify-between px-4">
			{/* Logo */}
			<div className="flex items-center gap-2">
				<Mail className="text-blue-600">
				<span className="font-semibold text-lg hidden sm:block"> MailApp </span>
				</Mail>
			</div>

			{/* Acciones */}
			<div className="flex items-center gap-4">
				{/* Tema (placeholder) */}
				<button className="p-2 rounded hover:bg-gray-100 cursor-pointer">
					<Sun size={18}/>
				</button>

				{/* Logout */}
				<button onClick={logout} className="flex items-center gap-1 text-sm text-red-600 hover:bg-red-50 px-2 py-1 rounded cursor-pointer">
					<LogOut size={16}/>
					<span className="hidden sm:block"> Salir </span>
				</button>
			</div>
		</header>
	);
}