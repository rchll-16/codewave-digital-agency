import logo from "../assets/logos/orig-logo.png";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white overflow-hidden border-t border-white/10">

      {/* Background Glow */}
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-red-800/20 blur-[150px]" />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-red-600/20 blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-8 lg:px-24 pt-20 pb-12">

        <div className="grid md:grid-cols-4 gap-14">

          {/* Logo Section */}
          <div className="space-y-5">

            <img
              src={logo}
              alt="CodeWave Logo"
              className="h-14 w-auto object-contain hover:scale-105 transition-transform duration-300"
            />

            <p className="text-sm text-white/60 leading-relaxed poppins-regular">
              CodeWave is a digital agency focused on building powerful,
              high-performing websites and modern web applications.
            </p>

          </div>

          {/* Services */}
          <div>
            <h4 className="poppins-semibold mb-6 text-red-500 tracking-wide">
              Services
            </h4>

            <ul className="space-y-3 text-sm text-white/60 poppins-regular">
              {["Web Development","UI/UX Design","E-Commerce","Brand Identity"].map((item, index) => (
                <li
                  key={index}
                  className="hover:text-white hover:translate-x-1 transition duration-300 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="poppins-semibold mb-6 text-red-500 tracking-wide">
              Company
            </h4>

            <ul className="space-y-3 text-sm text-white/60 poppins-regular">
              {["About Us","Portfolio","Testimonials","Contact"].map((item, index) => (
                <li
                  key={index}
                  className="hover:text-white hover:translate-x-1 transition duration-300 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-5">

            <h4 className="poppins-semibold text-red-500 tracking-wide">
              Contact
            </h4>

            <div className="text-sm text-white/60 space-y-2 poppins-regular">
              <p>hello@codewave.com</p>
              <p>+63 912 345 6789</p>
              <p>Philippines</p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 pt-3">

              {[Facebook, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-red-800 transition duration-300 hover:scale-110"
                >
                  <Icon size={16}/>
                </a>
              ))}

            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-16 pt-6 text-center text-sm text-white/40 poppins-regular">
          © {new Date().getFullYear()} CodeWave Digital Agency. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;