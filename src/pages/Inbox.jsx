import { useState } from "react";
import { Mail, Star, ArrowLeft } from "lucide-react";
import MailLayout from "../layouts/MailLayout";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function Inbox() {
	const { t } = useLanguage();
	const [selectedMail, setSelectedMail] = useState(null);

	const [mails, setMails] = useState([
		{
			id: 1,
			from: "soporte@correo.com",
			subject: "Bienvenido a Mail App",
			body: "Este es tu primer correo dentro de la plataforma.",
			read: false,
			starred: false,
		},
		{
			id: 2,
			from: "notificaciones@github.com",
			subject: "Nuevo commit detectado",
			body: "Se ha detectado un nuevo commit en tu repositorio.",
			read: true,
			starred: true,
		},
	]);

	const openMail = (mail) => {
		setSelectedMail(mail);
		setMails(prev =>
			prev.map(m =>
				m.id === mail.id ? { ...m, read: true } : m
			)
		);
	};

	const toggleStar = (id) => {
		setMails(prev =>
			prev.map(m =>
				m.id === id ? { ...m, starred: !m.starred } : m
			)
		);
	};

	return (
		<MailLayout>
			<div className="flex flex-col md:flex-row h-full">

				{/* LISTA */}
				<section
					className={`w-full md:w-2/5 border-r dark:border-gray-800
					${selectedMail ? "hidden md:block" : "block"}`}
				>
					{mails.map(mail => (
						<div
							key={mail.id}
							onClick={() => openMail(mail)}
							className={`flex items-center gap-3 px-4 py-3 cursor-pointer border-b
								dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800
								${!mail.read ? "bg-blue-50 dark:bg-gray-900 font-semibold" : ""}`}
						>
							<Mail size={16} className="text-gray-500 dark:text-gray-400" />

							<div className="flex-1 overflow-hidden">
								<p className="text-sm truncate dark:text-white">
									{mail.from}
								</p>
								<p className="text-sm truncate text-gray-600 dark:text-gray-400">
									{mail.subject}
								</p>
							</div>

							<Star
								size={16}
								onClick={(e) => {
									e.stopPropagation();
									toggleStar(mail.id);
								}}
								className={`cursor-pointer
									${mail.starred
										? "text-yellow-400"
										: "text-gray-400 hover:text-yellow-400"}`}
							/>
						</div>
					))}
				</section>

				{/* LECTURA */}
				<section className="flex-1 flex flex-col">
					{!selectedMail ? (
						<div className="h-full flex flex-col items-center justify-center text-gray-500 dark:text-gray-400">
							<Mail size={48} className="mb-3" />
							<p className="text-lg font-semibold">
								{t("mail.select")}
							</p>
						</div>
					) : (
						<>
							{/* Header lectura */}
							<div className="sticky top-0 z-10 bg-white dark:bg-gray-900 border-b dark:border-gray-800 p-4 flex items-center gap-2">
								<button
									onClick={() => setSelectedMail(null)}
									className="md:hidden"
									title={t("common.back")}
								>
									<ArrowLeft size={20} />
								</button>

								<h1 className="font-bold text-lg dark:text-white truncate">
									{selectedMail.subject}
								</h1>
							</div>

							{/* Contenido */}
							<div className="p-4 md:p-6 space-y-4">
								<p className="text-sm text-gray-500 dark:text-gray-400">
									{t("mail.from")}: {selectedMail.from}
								</p>

								<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
									{selectedMail.body}
								</p>
							</div>
						</>
					)}
				</section>

			</div>
		</MailLayout>
	);
}