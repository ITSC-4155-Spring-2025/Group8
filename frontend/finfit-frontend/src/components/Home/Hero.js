import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

function Hero() {
  const [text] = useTypewriter({
    words: [
      "Learn Personal Finance",
      "Master Your Money",
      "Plan for a Secure Future",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="relative w-full h-screen overflow-hidden z-0">
      <div className="absolute -top-28 -left-28 w-[400px] h-[400px] bg-gradient-to-br from-green-400 to-green-100 rounded-full filter blur-3xl opacity-50 z-[-1]"></div>

      <div className="flex flex-col md:flex-row h-full justify-center items-center max-w-[1400px] mx-auto px-4">
        <div className="flex justify-center md:justify-end w-full md:w-1/2">
          <img
            src="/college.png"
            alt="college students"
            className="w-[400px]"
          />
        </div>

        <div className="flex flex-col justify-center text-center items-center pr-10 w-10/12">
          <h1 className="text-4xl font-bold text-black md:text-6xl sm:text-5xl md:py-3 font-sora">
            A Fun and Effective Way to
            <span className="text-green-600 min-w-[250px] inline-block text-center">
              {text}
            </span>
          </h1>
          <p className="text-lg mt-5 text-gray-900 font-medium font-sora">
            Learn how to master your money with FinFit
          </p>
          <Link to="/login">
            <button className="font-sora mt-4 mx-2 px-4 py-4 bg-green-600 text-white shadow-md hover:bg-lime-400 hover:text-white transition-all duration-300 ease-in-out rounded-md inline-block w-auto max-w-fit">
              Get Learning
            </button>
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 w-full">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z"
              className="fill-green-500"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Hero;
