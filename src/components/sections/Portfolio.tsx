import p1 from "../../assets/Rectangle 4.png";
import p2 from "../../assets/Rectangle 5.png";
import p3 from "../../assets/Rectangle 6.png";
import p4 from "../../assets/Rectangle 7.png";

const Portfolio = () => {
    return (
      <div>
        <section
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
        </section>
      </div>
    );
};

export default Portfolio;
