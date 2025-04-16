import { Link } from "react-router-dom";

function Purpose() {
  return (
    <div className="relative flex flex-col md:flex-row w-full h-full justify-center items-center py-16 mx-auto px-4 bg-green-500">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h2 className="font-bold font-sora text-3xl text-white py-4">
            Our Purpose
          </h2>
          <p className="text-white text-lg font-sora font-medium">
            Learning personal finance with FinFit is{" "}
            <span className="font-bold">fun, interactive, and effective</span>!
            Our gamified approach turns financial literacy into engaging
            challenges, helping you build smart money habits effortlessly. With
            quick, bite-sized lessons, you’ll earn rewards, level up, and gain
            real-world financial skills that empower you for the future.
          </p>
          <Link to="/login">
            <button className="font-sora mt-4 mx-2 px-4 py-4 bg-white text-green-500 shadow-md hover:bg-green-400 hover:text-white transition-all duration-300 ease-in-out rounded-md inline-block w-auto max-w-fit">
              Get Started
            </button>
          </Link>
        </div>

        <img
          src="/podium.png"
          alt="podium"
          className="w-[400px] mx-auto my-4"
        />
      </div>
      <div className="absolute -bottom-1 left-0 w-full">
        <svg
          className="block w-full h-16"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Purpose;
