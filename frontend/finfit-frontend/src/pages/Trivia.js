import React from 'react'
import { Wheel } from 'react-custom-roulette'
import { useState, useEffect } from 'react'
import Navbar_User from "../components/Navbar_User";
import Footer from "../components/Footer";

const questions = {
    Easy: [
      {
        question: "What is the term for money earned from work?",
        options: ["Income", "Interest", "Dividend", "Capital"],
        correctAnswer: "Income"
      },
      {
        question: "What is a budget?",
        options: ["A financial plan for income and expenses", "A bank account", "A type of credit card", "A loan document"],
        correctAnswer: "A financial plan for income and expenses"
      },
      {
        question: "Which of these is NOT a typical banking product?",
        options: ["Stock options", "Savings account", "Checking account", "Certificate of deposit"],
        correctAnswer: "Stock options"
      }
    ],
    Medium: [
      {
        question: "What is compound interest?",
        options: ["Interest earned on both the principal and accumulated interest", "Interest paid only on the principal", "A fee charged by banks", "A type of bank account"],
        correctAnswer: "Interest earned on both the principal and accumulated interest"
      },
      {
        question: "What does APR stand for?",
        options: ["Annual Percentage Rate", "Applied Payment Return", "Asset Protection Reserve", "Account Processing Ratio"],
        correctAnswer: "Annual Percentage Rate"
      },
      {
        question: "Which investment typically carries the highest risk?",
        options: ["Individual stocks", "Government bonds", "Certificates of deposit", "Money market accounts"],
        correctAnswer: "Individual stocks"
      }
    ],
    Hard: [
      {
        question: "What is dollar-cost averaging?",
        options: ["Investing a fixed amount at regular intervals regardless of price", "Converting foreign currency to dollars", "A taxation method for investments", "Calculating inflation rates"],
        correctAnswer: "Investing a fixed amount at regular intervals regardless of price"
      },
      {
        question: "Which of these is NOT a factor in determining a credit score?",
        options: ["Your education level", "Payment history", "Credit utilization", "Length of credit history"],
        correctAnswer: "Your education level"
      },
      {
        question: "What is a fiduciary duty in financial advising?",
        options: ["Legal obligation to act in the client's best interest", "Requirement to offer diverse investment options", "Duty to provide quarterly reports", "Obligation to achieve positive returns"],
        correctAnswer: "Legal obligation to act in the client's best interest"
      }
    ]
  };

const data = [
    { option: 'Easy', style: { backgroundColor: 'lightgreen', textColor: 'white' } },
    { option: 'Medium', style: { backgroundColor: 'green', textColor: 'white' } },
    { option: 'Hard'  , style: { backgroundColor: 'darkgreen', textColor: 'white' } },
]


function Trivia() {

  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [difficulty, setDifficulty] = useState(null);
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);


  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
      }
  }

  useEffect(() => {
    if (difficulty) {
      const questionsDifficulty = questions[difficulty]; 
      const randomIndex = Math.floor(Math.random() * questionsDifficulty.length);
      setQuestion(questionsDifficulty[randomIndex]);
    }
  }, [difficulty]);
  

  const handleAnswerSelect = (answer) => 
    {
      if(!isAnswered){
        setSelectedAnswer(answer);
        setIsAnswered(true);

        if (answer === question.correctAnswer) {
          setScore(score + 1);
        }
      }
    }
    

  return (
    <div>
      <Navbar_User />

      <div className='flex flex-col justify-center items-center py-10 h-full'>

        <h1 className="font-sora text-4xl mt-8 my-4 ">Welcome To The <span className='font-bold text-green-600'>Trivia Game!</span></h1>
          {!question && (
            <h2 className="font-sora mb-4">Spin the Wheel to Begin</h2>
          )}

        {question && (
            
          <div className="bg-white  shadow-lg rounded-xl p-10 px-20 mb-4 w-[500px] h-[400px]">
            <h2 className="font-sora font-bold text-lg mb-4">Score: {score}</h2>
            <h3 className="font-sora text-green-600 text-lg mb-4">{question.question}</h3>

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
                          ? 'bg-green-200 border-2 border-green-500'
                          : 'bg-gray-100 hover:bg-gray-200'
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
              <p className={`font-semibold ${selectedAnswer === question.correctAnswer ? 'text-green-600' : 'text-red-600'}`}>
                {selectedAnswer === question.correctAnswer ? 'Correct!' : 'Incorrect!'}
              </p>
                <div className="flex space-x-2">
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
              </div>
              )}


            </div>               
            )}

          {!question && (
            <div className='flex flex-col py-10 items-center'>  
                <Wheel
                  mustStartSpinning={mustSpin}
                  prizeNumber={prizeNumber}
                  data={data}
                  outerBorderWidth={0}
                  radiusLineColor="white"
                  radiusLineWidth={2}
                  onStopSpinning={() => {
                    setMustSpin(false);
                    setDifficulty(data[prizeNumber].option);
                  } } />
                  <button className="font-sora mt-4 mx-2 px-7 py-4 bg-green-500 text-white shadow-md hover:bg-green-400 transition-all duration-300 ease-in-out rounded-md inline-block w-auto max-w-fit"
                    onClick={handleSpinClick}>SPIN
                  </button>
            </div>
          )}

              
          

        </div>

        <Footer />
    </div>
  );

}

export default Trivia;