import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GetAQuoteModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xl bg-black/40 transition-all duration-300">

      {/* Modal Container */}
      <div className="relative w-full max-w-lg bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-10 transform transition-all duration-300 scale-100">

        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
            Get a Quote
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Tell us about your project and we will respond shortly.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6">

          <div>
            <label className="text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              className="mt-2 w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="mt-2 w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Message</label>
            <textarea
              rows={4}
              className="mt-2 w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition resize-none"
              placeholder="Tell us about your project..."
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 pt-4">

            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 transition font-medium"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-red-800 hover:bg-red-900 text-white font-medium transition shadow-md hover:shadow-lg"
            >
              Send Message
            </button>

          </div>

        </form>
      </div>
    </div>
  );
};

export default GetAQuoteModal;