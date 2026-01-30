import { ArrowLeft } from "lucide-react";

export default function MailDetail({ mail }) {
	return (
		<div className="p-6 w-full">
			<h2 className="text-xl font-bold mb-2">{mail.subject}</h2>
			<p className="text-sm text-gray-500 mb-4"> De: {mail.sender_email}</p>

			<div className="bg-white p-4 rounded shadow">
				<p>{mail.body}</p>
				{mail.attachments?.length > 0 && (
					<div className="mt-4">
						<h4 className="font-semibold mb-2"> Adjuntos </h4>
						<div className="flex gap-2 flex-wrap">
							{mail.attachments.map((a, i) => (
								<a key={i} href={a.url} target="_blank" className="text-sm text-blue-600 underline">
									{a.filename}
								</a>
							))}
						</div>
					</div>	
				)}
			</div>
		</div>
	);
}