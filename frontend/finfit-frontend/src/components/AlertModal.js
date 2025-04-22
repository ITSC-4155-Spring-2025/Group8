import React from "react";

function AlertModal({ show, message, onClose }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-xl p-6 shadow-lg w-[300px] text-center">
        <p className="text-lg font-medium text-gray-800">{message}</p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition"
        >
          OK
        </button>
      </div>
    </div>
  );
}

export default AlertModal;
