import React from "react";
import { ChevronDown, X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GetAQuoteModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-2xl px-4 animate-fade-in">

      {/* Modal Card */}
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/20 animate-scale-in">

        <div className="grid md:grid-cols-2">

          {/* 🔴 Left Branding Panel */}
          <div className="bg-gradient-to-br from-red-800 via-red-900 to-black text-white p-14 flex flex-col justify-center relative">

            <h2 className="text-4xl font-bold leading-tight mb-6 poppins-bold">
              Build Your Next Digital Experience With CodeWave
            </h2>

            <p className="text-sm text-white/80 leading-relaxed poppins-regular">
              We design and develop high-performance websites, scalable web systems,
              and modern digital products that help your business grow in the digital era.
            </p>

            <div className="mt-10 space-y-2 text-xs text-white/70 poppins-regular">
              <div>⚡ Fast Development</div>
              <div>🎯 Business Strategy Driven</div>
              <div>🚀 Enterprise Ready Architecture</div>
            </div>
          </div>

          {/* ⚪ Right Form Panel */}
          <div className="p-12 relative">

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-gray-400 hover:text-red-800 transition"
            >
              <X size={18}/>
            </button>

            <h3 className="text-2xl font-bold mb-8 poppins-bold">
              Project Inquiry
            </h3>

            <form className="space-y-7">

              {/* Floating Input */}
              {["Full Name", "Email", "Company"].map((label, index) => (
                <div key={index} className="relative group poppins-regular">

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
                    peer-focus:text-red-800
                  ">
                    {label}
                  </label>
                </div>
              ))}

              {/* Budget Select */}
              <div className="relative group poppins-regular">

                <select className="w-full border-b-2 border-gray-200 pt-5 pb-2 pr-10 appearance-none bg-transparent focus:border-red-800 outline-none transition cursor-pointer">

                  <option>$500 - $1,000</option>
                  <option>$1,000 - $3,000</option>
                  <option>$3,000 - $5,000</option>
                  <option>$5,000+</option>

                </select>

                <label className="absolute left-0 top-0 text-gray-400 text-sm">
                  Budget Range
                </label>

                <ChevronDown size={16} className="absolute right-0 top-6 text-gray-400 pointer-events-none"/>
              </div>

              {/* Message */}
              <div className="relative group poppins-regular">

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
                  peer-focus:text-red-800
                ">
                  Project Details
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-6 flex justify-end">
                <button
                  type="submit"
                  className="relative px-8 py-3 bg-gradient-to-r from-red-800 to-red-900 text-white rounded-full font-semibold shadow-lg hover:scale-105 transition transform"
                >
                  Send Inquiry
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