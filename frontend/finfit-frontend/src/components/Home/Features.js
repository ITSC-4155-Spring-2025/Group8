import React from 'react';
import { Link } from 'react-router-dom'

function Features(){
    return (
        <div className=" py-10">
            <div className="flex flex-col w-full h-full justify-center text-center py-4">
                <h1 className="font-sora font-bold text-4xl py-3">Why Choose <span className="text-green-600">FinFit</span>?</h1>
                <p className="text-lg text-gray-600 font-sora">Gamify your financial learning and build smarter money habits.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">

                <div className="m-3 p-6 bg-green-400 rounded-lg shadow-md flex flex-col items-center">
                    <img src="/gamified.png" className="w-56" alt="Gamified Learning"/>
                    <h1 className="font-sora font-bold text-2xl text-white">Gamified Learning</h1>
                    <p className="text-white font-sora py-4">Turn financial literacy into engaging challenges with our gamified approach.</p>
                </div>

                <div className="m-3 p-6 bg-green-400 rounded-lg shadow-md flex flex-col items-center">
                    <img src="/leaderboard.png" className="w-56 p-6" alt="Compete on LeaderBoards"/>
                    <h1 className="font-sora font-bold text-2xl text-white">Compete on Leaderboards</h1>
                    <p className="text-white font-sora py-4">Compete with friends and family on leaderboards to see who can build the best money habits.</p>
                </div>

                <div className="m-3 p-6 bg-green-400 rounded-lg shadow-md flex flex-col items-center">
                    <img src="/easy.png" className="w-56" alt="Easy to Use"/>
                    <h1 className="font-sora font-bold text-2xl text-white">Easy to Use</h1>
                    <p className="text-white font-sora py-4">Our platform is designed to be easy to use and accessible to everyone.</p>
                </div>
            
            </div>

            <div className="flex justify-center">
            <Link to="/login"><button className="font-sora mt-4 mx-2 px-4 py-3 bg-green-600 text-white shadow-md hover:bg-white hover:text-green-600 transition-all duration-300 ease-in-out rounded-2xl inline-block w-auto max-w-fit">
                    Start Learning
                </button>
            </Link>
            </div>
        </div>
    );
}

export default Features;