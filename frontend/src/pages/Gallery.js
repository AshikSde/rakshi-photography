import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Gallery() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/categories/")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="p-6 md:p-10 bg-white text-gray-900 min-h-screen">
      <Helmet>
        <title>Gallery | RAKSHI Photography</title>
      </Helmet>

      <h1 className="text-4xl font-bold mb-12 text-center">
        Our Gallery
      </h1>

      {categories.map((cat) => (
        <div key={cat.id} className="mb-16">
          {/* Category Title */}
          <h2 className="text-3xl font-semibold mb-8 border-l-4 border-yellow-500 pl-4">
            {cat.name}
          </h2>

          {/* Albums */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {cat.albums.map((album) => (
              <div
                key={album.id}
                onClick={() => navigate("/photos", { state: album })}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer border border-gray-100"
              >
                <img
                  src={`http://127.0.0.1:8000${album.cover_image}`}
                  alt={album.title}
                  className="w-full h-52 object-cover"
                />

                <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg">
                    {album.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    View Album
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}