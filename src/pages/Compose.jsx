import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

export default function Compose() {
	const [receiver_email, setReceiverEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [body, setBody] = useState("");
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			await api.post("/mail", (
				receiver_email,
				subject,
				body
			));

			navigate("/inbox");
		} catch {
			alert("Error al enviar correo");
		}
	};

	return (
		<div className="min-h-screen bg-gray-100 flex items-center justify-center">
			<form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow w-full max-w-md">
				<h1 className="text-xl font-bold mb-4">Nuevo correo</h1>

				<input type="email" placeholder="Para" className="w-full mb-3 p-2 border rounded"
					value={receiver_email} onChange={(e) => setReceiverEmail(e.target.value)} required />
				<input type="text" placeholder="Asunto" className="w-full mb-3 p-2 rounded h-32" value={body}
					onChange={(e) => setBody(e.target.value)} required />

				<button className="w-full bg-blue-600 hover:bg-blue-950 text-white p-2 rounded cursor-pointer">Envíar</button>
			</form>
		</div>
	);
}