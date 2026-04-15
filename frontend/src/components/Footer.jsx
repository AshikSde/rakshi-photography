export default function Footer() {
  return (
    <footer className="mt-16 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              RAKSHI PHOTOGRAPHY
            </h2>

            <p className="text-gray-600 leading-7">
              Capturing your beautiful moments forever with premium creativity,
              stylish concepts and unforgettable memories.
            </p>

            <div className="mt-5">
              <a
                href="/contact"
                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-full font-semibold shadow-md transition duration-300"
              >
                Book Your Shoot
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-gray-600">
              <a href="/" className="hover:text-yellow-600 hover:translate-x-1 transition duration-300">
                Home
              </a>

              <a href="/gallery" className="hover:text-yellow-600 hover:translate-x-1 transition duration-300">
                Gallery
              </a>

              <a href="/about" className="hover:text-yellow-600 hover:translate-x-1 transition duration-300">
                About
              </a>

              <a href="/contact" className="hover:text-yellow-600 hover:translate-x-1 transition duration-300">
                Contact
              </a>
            </div>
          </div>

          {/* Social Cards */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Connect With Us
            </h3>

            <div className="grid gap-3">
              <a
                href="https://www.instagram.com/rakshidigitalstudio/?hl=en"
                className="bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 hover:border-yellow-400 hover:shadow-lg hover:-translate-y-1 transition duration-300"
              >
                📷 Instagram
              </a>

              <a
                href="https://api.whatsapp.com/send/?phone=918148152321&text&type=phone_number&app_absent=0"
                className="bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 hover:border-yellow-400 hover:shadow-lg hover:-translate-y-1 transition duration-300"
              >
                💬 WhatsApp
              </a>

              <a
                href="https://api.whatsapp.com/send/?phone=918148152321&text&type=phone_number&app_absent=0"
                className="bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 hover:border-yellow-400 hover:shadow-lg hover:-translate-y-1 transition duration-300"
              >
                👍 Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 mt-10 pt-6 text-center text-sm text-gray-500">
          © 2026 RAKSHI PHOTOGRAPHY. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}