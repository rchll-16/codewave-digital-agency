const Hero = ({ onOpenModal }: { onOpenModal: () => void }) => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative bg-[url(src/assets/hero.png)] bg-cover bg-center min-h-screen bg-blend-multiply bg-neutral-400"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />

      <div
        className="relative z-20 flex flex-col justify-center min-h-screen 
                      px-6 sm:px-10 md:px-20 lg:px-24 
                      py-32 md:py-40 text-white"
      >
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md 
                        px-4 py-1 rounded-full border border-white/20 mb-6 w-fit"
        >
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span className="text-xs sm:text-sm poppins-regular text-white/80">
            Trusted by growing brands worldwide
          </span>
        </div>

        {/* Heading */}
        <h1
          className="poppins-black 
                       text-3xl sm:text-4xl md:text-6xl lg:text-7xl 
                       max-w-4xl leading-tight mb-6"
        >
          We Build <span className="text-red-500">High-Impact</span> Digital Products
        </h1>

        {/* Description */}
        <p
          className="poppins-light text-white/70 
                      text-sm md:text-base sm:text-lg 
                      mb-10 max-w-xl"
        >
          Strategy. Design. Development. We craft powerful digital systems engineered for
          performance and growth.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto text-sm md:text-base">
          <button
            onClick={onOpenModal}
            className="px-6 sm:px-8 py-3 sm:py-4 
                       bg-gradient-to-r from-red-700 to-red-900 
                       rounded-full text-white poppins-semibold 
                       shadow-xl hover:scale-105 transition"
          >
            Start Your Project
          </button>

          <button
            onClick={() => scrollToSection("#portfolio")}
            className="px-6 sm:px-8 py-3 sm:py-4 
                       border border-white/30 rounded-full 
                       text-white poppins-medium 
                       hover:bg-white/10 transition"
          >
            View Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
