export default function WhatsAppButton() {
  const phone = "918148152321";

  return (
    <a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-2xl transition duration-300 hover:scale-110 animate-[float_3s_ease-in-out_infinite]">
        WhatsApp
      </div>
    </a>
  );
}