
function Hero() {
  return (
    <div className="flex flex-row h-screen items-center w-full max-w-[1400px] mt-[-80px]">
        <div className=" flex justify-end w-1/2 ">
          <img src="/college.png" alt="college students" className="w-[400px]" />
        </div>

        <div className=" flex flex-col justify-center text-center w-1/2 items-center pr-10">
           <h1 className="text-4xl font-bold text-lime-600">Fun and Effective Way to Learn Personal Finance</h1>
           <p className="text-lg mt-5 text-gray-500 font-medium">Learn how to master your money with FinFit</p>
           <button className="mt-4 mx-2 px-4 py-4 font-semibold bg-lime-500 text-white shadow-md hover:bg-lime-400 hover:text-white transition-all duration-300 ease-in-out rounded-md inline-block w-auto max-w-fit">
              Get Learning
            </button>
        </div>
        
    </div>

  );
}

export default Hero;