import { Link } from "react-router-dom";
import { User } from "lucide-react";

function UserNavBar() {
  return (
    <nav className="bg-white/50 backdrop-blur-md shadow-md border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-6">
        <h1 className="text-3xl mr-10 -ml-25 font-extrabold text-green-600 tracking-wide">
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
          to="/"
          className="hidden md:flex ml-8 items-center space-x-2 bg-red-500 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:bg-red-700 transition-all duration-300"
        >
          <User size={20} />
          <span className="mr-5">Sign Out</span>
        </Link>
      </div>
    </nav>
  );
}

export default UserNavBar;
