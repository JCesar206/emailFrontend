import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Inbox from "../pages/Inbox";
import Compose from "../pages/Compose";
import MailDetail from "../pages/MailDetail";

export default function AppRouter() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login/>}/>
				<Route path="/register" element={<Register />}/>
				<Route path="/inbox" element={<Inbox/>}/>
				<Route path="/compose" element={<Compose/>}/>
				<Route path="/mail:id" element={<MailDetail/>}/>
			</Routes>
		</BrowserRouter>
	);
}