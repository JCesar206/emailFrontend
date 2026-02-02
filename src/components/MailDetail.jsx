import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Paperclip } from "lucide-react";
import api from "../api/axios.js";

export default function MailDetail() {
	const { id } = useParams();
	const navigate = useNavigate();
	const [mail, setMail] = useState(null);

	useEffect(() => {
		api.get(`/mail/${id}`)
			.then(res => setMail(res.data))
			.catch(err => console.error(err));
	}, [id]);

	if (!mail) return <p className="text-gray-500 font-semibold">Cargando...</p>

	return (
		<div className="max-w-4xl mx-auto">
			{/* Header */}
			<div className="sticky top-14 bg-gray-100 dark:bg-gray-900 py-2 flex items-center gap-2">
				<button onClick={() => navigate(-1)} className="p-2 rounded hover:bg-gray-200 dark:hover-bg-gray-800">
					<ArrowLeft size={18}/>
				</button>
				<h1 className="font-bold text-lg truncate">
					{mail.subject}
				</h1>
			</div>

			{/* Card */}
			<div className="bg-white dark:bg-gray-800 mt-4 p-4 rounded shadow">
				<div className="mb-3">
					<p className="text-sm text-gray-500">
						Para: <span className="font-medium">{mail.receiver_mail}</span>
					</p>
					<p className="text-xs text-gray-400">
						{new Date(mail.created_at).toLocaleString()}
					</p>
				</div>

				<div className="prose dark:prose-invert max-w-none">
					<p>{mail.body}</p>
				</div>

				{/* Adjuntos */}
				{mail.attachments?.length > 0 && (
					<div className="mt-4">
						<h3 className="text-sm font-semibold flex items-center gap-2">
							<Paperclip size={16}/> Adjuntos
						</h3>
						<ul className="mt-2 space-y-2">
							{mail.attachments.map((file, i) => (
								<li key={i}>
									<a href={file.url} target="_blank" className="text-blue-600 text-sm hover:underline">
										{file.name}
									</a>
								</li>
							))}
						</ul>
					</div>	
				)}
			</div>
		</div>
	);
}