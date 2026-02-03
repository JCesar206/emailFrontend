import { useLanguage } from "../context/LanguageContext";

export default function ComposeModal({ onClose }) {
	const { t } = useLanguage();

	return (
		<div className="fixed inset-0 z-50 bg-black/40 flex items-end md:items-center justify-center">
			<div className="w-full md:max-w-lg p-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 rounded-t-lg md:rounded-lg shadow-lg">
				<h2 className="font-semibold text-lg mb-3">
					{t("compose.new")}
				</h2>
				<input className="w-full p-2 mb-2 rounded border bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder={t("compose.to")}/>
				<input className="w-full p-2 mb-2 rounded border bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder={t("compose.subject")}/>
				<textarea className="w-full p-2 mb-2 rounded border bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder={t("compose.message")}/>

				<div className="flex justify-end gap-2">
					<button onClick={onClose} className="px-4 py-2 rounded border border-gray-300 dark:border-gray-600 hover:bg-gray-500 hover:text-white dark:hover:bg-gray-800 transition cursor-pointer">
						{t("common.cancel")}
					</button>

					<button className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-900 text-white transition cursor-pointer">
						{t("compose.send")}
					</button>
				</div>
			</div>
		</div>
	);
}