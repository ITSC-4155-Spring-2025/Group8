import { useNavigate } from "react-router-dom";
import Navbar_User from "../components/Navbar_User";
import BingoImg from "../assets/images/bingo.jpeg";
import MemoryImg from "../assets/images/matching.jpeg";
import SavingsImg from "../assets/images/sprint.jpeg";
import TriviaImg from "../assets/images/trivia.jpeg";

const games = [
  { 
    id: "bingo",
    title: "Financial Bingo",
    description: "Mark financial terms on your bingo card as you learn key concepts.", 
    image: BingoImg
 },
 {
    id: "memory",
    title: "Money Match",
    description: "Match financial terms with their definitions in this memory game.",
    image: MemoryImg
  },
  {
    id: "savings-sprint",
    title: "Savings Sprint",
    description: "Make smart financial choices throughout the month to save money.",
    image: SavingsImg 
  },
  {
    id: "trivia",
    title: "Financial Trivia Wheel",
    description: "Spin the wheel and answer financial literacy questions!",
    image: TriviaImg    
  },
];
function Games() {
    const navigate = useNavigate();
    
  return (
    <div>
    <Navbar_User />
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Choose a Financial Game</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {games.map((game) => (
          <div
            key={game.id}
            className="border rounded-lg p-4 shadow-md cursor-pointer hover:shadow-xl transition duration-300"
            onClick={() => navigate(`/games/${game.id}`)}
          >
            <img src={game.image} alt={game.title} className="w-full h-30 object-cover rounded-md" />
            <h2 className="text-xl font-semibold mt-4">{game.title}</h2>
            <p className="text-gray-600 mt-2">{game.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);
}

export default Games; 