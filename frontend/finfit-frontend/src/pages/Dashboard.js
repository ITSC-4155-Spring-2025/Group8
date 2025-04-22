//AI Generated Contribution

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Trophy, BookOpen, Gamepad2, User } from "lucide-react";

import Navbar_User from "../components/Navbar_User";
import Footer from "../components/Footer";

import BingoImg from "../assets/images/bingo.jpeg";
import MatchingImg from "../assets/images/matching.jpeg";
import SprintImg from "../assets/images/sprint.jpeg";
import TriviaImg from "../assets/images/trivia.jpeg";

function Dashboard() {
  const [userData, setUserData] = useState({
    first_name: "",
    points: 0,
    recent_activity: [],
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await fetch("http://localhost:8000/api/user/profile/", {
          headers: {
            Authorization: `Token ${token}`,
          },
        });

        if (!response.ok) throw new Error("Failed to fetch user data");
        const data = await response.json();

        setUserData({
          first_name: data.first_name,
          points: data.points,
          recent_activity: data.recent_activity || [],
        });
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="bg-[radial-gradient(circle_at_top,_#d1fae5,_#ffffff_60%,_#d1fae5)] min-h-screen">
      <Navbar_User />

      <div className="container mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold text-green-600 mb-4">
          Welcome, {userData.first_name} 🌟
        </h1>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center">
            <Trophy className="text-yellow-500 mb-2" size={32} />
            <h2 className="text-xl font-semibold text-gray-700">Points</h2>
            <p className="text-3xl font-bold text-green-600">{userData.points}</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center">
            <Gamepad2 className="text-green-500 mb-2" size={32} />
            <h2 className="text-xl font-semibold text-gray-700">Games Completed</h2>
            <p className="text-3xl font-bold text-green-600">2</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center">
            <BookOpen className="text-blue-500 mb-2" size={32} />
            <h2 className="text-xl font-semibold text-gray-700">Lessons Learned</h2>
            <p className="text-3xl font-bold text-green-600">3</p>
          </div>
        </div>

        {/* Quick Actions with Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Link
            to="/games/Bingo"
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
          >
            <img src={BingoImg} alt="Bingo" className="w-full h-40 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold text-green-700">Play Bingo</h3>
              <p className="text-sm text-gray-600">Reinforce terms & topics!</p>
            </div>
          </Link>
          <Link
            to="/games/Memory"
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
          >
            <img src={MatchingImg} alt="Memory" className="w-full h-40 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold text-green-700">Memory Match</h3>
              <p className="text-sm text-gray-600">Match terms & meanings.</p>
            </div>
          </Link>
          <Link
            to="/games/Savings-sprint"
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
          >
            <img src={SprintImg} alt="Sprint" className="w-full h-40 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold text-green-700">Savings Sprint</h3>
              <p className="text-sm text-gray-600">Simulate smart spending!</p>
            </div>
          </Link>
          <Link
            to="/games/Trivia"
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
          >
            <img src={TriviaImg} alt="Trivia" className="w-full h-40 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold text-green-700">Trivia Wheel</h3>
              <p className="text-sm text-gray-600">Test what you’ve learned!</p>
            </div>
          </Link>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Recent Activity
          </h2>
          {userData.recent_activity.length === 0 ? (
            <p className="text-gray-500">No recent activity yet. Time to level up! 🚀</p>
          ) : (
            <ul className="space-y-3 list-disc list-inside">
              {userData.recent_activity.map((activity, index) => (
                <li key={index} className="text-gray-700">
                  {activity}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Dashboard;

//AI Generated Cintribution