import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLink =
    "relative font-medium text-gray-800 hover:text-yellow-600 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-yellow-500 hover:after:w-full after:transition-all after:duration-300";

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-3xl font-bold tracking-wide text-gray-900">
            RAKSHI
          </span>
          <span className="text-xs bg-yellow-500 text-black px-2 py-1 rounded-full font-semibold">
            Studio
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className={navLink}>HOME</Link>
          <Link to="/gallery" className={navLink}>GALLERY</Link>
          <Link to="/about" className={navLink}>ABOUT</Link>
          <Link to="/contact" className={navLink}>CONTACT</Link>

          <Link
            to="/contact"
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-5 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition duration-300"
          >
            BOOK NOW
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-3xl text-gray-800 hover:text-yellow-600 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-5 pt-2 bg-white border-t border-gray-100 shadow-sm">
          <div className="flex flex-col gap-4">
            <Link to="/" onClick={() => setMenuOpen(false)} className={navLink}>
              Home
            </Link>

            <Link to="/gallery" onClick={() => setMenuOpen(false)} className={navLink}>
              Gallery
            </Link>

            <Link to="/about" onClick={() => setMenuOpen(false)} className={navLink}>
              About
            </Link>

            <Link to="/contact" onClick={() => setMenuOpen(false)} className={navLink}>
              Contact
            </Link>

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="bg-yellow-500 hover:bg-yellow-600 text-center text-black px-5 py-2 rounded-full font-semibold transition"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}