import p1 from "../../assets/Rectangle 4.png";
import p2 from "../../assets/Rectangle 5.png";
import p3 from "../../assets/Rectangle 6.png";
import p4 from "../../assets/Rectangle 7.png";

const Portfolio = () => {
    return (
      <div>
        <section
          id="portfolio"
          className="relative py-16 sm:py-20 md:py-28 
             bg-gradient-to-b from-white via-red-50/40 to-white 
             overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute -top-40 -right-40 w-72 sm:w-96 h-72 sm:h-96 bg-red-400/20 blur-[120px]" />
          <div className="absolute -bottom-40 -left-40 w-72 sm:w-96 h-72 sm:h-96 bg-red-600/20 blur-[120px]" />

          <div className="relative max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
            {/* Section Header */}
            <div className="text-center mb-14 sm:mb-16 md:mb-20">
              <h1
                className="poppins-bold 
                     text-3xl sm:text-4xl md:text-5xl 
                     mb-6"
              >
                Featured <span className="text-red-600">Projects</span>
              </h1>

              <p
                className="poppins-light text-gray-600 
                    text-sm sm:text-base 
                    max-w-xl mx-auto leading-relaxed"
              >
                We build digital experiences that merge performance, design, and innovation into
                powerful products.
              </p>
            </div>

            {/* Portfolio Grid */}
            <div
              className="grid 
                    grid-cols-1 
                    sm:grid-cols-2 
                    lg:grid-cols-4 
                    gap-6 sm:gap-8"
            >
              {[p1, p2, p3, p4].map((img, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden 
                     rounded-2xl sm:rounded-3xl 
                     shadow-md hover:shadow-2xl 
                     transition-all duration-500"
                >
                  {/* Image */}
                  <img
                    src={img}
                    alt="Portfolio"
                    className="w-full 
                       h-64 sm:h-72 md:h-80 
                       object-cover 
                       transition duration-700 
                       group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0 
                          bg-gradient-to-t from-black/70 via-black/30 to-transparent 
                          opacity-100 sm:opacity-0 
                          sm:group-hover:opacity-100 
                          transition duration-500"
                  />

                  {/* Content */}
                  <div
                    className="absolute bottom-6 left-6 right-6 
                          opacity-100 sm:opacity-0 
                          translate-y-0 sm:translate-y-6 
                          sm:group-hover:opacity-100 
                          sm:group-hover:translate-y-0 
                          transition duration-500"
                  >
                    <h3 className="text-white text-base sm:text-lg poppins-semibold mb-2">
                      Project Title
                    </h3>

                    <p className="text-white/70 text-xs sm:text-sm poppins-regular mb-4">
                      Web Development • UI/UX
                    </p>

                    <button
                      className="px-4 sm:px-5 py-2 
                               bg-red-700 rounded-full 
                               text-white text-xs 
                               poppins-medium 
                               hover:bg-red-800 transition"
                    >
                      View Case Study →
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="flex justify-center mt-14 sm:mt-16 md:mt-20">
              <button
                className="px-8 sm:px-10 py-3 sm:py-4 
                         bg-gradient-to-r from-red-700 to-red-900 
                         rounded-full text-white 
                         text-sm sm:text-base
                         poppins-medium 
                         shadow-xl 
                         hover:scale-105 transition duration-300"
              >
                Explore More Projects
              </button>
            </div>
          </div>
        </section>
      </div>
    );
};

export default Portfolio;
