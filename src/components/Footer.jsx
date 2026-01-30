import { FaHome, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiGmail} from "react-icons/si";

export default function Footer() {
	return (
		<footer className="bg-white border-t px-4 py-3 text-sm text-gray-500">
			<div className="flex flex-col md:flex-row justify-between items-center gap-2">
				<p className="font-semibold">&copy; {new Date().getFullYear()} MailApp. | Todos los derechos reservados.</p>

				<div className="flex gap-4">
					<a href="https://jcesar206.github.io/myPersonalBlog/" target="_blank" rel="noopener noreferrer"
					className="hover:text-black"><FaHome size={18} title="My Personal Blog"/></a>
					<a href="https://github.com/JCesar206" target="_blank" rel="noopener noreferrer" 
					className="hover:text-black"><FaGithub size={18} title="Github"/></a>
					<a href="https://www.linkedin.com/in/jcesar206" target="_blank" rel="noopener noreferrer"
					className="hover:text-black"><FaLinkedin size={18} title="Linkedin"/></a>
					<a href="mailto:jcesar206@hotmail.com"
					className="hover:text-black"><MdEmail size={18} title="Hotmail"/></a>
					<a href="mailto:jcesary06@gmail.com"
					className="hover:text-black"><SiGmail size={18} title="Gmail"/></a>
				</div>
			</div>
		</footer>
	);
}