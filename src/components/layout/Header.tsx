import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logos/orig-logo.png";

type Section = "services" | "portfolio" | "testimonials" | "about" | "contact";

const navLinks: { id: Section; label: string }[] = [
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Portfolio" },
  { id: "testimonials", label: "Testimonials" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const Header = () => {
  const [active, setActive] = useState<Section | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: Section) => {
    const element = document.getElementById(id);
    const header = document.getElementById("main-header");

    if (!element) return;

    const headerHeight = header?.offsetHeight ?? 0;

    const elementTop = element.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: elementTop - headerHeight,
      behavior: "smooth",
    });

    setActive(id);
    setIsOpen(false);
  };

  const linkClass = (id: Section) =>
    `relative transition duration-300 ${
      active === id ? "text-red-500 poppins-semibold" : "text-white/80 hover:text-white"
    }`;

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/50 backdrop-blur-xl shadow-lg border-b border-white/10"
          : "bg-black/60 backdrop-blur-xl"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
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
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 items-center text-sm poppins-regular">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={linkClass(link.id)}
            >
              {link.label}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-red-500 transition-all duration-300 ${
                  active === link.id ? "w-full" : "w-0"
                }`}
              />
            </button>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen((prev) => !prev)}>
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
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`transition duration-300 ${
                active === link.id
                  ? "text-red-500 poppins-semibold"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
