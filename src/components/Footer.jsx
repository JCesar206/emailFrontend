import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { SiGmail} from "react-icons/si";

export default function Footer() {
	return (
		<footer className="bg-white border-t px-4 py-3 text-sm text-gray-500">
			<div className="flex flex-col md:flex-row justify-between items-center gap-2">
				<p>&copy; {new Date().getFullYear()} MailApp. | Todos los derechos reservados.</p>

				<div className="flex gap-4">
					<a href="" target="_blank" rel="noopener noreferrer" 
					className="hover:text-black"><FaGithub size={18}/></a>
					<a href="" target="_blank" rel="noopener noreferrer"
					className="hover:text-black"><FaLinkedin size={18}/></a>
					<a href="mailto:jcesar206@hotmail.com"
					className="hover:text-black"><MdEmail size={18}/></a>
					<a href="mailto:jcesary06@gmail.com"
					className="hover:text-black"><SiGmail size={18}/></a>
				</div>
			</div>
		</footer>
	);
}