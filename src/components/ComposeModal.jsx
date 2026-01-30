export default function ComposeModal({ onClose }) {
	return (
		<div className="fixed inset-0 bg-black/40 flex items-end md:items-center justify-center">
			<div className="bg-white w-full md:max-w-lg rounded-t-lg md:rounded-lg p-4">
				<h2 className="font-bold mb-3"> Mensaje nuevo </h2>

				<input className="w-full border p-2 mb-2" placeholder="Para"/>
				<input className="w-full border p-2 mb-2" placeholder="Asunto"/>
				<textarea className="w-full border p-2 h-32 mb-2" placeholder="Mensaje"/>

				<div className="flex justify-end gap-2">
					<button onClick={onClose} className="px-4 py-2 border rounded"> Cancelar </button>
					<button className="px-4 py-2 bg-blue-600 text-white rounded"> Enviar </button>
				</div>
			</div>
		</div>
	);
}