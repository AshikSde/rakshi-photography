import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Helmet } from "react-helmet";

import "swiper/css";
import "swiper/css/effect-fade";

export default function Home() {
  const slides = [
    "https://images.unsplash.com/photo-1519741497674-611481863552",
    "https://images.unsplash.com/photo-1542038784456-1ea8e935640e",
    "https://images.unsplash.com/photo-1504198453319-5ce911bafcde",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
    "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8",
  ];

  return (
    <div className="bg-white text-gray-900">
      <Helmet>
        <title>RAKSHI Photography | Premium Studio</title>
        <meta
          name="description"
          content="Wedding, Baby, Outdoor & Premium Photography Experience"
        />
      </Helmet>

      {/* Hero Slider */}
      <div className="w-full h-screen relative overflow-hidden">
        <Swiper
          modules={[Autoplay, EffectFade]}
          autoplay={{
            delay: 3100,
            disableOnInteraction: false,
          }}
          speed={2200}
          effect="fade"
          loop={true}
          className="w-full h-full"
        >
          {slides.map((img, i) => (
            <SwiperSlide key={i}>
              <img
                src={img}
                alt="Slide"
                className="w-full h-screen object-cover scale-105"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10">
          <div
            data-aos="zoom-in"
            className="text-center text-white px-6 max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Capture Beautiful Memories
            </h1>

            <p className="text-lg md:text-xl mb-8 text-gray-200">
              Wedding, Baby, Outdoor & Premium Photography Experience
            </p>

            <a
              href="/contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-full font-semibold transition duration-300 shadow-xl"
            >
              Book Your Shoot
            </a>
          </div>
        </div>
      </div>

      {/* Services */}
      <section className="py-20 px-6 md:px-10 bg-white">
        <h2
          data-aos="fade-up"
          className="text-4xl text-center mb-12 font-bold text-gray-900"
        >
          Our Services
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            "Wedding Shoot",
            "Newborn Shoot",
            "Maternity Shoot",
            "Outdoor Shoot",
          ].map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              className="group bg-gradient-to-br from-yellow-50 to-white border border-yellow-200 p-8 rounded-3xl text-center shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-500 cursor-pointer"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition">
                📸
              </div>

              <h3 className="text-xl font-semibold text-gray-900">
                {item}
              </h3>

              <p className="text-sm text-gray-600 mt-2">
                Premium quality memories captured beautifully.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 md:px-10 bg-gray-50">
        <h2
          data-aos="fade-up"
          className="text-4xl text-center mb-12 font-bold text-gray-900"
        >
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-6 text-center">
          {[
            {
              title: "Premium Editing",
              icon: "✨",
              desc: "Luxury retouching with cinematic feel.",
            },
            {
              title: "Creative Concepts",
              icon: "🎨",
              desc: "Unique poses, ideas and themes.",
            },
            {
              title: "Trusted Service",
              icon: "🤝",
              desc: "Loved by families & happy clients.",
            },
          ].map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              className="group p-8 bg-white rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-500 border border-gray-100"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section data-aos="zoom-in" className="py-20 text-center px-6">
        <h2 className="text-4xl font-bold mb-4">
          Book Your Special Moments
        </h2>

        <p className="text-gray-600 mb-8">
          Let us capture memories that last forever.
        </p>

        <a
          href="/contact"
          className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-full font-semibold transition duration-300 shadow-lg"
        >
          Book Now
        </a>
      </section>
    </div>
  );
}