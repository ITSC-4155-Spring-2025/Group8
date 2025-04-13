import { useState } from 'react';
import UserNavBar from "../components/UserNavBar";
import Footer from '../components/Footer';
import Reward from '../components/Reward';

export function User() {
  const [username, setUsername] = useState('FinanceBro123');

  const rewards = [
    {
      id: 1,
      imageSrc: '/gamingchair.webp',
      title: 'SecretLab Gaming Chair',
      buttonText: 'Redeem',
      points: '500',
    },
    {
      id: 2,
      imageSrc: '/ps5.jpg',
      title: 'Sony PlayStation 5',
      buttonText: 'Redeem',
      points: '1000',
    },
    {
      id: 3,
      imageSrc: '/iphone16promax.jpg',
      title: 'iPhone 16 Pro Max',
      buttonText: 'Redeem',
      points: '2500',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
    
      <UserNavBar />

    
      <div className="px-6 mt-12 mb-6 max-w-4xl mx-auto w-full">
        <div className="bg-white shadow-xl rounded-2xl p-6 flex items-start">
          
          <img
            src="/my-image.png"
            alt="ProfilePic"
            className="w-[6.3rem] h-[6.2rem] object-cover rounded-full"
          />
          <div className="ml-4 flex-1">
            <h2 className="text-2xl font-semibold text-gray-800">{username}</h2>
            <p className="text-gray-500">Charlotte, NC</p>
            <p className="text-gray-700 mt-2">
              College student learning finance using FinFit.
            </p>
          </div>

         
          <div className="ml-auto text-right">
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full mb-4">
              Edit Profile
            </button>
            <div className="bg-gray-100 rounded-xl p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Your points
              </h2>
              <p className="font-bold text-purple-500 text-center text-2xl">150</p>
            </div>
          </div>
        </div>
      </div>

      
      
      

      
      <div className="w-full bg-white-100 py-6 mt-8">
        <h1 className="text-4xl font-bold text-center text-green-600 mb-14">Your Available Rewards</h1>
        <div className="flex flex-wrap justify-center mb-10 gap-6 px-4">
          {rewards.map(reward => (
            <Reward
              key={reward.id}
              imageSrc={reward.imageSrc}
              title={reward.title}
              buttonText={reward.buttonText}
              points={reward.points}
            />
          ))}
        </div>
      </div>

    
      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
}
