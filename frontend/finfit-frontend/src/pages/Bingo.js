import React, { useState, useEffect} from "react";
import Navbar_User from "../components/Navbar_User";
import Footer from "../components/Footer";
const API_BASE = process.env.REACT_APP_API_URL;


const topics = [
  "Budgeting Basics",
  "Credit Scores",
  "Savings Strategies",
  "Investing 101",
  "Debt Management",
  "Compound Interest",
  "Retirement Planning",
  "Emergency Fund",
  "Stock Market Basics",
  "Tax Planning",
  "Frugality Tips",
  "Expense Tracking",
  "Mortgage Education",
  "Financial Independence",
  "Passive Income",
  "Inflation Effects",
  "Side Hustles",
  "Cryptocurrency Basics",
  "Loan Types",
  "Insurance Essentials",
  "401(k) and IRAs",
  "Economic Cycles",
  "Net Worth Calculation",
  "Banking Services",
  "Credit Card Management",
];

const generateBingoBoard = () => {
  const shuffled = [...topics].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 25).map((topic, index) => ({
    id: index,
    text: topic,
    marked: false,
  }));
};
// returns true if any row, col, or diagonal of 5 is fully marked
const checkBingo = (board) => {
  const size = 5;
  // rows
  for (let r = 0; r < size; r++) {
    if (board.slice(r * size, r * size + size).every(c => c.marked))
      return true;
  }
  // cols
  for (let c = 0; c < size; c++) {
    if (Array.from({ length: size }, (_, i) => board[c + i * size]).every(c => c.marked))
      return true;
  }
  // diagonals
  if (Array.from({ length: size }, (_, i) => board[i * (size + 1)]).every(c => c.marked))
    return true;
  if (Array.from({ length: size }, (_, i) => board[(i + 1) * (size - 1)]).every(c => c.marked))
    return true;
  return false;
};

function Bingo() {
  // const [board, setBoard] = useState(generateBingoBoard());
  const [board, setBoard]       = useState(generateBingoBoard());
  const [hasAwarded, setHasAwarded] = useState(false);
  // const toggleMark = (id) => {
  //   setBoard((prevBoard) =>
  //     prevBoard.map((cell) =>
  //       cell.id === id ? { ...cell, marked: !cell.marked } : cell
  //     )
  //   );
  // };
  const toggleMark = (id) => {
  setBoard((prev) => {
    const next = prev.map((cell) =>
      cell.id === id ? { ...cell, marked: !cell.marked } : cell
    );

    // if we just hit Bingo and haven't awarded yet:
    if (checkBingo(next) && !hasAwarded) {
      setHasAwarded(true);
      fetch(`${API_BASE}/api/award_points/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${localStorage.getItem("authToken")}`
        },
        body: JSON.stringify({ points: 50 })
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Awarded 50 points, new total:", data.points);
        })
        .catch((err) => console.error("Award points failed:", err));
    }

    return next;
  });
};


  const markedCount = board.filter((cell) => cell.marked).length;

  return (
    <div className="min-h-screen flex flex-col bg-[radial-gradient(circle_at_top,_#d1fae5,_#ffffff_60%,_#d1fae5)]">
      <Navbar_User />
      <main className="flex-grow px-4 sm:px-10 py-10 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-black">
          Financial Literacy Bingo
        </h1>
        <h3>
          Directions: Welcome to Financial Literacy Bingo! Click on each square
          as you encounter or act on the financial topic displayed. Your goal is
          to mark 5 topics in a row (vertically, horizontally, or diagonally) to
          win 50 points! Use this game as a fun way to test your knowledge or
          spark discussion about important money concepts. Hit "Reset Board" at
          any time to shuffle and start fresh!
        </h3>
        <p className="text-center mb-4 text-gray-600">
          Marked: <span className="font-semibold">{markedCount}</span> / 25
        </p>

        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 bg-gray-100 p-4 rounded-lg shadow-lg"
          role="grid"
          aria-label="Financial literacy bingo board"
        >
          {board.map((cell) => (
            <div
              key={cell.id}
              role="button"
              tabIndex={0}
              aria-pressed={cell.marked}
              onClick={() => toggleMark(cell.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") toggleMark(cell.id);
              }}
              className={`p-4 text-center font-medium rounded-lg cursor-pointer select-none transition-all duration-200 outline-none 
                ${
                  cell.marked
                    ? "bg-green-500 text-white"
                    : "bg-white hover:bg-gray-200"
                }`}
            >
              {cell.text}
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button
            className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-200"
            //onClick={() => setBoard(generateBingoBoard())}
             onClick={() => {
                setBoard(generateBingoBoard());
                setHasAwarded(false);
               }}
          >
            {" "}
            Reset Board{" "}
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Bingo;
