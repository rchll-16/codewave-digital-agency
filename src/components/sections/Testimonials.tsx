import { useState, useEffect } from "react";

const Testimonials = () => {
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

  const clientLogos = [
    "src/assets//logos/logo1.png",
    "src/assets//logos/logo2.png",
    "src/assets//logos/logo3.png",
    "src/assets//logos/logo4.png",
  ];

  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

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

  return (
    <div>
      <section
        id="testimonials"
        className="relative py-16 sm:py-20 md:py-28 
             bg-gradient-to-b from-white via-red-50/40 to-white 
             overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute -top-40 -left-40 w-72 sm:w-96 h-72 sm:h-96 bg-red-400/20 blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 w-72 sm:w-96 h-72 sm:h-96 bg-red-600/20 blur-[120px]" />

        <div className="relative max-w-6xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="poppins-bold text-3xl sm:text-4xl md:text-5xl mb-6">
              What Our <span className="text-red-600">Clients Say</span>
            </h1>

            <p
              className="poppins-light text-gray-600 
                    text-sm sm:text-base 
                    max-w-xl mx-auto leading-relaxed"
            >
              We partner with brands to create high-performing digital products that drive
              measurable growth.
            </p>
          </div>

          {/* Logo Marquee */}
          <div className="overflow-hidden mb-12 w-full">
            <div className="flex gap-10 sm:gap-16 md:gap-20 animate-marquee whitespace-nowrap opacity-70">
              {[...clientLogos, ...clientLogos].map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt="Client Logo"
                  className="h-8 sm:h-10 md:h-12 w-auto grayscale hover:grayscale-0 transition duration-300"
                />
              ))}
            </div>
          </div>

          {/* Testimonial Card */}
          <div className="flex justify-center">
            <div
              className={`relative bg-white p-8 sm:p-10 md:p-14 rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl max-w-xl sm:max-w-2xl text-center border border-gray-100 transition-all duration-700
              ${fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              `}
            >
              {/* Decorative Quote */}
              <div className="absolute -top-4 sm:-top-6 left-1/2 -translate-x-1/2 text-5xl sm:text-6xl text-red-100 select-none">
                “
              </div>

              {/* Tagline */}
              <h4 className="poppins-semibold text-xl sm:text-2xl mb-6 leading-snug">
                {testimonials[current].tagline}
              </h4>

              {/* Description */}
              <p className="poppins-regular text-sm sm:text-base text-gray-600 mb-8 sm:mb-10 leading-relaxed">
                {testimonials[current].desc}
              </p>

              {/* Avatar */}
              <div className="flex flex-col items-center">
                <div className="relative mb-4 sm:mb-5">
                  <div className="absolute inset-0 rounded-full bg-red-400/20 blur-xl"></div>
                  <img
                    src={testimonials[current].avatar}
                    alt="Client Avatar"
                    className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>

                {/* Name + Position */}
                <h5 className="poppins-semibold text-base sm:text-lg">{testimonials[current].name}</h5>
                <p className="poppins-light text-xs sm:text-sm text-gray-500">
                  {testimonials[current].position}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonials