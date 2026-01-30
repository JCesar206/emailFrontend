import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/axios.js";
import { ArrowLeft, Paperclip } from "lucide-react";

export default function MailDetail() {
	const { id } = useParams();
	const navigate = useNavigate();
	const [mail, setMail] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		api.get(`/mail/${id}`)
			.then(res => setMail(res.data))
			.catch(() => navigate("/inbox"))
			.finally(() => setLoading(false));
	}, [id]);
	if (!loading) { return <p className="p-4">Cargando correo...</p> }
	if (!mail) return null;

	return (
		<div className="min-h-screen bg-gray-100 p-4">
			{/* Header Sticky */}
			<div className="sticky top-0 z-10 bg-white border-b px-4 py-3 flex items-center gap-3">
				<button onClick={() => navigate(-1)}
					className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
						<ArrowLeft size={20}/>
				</button>
				<h1 className="font-semibold truncate">{mail.subject}</h1>
			</div>

			{/* Contenido */}
			<div className="p-4 max-w-3xl mx-auto">
				<div className="bg-white p-4 rounded shadow">
					{/* Meta */}
					<div className="mb-4">
						<p className="text-sm text-gray-500 mb-4">Para: {mail.receiver_email}</p>
					</div>
					{/* Cuerpo */}
					<div className="whitespace-pre-line text-gray-800 mb-6">
						{mail.body}
					</div>
					{/* Adjuntos */}
					{mail.attachments && mail.attachments.length > 0 && (
						<div>
							<h3 className="flex items-center gap-2 text-sm font-semibold mb-2">
								<Paperclip size={16}/>Adjuntos
							</h3>
							<div className="space-y-2">
								{mail.attachments.map((file, index) => (
									<a key={index} href={`http://localhost:4000/uploads/${file.filename}`}
										target="_blank" rel="noopener noreferrer"
										className="block text-blue-600 text-sm hover:underline">
											{file.original_name}
										</a>
								))}
							</div>	
						</div>
					)}
				</div>
			</div>
		</div>
	);
}