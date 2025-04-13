import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar_User from "../components/Navbar_User";
import Footer from "../components/Footer";

export default function ComingSoon() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-100 flex flex-col">
      <Navbar_User />

      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 py-12">
        <h1 className="text-5xl font-bold text-green-700 mb-4">🚧 Game Coming Soon!</h1>
        <p className="text-gray-700 text-lg max-w-xl mb-8">
          We're still working on this game to make it awesome! In the meantime, check out one of our current games and keep learning while having fun.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => navigate("/games/bingo")}
            className="px-6 py-3 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition-all"
          >
            🎯 Play Financial Bingo
          </button>

          <button
            onClick={() => navigate("/games/trivia")}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-all"
          >
            🧠 Play Financial Trivia
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}