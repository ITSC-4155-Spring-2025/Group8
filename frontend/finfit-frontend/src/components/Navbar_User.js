import { Link } from "react-router-dom";
import { User } from "lucide-react";

function Navbar_User() {
  return (
    <nav className="bg-white shadow-md border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-6">

        <h1 className="text-3xl font-extrabold text-green-600 tracking-wide"> FinFit</h1>
        <ul className="hidden md:flex space-x-6">
            <Link to="/Leaderboard" className="text-gray-700 font-medium hover:text-green-600 
            transition-all duration-300">
                <span>Leaderboard</span>
            </Link>
            <Link to="/Games" className="text-gray-700 font-medium hover:text-green-600 
            transition-all duration-300">
                <span>Games</span>
            </Link>
            <Link to="/Learning" className="text-gray-700 font-medium hover:text-green-600 
            transition-all duration-300">
                <span>Learning</span>
            </Link>
        </ul>
        
        <Link
          to="/User"
          className="hidden md:flex items-center space-x-2 bg-green-600 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:bg-green-700 transition-all duration-300">
          <User size={20} />
          <span>Hi Dhruv!</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar_User;
