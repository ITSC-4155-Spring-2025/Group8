
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar_User';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function Leaderboard() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const initialScores = [
      { id: 1, name: 'Player 1', score: 100 },
      { id: 2, name: 'Player 2', score: 80 },
      { id: 3, name: 'Player 3', score: 100 },
    ];
    setScores(initialScores);
  }, []);

  const sortedScores = [...scores].sort((a, b) => b.score - a.score);

  return (
    <div className="flex flex-col min-h-screen bg-[radial-gradient(circle_at_top,_#d1fae5,_#ffffff_60%,_#d1fae5)] text-gray-800">
      
      <Navbar />

     
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-green-600">Leaderboard</h1>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
            <thead className="bg-green-500 text-white">
              <tr>
                <th className="py-4 px-6 text-left text-sm font-semibold uppercase tracking-wider">Rank</th>
                <th className="py-4 px-6 text-left text-sm font-semibold uppercase tracking-wider">Name</th>
                <th className="py-4 px-6 text-left text-sm font-semibold uppercase tracking-wider">Score</th>
              </tr>
            </thead>
            <tbody>
              {sortedScores.map((player, index) => (
                <tr key={player.id} className="border-b hover:bg-green-50 transition">
                  <td className="py-4 px-6">{index + 1}</td>
                  <td className="py-4 px-6">{player.name}</td>
                  <td className="py-4 px-6">{player.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        
        <div className="text-center mt-10">
          <Link to="/" className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow">
            Back to Home
          </Link>
        </div>
      </main>

     
      <Footer />
    </div>
  );
}

export default Leaderboard;

