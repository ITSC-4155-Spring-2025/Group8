import React, { useState, useEffect } from "react";
import Navbar_User from "../components/NavbarUser";
import Footer from "../components/Footer";
import AlertModal from "../components/AlertModal";
const API_BASE = process.env.REACT_APP_API_URL;

const topics = [
  "Saved at least $5 this week",
  "Tracked all expenses for the week",
  "Reviewed your budget or spending plan",
  "Added money to your savings account",
  "Skipped one unnecessary purchase",
  "Brought lunch from home all week",
  "Used a cashback or rewards app this week",
  "Put money from a side hustle into savings",
  "Watched or read one financial education resource",
  "Used a budgeting app to review weekly spending",
  "Saved a percentage of weekly earnings",
  "Compared prices before making a purchase",
  "Logged into your bank account to check balances",
  "Transferred money into an investment account",
  "Spent less than you earned this week",
  "Chose a free or low-cost activity instead of spending",
  "Avoided impulse purchases for the entire week",
  "Added to your financial goals list or tracker",
  "Paid off part of a credit card or loan (if applicable)",
  "Talked to someone about a money goal or question",
  "Used coupons or promo codes when shopping",
  "Tracked subscriptions or recurring payments",
  "Read or watched a video about credit or investing",
  "Logged your weekly financial wins in a journal",
  "Reflected on one spending habit to improve",
];

const generateBingoBoard = () => {
  const shuffled = [...topics].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 25).map((topic, index) => ({
    id: index,
    text: topic,
    marked: false,
  }));
};

const checkBingo = (board) => {
  const size = 5;

  for (let r = 0; r < size; r++) {
    if (board.slice(r * size, r * size + size).every((c) => c.marked))
      return true;
  }

  for (let c = 0; c < size; c++) {
    if (
      Array.from({ length: size }, (_, i) => board[c + i * size]).every(
        (c) => c.marked
      )
    )
      return true;
  }

  if (
    Array.from({ length: size }, (_, i) => board[i * (size + 1)]).every(
      (c) => c.marked
    )
  )
    return true;

  if (
    Array.from({ length: size }, (_, i) => board[(i + 1) * (size - 1)]).every(
      (c) => c.marked
    )
  )
    return true;

  return false;
};

function Bingo() {
  const [board, setBoard] = useState(generateBingoBoard());
  const [hasAwarded, setHasAwarded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handlePointsAwarded = (points) => {
    setAlertMessage(`🎉 Bingo! You have ${points} points!`);
    setShowModal(true);
    setTimeout(() => {
      setBoard(generateBingoBoard());
      setHasAwarded(false);
    }, 2500);
  };

  const toggleMark = (id) => {
    setBoard((prev) => {
      const next = prev.map((cell) =>
        cell.id === id ? { ...cell, marked: !cell.marked } : cell
      );

      if (checkBingo(next) && !hasAwarded) {
        setHasAwarded(true);
        fetch(`http://localhost:8000/api/award_points/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${localStorage.getItem("authToken")}`,
          },
          body: JSON.stringify({ points: 50 }),
        })
          .then((res) => res.json())
          .then((data) => handlePointsAwarded(data.points))
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
          win 50 points! Hit "Reset Board" at any time to shuffle and start
          fresh!
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
            onClick={() => {
              setBoard(generateBingoBoard());
              setHasAwarded(false);
            }}
          >
            Reset Board
          </button>
        </div>
      </main>

      <Footer />

      <AlertModal
        show={showModal}
        message={alertMessage}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
}

export default Bingo;
