import React from "react";

const Reward = ({ imageSrc, title, buttonText, points }) => {
  return (
    <div className="max-w-md w-full rounded-xl shadow-lg m-4 bg-white overflow-hidden">
      <img
        className="w-full h-64 object-cover border-2 border-gray-300 rounded-t-xl"
        src={imageSrc}
        alt={title}
      />

      <div className="px-6 py-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-bold">{title}</h2>
          <span className="text-purple-500 text-xl font-semibold">
            {points} points
          </span>
        </div>
      </div>

      <div className="px-6 pb-4">
        <button
          className="block mx-auto bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-xl"
          onClick={() => alert("You don't have enough points!")}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Reward;
