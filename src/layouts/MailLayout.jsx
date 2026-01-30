import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export default function MailLayout({ children }) {
	return (
		<div className="min-h-screen flex flex-col bg-gray-100">
			<Navbar/>
			<div className="flex flex-1 overflow-hidden">
				<aside className="hidden md:block">
					<Sidebar/>
				</aside>
				<main className="flex-1 p-3 md:p-6 overflow-y-auto">
					{children}
				</main>
			</div>
			<Footer/>
		</div>
	);
}