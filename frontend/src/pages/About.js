import { Helmet } from "react-helmet";

export default function About() {
  const highlights = [
    {
      icon: "📸",
      title: "Professional Quality",
      desc: "High-end cameras, premium lighting and stunning final results.",
    },
    {
      icon: "🎨",
      title: "Creative Direction",
      desc: "Unique concepts, stylish poses and memorable storytelling.",
    },
    {
      icon: "💛",
      title: "Customer Satisfaction",
      desc: "Friendly service, happy clients and unforgettable experiences.",
    },
  ];

  const branches = [
    {
      name: "Branch 1",
      icon: "📍",
      address: "1, OYALA PIZZA SHOP, 52, Rice Mill Rd, Jalladiampet, Medavakkam, Chennai, Tamil Nadu 600100.",
    },
    {
      name: "Branch 2",
      icon: "📍",
      address: "Thalambur Rd, Navalur, Tamil Nadu 603103.",
    },
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Helmet>
        <title>About Us | RAKSHI Photography</title>
      </Helmet>

      {/* Hero */}
      <section className="py-16 px-6 md:px-10 text-center bg-white">
        <h1
          data-aos="fade-up"
          className="text-4xl md:text-5xl font-bold mb-5"
        >
          About RAKSHI PHOTOGRAPHY
        </h1>

        <p
          data-aos="fade-up"
          className="text-gray-600 max-w-4xl mx-auto leading-8 text-lg"
        >
          We capture emotions, love, joy, and timeless memories through creative
          photography. Our passion is turning your special moments into stories
          you can relive forever.
        </p>
      </section>

      {/* Highlights */}
      <section className="px-6 md:px-10 py-12 bg-gray-50">
        <div className="grid md:grid-cols-3 gap-5">
          {highlights.map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              className="group bg-gradient-to-br from-yellow-50 to-white border border-yellow-200 p-6 rounded-2xl text-center shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-500 cursor-pointer"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-6">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Branches */}
      <section className="px-6 md:px-10 py-16 bg-white">
        <h2
          data-aos="fade-up"
          className="text-4xl font-bold text-center mb-10"
        >
          Our Branches
        </h2>

        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {branches.map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              className="group bg-gradient-to-br from-white to-yellow-50 border border-yellow-200 p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-500"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition">
                {item.icon}
              </div>

              <h3 className="text-xl mb-2 font-semibold text-yellow-600">
                {item.name}
              </h3>

              <p className="text-gray-600 text-sm leading-6">
                {item.address}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}