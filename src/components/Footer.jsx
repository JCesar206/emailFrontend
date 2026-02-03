import { FaHome, FaGithub, FaLinkedin, FaGit } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiGmail } from "react-icons/si";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
	const { t } = useLanguage();

	return (
		<div className="border-t px-4 py-3 text-sm bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-800">
			<div className="flex flex-col md:flex-row justify-between items-center gap-2">
				<p className="font-semibold text-center md:text-left">
					&copy; {new Date().getFullYear()} Mail App {t("footer.rights")}
				</p>

				<div className="flex gap-4">
					<a href="https://jcesar206.github.io/myPersonalBlog/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white transition" title={t("footer.blog")}>
						<FaHome size={18}/>
					</a>
					<a href="https://github.com/JCesar206" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white transition" title="Github">
						<FaGithub size={18}/>
					</a>
					<a href="https://www.linkedin.com/in/jcesar206" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white transition" title="Linkedin">
						<FaLinkedin size={18}/>
					</a>
					<a href="mailto:jcesar206@hotmail.com" className="hover:text.gray-900 dark:hover:text-white transition" title="Hotmail">
						<MdEmail size={18}/>
					</a>
					<a href="mailto:jcesary06@gmail.com" className="hover:text-gray-900 dark:hover:text-white transition" title="Gmail">
						<SiGmail size={18}/>
					</a>
				</div>
			</div>
		</div>
	)
}