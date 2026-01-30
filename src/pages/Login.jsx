import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/axios";
import { AuthContext } from "../auth/AuthContext";
import { Eye, EyeOff } from "lucide-react";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState("");

	const { login } = useContext(AuthContext);
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const res = await api.post("/auth/login", {
				email,
				password
			});

			login(res.data.token);
			navigate("/inbox");
		} catch (err) {
			alert("Credenciales inválidas");
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow w-full max-w-sm">
				<h1 className="text-xl font-bold mb-4 text-center">Login</h1>

				<input type="email" placeholder="Email" className="w-full mb-3 p-2 border rounded"
					value={email} onChange={(e) => setEmail(e.target.value)} required />

				<div className="relative mb-3">
					<input type={showPassword ? "text" : "password"} placeholder="Password" className="w-full mb-3 p-2 border rounded pr-10" value={password} onChange={(e) => setPassword(e.target.value)} required/>
					<button type="button" onClick={() => setShowPassword(!showPassword)}
						className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-gray-700 cursor-pointer">
						{showPassword ? <EyeOff size={18}/> : <Eye size={18}/>}
					</button>
				</div>

				<button className="w-full bg-blue-600 hover:bg-blue-900 text-white p-2 rounded cursor-pointer">
					Entrar
				</button>
				
				<p className="text-sm mt-3 font-semibold text-center">
					¿No tienes cuenta?{" "}
					<Link className="text-blue-600 font-semibold hover:text-blue-950" to="/register">
					Registrate
					</Link>
				</p>
			</form>
		</div>
	);
}