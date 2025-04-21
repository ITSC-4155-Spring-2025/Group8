import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar_User";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Leaderboard() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    // leaderboard fetch logic
    const fetchLeaderboard = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/leaderboard/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("authToken")}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch leaderboard");
        }

        const data = await response.json();
        setScores(data);
      } catch (error) {
        console.error("Error fetching leaderboard data:", error);
      }
    };

    fetchLeaderboard();
  }, []);

  const sortedScores = [...scores].sort((a, b) => b.points - a.points);

  return (
    <div className="flex flex-col min-h-screen bg-[radial-gradient(circle_at_top,_#d1fae5,_#ffffff_60%,_#d1fae5)] text-gray-800">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-green-600">
          Leaderboard
        </h1>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
            <thead className="bg-green-500 text-white">
              <tr>
                <th className="py-4 px-6 text-left text-sm font-semibold uppercase tracking-wider">
                  Rank
                </th>
                <th className="py-4 px-6 text-left text-sm font-semibold uppercase tracking-wider">
                  Name
                </th>
                <th className="py-4 px-6 text-left text-sm font-semibold uppercase tracking-wider">
                  Score
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedScores.map((player, index) => (
                <tr
                  key={player.user}
                  className="border-b hover:bg-green-50 transition"
                >
                  <td className="py-4 px-6">{index + 1}</td>
                  <td className="py-4 px-6">{player.user}</td>
                  <td className="py-4 px-6">{player.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-10">
          <Link
            to="/"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow"
          >
            Back to Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Leaderboard;