import { Link } from "react-router-dom";
import { User } from "lucide-react";
import React, { useState, useEffect } from "react";

function Navbar_User() {
  const [firstName, setFirstName] = useState("");
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await fetch(
          "http://localhost:8000/api/user/profile/",
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );

        if (!response.ok) throw new Error("Failed to fetch user data");

        const data = await response.json();
        setFirstName(data.first_name);
      } catch (error) {
        console.error("Error loading user profile:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <nav className="bg-white shadow-md border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-6">
        <h1 className="text-3xl font-extrabold text-green-600 tracking-wide">
          {" "}
          FinFit
        </h1>
        <ul className="hidden md:flex space-x-6">
          <Link
            to="/Leaderboard"
            className="text-gray-700 font-medium hover:text-green-600 
            transition-all duration-300"
          >
            <span>Leaderboard</span>
          </Link>
          <Link
            to="/Games"
            className="text-gray-700 font-medium hover:text-green-600 
            transition-all duration-300"
          >
            <span>Games</span>
          </Link>
          <Link
            to="/Learning"
            className="text-gray-700 font-medium hover:text-green-600 
            transition-all duration-300"
          >
            <span>Learning</span>
          </Link>
        </ul>

        <Link
          to="/User"
          className="hidden md:flex items-center space-x-2 bg-green-600 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:bg-green-700 transition-all duration-300"
        >
          <User size={20} />
          <h2>Hi {firstName}!</h2>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar_User;
