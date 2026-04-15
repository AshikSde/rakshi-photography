export default function Loader() {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-[9999]">
      <div className="text-center animate-pulse">
        <h1 className="text-5xl md:text-6xl font-bold tracking-widest text-gray-900">
          RAKSHI
        </h1>

        <p className="text-yellow-500 text-lg mt-3 tracking-[6px]">
          PHOTOGRAPHY
        </p>

        <div className="mt-8 flex justify-center gap-2">
          <span className="w-3 h-3 bg-yellow-500 rounded-full animate-bounce"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full animate-bounce delay-130"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full animate-bounce delay-250"></span>
        </div>
      </div>
    </div>
  );
}