import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Leaderboard() {

  const [scores, setScores] = useState([]);

  useEffect(() => {
    const initialScores = [
      { id: 1, name: 'Player 1', score: 100 },
      { id: 2, name: 'Player 2', score: 80 },
      { id: 3, name: 'Player 3', score: 90 },
    ];
    setScores(initialScores);
  }, []);

  const sortedScores = [...scores].sort((a, b) => b.score - a.score);

  return (
    <div>
        <Navbar />
      <h1>Leaderboard</h1>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {sortedScores.map((player, index) => (
            <tr key={player.id}>
              <td>{index + 1}</td>
              <td>{player.name}</td>
              <td>{player.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
}
