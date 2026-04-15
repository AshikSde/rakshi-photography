import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Gallery from "./Gallery";
import Photos from "./Photos";
import About from "./About";
import Contact from "./Contact";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/photos" element={<Photos />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}