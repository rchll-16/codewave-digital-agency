import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GetAQuoteModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xl px-4">

      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden">

        <div className="flex flex-col md:flex-row">

          {/* LEFT SIDE - Branding Section */}
          <div className="md:w-1/2 bg-gradient-to-br from-red-800 to-red-900 text-white p-12 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4 leading-tight poppins-bold">
              Let’s Build Something Powerful.
            </h2>
            <p className="text-sm text-white/80 leading-relaxed poppins-regular">
              At CodeWave, we craft high-performance websites and modern digital
              experiences tailored to your business goals. Tell us about your
              project and let’s turn your vision into reality.
            </p>

            <div className="mt-8 text-xs text-white/60 poppins-regular">
              ⚡ Fast turnaround <br />
              🎯 Strategy-driven design <br />
              🚀 Scalable web solutions
            </div>
          </div>

          {/* RIGHT SIDE - Form */}
          <div className="md:w-1/2 p-10">

            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl text-gray-900 poppins-bold">
                Get a Quote
              </h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-red-800 transition"
              >
                ✕
              </button>
            </div>

            <form className="space-y-5">

              <div className="poppins-regular">
                <label className="text-sm text-gray-700 poppins-semibold">Full Name</label>
                <input
                  type="text"
                  className="mt-2 w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:outline-none transition"
                  placeholder="Your full name"
                />
              </div>

              <div className="poppins-regular">
                <label className="text-sm text-gray-700 poppins-semibold">Email</label>
                <input
                  type="email"
                  className="mt-2 w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:outline-none transition"
                  placeholder="you@example.com"
                />
              </div>

              <div className="poppins-regular">
                <label className="text-sm text-gray-700 poppins-semibold">Company</label>
                <input
                  type="text"
                  className="mt-2 w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:outline-none transition"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label className="text-sm text-gray-700 poppins-semibold">Budget Range</label>
                <select
                  className="mt-2 w-full px-4 py-3 poppins-regular border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:outline-none transition"
                >
                  <option>$500 - $1,000</option>
                  <option>$1,000 - $3,000</option>
                  <option>$3,000 - $5,000</option>
                  <option>$5,000+</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 poppins-semibold">Project Details</label>
                <textarea
                  rows={3}
                  className="mt-2 w-full px-4 py-3 poppins-regular border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:outline-none transition resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  className="px-8 py-3 bg-red-800 hover:bg-red-900 text-white rounded-full poppins-semibold transition shadow-md hover:shadow-lg"
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