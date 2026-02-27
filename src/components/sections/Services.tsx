const Services = () => {
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

  return (
    <div>
      <section
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
      </section>
    </div>
  );
};

export default Services;
