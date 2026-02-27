

const Hero = ({ onOpenModal }: { onOpenModal: () => void }) => {

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <section
        id="hero"
        className="relative bg-[url(src/assets/hero.png)] bg-cover min-h-screen bg-blend-multiply bg-neutral-400 pt-24"
      >
        <div className="absolute inset-0 bg-black/60 pointer-events-none" />
        {/* <div className="relative z-20">
          <Header />
        </div> */}

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
              onClick={onOpenModal}
              className="px-8 py-4 bg-linear-to-r from-red-700 to-red-900 rounded-full text-white poppins-semibold shadow-xl hover:scale-105 transition"
            >
              Start Your Project
            </button>
            <a
              onClick={() => scrollToSection("#portfolio")}
              className="px-8 py-4 border border-white/30 rounded-full text-white poppins-medium hover:bg-white/10 transition"
            >
              View Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
