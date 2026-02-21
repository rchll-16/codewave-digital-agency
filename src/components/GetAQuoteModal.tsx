import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GetAQuoteModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex justify-center items-center transition-all duration-300
        ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      `}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300
          ${isOpen ? "opacity-100" : "opacity-0"}
        `}
      />

      {/* Modal */}
      <div
        className={`relative bg-white p-8 rounded-xl shadow-2xl w-full max-w-md
          transform transition-all duration-300
          ${isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"}
        `}
      >
        <h2 className="text-2xl font-bold mb-6">Get a Quote</h2>

        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md
              focus:outline-none focus:ring-red-500 focus:border-red-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md
              focus:outline-none focus:ring-red-500 focus:border-red-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              rows={4}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md
              focus:outline-none focus:ring-red-500 focus:border-red-500"
            />
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="py-2 px-4 bg-gray-200 rounded-md hover:bg-gray-300 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="py-2 px-4 bg-red-800 text-white rounded-md hover:bg-red-900 transition"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetAQuoteModal;