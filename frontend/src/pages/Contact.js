import { useState } from "react";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    event: "",
    date: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/inquiry/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

   if (response.ok) {
  const message = `New Booking Request:%0A
Name: ${form.name}%0A
Phone: ${form.phone}%0A
Event: ${form.event}%0A
Date: ${form.date}%0A
Message: ${form.message}`;

  window.open(
    `https://wa.me/918148152321?text=${message}`,
    "_blank"
  );

  Swal.fire({
    icon: "success",
    title: "Booking Submitted!",
    text: "We will contact you soon.",
    confirmButtonColor: "#eab308",
  });

  setForm({
    name: "",
    phone: "",
    event: "",
    date: "",
    message: "",
  });
} else {
  Swal.fire({
    icon: "error",
    title: "Failed",
    text: "Please try again.",
    confirmButtonColor: "#eab308",
  });
}
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Server Error",
        text: "Something went wrong.",
        confirmButtonColor: "#eab308",
      });
    }

    setLoading(false);
  };

  return (
    <div className="bg-white text-gray-900 min-h-screen px-6 md:px-10 py-16">
      <Helmet>
        <title>Contact & Booking | RAKSHI Photography</title>
      </Helmet>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left Info */}
        <div data-aos="fade-right">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Let’s Capture Your Special Day 📸
          </h1>

          <p className="text-gray-600 mb-8 leading-7">
            Contact us for weddings, newborn shoots, maternity sessions,
            outdoor photography and premium events.
          </p>

          <div className="space-y-4 text-lg">
            <p>📞 +91 81481 52321</p>
            <p>📧 info@rakshiphotography.com</p>
            <p>📍 Your Studio Address</p>
            <p>💬 WhatsApp Available</p>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          data-aos="fade-left"
          className="bg-white border border-gray-200 shadow-xl rounded-3xl p-8 space-y-5"
        >
          <h2 className="text-2xl font-bold mb-2">Book Now</h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition"
          />

          <input
            type="text"
            name="event"
            placeholder="Event Type"
            value={form.event}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition"
          />

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition"
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-xl transition shadow-lg"
          >
            {loading ? "Submitting..." : "Submit Booking"}
          </button>
        </form>
      </div>
    </div>
  );
}