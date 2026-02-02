import { useState } from "react";
import { Mail, Star } from "lucide-react";
import MailLayout from "../layouts/MailLayout";

export default function Inbox() {
	const [selectedMail, setSelectedMail] = useState(null);

	// Mock temporal (luego va API)
	const mails = [
		{
			id: 1,
			from: "soporte@correo.com",
			subject: "Bienvenido a Mail App",
			body: "Este es tu primer correo dentro de la plataforma.",
			read: false,
		},
		{
			id: 2,
			from: "notificaciones@github.com",
			subject: "Nuevo commit detectado",
			body: "Se ha detectado un nuevo commit en tu repositorio.",
			read: true,
		},
	];

	return (
		<MailLayout>
			<div className="flex flex-col md:flex-row h-full">

				{/* LISTA DE CORREOS */}
				<section className={`w-full md:w-2/5 border-r dark:border-gray-800 ${selectedMail ? "hidden md:block" : "block"}`}>
					{mails.map(mail => (
						<div
							key={mail.id}
							onClick={() => setSelectedMail(mail)}
							className={`flex items-center gap-3 px-4 py-3 cursor-pointer border-b dark:border-gray-800
								hover:bg-gray-100 dark:hover:bg-gray-800
								${!mail.read ? "bg-blue-50 dark:bg-gray-900 font-semibold" : ""}`}
						>
							<Mail size={16} className="text-gray-500" />
							<div className="flex-1 overflow-hidden">
								<p className="text-sm truncate dark:text-white">{mail.from}</p>
								<p className="text-sm truncate text-gray-600 dark:text-gray-400">
									{mail.subject}
								</p>
							</div>
							<Star size={16} className="text-gray-400 hover:text-yellow-400" />
						</div>
					))}
				</section>

				{/* PANEL DE LECTURA */}
				<section className="flex-1 p-4 md:p-6">
					{!selectedMail ? (
						<div className="h-full flex flex-col items-center justify-center text-gray-500 dark:text-gray-400">
							<Mail size={48} className="mb-3" />
							<p className="text-lg font-semibold">Selecciona un correo</p>
						</div>
					) : (
						<div className="space-y-4">
							<button
								onClick={() => setSelectedMail(null)}
								className="md:hidden text-sm text-blue-600 font-semibold"
							>
								← Volver
							</button>

							<h1 className="text-xl font-bold dark:text-white">
								{selectedMail.subject}
							</h1>

							<p className="text-sm text-gray-500 dark:text-gray-400">
								De: {selectedMail.from}
							</p>

							<hr className="dark:border-gray-800" />

							<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
								{selectedMail.body}
							</p>
						</div>
					)}
				</section>

			</div>
		</MailLayout>
	);
}