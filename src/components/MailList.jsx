import { useState, useEffect } from "react";
import api from "../api/axios.js";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function MailList({ onSelect }) {
  const [mails, setMails] = useState([]);
	const { t } = useLanguage();

  useEffect(() => {
    api.get("/mail").then(res => setMails(res.data));
  }, []);

		if (!mails.length) {
		return <p>{t("mail.empty")}</p>
	}

	return (
		<div className="overflow-y-auto h-full">
			{mails.map(mail => (
				<div key={mail.id} onClick={() => onSelect(mail)}
					className="border-b p-4 hover:bg-gray-100 cursor-pointer">
						<p className="font-semibold">{mail.subject}</p>
						<p className="text-sm text-gray-500 truncate">{mail.body}</p>
				</div>
			))}
		</div>
	);
}