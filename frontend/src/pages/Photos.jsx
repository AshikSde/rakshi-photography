import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet";

export default function Photos() {
  const location = useLocation();
  const album = location.state;
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="p-6 md:p-10 bg-white text-gray-900 min-h-screen">
      <Helmet>
        <title>{album.title} | RAKSHI Photography</title>
      </Helmet>

      <h1 className="text-4xl font-bold mb-12 text-center">
        {album.title}
      </h1>

      {/* Photo Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {album.photos.map((photo) => (
          <div
            key={photo.id}
            className="overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition duration-300"
          >
            <img
              src={`http://127.0.0.1:8000${photo.image}`}
              alt=""
              onClick={() =>
                setSelectedImage(`http://127.0.0.1:8000${photo.image}`)
              }
              className="w-full h-64 object-cover cursor-pointer hover:scale-110 transition duration-500"
            />
          </div>
        ))}
      </div>

      {/* Full Screen Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="preview"
            className="max-w-[95%] max-h-[95%] rounded-2xl shadow-2xl border-4 border-white"
          />
        </div>
      )}
    </div>
  );
}