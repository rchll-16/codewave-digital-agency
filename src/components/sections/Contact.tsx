const Contact = ({ onOpenModal }: { onOpenModal: () => void }) => {
  return (
    <div>
      <section
        id="contact"
        className="relative py-20 sm:py-28 md:py-36 overflow-hidden bg-black text-white px-6 sm:px-10"
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-black to-red-800/30" />

        {/* Background Glow */}
        <div className="absolute -top-40 -left-40 w-72 sm:w-96 h-72 sm:h-96 bg-red-800/20 blur-[120px] rounded-full"/>
        <div className="absolute -bottom-40 -right-40 w-72 sm:w-96 h-72 sm:h-96 bg-red-600/20 blur-[120px] rounded-full"/>

        <div className="relative max-w-4xl mx-auto text-center">

          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1 mb-6 text-xs sm:text-sm 
                    bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="poppins-regular text-white/80">Currently accepting new projects</span>
          </div>

          {/* Headline */}
          <h2 className="poppins-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-6">
            Let’s Build Something <span className="text-red-500">Exceptional</span>
          </h2>

          {/* Subtext */}
          <p className="poppins-light text-white/70 max-w-2xl mx-auto mb-10 sm:mb-12 text-sm sm:text-base md:text-lg">
            From concept to deployment, we craft high-performance digital systems designed to scale,
            convert, and dominate your market.
          </p>

          {/* Glass Card */}
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl 
                    p-6 sm:p-8 md:p-10 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-8">
              <div className="text-center md:text-left">
                <h3 className="poppins-semibold text-lg sm:text-xl md:text-2xl mb-2">
                  Ready to launch your next project?
                </h3>
                <p className="poppins-regular text-white/60 text-xs sm:text-sm">
                  Tell us about your vision. We’ll handle the strategy, design, and development.
                </p>
              </div>

              <button
                onClick={onOpenModal}
                className="relative w-full md:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-red-700 to-red-900 
                     rounded-full poppins-semibold text-sm sm:text-base text-white shadow-xl transition-all duration-300 
                     hover:scale-105 hover:shadow-red-900/50"
              >
                Start Your Project
              </button>
            </div>
          </div>

          {/* Secondary Contact Info */}
          <div className="mt-10 sm:mt-12 text-white/50 text-xs sm:text-sm poppins-regular space-y-2">
            <p>Email: hello@codewave.dev</p>
            <p>Based in Philippines • Serving Clients Worldwide</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
