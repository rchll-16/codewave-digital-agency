import { useState, useEffect } from "react";
import Header from "./components/Header";
import p1 from "./assets/Rectangle 4.png";
import p2 from "./assets/Rectangle 5.png";
import p3 from "./assets/Rectangle 6.png";
import p4 from "./assets/Rectangle 7.png";
import Footer from "./components/Footer";
import GetAQuoteModal from "./components/GetAQuoteModal";

const App = () => {
  const services = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="44"
          fill="#E63946"
          viewBox="0 0 24 24"
        >
          <path d="M5 21h14c1.1 0 2-.9 2-2v-7h-2v7H5V5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2"></path>
          <path d="M7 13v3c0 .55.45 1 1 1h3c.27 0 .52-.11.71-.29l9-9a.996.996 0 0 0 0-1.41l-3-3a.996.996 0 0 0-1.41 0l-9.01 8.99A1 1 0 0 0 7 13m10-7.59L18.59 7 17.5 8.09 15.91 6.5zm-8 8 5.5-5.5 1.59 1.59-5.5 5.5H9z"></path>
        </svg>
      ),
      title: "Creative Design",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet quam fringilla libero rutrum lobortis. Nam id vulputate odio.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="44"
          fill="#E63946"
          viewBox="0 0 24 24"
        >
          <path d="M20 4h-8.59L10 2.59C9.63 2.22 9.11 2 8.59 2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-8.79 10.29L9.8 15.7l-3.71-3.71L9.8 8.28l1.41 1.41-2.29 2.29 2.29 2.29Zm3 1.41-1.41-1.41L15.09 12 12.8 9.71l1.41-1.41 3.71 3.71-3.71 3.71Z"></path>
        </svg>
      ),
      title: "Web & App Development",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet quam fringilla libero rutrum lobortis. Nam id vulputate odio.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="44"
          fill="#E63946"
          viewBox="0 0 24 24"
        >
          <path d="M3 15h2v6H3zm4-2h2v8H7zm4-1h2v9h-2zm4 1h2v8h-2zm4-5h2v13h-2z"></path>
          <path d="m19.21 2.38-4.87 6.21-5-4-6.13 7.79 1.58 1.24 4.87-6.21 5 4 6.13-7.79z"></path>
        </svg>
      ),
      title: "Digital Marketing",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet quam fringilla libero rutrum lobortis. Nam id vulputate odio.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="44"
          fill="#E63946"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.49 2 2 6.49 2 12c0 2.12.68 4.19 1.93 5.9l-1.75 2.53c-.21.31-.24.7-.06 1.03.17.33.51.54.89.54h9c5.51 0 10-4.49 10-10S17.51 2 12 2m2 13H7v-2h7zm3-4H7V9h10z"></path>
        </svg>
      ),
      title: "Social Media Management",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet quam fringilla libero rutrum lobortis. Nam id vulputate odio.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="44"
          fill="#E63946"
          viewBox="0 0 24 24"
        >
          <path d="M2.95 20c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-.16-.05-.31-.11-.44s-1.72-3.45-1.72-3.45A2 2 0 0 0 17.33 2H6.56c-.76 0-1.45.42-1.79 1.11L3.05 6.56c-.07.14-.11.29-.11.45v13ZM12 15c-2.76 0-5-2.24-5-5h2c0 1.65 1.35 3 3 3s3-1.35 3-3h2c0 2.76-2.24 5-5 5M6.56 4h10.76l1 2H5.56z"></path>
        </svg>
      ),
      title: "eCommerce Solutions",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet quam fringilla libero rutrum lobortis. Nam id vulputate odio.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="44"
          fill="#E63946"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.49 2 2 6.49 2 12v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1H4.07C4.56 7.06 7.93 4 12 4s7.44 3.06 7.93 7H18c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1h2v1c0 .55-.45 1-1 1h-4c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h9c1.65 0 3-1.35 3-3v-7c0-5.51-4.49-10-10-10"></path>
        </svg>
      ),
      title: "Ongoing Support",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet quam fringilla libero rutrum lobortis. Nam id vulputate odio.",
    },
  ];

  const testimonials = [
    {
      tagline: "Creatives Mind and Works!",
      desc: " Nullam viverra leo quis libero vulputate ultricies sit amet et lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ",
      avatar: "src/assets/avatar.png",
      name: "John Doe",
      position: "CEO, Centrix",
    },
    {
      tagline: "Amazing Experience!",
      desc: " Nullam viverra leo quis libero vulputate ultricies sit amet et lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      avatar: "src/assets/avatar.png",
      name: "William James",
      position: "CTO, CodeWave",
    },
    {
      tagline: "Great Work!",
      desc: " Nullam viverra leo quis libero vulputate ultricies sit amet et lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      avatar: "src/assets/avatar.png",
      name: "Benjamin Franklin",
      position: "COO, Codex",
    },
  ];

  const team = [
    {
      avatar: "src/assets/team2.png",
      name: "Alex Carter",
      position: "Co-Founder & CEO",
    },
    {
      avatar: "src/assets/team1.png",
      name: "Maria Gomez",
      position: "Operations Director",
    },
    {
      avatar: "src/assets/team3.png",
      name: "James Lee",
      position: "HR Director",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // fade out

      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
        setFade(true); // fade in
      }, 300);
    }, 3000); // change every 3s

    return () => clearInterval(interval);
  }, []);

  const clientLogos = [
    "src/assets//logos/logo1.png",
    "src/assets//logos/logo2.png",
    "src/assets//logos/logo3.png",
    "src/assets//logos/logo4.png",
  ];

  return (
    <div>
      <div
        id="hero"
        className="relative bg-[url(src/assets/hero.png)] bg-cover min-h-screen bg-blend-multiply bg-neutral-400 pt-24"
      >
        <div className="absolute inset-0 bg-black/60 pointer-events-none" />
        <div className="relative z-20">
          <Header />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-transparent" />

        <div className="relative z-20 flex-col py-45 px-24 text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1 rounded-full border border-white/20 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm poppins-regular text-white/80">
              Trusted by growing brands worldwide
            </span>
          </div>
          <h1 className="poppins-black text-5xl md:text-7xl max-w-5xl leading-tight mb-6">
            We Build <span className="text-red-500">High-Impact</span> Digital Products
          </h1>
          <p className="poppins-light text-white/70 text-lg mb-10 max-w-xl">
            Strategy. Design. Development. We craft powerful digital systems engineered for
            performance and growth.
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 bg-linear-to-r from-red-700 to-red-900 rounded-full text-white poppins-semibold shadow-xl hover:scale-105 transition"
            >
              Start Your Project
            </button>
            <a
              href="#portfolio"
              className="px-8 py-4 border border-white/30 rounded-full text-white poppins-medium hover:bg-white/10 transition"
            >
              View Work
            </a>
          </div>
        </div>
      </div>

      <div
        id="services"
        className="relative py-28 pt-40 bg-linear-to-br from-red-50 via-white to-red-100 overflow-hidden"
      >
        {/* Soft Background Glow */}
        <div className="absolute -top-40 -left-40 w-125 h-125 bg-red-400/20 blur-[140px]" />
        <div className="absolute -bottom-40 -right-40 w-125 h-125 bg-red-600/20 blur-[140px]" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-24">
          {/* CTA Header */}
          <div className="text-center mb-20">
            <h1 className="poppins-bold text-4xl md:text-5xl leading-tight mb-6">
              Ready to <span className="text-red-600">Grow</span> Your Business?
            </h1>

            <p className="poppins-light text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We design and develop digital experiences that elevate brands, convert visitors, and
              accelerate business growth.
            </p>

            <a
              href="#contact"
              className="inline-block mt-8 px-8 py-3 bg-linear-to-r from-red-700 to-red-900 rounded-full text-white poppins-medium text-sm shadow-xl hover:scale-105 transition duration-300"
            >
              Let's Connect
            </a>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-md p-10 rounded-3xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
              >
                {/* Subtle Hover Glow */}
                <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-red-500/0 to-red-500/0 group-hover:from-red-100/40 group-hover:to-red-200/40 transition duration-500 -z-10" />

                <div className="mb-6 text-red-600 group-hover:scale-110 transition duration-300">
                  {service.icon}
                </div>

                <h5 className="poppins-semibold text-xl mb-4 group-hover:text-red-600 transition">
                  {service.title}
                </h5>

                <p className="poppins-regular text-sm text-gray-600 leading-relaxed">
                  {service.desc}
                </p>

                <div className="mt-6 text-sm text-red-600 opacity-0 group-hover:opacity-100 transition duration-300 poppins-medium cursor-pointer">
                  Learn More →
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        id="portfolio"
        className="relative py-27 pt-35 bg-linear-to-b from-white via-red-50/40 to-white overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute -top-40 -right-40 w-125 h-125 bg-red-400/20 blur-[150px]" />
        <div className="absolute -bottom-40 -left-40 w-125 h-125 bg-red-600/20 blur-[150px]" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-24">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h1 className="poppins-bold text-4xl md:text-5xl mb-6">
              Featured <span className="text-red-600">Projects</span>
            </h1>

            <p className="poppins-light text-gray-600 max-w-xl mx-auto leading-relaxed">
              We build digital experiences that merge performance, design, and innovation into
              powerful products.
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-4 gap-8">
            {[p1, p2, p3, p4].map((img, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Image */}
                <img
                  src={img}
                  alt="Portfolio"
                  className="w-full h-80 object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                {/* Content */}
                <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition duration-500">
                  <h3 className="text-white text-lg poppins-semibold mb-2">Project Title</h3>
                  <p className="text-white/70 text-sm poppins-regular mb-4">
                    Web Development • UI/UX
                  </p>

                  <button className="px-5 py-2 bg-red-700 rounded-full text-white text-xs poppins-medium hover:bg-red-800 transition cursor-pointer">
                    View Case Study →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="flex justify-center mt-20">
            <button className="px-10 py-4 bg-linear-to-r from-red-700 to-red-900 rounded-full text-white poppins-medium shadow-xl hover:scale-105 transition duration-300">
              Explore More Projects
            </button>
          </div>
        </div>
      </div>

      <div
        id="testimonials"
        className="relative py-24 pt-33 bg-linear-to-b from-white via-red-50/40 to-white overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute -top-40 -left-40 w-125 h-125 bg-red-400/20 blur-[150px]" />
        <div className="absolute -bottom-40 -right-40 w-125 h-125 bg-red-600/20 blur-[150px]" />

        <div className="relative max-w-6xl mx-auto px-6 md:px-24">
          {/* Section Header */}
          <div className="text-center mb-10">
            <h1 className="poppins-bold text-4xl md:text-5xl mb-6">
              What Our <span className="text-red-600">Clients Say</span>
            </h1>

            <p className="poppins-light text-gray-600 max-w-xl mx-auto leading-relaxed">
              We partner with brands to create high-performing digital products that drive
              measurable growth.
            </p>
          </div>

          {/* Logo Marquee */}
          <div className="overflow-hidden mb-10 w-100%">
            <div className="flex gap-20 animate-marquee whitespace-nowrap opacity-70">
              {[...clientLogos, ...clientLogos].map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt="Client Logo"
                  className="h-12 w-auto grayscale hover:grayscale-0 transition duration-300"
                />
              ))}
            </div>
          </div>

          {/* Testimonial Card */}
          <div className="flex justify-center">
            <div
              className={`relative bg-white p-14 rounded-3xl shadow-2xl max-w-2xl text-center border border-gray-100 transition-all duration-700
              ${fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              `}
            >
              {/* Decorative Quote */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-6xl text-red-100 select-none">
                “
              </div>

              {/* Tagline */}
              <h4 className="poppins-semibold text-2xl mb-6 leading-snug">
                {testimonials[current].tagline}
              </h4>

              {/* Description */}
              <p className="poppins-regular text-gray-600 mb-10 leading-relaxed">
                {testimonials[current].desc}
              </p>

              {/* Avatar */}
              <div className="flex flex-col items-center">
                <div className="relative mb-5">
                  <div className="absolute inset-0 rounded-full bg-red-400/20 blur-xl"></div>
                  <img
                    src={testimonials[current].avatar}
                    alt="Client Avatar"
                    className="relative w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>

                {/* Name + Position */}
                <h5 className="poppins-semibold text-lg">{testimonials[current].name}</h5>
                <p className="poppins-light text-sm text-gray-500">
                  {testimonials[current].position}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="about"
        className="relative py-38 pt-50 bg-linear-to-b from-white via-red-50/30 to-white overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute -top-40 -right-40 w-125 h-125 bg-red-400/20 blur-[150px]" />
        <div className="absolute -bottom-40 -left-40 w-125 h-125 bg-red-600/20 blur-[150px]" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-24">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h1 className="poppins-bold text-4xl md:text-5xl mb-6">
              The People Behind Our <span className="text-red-600">Success</span>
            </h1>
            <p className="poppins-light text-gray-600 max-w-xl mx-auto leading-relaxed">
              A passionate team of designers, developers, and strategists dedicated to building
              impactful digital experiences.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 text-center"
              >
                {/* Avatar */}
                <div className="relative mb-6 flex justify-center">
                  <div className="absolute w-40 h-40 bg-red-400/20 rounded-full blur-2xl"></div>

                  <img
                    src={member.avatar}
                    alt="Team Member"
                    className="relative w-40 h-40 object-cover rounded-full border-4 border-white shadow-lg transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Name */}
                <h5 className="poppins-semibold text-lg group-hover:text-red-600 transition">
                  {member.name}
                </h5>

                {/* Position */}
                <p className="poppins-regular text-sm text-gray-500 mt-2">{member.position}</p>

                {/* Optional subtle divider */}
                <div className="w-10 h-1 bg-red-500 mx-auto mt-4 rounded-full opacity-60 group-hover:w-16 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="contact" className="relative py-50 overflow-hidden bg-black text-white px-6">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-linear-to-br from-red-900/30 via-black to-red-800/30" />
        <div className="absolute -top-40 -left-40 w-125 h-125 bg-red-800/20 blur-[150px] rounded-full" />
        <div className="absolute -bottom-40 -right-40 w-125 h-125 bg-red-600/20 blur-[150px] rounded-full" />

        <div className="relative max-w-4xl mx-auto text-center">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1 mb-6 text-sm bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="poppins-regular text-white/80">Currently accepting new projects</span>
          </div>

          {/* Headline */}
          <h2 className="poppins-bold text-5xl leading-tight mb-6">
            Let’s Build Something <span className="text-red-500">Exceptional</span>
          </h2>

          {/* Subtext */}
          <p className="poppins-light text-white/70 max-w-2xl mx-auto mb-12 text-lg">
            From concept to deployment, we craft high-performance digital systems designed to scale,
            convert, and dominate your market.
          </p>

          {/* Glass Card */}
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-left">
                <h3 className="poppins-semibold text-2xl mb-2">
                  Ready to launch your next project?
                </h3>
                <p className="poppins-regular text-white/60 text-sm">
                  Tell us about your vision. We’ll handle the strategy, design, and development.
                </p>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="relative px-10 py-4 bg-linear-to-r from-red-700 to-red-900 rounded-full poppins-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-red-900/50"
              >
                Start Your Project
              </button>
            </div>
          </div>

          {/* Secondary Contact Info */}
          <div className="mt-12 text-white/50 text-sm poppins-regular space-y-2">
            <p>Email: hello@codewave.dev</p>
            <p>Based in Philippines • Serving Clients Worldwide</p>
          </div>
        </div>
      </div>

      <GetAQuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Footer />
    </div>
  );
};

export default App;
