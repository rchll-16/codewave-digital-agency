import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logos/orig-logo.png";

const Header = () => {
  type Section = "services" | "portfolio" | "testimonials" | "about" | "contact" | null;

  const [active, setActive] = useState<Section>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const sections = ["services", "portfolio", "testimonials", "about", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (id: Section) =>
    `relative transition duration-300 ${
      active === id ? "text-red-500 poppins-semibold" : "text-white/80 hover:text-white"
    }`;

  const handleClick = (section: Section) => {
    setActive(section);
    setIsOpen(false);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const headerHeight =
      document.getElementById("main-header")?.getBoundingClientRect().height ?? 0;

    const y = element.getBoundingClientRect().top + window.pageYOffset - headerHeight - 8;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-xl shadow-lg border-b border-white/10"
          : "bg-black/60 backdrop-blur-xl"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={() => {
            setActive(null);
            setIsOpen(false);
          }}
          className="flex items-center group"
        >
          <img
            src={logo}
            alt="CodeWave"
            className="h-12 object-contain transition duration-300 group-hover:scale-105"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 items-center text-sm poppins-regular">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={() => handleClick(section as Section)}
              className={linkClass(section as Section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-red-500 transition-all duration-300 ${
                  active === section ? "w-full" : "w-0"
                }`}
              />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 pt-2 flex flex-col gap-6 text-sm poppins-regular bg-black/95 backdrop-blur-xl">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={() => handleClick(section as Section)}
              className={`transition duration-300 ${
                active === section
                  ? "text-red-500 poppins-semibold"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
