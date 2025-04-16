import React, { useState } from "react";
import Navbar_User from "../components/Navbar_User";
import Footer from "../components/Footer";

function Learning() {
  const [learningPassage, setLearningPassage] = useState("");
  const [keyTakeaways, setKeyTakeaways] = useState([]);
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizFeedback, setQuizFeedback] = useState("");

  const generateLearningContent = () => {
    const passage = `
      Budgeting is a fundamental skill for managing your finances. 
      It involves tracking your income and expenses to ensure you're 
      spending within your means and saving for the future. A popular 
      budgeting method is the 50/30/20 rule, where 50% of your income 
      goes to needs, 30% to wants, and 20% to savings and debt repayment.
      Budgeting is a fundamental skill for managing your finances. It involves 
      tracking your income and expenses to ensure you're spending within your 
      means and saving for the future. A popular budgeting method is the 50/30/20
       rule, where 50% of your income goes to needs, 30% to wants, and 20% to 
       savings and debt repayment.Budgeting is a fundamental skill for managing 
       your finances. It involves tracking your income and expenses to ensure you'
       re spending within your means and saving for the future. 
       A popular budgeting method is the 50/30/20 rule, where 50% of your 
       income goes to needs, 30% to wants, and 20% to savings and debt repayment.
       Budgeting is a fundamental skill for managing your finances. It involves t
       racking your income and expenses to ensure you're spending within your 
       means and saving for the future. A popular budgeting method is the 
       50/30/20 rule, where 50% of your income goes to needs, 30% to wants, 
       and 20% to savings and debt repayment.Budgeting is a fundamental skill 
       for managing your finances. It involves tracking your income and expenses 
       to ensure you're spending within your means and saving for the future. 
       A popular budgeting method is the 50/30/20 rule, where 50% of your income 
       goes to needs, 30% to wants, and 20% to savings and debt repayment.
       Budgeting is a fundamental skill for managing your finances. 
       It involves tracking your income and expenses to ensure you're spending 
       within your means and saving for the future. A popular budgeting method is 
       the 50/30/20 rule, where 50% of your income goes to needs, 30% to wants, 
       and 20% to savings and debt repayment.Budgeting is a fundamental skill 
    `;
    const takeaways = [
      "Budgeting helps you track your income and expenses.",
      "The 50/30/20 rule is a simple way to allocate your income.",
      "Saving 20% of your income can help you build financial security.",
    ];

    setLearningPassage(passage);
    setKeyTakeaways(takeaways);
  };

  const handleQuizSubmit = (answer) => {
    setQuizAnswer(answer);
    setQuizFeedback(
      answer === "B"
        ? "Correct! The 50/30/20 rule is a budgeting rule."
        : "Incorrect. The 50/30/20 rule is a budgeting rule."
    );
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#d1fae5,_#ffffff_60%,_#d1fae5)] text-gray-900">
      <Navbar_User />
      <div className="max-w-3xl mx-auto p-6 space-y-6">
        <h1 className="text-3xl font-bold text-center">
          Financial Literacy Learning
        </h1>

        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-semibold">Today's Topic: Budgeting</h2>
          <p className="mt-2 text-gray-700">
            {learningPassage ||
              "Click the button to generate a learning passage."}
          </p>
          <button
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            onClick={generateLearningContent}
          >
            Generate New Topic
          </button>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h3 className="text-xl font-semibold">Key Takeaways</h3>
          <ul className="list-disc pl-6 mt-2 text-gray-700">
            {keyTakeaways.map((takeaway, index) => (
              <li key={index}>{takeaway}</li>
            ))}
          </ul>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h3 className="text-xl font-semibold">Test Your Knowledge</h3>
          <p className="mt-2">What is the 50/30/20 rule?</p>
          <div className="flex flex-col gap-2 mt-4">
            <button
              className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
              onClick={() => handleQuizSubmit("A")}
            >
              A) A diet plan
            </button>
            <button
              className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
              onClick={() => handleQuizSubmit("B")}
            >
              B) A budgeting rule
            </button>
            <button
              className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
              onClick={() => handleQuizSubmit("C")}
            >
              C) A savings account type
            </button>
          </div>
          {quizFeedback && (
            <p className="mt-2 font-semibold text-blue-600">{quizFeedback}</p>
          )}
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
          <h3 className="text-xl font-semibold">Budget Allocation Example</h3>
          <p className="text-gray-500">
            [Visual aid like a pie chart or infographic will go here.]
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
          <h3 className="text-xl font-semibold">Your Progress</h3>
          <p className="text-gray-700">
            You've completed 3 out of 5 lessons on budgeting.
          </p>
        </div>

        <div className="flex justify-center">
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
            Explore More Topics
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Learning;
