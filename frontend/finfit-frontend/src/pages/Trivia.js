import React, { useState, useEffect } from "react";
import { Wheel } from "react-custom-roulette";
import Navbar_User from "../components/Navbar_User";
import Footer from "../components/Footer";
import AlertModal from "../components/AlertModal";

const questions = {
  Easy: [
    {
      question: "What is the term for money earned from work?",
      options: ["Income", "Interest", "Dividend", "Capital"],
      correctAnswer: "Income",
    },
    {
      question: "What is a budget?",
      options: [
        "A financial plan for income and expenses",
        "A bank account",
        "A type of credit card",
        "A loan document",
      ],
      correctAnswer: "A financial plan for income and expenses",
    },
    {
      question: "Which of these is NOT a typical banking product?",
      options: [
        "Stock options",
        "Savings account",
        "Checking account",
        "Certificate of deposit",
      ],
      correctAnswer: "Stock options",
    },
    {
      question: "What does ATM stand for?",
      options: [
        "Automatic Teller Machine",
        "Automated Tax Machine",
        "Available Transaction Mode",
        "Authorized Transfer Mechanism",
      ],
      correctAnswer: "Automatic Teller Machine",
    },
    {
      question: "What is the purpose of a savings account?",
      options: [
        "To save money and earn interest",
        "To buy groceries",
        "To apply for loans",
        "To pay taxes",
      ],
      correctAnswer: "To save money and earn interest",
    },
    {
      question: "What is the most common way to pay for things online?",
      options: ["Credit card", "Cash", "Checks", "Barter"],
      correctAnswer: "Credit card",
    },
    {
      question: "Which is a form of income?",
      options: ["Allowance", "Coupon", "Loan", "Debt"],
      correctAnswer: "Allowance",
    },
    {
      question: "What is the term for money you owe?",
      options: ["Debt", "Credit", "Savings", "Asset"],
      correctAnswer: "Debt",
    },
    {
      question: "What does a piggy bank help kids learn?",
      options: [
        "Saving money",
        "Spending habits",
        "Borrowing rules",
        "Filing taxes",
      ],
      correctAnswer: "Saving money",
    },
    {
      question: "What does it mean to live within your means?",
      options: [
        "Spending less than you earn",
        "Using all your credit",
        "Having no expenses",
        "Earning minimum wage",
      ],
      correctAnswer: "Spending less than you earn",
    },
    {
      question: "Why should you track your expenses?",
      options: [
        "To understand where your money goes",
        "To impress friends",
        "To spend more money",
        "To avoid taxes",
      ],
      correctAnswer: "To understand where your money goes",
    },
    {
      question: "What’s a good financial habit?",
      options: [
        "Saving money regularly",
        "Spending every dollar",
        "Ignoring bills",
        "Taking random loans",
      ],
      correctAnswer: "Saving money regularly",
    },
    {
      question: "Which card lets you borrow money?",
      options: ["Credit card", "Gift card", "ATM card", "Debit card"],
      correctAnswer: "Credit card",
    },
    {
      question: "What do you pay to borrow money?",
      options: ["Interest", "Dividends", "Salary", "Wages"],
      correctAnswer: "Interest",
    },
    {
      question: "What should you do before making a big purchase?",
      options: [
        "Compare prices and budget",
        "Ask friends",
        "Spend quickly",
        "Guess the price",
      ],
      correctAnswer: "Compare prices and budget",
    },
  ],

  Medium: [
    {
      question: "What is a credit utilization ratio?",
      options: [
        "The percentage of credit used relative to your limit",
        "The number of credit cards you own",
        "Your total outstanding loan amount",
        "Your credit score",
      ],
      correctAnswer: "The percentage of credit used relative to your limit",
    },
    {
      question: "What is an emergency fund?",
      options: [
        "Money saved for unplanned expenses",
        "Investment for high returns",
        "Tax savings account",
        "A travel fund",
      ],
      correctAnswer: "Money saved for unplanned expenses",
    },
    {
      question: "What is a stock dividend?",
      options: [
        "A fee for holding stocks",
        "Profit shared with shareholders",
        "Money paid to buy stocks",
        "A penalty for selling stocks",
      ],
      correctAnswer: "Profit shared with shareholders",
    },
    {
      question: "Which account usually earns the most interest?",
      options: [
        "Savings account",
        "Checking account",
        "Money market account",
        "Credit account",
      ],
      correctAnswer: "Money market account",
    },
    {
      question: "What is a 401(k)?",
      options: [
        "A savings plan for college",
        "An employer-sponsored retirement plan",
        "A tax account",
        "A loan option",
      ],
      correctAnswer: "An employer-sponsored retirement plan",
    },
    {
      question: "What does diversification mean in investing?",
      options: [
        "Investing in one sector",
        "Spreading investments to reduce risk",
        "Buying expensive stocks",
        "Avoiding all risk",
      ],
      correctAnswer: "Spreading investments to reduce risk",
    },
    {
      question: "What is net income?",
      options: [
        "Gross income before taxes",
        "Income after all deductions",
        "Company profits",
        "Revenue before expenses",
      ],
      correctAnswer: "Income after all deductions",
    },
    {
      question: "Which loan type usually has the lowest interest?",
      options: [
        "Personal loan",
        "Credit card loan",
        "Student loan",
        "Payday loan",
      ],
      correctAnswer: "Student loan",
    },
    {
      question: "What does 'liquidity' refer to in finance?",
      options: [
        "Water in assets",
        "Ease of converting to cash",
        "Amount of savings",
        "Stock volatility",
      ],
      correctAnswer: "Ease of converting to cash",
    },
    {
      question: "What is a mutual fund?",
      options: [
        "A group loan",
        "An investment pool managed by professionals",
        "A type of credit union",
        "A savings bond",
      ],
      correctAnswer: "An investment pool managed by professionals",
    },
    {
      question: "What is the grace period on a credit card?",
      options: [
        "Time to repay a loan",
        "Days before interest is charged",
        "Duration of the credit limit",
        "Loan repayment period",
      ],
      correctAnswer: "Days before interest is charged",
    },
    {
      question: "What is inflation?",
      options: [
        "A rise in general prices",
        "A decrease in money supply",
        "Stable economy",
        "Rising income",
      ],
      correctAnswer: "A rise in general prices",
    },
    {
      question: "Which form of payment builds credit history?",
      options: ["Cash", "Debit card", "Credit card", "Gift card"],
      correctAnswer: "Credit card",
    },
    {
      question: "What is a financial goal?",
      options: [
        "A goal in sports",
        "Plan to improve finances",
        "Fixed expense",
        "Unexpected income",
      ],
      correctAnswer: "Plan to improve finances",
    },
    {
      question: "What is equity in a home?",
      options: [
        "The amount owed on the mortgage",
        "The home's market value",
        "Ownership value in the home",
        "Property taxes paid",
      ],
      correctAnswer: "Ownership value in the home",
    },
  ],

  Hard: [
    {
      question: "What is the primary benefit of a Roth IRA?",
      options: [
        "Tax-free withdrawals in retirement",
        "Employer match contributions",
        "High interest rates",
        "Instant returns",
      ],
      correctAnswer: "Tax-free withdrawals in retirement",
    },
    {
      question: "What is amortization?",
      options: [
        "Paying off debt in fixed installments",
        "Stock price changes",
        "Asset depreciation",
        "Loan consolidation",
      ],
      correctAnswer: "Paying off debt in fixed installments",
    },
    {
      question: "Which form of investment is most volatile?",
      options: ["Bonds", "Mutual funds", "Stocks", "Savings accounts"],
      correctAnswer: "Stocks",
    },
    {
      question: "What does the term 'capital gain' refer to?",
      options: [
        "Interest from savings",
        "Profit from selling an asset",
        "Business revenue",
        "Tax deduction",
      ],
      correctAnswer: "Profit from selling an asset",
    },
    {
      question: "What is the purpose of an index fund?",
      options: [
        "Track a specific market index",
        "Invest in startup companies",
        "Avoid taxation",
        "Provide loans",
      ],
      correctAnswer: "Track a specific market index",
    },
    {
      question: "What is a hedge fund?",
      options: [
        "A high-risk, high-return pooled investment fund",
        "A farming account",
        "Government savings plan",
        "College loan plan",
      ],
      correctAnswer: "A high-risk, high-return pooled investment fund",
    },
    {
      question: "What does the P/E ratio indicate?",
      options: [
        "Profit to equity",
        "Price to earnings",
        "Portfolio efficiency",
        "Percent error",
      ],
      correctAnswer: "Price to earnings",
    },
    {
      question: "What is a financial derivative?",
      options: [
        "An instrument based on an underlying asset",
        "A bank account",
        "A savings bond",
        "A tax document",
      ],
      correctAnswer: "An instrument based on an underlying asset",
    },
    {
      question: "What is a margin account?",
      options: [
        "An account for borrowing money to invest",
        "A savings account",
        "A tax-free account",
        "An insurance policy",
      ],
      correctAnswer: "An account for borrowing money to invest",
    },
    {
      question: "What is rebalancing a portfolio?",
      options: [
        "Adjusting asset allocation",
        "Selling all investments",
        "Getting a loan",
        "Switching banks",
      ],
      correctAnswer: "Adjusting asset allocation",
    },
    {
      question: "What is the SEC?",
      options: [
        "Securities and Exchange Commission",
        "Student Education Council",
        "Savings and Earnings Committee",
        "State Employment Council",
      ],
      correctAnswer: "Securities and Exchange Commission",
    },
    {
      question: "What does 'short selling' mean?",
      options: [
        "Buying low and selling high",
        "Selling borrowed stocks to buy later",
        "Selling shares at a loss",
        "Avoiding tax on stock",
      ],
      correctAnswer: "Selling borrowed stocks to buy later",
    },
    {
      question: "Which tax form reports investment income?",
      options: ["W-2", "1040", "1099", "W-4"],
      correctAnswer: "1099",
    },
    {
      question: "What does 'beta' measure in a stock?",
      options: [
        "Volatility relative to the market",
        "Company earnings",
        "Tax rate",
        "Loan interest",
      ],
      correctAnswer: "Volatility relative to the market",
    },
    {
      question: "What is a bond yield?",
      options: [
        "Rate of return on a bond",
        "Loan amount",
        "Government subsidy",
        "Stock profit",
      ],
      correctAnswer: "Rate of return on a bond",
    },
  ],
};

const data = [
  {
    option: "Easy (10 pts)",
    style: { backgroundColor: "lightgreen", textColor: "white" },
    difficulty: "Easy",
    points: 10,
  },
  {
    option: "Medium (30 pts)",
    style: { backgroundColor: "green", textColor: "white" },
    difficulty: "Medium",
    points: 30,
  },
  {
    option: "Hard (50 pts)",
    style: { backgroundColor: "darkgreen", textColor: "white" },
    difficulty: "Hard",
    points: 50,
  },
];

function Trivia() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [difficulty, setDifficulty] = useState(null);
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [earnedPoints, setEarnedPoints] = useState(0);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  useEffect(() => {
    if (difficulty) {
      const questionsDifficulty = questions[difficulty];
      const randomIndex = Math.floor(
        Math.random() * questionsDifficulty.length
      );
      setQuestion(questionsDifficulty[randomIndex]);
    }
  }, [difficulty]);

  const handleAnswerSelect = (answer) => {
    if (!isAnswered) {
      setSelectedAnswer(answer);
      setIsAnswered(true);

      if (answer === question.correctAnswer) {
        const pts = data[prizeNumber].points;
        setScore((prev) => prev + pts);
        setEarnedPoints(pts);

        const token = localStorage.getItem("authToken");
        fetch("http://localhost:8000/api/award_points/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
          body: JSON.stringify({ points: pts }),
        })
          .then((res) => res.json())
          .then((data) => {
            setModalMessage(`✅ Correct! You earned ${pts} points!`);
            setShowModal(true);
          })
          .catch(console.error);
      } else {
        setModalMessage("❌ Incorrect answer. Try again next time!");
        setShowModal(true);
      }
    }
  };

  return (
    <div className="bg-[radial-gradient(circle_at_top,_#d1fae5,_#ffffff_60%,_#d1fae5)]">
      <Navbar_User />
      <AlertModal
        show={showModal}
        onClose={() => setShowModal(false)}
        message={modalMessage}
      />

      <div className="flex flex-col justify-center items-center py-10 h-full">
        <h1 className="font-sora text-4xl mt-8 my-4 ">
          Welcome To The{" "}
          <span className="font-bold text-green-600">Trivia Game!</span>
        </h1>
        {!question && (
          <h2 className="font-sora mb-4">Spin the Wheel to Begin</h2>
        )}

        {question && (
          <div className="bg-white shadow-lg rounded-xl p-10 px-20 mb-4 w-[500px] h-[500px]">
            <h2 className="font-sora font-bold text-lg mb-4">Score: {score}</h2>
            <h3 className="font-sora text-green-600 text-lg mb-4">
              {question.question}
            </h3>

            <div className="flex flex-col space-y-2">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  className={`font-sora px-4 py-2 rounded-md transition-colors duration-300 ease-in-out ${
                    selectedAnswer === option
                      ? option === question.correctAnswer
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                      : isAnswered && option === question.correctAnswer
                      ? "bg-green-200 border-2 border-green-500"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                  onClick={() => handleAnswerSelect(option)}
                  disabled={isAnswered}
                >
                  {option}
                </button>
              ))}
            </div>

            {isAnswered && (
              <div className="mt-6 flex justify-between">
                <p
                  className={`font-semibold ${
                    selectedAnswer === question.correctAnswer
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {selectedAnswer === question.correctAnswer
                    ? "Correct!"
                    : "Incorrect!"}
                </p>
                <button
                  className="px-4 py-2 bg-green-400 text-white rounded-md hover:bg-green-600 transition-colors"
                  onClick={() => {
                    setQuestion(null);
                    setDifficulty(null);
                    setSelectedAnswer(null);
                    setIsAnswered(false);
                  }}
                >
                  Spin Again
                </button>
              </div>
            )}
          </div>
        )}

        {!question && (
          <div className="flex flex-col py-10 items-center">
            <Wheel
              mustStartSpinning={mustSpin}
              prizeNumber={prizeNumber}
              data={data}
              outerBorderWidth={0}
              radiusLineColor="white"
              radiusLineWidth={2}
              onStopSpinning={() => {
                setMustSpin(false);
                setDifficulty(data[prizeNumber].difficulty);
              }}
            />
            <button
              className="font-sora mt-4 mx-2 px-7 py-4 bg-green-500 text-white shadow-md hover:bg-green-400 transition-all duration-300 ease-in-out rounded-md inline-block w-auto max-w-fit"
              onClick={handleSpinClick}
            >
              SPIN
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Trivia;
