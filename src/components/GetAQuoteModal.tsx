import React, { useEffect, useState } from "react";
import { ChevronDown, X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GetAQuoteModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isClosing, setIsClosing] = useState<boolean>(false);

  // Handle open/close animation
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setIsClosing(false);
    } else {
      setIsClosing(true);
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // BODY SCROLL LOCK
  useEffect(() => {
    if (!shouldRender) return;

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [shouldRender]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center px-4 backdrop-blur-2xl transition-all duration-300 ${
        isClosing ? "bg-black/0" : "bg-black/60"
      }`}
    >
      <div
        className={`w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/20 transition-all duration-300 ${
          isClosing ? "animate-scale-out" : "animate-scale-in"
        }`}
      >
        <div className="grid md:grid-cols-2">

          {/* LEFT PANEL */}
          <div className="bg-gradient-to-br from-red-800 via-red-900 to-black text-white p-14 flex flex-col justify-center">
            <h2 className="text-4xl font-bold leading-tight mb-6 poppins-bold">
              Build Your Next Digital Experience With CodeWave
            </h2>

            <p className="text-sm text-white/80 leading-relaxed poppins-regular">
              We design and develop high-performance websites, scalable web systems,
              and modern digital products that help your business grow.
            </p>

            <div className="mt-10 space-y-2 text-xs text-white/70 poppins-regular">
              <div>⚡ Fast Development</div>
              <div>🎯 Strategy Driven</div>
              <div>🚀 Enterprise Architecture</div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="p-12 relative">

            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-gray-400 hover:text-red-800 transition"
            >
              <X size={18} />
            </button>

            <h3 className="text-2xl font-bold mb-8 poppins-bold">
              Get A Quote
            </h3>

            <form className="space-y-7">
              {["Full Name", "Email", "Company"].map((label, index) => (
                <div key={index} className="relative poppins-regular">
                  <input
                    type={label === "Email" ? "email" : "text"}
                    className="peer w-full border-b-2 border-gray-200 pt-5 pb-2 focus:border-red-800 outline-none transition bg-transparent"
                    placeholder=" "
                  />
                  <label className="absolute left-0 top-0 text-gray-400 text-sm transition-all
                    peer-placeholder-shown:top-4
                    peer-placeholder-shown:text-base
                    peer-focus:top-0
                    peer-focus:text-xs
                    peer-focus:text-red-800">
                    {label}
                  </label>
                </div>
              ))}

              <div className="relative poppins-regular">
                <select className="w-full border-b-2 border-gray-200 pt-5 pb-2 pr-10 appearance-none bg-transparent focus:border-red-800 outline-none transition cursor-pointer">
                  <option>$500 - $1,000</option>
                  <option>$1,000 - $3,000</option>
                  <option>$3,000 - $5,000</option>
                  <option>$5,000+</option>
                </select>

                <label className="absolute left-0 top-0 text-gray-400 text-sm">
                  Budget Range
                </label>

                <ChevronDown
                  size={16}
                  className="absolute right-4 top-6 text-gray-400 pointer-events-none"
                />
              </div>

              <div className="relative poppins-regular">
                <textarea
                  rows={3}
                  className="peer w-full border-b-2 border-gray-200 pt-5 pb-2 focus:border-red-800 outline-none resize-none transition bg-transparent"
                  placeholder=" "
                />
                <label className="absolute left-0 top-0 text-gray-400 text-sm transition-all
                  peer-placeholder-shown:top-4
                  peer-placeholder-shown:text-base
                  peer-focus:top-0
                  peer-focus:text-xs
                  peer-focus:text-red-800">
                  Project Details
                </label>
              </div>

              <div className="pt-6 flex justify-end">
                <button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-red-800 to-red-900 text-white rounded-full font-semibold shadow-lg hover:scale-105 transition"
                >
                  Submit
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default GetAQuoteModal;