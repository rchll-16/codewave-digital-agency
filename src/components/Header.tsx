import { useState } from "react";
import logo from "../assets/logos/orig-logo.png";

const Header = () => {
  type Section = "services" | "portfolio" | "testimonials" | "about" | "contact" | null;

  const [active, setActive] = useState<Section>(null);

  const linkClass = (id: Section) =>
    `relative transition duration-300 ${
      active === id ? "text-red-500 poppins-semibold" : "text-white/80 hover:text-white"
    }`;

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" onClick={() => setActive(null)} className="flex items-center group">
          <img
            src={logo}
            alt="CodeWave"
            className="h-12 object-contain transition duration-300 group-hover:scale-105"
          />
        </a>

        {/* Navigation */}
        <div className="hidden md:flex gap-10 items-center text-sm poppins-regular">
          {["services", "portfolio", "testimonials", "about", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={() => setActive(section as Section)}
              className={linkClass(section as Section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}

              {/* Animated Underline */}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-red-500 transition-all duration-300 ${
                  active === section ? "w-full" : "w-0"
                }`}
              />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
