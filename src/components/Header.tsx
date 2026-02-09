import { useState } from "react";

const Header = () => {
  type Section = "services" | "portfolio" | "testimonials" | "about" | null;

  const [active, setActive] = useState<Section>(null);

  const linkClass = (id: Section) =>
  `transition-colors duration-300 ${
    active === id
      ? "text-red-800 poppins-semibold"
      : "hover:text-red-800"
  }`;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur py-7 text-white flex justify-between px-24">
      <div className="font-bold text-xl poppins-bold">
        <a href="#hero" onClick={() => setActive(null)}>CodeWave</a>
      </div>

      <div className="flex gap-10 items-center text-sm poppins-regular">
        <a href="#services" className={linkClass("services")} onClick={() => setActive("services")}>
          Services
        </a>

        <a href="#portfolio" className={linkClass("portfolio")} onClick={() => setActive("portfolio")}>
          Portfolio
        </a>

        <a href="#testimonials" className={linkClass("testimonials")} onClick={() => setActive("testimonials")}>
          Testimonials
        </a>

        <a href="#about" className={linkClass("about")} onClick={() => setActive("about")}>
          About
        </a>

        <div className="bg-red-800 py-2 px-6 rounded-full border hover:bg-red-900 poppins-medium">
          <button>Get A Quote</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
