import logo from "../assets/logos/orig-logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-8 px-24">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Logo + Description */}
        <div>
          <img src={logo} alt="CodeWave Logo" className="h-10 w-auto mb-4" />
          <p className="text-sm text-gray-400 leading-relaxed">
            CodeWave is a digital agency focused on building powerful,
            high-performing websites and modern web applications.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="poppins-semibold mb-4 text-red-800">Services</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-white transition">Web Development</li>
            <li className="hover:text-white transition">UI/UX Design</li>
            <li className="hover:text-white transition">E-Commerce</li>
            <li className="hover:text-white transition">Brand Identity</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="poppins-semibold mb-4 text-red-800">Company</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-white transition">About Us</li>
            <li className="hover:text-white transition">Portfolio</li>
            <li className="hover:text-white transition">Testimonials</li>
            <li className="hover:text-white transition">Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="poppins-semibold mb-4 text-red-800">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>hello@codewave.com</li>
            <li>+63 912 345 6789</li>
            <li>Philippines</li>
          </ul>

          {/* Socials */}
          <div className="flex gap-4 mt-4">
            <div className="w-8 h-8 bg-gray-800 hover:bg-red-800 transition rounded-full flex items-center justify-center text-xs cursor-pointer">
              FB
            </div>
            <div className="w-8 h-8 bg-gray-800 hover:bg-red-800 transition rounded-full flex items-center justify-center text-xs cursor-pointer">
              IG
            </div>
            <div className="w-8 h-8 bg-gray-800 hover:bg-red-800 transition rounded-full flex items-center justify-center text-xs cursor-pointer">
              IN
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-16 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} CodeWave Digital Agency. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer