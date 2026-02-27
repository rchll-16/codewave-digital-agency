

const Contact = ({ onOpenModal }: { onOpenModal: () => void }) => {

  return (
    <div>
      <section id="contact" className="relative py-50 overflow-hidden bg-black text-white px-6">
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
                onClick={onOpenModal}
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
      </section>
    </div>
  );
}

export default Contact