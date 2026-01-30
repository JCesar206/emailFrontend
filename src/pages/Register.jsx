import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

export default function Register() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			await api.post("/auth/register", {
				email,
				password
			});

			navigate("/");
		} catch (err) {
			alert("Error al registrar");
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow w-full max-w-sm">
				<h1 className="text-xl font-bold mb-4">Registro</h1>

				<input type="email" placeholder="Email" className="w-full mb-3 p-2 border rounded text-black font-semibold"
					value={email} onChange={(e) => setEmail(e.target.value)} required />
				<input type="password" placeholder="Password" className="w-full mb-3 p-2 border rounded text-black font-semibold"
					value={password} onChange={(e) => setPassword(e.target.value)} required />

				<button className="w-full bg-green-600 text-white p-2 rounded cursor-pointer font-semibold">
					Crear cuenta
				</button>

				<p className="text-sm mt-3">
					¿Ya tienes cuenta?{" "}
					<Link className="text-blue-600 cursor-pointer" to="/">
					Login
					</Link>
				</p>
			</form>
		</div>
	);
}